/* ===== リアクション：文章をなぞって、スタンプかコメントを残す =====
   保存先：Supabase（1リアクション＝1行。取り消しても履歴として残す）
   名前は保存も表示もしない（匿名）。最初に反応した時点で、そのブラウザ用の匿名IDを発行する。 */
(() => {
  const STAMPS = [
    { id: "hit", e: "🔥", ja: "刺さる", en: "Hits" },
    { id: "aha", e: "💡", ja: "なるほど", en: "Aha" },
    { id: "use", e: "👍", ja: "いいね", en: "Good" },
    { id: "dig", e: "❤️", ja: "お気に入り", en: "Favorite" },
    { id: "q", e: "🤔", ja: "うーん", en: "Hmm" },
  ];
  const TX = {
    ja: { comment: "コメント", ph: "ひとこと残す（匿名）", send: "送る", tip: "気になった一文をなぞって、スタンプやコメントをどうぞ ✍︎", tipRO: "いまは見るだけモードです", count: (n) => `みんなのリアクション ${n} 件`, hide: "線をかくす", show: "線を出す", anon: "匿名", you: "あなた", undo: "取り消す", del: "削除", reply: "このコメントに続ける…", n: (n) => `${n} reactions`, offline: "リアクションを読み込めませんでした", full: "保存できませんでした。少し時間をおいてお試しください",
      likeQ: "このセッション、<br>気に入りましたか？", liked: "ありがとうございます！", likeN: (n, me) => n ? (me ? (n > 1 ? `あなたと他 <b>${n - 1}</b> 人が気に入っています` : "あなたが最初のハートです") : `<b>${n}</b> 人が気に入っています`) : "まだハートはありません。最初のひとりに。", likeRO: "閲覧のみのため、ハートは押せません", likeBtn: "気に入った", unlike: "取り消す" },
    en: { comment: "Comment", ph: "Leave a note (anonymous)", send: "Send", tip: "Select any line you like to drop a stamp or a note ✍︎", tipRO: "You're in view-only mode", count: (n) => `${n} reactions so far`, hide: "Hide lines", show: "Show lines", anon: "Anonymous", you: "You", undo: "Undo", del: "Delete", reply: "Add a note…", n: (n) => `${n} reactions`, offline: "Reactions can't be loaded", full: "Couldn't save. Please try again in a moment",
      likeQ: "Did you like<br>this session?", liked: "Thanks for the love!", likeN: (n, me) => n ? (me ? (n > 1 ? `You and <b>${n - 1}</b> others liked this` : "You're the first heart") : `<b>${n}</b> people liked this`) : "No hearts yet. Be the first.", likeRO: "View only: you can't add a heart", likeBtn: "I liked it", unlike: "Undo" },
  };
  const tx = () => TX[LANG] ?? TX.ja;
  const stampLabel = (id) => STAMPS.find((x) => x.id === id)?.e ?? "";
  const stampBtn = (s, cls = "") => `<button type="button" class="rx-stamp ${cls}" data-stamp="${s.id}" title="${s[LANG] ?? s.ja}" aria-label="${s[LANG] ?? s.ja}">${s.e}</button>`;
  const rel = (ts) => {
    const m = Math.round((Date.now() - ts) / 60000);
    if (LANG === "en") return m < 1 ? "just now" : m < 60 ? `${m}m ago` : m < 1440 ? `${Math.round(m / 60)}h ago` : `${Math.round(m / 1440)}d ago`;
    return m < 1 ? "たった今" : m < 60 ? `${m}分前` : m < 1440 ? `${Math.round(m / 60)}時間前` : `${Math.round(m / 1440)}日前`;
  };

  /* ---------- 保存先 ---------- */
  const ME = "me";
  const CFG = window.RX_CONFIG ?? {};
  const READY = !!(CFG.url && CFG.key);
  let CAN_WRITE = READY;
  const IS_OWNER = false;       // 他の人の投稿の非表示は Supabase の管理画面で行う
  let ALL = new Map();          // 持ち主（自分は "me"、他の人は行ごとの別キー）→ items[]
  let LIKES = new Map();        // 同上 → 気に入ったセッションID[]
  let writing = Promise.resolve(), pending = 0;
  let loaded = false, failed = false;

  /* ---------- Supabase（ライブラリなしで REST を直接呼ぶ） ---------- */
  const uuid = () => crypto.randomUUID?.() ?? "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
  const SKEY = "rx-session";
  let session = (() => { try { return JSON.parse(localStorage.getItem(SKEY)); } catch { return null; } })();
  const keepSession = (j) => {
    session = { access_token: j.access_token, refresh_token: j.refresh_token, expires_at: Date.now() + (j.expires_in ?? 3600) * 1000 };
    try { localStorage.setItem(SKEY, JSON.stringify(session)); } catch {}
    return session;
  };
  async function authCall(path, body) {
    const r = await fetch(CFG.url + "/auth/v1/" + path, { method: "POST", headers: { apikey: CFG.key, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (!r.ok) throw Object.assign(new Error("auth " + r.status), { status: r.status });
    return keepSession(await r.json());
  }
  // create=false（閲覧だけ）のときは匿名IDを新しく作らない
  async function token(create) {
    if (session && session.expires_at - Date.now() > 60000) return session.access_token;
    if (session?.refresh_token) {
      try { return (await authCall("token?grant_type=refresh_token", { refresh_token: session.refresh_token })).access_token; }
      catch (e) { if (e.status === undefined || e.status >= 500) throw e; session = null; try { localStorage.removeItem(SKEY); } catch {} }
    }
    return create ? (await authCall("signup", { data: {} })).access_token : null;
  }
  async function rpc(name, args, create) {
    const t = await token(create);
    const bearer = t ?? (CFG.key.startsWith("eyJ") ? CFG.key : null);
    const r = await fetch(`${CFG.url}/rest/v1/rpc/${name}`, { method: "POST", headers: { apikey: CFG.key, "Content-Type": "application/json", ...(bearer ? { Authorization: "Bearer " + bearer } : {}) }, body: JSON.stringify(args) });
    if (!r.ok) throw new Error(name + " " + r.status);
    return r.status === 204 ? null : r.json();
  }

  async function load() {
    if (pending) return;
    const rows = [];
    for (;;) {
      const page = await rpc("rx_list", { p_offset: rows.length, p_limit: 1000 }, false);
      rows.push(...page);
      if (page.length < 1000) break;
    }
    if (pending) return;       // 読み込み中に書き込みが始まったら、古い結果で上書きしない
    const items = new Map(), likes = new Map();
    const push = (m, k, v) => (m.get(k) ?? m.set(k, []).get(k)).push(v);
    rows.forEach((x) => {
      const who = x.mine ? ME : "o:" + x.id;
      if (x.kind === "like") push(likes, who, x.sid);
      else push(items, who, { id: x.id, sid: x.sid, lang: x.lang, pk: x.pk, off: x.off, q: x.q, stamp: x.stamp, text: x.text, ts: x.ts });
    });
    ALL = items; LIKES = likes;
    loaded = true; failed = false;
    refresh();
  }
  async function poll() {
    if (document.hidden) return;
    try { await load(); } catch { if (!loaded) { failed = true; refresh(); } }
  }
  function connect() {
    if (!READY) { failed = true; refresh(); return; }
    poll();
    setInterval(poll, 30000);   // 他の人のリアクションを30秒ごとに反映
    document.addEventListener("visibilitychange", poll);
  }

  // 自分の分を先に画面へ反映し、差分だけを順番に保存する
  function saveMine(mutate, mutateLikes = (l) => l) {
    if (!CAN_WRITE) return;
    pending++;
    writing = writing.then(async () => {
      const before = ALL.get(ME) ?? [], beforeLikes = LIKES.get(ME) ?? [];
      const next = mutate(before.map((x) => ({ ...x }))), likes = mutateLikes([...beforeLikes]);
      ALL.set(ME, next); LIKES.set(ME, likes); refresh();
      try {
        for (const it of next) if (!before.some((x) => x.id === it.id)) await rpc("rx_add", { p_id: it.id, p_session: it.sid, p_lang: it.lang, p_pk: it.pk, p_off: it.off, p_quote: it.q, p_stamp: it.stamp, p_text: it.text }, true);
        for (const it of before) if (!next.some((x) => x.id === it.id)) await rpc("rx_remove", { p_id: it.id }, true);
        for (const sid of likes) if (!beforeLikes.includes(sid)) await rpc("rx_set_like", { p_session: sid, p_on: true }, true);
        for (const sid of beforeLikes) if (!likes.includes(sid)) await rpc("rx_set_like", { p_session: sid, p_on: false }, true);
      } catch {
        // 保存できなかった分は画面からも戻す（残っているように見せない）
        ALL.set(ME, before); LIKES.set(ME, beforeLikes); dockNote(tx().full); refresh();
      }
      pending--;
      if (!pending) poll();
    });
  }
  function removeOther(uid, id) {
    if (uid === ME) saveMine((m) => m.filter((x) => x.id !== id));
  }

  /* ---------- 文章の位置（アンカー） ---------- */
  const SEL = ".art-r .quote p, .art-r .lede p, .art-r .acc .body p, .art-r .acc .body li, .art-r .todo p";
  let SID = null;
  const blocks = () => [...document.querySelectorAll(SEL)].filter((el) => !el.querySelector("p, li"));
  const itemsHere = () => [...ALL.entries()].flatMap(([uid, arr]) => arr.filter((x) => x.sid === SID && (x.lang ?? "ja") === LANG).map((x) => ({ ...x, uid })));

  function offsetIn(el, node, off) {
    const r = document.createRange(); r.selectNodeContents(el); r.setEnd(node, off);
    return r.toString().length;
  }
  function locate(it, els) {
    const el = els[it.pk];
    if (el && el.textContent.substr(it.off, it.q.length) === it.q) return { el, start: it.off };
    if (el) { const i = el.textContent.indexOf(it.q); if (i >= 0) return { el, start: i }; }
    for (const e of els) { const i = e.textContent.indexOf(it.q); if (i >= 0) return { el: e, start: i }; }
    return null;
  }
  // el の文字位置 start〜end を <span class="rx"> で包む（太字やハイライトをまたいでもよい）
  function wrap(el, start, end, key, n) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const parts = []; let pos = 0, node;
    while ((node = walker.nextNode())) {
      const len = node.data.length, a = Math.max(start, pos), b = Math.min(end, pos + len);
      if (a < b) parts.push([node, a - pos, b - pos]);
      pos += len; if (pos >= end) break;
    }
    parts.forEach(([t, a, b]) => {
      if (b < t.data.length) t.splitText(b);
      const mid = a > 0 ? t.splitText(a) : t;
      const s = document.createElement("span");
      s.className = "rx"; s.dataset.k = key; s.dataset.n = Math.min(n, 4);
      mid.parentNode.insertBefore(s, mid); s.appendChild(mid);
    });
  }
  function unwrapAll() {
    document.querySelectorAll("span.rx").forEach((s) => { const p = s.parentNode; while (s.firstChild) p.insertBefore(s.firstChild, s); p.removeChild(s); p.normalize(); });
  }

  let GROUPS = new Map();      // key → {q, items[]}
  let popKey = null;
  function paint() {
    unwrapAll(); GROUPS = new Map();
    if (!SID) return;
    const els = blocks();
    itemsHere().forEach((it) => {
      const loc = locate(it, els); if (!loc) return;
      const key = `${els.indexOf(loc.el)}:${loc.start}:${it.q.length}`;
      if (!GROUPS.has(key)) GROUPS.set(key, { q: it.q, el: loc.el, start: loc.start, items: [] });
      GROUPS.get(key).items.push(it);
    });
    // 長い範囲を先に包み、短い範囲を内側にする
    [...GROUPS.entries()].sort((a, b) => b[1].q.length - a[1].q.length).forEach(([key, g]) => wrap(g.el, g.start, g.start + g.q.length, key, g.items.length));
    if (popKey) { document.querySelectorAll(`.rx[data-k="${popKey}"]`).forEach((s) => s.classList.add("pop")); popKey = null; }
    if (CARD && CARD.key) { const g = GROUPS.get(CARD.key); g ? renderCard(CARD.key) : closeCard(); }
  }

  /* ---------- インクバー（選択時） ---------- */
  let BAR = null, PENDING = null;
  const touch = matchMedia("(hover: none)").matches;
  function closeBar() { BAR?.remove(); BAR = null; PENDING = null; }
  function readSelection() {
    const sel = getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return null;
    const r = sel.getRangeAt(0);
    const startEl = (r.startContainer.nodeType === 1 ? r.startContainer : r.startContainer.parentElement)?.closest(SEL);
    if (!startEl) return null;
    const els = blocks(), pk = els.indexOf(startEl); if (pk < 0) return null;
    const start = offsetIn(startEl, r.startContainer, r.startOffset);
    const endEl = (r.endContainer.nodeType === 1 ? r.endContainer : r.endContainer.parentElement)?.closest(SEL);
    let end = endEl === startEl ? offsetIn(startEl, r.endContainer, r.endOffset) : startEl.textContent.length;
    let text = startEl.textContent.slice(start, end);
    const lead = text.length - text.trimStart().length; text = text.trim();
    if (text.length < 2) return null;
    if (text.length > 400) text = text.slice(0, 400);
    return { pk, off: start + lead, q: text, rect: r.getBoundingClientRect() };
  }
  function openBar(s) {
    closeBar(); PENDING = s;
    BAR = document.createElement("div");
    BAR.className = "rx-bar" + (touch ? " below" : "");
    BAR.innerHTML = STAMPS.map((x) => stampBtn(x)).join("") + `<span class="sep"></span><button type="button" class="cmt">✎ ${tx().comment}</button>`;
    place(BAR, s.rect, touch);
    document.body.appendChild(BAR);
    BAR.addEventListener("mousedown", (e) => { if (!e.target.closest?.("input")) e.preventDefault(); });
    BAR.addEventListener("click", (e) => {
      const st = e.target.closest?.("[data-stamp]");
      if (st) { add({ stamp: st.dataset.stamp }); return; }
      if (e.target.closest?.(".cmt")) {
        BAR.innerHTML = `<form><input maxlength="280" placeholder="${tx().ph}" aria-label="${tx().comment}"><button>${tx().send}</button></form>`;
        const f = BAR.querySelector("form"), i = f.querySelector("input");
        i.focus();
        f.addEventListener("submit", (ev) => { ev.preventDefault(); const v = i.value.trim(); if (v) add({ text: v }); });
      }
    });
  }
  function place(node, rect, below) {
    node.style.left = Math.min(Math.max(rect.left + rect.width / 2, 170), innerWidth - 170) + scrollX + "px";
    node.style.top = (below ? rect.bottom : rect.top) + scrollY + "px";
  }
  function add({ stamp = null, text = null }, target = PENDING) {
    if (!target || !CAN_WRITE) return;
    const it = { id: uuid(), sid: SID, lang: LANG, pk: target.pk, off: target.off, q: target.q, stamp, text, ts: Date.now() };
    if (stamp && target.rect) thump(stamp, target.rect);
    const els = blocks(); const loc = locate(it, els);
    if (loc) popKey = `${els.indexOf(loc.el)}:${loc.start}:${it.q.length}`;
    saveMine((m) => [...m, it]);
    closeBar(); getSelection()?.removeAllRanges();
  }
  function thump(stamp, rect) {
    const t = document.createElement("div");
    t.className = "rx-thump"; t.innerHTML = stampLabel(stamp);
    t.style.left = rect.right + scrollX - 10 + "px"; t.style.top = rect.top + scrollY + rect.height / 2 + "px";
    document.body.appendChild(t); setTimeout(() => t.remove(), 950);
  }

  /* ---------- ノートカード（ホバー／タップ） ---------- */
  let CARD = null, hideT = null;
  function closeCard() { CARD?.node.remove(); CARD = null; document.querySelectorAll(".rx.on").forEach((s) => s.classList.remove("on")); }
  function renderCard(key) {
    const g = GROUPS.get(key); if (!g) return closeCard();
    const node = CARD?.key === key ? CARD.node : document.createElement("div");
    node.className = "rx-card";
    const counts = STAMPS.map((s) => ({ s, n: g.items.filter((x) => x.stamp === s.id).length, mine: g.items.some((x) => x.stamp === s.id && x.uid === ME) })).filter((x) => x.n);
    const notes = g.items.filter((x) => x.text).sort((a, b) => a.ts - b.ts);
    node.innerHTML = `
      <p class="q"></p>
      ${counts.length ? `<div class="stamps">${counts.map((c) => `<span class="st">${stampBtn(c.s, "lt" + (c.mine ? " mine" : ""))}<b>${c.n}</b></span>`).join("")}</div>` : ""}
      ${notes.length ? `<ul>${notes.map((x) => `<li><span class="t"></span><small><span class="${x.uid === ME ? "mine-tag" : ""}">${x.uid === ME ? tx().you : tx().anon} · ${rel(x.ts)}</span>${x.uid === ME ? `<button type="button" class="del" data-del="${x.id}" data-uid="${x.uid}">${tx().undo}</button>` : IS_OWNER ? `<button type="button" class="del" data-del="${x.id}" data-uid="${x.uid}">${tx().del}</button>` : ""}</small></li>`).join("")}</ul>` : ""}
      ${CAN_WRITE ? `<div class="add">${STAMPS.map((s) => stampBtn(s, "lt")).join("")}</div><form><input maxlength="280" placeholder="${tx().reply}" aria-label="${tx().comment}"><button>${tx().send}</button></form>` : ""}`;
    node.querySelector(".q").textContent = g.q;
    node.querySelectorAll("li .t").forEach((t, i) => (t.textContent = notes[i].text));
    if (CARD?.key !== key) {
      closeCard();
      const r = document.querySelector(`.rx[data-k="${key}"]`)?.getBoundingClientRect(); if (!r) return;
      document.body.appendChild(node);
      const w = node.offsetWidth;
      node.style.left = Math.min(Math.max(r.left + scrollX, 16 + scrollX), innerWidth - w - 16 + scrollX) + "px";
      const below = r.bottom + node.offsetHeight + 12 < innerHeight || r.top < node.offsetHeight + 80;
      node.style.top = (below ? r.bottom + 8 : r.top - node.offsetHeight - 8) + scrollY + "px";
      CARD = { key, node };
      node.addEventListener("mouseenter", () => clearTimeout(hideT));
      node.addEventListener("mouseleave", () => { if (!node.contains(document.activeElement)) hideT = setTimeout(closeCard, 250); });
      node.addEventListener("click", onCardClick);
      node.addEventListener("submit", (e) => { e.preventDefault(); const v = node.querySelector("input").value.trim(); if (v) addTo(CARD.key, { text: v }); });
    }
    document.querySelectorAll(`.rx[data-k="${key}"]`).forEach((s) => s.classList.add("on"));
  }
  function onCardClick(e) {
    const d = e.target.closest?.("[data-del]");
    if (d) { removeOther(d.dataset.uid, d.dataset.del); return; }
    const st = e.target.closest?.("[data-stamp]");
    if (!st || !CAN_WRITE) return;
    const g = GROUPS.get(CARD.key);
    const mine = g.items.find((x) => x.stamp === st.dataset.stamp && x.uid === ME);
    if (mine) saveMine((m) => m.filter((x) => x.id !== mine.id));   // もう一度押すと取り消し
    else addTo(CARD.key, { stamp: st.dataset.stamp }, st.getBoundingClientRect());
  }
  function addTo(key, what, rect) {
    const g = GROUPS.get(key); if (!g) return;
    const els = blocks();
    add(what, { pk: els.indexOf(g.el), off: g.start, q: g.q, rect });
    const input = CARD?.node.querySelector("input"); if (input) input.value = "";
  }

  /* ---------- 右下のチップ ---------- */
  let DOCK = null, hidden = false, note = "";
  try { hidden = localStorage.getItem("rx-hidden") === "1"; } catch {}
  function dockNote(t) { note = t; refreshDock(); setTimeout(() => { note = ""; refreshDock(); }, 5000); }
  function refreshDock() {
    if (!SID) { DOCK?.remove(); DOCK = null; return; }
    if (!DOCK) {
      DOCK = document.createElement("div"); DOCK.className = "rx-dock";
      DOCK.addEventListener("click", (e) => {
        if (!e.target.closest?.("button")) return;
        hidden = !hidden; try { localStorage.setItem("rx-hidden", hidden ? "1" : "0"); } catch {}
        document.body.classList.toggle("rx-off", hidden); refreshDock();
      });
    }
    // ヘッダーの言語切り替えの左に、控えめに置く（ヘッダーは画面遷移で作り直されるので毎回差し込む）
    const slot = document.querySelector(".site-header .hd-r");
    if (slot && DOCK.parentNode !== slot) slot.prepend(DOCK);
    const n = itemsHere().length;
    const msg = note || (failed && !loaded ? tx().offline : !CAN_WRITE && loaded ? tx().tipRO : n ? tx().count(n) : tx().tip);
    DOCK.innerHTML = `<span class="tip">${msg}</span>${n ? `<button type="button">${hidden ? tx().show : tx().hide}</button>` : ""}`;
    document.body.classList.toggle("rx-off", hidden);
  }

  /* ---------- セッションへのハート ---------- */
  const likeCount = (sid) => [...LIKES.values()].filter((l) => l.includes(sid)).length;
  let justLiked = false;
  function paintLike() {
    const box = document.getElementById("rxLike"); if (!box || !SID) return;
    const n = likeCount(SID), me = (LIKES.get(ME) ?? []).includes(SID);
    box.classList.toggle("is-on", me);
    box.innerHTML = `
      <span class="label">Like</span>
      <div class="lk">
        <button type="button" class="lk-heart" aria-pressed="${me}" ${CAN_WRITE ? "" : "disabled"} aria-label="${tx().likeBtn}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2.1 0 3.6 1.2 4.4 2.6.8-1.4 2.3-2.6 4.4-2.6 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21z"/></svg>
        </button>
        <div class="lk-t">
          <h2>${me && justLiked ? tx().liked : tx().likeQ}</h2>
          ${!CAN_WRITE && loaded ? `<p>${tx().likeRO}</p>` : ""}
          <p class="lk-n">${tx().likeN(n, me)}${me ? ` · <button type="button" class="lk-undo">${tx().unlike}</button>` : ""}</p>
        </div>
      </div>`;
  }
  function burst(btn) {
    const r = btn.getBoundingClientRect();
    for (let i = 0; i < 12; i++) {
      const h = document.createElement("span");
      h.className = "lk-p"; h.textContent = "♥";
      const a = (Math.PI * 2 * i) / 12 + Math.random() * .4, d = 46 + Math.random() * 40;
      h.style.left = r.left + r.width / 2 + scrollX + "px"; h.style.top = r.top + r.height / 2 + scrollY + "px";
      h.style.setProperty("--dx", Math.cos(a) * d + "px"); h.style.setProperty("--dy", Math.sin(a) * d - 20 + "px");
      h.style.fontSize = 10 + Math.random() * 12 + "px";
      document.body.appendChild(h); setTimeout(() => h.remove(), 900);
    }
  }
  document.addEventListener("click", (e) => {
    const heart = e.target.closest?.("#rxLike .lk-heart, #rxLike .lk-undo"); if (!heart || !CAN_WRITE || !SID) return;
    const on = (LIKES.get(ME) ?? []).includes(SID);
    if (!on) { justLiked = true; const b = document.querySelector("#rxLike .lk-heart"); b && burst(b); }
    else justLiked = false;
    saveMine((m) => m, (l) => on ? l.filter((x) => x !== SID) : [...l, SID]);
  });

  /* ---------- ホーム：カードに件数 ---------- */
  function paintCards() {
    document.querySelectorAll(".card").forEach((c) => {
      const sid = (c.getAttribute("href") || "").split("/").pop();
      const n = [...ALL.values()].reduce((a, arr) => a + arr.filter((x) => x.sid === sid).length, 0), h = likeCount(sid);
      let b = c.querySelector(".rx-n");
      if (!n && !h) { b?.remove(); return; }
      if (!b) { b = document.createElement("span"); b.className = "rx-n"; (c.querySelector(".card-meta") ?? c).after(b); }
      b.textContent = [h ? `♥ ${h}` : "", n ? tx().n(n) : ""].filter(Boolean).join("  ·  ");
    });
  }

  function refresh() { if (SID) { paint(); paintLike(); } else paintCards(); refreshDock(); }

  /* ---------- イベント ---------- */
  document.getElementById("app").addEventListener("mounted", (e) => {
    closeBar(); closeCard();
    SID = e.detail.session?.id ?? null; justLiked = false;
    refresh();
  });
  let selT = null;
  const onSel = () => { clearTimeout(selT); selT = setTimeout(() => { if (!SID || !CAN_WRITE) return; if (BAR?.contains(document.activeElement)) return; const s = readSelection(); s ? openBar(s) : closeBar(); }, touch ? 450 : 10); };
  document.addEventListener("mouseup", (e) => { if (!BAR?.contains(e.target) && !CARD?.node.contains(e.target)) onSel(); });
  document.addEventListener("selectionchange", () => { if (touch) onSel(); });
  document.addEventListener("keyup", (e) => { if (e.key === "Escape") { closeBar(); closeCard(); } else if (e.shiftKey) onSel(); });
  document.addEventListener("mousedown", (e) => {
    if (BAR && !BAR.contains(e.target)) closeBar();
    if (CARD && !CARD.node.contains(e.target) && !e.target.closest?.(".rx")) closeCard();
  });
  // ホバーでカードを開く（タッチ端末はタップ）
  document.addEventListener("mouseover", (e) => {
    const s = e.target.closest?.(".rx"); if (!s || touch || hidden) return;
    if (getSelection()?.isCollapsed === false) return;
    clearTimeout(hideT); renderCard(s.dataset.k);
  });
  document.addEventListener("mouseout", (e) => {
    const s = e.target.closest?.(".rx"); if (!s || touch) return;
    if (CARD && !CARD.node.contains(document.activeElement)) hideT = setTimeout(closeCard, 300);
  });
  document.addEventListener("click", (e) => {
    const s = e.target.closest?.(".rx"); if (!s || hidden) return;
    if (getSelection()?.isCollapsed === false) return;
    if (touch || !CARD) renderCard(s.dataset.k);
  });

  connect();
})();
