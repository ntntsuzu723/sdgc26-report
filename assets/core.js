/* 3案共通のロジック：アーチギャラリー / ライトボックス / ルーター / スクロール演出 */
const D = window.REPORT;
D.sessions.forEach((s, i) => { s.no = i + 1; s.cover = s.cover ?? s.photos[0]; });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = (n) => String(n).padStart(2, "0");
const ARROW = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const sessionHref = (s) => `#/s/${s.id}`;

/* ===== 言語切り替え（日本語 / English） ===== */
let LANG = (() => { try { return localStorage.getItem("lang"); } catch { return null; } })() === "en" ? "en" : "ja";
const UI = {
  ja: {
    report: "聴講レポート", readSessions: "セッションを読む", viewSession: "セッションを見る →",
    sessionsCount: (n) => `聴講した${n}のセッション`,
    highlightsCount: (n) => `持ち帰りたい${n}のインサイト`,
    highlightsNote: "カーソルを動かすとカードが動き、触れると裏返って詳細が見えます。クリックでレポートの該当箇所へ。",
    readInReport: "レポートで読む",
    overview: "Overview — 概要", points: "Points — ポイント", insights: "Insights — チームへの示唆",
    stat: ["聴講したセッション数", "参加日数", "撮影したスライド・会場写真", "チームへ持ち帰るインサイト"],
    gallery: "写真ギャラリー（ドラッグで回転）", prev: "前へ", next: "次へ", close: "閉じる",
  },
  en: {
    report: "Conference Report", readSessions: "Read the sessions", viewSession: "View session →",
    sessionsCount: (n) => `${n} sessions we attended`,
    highlightsCount: (n) => `${n} insights to bring home`,
    highlightsNote: "Move your cursor to shuffle the deck. Hover a card to flip it for the details; click to jump to that part of the report.",
    readInReport: "Read in report",
    overview: "Overview", points: "Key points", insights: "Insights for our team",
    stat: ["Sessions attended", "Conference days", "Slides & venue photos", "Insights to bring home"],
    gallery: "Photo gallery (drag to rotate)", prev: "Previous", next: "Next", close: "Close",
  },
};
const T = (k) => UI[LANG][k] ?? UI.ja[k];
// 項目を現在の言語で取得。英語版は各データの en: { ... } に書く（無ければ日本語を表示）
const L = (o, k) => (LANG === "en" && o.en?.[k] != null ? o.en[k] : o[k]);
// ポイントは写真などを日本語版から引き継ぎ、文章だけ英語版で上書き
const localPoints = (s) => s.points.map((p, i) => {
  const e = LANG === "en" ? s.en?.points?.[i] : null;
  if (!e) return p;
  // blocks の英語版は文字列の配列（写真・箇条書きの配置は日本語版を引き継ぐ）
  const blocks = p.blocks?.map((b, j) => {
    const eb = e.blocks?.[j];
    return eb == null ? b : typeof eb === "string" ? { ...b, text: eb } : { ...b, ...eb };
  });
  return { ...p, ...e, ...(blocks ? { blocks } : {}) };
});
let rerender = () => {};
function setLang(l) {
  const y = scrollY;
  LANG = l;
  try { localStorage.setItem("lang", l); } catch {}
  rerender();
  scrollTo({ top: y, behavior: "instant" });
}
document.documentElement.lang = LANG;
// **太字** → 太字 / ==文字== → 黄色マーカー（重要箇所）
const rich = (v) => esc(v).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/==(.+?)==/g, '<mark class="hl">$1</mark>')
  .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a class="ext" href="$2" target="_blank" rel="noopener">$1<span aria-hidden="true">↗</span></a>');
const paras = (v) => String(v ?? "").split(/\n\s*\n/).map((t) => `<p>${rich(t)}</p>`).join("");
const img = (src, cls = "ph", alt = "") => `<div class="${cls}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></div>`;

// ページ遷移時に解除する処理
const CLEAN = [];
const onScroll = (fn) => { addEventListener("scroll", fn, { passive: true }); fn(); CLEAN.push(() => removeEventListener("scroll", fn)); };

/* トップのアーチ用：会場で撮った写真だけ（スライドのスクショは出さない） */
function heroPhotos() {
  const list = D.conference.heroPhotos?.length ? D.conference.heroPhotos : D.conference.venuePhotos ?? [];
  return list.map((src) => ({ src }));
}

/* ===== Arc gallery: ドラッグ / ホイール / 矢印キーで回転 ===== */
function Arc(root, items, o = {}) {
  let spacing = o.spacing ?? 13, wrap = false, span = 0;
  root.classList.add("arc");
  root.tabIndex = 0;
  root.setAttribute("aria-label", T("gallery"));
  root.innerHTML = "";
  const els = items.map((it) => {
    const f = document.createElement("figure");
    f.className = "arc-card";
    f.innerHTML = `<img src="${esc(it.src)}" alt="" draggable="false">`;
    root.append(f);
    return f;
  });
  const n = els.length;
  let off = 0, vel = 0, drag = false, lx = 0, moved = 0, R = 1000, hover = false, alive = true;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function size() {
    const w = root.clientWidth;
    const c = Math.max(120, Math.min(o.card ?? 240, w * (o.cardRatio ?? 0.22)));
    R = Math.max(c * 3.2, w * (o.radius ?? 0.8));
    root.style.setProperty("--card", c + "px");
    root.style.setProperty("--R", R + "px");
    // カード同士が重ならない角度を確保
    spacing = Math.max(o.spacing ?? 13, ((c * (o.gap ?? 1.12)) / R) * (180 / Math.PI));
    wrap = n * spacing >= 200; // 写真が多い時はループ、少ない時は端で止める
    span = ((n - 1) * spacing) / 2;
  }
  function draw() {
    els.forEach((el, i) => {
      let a = (i - (n - 1) / 2) * spacing + off;
      if (wrap) { const t = n * spacing; a = (((a + t / 2) % t) + t) % t - t / 2; }
      el.style.transform = `rotate(${a}deg)`;
      el.style.visibility = Math.abs(a) > 80 ? "hidden" : "";
      el.style.zIndex = 100 - Math.round(Math.abs(a));
    });
  }
  const clamp = () => { if (!wrap) off = Math.max(-span, Math.min(span, off)); };
  function tick() {
    if (!alive) return;
    if (!drag) {
      if (Math.abs(vel) > 0.002) { off += vel; vel *= 0.94; }
      else if (wrap && !hover && !reduce && o.auto !== 0) off -= o.auto ?? 0.015;
      clamp(); draw();
    }
    requestAnimationFrame(tick);
  }

  root.addEventListener("pointerdown", (e) => {
    drag = true; lx = e.clientX; moved = 0; vel = 0;
    root.setPointerCapture(e.pointerId); root.classList.add("grabbing");
  });
  root.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - lx; lx = e.clientX; moved += Math.abs(dx);
    const d = ((dx * 180) / (Math.PI * R)) * 1.4;
    off += d; vel = d; clamp(); draw();
  });
  const up = (e) => {
    if (!drag) return;
    drag = false; root.classList.remove("grabbing");
    if (moved < 6) {
      root.releasePointerCapture?.(e.pointerId);
      const card = document.elementFromPoint(e.clientX, e.clientY)?.closest(".arc-card");
      const i = els.indexOf(card);
      if (i > -1) o.onClick ? o.onClick(i) : lightbox(items, i);
    }
  };
  root.addEventListener("pointerup", up);
  root.addEventListener("pointercancel", () => { drag = false; root.classList.remove("grabbing"); });
  root.addEventListener("pointerenter", () => (hover = true));
  root.addEventListener("pointerleave", () => (hover = false));
  root.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) { e.preventDefault(); vel = -e.deltaX * 0.012; }
  }, { passive: false });
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") vel = 0.9; else if (e.key === "ArrowRight") vel = -0.9;
  });

  const ro = new ResizeObserver(() => { size(); draw(); });
  ro.observe(root);
  size(); draw(); tick();
  CLEAN.push(() => { alive = false; ro.disconnect(); });
}

/* ===== Lightbox ===== */
function lightbox(items, start = 0) {
  let i = start;
  const el = document.createElement("div");
  el.className = "lb";
  el.setAttribute("role", "dialog");
  const render = () => {
    const it = items[i];
    el.innerHTML = `
      <button class="lb-p" aria-label="${T("prev")}">←</button>
      <figure><img src="${esc(it.src)}" alt="">
        <figcaption><span>${pad(i + 1)} / ${pad(items.length)}</span>
        ${it.session ? `<span>${esc(it.session.title)}</span><a href="${sessionHref(it.session)}">${T("viewSession")}</a>` : ""}</figcaption>
      </figure>
      <button class="lb-n" aria-label="${T("next")}">→</button>
      <button class="lb-x" aria-label="${T("close")}">✕</button>`;
  };
  const close = () => { el.remove(); removeEventListener("keydown", key); };
  const step = (d) => { i = (i + d + items.length) % items.length; render(); };
  const key = (e) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
  el.addEventListener("click", (e) => {
    if (e.target.closest(".lb-p")) step(-1);
    else if (e.target.closest(".lb-n")) step(1);
    else if (e.target.closest(".lb-x, a") || e.target === el || e.target.tagName === "FIGURE") close();
  });
  addEventListener("keydown", key);
  render();
  document.body.append(el);
}

/* ===== Gray → ink テキスト（スクロール連動） ===== */
function reveal(el) {
  const txt = el.textContent.trim();
  const parts = /\s/.test(txt) ? txt.split(/(\s+)/) : [...txt];
  el.innerHTML = parts.map((p) => (/^\s+$/.test(p) ? p : `<span class="w">${esc(p)}</span>`)).join("");
  el.classList.add("reveal");
  const ws = $$(".w", el);
  onScroll(() => {
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.9 - r.top) / (r.height + innerHeight * 0.25)));
    const k = Math.round(p * ws.length);
    ws.forEach((w, j) => w.classList.toggle("on", j < k));
  });
}

/* ===== 画面に入ったらフェードイン ===== */
function observeFade(root = document) {
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
  $$(".fade-up, mark.hl", root).forEach((el) => io.observe(el));
  CLEAN.push(() => io.disconnect());
}

/* ===== リスト行ホバーで写真プレビュー ===== */
function hoverPreview(root) {
  const pv = document.createElement("div");
  pv.className = "hover-preview";
  pv.innerHTML = "<img alt=''>";
  document.body.append(pv);
  root.addEventListener("pointermove", (e) => {
    const row = e.target.closest("[data-cover]");
    if (!row || e.pointerType !== "mouse") return pv.classList.remove("on");
    pv.firstChild.src = row.dataset.cover;
    pv.style.left = e.clientX + "px"; pv.style.top = e.clientY + "px";
    pv.classList.add("on");
  });
  root.addEventListener("pointerleave", () => pv.classList.remove("on"));
  CLEAN.push(() => pv.remove());
}

/* ===== Header / Footer / Pager ===== */
function header() {
  const c = D.conference;
  return `<header class="site-header">
    <a class="brand" href="#/"><span class="dot"></span>[${esc(c.name)}]</a>
    <div class="tagline">${T("report")}<br>${esc(L(c, "reporter"))}</div>
    <nav class="nav"><a href="#/theme">Theme</a><a href="#/sessions">Sessions</a><a href="#/insights">Insights</a></nav>
    <div class="hd-r">
      <div class="lang" role="group" aria-label="Language">${["ja", "en"].map((l) => `<button data-lang="${l}" class="${l === LANG ? "on" : ""}" aria-pressed="${l === LANG}">${l.toUpperCase()}</button>`).join("")}</div>
      <a class="btn-dark" href="#/sessions">All Sessions</a>
    </div>
  </header>`;
}
function footer() {
  const c = D.conference;
  return `<footer class="site-footer"><span>${esc(c.name)} — ${T("report")}</span><span>${esc(c.dates)} / ${esc(L(c, "place"))}</span><span>${esc(L(c, "reporter"))}</span></footer>`;
}
function pager(s) {
  const L = D.sessions, i = L.indexOf(s);
  const p = L[(i - 1 + L.length) % L.length], n = L[(i + 1) % L.length];
  return `<nav class="pager">
    <a href="${sessionHref(p)}"><span class="num">← Prev [${pad(p.no)}]</span><span class="t">${esc(p.title)}</span></a>
    <a href="${sessionHref(n)}"><span class="num">Next [${pad(n.no)}] →</span><span class="t">${esc(n.title)}</span></a>
  </nav>`;
}

/* ===== Router: #/ (トップ) / #/<section> / #/s/<id> ===== */
function startRouter({ home, session }) {
  const app = $("#app");
  const go = () => {
    CLEAN.splice(0).forEach((f) => f());
    const h = location.hash.replace(/^#\/?/, "");
    const m = h.match(/^s\/([^/]+)(?:\/h(\d+))?$/);
    const s = m && D.sessions.find((x) => x.id === m[1]);
    if (s) {
      app.innerHTML = header() + session(s) + pager(s) + footer();
      document.title = `${s.title} — SDGC26 ${T("report")}`;
      scrollTo(0, 0);
      app.dispatchEvent(new CustomEvent("mounted", { detail: { session: s } }));
      if (m[2]) focusHighlight(+m[2]);
    } else {
      app.innerHTML = header() + home() + footer();
      document.title = `SDGC26 ${T("report")}`;
      app.dispatchEvent(new CustomEvent("mounted", { detail: {} }));
      const target = h && document.getElementById(h);
      target ? target.scrollIntoView() : scrollTo(0, 0);
    }
    observeFade(app);
  };
  addEventListener("hashchange", go);
  app.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (b && b.dataset.lang !== LANG) setLang(b.dataset.lang);
  });
  rerender = () => { document.documentElement.lang = LANG; go(); };
  go();
}

/* ===== インサイト（各セッションの learnings） ===== */
// カードの項目：見出し（表）・本文（裏）・移動先
const allLearnings = () => D.sessions.flatMap((s) => (s.learnings ?? []).map((l) => ({
  head: LANG === "en" && l.headEn ? l.headEn : l.head,
  t: LANG === "en" && l.en ? l.en : l.text,
  s,
  href: l.hl ? `${sessionHref(s)}/h${l.hl}` : sessionHref(s),
})));
// #/s/<id>/h<n> → n番目のハイライトへ移動し、目立たせる
function focusHighlight(n) {
  const el = $$("main mark.hl")[n - 1];
  if (!el) return;
  const d = el.closest("details");
  if (d) d.open = true;
  el.classList.add("in");
  el.scrollIntoView({ block: "center", behavior: "instant" });
  // 上にある画像の読み込みで位置がずれたら、少しの間だけ位置を合わせ直す
  const until = Date.now() + 2000;
  $$("main img").filter((i) => !i.complete).forEach((i) => i.addEventListener("load", () => {
    if (Date.now() < until && el.isConnected) el.scrollIntoView({ block: "center", behavior: "instant" });
  }, { once: true }));
  el.classList.remove("flash");
  void el.offsetWidth;
  el.classList.add("flash");
  el.addEventListener("animationend", () => el.classList.remove("flash"), { once: true });
}

const allInsights = () => D.sessions.flatMap((s) => (L(s, "insights") ?? []).map((t) => ({ t, s })));
const stats = () => [
  [D.sessions.length, "Sessions", T("stat")[0]],
  [new Set(D.sessions.map((s) => s.day)).size, "Days", T("stat")[1]],
  [D.sessions.reduce((a, s) => a + s.photos.length, 0), "Photos", T("stat")[2]],
  [allInsights().length, "Insights", T("stat")[3]],
];
