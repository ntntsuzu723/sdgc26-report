/* =========================================================
   SDGC26 聴講レポート — データファイル
   ここを書き換えるだけでサイト全体（3案すべて）が更新されます。

   ■ 写真の入れ方
     photos/ フォルダに画像を置き、パスを文字列で書きます。
       photos: ["photos/s01/01.jpg", "photos/s01/02.jpg", ...]
     1枚目がカバー（一覧・サムネイル）になります。
     ※ 写真がまだ無いセッションは、仮の色面（PHOTO）を表示しています。

   ■ セッションを増やす / 減らす
     sessions 配列に { ... } を追加・削除するだけ。番号は自動で振られます。
   ========================================================= */

// 仮写真用ヘルパー（本番では不要。写真パスに置き換えてください）
// 外部サイトに頼らない仮写真（色面に「PHOTO」と番号）。共有用のページでも表示される
const ph = (seed, w = 900, h = 1000) => {
  const tones = ["#d9cfc1", "#cbbfae", "#e2d6c4", "#bfb3a2", "#d4c6b2"];
  const n = [...String(seed)].reduce((a, c) => a + c.charCodeAt(0), 0);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="100%" height="100%" fill="${tones[n % tones.length]}"/><text x="50%" y="50%" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="${Math.round(w / 14)}" letter-spacing="6" fill="#8f8982">PHOTO</text><text x="50%" y="58%" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="${Math.round(w / 28)}" fill="#8f8982">${String(seed).toUpperCase()}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
};
const phs = (key, n = 5) => Array.from({ length: n }, (_, i) => ph(`${key}-${i}`));

window.REPORT = {
  conference: {
    name: "Service Design Global Conference 2026",
    short: "SDGC26",
    themeLabel: "SDGC26 Theme",
    themeTitle: "Beyond Boundaries",
    themeSub: "Enabling Solutions that Shape Tomorrow",
    themeText:
      "Beyond Boundaries: Enabling Solutions that Shape Tomorrow explores how organizations across the public and private sectors and the communities they serve can move past today’s limits to shape more resilient, meaningful futures through service design. As organizations face structural, cultural, technological, and environmental boundaries, progress increasingly depends on new ways of working, collaborating, and making sense of complexity across disciplines.",
    lead: "SDGC26聴講レポート",
    reporter: "NTTDATA Launch / NATSUMI SUZUKI",
    dates: "2026.10.28 – 30",
    place: "Frankfurt",
    // トップのアーチに出す写真。空なら全セッションの写真を自動で使用
    heroPhotos: [],
    // 会場の写真。トップのアーチにセッション写真と混ぜて均等に散りばめる
    venuePhotos: [
      "photos/venue/building.jpg",
      "photos/venue/networking.jpg",
      "photos/venue/upstream-impact.jpg",
      "photos/venue/award-poster-ev.jpg",
      "photos/venue/lobby.jpg",
      "photos/venue/our-setup.jpg",
      "photos/venue/banner.jpg",
      "photos/venue/award-posters.jpg",
      "photos/venue/human-in-the-loop.jpg",
      "photos/venue/building-2.jpg",
      "photos/venue/award-poster-advent.jpg",
      "photos/venue/stage.jpg",
    ],
    aboutPhoto: ph("about", 900, 1150),
    // 英語版（無い項目は日本語を表示）
    en: {
      lead: "SDGC26 Conference Report",
      reporter: "NTTDATA Launch / NATSUMI SUZUKI",
      place: "Frankfurt",
    },
  },

  sessions: [
    {
      id: "s01",
      title: "Think global, adapt local: how Service Design became the engine of B2B market entry",
      speaker: "Tamara Kartoziia",
      org: "AUTODOC PRO — Senior Service Designer and Customer Experience Architect",
      // カバー写真（一覧カード・セッションページ左上）。省略時は photos の1枚目
      cover: "photos/s01/cover.webp",
      coverFull: true, // true にするとトリミングせず画像全体を表示
      // 一覧カード用の写真（省略時は cover を使用）
      cardCover: "photos/s01/card-speaker.jpg",
      cardBg: "#ffffff", // 指定するとカード写真をトリミングせず、余白をこの色で埋める
      day: "Day 2",
      time: "AM",
      track: "B2B / Market entry",
      keyPhrase: "複雑さは、共感を省略する理由ではない。共感が必要とされる理由そのものである。",
      summary:
        "Autodoc Pro（欧州の自動車部品販売企業AutodocのB2Bプラットフォーム）のサービスデザイナーTamaraが、サービスデザインを社内業務の改善から事業戦略の形成へと広げた事例。現地の知見が十分にない状況でも新市場へ迅速に参入するため、①再利用・拡張できる市場参入プロセス、②早期に顧客への共感と理解を深めるツール、③チームの認識をそろえ戦略を共創する場、の3つの仕組みを構築した。",
      // 概要の横に出す写真（省略時は photos の2・3枚目）
      overviewPhotos: ["photos/s01/07.jpg", "photos/s01/08.jpg"],
      // 本文中の **太字** は太字、==文字== はハイライト（重要箇所）として表示されます
      points: [
        {
          title: "市場参入フレームワーク「Start a New Country」",
          body: "初期のフランス・ドイツ・オランダへの展開では共通の進め方がなく混乱し、ドイツではディスカバリー前の準備だけで12か月を要した。イタリア進出を機に、サービスデザインの「探索・定義・開発・提供」のプロセスで、国の立ち上げに必要な100以上の活動・担当・依存関係を整理した。\n\n法務からマーケティングまでの10ブロックで構成し、最初の「市場調査」「事業計画」「実行可否判断」を本格投資前の関門に。Tamaraの狙いは、**ディスカバリーを省略できない最初の工程にすること**だった。ツールは誰もが初日から開いて更新できるGoogleスプレッドシート。",
          listLabel: "成果",
          list: [
            "市場投入までの期間が**12か月から6か月**に短縮",
            "9か国・26チームが共通の計画で連携",
            "経営層がB2B市場参入の標準として承認",
            "ほかの5チームにも自発的に普及",
          ],
          photos: ["photos/s01/11.jpg", "photos/s01/12.jpg", "photos/s01/13.jpg", "photos/s01/15.jpg"],
        },
        {
          title: "顧客への共感を生むツール",
          body: "チームは対象市場から地理的にも文化的にも離れている。フレームワークを「エンジン」とするなら、顧客理解はその「燃料」。地方の大規模整備拠点から都市部の小さな整備工場まで“極端なユーザー”を訪ね、インタビューと現場観察を行った。\n\nJobs to Be Done とカスタマージャーニーマップを一つの図に統合し、チーム全体が**「整備工場オーナーの立場で考える」ための共通認識**を持てるようになった。",
          listLabel: "イタリアで見えたこと",
          list: [
            "整備工場は、正面から競争するよりも専門性によって差別化する",
            "競合する工場同士でも、家族のような親密な関係を築く",
            "看板やバナー、立て看板など、物理的な接点が集客に重要",
          ],
          photos: ["photos/s01/16.jpg", "photos/s01/18.jpg", "photos/s01/19.jpg", "photos/s01/21.jpg"],
        },
        {
          title: "共創による戦略づくりと合意形成",
          body: "マーケティング・プロダクト・エンジニアリング・営業が参加するワークショップで、バリュープロポジションキャンバスを使い「優先ニーズは妥当か／既存機能で解決できる課題は何か／提供内容をどこで調整すべきか／新たに開発すべき機能は何か」を検討。\n\n価格や配送条件は機密で直接比較できないため、顧客インタビューから競合の利用実態を把握し、どの競合も十分に満たしていないニーズを発見。明確なUSPと市場投入戦略を策定し、何より関係チームが**共通の方向性と当事者意識**を持てた。",
          photos: ["photos/s01/23.jpg", "photos/s01/24.jpg"],
        },
        {
          title: "AI時代に、誰がディスカバリーを守るのか",
          body: "Tamaraが最も誇りに感じているのは、フレームワーク自体ではなく、「私たちは本当にそれを知っているのか」「誰か実際に顧客と話したのか」と問い直す姿勢が広がったことだった。\n\n==AIが短時間で自信に満ちた回答を生成できる時代だからこそ、ディスカバリーでは、**まだ誰も書き残していない現場の知識や経験**を探す必要がある。==\n\n最後に投げかけられたのは、実行がAIによって加速する世界で、誰が顧客理解と探索のプロセスを守るのか、という問いだった。",
          photos: ["photos/s01/25.jpg"],
        },
      ],
      // トップの「インサイト」カード。head＝見出し、text＝本文、hl＝ページ内で何番目のハイライトへ移動するか（概要→ポイントの順に1から数える）
      learnings: [
        { hl: 1, head: "書かれていない、知識を探しに行く", headEn: "Go find the unwritten",
          text: "AIが“それらしい平均的な答え”を数秒で返す時代だからこそ、ディスカバリーの価値は、まだ誰も書き残していない現場の知識を自分の足で探しにいくことにある。",
          en: "When AI returns a confident but average answer in seconds, the real value of discovery is going out to find the field knowledge nobody has written down yet." },
      ],
      insights: [
        "自分たちの最大の「渋滞」はどこか？ どのプロセスなら可視化できるか？",
        "実際の顧客の声が計画の前提を覆したのは、最後にいつだったか？",
        "戦略が決まる場に、誰がいないか？",
      ],
      photos: Array.from({ length: 26 }, (_, i) => `photos/s01/${String(i + 1).padStart(2, "0")}.jpg`),
      // 英語版：points は順番で日本語版と対応（写真は日本語版のものを使用）
      en: {
        keyPhrase: "Complexity is not a reason to skip empathy. It's the reason empathy exists.",
        summary:
          "Tamara, a service designer at Autodoc Pro — the B2B digital platform of European car parts retailer Autodoc — shared how service design grew from improving internal work into shaping business strategy. To enter unfamiliar markets at speed without local expertise, the team built three levers: (1) a scalable market entry process, (2) tools that build customer empathy early, and (3) a space for team alignment and co-created strategy.",
        points: [
          {
            title: "Market Entry Framework: “Start a New Country”",
            body: "Early launches in France, Germany and the Netherlands were chaotic, with no shared structure — Germany took 12 months just to get started, before discovery. For Italy, Tamara built a framework using the service design process (discover, define, develop, deliver), mapping 100+ activities with owners, priorities and dependencies.\n\nIt has 10 blocks, from legal to marketing. The first three — market discovery, business plan, go/no-go — form a gate before serious spending. Her “hidden agenda”: **make discovery the unskippable first step**. The format is a Google Sheet, on purpose, so everyone can open and update it on day one.",
            listLabel: "Results",
            list: [
              "Time to market dropped from **12 to 6 months**",
              "26 teams in 9 countries worked from one plan",
              "Signed off at C-level as the B2B market entry standard",
              "Five other teams adopted it unprompted",
            ],
          },
          {
            title: "Customer Empathy Tools",
            body: "Teams are physically and culturally distant from target markets. If the framework is the “engine”, customer insight is the “fuel”. The team interviewed “extreme users” — from a large countryside super center to a small city workshop — and spent days observing garage workflows.\n\nA hybrid framework combined the customer journey map with jobs to be done in one visual, helping every team **“put on the garage owner hat”** and build shared understanding.",
            listLabel: "What we learned in Italy",
            list: [
              "Garages specialize and differentiate rather than compete head to head",
              "Relationships are close and family-like, even among competitors",
              "Physical touchpoints — signs, banners, A-frames — are vital for acquisition",
            ],
          },
          {
            title: "Co-Creation and Alignment",
            body: "In a workshop with marketing, product management, engineering and sales, the value proposition canvas was used to validate prioritized needs and decide which existing features solve them, where to adjust the offer, and what new features to build.\n\nSupplier prices and terms are confidential, so competitors were studied from the customer side through interviews, combined with the team’s domain expertise — revealing needs nobody serves well. The outcome: a clear USP, a go-to-market strategy, and above all **alignment and shared ownership**.",
          },
          {
            title: "In the age of AI, who protects discovery?",
            body: "The framework spread to five other teams and sparked questions like “Do we actually know this?” and “Has anyone talked to them?” Tamara is proudest of this doubt — not the framework itself.\n\n==AI gives confident but merely average answers in seconds, with no “man with oil in his hands”. Discovery must therefore become **the search for what nobody has written down**.==\n\nHer closing question: in a world where AI accelerates execution, who is protecting the discovery layer?",
          },
        ],
        insights: [
          "Where is our biggest traffic jam — and which process can we make visible?",
          "When did a real customer quote last challenge an assumption in our planning?",
          "Who is not in the room when our strategy gets decided?",
        ],
      },
    },
    {
      id: "s02",
      title: "The Good Designer: Rethinking Service Design in the Age of AI",
      speaker: "Ian Gehlhaar",
      org: "Fail Fast Studio — Experience Design Director & Founder",
      day: "Day 2",
      time: "—",
      track: "AI / Future of design",
      cover: "photos/s02/cover.png",
      coverFull: true,
      cardCover: "photos/s02/card-speaker.jpg",
      cardBg: "#ffffff",
      keyPhrase: "人がテクノロジーを理解するためのデザインから、テクノロジーが人を理解するためのデザインへ。",
      summary:
        "Fail Fast Studio（バルセロナ、約100人のデザインエージェンシー）の創業者兼ディレクター、Ian Gehlhaarが、==AI時代にデザイナーやデザイン組織の役割がどう変わるか==を語った。AIの普及に対する不安と、エージェンシーの価値提案を問い直す必要性をきっかけに、約10か国・50人への調査と社内実験を実施。そこから得た5つの洞察――「==現状維持の罠==」「==ピラミッドの崩壊==」「==静的デザインの終わり==」「==データゼロのイノベーション==」「==マウスの死==」――を紹介した。準備を進めるなかで、Ianの見通しは悲観的なものから、より希望のあるものへと変わっていった。",
      overviewPhotos: ["photos/s02/19.jpg"],
      // blocks：写真＋テキストを横並びで表示（写真だけ→全幅、テキストだけ→通常の段落、row: true→写真を横に並べて下に文章）
      points: [
        {
          title: "現状維持の罠",
          blocks: [
            { photos: ["photos/s02/03.jpg"] },
            { text: "人は現状維持の傾向があり、AIを使っていても古い発想のままになりがち。たとえば、車を発明する代わりに、馬への餌やりを自動化するようなもの。" },
            { photos: ["photos/s02/04.jpg", "photos/s02/05.jpg"], row: true, text: "==以前は、人がテクノロジーを理解できるようにデザインしていた。今は、テクノロジーが人を理解できるようにデザインする時代になりつつある。==" },
            { text: "サービスの相手側にAIを活用する人やエージェントが加わることで、「ユーザー中心」の戦略そのものが変わる可能性がある。" },
            { photos: ["photos/s02/06.jpg"], text: "==デザイナーの仕事は、成果物を作ることから、エージェントのルール・制約・越えてはならない線といった「入力」を設計することへ移っていく。テーブルそのものではなく、IKEAの組み立て説明書を作るようなイメージ。==" },
            { photos: ["photos/s02/07.jpg"], text: "AIが6〜12か月以内にあらゆるデジタル制作業務を担えるようになる可能性を踏まえ、「デザイナー」の前につく専門分野のラベルを外し、幅広く対応できる==「ユニバーサル・デザイナー」==を目指すべきだという提案があった。" },
            { text: "Fail Fastでは、「2025年の発想で考えるのをやめよう」という冗談が交わされている。" },
          ],
        },
        {
          title: "ピラミッドの崩壊",
          blocks: [
            { photos: ["photos/s02/08.jpg"] },
            { text: "調査の回答者の多くは、==仕事が制作から戦略へ移ると予想==している。しかし、戦略を担う人が増えすぎても、全員がその役割を担えるわけではない。" },
            { photos: ["photos/s02/09.jpg"], text: "開発コストがほぼゼロに近づけば、企業は小規模化し、硬直的な階層構造は崩れていく。\n\n中間管理職の層には、燃え尽きや心臓発作につながるような強いストレスがある。" },
            { photos: ["photos/s02/10.jpg"], text: "組織構造の代替案として、次の3つが挙げられた。", list: ["==**ダイヤモンド型**：下位層を置かず、約20人の高度な専門家で構成する。==", "==**マッシュルーム型**：AIが自律的に業務を進める。主にテクノロジー企業向け。==", "==**ニューロン型**：人、エージェント、AIツールがプロジェクトごとにつながる流動的なネットワーク。創業者1〜5人で運営できる可能性がある。=="] },
            { text: "若手の育成には課題がある。判断力を身につけるには経験が必要だが、==経験を積むための初級業務がなくなりつつある==。大学や企業による新しい育成の仕組みが必要になる。" },
            { text: "==チームが小規模になり、AIが調整役を担うようになると、従来のマネジメントの価値が薄れる可能性がある。==" },
          ],
        },
        {
          title: "静的デザインの終わり",
          blocks: [
            { photos: ["photos/s02/11.jpg"] },
            { text: "人間は長い進化の過程で視覚的な生き物になったため、画面そのものがなくなるわけではない。一方で、一時的に生成される画面や、柔軟に変化する設計図・ユーザージャーニーが増えていく。" },
            { photos: ["photos/s02/12.jpg", "photos/s02/13.jpg"], row: true, text: "==これまでは、何百万人もの人に向けて一つの解決策を作るため、十分な調査や反復が必要だった。AIは一人ひとりに合わせて何千もの解決策を作り、継続的に改善できるようになる。==" },
            { text: "新しい街で使う地図のように、状況に応じて必要なインターフェースは残る。ただし、それらもAIが一時的に生成するものになるかもしれない。\n\n以前はテクノロジーが高価で時間もかかったため、調査やプロトタイプでリスクを減らす必要があった。開発が安く速くなることで、そのプレッシャーは軽減される。" },
            { photos: ["photos/s02/14.jpg", "photos/s02/15.jpg"], row: true, text: "デザイナーは、==作品を完成させて演奏するロックバンドから、その場の様子を読み取りながら変化させるDJへ==――つまり==「リアルタイム・デザイナー」==へと変わる。" },
            { text: "エージェントを使えば、会議中に動くプロトタイプを作れる。アイデアから公開まで約10分というスピードは、やみつきになるほどだという。" },
          ],
        },
        {
          title: "データゼロのイノベーション",
          blocks: [
            { photos: ["photos/s02/16.jpg"] },
            { text: "AIは過去のデータをもとに生成するため、平均的な答えになりやすい。Ferran Adriàの言葉を借りれば、==創造性とは「まねをしないこと」==。" },
            { text: "==デザイナーは、データのない領域でイノベーションを起こすべきだ。==コミュニティや新たな動きにつながる「人間のセンサー」として働くことが重要になる。" },
            { photos: ["photos/s02/17.jpg"], text: "Ianは、**Human Skills**というカードセットとアプリを作った。8つのスキルは、センスメイキング、発散、判断基準、オーケストレーション、共感、倫理、影響力、ファシリテーション。\n\n各スキルには練習課題があり、大会でのワークショップには「ここにいると落ち着く」という感想が寄せられた。" },
            { text: "==20年にわたってロボットのように効率化してきた人間は、今度は人間らしさを取り戻す必要がある。==分析や統合ではAIに勝てないからだ。" },
          ],
        },
        {
          title: "マウスの死",
          blocks: [
            { photos: ["photos/s02/18.jpg"] },
            { text: "Fail Fastでは、主任エージェントデザイナーのAlex Gomezを中心に、マウスやAdobe・Figmaなどのアプリを使わない取り組みを行った。最初の数週間は進みが遅かったが、最後の3週間で加速し、約50個のエージェントやスキルを作った。" },
            { text: "マウスという操作方法が、人間の想像力を制限していたという見方が示された。エージェントに基本的な素材のデザインを学習させ、カードを1枚デザインすると、残りを約15分で作れるようになった。" },
            { text: "スキルアプリでは、利用者が自分の人間的スキルを評価するとレーダーチャートが作られ、学習計画が提案される。Ianと同僚は、コーディング経験がない状態から、ノードを視覚的に操作できるレイヤーを備えたマルチプレイヤーゲームを作った。" },
            { text: "結論として、創造性こそが限界であり、共感・水平思考・創造性は、AIが理解しにくい人間の強みだとされた。" },
          ],
        },
      ],
      // トップの「インサイト」カード。head＝見出し、text＝本文、hl＝ページ内で何番目のハイライトへ移動するか（概要→ポイントの順に1から数える）
      learnings: [
        { hl: 7, head: "テクノロジーが、人を理解する", headEn: "Tech that understands people",
          text: "デザインの向きが逆転しつつある。人がテクノロジーを理解するための設計から、テクノロジーが人を理解するための設計へ。",
          en: "The direction of design is flipping: from helping people understand technology to helping technology understand people." },
        { hl: 8, head: "成果物より、入力をデザインする", headEn: "Design inputs, not outputs",
          text: "デザイナーの成果物は「完成品」から、AIエージェントに渡すルールや制約といった「入力」へ移っていく。IKEAのテーブルではなく、組み立て説明書をつくる仕事になる。",
          en: "A designer's deliverable is moving from the finished product to the inputs we hand AI agents — rules, limits and red lines. Less the IKEA table, more the assembly manual." },
        { hl: 9, head: "肩書きを外す", headEn: "Drop the labels",
          text: "AIが制作作業の多くを担うなら、UI・UX・サービスといった肩書きの境界は意味を失う。領域を越えて動ける「ユニバーサル・デザイナー」が求められる。",
          en: "If AI takes over most craft work, labels like UI, UX or service designer lose their meaning. What's needed is a universal designer who moves across disciplines." },
        { hl: 11, head: "ピラミッドの、その次へ", headEn: "Beyond the pyramid",
          text: "開発コストがゼロに近づくと、組織は小さく流動的になる。少数精鋭のダイヤモンド型、AIが運営するマッシュルーム型、プロジェクトごとにつながるニューロン型――ピラミッドの次の形を考える時期にきている。",
          en: "As the cost to build nears zero, organizations get smaller and more fluid — diamond, mushroom or neuron. It's time to think about what comes after the pyramid." },
        { hl: 14, head: "若手が育つ場を、設計する", headEn: "Design how juniors grow",
          text: "初級業務がAIに置き換わると、若手が判断力を育てるための経験の場が消える。育成の仕組みは、意図してつくり直さなければならない。",
          en: "When AI replaces entry-level tasks, juniors lose the experiences that build judgment. Growing people now has to be designed on purpose." },
        { hl: 16, head: "万人に1つ、から一人ひとりへ", headEn: "From one-for-all to one-for-one",
          text: "1つの解決策を何百万人に届ける時代から、AIが一人ひとりに合わせた解決策をつくり、改善し続ける時代へ。調査と反復の意味そのものが変わる。",
          en: "We are moving from one solution for millions to thousands of solutions, one per person, constantly improved by AI. The meaning of research and iteration changes with it." },
        { hl: 17, head: "ロックバンドから、DJへ", headEn: "From rock band to DJ",
          text: "デザイナーは、完成した作品を演奏するロックバンドから、場の空気を読みながら変化させるDJへ。リアルタイムにつくり、直し続ける力が問われる。",
          en: "Designers are going from rock band to DJ: instead of performing a finished piece, they read the room and adjust live." },
        { hl: 20, head: "データのない所で、勝負する", headEn: "Play where there's no data",
          text: "AIは過去のデータからしか生み出せない。だからデザイナーは、データのない領域――現場やコミュニティに生まれる新しい動き――でこそイノベーションを起こす。",
          en: "AI can only create from past data. That's why designers should innovate where no data exists yet — in the field and in emerging communities." },
        { hl: 21, head: "もう一度、人間に戻る", headEn: "Be human again",
          text: "効率化のために“ロボットのように”働いてきた私たちに、今必要なのは人間らしさを取り戻すこと。共感や創造性こそが、AIに代えがたい強みになる。",
          en: "After years of working efficiently like robots, we now need to become human again. Empathy and creativity are the strengths AI cannot replace." },
      ],
      insights: [
        "成果物だけでなく、AIエージェントに渡す「入力」（ルール・制約・越えてはならない線）もデザインの対象として扱ってみる。",
        "データのない領域――現場やコミュニティでの一次情報の収集を、AIに置き換えにくいチームの強みとして伸ばす。",
        "初級業務が減るなかで、若手が判断力を育てる経験の場をチームでどうつくるか考える。",
      ],
      photos: Array.from({ length: 19 }, (_, i) => `photos/s02/${String(i + 1).padStart(2, "0")}.jpg`),
      en: {
        keyPhrase: "Design used to help humans understand technology. Now it helps technology understand humans.",
        summary:
          "Ian Gehlhaar, founder and director of Fail Fast Studio — a Barcelona design agency of about 100 people — explored ==how the role of designers and design organizations changes in the age of AI==. Prompted by worry about AI adoption and the question of what the agency's value proposition will be, he ran a survey, workshops and interviews with about 50 people from 10 countries, followed by experiments inside the agency. The research produced five insights: ==the trap==, ==the collapse==, ==the end==, ==the zero== and ==the death==. Over the months, his outlook shifted from pessimistic to more hopeful.",
        points: [
          { title: "The Status Quo Trap", blocks: [
            null,
            "Professionals have status quo bias and use AI with an old mindset — like automating horse feeding instead of inventing the car.",
            "==Design used to help humans understand technology. Now it helps technology understand humans.==",
            "User-centric strategy may be ending, since the other side of services will include AI-empowered users and agents.",
            "==Designers move from designing outputs to designing inputs: rules, limits and red lines for agents — like an IKEA manual instead of the table.==",
            "Labels in front of “designer” should go in favor of a ==universal designer==, because AI will likely handle any digital craft task within 6 to 12 months.",
            "Fail Fast's team joke: “stop thinking like it's 2025”.",
          ] },
          { title: "The Collapse of the Pyramid", blocks: [
            null,
            "Many survey respondents ==expect a shift from craft to strategy==, but there is little room for that many thinkers.",
            "Companies will get smaller and rigid hierarchies will collapse, because the cost to develop is near zero.\n\nThe middle management layer is stressful, with burnout and heart attacks.",
            { text: "Three alternative structures were proposed.", list: ["==**Diamond**: about 20 super-specialists without a bottom layer.==", "==**Mushroom**: autonomous AI operations, mainly for tech companies.==", "==**Neuron**: liquid project networks of people, agents and AI tools, possibly run by 1 to 5 founders.=="] },
            "The junior challenge: criteria needs experience, and ==experience needs entry-level tasks== that are disappearing. A new system is needed, whether from universities or companies.",
            "==Management value may fade when teams are small and AI can coordinate.==",
          ] },
          { title: "The End of Static Design", blocks: [
            null,
            "Screens won't disappear, because humans are visual animals shaped by millions of years of evolution. But expect ephemeral screens and liquid blueprints and journeys.",
            "==Before, one solution was designed for millions of people, which required heavy research and iteration. AI will create thousands of solutions, one per person, iterating constantly.==",
            "Interfaces are still needed in some cases, like maps in a new city — and AI will generate ephemeral ones.\n\nTechnology used to be expensive, so research and prototyping de-risked decisions. Now it is cheap and fast, which relieves that pressure.",
            "Designers go ==from rock band to DJ== — a ==real-time designer==, reading the room and adjusting live.",
            "An agent can produce a working prototype before a meeting ends: about 10 minutes from idea to launch, and it is addictive.",
          ] },
          { title: "Zero Data Innovation", blocks: [
            null,
            "AI creates only from past data and produces average solutions. Quoting Ferran Adrià, ==creativity means “don't copy”==.",
            "==Designers should innovate where there is no data==, acting as biological sensors connected to communities and emerging movements.",
            "Ian created **Human Skills**, a card set and app with eight skills: sense-making, divergence, criteria, orchestration, empathy, ethics, influence and facilitation.\n\nExercises accompany each skill; a workshop at the congress got the feedback “it feels like home”.",
            "==Paradox: after 20 years of becoming efficient like robots, humans must now be human.== They cannot beat AI at analysis and synthesis.",
          ] },
          { title: "The Death of the Mouse", blocks: [
            null,
            "Fail Fast, with principal agent designer Alex Gomez, banned the mouse and apps like Adobe and Figma. The first weeks were slow, then the last three weeks accelerated — they created about 50 agents and skills.",
            "Human imagination had been limited by the mouse interface. Agents were trained to design basic assets: from one designed card, they produced the rest in about 15 minutes.",
            "The skills app lets users rate their human skills, builds a spider graph and creates a learning path. Ian and a colleague with no coding knowledge built a multiplayer game with a visual layer to control nodes.",
            "Conclusion: creativity is the only limit, and empathy, lateral thinking and creativity are what AI will not understand.",
          ] },
        ],
        insights: [
          "Treat the “inputs” we hand to AI agents — rules, limits and red lines — as design deliverables, not just the outputs.",
          "Grow our strength in zero-data territory: first-hand insight from the field and communities that AI cannot replace.",
          "As entry-level tasks disappear, decide how our team creates experiences where juniors can build judgment.",
        ],
      },
    },
    {
      id: "s03",
      title: "From Data Dump to Change Agent - How Digital Product Passport Can Actually Change Consumer Behavior",
      speaker: "Peter Post",
      org: "Circular Experience — Founder",
      day: "Day 3",
      time: "—",
      track: "Circular economy / DPP",
      cover: "photos/s03/cover.jpg",
      coverFull: true,
      cardCover: "photos/s03/card-speaker.jpg",
      cardBg: "#ffffff",
      keyPhrase: "データは機械のために。サービスは人のために。",
      summary:
        "登壇者は、ドイツ・ヴィースバーデンを拠点に、サーキュラーエコノミー（循環型経済）のサービスデザインを手がけるPeter Post。テーマは、EUで導入が進むデジタル製品パスポート（DPP）――製品の原材料調達から製造、流通、使用、廃棄・リサイクルまでの情報をデジタルデータとして記録・追跡する仕組み――を、消費者の行動を変えるきっかけにできるか。\n\n「資源を採取し、消費し、廃棄する」リニア型経済から循環型経済へ移るには、消費者が購入・消費するだけでなく、修理・再利用・共有に参加できるようにする必要がある。そのためには、==循環型の行動をより少ない手間で、より楽しく実践できるようにすること==が重要だという。修理や共有そのものは難しくない。リニア型経済があまりに便利になったため、人々が実践しなくなっているだけだ。",
      points: [
        {
          title: "事例：Circular Classroom",
          blocks: [
            { photos: ["photos/s03/01.jpg"], text: "世界的な学校用家具メーカーと、経営者および製品開発責任者を交えてデザインスプリントを実施。DPPのデータを活用して新たなサービスを構想することが目的だった。当時、家具に必要なDPPのデータ項目はまだ定義されていなかった。" },
            { text: "4週間で「Circular Classroom」というコンセプトを開発。サービスの提供価値は、「より少ない家具で、より多様な教え方を実現する」こと。" },
            { text: "車のフリート管理のように、家具を一群の資産として管理する。施設管理者は、グループ学習、デジタル学習、試験などに合わせて構成を変えられ、修理や再生の計画にもつなげられる。", list: ["従来は「より多く製造すること」で収益を得ていたメーカーにとっても、経済的な魅力のある構想になった。", "提案では、サステナビリティそのものよりも経済的なメリットを訴求した。「環境を大切にしたい」という意識が、そのまま行動につながるとは限らないためだ。"] },
          ],
        },
        {
          title: "循環型サービスのパターンライブラリ",
          blocks: [
            { photos: ["photos/s03/02.jpg"], text: "==循環型サービスに使えるサービス／UXのパターン集==がなかったため、登壇者のスタジオが独自に構築した（[circular-experience.org](https://www.circular-experience.org/)）。\n\n80以上のパターンを収録し、オンラインで無料公開。約15,000件の訪問と、数千件のダウンロードがある。アイデア出し、ワークショップのカード教材、短時間でのプロトタイピングなどに使える。" },
            { text: "紹介されたパターンの例：", list: ["**アップグレード**：電動アシスト自転車の速度パッケージなどを、製品価値を高める選択肢として提示する。", "**共有による購入費用の回収**：自転車を他者に貸し出し、収入を得る。", "**比較時のフレーミング**：比較項目の選び方で選択を誘導する。講演ではダークパターンとして紹介され、使うかどうかは聴衆の判断に委ねられた。"] },
            { text: "「人々に伝わる共通言語はCO₂ではなく、お金である」。ライブラリの利用者には、利用の見返りとしてフィードバックを求めている。" },
          ],
        },
        {
          title: "なぜEUはDPPを推進するのか",
          blocks: [
            { photos: ["photos/s03/03.jpg", "photos/s03/04.jpg"], row: true, text: "==世界の資源循環率はわずか7〜8％==で、採取された資源の90％以上が最終的に廃棄・焼却されている。EUは、==2030年までに循環率を12％から24％へ倍増させ==ることを目指している。" },
            { text: "資源循環は、排出量の削減に加え、政治的リスクの高い国からの資源輸入への依存を減らすことにもつながる。" },
            { photos: ["photos/s03/05.jpg"], text: "==リサイクルは、価値を維持するうえでは最も弱い選択肢==と位置づけられた。高級電動アシスト自転車の場合、リサイクル時の価値は約50〜150ユーロだが、再生品として販売すれば約2,000〜3,000ユーロになる。" },
          ],
        },
        {
          title: "DPPとは何か",
          blocks: [
            { photos: ["photos/s03/06.jpg"], text: "鉄鋼、バッテリー、繊維製品などから法的な導入義務が始まる。ドイツでは2030年までに500万社以上が公開を求められ、ほぼすべての製品にDPPが必要になる見込み。アパレル分野だけでも、年間620億件のパスポートが必要になると予測される。" },
            { text: "ドイツの中小企業からは、データ収集の負担に対する不満が出ている。DPPはQRコードやRFIDで製品とひもづけられ、製品の近くでアクセスできる必要がある。" },
            { text: "重要なのは、**DPPのデータは機械のためのもの、サービスは人のためのもの**という区別。DPPは、あらゆる製品利用者に直接つながる接点になる。単なるマーケティングチャネルとして使われる可能性もあるが、登壇者は、消費者の行動を変えるきっかけになり得ると考えている。" },
          ],
        },
        {
          title: "プロトタイプと消費者調査",
          blocks: [
            { photos: ["photos/s03/07.jpg"], text: "**Nara Veroとの自転車プロトタイプ**\n\nドイツのDPPツール提供企業「Nara Vero」と制作。ブランドが売り込むのではなく、自転車自身が「使い方に変化はあった？」と問いかけ、必要なアクセサリーやアップグレードを一緒に見つける。フレームをさらに3〜4年使い続けることを目指す。" },
            { photos: ["photos/s03/08.jpg"], text: "**Consumers Internationalとの消費者調査**\n\n世界的な消費者団体との取り組み。DPP研究の92％が技術に関するもので、消費者を対象とした研究はなかった。" },
            { photos: ["photos/s03/09.jpg", "photos/s03/10.jpg", "photos/s03/11.jpg", "photos/s03/12.jpg"], row: true, text: "スマートフォンを題材にプロトタイプを制作し、ドイツの1,000人を対象に調査を実施。提示した利用例は次のとおり。", list: ["環境・社会面のフットプリントの確認（例：コンゴ民主共和国から調達される銅）", "修理のしやすさの確認、交換部品の入手", "地域の修理支援へのアクセス", "認証付きの中古販売"] },
            { photos: ["photos/s03/13.jpg"], text: "**1. DPPの価値は、購入時だけではない**\n\n人々の関心が高いのは、==使い終わるときの対応、再販売価格、リサイクル、修理など。==購入後のライフサイクル全体を支援する必要がある。" },
            { photos: ["photos/s03/14.jpg"], text: "**2. 情報量よりも、行動につながる支援が重要**\n\n利用者が求めていたのは、DIY修理の手順、必要な工具、修理の選択肢など。保証の詳細への関心は、それほど高くなかった。" },
            { photos: ["photos/s03/15.jpg"], text: "**3. 透明性だけでは不十分**\n\n情報を開示するだけでなく、その意味を解釈し、意思決定を支援する必要がある。人々は製品の仕組みを学ぶことよりも、「次に何をすればよいか」を知りたがっている。" },
            { photos: ["photos/s03/16.jpg"], text: "**4. 製品ごとに分かれたパスポートでは使いにくい**\n\n家庭には数千もの製品があるため、取扱説明書なども含めて一元管理できる統合型のパスポートが求められる。\n\n会場でDPPを知っている参加者は少数だった。EUが法律として導入を進めるため、サービスデザイナーの仕事は大きく広がる。" },
          ],
        },
        {
          title: "将来のサービスアイデア",
          blocks: [
            { photos: ["photos/s03/17.jpg", "photos/s03/18.jpg"], row: true, text: "調査結果をもとに、スタジオが描いた投機的なアイデア。適切なサービスは業界や製品によって異なり、初期のDPPサービスの多くは基本的な機能にとどまるだろうという。" },
            { photos: ["photos/s03/19.jpg"], text: "**所有製品をまとめるウォレット／ダッシュボード**\n\n使っていない製品、知らなかった機能、売却できる付属品などを見つける。" },
            { photos: ["photos/s03/20.jpg"], text: "**自ら不調に対処する製品**\n\n予知保全によって故障を未然に防ぐ。" },
            { photos: ["photos/s03/21.jpg"], text: "**自ら貸し出される製品**\n\n使っていない時間に他者へ貸し出す。ドイツ人の78％が、近隣住民との園芸用品の共有に前向きだという。" },
            { photos: ["photos/s03/22.jpg"], text: "**家庭内資産の価値トラッカー／マテリアルバンキング**\n\n所有物にどれだけの金銭的価値が眠っているかを可視化する。素材や部品を循環の仕組みに戻し、対価を受け取る。" },
            { photos: ["photos/s03/23.jpg"], text: "**進化する製品**\n\n寿命を延ばすための投資によって、製品の価値を高める。" },
          ],
        },
        {
          title: "質疑応答：DPPのデータは誰が更新するのか",
          blocks: [
            { text: "質問：製品情報はすぐに古くなるが、誰が更新を担うのか。" },
            { text: "回答の要旨：", list: ["修理店などのサービス事業者が、パスポートの一部にアクセスし、編集できるようにする必要がある。ただし、まだ十分に認知されておらず、今後1年ほどで動きが進む見込み。", "データには、知的財産として非公開にすべきものと、公開が義務づけられるものがある。", "EUの中央リポジトリが数か月前に稼働し、企業が倒産してもデータが残る。", "修理履歴などの更新には、修理事業者のような信頼できる第三者による検証が必要。習慣として定着するには数年かかる。"] },
          ],
        },
        {
          title: "まとめ",
          blocks: [
            { text: "DPPを単なる「製品データの保管場所」で終わらせず、==修理・再利用・共有・再販売を簡単に実行できるサービスへ==変えることが重要。" },
            { text: "環境への配慮だけを訴えるのではなく、==経済的なメリットや便利さ、楽しさを通じて、循環型の行動を自然に選べるようにすること==が、サービスデザインの役割である。" },
          ],
        },
      ],
      // トップの「インサイト」カード。head＝見出し、text＝本文、hl＝ページ内で何番目のハイライトへ移動するか（概要→ポイントの順に1から数える）
      learnings: [
        { hl: 1, head: "正しさより、手軽さと楽しさ", headEn: "Easy and fun beats right",
          text: "循環型の行動は、正しさを訴えるだけでは定着しない。手間を減らし、楽しさを足すことで、はじめて人は動き出す。",
          en: "Circular behavior doesn't stick just because it's right. People start acting when it takes less effort and brings more joy." },
        { hl: 2, head: "道具がなければ、つくって配る", headEn: "No tool? Build it and share it",
          text: "循環型サービスのためのパターン集が存在しないなら、自分たちでつくり、無料で公開する。共通の道具が、領域全体の変化を早める。",
          en: "When no pattern library for circular services existed, the studio built one and gave it away. Shared tools speed up change for the whole field." },
        { hl: 5, head: "リサイクルは、最後の手段", headEn: "Recycling is the last resort",
          text: "リサイクルは製品の価値を壊してしまう。高級e-bikeならリサイクルで50〜150ユーロ、再生すれば2,000〜3,000ユーロ。価値を残す選択肢から先に設計する。",
          en: "Recycling destroys value: a premium e-bike is worth €50–150 recycled but €2–3k refurbished. Design for the options that keep value first." },
        { hl: 6, head: "出番は、買った後にある", headEn: "The real moment is after purchase",
          text: "人々が知りたいのは、購入時の情報より、使い終わるときや再販売、修理のこと。サービスデザインの余地は、購入後のライフサイクルに広がっている。",
          en: "People care less about the point of purchase than about end of use, resale and repair. The space for service design lies in the lifecycle after the sale." },
        { hl: 7, head: "データを、行動に変える", headEn: "Turn data into action",
          text: "データは機械のため、サービスは人のため。DPPを情報の保管庫で終わらせず、修理・再利用・共有・再販売をすぐ実行できるサービスに変える。",
          en: "Data is for machines; services are for people. Don't let a passport end as a data store — turn it into services that make repair, reuse, sharing and resale easy." },
        { hl: 8, head: "CO₂より、お金で語る", headEn: "Speak money, not CO₂",
          text: "人はCO₂ではなく、お金という言葉で理解する。環境への配慮だけを訴えず、経済的なメリットや便利さ、楽しさで、循環型の行動を自然に選べるようにする。",
          en: "People understand money, not CO₂. Instead of appealing to the environment alone, use economic benefit, convenience and joy so circular choices feel natural." },
      ],
      insights: [
        "サステナビリティ関連の提案では、環境価値だけでなく、ユーザーにとっての金銭的メリットや手軽さに翻訳して伝える。",
        "ジャーニーを購入で終わらせず、使い終わり・修理・再販売までを設計範囲に含めて描いてみる。",
        "circular-experience.org のパターン集を、ワークショップのアイデア出しに試してみる。",
      ],
      photos: Array.from({ length: 23 }, (_, i) => `photos/s03/${String(i + 1).padStart(2, "0")}.jpg`),
      en: {
        keyPhrase: "Data is for machines. Services are for people.",
        summary:
          "Peter Post runs a studio in Wiesbaden, Germany, that does service design for the circular economy. His question: can the EU's digital product passport (DPP) — a digital record that tracks a product's whole lifecycle, from sourcing and manufacturing to use, disposal and recycling — become a change agent for consumer behavior?\n\nMoving from a linear take-consume-waste economy to a circular one means empowering consumers beyond consumption, so they can repair, reuse and share. That requires ==making circular practices take less effort and bring more joy==. Repair and sharing aren't hard; people simply stopped practicing them because the linear economy became so easy.",
        points: [
          { title: "Example: Circular Classroom", blocks: [
            "A design sprint with a global school furniture maker, working with the owner and the head of product development. The goal was to build services on the data in a DPP — even though the data points for furniture had not yet been defined.",
            "After four weeks, the result was a circular classroom concept. The service promise: “more ways to teach with less furniture”.",
            { text: "Like fleet management for cars, furniture is managed as a fleet. Facility managers configure it for group work, digital work or tests, and plan repair and refurbishment.", list: ["It is economically attractive even for a manufacturer that normally earns by producing more.", "The team argued with economic benefits rather than sustainability, because people say they care but rarely act on it."] },
          ] },
          { title: "Circular Service Pattern Library", blocks: [
            "==No library of service/UX patterns for circular services== existed, so the studio built one ([circular-experience.org](https://www.circular-experience.org/)).\n\nIt has more than 80 patterns, is free online, and has about 15,000 visits and thousands of downloads. Use it for ideation, workshops (like method cards) and quick prototypes.",
            { text: "Example patterns:", list: ["**Upgrading**: an e-bike speed package framed as an increase in the bike's value.", "**Sharing and refinancing**: renting out a bike to earn back its cost.", "**Framing in product comparison**: choosing comparison criteria so the circular product wins. Labeled a dark pattern; the audience was left to judge its use."] },
            "“Money is the currency people understand, not CO₂.” The studio asks for feedback in exchange for using the library.",
          ] },
          { title: "Why the EU Is Doing This", blocks: [
            "==Global circularity is only 7–8%==, and over 90% of extracted material ends up thrown away or burned. The EU aims ==to double circularity from 12% to 24% by 2030==.",
            "Circularity also cuts emissions and reduces dependence on material imports from politically risky countries.",
            "==Recycling is the weakest option for keeping value.== A premium e-bike is worth about €50–150 recycled, but €2,000–3,000 refurbished.",
          ] },
          { title: "What a DPP Is", blocks: [
            "DPPs are a legal requirement, starting with iron and steel, batteries and textiles. Over 5 million German companies must publish them by 2030, and nearly all products are expected to need one. Apparel alone is expected to need 62 billion passports a year.",
            "Small and medium companies in Germany are unhappy about the data-collection burden. A DPP is linked to a product via QR code or RFID and must be accessible close to the product.",
            "The key distinction: **DPP data is for machines; services are for people.** The DPP gives a direct channel to every product user. It could be misused as a marketing channel, but the speaker sees it as a possible change agent.",
          ] },
          { title: "Prototypes and the Consumer Study", blocks: [
            "**Bike prototype with Nara Vero**\n\nBuilt with Nara Vero, a German DPP tool provider. Instead of the brand selling to you, the bike asks whether your use has changed, and together you find the accessories or upgrades you need — so the frame lasts 3–4 more years.",
            "**Consumer study with Consumers International**\n\nA project with the global consumer advocacy organization. 92% of DPP research is about technology, with no studies on consumers.",
            { text: "A smartphone prototype and a study with 1,000 users in Germany. Use cases shown:", list: ["Sustainability footprint (e.g. copper from the DR Congo)", "Repairability and spare parts", "Access to local repair help", "Certified resale"] },
            "**1. DPPs matter beyond the point of purchase**\n\nPeople care most about ==end of use, resale value, recycling and repair.== Services need to support the whole lifecycle after purchase.",
            "**2. Less information, more action**\n\nPeople want DIY repair guidance, tools and repair options. Warranty details were less interesting.",
            "**3. Transparency is not enough**\n\nPeople want interpretation and decision support. Rather than learning how products work, they want to know what to do next.",
            "**4. Separate passports per product don't work**\n\nWith thousands of products at home, people want an integrated passport that includes things like manuals.\n\nFew attendees had heard of DPPs. Because the EU makes them law, there is a lot of work ahead for service designers.",
          ] },
          { title: "Speculative Service Ideas", blocks: [
            "Speculative ideas the studio developed from the study. The right services vary by industry and product, and many first DPP services will cover only the basics.",
            "**Integrated wallet / dashboard**\n\nConnect owned products to find unused items, unknown features and sellable accessories.",
            "**Products that heal**\n\nPredictive maintenance that fixes things before they break.",
            "**Products that rent themselves out**\n\nLend items to others when unused. 78% of Germans would share garden equipment with neighbors.",
            "**Household value tracker / material banking**\n\nShow the money tied up in owned items, and return materials and components into the cycle for money.",
            "**Products that evolve**\n\nInvesting in extra lifetime raises a product's value.",
          ] },
          { title: "Q&A: Who Keeps DPP Data Updated?", blocks: [
            "Question: product data goes out of date quickly — who updates it?",
            { text: "Answer, in short:", list: ["Service companies such as repair shops should be able to access and edit parts of the passport. Few know this yet; it should move within the next year.", "Some data is intellectual property and stays private, while some must be published.", "The EU central repository launched a few months ago, so data persists even if a company goes bankrupt.", "Edits need a trusted third party, such as a repairer, to verify repairs. Making this a habit will take years."] },
          ] },
          { title: "Wrap-up", blocks: [
            "Don't let the DPP end as a mere store of product data — ==turn it into services that make repair, reuse, sharing and resale easy==.",
            "Rather than appealing to the environment alone, the role of service design is ==to make circular behavior the natural choice through economic benefit, convenience and joy==.",
          ] },
        ],
        insights: [
          "In sustainability proposals, translate environmental value into money and convenience for the user.",
          "Don't end journeys at purchase — include end of use, repair and resale in the scope we design.",
          "Try the circular-experience.org pattern library for ideation in a workshop.",
        ],
      },
    },
    {
      id: "s04",
      title: "Designing for Planetary Wellbeing",
      speaker: "Pietertje Doyle / Jeroen den Uijl", org: "Sopra Steria Next",
      cardCover: "photos/s04/card-speaker.jpg",
      cardBg: "#f8eedc",
      day: "Day 1", time: "16:00", track: "Sustainability",
      keyPhrase: "ユーザーの外側にいる“もう一人のステークホルダー”。",
      summary: "人間中心から生命中心へ。環境や将来世代をステークホルダーとして扱うためのフレームワークが紹介された。（仮テキスト）",
      points: [
        { title: "Non-human persona", body: "自然環境を代弁するペルソナを設定する。" },
        { title: "長い時間軸", body: "10年後・50年後のシナリオで評価する。" },
        { title: "トレードオフの可視化", body: "利便性と環境負荷を同じ図で議論する。" },
      ],
      insights: ["ワークショップに“将来世代”の視点カードを追加する。", "環境負荷をジャーニーの1レイヤーとして描く。"],
      photos: phs("s04", 5),
    },
    {
      id: "s05",
      title: "Designing Influence: Bringing Service Design into the Boardroom",
      speaker: "Monica Dalla Riva",
      org: "Deutsche Telekom AG — SVP & Chief Design Officer",
      day: "Day 2",
      time: "—",
      track: "Leadership / Design strategy",
      cover: "photos/s05/cover.jpg",
      coverFull: true,
      cardCover: "photos/s05/card-speaker.jpg",
      cardBg: "#ffffff",
      keyPhrase: "伝わらないこと自体が、デザイナーの解くべき課題である。",
      summary:
        "Deutsche TelekomでSVP兼チーフデザインオフィサーを務めるMonica Dalla Rivaによる基調講演。サービスデザインが個別の課題解決にとどまらず、経営の意思決定に影響を与える存在になるには何が必要かを語った。\n\nWhirlpool、Samsung、3M、Deutsche Telekomと歩んだキャリアをもとに、反脆弱性、経営層に伝わる言葉、課題が固まる前からの関与、実物で見せる力、そしてAI時代のデザインの役割までを、19のテーマで整理した。",
      overviewPhotos: ["photos/s05/03.jpg"],
      points: [
        {
          title: "デザインを、経営の意思決定へ",
          blocks: [
            { photos: ["photos/s05/05.jpg"], text: "サービスデザインが、個別の課題解決にとどまらず、経営判断に影響を与える存在になるための講演。\n\n目的は役職や「席」を得ることではなく、==人々と事業にインパクトを生むこと==である。" },
            { photos: ["photos/s05/06.jpg"], text: "顧客は一人ひとりの人間であり、組織の意思決定はその体験を左右する。悪い体験は約60人に、良い体験は約12人に共有される。だからこそ、顧客の立場を代弁するデザインが意思決定に関わる必要がある。\n\n財務・法務・人事・営業などと違い、デザインの必要性は自動的には認められない。企業から「必要だ」と思われる価値を示すことが出発点になる。" },
          ],
        },
        {
          title: "キャリアと、反脆弱性",
          blocks: [
            { photos: ["photos/s05/07.jpg"], text: "**Whirlpool → Samsung → 3M → Deutsche Telekom**\n\n家電ではテクノロジーと顧客体験の接点を、Samsungでは携帯電話からスマートフォンへの転換を通じて、顧客行動が市場を変える力を学んだ。3Mでは、ポスト・イットの色変更のような仕事でも約10件の特許が関わり、技術を人々にとって意味のある課題と結び付ける重要性を実感した。\n\nDeutsche Telekomでは、会社を顧客中心へ変えることを期待された。ただし、一人のデザイン責任者だけで組織全体を変えることはできない。" },
            { photos: ["photos/s05/08.jpg"], text: "レジリエンスが「耐えて元に戻る力」なら、**反脆弱性**は「変化や混乱を通じて、より強くなる力」。\n\nデザイナーの課題解決の方法論、微かな兆候を捉える力、未開拓領域やリソース不足を活かす力が、その土台になる。計算されたリスクを取ると、学びが生まれ、学びがエネルギーに、エネルギーが推進力に、推進力が変化につながる。" },
          ],
        },
        {
          title: "経営の場に入る",
          blocks: [
            { photos: ["photos/s05/09.jpg"], text: "「なぜ経営の場にいたいのか」を明確にする。目指すのは地位ではなく、人々へのインパクトである。\n\nデザインの専門用語ではなく、経営層が理解できる言葉で話す。多国籍チームでイタリア語ではなく英語で話すように。==伝わらないこと自体を、デザイナーが解くべき課題として捉える。==" },
            { photos: ["photos/s05/10.jpg"], text: "デザインの価値は、解決策をつくることだけではない。意思決定が顧客や事業にもたらす影響を理解し、**より良い判断を、より早く**下せるよう支えることにある。\n\n上級管理職が間接情報だけに頼らず、顧客と直接話す機会をつくることも、そのための取り組みになる。" },
            { photos: ["photos/s05/11.jpg"], text: "デザインを、依頼に応えて解決策を提供する機能から、事業の方向性に貢献する戦略的な機能へと位置付け直す。単なる「ソリューション提供者」ではなく、戦略的なインパクトを生む存在として見られることが重要。" },
          ],
        },
        {
          title: "影響力をつくる",
          blocks: [
            { photos: ["photos/s05/12.jpg"], text: "影響力は役職ではなく、課題や方針が固まる前の議論に参加することで生まれる。\n\n分断された顧客体験を改善する「One Experience」は3年前に始まり、多くの国・関係者との調整が必要だった。良い解決策をつくることと同じくらい、理解と受容を得ることが重要。イノベーションの課題は、イノベーションがどう理解されるかにある。" },
            { photos: ["photos/s05/13.jpg"], text: "デザインの理念や価値観だけでは、意思決定にはつながらない。経営の場で問われるのは予算・時間・リソース。「何を大切にするか」に加えて、「実現すると何が変わるか」を伝える。" },
            { photos: ["photos/s05/14.jpg"], text: "3Mでは、支持を集めるアイデアには、すでにチームと検証済みの解決策が伴っていた。\n\nAIによる「アプリレス・フォン」は、経営幹部がデザイナーを求めたことから始まり、5〜6人が稼働の半分を持ち寄って小さな予算で形にした。MWCの小さなブースでの展示はBloombergに「必見」と取り上げられ、24〜48時間で約10億インプレッションを獲得。4日後、CEOが市場投入を決めた。\n\n教訓は、==言葉で説明するだけでなく、実物を見せて可能性を伝えること==。" },
            { photos: ["photos/s05/15.jpg"], text: "サービスデザイナーへの他部門からの依頼が増えるなか、どこまでを担い、何が必要かを交渉することも重要になる。Deutsche Telekomでは約4年前、エコシステムをデザインするためにサービスデザイナーを大規模に採用した。" },
          ],
        },
        {
          title: "信頼を築き、リードする",
          blocks: [
            { photos: ["photos/s05/16.jpg"], text: "顧客を代弁する立場から積極的に発言し、「その判断は顧客の役に立つか」と問い続ける。煙たがられることがあっても、発売後に問題が表面化するより、発売前に問いを立てる方がよい。" },
            { photos: ["photos/s05/17.jpg"], text: "黄金律は「**100を約束し、105を届ける**」。約束したことを確実に実行し、期待を少し上回る成果を届けることが、次の仕事や判断への信頼を築く。" },
            { photos: ["photos/s05/18.jpg"], text: "デザインの成果を、戦略や事業へのインパクトとして伝える。エンジニアリングやマーケティングも「理解されていない」と感じている。デザインだけを特別視せず、部門を超えた共通言語を見つけることが重要。" },
            { photos: ["photos/s05/19.jpg"], text: "戦略・オペレーション・テクノロジー・財務・リスク・ガバナンスを理解し、デザインの判断を事業全体の文脈に置く。\n\n早い段階からビジネスに近づくことが大切。Monica自身も、CFOや事業責任者に18か月間同行して学んだ。" },
          ],
        },
        {
          title: "不確実性と、デザインの未来",
          blocks: [
            { photos: ["photos/s05/20.jpg"], text: "戦略との整合性、使えるリソース、予算を事前に確認し、チームが取り組める条件を整える。リーダーが「皆を支える」と言えることが、挑戦の土台になる。" },
            { photos: ["photos/s05/21.jpg"], text: "「問題を見つけて解決する」だけでなく、新しい機会を生み出す姿勢へ。機会を形にして展開し、結果から学び、適応する。" },
            { photos: ["photos/s05/22.jpg"], text: "COVIDはデジタルの普及を約15年早めた。生成AIは制作を速めるだけでなく、消費者の行動や、音声・対話型の体験も変えていく。\n\n==制作が速くなるほど、「何を、なぜつくるか」を判断する上流の戦略的活動が重要になる。==すべての解決策に意味があるわけではないからこそ、サービスデザインが経営判断に関わる必要がある。" },
            { photos: ["photos/s05/23.jpg"], text: "デザイン教育では、ビジネスを学ぶ機会が十分ではない。ミラノ工科大学は、デザインスクールとビジネススクールを組み合わせた修士課程「Strategic Design for Innovation and Transformation」を開設した。" },
          ],
        },
        {
          title: "質疑応答：チームづくり",
          blocks: [
            { text: "着任時、Monicaは「一人では会社を顧客中心にできない」と伝えた。半年経っても参加できた経営会議は3回だけ。そこから、経営層が顧客と直接話す取り組みが生まれた。" },
            { text: "経営層のビジョンをチームへ伝えるために：", list: ["方向性・基準・期待を明確に伝える。", "年2回のデザインサミットと隔週のミーティングで認識を合わせる。", "フラットで開かれた組織を保ち、誰もが自ら動ける文化を育てる。"] },
          ],
        },
      ],
      // トップの「インサイト」カード。head＝見出し、text＝本文、hl＝ページ内で何番目のハイライトへ移動するか（概要→ポイントの順に1から数える）
      learnings: [
        { hl: 1, head: "欲しいのは席ではなく、インパクト", headEn: "Impact, not a seat",
          text: "経営の場に入ること自体が目的ではない。デザインが目指すのは、人々と事業に実際のインパクトを生むこと。そこから逆算して、関わり方を決める。",
          en: "Getting into the boardroom isn't the goal. Design is there to create real impact for people and the business — work backward from that." },
        { hl: 2, head: "伝わらないのも、デザインの課題", headEn: "Not understood? Design it",
          text: "経営層にデザインが伝わらないなら、それは相手の問題ではなく、デザイナーが解くべき課題。相手の言葉で語り直すところまでが仕事になる。",
          en: "If the boardroom doesn't understand design, that's not their problem — it's a design problem. Retelling it in their language is part of the job." },
        { hl: 3, head: "語るより、見せる", headEn: "Show, don't just tell",
          text: "小さなチームと予算でつくったプロトタイプが、展示を通じて市場投入の判断を動かした。可能性は言葉より、実物のほうが早く伝わる。",
          en: "A prototype built by a small team on a small budget moved a launch decision. Possibility travels faster as a real thing than as words." },
        { hl: 4, head: "速くつくれるほど、上流が効く", headEn: "Faster making, stronger front end",
          text: "AIで制作が速くなるほど、「何を、なぜつくるか」を決める上流の判断が価値を持つ。すべての解決策に意味があるわけではないから。",
          en: "The faster AI makes production, the more the front end matters — deciding what to build and why. Not every solution is meaningful." },
      ],
      insights: [
        "提案資料に、デザインの価値だけでなく、予算・期間・リソースと事業インパクトを並べて書く。",
        "方針が固まる前の段階から、関係者との対話に入れる場をつくる。",
        "説明資料だけで終わらせず、早い段階で触れるプロトタイプを見せて合意をつくる。",
      ],
      photos: ["03", ...Array.from({ length: 19 }, (_, i) => String(i + 5).padStart(2, "0"))].map((n) => `photos/s05/${n}.jpg`),
      en: {
        keyPhrase: "If the boardroom doesn't understand, it's the designer's problem to solve.",
        summary:
          "A keynote by Monica Dalla Riva, SVP and Chief Design Officer at Deutsche Telekom, on what it takes for service design to go beyond solving individual problems and influence executive decision-making.\n\nDrawing on a career through Whirlpool, Samsung, 3M and Deutsche Telekom, she covered 19 themes: anti-fragility, speaking the business language, entering the conversation early, showing rather than telling, and the role of design in the age of AI.",
        points: [
          { title: "Design in the Decision Room", blocks: [
            "How service design can go beyond solving individual problems and influence executive decisions.\n\nThe goal is not a title or a “seat”, but ==impact on people and the business==.",
            "Customers are people, and organizational decisions shape their experience. A bad experience is shared with about 60 people, a good one with about 12. So design, speaking for the customer, has to be part of decisions.\n\nUnlike finance, legal, HR or sales, design is not a mandatory function. The starting point is showing value that makes the company want it inside.",
          ] },
          { title: "Career and Anti-fragility", blocks: [
            "**Whirlpool → Samsung → 3M → Deutsche Telekom**\n\nHome appliances taught the mix of technology and customer experience. At Samsung, the shift from mobile phones to smartphones showed that customers, not managers, change markets. At 3M, even changing Post-it colors involved about 10 patents — the lesson was to link technology to problems that matter to people.\n\nDeutsche Telekom hired her to help make the company customer-centric. But one design lead alone cannot change a whole organization.",
            "If resilience means resisting and returning to the original position, **anti-fragility** means growing stronger through disruption.\n\nDesigners are well suited to it: a problem-solving methodology, attention to weak signals, and the ability to use white spots and resource gaps. Calculated risk-taking generates learning, learning becomes energy, energy becomes momentum, and momentum becomes change.",
          ] },
          { title: "Inside the Boardroom", blocks: [
            "Be clear about why you want a seat in the boardroom. The answer is impact on people, not status.\n\nSpeak the business language, not design jargon — like speaking English rather than Italian in a multinational team. ==If the boardroom doesn't understand, treat it as a problem the designer has to solve.==",
            "Design's value is not only in making solutions. It helps an organization make **a better decision, sooner**, with a clearer understanding of its consequences for customers and the business.\n\nCreating chances for senior leaders to talk with customers directly, instead of relying on secondhand information, is part of that.",
            "Reposition design from a function that delivers solutions on request to a strategic capability that shapes the direction of the business — a strategic impact player, not just a solution provider.",
          ] },
          { title: "Building Influence", blocks: [
            "Influence is different from a job title. It comes from being in the conversation while the issue is still taking shape.\n\nThe “One Experience” project, started three years ago to fix a fragmented customer experience, involved many countries and stakeholders. Acceptance matters as much as the solution: the problem of innovation is the understanding of innovation.",
            "Design values alone don't drive decisions. Decision rooms ask about budget, time and resources. Add what will change to what you care about.",
            "At 3M, winning ideas arrived with formed teams and tested solutions.\n\nThe AI “app-less phone” started with an executive asking for a designer. Five or six people pooled half their time on a small budget. A very small stand at MWC was named a must-see by Bloomberg, drew about 1 billion impressions in 24–48 hours, and four days later the CEO said to bring it to market.\n\nThe lesson: ==show what's possible with the real thing, not only words==.",
            "With service designers now in high demand from peers, negotiating scope and resources matters. Deutsche Telekom hired service designers massively about four years ago to design ecosystems.",
          ] },
          { title: "Earning Trust and Leading", blocks: [
            "Be a vocal thought leader for the customer and keep asking whether a decision helps customers. Even if it's annoying, it's better before launch than after.",
            "The golden rule: **promise 100, deliver 105**. Delivering what you promise, and a little more, builds trust for the next project and decision.",
            "Convey design's results as impact on strategy and business. Engineering and marketing also feel misunderstood, so don't treat design as special — find a common language across functions.",
            "Understand strategy, operations, technology, finance, risk and governance, and place design decisions in the context of the whole business.\n\nGet close to the business early. Monica herself spent 18 months shadowing the CFO and business leaders.",
          ] },
          { title: "Uncertainty and the Future of Design", blocks: [
            "Check strategy fit, resources and budget up front so the team has what it needs. A leader who can say “I have their backs” gives the team room to try.",
            "Move from problem-solution mode to opportunity mode: generate opportunities, roll them out, then learn and adapt.",
            "COVID accelerated digital adoption by about 15 years. Generative AI not only speeds production but changes consumer behavior and enables voice and interactive experiences.\n\n==The faster production gets, the more the strategic front end — deciding what to make and why — matters.== Not every solution is meaningful, which is why service design should sit in the boardroom.",
            "Design schools don't cover business enough. Politecnico di Milano launched a Master in Strategic Design for Innovation and Transformation, combining its design and business schools.",
          ] },
          { title: "Q&A: Building the Team", blocks: [
            "When she joined, Monica said one person can't make a company customer-centric alone. After six months she had attended only three leadership meetings. That led to initiatives for leaders to speak with customers directly.",
            { text: "Translating the boardroom vision to the design team:", list: ["Communicate directions, standards and expectations clearly.", "Align through two design summits a year and bi-weekly calls.", "Keep a flat, open organization where everyone feels empowered."] },
          ] },
        ],
        insights: [
          "In proposals, put budget, timeline, resources and business impact next to the design value.",
          "Create ways to join stakeholder conversations before direction is set.",
          "Don't stop at slides — show a prototype people can touch early to build agreement.",
        ],
      },
    },
    {
      id: "s06",
      title: "The Invisible Backstage: Operations as Design",
      speaker: "Speaker Name", org: "Organization（仮）",
      day: "Day 2", time: "11:00", track: "Operations",
      cardCover: "photos/s06/card-speaker.jpg", cardBg: "#ffffff",
      keyPhrase: "良い体験は、見えない舞台裏でつくられる。",
      summary: "フロントの体験改善が続かない原因はバックステージにある。オペレーション設計を巻き込むためのブループリント活用法。（仮テキスト）",
      points: [
        { title: "Blueprint を現場と描く", body: "現場スタッフと一緒に描くことで実行可能性が上がる。" },
        { title: "例外処理こそ設計する", body: "ハッピーパス以外のフローを優先的に描く。" },
        { title: "従業員体験", body: "EXの改善がCXに波及する。" },
      ],
      insights: ["ブループリントの作成に現場担当者を必ず招く。", "例外フローのレビューを定例化する。"],
      photos: phs("s06", 5),
    },
    {
      id: "s07",
      title: "Scaling the Connective Tissue: State of Journey Management 2026",
      speaker: "Anna Yip / Marc Stickdorn / Sayali Bharambe",
      org: "Smaply / This is Journey Management (the book)",
      day: "Day 2", time: "14:00", track: "Journey management",
      cardCover: "photos/s07/card-speaker.jpg", cardBg: "#f8efe6",
      keyPhrase: "測れるものではなく、意味のあるものを測る。",
      summary: "サービスデザインの成果をどう測り、どう伝えるか。定量と定性を組み合わせた評価モデルの紹介。（仮テキスト）",
      points: [
        { title: "Theory of Change", body: "成果までの因果を仮説として描く。" },
        { title: "ストーリーで補う", body: "数字に現れない変化をナラティブで伝える。" },
        { title: "継続的な計測", body: "リリース後も指標を追い続ける体制。" },
      ],
      insights: ["プロジェクト開始時に Theory of Change を1枚で描く。", "成果報告に“ユーザーの声”のセクションを必ず入れる。"],
      photos: phs("s07", 5),
    },
    {
      id: "s08",
      title: "Bad Services: How to Fix Services That Don't Work",
      speaker: "Lou Downe",
      org: "The School of Good Services — Founder & Director",
      day: "Day 3",
      time: "—",
      track: "Service quality / Organisation",
      cover: "photos/s08/cover.jpg",
      coverFull: true,
      cardCover: "photos/s08/card-speaker.jpg",
      cardBg: "#ffffff",
      keyPhrase: "雑務に見える90%こそ、サービスデザインの仕事。",
      summary:
        "『Good Services』の著者で、英国政府でサービスデザインと基準づくりを7年間率いたLou Downe（The School of Good Services）による基調講演。新刊『Bad Services』をもとに語った。\n\nテーマは「良いサービスの条件」の繰り返しではなく、==なぜ、その条件を満たすことがこれほど難しいのか==。英国の介護者手当などの事例から、悪いサービスが生まれる仕組みを読み解き、それを生む5つの原因と、権限がなくても今いる場所から始められる対処を示した。",
      overviewPhotos: ["photos/s08/ob1.jpg", "photos/s08/ob2.jpg"],
      points: [
        {
          title: "なぜ、良いサービスはつくりにくいのか",
          blocks: [
            { photos: ["photos/s08/01.jpg", "photos/s08/02.jpg"], row: true, text: "『Good Services』の原則は、業界を問わず利用者がサービスに求める基本的な条件をまとめたもの。サービスを見つけられること、期待が明確になること、本来達成したかったことを完了できること。\n\nこの6年間で世界も実現方法も大きく変わったが、原則そのものは変わっていない。" },
            { photos: ["photos/s08/03.jpg"], text: "何が良いかは分かっているのに、実現できない。現場では、見つけられない、期待が伝わらない、組織にも利用者にも意味が分からないサービスに向き合い続けている。\n\n難しいと感じるのは、努力不足ではなく、**実際に難しい仕事だから**。" },
            { photos: ["photos/s08/04.jpg"], text: "**10%がデザイン、90%がデザインを可能にする条件づくり。**\n\n利用者のニーズを捉え、ジャーニーを設計する仕事は全体の一部。大部分は、メール、会議、調整、予算、ガバナンス、関係づくり。組織が行うほぼすべてのことがサービスに影響するため、対象は画面や接点の設計にとどまらない。" },
            { photos: ["photos/s08/05.jpg"], text: "組織の問題は、絡み合った配線のように見える。「文化を変えよう」と言われても、何をどう変えるのか、権限がない中で何ができるのかが曖昧。\n\n『Bad Services』は、この絡まりを診断できる問題に分け、変化の糸口を探すための本。" },
            { photos: ["photos/s08/06.jpg"], text: "前提として、悪いサービスを個人の悪意で説明しない。多くのサービスは、利用者を困らせようとしてつくられたわけではなく、提供側も最善を尽くしている。事例を誰かの失敗として責めるのではなく、問題を生む条件を理解する。" },
          ],
        },
        {
          title: "事例：Carer's Allowance（介護者手当）",
          blocks: [
            { photos: ["photos/s08/07.jpg", "photos/s08/08.jpg"], row: true, text: "家族などを介護するためにフルタイムで働けない人を支える英国の制度。支給額は週£81.90。Webで見つけられ、フォームも簡潔で、「良いデジタル行政サービス」の例として扱われてきた。\n\nしかし受給者のVivian Groomには£16,105の返還請求が発生した。これは融資ではない。支援のはずの制度が、生活をかえって悪化させている。" },
            { photos: ["photos/s08/09.jpg"], text: "問題は画面の外にある制度条件。収入基準は週£151で、判定には税・National Insurance・認められる経費の調整が関わる。経費の条件は介護相手との関係によっても変わり、介護で忙しい人が正確に計算し続けるのは難しい。\n\n==見つけやすく、入力しやすいだけでは、サービス全体が機能しているとは言えない。==" },
            { photos: ["photos/s08/10.jpg", "photos/s08/11.jpg"], row: true, text: "基準を1ペニーでも超えると受給資格を失う。収入に応じて少しずつ減る仕組みではない。一方で、利用者が収入の変化を申告するまで支払いは続く。\n\n資格がないのにお金が振り込まれ、後で返還を求められる。複雑な判定と申告の責任を、ほかにも多くの負担を抱える利用者に負わせている。" },
            { photos: ["photos/s08/12.jpg", "photos/s08/13.jpg"], row: true, text: "最低労働時間が保証されない**ゼロ時間契約**では、週の収入が£0〜£312と大きく変わる。年間の一部の週しか対象にならないこともあり、その都度の把握と申告を求める設計は、現実の働き方とかみ合わない。" },
            { photos: ["photos/s08/14.jpg"], text: "34,500人超が、合計£251.7mの返還を求められている。これだけ多くの人に同じ結果が起きている以上、利用者個人の不注意では説明できない。サービス全体の問題である。" },
            { photos: ["photos/s08/15.jpg", "photos/s08/16.jpg"], row: true, text: "悪いサービスは、時間・お金・生活を奪う。深刻な被害だけでなく、返金依頼、書類探し、問い合わせの繰り返し、本人確認、パスワードの再設定も負担になる。" },
            { photos: ["photos/s08/17.jpg"], text: "一つひとつは小さな事務作業でも、英国全体では**年間150億時間、逸失所得は約£200bn、1人あたり22日**。宿泊・飲食業界全体の規模に近い。" },
            { photos: ["photos/s08/18.jpg"], text: "それでも、こうした話は提供する組織の中では響きにくい。サービスが失敗したときの組織の反応に、失敗の原因が表れる。" },
            { photos: ["photos/s08/19.jpg", "photos/s08/20.jpg"], row: true, text: "DWP（雇用年金省）の説明は、通知を強化して申告を促すというもの。要するに「もっとメッセージを送る」。\n\n政府内にすでにある所得データを使う、厳しい基準を見直す、介護者の支え方そのものを考え直す、といった方向には踏み込んでいない。利用者が従わないことを問題にする前に、従うこと自体が現実的な設計かを問う必要がある。" },
          ],
        },
        {
          title: "悪いサービスの罠",
          blocks: [
            { photos: ["photos/s08/21.jpg"], text: "==間違った問題を、間違った解決策で解こうとする。==それが機能しないと、利用者のせいにする。その結果、サービスの設計や組織の判断は見直されず、同じ問題が続く。\n\n公共だけでなく、民間でも起きている。" },
            { photos: ["photos/s08/22.jpg"], text: "**Uber**：英国への展開時に二要素認証を必須化した。車内に携帯電話を忘れると、その電話で認証できないため運転手に連絡できない。端末の位置追跡で運転手の自宅まで取りに行く利用者も出た。不正防止策が、利用者と運転手の双方に新たなリスクを生んだ。" },
            { photos: ["photos/s08/23.jpg"], text: "**漁船船長の健康基準**：海上での健康上の事故を防ぐため、厳格なBMI基準を6か月未満の猶予で導入した。仕事を続けるために急激な減量や肥満外科手術に踏み切る人が出て、「健康を守る」ための要件が、かえって健康を危険にさらした。" },
            { photos: ["photos/s08/24.jpg"], text: "悪いサービスは、利用者との関係も悪くする。組織からは利用者が失敗を繰り返しているように見え、利用者からは組織が不合理な手続きを押しつけているように見える。相互不信が強まり、実態を知る接点が失われ、さらにサービスが悪化する。" },
          ],
        },
        {
          title: "行き詰まったときの3つの選択肢",
          blocks: [
            { photos: ["photos/s08/25.jpg"], text: "悪いサービスが生じるのは、次のどれかの状態にあるとき。", list: ["**問題を知らない**：モニタリングや測定がなく、失敗に気づけていない。", "**問題は知っているが、解き方が分からない**：問題設定や対策を誤る。", "**問題も解決策も分かっているが、優先できない**：ほかの仕事が常に上位になる。==サービスデザイナーが置かれやすいのは、特に最後の状態。=="] },
            { photos: ["photos/s08/26.jpg"], text: "そこで取れる選択肢は3つ。", list: ["==組織の共感を育てる==：ステークホルダーをユーザーリサーチに招き、現場の問題を直接見てもらう。重要だが、時間と労力がかかる。", "==翻訳者になる==：利用者の困りごとを、収益の損失やリスクなど、組織が判断に使う言葉に翻訳する。", "==根本原因を解く==：そもそもなぜ問題が生まれ、放置されてきたのかを理解して変える。"] },
            { photos: ["photos/s08/27.jpg"], text: "Louが特に強調するのは3つ目。最も見過ごされ、最も怖い選択肢だが、大きな権限がなくてもできることは必ずある。\n\n最も重要なのに問われない質問は、**「そもそも、なぜこのサービスはここまで悪くなったのか？」**。なぜ気づかなかったのか。気づいていたなら、なぜ違う解決策を選んでいるのか。表面の不具合だけでなく、それを生んだ組織の条件まで掘り下げる。" },
            { photos: ["photos/s08/28.jpg", "photos/s08/29.jpg"], row: true, text: "利用者が分からない、ニーズが優先されない、部門間で話さない、予算も権限もない。こうした悩みは組織を超えて繰り返し現れる。\n\nサービスデザインに賛成しても、必要な時間・支援・権限まで用意されているとは限らない。「組織による」で終わらせず、良いサービスを届けるために共通して必要な条件を整理する。" },
          ],
        },
        {
          title: "悪いサービスを生む5つの原因",
          blocks: [
            { photos: ["photos/s08/30.jpg"], list: [
              "**1. Purpose**：何のためのサービスかを忘れる。組織やサービスが長く続くほど、==「どう提供するか」==の会話が増え、==「なぜ提供するか」==が失われやすい。",
              "**2. Users**：利用者の能力、時間、余裕を考慮せず、時間も労力も無限に使える==「理想の利用者」を前提にしてしまう。==社内サービスや義務的な手続きでは、使いやすさが後回しになりがち。",
              "**3. Materials**：サービスをつくる素材を理解していない。不適切な技術選択、長い調達、AIの過大・過小評価につながる。介護者手当では、政府内の別部門が持つ所得データに目を向けられていない。",
              "**4. Risk**：==失敗への恐れが短期的な対処を促し、実験を妨げる。==問題が残ってさらに失敗し、いっそうリスク回避的になる。==リスクをゼロにしようとすると、むしろ改善できなくなる。==",
              "**5. Structure**：サービスは多くのチームや組織をまたぐのが普通。一方、==組織構造やビジネスモデルは、その協働を支えるようにはできていない。==",
            ] },
            { photos: ["photos/s08/31.jpg"], text: "**Take a deep breath — まず深呼吸。**\n\n5つの問題は大きく、すぐには解決できない。それでも、問題を診断できること自体が前進の一歩。難しさを、自分の努力や能力が足りない証拠として受け止めない。" },
          ],
        },
        {
          title: "2つの時間軸で働く",
          blocks: [
            { photos: ["photos/s08/32.jpg"], list: [
              "==Service up／現場から==：担当サービスを実例にし、パターンの公開、ブログ、成果共有会などを通して、ほかの人が学べる形にする。比較的速く進められる。",
              "==Organisation down／組織から==：戦略や組織の条件に働きかけ、将来、良いサービスをつくりやすくする。時間がかかる。",
            ], text: "2つを同時に進めるのは疲れるため、周囲の支援が必要。" },
            { photos: ["photos/s08/33.jpg"], text: "全体を変える権限がなくても、**今いる場所からできることは必ずある**。" },
          ],
        },
        {
          title: "5つの原因への対処",
          blocks: [
            { photos: ["photos/s08/34.jpg"], text: "5つの原因それぞれに、今いる場所から始められる対処がある。" },
            { photos: ["photos/s08/35.jpg"], text: "**Purpose**：効率やチケット数ばかりを話す会議で、「何を達成したいのか」を穏やかに問い直す。サービスが目的とする成果を実際に達成しているかを測る。「目的を見失っている」と正面から責めるより、日常の会話と成果の証拠から始める。" },
            { photos: ["photos/s08/36.jpg"], text: "**Users**：==なぜ利用者と距離ができたのかを理解する。==苦情への恐れや、社内利用者への思い込みがあるかもしれない。\n\nステークホルダーをリサーチに招き、利用者と話す機会をつくる。相手が責められていると感じず、安心して会話できるよう支える。目的は「共感を持て」と言うことではなく、共感を育てる経験をつくること。" },
            { photos: ["photos/s08/37.jpg"], text: "**Materials**：大工が木材を知るように、デザイナーもインターネット、AI、データ、データセンター、環境負荷を理解する。==まず自分たちが学び、アイデアと実装の距離を縮める。==\n\nステークホルダーにも、知らないことを恥じずに学べる安全な場を用意する。" },
            { photos: ["photos/s08/38.jpg", "photos/s08/39.jpg"], row: true, text: "**Ambiguity aversion（曖昧さ回避）**：==人は、結果が分からないことを避けがち。==組織の意思決定にもその傾向が現れる。\n\n短期×既知の仕事は常に選ばれ、長期×未知の仕事はほとんど選ばれない。しかし気候危機や未解明のサービス課題など、重要な問題はそこにある。リスクを最も避ける組織ほど、実験しないことで大きなリスクを抱える。" },
            { photos: ["photos/s08/40.jpg"], text: "**Risk**：まず目先の危機感を和らげ、長期・未知の問題を話せる場を確保する。ハックデー、ワークショップ、スプリント末の時間などが例。\n\n成果を事前に保証できなくても、どう検証し学ぶかというプロセスの見通しで安心をつくる。何もしないことが生む損失も示す。" },
            { photos: ["photos/s08/41.jpg"], text: "**Structure**：完璧で固定的な組織構造はない。時間をかけて新しい組織モデルをつくっても、形の違う、より高価なサイロが生まれるだけかもしれない。\n\n「サイロをなくしてから動く」のではなく、同じサービスに関わる人を集める、実践コミュニティをつくるなど、サイロがあっても協働できる仕組みから始める。" },
          ],
        },
        {
          title: "メールや会議も、本業そのもの",
          blocks: [
            { photos: ["photos/s08/42.jpg"], text: "サービスデザインは、ジャーニーマップや図をつくることだけではない。会話、メール、予算申請、関係づくり、APIの変更、優先順位づけなど、良いサービスを可能にする仕事を含む。\n\n==「本来の仕事の邪魔をする雑務」に見える90%こそ、サービスデザインの仕事である。==" },
            { photos: ["photos/s08/43.jpg"], text: "窓の外を見る。深呼吸する。自分は最善を尽くしていると思い出す。強く気にかける人ほど燃え尽きやすいため、組織だけでなく自分自身のケアも必要。何かを小さく試すより、何もしない方が危険なこともある。\n\n最後は架空の「Bad Services Corporation」の入社案内動画で、見つけにくく、使いにくく、ニーズを満たさないサービスを風刺して締めくくった。" },
          ],
        },
        {
          title: "質疑応答：法令が間違った問題を解こうとしているとき",
          blocks: [
            { text: "行政サービスの根拠となる法令自体が、間違った問題を解こうとしている場合はどうするか。", list: ["まず、本当に「法律」なのかを確かめる。実際には方針や慣習、誰かが半年前に言っただけのこともある。", "法令を解釈できる人を探し、変えられる範囲や運用上の余地を明らかにする。", "手書き署名の例では、法務の協力で可能・不可能を整理し、ほかのサービスでも使えるガイダンスをつくった。"] },
            { text: "本当に変えられない場合も、その結果利用者に何が起きているかを意思決定者に見せる。サービスは政策や法令を実現する手段であり、サービスが機能しなければ、政策も目的を果たせない。" },
          ],
        },
      ],
      // トップの「インサイト」カード。head＝見出し、text＝本文、hl＝ページ内で何番目のハイライトへ移動するか（概要→ポイントの順に1から数える）
      learnings: [
        { hl: 2, head: "使いやすい画面だけでは足りない", headEn: "A good form isn't enough",
          text: "見つけやすく入力しやすいサービスでも、画面の外にある制度条件が利用者を追い詰めることがある。サービス全体を見て初めて、機能しているかが分かる。",
          en: "A service can be easy to find and fill in, yet the rules behind the screen can still harm users. Only the whole service tells you whether it works." },
        { hl: 3, head: "罠は、利用者を責めること", headEn: "The trap ends in blame",
          text: "間違った問題を間違った解決策で解き、うまくいかないと利用者のせいにする。失敗への組織の反応に、失敗の原因が表れる。",
          en: "Solve the wrong problem with the wrong solution, then blame users when it fails. How an organisation reacts to failure shows why it failed." },
        { hl: 7, head: "根本原因に向き合う", headEn: "Go for the root cause",
          text: "共感を育てる、翻訳者になる、に続く3つ目の選択肢。最も怖いが、「なぜここまで悪くなったのか」を問うことは、権限がなくても始められる。",
          en: "After building empathy and translating, the third option is the scariest. But asking how the service got this bad needs no permission." },
        { hl: 14, head: "現場から上へ、組織から下へ", headEn: "Service up, organisation down",
          text: "担当サービスを実例にして速く示し、組織の条件にはゆっくり働きかける。2つの時間軸を同時に走らせるには、仲間の支えが要る。",
          en: "Show fast through your own service, and work slowly on the organisation's conditions. Running both timescales takes support from others." },
        { hl: 19, head: "90%も、本業", headEn: "The 90% is the work",
          text: "メール、会議、予算、関係づくり。デザインを可能にする条件づくりこそが仕事。そして、強く気にかける人ほど自分のケアを忘れない。",
          en: "Emails, meetings, budgets, relationships: creating the conditions for design is the work. And those who care most need to look after themselves." },
      ],
      insights: [
        "改善提案では、画面の使いやすさだけでなく、その裏にある制度・ルール・運用まで含めて見る。",
        "失敗したとき、利用者のせいにする前に「なぜここまで悪くなったのか」をチームで問う。",
        "自分の担当サービスを実例にして、パターンや学びを社内に公開する。",
      ],
      photos: [...Array.from({ length: 43 }, (_, i) => String(i + 1).padStart(2, "0"))].map((n) => `photos/s08/${n}.jpg`),
      en: {
        insights: [
          "In proposals, look beyond screen usability to the rules, policies and operations behind the service.",
          "When something fails, ask as a team how it got this bad before blaming users.",
          "Use your own service as an exemplar and publish its patterns and lessons internally.",
        ],
        keyPhrase: "The 90% that feels like admin is the work of service design.",
        summary:
          "A keynote by Lou Downe of The School of Good Services, author of Good Services, who spent seven years leading service design and standards in UK government. The talk drew on their new book, Bad Services.\n\nRather than repeating what makes a good service, Lou asked ==why meeting those conditions is so hard==. Using cases such as the UK's Carer's Allowance, they unpacked how bad services happen, named five causes, and showed what anyone can start doing from where they are, even without permission.",
        points: [
          { title: "Why Good Services Are So Hard", blocks: [
            "The Good Services principles describe what almost every user needs from almost every service: being able to find it, knowing what to expect, and completing what they set out to do.\n\nIn six years the world and the ways of delivering have changed a lot, but the principles have not.",
            "We know what good looks like, yet can't deliver it. Practitioners keep dealing with services nobody can find, that don't set expectations, and that make no sense to the organisation or its users.\n\nIf the work feels hard, it's **because it is hard**, not because you aren't trying enough.",
            "**Service design is 10% design and 90% creating the conditions for good design to happen.**\n\nUnderstanding needs and designing journeys is only part of it. Most of it is emails, meetings, negotiation, budgets, governance and relationships. Almost everything an organisation does affects its services, so the work goes far beyond screens and touchpoints.",
            "Organisational problems look like tangled wiring. People are told to “change the culture”, with no guidance on what or how, and often no permission.\n\nBad Services is a book for untangling that mess into problems you can diagnose, and finding where change can start.",
            "A caveat: bad services are rarely deliberate. Most are delivered by people doing their best. Treat the examples with kindness and look at the conditions that create the problem, rather than blaming individuals.",
          ] },
          { title: "Case Study: Carer's Allowance", blocks: [
            "A UK benefit for people who can't work full-time because they care for a loved one. It pays £81.90 a week. It's easy to find online, the forms are simple, and it was long used as an example of a good digital government service.\n\nYet one recipient, Vivian Groom, was asked to repay £16,105. It isn't a loan. A service meant to help left people worse off.",
            "The problem sits outside the screen. The earnings limit is £151 a week, after tax, National Insurance and allowable expenses, and those expenses vary with your relationship to the person you care for. Hard to keep calculating when you're busy caring.\n\n==Being easy to find and fill in doesn't mean the whole service works.==",
            "Earn 1p over the limit and you lose all eligibility; there's no gradual taper. Yet payments continue until you report the change.\n\nSo money arrives that people aren't entitled to, and they're later asked to pay it back. The burden of complex rules and reporting falls on users who already carry a lot.",
            "With **zero-hour contracts**, weekly earnings can swing from £0 to £312. People may be eligible for only a few weeks a year, so asking them to track and report every change doesn't match how they actually work.",
            "More than 34,500 people owe £251.7m in total. When so many people hit the same result, it can't be explained by individual carelessness. It's a problem with the service.",
            "Bad services waste time, money and lives. Beyond the life-ruining cases, there's the everyday admin: chasing refunds, finding documents, calling repeatedly, proving identity, resetting passwords.",
            "Small tasks add up to **15 billion hours a year in the UK, about £200bn in lost earnings, or 22 days per person**, close to the size of the hospitality sector.",
            "Still, these stories don't land inside the organisations that run the services. How an organisation reacts when a service fails tells you a lot about why it failed.",
            "The DWP (Department for Work and Pensions) responded with an “enhanced notification strategy”: in other words, more messages telling people to report changes.\n\nIt didn't use the income data government already holds, revisit the harsh threshold, or rethink how to support carers. Before blaming users for not complying, ask whether complying is realistic at all.",
          ] },
          { title: "The Bad Service Trap", blocks: [
            "==Solving the wrong problem with the wrong solution.== When it doesn't work, blaming users. So neither the service nor the decisions behind it get revisited, and the problem continues.\n\nThis happens in the private sector too.",
            "**Uber** made two-factor authentication mandatory when it launched in the UK. Leave your phone in the car and you can't authenticate to contact the driver. Some people tracked their phones to drivers' homes. A security measure created new risks for riders and drivers alike.",
            "**Health rules for fishing captains**: to prevent health incidents at sea, a strict BMI requirement was introduced with under six months' notice. Some captains took drastic steps, including bariatric surgery, to keep working. A rule meant to protect health put health at risk.",
            "Bad services create bad relationships with users. The organisation sees users failing again and again; users see an organisation forcing unreasonable processes on them. Mistrust grows, the contact that reveals reality is lost, and the service gets worse.",
          ] },
          { title: "Three Options When You're Stuck", blocks: [
            { text: "Bad services happen when we have:", list: ["**Problems we don't know are happening**: nobody monitors or measures the service.", "**Problems we know about but don't know how to solve**: we frame the problem or the fix wrongly.", "**Problems we know how to solve but can't prioritise**: other work always comes first. ==This is where service designers most often sit.=="] },
            { text: "There are three options:", list: ["==Build organisational empathy==: bring stakeholders into user research to see the problems first-hand. Important, but slow and tiring.", "==Become a translator==: turn user problems into the language the organisation decides with, such as lost revenue and risk.", "==Solve the root cause==: understand why the problem arose and was left alone, and change that."] },
            "Lou stressed the third. It's the most overlooked and the scariest option, but there is always something you can do, whatever your permission.\n\nThe most important question nobody asks: **“How did this service get this bad in the first place?”** Why didn't we notice? If we did, why are we choosing the wrong fix? Dig past the surface faults into the organisational conditions that caused them.",
            "We don't know our users, needs aren't a priority, teams don't talk, there's no budget or power. These complaints recur across organisations.\n\nSaying yes to service design doesn't mean the time, support and permission come with it. Instead of “it depends”, Lou set out what every organisation needs to be able to do to deliver a good service.",
          ] },
          { title: "Five Causes of Bad Services", blocks: [
            { list: [
              "**1. Purpose**: we forget why the service exists. The older an organisation or service gets, the more we talk about ==how we deliver== it and the less about ==why we deliver it==.",
              "**2. Users**: we ignore users' capacity, time and headroom, and design for an ==ideal user with unlimited time and effort.== Internal and mandatory services are especially prone to this.",
              "**3. Materials**: we don't understand what services are made of, which leads to odd technology choices, long procurement, and over- or underestimating AI. Carer's Allowance overlooked income data held elsewhere in government.",
              "**4. Risk**: ==fear of failure drives short-term fixes and blocks experiments.== Problems remain, more things fail, and we become even more risk-averse. ==Trying to remove all risk makes improvement impossible.==",
              "**5. Structure**: services usually span many teams and organisations, ==but our structures and business models aren't built to support that collaboration.==",
            ] },
            "**Take a deep breath.**\n\nThese five are big and won't be solved quickly. But being able to diagnose them is real progress. Don't take the difficulty as proof that you aren't good enough.",
          ] },
          { title: "Working on Two Timescales", blocks: [
            { list: [
              "==Service up==: use your own service as an exemplar. Publish patterns, write blog posts, run show-and-tells so others can learn. This can move relatively fast.",
              "==Organisation down==: work on strategy and organisational conditions so good services become easier to build in future. This takes longer.",
            ], text: "Doing both at once is tiring, so you need other people's support." },
            "Even without permission to change the whole organisation, **there is always something you can do** from where you are.",
          ] },
          { title: "What to Do About Each Cause", blocks: [
            "Each of the five causes has something you can start on from where you are.",
            "**Purpose**: in meetings about efficiency and ticket counts, gently bring back “what are we trying to achieve?” Measure whether the service actually achieves its outcome. Start from everyday conversation and evidence, not by accusing people of losing their purpose.",
            "**Users**: ==understand why the organisation became disconnected from its users.== It may be fear of complaints, or assumptions about internal users.\n\nBring stakeholders into research and create chances to talk with users. Help them feel safe, not attacked. The aim isn't to tell people to have empathy, but to create experiences that build it.",
            "**Materials**: as a carpenter understands wood, designers should understand the internet, AI, data, data centres and their environmental impact. ==Start by learning yourselves, and close the gap between ideas and delivery.==\n\nGive stakeholders safe spaces to learn without embarrassment.",
            "**Ambiguity aversion**: ==people avoid situations where they don't know the outcome==, and organisational decisions follow suit.\n\nShort-term, known work is always chosen; long-term, unknown work almost never is. Yet that's where the important problems sit, from the climate crisis to service failures we haven't found yet. The most risk-averse organisations, by not experimenting, often take the biggest risks.",
            "**Risk**: first de-escalate the crisis and make space to talk about the long term and the unknown, such as hack days, workshops or time at the end of a sprint.\n\nWhen outcomes can't be guaranteed, offer certainty in the process: how you'll test and learn. And show the cost of doing nothing.",
            "**Structure**: no structure is perfect or static. A long reorganisation may only produce new silos in a different, more expensive shape.\n\nDon't wait for the silos to go. Start with ways to collaborate despite them: bring together everyone working on the same service, or set up communities of practice.",
          ] },
          { title: "Emails and Meetings Are the Job", blocks: [
            "Service design isn't only journey maps and diagrams. It includes conversations, emails, funding bids, relationships, API changes and prioritisation: everything that makes good services possible.\n\n==The 90% that looks like admin getting in the way of the real work is the work of service design.==",
            "Look out the window. Take a deep breath. Remember you're doing your best. The people who care most burn out fastest, so look after yourself as well as the organisation. Doing nothing can be riskier than trying something small.\n\nLou closed with an induction video for the fictional “Bad Services Corporation”, a satire of services that are hard to find, hard to use and don't meet anyone's needs.",
          ] },
          { title: "Q&A: When Legislation Targets the Wrong Problem", blocks: [
            { text: "What if the legislation behind a public service is trying to solve the wrong problem?", list: ["First check whether it really is legislation. It may be policy, habit, or something someone said six months ago.", "Find someone who can interpret the legislation and identify the wiggle room.", "With wet signatures, a legal colleague clarified what was and wasn't allowed, and the team wrote guidance other services could use."] },
            "If nothing can be changed, show decision-makers what happens to users as a result. Services are how policy is delivered; if the service fails, the policy fails too.",
          ] },
        ],
      },
    },
    {
      id: "s09",
      title: "Healthcare Journeys Beyond the Hospital Walls",
      speaker: "Speaker Name", org: "Organization（仮）",
      day: "Day 3", time: "10:00", track: "Healthcare",
      keyPhrase: "患者の旅は、病院の外で始まり、外で続く。",
      summary: "医療体験を病院内に閉じず、家庭・地域・デジタルまで含めて再設計したプロジェクトの紹介。（仮テキスト）",
      points: [
        { title: "生活全体を見る", body: "通院以外の時間にこそ課題がある。" },
        { title: "ケアの連携", body: "家族・地域・医療者の情報共有を設計する。" },
        { title: "デジタルとの接続", body: "オンラインとオフラインの切れ目をなくす。" },
      ],
      insights: ["ジャーニーの範囲を“サービス提供者の外”まで広げて描く。"],
      photos: phs("s09", 5),
    },
    {
      id: "s10",
      title: "Futures Literacy for Service Designers",
      speaker: "Speaker Name", org: "Organization（仮）",
      day: "Day 3", time: "13:30", track: "Futures",
      keyPhrase: "未来は予測するものではなく、使いこなすもの。",
      summary: "不確実な時代に、未来を“複数形”で考えるためのスキル。シナリオとスペキュラティブデザインの実践法。（仮テキスト）",
      points: [
        { title: "Futures Cone", body: "起こりうる未来の幅を可視化する。" },
        { title: "Signals の収集", body: "日常の小さな変化の兆しを集める。" },
        { title: "Backcasting", body: "望ましい未来から今日の一歩を逆算する。" },
      ],
      insights: ["月1回の“シグナル共有”をチームで始める。", "提案書に未来シナリオを1枚入れる。"],
      photos: phs("s10", 5),
    },
  ],
};
