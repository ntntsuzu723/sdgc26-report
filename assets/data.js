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
    reporter: "NTTDATA / NATSUMI SUZUKI",
    dates: "2026.10.28 – 30",
    place: "Frankfurt",
    // トップのアーチに出す写真。空なら会場の写真（venuePhotos）を使用
    heroPhotos: [],
    // 会場の写真。トップのアーチに並べる
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
      "photos/venue/audience.jpg",
      "photos/venue/networking-hall.jpg",
      "photos/venue/your-responsibility.jpg",
      "photos/venue/human-in-the-loop-2.jpg",
      "photos/venue/fail-fast.jpg",
      "photos/venue/foyer.jpg",
      "photos/venue/sdsi-wall.jpg",
      "photos/venue/wicked-problem.jpg",
      "photos/venue/award-poster-carelink.jpg",
      "photos/venue/award-poster-iloq.jpg",
      "photos/venue/japan.jpg",
      "photos/venue/volunteers.jpg",
    ],
    aboutPhoto: ph("about", 900, 1150),
    // 英語版（無い項目は日本語を表示）
    en: {
      lead: "SDGC26 Conference Report",
      reporter: "NTTDATA / NATSUMI SUZUKI",
      place: "Frankfurt",
    },
  },

  sessions: [
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
        { hl: 7, head: "デザインの矢印が、逆を向いた", headEn: "The arrow of design has flipped",
          text: "デザインの向きが逆転しつつある。人がテクノロジーを理解する設計から、テクノロジーが人を理解する設計へ。デザイナーの成果物も、完成品からAIに渡すルールや制約へ移る。IKEAのテーブルではなく、組み立て説明書をつくる仕事になる。",
          en: "Design is flipping: from helping people understand technology to helping technology understand people. Deliverables shift from finished products to the rules we hand AI — less the IKEA table, more the manual." },
        { hl: 9, head: "「xxデザイナー」から\u200B「ユニバーサル\u200Bデザイナー」へ", headEn: "From \"xx designer\" to \"universal designer\"",
          text: "AIが制作作業の多くを担うなら、UI・UX・サービスといった肩書きの境界は意味を失う。領域を越えて動ける「ユニバーサル・デザイナー」が求められる。",
          en: "If AI takes over most craft work, labels like UI, UX or service designer lose their meaning. What's needed is a universal designer who moves across disciplines." },
        { hl: 11, head: "作るコストが\u200Bゼロなら、\u200B組織はどうなる", headEn: "If building costs nothing, what becomes of the org?",
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
      id: "s04",
      title: "Designing for Planetary Wellbeing",
      speaker: "Pietertje Doyle / Jeroen den Uijl", org: "Sopra Steria Next",
      cardCover: "photos/s04/card-speaker.jpg",
      cardBg: "#f8eedc",
      day: "Day 2", time: "16:00", track: "Sustainability",
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
      id: "s07",
      title: "Scaling the Connective Tissue: State of Journey Management 2026",
      speaker: "Anna Yip / Marc Stickdorn / Sayali Bharambe",
      org: "Smaply / This is Journey Management (the book)",
      day: "Day 2",
      time: "—",
      track: "Journey management",
      cover: "photos/s07/cover.jpg",
      coverFull: true,
      cardCover: "photos/s07/card-speaker.jpg", cardBg: "#f8efe6",
      keyPhrase: "マップは1割。残りの9割は、変化のマネジメント。",
      summary:
        "『This is Journey Management』の著者であるMarc Stickdorn（Smaply CEO）、Anna Yip、Sayali Bharambeによる講演。世界の実践者への80時間以上のインタビューとアンケートをもとにした調査レポート「State of Journey Management」の結果を紹介した。\n\nジャーニーマネジメントとは、ジャーニーを描くだけでなく、生きた情報システムを土台に管理し続ける実践のこと。それは新しいデザイン手法ではなく、社内外の複雑なプロセスを一つのストーリーにつなぐ「結合組織（connective tissue）」としてのマネジメントのアプローチだという。組織の適応力を育てる仕組み、組織ごとに違う始め方、そして始めるための5つのヒントが語られた。",
      overviewPhotos: ["photos/s07/ob1.jpg", "photos/s07/ob2.jpg"],
      points: [
        {
          title: "背景と調査方法",
          blocks: [
            { photos: ["photos/s07/01.jpg", "photos/s07/02.jpg"], row: true, text: "約10年前、ジャーニーマップは静的なものから動的なものへと変わり始めた。複数のマップをつなぎ、スプレッドシートやJiraのリアルタイムデータを取り込むようになった。\n\nMarcは2018年からジャーニーマネジメントを教えている。" },
            { photos: ["photos/s07/03.jpg", "photos/s07/04.jpg"], row: true, text: "2021年に『This is Journey Management』の執筆契約を結んだが、2022年ごろから業界が急速に変わり始めた。企業によって導入のしかたがまったく違っていたため、自分たちの考えだけを書くのではなく、実際に調査することにした。" },
            { photos: ["photos/s07/05.jpg", "photos/s07/06.jpg"], row: true, text: "AnnaとSayaliとともに、世界各地の実践者にインタビューを実施。インタビューは**80時間以上**、アンケートは4つの方法で配布し、139件の回答を集めた。\n\n結果はレポートとして [stateofjourneymanagement.com](https://stateofjourneymanagement.com) で公開されている。" },
          ],
        },
        {
          title: "ジャーニーマネジメントとは",
          blocks: [
            { photos: ["photos/s07/07.jpg"], text: "ジャーニーをマッピングするだけでなく、**常に管理し続ける実践**。その土台になるのは、生きた情報システムである。" },
            { photos: ["photos/s07/08.jpg", "photos/s07/09.jpg"], row: true, text: "まだ新しい分野だが急速に広がっており、実践者の多くは始めてから2〜4年ほど。主に成熟した大企業やレガシー企業で導入されている。こうした組織は、複雑なシステムをよりシンプルにしようとしている。" },
            { photos: ["photos/s07/10.jpg"], text: "目的は大きく2つに分かれる。", list: ["**対外的な目的**：顧客体験と製品の向上", "**組織内部の目的**：変革プロジェクトとプロセスの最適化"] },
            { photos: ["photos/s07/11.jpg"], text: "社内外の複雑なプロセスを、一貫したストーリーとして結び付ける**「結合組織（connective tissue）」**の役割を果たす。" },
            { photos: ["photos/s07/12.jpg"], text: "新たなデザイン手法ではなく、**マネジメントのアプローチ**である。リソースや意思決定をコントロールし、組織化し、方向付け、リードすることに焦点を当てる。\n\nマッピングは全体の約10％にすぎず、残りの90％は実行する変革を管理することに費やされる。" },
          ],
        },
        {
          title: "ダイナミック・ケイパビリティ・モデル",
          blocks: [
            { photos: ["photos/s07/13.jpg"], text: "実践者が挙げた93以上の活動・手法・ツールは、9つの実践領域に整理された。それらは、変化する環境に組織が適応する力＝**ダイナミック・ケイパビリティ**を育てる。", list: ["**感知と意味づけ（Sensing）**：基盤となる層。調査に基づいてジャーニーを描き、日々の働き方に組み込み、調査の能力を築く。", "**行動（Acting）**：体験の指標と比較基準を設け、共通言語を育て、ツールとガバナンスを標準化して、インサイトに基づく意思決定を可能にする。", "**変革（Transforming）**：ジャーニーを横断して戦略的な機会を見つけ、一貫したストーリーと優先順位を整え、組織の構造やシステムを変える。"] },
            { photos: ["photos/s07/14.jpg"], text: "マネージャーにとっては、次のような独自の仕組みになる。", list: ["戦略的な価値を、明確に言葉にできる。", "分野をまたいで戦略をそろえられる。たとえばパスワードリセットの問題を、コールセンターの問い合わせ量や製品改善のインサイトにつなげる。", "どの能力を築き、どこを緩めるべきかを見極め、サイロを崩す。", "エンタープライズアーキテクチャの一つの形として機能する。"] },
          ],
        },
        {
          title: "どの組織でも同じように機能するのか",
          blocks: [
            { photos: ["photos/s07/15.jpg"], text: "答えは「いいえ」。同じ順番で一段ずつ積み上げれば完成する、単純な手順型の方法ではない。" },
            { photos: ["photos/s07/16.jpg", "photos/s07/17.jpg"], row: true, text: "段階的に能力を育てられる組織もある。しかし大規模で成熟した組織では、段階的な積み上げが、競合する社内の取り組みに妨げられることがある。" },
            { photos: ["photos/s07/18.jpg"], text: "そこで最も効果的なのが**「ステルスモード」**。変えるべき意思決定や行動に狙いを定める。\n\nある組織は、対象を絞ったジャーニーのマッピングと比較できる指標から始め、まず戦略的な価値を説得力をもって示し、一貫したストーリーと優先順位の議論につなげる。" },
            { photos: ["photos/s07/19.jpg"], text: "別の組織は、実証的な調査、調査の能力づくり、共通言語づくりといった土台から始める。" },
            { photos: ["photos/s07/20.jpg"], text: "ジャーニーマネジメントはサービスデザインから生まれ、複雑さの中で、根拠に基づく緻密さをもって組織を導く**リーダーシップの実践**へと進化している。" },
          ],
        },
        {
          title: "始めるための5つのヒント",
          blocks: [
            { photos: ["photos/s07/21.jpg"], text: "「では、どうすれば経営層にこの価値が伝わるのか？」という問いへの答えとして、5つのヒントが示された。" },
            { photos: ["photos/s07/22.jpg"], text: "**1. ステルスモードで小さく始める。**ステルスとは隠すことではない。学べるほど小さく、効果を示せるほど現実的で、試しても安全な取り組みにする。" },
            { photos: ["photos/s07/23.jpg"], text: "**2. 組織の言葉で話す。**KPIや戦略的な取り組みなど、組織で使われている言葉に合わせる。" },
            { photos: ["photos/s07/24.jpg"], text: "**3. 手法ではなく、インパクトを示す。**サービスデザインが広がったときと同じように、組織が資金を出すのは手法ではなく、お金がかかっている問題の解決である。" },
            { photos: ["photos/s07/25.jpg"], text: "**4. リアクティブとプロアクティブを組み合わせる。**", list: ["**リアクティブ**：顧客の痛点や満たされないニーズに対応する。この多くは自動化できる。", "**プロアクティブ**：将来の顧客体験のビジョンを描き、サービスデザインで現状とのギャップを埋める。"] },
            { photos: ["photos/s07/26.jpg"], text: "**5. サービスデザインなしに、ジャーニーマネジメントは成り立たない。**ジャーニーマネジメントで何を直すかの優先順位を決めても、調査・プロトタイピング・実装は引き続き必要になる。取り組みを広げるには、サービスデザインを実践する能力と体制も広げる必要がある。\n\nこれは「AIでサービスデザインは終わった」という主張への反論にもなる。" },
          ],
        },
        {
          title: "最後に",
          blocks: [
            { photos: ["photos/s07/27.jpg"], text: "Marcは、配偶者ががんと診断されたことを共有し、身近な立場から医療制度の機能不全を目の当たりにしたと語った。医師や看護師は、機能不全のあるシステムの中で懸命に働いている。人々が働くシステムそのものを良くすることが、この取り組みの動機になっている。\n\n締めくくりは、コミュニティに参加し、レポートを読み、実践してほしいというメッセージだった。" },
          ],
        },
        {
          title: "質疑応答",
          blocks: [
            { text: "**予想と違っていたことは？**", list: ["企業がジャーニーマネジメントを使う理由はさまざまで、その理由によって組織内での形も変わる。", "価値は、手法・オペレーティングモデル・戦略という3つの層で生まれる。", "ジャーニーマップはデザインシステムのような細かな領域でも使われていた。質問者は、それを通信業界で活かすアイデアを得たという。"] },
            { text: "**AIとともに、ジャーニーマネジメントはどう進化するか？**", list: ["MCPサーバーを通じて社内のAIにつなげると、ジャーニーマップにある調査、インサイト、KPI、プロジェクトに組織全体がアクセスできるようになる。", "ジャーニーマップには担当者、チーム、ツール、プロセスが示されるため、AIが顧客の視点から組織を理解するための枠組みになる。実際に回答の質が上がっている。", "人々は情報システムに圧倒されにくくなっており、ジャーニーを軸にした社内の情報システムも受け入れられやすくなっている。"] },
          ],
        },
      ],
      // トップの「インサイト」カード。head＝見出し、text＝本文、hl＝ページ内で何番目のハイライトへ移動するか（概要→ポイントの順に1から数える）
      learnings: [
        { head: "地図より、マネジメント", headEn: "Managing, not mapping",
          text: "マッピングは全体の1割。残りの9割は、実行する変化を管理すること。ジャーニーマネジメントは手法ではなく、マネジメントのアプローチである。",
          en: "Mapping is about 10% of the work; managing the change is the other 90%. Journey management is a management approach, not a design method." },
        { head: "ステルスモードで小さく始める", headEn: "Start small, in stealth mode",
          text: "隠すのではなく、学べるほど小さく、効果を示せるほど現実的に、試しても安全な範囲で。変えるべき意思決定と行動に狙いを定める。",
          en: "Not hiding: small enough to learn, real enough to prove, safe enough to try. Target the decisions and behaviours that need to change." },
        { head: "手法ではなく、インパクトを示す", headEn: "Show impact, not methodology",
          text: "組織が資金を出すのは手法ではなく、お金のかかっている問題の解決。組織の言葉とKPIで、成果を語る。",
          en: "Nobody funds a methodology; they fund solving a problem that costs money. Talk results in the organisation's language and KPIs." },
      ],
      insights: [
        "ジャーニーマップを描いて終わりにせず、指標と担当者をひもづけて管理し続ける。",
        "提案では手法の説明より先に、事業のKPIにどう効くかを示す。",
        "顧客の不満への対応（リアクティブ）と、将来の体験のビジョン（プロアクティブ）を両方持つ。",
      ],
      photos: [...Array.from({ length: 27 }, (_, i) => String(i + 1).padStart(2, "0"))].map((n) => `photos/s07/${n}.jpg`),
      en: {
        keyPhrase: "Mapping is 10%. The other 90% is managing change.",
        summary:
          "A talk by Marc Stickdorn (CEO of Smaply), Anna Yip and Sayali Bharambe, the authors of This is Journey Management. They shared findings from the State of Journey Management report, based on 80+ hours of interviews and surveys with practitioners worldwide.\n\nJourney management is the practice of continuously managing journeys, not just mapping them, backed by a living information system. It is not another design method but a management approach: “connective tissue” that ties complex internal and external processes into one narrative. The talk covered how it builds an organisation's ability to adapt, why starting points differ, and five tips for getting started.",
        points: [
          { title: "Background and Research", blocks: [
            "About ten years ago, journey maps started moving from static to dynamic: linking maps and pulling in live data from spreadsheets and Jira.\n\nMarc has taught journey management since 2018.",
            "In 2021 Marc signed the contract for This is Journey Management, and from around 2022 the industry changed fast. Companies adopted it in very different ways, so instead of writing only what they believed, the team did research.",
            "With Anna and Sayali, they interviewed practitioners worldwide: **80+ hours** of interviews, plus surveys distributed four ways with 139 respondents.\n\nThe results are published as a report at [stateofjourneymanagement.com](https://stateofjourneymanagement.com).",
          ] },
          { title: "What Journey Management Is", blocks: [
            "It is the practice of **managing journeys continuously**, not just mapping them, built on a living information system.",
            "It is still new but growing fast; most practitioners have done it for only 2 to 4 years. It is mostly adopted by mature and legacy organisations that want to simplify complex systems.",
            { text: "Its aims fall into two groups:", list: ["**Outward**: customer experience and product excellence", "**Inward**: transformation projects and process optimisation"] },
            "It acts as **“connective tissue”**, creating a cohesive narrative for complex internal and external processes.",
            "It is a **management approach**, not another design method, focused on controlling, organising, directing and leading resources and decisions.\n\nOnly about 10% is mapping; 90% is managing the change being implemented.",
          ] },
          { title: "The Dynamic Capabilities Model", blocks: [
            { text: "Practitioners described 93+ activities, methods and tools, consolidated into nine areas of practice. Together they build **dynamic capabilities**: an organisation's ability to adapt to a changing environment.", list: ["**Sensing and sense-making**: the base layer. Describe journeys empirically, embed them in ways of working, and build research capabilities.", "**Acting**: set experience metrics and benchmarks, build shared language, and standardise tools and governance so decisions are based on insight.", "**Transforming**: find strategic opportunities across journeys, build a coherent narrative and priorities, and change structures and systems."] },
            { text: "For managers, it provides unique mechanisms:", list: ["Articulating strategic value precisely.", "Aligning strategy across disciplines, e.g. turning a password reset issue into call centre volume and product insights.", "Seeing where capabilities need to be built or loosened, which breaks down silos.", "Working as a form of enterprise architecture."] },
          ] },
          { title: "Does It Work the Same Everywhere?", blocks: [
            "No. It is not a simple step-by-step method you can build layer by layer in the same order.",
            "Some organisations build capabilities incrementally. But in large, mature organisations, competing internal initiatives can sabotage that kind of gradual build-up.",
            "The most effective approach is **“stealth mode”**: target the decisions and behaviours that need to change.\n\nSome organisations start by mapping a subset of journeys with comparable metrics, first demonstrating strategic value convincingly, then building a coherent narrative and aligning priorities.",
            "Others start from the ground up: empirical research, research capabilities and shared language.",
            "Journey management grew out of service design and is evolving into a **leadership practice** for leading through complexity with rigour.",
          ] },
          { title: "Five Tips for Getting Started", blocks: [
            "In answer to “How can I make my leadership see this value?”, they offered five tips.",
            "**1. Start small, in stealth mode.** Stealth doesn't mean hiding. Make it small enough to learn, real enough to prove, and safe enough to try.",
            "**2. Speak their language**, including the organisation's KPIs and strategic initiatives.",
            "**3. Show impact, not methodology.** As when service design gained traction, nobody funds a methodology; they fund solving a problem that costs money.",
            { text: "**4. Combine reactive and proactive journey management.**", list: ["**Reactive**: respond to customer pain points and unmet needs. Much of this can be automated.", "**Proactive**: set a vision for the future customer experience and use service design to close the gap."] },
            "**5. There is no journey management without service design.** Journey management helps decide what to fix, but research, prototyping and implementation are still needed. Scaling it means scaling the capacity to do service design.\n\nThis also counters the claim that “service design is dead” because of AI.",
          ] },
          { title: "Closing", blocks: [
            "Marc shared that their spouse had been diagnosed with cancer, and described seeing the broken healthcare system up close. Doctors and nurses do great work within a broken system, and fixing the systems people work in is what drives this work.\n\nThe closing message: join the community, read the report, and put it into practice.",
          ] },
          { title: "Q&A", blocks: [
            { text: "**What did you think you knew that turned out wrong?**", list: ["Companies use journey management for many different reasons, and the reason shapes how it looks in the organisation.", "Value is created in three layers: methodological, operating model and strategic.", "Journey maps are even used at a very detailed level, such as for design systems. The person asking took this as inspiration for telecom."] },
            { text: "**How will journey management evolve with AI?**", list: ["Connecting it to internal AI through an MCP server makes the research, insights, KPIs and projects in journey maps accessible across the organisation.", "Journey maps show who owns what, plus teams, tools and processes, giving AI a framework to understand the organisation from the customer's view. Answer quality improves.", "People feel less overwhelmed by information systems now, so an internal information system built on journeys is easier to sell."] },
          ] },
        ],
        insights: [
          "Don't stop at drawing journey maps; link them to metrics and owners and keep managing them.",
          "In proposals, show the effect on business KPIs before explaining the method.",
          "Hold both a reactive response to customer pain points and a proactive vision for future experience.",
        ],
      },
    },
    {
      id: "s12",
      title: "The hidden truth about co-design: Why Service Design needs to look beyond participation",
      speaker: "Svenja Bickert-Appleby",
      org: "New Order Design — CEO",
      day: "Day 2",
      time: "—",
      track: "Co-design",
      cover: "photos/s12/cover.jpg",
      coverFull: true,
      cardCover: "photos/s12/card-speaker.jpg",
      cardBg: "#f1f3f2",
      keyPhrase: "見えないものこそが、仕事だ。",
      summary:
        "==コデザインは、ワークショップに人を招くことで完結するのか==。本セッションでは、ボンの「Das Maarwerk」の事例と登壇者自身の研究をもとに、信頼構築や交渉、参加の条件づくりといった「見えない仕事」に光を当て、参加を実際の変化につなげるために何が必要かを問いかけた。",
      overviewPhotos: [],
      points: [
        {
          title: "イントロ：参加は、変革ではない",
          blocks: [
            { photos: ["photos/s12/01.jpg"], text: "**1．テーマ**\n\nSvenja Bickert-Appleby氏は、コデザインを「ワークショップへの参加」だけで捉えず、実際の変化を可能にする見えない仕事に目を向けるよう提起した。\n\n冒頭では、ワークショップを行ったのにその後何も起きなかった経験を聴衆に問いかけ、参加と変化のギャップを問題提起した。" },
            { photos: ["photos/s12/02.jpg"], text: "**2．参加 ≠ 変革**\n\n人をワークショップに招いて「参加」のチェックを済ませても、それだけで関係性や意思決定、影響力が変わるわけではない。\n\nその場にいることと、自分たちの将来を左右する決定に実際に関われることは異なる。" },
            { photos: ["photos/s12/03.jpg"], text: "**3．見えやすい成果**\n\nデザイナーはワークショップ、手法、プロトタイプ、成果物を見せることが得意で、クライアントへの報告にも載せやすい。\n\nこれらは重要だが、==ワークショップは変化そのものではなく、そのための手段==。成果物の裏にある変化の条件は見落とされがち。" },
            { photos: ["photos/s12/04.jpg"], text: "**4．見えないところにある重要な仕事**\n\n==最も重要な仕事はワークショップの外、つまり実施前・実施の合間・実施後==にあるかもしれない。\n\nサービスマッピングと同じように、自分たちの仕事も、見える「フロントステージ」と、それを支える準備・交渉・関係維持・フォローアップなどの「バックステージ」に分けて考えられる。" },
          ],
        },
        {
          title: "コデザインとは何か",
          blocks: [
            { photos: ["photos/s12/05.jpg"], text: "**5．コデザインの定義**\n\nコデザインは、解決策だけでなく、関係性・知識・意思決定・行動の可能性を人々が共に形づくる、その状況に根ざした協働的な社会実践。\n\n使う道具や素材、必要・獲得される能力、そこで生まれる意味に注目する。「人のために」作るだけでなく「人と共に」形づくり、誰が決定に影響できるかも問う。" },
            { photos: ["photos/s12/06.jpg"], text: "**6．フロントとバックの相互依存**\n\nコデザインは、より良いサービスづくりに人を巻き込むための単なる手法ではない。関係性、知識、力、変化の可能性が継続的に交渉される社会実践である。\n\n目に見える==ワークショップは、関係づくりや構造、交渉に支えられている==。変化のプロセスは、イベントが終わった時点で完結しない。" },
            { photos: ["photos/s12/07.jpg"], text: "**7．見えない3つの側面**", list: ["**見えない仕事**：==信頼構築、準備、交渉、感情面のケア、対立への対応、関係維持==。不可欠なのに成果やKPIとして認識されにくい。", "**参加のインフラ**：==誰を招き、誰が議題や資源を決め、結果をどう扱うか==という条件を設計する。", "**主体性・影響力の再配分**：参加者が単に意見を出したかではなく、==意思決定やその後の行動に影響できるようになったか==を問う。"] },
            { photos: ["photos/s12/08.jpg"], text: "**8．研究の問い**\n\n「コデザインを実際に機能させるには何が必要か」が登壇者の研究の中心にある。\n\n意味のある参加の前には、関係を築き、期待をすり合わせる必要がある。ワークショップは一つのイベントであり、コデザインは支え、継続させる社会実践である。" },
            { photos: ["photos/s12/09.jpg"], text: "**9．見えない仕事の中身**\n\n信頼、交渉、対立への対応、ケア、継続性は「追加作業」ではなく、デザイン実践の一部。\n\nこうした仕事には時間がかかるが、それが変化の持続性や、参加者を伴った実行につながるかを左右する。" },
          ],
        },
        {
          title: "事例：Das Maarwerk",
          blocks: [
            { photos: ["photos/s12/10.jpg"], text: "**10．事例：Das Maarwerk**\n\nボン・ボイエルの約12,000㎡の産業用地を、都市型生産と循環型経済の拠点にするプロジェクト。登壇者は約2年間携わった。\n\n職人が集まる場を育て、都市のレジリエンスと都市型生産につなげることが目的だった。" },
            { photos: ["photos/s12/11.jpg"], text: "**11．Maarwerkのフロントステージ**\n\n外から見える活動として、複数のコデザイン・ワークショップ、価値観を話し合う「バリューポーカー」、共同制作の日、コミュニティ・フェスティバルを実施。\n\nゲームも単なる娯楽ではなく、活動の土台となる価値観を交渉・共有するために使われた。" },
            { photos: ["photos/s12/12.jpg"], text: "**12．Maarwerkのバックステージ**\n\n約2年にわたり、職人コミュニティや重要な関係者と信頼を築き、連絡を維持し、異なる期待や利害を交渉した。\n\nイベントのための場所・時間・材料も確保し、一回限りの催しではなく、協働を継続するプロセスとして支えた。\n\n問うべきは、参加を企画したかだけでなく、人々が共に行動できる条件を変えたかどうか。" },
          ],
        },
        {
          title: "研究からの発見：参加の条件と、意思決定力",
          blocks: [
            { photos: ["photos/s12/13.jpg"], text: "**13．研究からの3つの発見**", list: ["**条件を先につくる**：コデザインは自然には起こらず、意味ある参加のための準備が必要。", "**手法以上の社会実践**：関係性や日常のやり取りの中で生まれ、続いていく。", "**多くの仕事は見えない**：準備・交渉・信頼構築・継続を、価値ある仕事として認める必要がある。"] },
            { photos: ["photos/s12/14.jpg"], text: "**14．参加の条件を誰がつくるか**\n\n参加を支える社会的・物理的・組織的な条件をつくり、維持することが「インフラを整える」仕事。\n\nその条件は中立ではない。誰が招かれ、議題を設定し、その後を決めるかだけでなく、そもそも誰が参加条件を形づくれるのかを問う必要がある。" },
            { photos: ["photos/s12/15.jpg"], text: "**15．参加と意思決定力は違う**\n\n招かれて意見を出すことは、それだけでは権限や主体性を持つことにはならない。\n\n参加者がアイデアを提供しただけなのか、それともプロセスや結果に関する発言権・意思決定力を得たのかを確認する。" },
          ],
        },
        {
          title: "これからのサービスデザイン",
          blocks: [
            { photos: ["photos/s12/16.jpg"], text: "**16．サービスデザインに必要な3つの転換**", list: ["**ワークショップから関係性へ**：単発のイベントを越えて関係を築く。", "**成果物から条件へ**：成果を生み出すための条件そのものを成果として捉える。", "**参加から主体性へ**：誰が意思決定力を持つかを確認し、主体性が生まれる条件を設計・見直す。"] },
            { photos: ["photos/s12/17.jpg"], text: "**17．見えない仕事を可視化する**", list: ["**名前をつける・記録する**：関係構築や調整を業務範囲に含め、ワークショップの間の仕事や意思決定を示す。", "**測る・価格に反映する**：信頼や意思決定などの変化に目を向け、ファシリテーションやフォローアップに予算を確保する。価値あるものすべてが簡単に測れるわけではないが、認識する必要がある。"] },
            { text: "質疑では、登壇者自身もまず関係構築などに費やした時間を記録し始めたいと述べ、測定方法は今後の検討課題だとした。" },
            { photos: ["photos/s12/18.jpg"], text: "**18．サービスデザインの未来**\n\nより良いサービスを人々と一緒につくるだけではなく、人々がその後に起きることを自ら形づくれる条件をつくる。\n\n「何が可能になり、それは誰にとって可能になるのか」を問う。" },
            { photos: ["photos/s12/19.jpg"], text: "**19．成果物を超えた評価**\n\n==コデザインを生み出した成果物だけで測るのではなく、人々が共に何をできるようになったかも評価する==。\n\n次のワークショップを計画する際は、何を作るかに加えて、どんな関係を築く必要があるか、誰の影響力を高める必要があるか、参加後に何ができるようになるかを問う。" },
            { photos: ["photos/s12/20.jpg"], text: "**20．結論**\n\n「見えないものこそが仕事」。コデザインの価値は、目に見える成果物だけでなく、人々が一緒にできることを可能にする営みにある。" },
          ],
        },
        {
          title: "質疑応答：実践へのヒント",
          blocks: [
            { photos: ["photos/s12/21.jpg"], text: "**21．Q&A｜実践へのヒント**", list: ["**参加しにくい人との関係づくり**：ワークショップに招くだけでなく、普段集まる場所や団体へ出向く。誠実な関係づくりには時間が必要。", "**実際の影響力を確保する**：最初にクライアントと意思決定の範囲・制約を明確にし、参加者にも正直に伝える。", "**価値を説明する**：見えない仕事にかけた時間や、築いた関係、その結果を記録する。Maarwerkでは、関係構築が追加資金につながった例もあった。", "**継続とAI**：ワークショップ後も関係を維持し、参加者に結果を伝える。AIの時代にも、人と関係を築き、対話し、場を支えるスキルは重要だと述べた。"] },
          ],
        },
      ],
      learnings: [
        { hl: 5, head: "見えない仕事こそ、仕事", headEn: "The invisible is the work",
          text: "信頼構築、準備、交渉、感情面のケア、対立への対応、関係維持。不可欠なのに、成果やKPIとして認識されにくい。",
          en: "Trust-building, preparation, negotiation, emotional care, handling conflict, maintaining relationships. Essential, yet rarely recognised as outcomes or KPIs." },
        { hl: 6, head: "参加の条件は、中立ではない", headEn: "The conditions aren't neutral",
          text: "誰を招き、誰が議題や資源を決め、結果をどう扱うか。そもそも誰が参加条件を形づくれるのかを問う。",
          en: "Who is invited, who sets the agenda and resources, how results are handled. Ask who gets to shape the conditions of participation at all." },
        { hl: 7, head: "招かれることと、決められること", headEn: "Invited is not empowered",
          text: "参加者が単に意見を出したかではなく、意思決定やその後の行動に影響できるようになったかを問う。",
          en: "Ask not just whether participants gave input, but whether they gained influence over decisions and what happens next." },
        { hl: 8, head: "作ったものより、できるようになったこと", headEn: "What people can now do",
          text: "コデザインを、生み出した成果物だけで測らない。人々が共に何をできるようになったかも評価する。",
          en: "Don't measure co-design only by what it produces. Also evaluate what people become capable of doing together." },
      ],
      insights: [
        "次のワークショップでは、何を作るかに加えて、どんな関係を築き、誰の影響力を高めるかを問う。",
        "関係構築や調整を業務範囲に含め、かけた時間と結果を記録する。",
        "最初にクライアントと意思決定の範囲・制約を明確にし、参加者にも正直に伝える。",
      ],
      photos: [...Array.from({ length: 21 }, (_, i) => String(i + 1).padStart(2, "0"))].map((n) => `photos/s12/${n}.jpg`),
      en: {
        keyPhrase: "The invisible is the work.",
        summary:
          "==Does co-design end once people are invited to a workshop?== Drawing on the Das Maarwerk project in Bonn and her own research, Svenja Bickert-Appleby shone a light on the “invisible work” of trust-building, negotiation and creating the conditions for participation, and asked what it takes to turn participation into real change.",
        points: [
          { title: "Intro: Participation Is Not Transformation", blocks: [
            "**1. Theme**\n\nSvenja Bickert-Appleby urged the audience not to see co-design only as “taking part in workshops”, and to look at the invisible work that makes real change possible.\n\nShe opened by asking who had run a workshop after which nothing happened, framing the gap between participation and change.",
            "**2. Participation ≠ Transformation**\n\nInviting people to a workshop and ticking the “participation” box doesn't by itself change relationships, decisions or influence.\n\nBeing in the room is not the same as actually having a say in decisions that shape your future.",
            "**3. The Visible Surface**\n\nDesigners are good at showing workshops, methods, prototypes and deliverables, and these are easy to put in client reports.\n\nThey matter, but ==a workshop is a means of change, not the change itself==. The conditions for change behind the outputs are easily overlooked.",
            "**4. The Important Work You Can't See**\n\n==The most important work may happen outside the workshop: before, between and after==.\n\nAs in service mapping, our own work can be split into a visible frontstage and a backstage of preparation, negotiation, relationship upkeep and follow-up that supports it.",
          ] },
          { title: "What Co-Design Is", blocks: [
            "**5. A Working Definition**\n\nCo-design is a situated, collaborative social practice through which people collectively shape not only solutions but also relationships, knowledge, decisions and possibilities for action.\n\nIt attends to the materials used, the competences needed and gained, and the meaning that emerges. It is shaping with people, not just designing for them, and it asks who can influence decisions.",
            "**6. The Interdependence of Front and Back**\n\nCo-design is not simply a method for involving people in designing better services. It is a social practice in which relationships, knowledge, power and possibilities for change are continually negotiated.\n\nThe visible ==workshop rests on relationship-building, structures and negotiation==. The process of change doesn't end when the event does.",
            { text: "**7. Three Invisible Dimensions**", list: ["**Invisible work**: ==trust-building, preparation, negotiation, emotional care, handling conflict and maintaining relationships==. Essential, yet rarely recognised as outcomes or KPIs.", "**Infrastructures of participation**: designing the conditions of ==who is invited, who sets the agenda and resources, and how results are handled==.", "**Redistribution of agency**: asking not just whether participants gave input, but whether they ==gained influence over decisions and what happens next==."] },
            "**8. The Research Question**\n\n“What does it actually take to make co-design work?” is at the heart of her research.\n\nMeaningful participation requires building relationships and aligning expectations first. The workshop is an event; co-design is a social practice to be supported and sustained.",
            "**9. Inside the Invisible Work**\n\nTrust, negotiation, handling conflict, care and continuity are not extras. They are part of the design practice.\n\nThis work takes time, but it determines whether change lasts and whether it's carried out together with participants.",
          ] },
          { title: "The Case: Das Maarwerk", blocks: [
            "**10. The Case: Das Maarwerk**\n\nA project to turn a 12,000 m² industrial site in Bonn-Beuel into a hub for urban production and circular economy. She worked on it for about two years.\n\nThe aim was to grow a place where craftspeople gather, contributing to urban resilience and urban production.",
            "**11. Maarwerk: Frontstage**\n\nThe visible activities included several co-design workshops, a “value poker” game for discussing values, collaborative build days and a community festival.\n\nEven the game wasn't just fun: it was used to negotiate and share the values underpinning the work.",
            "**12. Maarwerk: Backstage**\n\nOver about two years, she built trust with the craft community and key stakeholders, stayed in contact, and negotiated differing expectations and interests.\n\nSpace, time and materials were also secured, supporting an ongoing collaboration rather than one-off events.\n\nThe question is not only whether we organised participation, but whether we changed the conditions for acting together.",
          ] },
          { title: "Research Findings: Conditions and Power", blocks: [
            { text: "**13. Three Insights From the Research**", list: ["**Create the conditions first**: co-design doesn't happen by itself; meaningful participation takes preparation.", "**More than a method**: it emerges and continues through relationships and everyday interactions.", "**Most of the work remains unseen**: preparation, negotiation, trust-building and continuity must be recognised as valuable work."] },
            "**14. Who Creates the Conditions for Participation?**\n\nInfrastructuring is the work of creating and maintaining the social, physical and organisational conditions that support participation.\n\nThose conditions aren't neutral. Beyond who is invited, sets the agenda and decides what happens next, we must ask who gets to shape the conditions of participation at all.",
            "**15. Participation Is Not Power**\n\nBeing invited to give your opinion doesn't in itself confer authority or agency.\n\nCheck whether participants merely contributed ideas, or gained a voice and decision power over the process and outcomes.",
          ] },
          { title: "The Future of Service Design", blocks: [
            { text: "**16. Three Shifts Service Design Needs**", list: ["**From workshops to relationships**: build relationships beyond one-off events.", "**From outputs to conditions**: treat the conditions that produce results as outcomes themselves.", "**From participation to agency**: check who holds decision power, and design and revisit the conditions in which agency emerges."] },
            { text: "**17. Making Invisible Work Visible**", list: ["**Name it, document it**: include relationship-building and alignment in the scope, and show the work and decisions between workshops.", "**Measure it, price it**: look at changes in trust and decision-making, and budget for facilitation and follow-up. Not everything valuable is easily measurable, but it must be recognised."] },
            { text: "In the Q&A she said she wants to start by tracking the time she herself spends on relationship-building, and that how to measure it remains an open question." },
            "**18. The Future of Service Design**\n\nNot just designing better services with people, but creating conditions in which people can shape what happens next.\n\nAsk: “What becomes possible, and for whom?”",
            "**19. Beyond the Outputs**\n\n==Don't measure co-design only by what it produces; also evaluate what people become capable of doing together==.\n\nWhen planning your next workshop, ask beyond what to make: what relationships need building, whose influence needs strengthening, and what will be possible after people take part.",
            "**20. Conclusion**\n\n“The invisible is the work.” The value of co-design lies not only in visible outputs, but in enabling what people can do together.",
          ] },
          { title: "Q&A: Tips for Practice", blocks: [
            { text: "**21. Q&A: Tips for Practice**", list: ["**Building relationships with hard-to-reach people**: don't just invite them to workshops; go to the places and groups where they already gather. Honest relationships take time.", "**Securing real influence**: clarify the scope and limits of decision-making with the client first, and be honest with participants.", "**Explaining the value**: record the time spent on invisible work, the relationships built and what came of them. At Maarwerk, relationship-building even led to additional funding.", "**Continuity and AI**: keep up relationships after workshops and tell participants the results. Even in the age of AI, the skills to build relationships, hold dialogue and support a space remain important."] },
          ] },
        ],
        insights: [
          "When planning the next workshop, ask what relationships to build and whose influence to strengthen, not just what to make.",
          "Include relationship-building and alignment in the scope, and record the time spent and what came of it.",
          "Clarify the scope and limits of decision-making with the client first, and be honest with participants.",
        ],
      },
    },
    {
      id: "s13",
      title: "Making the Tacit Explicit: Shared Truths Across Humans and Agents",
      speaker: "Sarah Gibbons",
      org: "Gibbons & Moran — Partner",
      day: "Day 3",
      time: "—",
      track: "AI / Service systems",
      cover: "photos/s13/cover.jpg",
      coverFull: true,
      cardCover: "photos/s13/card-speaker.jpg",
      keyPhrase: "すべてのAIシステムは、本質的にサービスである。",
      summary:
        "Sarah Gibbons氏によるカンファレンスのクロージング基調講演。10年来の同僚と共同で、AIコンサルティング、サービスデザイン、システムデザイン、ファシリテーションを手がける新会社 Gibbons & Moran を立ち上げたことを発表した。中心となる主張は「どれも新しいことではない」。あらゆるAIシステムは本質的にサービスであり、複数の主体が協働して最終的な受け手に価値を届ける。サービスデザインの技能は価値を持ち続ける。答えではなく、次の10年を考えるための視点が示された。",
      overviewPhotos: [],
      points: [
        {
          title: "AIシステムは、サービスである",
          blocks: [
            { photos: ["photos/s13/01.jpg"], text: "**1．カンファレンスの3つのテーマ**", list: ["**ビジネスの言葉で伝える**：デザインの価値や、なぜその仕事が必要かを、経営層や関係者の関心に合わせて翻訳する。", "**手法ではなくインパクト**：マップやプロセスそのものではなく、そこから何の価値が生まれたかに注目する。", "**複雑さの中で力を発揮する**：設計上の条件や制約が増える状況に向き合うことは、サービスデザインの強み。"] },
            { photos: ["photos/s13/02.jpg"], text: "**2．AIシステムをサービスブループリントで捉える**\n\nSarah氏が新会社のために構築したAIシステムを、AIで生成したブループリントとして紹介。朝のブリーフから会議準備、通話、フォローアップまでを可視化している。\n\n利用者の行動、フロントステージ、バックステージ、支援システムという従来のレーンは同じ。違いは、複数のAIエージェントが役割を担っていること。" },
            { photos: ["photos/s13/03.jpg"], text: "**3．会議準備・実施の拡大図**\n\n会議前にRosemaryが準備資料を作り、必要に応じてアシスタントとリハーサルする。会議中はQuillが記録し、会議後にFernまたはIrisが顧客情報を更新し、Rosemaryがタスクを作成する。\n\n人とエージェントの接点、表に見える仕事と裏側の処理、利用するデータを分けて捉えることができる。" },
            { photos: ["photos/s13/04.jpg"], text: "**4．人とエージェントの関係図**\n\nKate氏の個人アシスタントFern、Sarah氏のIris、共通の組織エージェントRosemaryが連携する。共通のNotion記録を接点としながら、個人情報にはそれぞれのプライバシー境界を設けている。\n\n誰が何を見られるか、どこで引き継ぐか、失敗時にどうするか、各エージェントに何を許すかという設計上の問いは従来のサービスと共通する。" },
            { photos: ["photos/s13/05.jpg"], text: "**5．個人アシスタントと組織のAI**\n\nIrisはSarah氏のメール・予定などの個人的な文脈を扱うアシスタントで、その情報が必要に応じて組織側のRosemaryに連携される。\n\nRosemaryは会議準備や朝のブリーフ、案件・タスク等の情報更新を担う。個人の文脈と組織の共有情報の境界を設計することが重要。" },
            { photos: ["photos/s13/06.jpg"], text: "**6．AIシステムもサービスである**\n\n登壇者の主張は「AIシステムは本質的にサービス」。複数の主体が協働して、最終的な受け手に価値を届ける点は変わらない。\n\n今後はAIを使ってサービスを構築・提供するだけでなく、利用者側のエージェントを介して間接的に価値を届ける場面も増えると予測した。" },
            { photos: ["photos/s13/07.jpg"], text: "**7．AIとサービスの共通点**\n\nミームを使い、AIシステムとサービスは、構造としては同じものだというメッセージを強調。\n\n新しい技術だからといって全てをゼロから考えるのではなく、既存のサービス設計の知見を活用できる。" },
          ],
        },
        {
          title: "何が変わり、何が変わらないのか",
          blocks: [
            { photos: ["photos/s13/08.jpg"], text: "**8．変わること／変わらないこと**", list: ["**新しいこと**：==エージェントという主体、新市場、新しい提供方法、スピードと規模==。一方で可視性・コントロールは低下しうる。", "**変わらないこと**：==人を起点に考え、複雑なシステム、文脈と責任の引き継ぎ、摩擦やボトルネック、関係者間の共通認識を扱うこと==。"] },
            { photos: ["photos/s13/09.jpg"], text: "**9．新しい主体①：チームと共に働くエージェント**\n\nレストランの厨房にたとえると、デザイナーは料理人で、エージェントは隣で働く同僚。日々の業務を支援する個人アシスタントや専門ツールがこれに当たる。\n\nサービスをつくる側のチーム構成そのものが、人だけでなく人とAIの組み合わせになる。" },
            { photos: ["photos/s13/10.jpg"], text: "**10．新しい主体②：サービスを届けるエージェント**\n\nエージェントは、厨房で作られた料理を客席へ運ぶスタッフのように、設計されたサービスを利用者に届ける役割も担う。\n\nB2Bでは、提供先企業のエージェントが受け手になる場合もある。" },
            { photos: ["photos/s13/11.jpg"], text: "**11．新しい主体③：顧客のために動くエージェント**\n\n顧客側のエージェントは、飲食店から料理を受け取って顧客へ届ける配達員のような仲介者。サービス提供者と最終利用者の間に新たな主体が入る。\n\nデリバリーアプリの登場で飲食店が店内体験以外の価値を考え直したように、仲介者が入ったとき自分たちの価値や差別化は何かを問い直す必要がある。" },
            { photos: ["photos/s13/12.jpg"], text: "**12．人とエージェントが交差するブループリント**\n\n顧客・顧客のエージェント、フロントのスタッフ・提供エージェント、社内チーム・内部エージェントが、各段階で関わるイメージ。\n\nこれは説明用の図であり、新しい標準テンプレートとしてそのまま使うべきものではない、と登壇者は注意した。実際の関係はさらに複雑になりうる。" },
            { photos: ["photos/s13/13.jpg"], text: "**13．Instinct：顧客側エージェントの例**\n\n登壇者はInstinctを、テキストや電話で依頼し、花の注文や予約などを代行する個人アシスタントの例として紹介した。\n\n「自分のサービスの受け手がこのようなエージェントを使ったら、設計や価値提供はどう変わるか」と問いかけた。" },
            { photos: ["photos/s13/14.jpg"], text: "**14．主体・複雑性・責任の増加**\n\n自律的に行動する主体が増えると、起こりうるパターンや引き継ぎの失敗が増え、人が状況を把握・制御しにくくなる。\n\nそれでも提供者の責任は残る。登壇者は、サポートボットの誤案内に関する企業の事例を挙げ、制御しきれない主体を含むサービスの責任を考える必要があると述べた。" },
            { photos: ["photos/s13/15.jpg"], text: "**15．複雑さへの反応**\n\n主体や責任の増加は圧倒的にも見えるが、曖昧な状況に構造を与え、多くの変数を扱うことこそサービスデザイナーが培ってきた力だと登壇者は励ました。" },
          ],
        },
        {
          title: "エージェントに渡す、3種類の知識",
          blocks: [
            { photos: ["photos/s13/16.jpg"], text: "**16．明示知：共有しやすい知識**\n\nExplicit knowledgeは、形式化・文書化され、他者に渡しやすい情報。エージェントが仕事をするためには、まずこうした文脈を明示する必要がある。\n\nただし、明文化された情報を与えるだけで正しく行動する保証はない。" },
            { photos: ["photos/s13/17.jpg"], text: "**17．Cursorのサポートエージェントの例**\n\n登壇者は、Cursorのサポートエージェント「Sam」が、ログアウトに関する問い合わせに対して存在しないポリシーを作り出した事例を紹介。\n\n顧客にとって重要なのは回答者が人かAIかではなく、正しい情報が得られること。どの仕事をAIに任せるか、必要な文脈と評価方法をどう設計するかが問われる。" },
            { photos: ["photos/s13/18.jpg"], text: "**18．通知が増える問題**\n\n周辺の説明では、Sarah氏のシステムから1日に約400件の通知が届いた例を紹介。何が重要で、何を通知すべきかを事前に明文化していなかったためだった。\n\n普段は本人が無意識に行っている優先度判断を、エージェントが使える形にする必要がある。" },
            { photos: ["photos/s13/19.jpg"], text: "**19．個人の暗黙の判断を組織規模へ**\n\n登壇者はIrisに2〜3日かけて重要な通知を教え、その学習をガイドラインとして整理した。\n\n一人分なら対応できても、例えば200人の組織では、==各人が持つ言語化されていない知識をどう共有可能な知識に変えるか==が課題になる。" },
            { photos: ["photos/s13/20.jpg"], text: "**20．3種類の知識とコンテキスト**", list: ["**明示知**：文書として共有できる情報。", "**暗黙的な実践知（implicit）**：明示知を使う中で得られる実践的な判断や洞察。", "**暗黙知（tacit）**：経験に根ざした直感や個人的な知恵で、特に伝達しにくい。"] },
            { text: "==人なら「何かおかしい」と気づく判断を、観察・理解・記録することがデザイナーの仕事になる==。\n\nエージェントにとってこれらは、判断や出力を支える「コンテキスト」として重要だと説明した。" },
          ],
        },
        {
          title: "同じ技術を、新しい素材に",
          blocks: [
            { photos: ["photos/s13/21.jpg"], text: "**21．モデル設計・コンテキスト設計の例**\n\nUXデザイナーのPaz Perez氏による例。ユーザー、オーケストレーター、サブエージェントに加え、必要なコンテキストと評価ポイントをブループリントに配置している。\n\n技術者と組み、モデルが何を知り、どんな文脈を使い、成功をどう評価するかを設計する。従来のサービス設計に近い思考が活かされている。" },
            { photos: ["photos/s13/22.jpg"], text: "**22．同じスキル、新しい対象**\n\nサービスデザイナーが培ったシステム思考やユーザー中心の視点は、AIという新しい素材・媒体にも応用できる。\n\n全員がモデル設計者になるべきという意味ではなく、既存の専門性の使い道が広がるという提案。技術者とシステム思考の専門家の協働が増えると予測した。" },
            { photos: ["photos/s13/23.jpg"], text: "**23．Little Plains：価値を上流に移す**\n\nブランド・プロダクトスタジオLittle Plainsの事例。AIによるビジュアル生成が普及する中、完成したアセットを作るだけでなく、==生成の土台となる戦略や判断基準に価値を移している==。\n\n登壇者は、サービスデザインにおいても同様に「価値を上流へ移す」とは何かを考えるよう促した。" },
            { photos: ["photos/s13/24.jpg"], text: "**24．エージェント向けブランドシステム**\n\nブランド戦略、ポジショニング、言葉遣い、アートディレクション、デザイントークン、具体例などをMarkdownやコンポーネントとして整備する。\n\n顧客はその文脈・制約・品質基準をAIに渡し、一貫性のある成果を生成できる。登壇者はこれを、将来の「エージェント型サービスシステム」に重ねた。" },
          ],
        },
        {
          title: "サービスの記述は、どう変わるか",
          blocks: [
            { photos: ["photos/s13/25.jpg"], text: "**25．サービスの記述方法はどう変わるか**\n\n登壇者の見通し：==マップから構造化データへ、手動更新から継続的な更新へ、人だけが読むものから人とエージェントが読むものへ==。\n\nビジュアルマップは理解と合意形成に引き続き有用だが、それだけではAIが扱いにくい。また、設計上の計画だけでなく、実際にシステムが何をしたかを人が確認できることが重要になる。" },
            { photos: ["photos/s13/26.jpg"], text: "**26．Uno：人とAIが読むブループリント**\n\n==[Uno](https://uno-blueprint.netlify.app/)==は、組織内の情報をブループリントに取り込み、人はビジュアルとして、エージェントは構造化データとして参照できるオープンソースのツール例。\n\nSlack、ドライブ、Notion、スプレッドシートなどの元情報と結びつける。登壇者は、将来もこの視覚形式が最適かどうかは未確定だと述べた。" },
            { photos: ["photos/s13/27.jpg"], text: "**27．Intuitの実例：共有コンテキスト**\n\nLiz Ball氏のチームの例として、プロジェクトの戦略、ルール、モデル、根拠、決定事項などをプレーンテキストのフォルダに整理。\n\n人とエージェントが同じ情報を読むことで、サービス設計の文脈を共有する。図は働き方の説明として紹介された。" },
            { photos: ["photos/s13/28.jpg"], text: "**28．Intuitの実例：ジョブ分類とルール**\n\nJobs to be Doneをドメイン・成果・フェーズ・実行可能なジョブへ分類し、各ジョブに文脈、担当、サービス境界、人の確認などを関連づける。\n\nAIはチームが設計したルールを、各ジョブの最新の文脈に適用する。登壇者は、AIが何をするかは無制限ではなく、人が意図的に決めていると強調した。" },
            { photos: ["photos/s13/29.jpg"], text: "**29．Intuitの実例：人とAIの役割分担**\n\nジョブを複雑性・能力・結果の重大さに応じて、AI主導、人の確認付きAI、人主導でAIが支援、人が責任を持つ領域に分ける。\n\nスライドの例では、通常の顧客移行と複雑な顧客移行で担当を変え、確認点やエスカレーションを設ける。責任者の任命など、AIだけでは決められないことも明示する。" },
          ],
        },
        {
          title: "結論と質疑応答",
          blocks: [
            { photos: ["photos/s13/30.jpg"], text: "**30．結論：システム思考の価値**\n\n人・エージェント・ツール・プロセスを組み合わせ、意図した価値を届けることがサービスデザインの仕事。AI時代にもシステム全体を捉える専門性は重要だと締めくくった。\n\n**Q&A**：良いサービスかどうかはAIの使用自体ではなく、==利用者の問題を解決できたか==で判断する。また、個人エージェントにアクセスできない人が不利益を受けないよう、より広い人々に役立つ製品への投資と専門家の関与が必要だと述べた。" },
          ],
        },
      ],
      learnings: [
        { hl: 2, head: "変わるもの、変わらないもの", headEn: "What changes, what doesn't",
          text: "エージェント、新市場、スピードと規模は新しい。それでも、人を起点に考え、引き継ぎや摩擦、共通認識を扱う仕事は変わらない。",
          en: "Agents, new markets, speed and scale are new. Starting with humans and handling handoffs, friction and a shared truth are not." },
        { hl: 4, head: "「何かおかしい」を記録する", headEn: "Documenting “something's off”",
          text: "エージェントは違和感を持たない。人なら「何かおかしい」と気づく判断を、観察・理解・記録することがデザイナーの仕事になる。",
          en: "Agents have no gut feeling. Observing, understanding and documenting the judgement by which a person senses something's off becomes the designer's job." },
        { hl: 5, head: "価値を上流へ移す", headEn: "Moving value upstream",
          text: "Little Plainsは、完成したアセットだけでなく、生成の土台となる戦略や判断基準に価値を移している。",
          en: "Little Plains is shifting value from finished assets to the strategy and criteria that generation is built on." },
        { hl: 6, head: "マップは、構造化データへ", headEn: "From maps to structured data",
          text: "マップから構造化データへ、手動更新から継続的な更新へ、人だけが読むものから人とエージェントが読むものへ。",
          en: "From maps to structured data, from manual updating to continuously current, from read by people to read by people and agents." },
        { hl: 8, head: "問うべきは、問題を解決できたか", headEn: "Did it solve the problem?",
          text: "良いサービスかどうかはAIの使用自体ではなく、利用者の問題を解決できたかで判断する。",
          en: "A good service is judged not by whether it uses AI, but by whether it solved the user's problem." },
      ],
      insights: [
        "利用者のエージェントが間に入ったとき、自分たちの価値や差別化は何かをチームで問い直す。",
        "重要な判断基準や優先度を言語化し、人とエージェントが同じ情報を読める場所に置く。",
        "どの仕事をAIに任せ、どこで人が確認するかを、複雑性・能力・結果の重大さで分けて決める。",
      ],
      photos: [...Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(2, "0"))].map((n) => `photos/s13/${n}.jpg`),
      en: {
        keyPhrase: "Every AI system is a service.",
        summary:
          "The closing keynote of the conference, by Sarah Gibbons, who announced Gibbons & Moran, a new AI consulting, service design, system design and facilitation company co-founded with a colleague of 10 years. Her core thesis: none of this is new. Every AI system is essentially a service, with multiple actors delivering value to an end user, and the craft of service design stays valuable. She offered ways to think about the next decade rather than answers.",
        points: [
          { title: "Every AI System Is a Service", blocks: [
            { text: "**1. Three Conference Themes**", list: ["**Speak the language of the business**: translate the value of design, and why the work is needed, into what executives and stakeholders care about.", "**Show the impact, not the method**: focus on the value created rather than the maps and processes themselves.", "**Thriving in complexity**: facing ever more parameters and constraints is a strength of service design."] },
            "**2. Seeing an AI System as a Service Blueprint**\n\nSarah showed an AI-generated blueprint of the AI system built for her new company, from the morning brief through call prep, calls and follow-up.\n\nThe lanes are the familiar ones: user actions, frontstage, backstage and support systems. The difference is that several AI agents play the roles.",
            "**3. Zooming In on Call Prep and Calls**\n\nBefore a meeting Rosemary writes a prep sheet, with a rehearsal with the assistant if wanted. During the call Quill takes notes; afterwards Fern or Iris updates the client profile and Rosemary creates tasks.\n\nThe touchpoints between people and agents, visible work and backstage processing, and the data used can all be seen separately.",
            "**4. How People and Agents Relate**\n\nKate's personal assistant Fern, Sarah's Iris and the shared institutional agent Rosemary work together. A shared Notion record is the meeting point, while personal information sits behind each person's privacy wall.\n\nWho can see what, where handoffs happen, what to do on failure and what each agent is allowed to do are the same design questions as in past services.",
            "**5. Personal Assistant and Institutional AI**\n\nIris is an assistant handling Sarah's personal context such as email and calendar, passing information to the institutional Rosemary when needed.\n\nRosemary handles call prep, the morning brief and updates to deals and tasks. Designing the boundary between personal context and shared organisational information is key.",
            "**6. AI Systems Are Services Too**\n\nHer claim: every AI system is essentially a service. Multiple actors still work together to deliver value to an end recipient.\n\nShe predicted that beyond using AI to build and deliver services, we'll increasingly deliver value indirectly through users' own agents.",
            "**7. AI and Services: The Same Picture**\n\nUsing a meme, she stressed that AI systems and services are structurally the same thing.\n\nNew technology doesn't mean starting from zero; existing service design knowledge carries over.",
          ] },
          { title: "What's New, and What Isn't", blocks: [
            { text: "**8. What's New, What Isn't**", list: ["**What's new**: ==agents as new actors, new markets, new ways to deliver, speed and scale==. Visibility and control may also fall.", "**What isn't**: ==starting with humans, complex systems, handing off context and responsibility, friction and bottlenecks, and keeping one shared truth==."] },
            "**9. New Actor 1: Agents Working Alongside Your Team**\n\nIn a restaurant kitchen, designers are the chefs and agents are colleagues working next to them: personal assistants and specialist tools that support daily work.\n\nThe team building a service becomes a mix of people and AI.",
            "**10. New Actor 2: Agents Delivering the Service**\n\nLike staff carrying food from kitchen to table, agents also deliver the designed service to users.\n\nIn B2B, the recipient may be the client company's agents.",
            "**11. New Actor 3: Agents Acting for the Customer**\n\nA customer's agent is a middleman, like a courier collecting food from a restaurant. A new actor stands between provider and end user.\n\nJust as delivery apps made restaurants rethink their value beyond the in-house experience, we must ask what our value and differentiation are once a middleman arrives.",
            "**12. A Blueprint Where People and Agents Cross**\n\nAn image of customers and their agents, frontstage staff and service agents, and internal teams and agents each engaging at every stage.\n\nShe cautioned that this is illustrative and not a new template to adopt as is; real relationships may be more complex.",
            "**13. Instinct: An Example of a Customer's Agent**\n\nShe introduced Instinct as a personal assistant you ask by text or call, which orders flowers, makes bookings and more on your behalf.\n\n“If the recipient of your service used an agent like this, how would your design and value delivery change?”",
            "**14. More Actors, More Complexity, More Responsibility**\n\nAs autonomous actors multiply, so do possible variations and handoff failures, making situations harder for people to see and control.\n\nResponsibility still stays with the provider. Citing companies whose support bots gave wrong information, she said we must think about responsibility for services that include actors we can't fully control.",
            "**15. Reacting to the Complexity**\n\nMore actors and responsibility can look overwhelming, but she encouraged the audience: giving structure to ambiguity and handling many variables is exactly what service designers have trained for.",
          ] },
          { title: "Three Kinds of Knowledge for Agents", blocks: [
            "**16. Explicit Knowledge: Easy to Share**\n\nExplicit knowledge is formal, documented and easy to hand over. For agents to do work, this context must first be made explicit.\n\nBut providing written information doesn't guarantee correct behaviour.",
            "**17. The Cursor Support Agent**\n\nShe described how Cursor's support agent “Sam” invented a non-existent policy when answering questions about being logged out.\n\nCustomers care less about whether a person or AI answered than about getting the right information. The questions are which work to give to AI, and how to design the context and evaluation it needs.",
            "**18. The Notification Problem**\n\nShe described her system sending about 400 notifications a day, because what mattered and what warranted a notification had never been written down.\n\nPrioritising that people do unconsciously has to be put in a form agents can use.",
            "**19. From One Person's Judgement to Organisational Scale**\n\nShe spent two to three days teaching Iris which notifications mattered, and organised that learning into guidelines.\n\nThat's manageable for one person, but in an organisation of 200, say, the challenge is ==how to turn each person's unspoken knowledge into shareable knowledge==.",
            { text: "**20. Three Kinds of Knowledge and Context**", list: ["**Explicit**: information that can be shared as documents.", "**Implicit**: practical judgement and insight gained from using explicit knowledge.", "**Tacit**: intuition and personal wisdom rooted in experience, especially hard to transfer."] },
            { text: "==Observing, understanding and documenting the judgement by which a person senses “something's off” becomes the designer's job==.\n\nFor agents, all of this matters as the “context” that supports their decisions and outputs." },
          ] },
          { title: "Same Craft, New Medium", blocks: [
            "**21. Model and Context Design**\n\nAn example by UX designer Paz Perez places users, an orchestrator and sub-agents on a blueprint, along with the context needed and points of evaluation.\n\nPartnering with technical staff, she designs what a model knows, what context it uses and how success is evaluated: thinking close to traditional service design.",
            "**22. Same Skills, New Subject**\n\nSystems thinking and user-centred perspective can be applied to AI as a new material and medium.\n\nThe point is not that everyone should become a model designer, but that existing expertise has wider uses. She predicted more collaboration between technologists and systems thinkers.",
            "**23. Little Plains: Moving Value Upstream**\n\nThe brand and product studio Little Plains: as AI-generated visuals spread, it is ==shifting value from finished assets to the strategy and criteria that generation is built on==.\n\nShe urged service designers to consider what “moving value upstream” means for them.",
            "**24. An Agentic Brand System**\n\nBrand strategy, positioning, voice, art direction, design tokens and examples are prepared as Markdown and components.\n\nClients give that context, constraints and quality bar to AI to generate consistent output. She compared this to a future “agentic service system”.",
          ] },
          { title: "How Describing Services Will Change", blocks: [
            "**25. How Services Will Be Described**\n\nHer outlook: ==from maps to structured data, from manual updating to continuously current, from read by people to read by people and agents==.\n\nVisual maps stay useful for understanding and alignment, but alone are hard for AI to use. And people need to see not just the plan, but what the system actually did.",
            "**26. Uno: A Blueprint People and AI Can Read**\n\n==[Uno](https://uno-blueprint.netlify.app/)== is an example of an open-source tool that pulls organisational information into a blueprint, which people read visually and agents read as structured data.\n\nIt links to sources such as Slack, drives, Notion and spreadsheets. She said it's undecided whether this visual format will remain the best one.",
            "**27. Intuit: Shared Context**\n\nLiz Ball's team keeps project strategy, rules, models, rationale and decisions in a folder of plain-text files.\n\nPeople and agents read the same information and so share the service design context. The diagram was shown as a description of their way of working.",
            "**28. Intuit: Job Taxonomy and Rules**\n\nJobs to be Done are classified into domains, outcomes, phases and executable jobs, with context, owners, service boundaries and human checks attached to each.\n\nAI applies the rules the team designed to each job's latest context. She stressed that what AI does isn't carte blanche; people decide it deliberately.",
            "**29. Intuit: Dividing Work Between People and AI**\n\nJobs are split by complexity, capability and consequence into AI-led, AI with human review, human-led with AI support, and human-accountable areas.\n\nThe slide's example assigns ordinary and complex customer migrations differently, with checkpoints and escalation. What AI alone can't decide, such as appointing an accountable person, is made explicit.",
          ] },
          { title: "Conclusion and Q&A", blocks: [
            "**30. Conclusion: The Value of Systems Thinking**\n\nService design's job is to combine people, agents, tools and processes to deliver intended value. She closed by saying the expertise to see the whole system stays important in the AI era.\n\n**Q&A**: a good service is judged not by whether it uses AI but by ==whether it solved the user's problem==. And so that people without personal agents aren't disadvantaged, investment in products for broader groups and the involvement of experts are needed.",
          ] },
        ],
        insights: [
          "Ask as a team what our value and differentiation are once a user's agent stands in between.",
          "Put important criteria and priorities into words, somewhere people and agents read the same information.",
          "Decide what goes to AI and where people review it by complexity, capability and consequence.",
        ],
      },
    },
    {
      id: "s09",
      title: "Beyond Boundaries: How Frontline Design Shapes Fairer Futures",
      speaker: "Katie Petrie / Kim Anderson",
      org: "Service Design Academy",
      day: "Day 3",
      time: "—",
      track: "Public sector / Capability building",
      cover: "photos/s09/cover.jpg",
      coverFull: true,
      cardCover: "photos/s09/cover.jpg", cardBg: "#f7f0e6",
      keyPhrase: "プロセスの前に、人を信頼する。",
      summary:
        "Service Design Academy（スコットランド）のKatie PetrieとKim Andersonによる講演。子どもの貧困をなくすためのスコットランド政府の取り組み「Fairer Futures」で、ダンフリーズ＆ガロウェイ地域の現場チームにサービスデザインを根づかせた事例を、5つの章で語った。\n\n講演の核心は、専門家がサービスを設計して渡すことではなく、家族をよく知る現場の人々が、自ら問い、試し、改善できる状態をつくること。その土台づくりから初期の成果、家族の経験を組織や制度の意思決定へつなぐところまでが紹介された。",
      overviewPhotos: ["photos/s09/ob1.jpg", "photos/s09/ob2.jpg"],
      points: [
        {
          title: "背景：子どもの貧困は、単独のサービスでは解けない",
          blocks: [
            { photos: ["photos/s09/01.jpg"], text: "講演は、ダンフリーズに縁のある2人のロバートから始まった。1306年にこの地で勝利したロバート・ザ・ブルースと、500年後に人間の価値・平等について書いたロバート・バーンズ。バーンズは、人の価値は富や地位で決まらないと考えた。\n\nそれから230年以上たった今も、子どもの貧困は国の最優先課題のまま。世代を重ねても解消していないなら、考え方を変える必要がある。（このスライドだけはAIで生成したもので、地図は正確ではないと断りがあった。）" },
            { photos: ["photos/s09/02.jpg"], text: "スコットランドでは**子どもの約5人に1人（20万人以上）**が貧困状態にあり、その**約75％は就労者のいる世帯**で暮らしている。「仕事があれば解決する」といった単純な前提では、実態を捉えられない。ヨーロッパ全体では1,950万人の子どもが、貧困や社会的排除のリスクにさらされている。" },
            { photos: ["photos/s09/03.jpg"], text: "貧困は、所得だけの問題ではない。雇用、育児、交通、健康、自信などが絡み合い、家族は複数の困難を同時に経験する。一方、サービスは生活者の経験ではなく、組織や制度の区分に沿って提供されがちである。" },
            { photos: ["photos/s09/04.jpg", "photos/s09/05.jpg"], row: true, text: "ダンフリーズ＆ガロウェイは、スコットランドに32ある自治体の一つ。国の東西に広がる地域で、支援を受けるにも長い移動が伴う。\n\n「Fairer Futures」は、国の優先課題に対するこの地域の答えで、地域に根ざした統合的・長期的な家族支援によって、子どもの貧困の解消をめざす。" },
            { photos: ["photos/s09/06.jpg"], text: "スコットランド政府の初代チーフデザインオフィサー、Cat Macaulayは「**スコットランドを世界最大のデザインスクールにしたい**」と語った。この取り組みも、その大きな目標につながっている。" },
            { photos: ["photos/s09/07.jpg"], text: "Service Design Academyは、SDNの認定を世界で初めて受けた組織。2人はSDN認定のマスタートレーナーでもある。\n\nこのプロジェクトでの役割は、サービスを代わりにつくることではなく、**現場チームの自信とデザインの実践能力を育てること**だった。デザインのプロジェクトではなく、現場にデザインの力を根づかせる取り組みである。" },
          ],
        },
        {
          title: "第1章：プロセスの前に、人を信頼する",
          blocks: [
            { photos: ["photos/s09/08.jpg", "photos/s09/09.jpg"], row: true, text: "Fairer Futuresは新しく立ち上がったチーム。メンバーには、制度の利用、貧困による負担、トラウマ、ニューロダイバーシティなどの当事者経験があり、それ自体が重要な知識になる。\n\n資金は既存サービスの複製にも使えたが、チームはゼロから考え直す道を選んだ。" },
            { photos: ["photos/s09/10.jpg"], text: "デザイン手法を教える前に必要だったのは、チームが新しい働き方を試せる条件づくりである。", list: ["**条件を整える**：安心して意見を出せる関係性と支援環境をつくる。", "**姿勢を育てる**：正解を急がず、好奇心を持って理解する。", "**失敗を許容する**：現場に裁量を渡し、試しながら学ぶ。", "**難しさを認める**：変化は手法の導入だけでは起こらず、継続的な支援が必要である。"] },
            { photos: ["photos/s09/11.jpg"], text: "「どうなるかは分からない。でも大丈夫」。不確かであることは、焦点が定まっていないこととは違う。\n\n資金には「何をしてもいい。ただし建物だけは買わないで」という、スコットランド政府としては珍しい条件が付いていた。あらかじめ答えや計画が定まっていなくても、目的を共有し、試行錯誤できる余地が与えられていた。" },
            { photos: ["photos/s09/12.jpg", "photos/s09/13.jpg"], row: true, text: "チームの土台には、柔軟さ、許可、ゼロからの出発、オーナーシップがあった。そして、新しい働き方への意欲と好奇心、開かれた姿勢、当事者経験、関係性、支え合える環境。" },
            { photos: ["photos/s09/14.jpg"], text: "チームリーダーのKirstyは、家族の役に立たない報告について「**それはもう報告しなくていい。家族にとって何の役に立つの？**」と見直した。\n\nプロセスに人を合わせるのではなく、人が力を発揮できる環境を先につくる。その順序が重要になる。" },
          ],
        },
        {
          title: "第2章：サービスの前に、チームをデザインする",
          blocks: [
            { photos: ["photos/s09/15.jpg", "photos/s09/16.jpg"], row: true, text: "最初から家族向けの施策を考えるのではなく、チーム自身の目的、価値観、役割、提供できる価値を整理した。チームキャンバス、役割、価値提案、サービスモデルの検討は、成果物を埋めるためではなく、**何のために、誰に対して、どこまで責任を持つのか**を共有する対話として機能した。" },
            { photos: ["photos/s09/17.jpg", "photos/s09/18.jpg"], row: true, text: "チームだけですべての問題を解決することはできない。しかし、自分たちの役割を明確にすれば、他のサービスとの接点や、支援が途切れる隙間を見つけられる。" },
            { photos: ["photos/s09/19.jpg"], text: "スタッフの間には「これをサービスデザインしてみない？」「それを裏づけるデータはある？」といった共通言語が生まれた。立ち止まって目的を問い直すことも、気まずいことではなく、前進の一部として受け入れられるようになった。\n\n要点は、**共通の目的と、問い直せる関係性をつくること**。ツールはそのための手段であり、チームづくりとサービスづくりは切り離せない。" },
          ],
        },
        {
          title: "第3章：日々の支援に、観察・傾聴・共感を組み込む",
          blocks: [
            { photos: ["photos/s09/20.jpg", "photos/s09/21.jpg"], row: true, text: "貧困の背景には、表面からは見えにくい困難がある。助けを求めることへの恥ずかしさ、過去に批判された経験、デジタル環境へのアクセス、読み書きや計算の難しさなどである。\n\n現場に必要なのは、家族についての前提を強めることではなく、==思い込みから好奇心へと視点を変えること==だった。" },
            { photos: ["photos/s09/22.jpg", "photos/s09/23.jpg"], row: true, text: "研修は実践的で軽いものにした。観察、傾聴、共感と、小さなリサーチが中心。新たな専門業務を追加するのではなく、すでに築いている家族との関係や日常の対話に、気づきを得る方法を組み込んだ。" },
            { photos: ["photos/s09/24.jpg", "photos/s09/25.jpg"], row: true, text: "エンパシー・ウォークで実際にサービスを体験し、ジャーニーマップで流れを捉えた。", list: ["家族が話した内容だけでなく、行動やサービス利用時の障壁にも目を向ける。", "個別の経験から繰り返し現れるパターンを捉える。", "自分たちや他のサービスの前提を問い直す。", "オンラインのチェックインで実践を振り返り、支援を受けながら学ぶ。"] },
            { photos: ["photos/s09/26.jpg"], text: "「思ったより難しかったのは、違う見方で考えること。自分の立場を離れて、相手の立場から見ることだった」。働き方を変えるのは、いつも簡単ではない。" },
            { photos: ["photos/s09/27.jpg"], text: "目標は、全員をサービスデザイナーにすることではない。現場の専門性と信頼関係を活かし、周りの支援を受けながら、日々の支援の中で改善できる力を育てることである。" },
          ],
        },
        {
          title: "第4章：家族の実感から、支援の価値を確かめる",
          blocks: [
            { photos: ["photos/s09/28.jpg"], text: "活動開始から1年余りの段階で行われた独立調査（20家族）の結果。", list: ["**相談先が分かる：10％ → 100％**（担当支援者がつく前は2家族、ついた後は20家族全員）", "**85％**：支援によって良い変化があった。", "**100％**：担当支援者による支援を、ほかの家族にも勧めたい。", "**95％**：変化を生むうえで、支援が重要だった。"] },
            { photos: ["photos/s09/29.jpg", "photos/s09/30.jpg"], row: true, text: "家族からは、急かされたり決めつけられたりせず、懸念や質問を真剣に受け止めてもらえたという声が届いた。成果は、サービスへのアクセスだけでなく、安心して相談できる関係や、きちんと受け止められる経験にも表れている。" },
            { photos: ["photos/s09/31.jpg"], text: "障壁を取り除く。相手のいる場所に出向く。危機を防ぐ早めの支援を設計する。家族の過去の経験を決めつけない。\n\nただし、これは少数の家族を対象とする初期の結果である。デザイン研修だけが成果を生んだと証明するものではなく、子どもの貧困が解決したことを意味するものでもない。" },
          ],
        },
        {
          title: "第5章：家族の経験を、組織と制度の意思決定へ",
          blocks: [
            { photos: ["photos/s09/32.jpg"], text: "個別の家族への支援が改善しても、その学びが現場にとどまれば、制度全体は変わらない。重要なのは、**家族の経験 → 行動につながる知見 → サービス改善 → 戦略的な意思決定**という経路をつくること。\n\n誰が改善を判断し、どこへ働きかけるのかを明確にする。家族自身にも、自分たちの参加が何を変えたのかを返す。" },
            { photos: ["photos/s09/33.jpg"], text: "チームが直接変えられること、自治体内で連携すべきこと、外部のサービスに関わることは異なる。交通の問題のようにチームだけでは解決できないことも記録し、将来の変革に向けた根拠として蓄積する。複雑だった申請フォームの簡素化は、他部署に改善の必要性を示す材料になった。" },
            { photos: ["photos/s09/34.jpg"], text: "今後は、サービス間の重複削減、家族にとってのアクセス改善、貧困スティグマのツールキットによる自治体全体での意識づくり、家族・地域住民との共同デザイン「100 Voices」などへ展開していく。\n\n自分たちで解けない課題を見えないままにせず、より広い意思決定へつなぐこと。それが、境界を越えるデザインである。" },
            { photos: ["photos/s09/35.jpg"], text: "「ひとりで、特別な支援が必要な子どもを育てていると、生活に押しつぶされそうになることがある。受けた支援、助言、理解は、本当に大きな違いを生んだ」。" },
          ],
        },
        {
          title: "結論：デザインを根づかせるには、現場を支える仕組みがいる",
          blocks: [
            { photos: ["photos/s09/36.jpg"], text: "現場にデザインを広げることは、ツールを配り、研修を実施すれば終わるものではない。移動の負担、日々の業務の圧力、振り返りの時間不足、自信の揺らぎに向き合い続ける必要がある。\n\nリーダーには、現場が考える時間と余地を守り、試行錯誤を支え、必要な場面では一歩引いて任せる役割がある。自律性を渡すことと、説明責任を持つことの両立も欠かせない。" },
            { photos: ["photos/s09/37.jpg", "photos/s09/38.jpg"], row: true, text: "現場の公共サービスにデザインを組み込むための、実践的なモデルが示された。" },
            { photos: ["photos/s09/39.jpg", "photos/s09/40.jpg"], row: true, list: ["**家族と対等につくる**：家族を情報提供者ではなく共同デザイナーとして扱い、情報の使い道と倫理的な保護策を明確にする。", "**現場に負担を積み増さない**：軽量で繰り返し使える方法を日常業務に組み込み、スタッフを支え、守る。", "**知見に、意思決定への経路を用意する**：現場に権限を渡すだけでなく、そこで得た学びが組織全体の改善に届く仕組みをつくる。"] },
            { photos: ["photos/s09/41.jpg"], text: "締めくくりはKirstyの言葉。勇気を持つこと。プロセスを信じて、混乱することを許すこと。サービスを本当に知る人たちに導かれること。失敗を自分に許すこと。そして、いつも人を中心に置くこと。\n\n人を信頼し、チームを育て、家族とともに学ぶ。その学びを組織の境界を越えてつなぐことで、デザインは一度きりのプロジェクトではなく、より公平な未来をつくる日常の実践になる。" },
          ],
        },
      ],
      // トップの「インサイト」カード。head＝見出し、text＝本文、hl＝ページ内で何番目のハイライトへ移動するか（概要→ポイントの順に1から数える）
      learnings: [
        { head: "手法より先に、人と条件", headEn: "People and conditions first",
          text: "デザイン手法を教える前に、安心して試し、失敗できる条件を整えた。人が力を発揮できる環境があってこそ、プロセスが生きる。",
          en: "Before teaching methods, they built conditions where people could try and fail safely. Process only works once people can do their best." },
        { hl: 1, head: "思い込みから、好奇心へ", headEn: "From assumptions to curiosity",
          text: "貧困は所得だけの問題ではない。恥ずかしさ、デジタル環境、読み書き。家族を決めつけず、観察し、聞くことから見えてくる。",
          en: "Poverty isn't only about money: embarrassment, digital access and literacy matter too. Observing and listening reveals what assumptions hide." },
        { head: "現場の知見を、意思決定へ", headEn: "Route frontline insight upward",
          text: "現場で解けない課題も記録し、組織の判断へつなぐ経路をつくる。そうしなければ、制度全体は学ばない。",
          en: "Record what the team can't fix, and build a route to organisational decisions. Otherwise the wider system never learns." },
      ],
      insights: [
        "新しい取り組みでは、手法を教える前に、試して失敗できる条件をチームと決める。",
        "自分たちで解けない課題も記録し、判断できる人へ届ける経路をつくる。",
        "ユーザーを情報提供者ではなく、共同デザイナーとして扱う。",
      ],
      photos: [...Array.from({ length: 41 }, (_, i) => String(i + 1).padStart(2, "0"))].map((n) => `photos/s09/${n}.jpg`),
      en: {
        keyPhrase: "Trust the people, then the process.",
        summary:
          "A talk by Katie Petrie and Kim Anderson of Service Design Academy in Scotland. In five chapters, they told how service design was embedded in a frontline team in Dumfries and Galloway, as part of Fairer Futures, a Scottish Government initiative to eradicate child poverty.\n\nThe core idea: not experts designing services and handing them over, but enabling the people who know families best to ask, test and improve things themselves. The talk covered how the foundations were laid, the early results, and how families' experiences are being connected to organisational and system decisions.",
        points: [
          { title: "Context: Child Poverty Can't Be Solved by One Service", blocks: [
            "The talk opened with two Roberts tied to Dumfries: Robert the Bruce, who won there in 1306, and Robert Burns, who wrote about humanity, worth and equality 500 years later. Burns believed a person's value should never depend on wealth or status.\n\nMore than 230 years on, child poverty is still a national priority. If generations of progress haven't eliminated it, we need to think differently. (This was the one AI-generated slide, and the map is not accurate.)",
            "In Scotland, **about 1 in 5 children (over 200,000)** live in poverty, and **about 75% of them live in a household where someone works**. Simple assumptions like “a job solves it” miss the reality. Across Europe, 19.5 million children are at risk of poverty or social exclusion.",
            "Poverty is rarely a single issue. Employment, childcare, transport, health and confidence are interconnected, and families face several challenges at once. Yet services are organised around institutions rather than lived experience.",
            "Dumfries and Galloway is one of Scotland's 32 local authorities. It spans the width of the country, so reaching services can mean long journeys.\n\nFairer Futures is the region's response to the national priority: integrated, long-term, place-based support for families, aiming to eradicate child poverty.",
            "Cat Macaulay, the Scottish Government's first Chief Design Officer, said she wants to make **Scotland the world's biggest design school**. This work connects to that ambition.",
            "Service Design Academy was the first organisation in the world to be accredited by SDN, and both speakers are SDN accredited master trainers.\n\nTheir role was not to design services on the team's behalf, but to **build the frontline team's confidence and design capability**. It was about embedding design on the front line, not running a design project.",
          ] },
          { title: "Chapter 1: Trust the People, Then the Process", blocks: [
            "Fairer Futures was a newly established team. Members brought lived experience of systems, poverty pressures, trauma and neurodiversity, which is valuable knowledge in itself.\n\nThe funding could have replicated existing services, but the team chose to start from scratch.",
            { text: "Before teaching design methods, the team needed conditions to try new ways of working.", list: ["**Create the conditions**: relationships and support where people feel safe to speak up.", "**Build the mindset**: don't rush to answers; understand with curiosity.", "**Provide permission to fail**: give the front line autonomy and learn by trying.", "**Accept this is hard work**: change doesn't come from methods alone and needs ongoing support."] },
            "“I'm not sure what's going on, but I'm alright.” Uncertainty is not the same as being unfocused.\n\nThe funding came with an unusual condition for the Scottish Government: “do anything, just don't buy a building.” Even without a fixed plan, the team shared a purpose and had room to experiment.",
            "The team's building blocks were flexibility, permission, starting from scratch and ownership, supported by willingness to work differently, openness, lived experience, relationships and a supportive environment.",
            "Team leader Kirsty questioned reporting that didn't help families: “**Stop reporting that. What's the benefit to your family?**”\n\nRather than fitting people to a process, create an environment where people can do their best first. The order matters.",
          ] },
          { title: "Chapter 2: Design the Team Before the Service", blocks: [
            "Instead of starting with services for families, the team clarified its own purpose, values, roles and value. The team canvas, roles, value proposition and service model canvas weren't templates to fill in, but conversations about **why, for whom, and how far the team is responsible**.",
            "The team can't solve every problem for families. But a clear remit makes the connections with other services, and the gaps between them, visible.",
            "Staff began using a shared language: “Can we service design this?” and “Do you have data on that?” Pausing to rethink became part of moving forward, not something awkward.\n\nThe point is **a shared purpose and relationships where you can question things**. Tools serve that, and building the team can't be separated from building the service.",
          ] },
          { title: "Chapter 3: Put Design on the Front Line", blocks: [
            "Poverty hides difficulties that are hard to see: embarrassment about asking for help, past experiences of being judged, digital access, literacy and numeracy.\n\nWhat the front line needed was not stronger assumptions about families, but ==a shift from assumptions to curiosity==.",
            "Learning was practical and lightweight: observation, listening, empathy and small pieces of research. Rather than adding specialist processes, the methods were built into existing relationships and everyday conversations with families.",
            { text: "Empathy walks let staff experience services first-hand, and journey maps captured the flow.", list: ["Look beyond what families say to their behaviour and the barriers they meet.", "Notice patterns that recur across individual experiences.", "Question your own assumptions and those of other services.", "Reflect on practice and learn with support through online check-ins."] },
            "“What was harder than I thought: thinking about things in a different way, taking yourself out of your own shoes and putting yourself into somebody else's.” Changing ways of working is not always easy.",
            "The aim was not to turn everyone into a service designer. It was to build the capability to improve support day to day, drawing on frontline expertise and trusted relationships, with support around the team.",
          ] },
          { title: "Chapter 4: Keep Families at the Heart", blocks: [
            { text: "An independent survey of 20 families, just over a year after the team started:", list: ["**Knowing where to go for help: 10% → 100%** (2 families before having a keyworker, all 20 after)", "**85%** said the support made a positive difference.", "**100%** would recommend keyworker support to another family.", "**95%** said the support was important in bringing about change."] },
            "Families said they never felt rushed or judged, and that their concerns and questions were taken seriously. The impact shows not only in access to services, but in relationships where people feel safe to ask and be heard.",
            "Break down barriers. Meet people where they are. Design earlier interventions to prevent crisis. Don't make assumptions about families' past experiences.\n\nThese are early findings from a small group. They don't prove design training alone caused the outcomes, and they don't mean child poverty is solved.",
          ] },
          { title: "Chapter 5: Connect Family Experience to Decisions", blocks: [
            "Even if support for individual families improves, the system won't change if the learning stays on the front line. What matters is a route: **family experience → actionable insight → service improvement → strategic decisions**.\n\nBe clear about who decides on improvements and where to push. And show families what their involvement changed.",
            "What the team can change directly, what needs the wider council, and what involves outside services are different. Issues the team can't fix, like transport, are still recorded as evidence for future change. A complicated form, simplified after feedback, became evidence for other departments.",
            "Next steps include reducing duplication across services, making services more accessible for families, raising awareness with a poverty stigma toolkit across the council, and co-design with families and communities through the 100 Voices programme.\n\nNot letting unsolvable problems disappear, and connecting them to wider decisions: that is design beyond boundaries.",
            "“As a single parent caring for a child with additional needs and challenges, life can often feel overwhelming. The support, guidance and understanding I have received have made a genuine difference.”",
          ] },
          { title: "Conclusion: Embedding Design Needs Support Around the Front Line", blocks: [
            "Spreading design on the front line doesn't end with handing out tools and running training. Travel, day-to-day pressure, lack of time for reflection and wavering confidence all have to be dealt with.\n\nLeaders need to protect time and space to think, support experimentation, and step back when needed. Giving autonomy while keeping accountability is essential too.",
            "They shared a practical model for embedding design with frontline staff in complex public sector settings.",
            { list: ["**Co-design as equals**: treat families as co-designers, not information sources, and be clear about how their information is used and protected.", "**Don't add to the frontline load**: build lightweight, repeatable tools into everyday work, and support and protect staff.", "**Give insight a route to decisions**: don't just hand power to the front line; make sure what it learns reaches organisation-wide improvement."] },
            "They closed with Kirsty's words: be brave, trust the process and let it get messy, be led by those who truly know how services work, give yourself permission to make mistakes, and always keep people at the heart.\n\nTrust people, build the team, learn with families, and carry that learning across organisational boundaries. Then design becomes not a one-off project but an everyday practice for fairer futures.",
          ] },
        ],
        insights: [
          "In new initiatives, agree with the team on conditions to try and fail before teaching methods.",
          "Record problems the team can't solve, and build a route to the people who can decide.",
          "Treat users as co-designers, not information sources.",
        ],
      },
    },
    {
      id: "s11",
      title: "The Designing Mind in the AI Era",
      speaker: "Pontus Wärnestål",
      org: "Ambition Group / Halmstad University — Head of Design / Deputy Professor",
      day: "Day 3",
      time: "—",
      track: "AI / Design judgement",
      cover: "photos/s11/cover.jpg",
      coverFull: true,
      cardCover: "photos/s11/card-speaker.jpg",
      cardBg: "#a9ead6",
      keyPhrase: "考えられるデザイナーか、プロンプトを使えるデザイナーか。",
      summary:
        "AIはデザインを速くする一方で、私たちの思考や判断をどう変えるのか。本セッションでは、==AIによる生産性向上への期待を批判的に捉え、道具が人の能力を拡張すると同時に、仕事や思考のあり方を変える側面を探る==。スケッチや試作、曖昧さとの対話を通じて知識を生み出すデザインの特性に着目し、答えをすぐに得ることと、自ら考え抜くことの違いを考察。\n\nAIが得意とする課題と、人の判断や現場での検証が欠かせない問題を見極めながら、若手の育成、組織知の蓄積、特定サービスへの依存にも目を向ける。AIを使うか否かではなく、何を任せ、何を自分たちの力として育むのか。テクノロジーとの関係を主体的に設計するための視点を提示。",
      overviewPhotos: [],
      points: [
        {
          title: "イントロ：AIで、生産性は本当に上がったのか",
          blocks: [
            { photos: ["photos/s11/01.jpg"], text: "**1．タイトル：AI、責任、そして熱狂の時代によりよい判断をするために**\n\n講演全体のテーマは、AIで制作を速くすることだけではなく、==デザイナーが思考し、判断する力をどう保つか==。冒頭では「AIの話にもう疲れていませんか」と問いかけ、AIをめぐる期待を批判的に見直す姿勢を示した。" },
            { photos: ["photos/s11/02.jpg"], text: "**2．「AIで生産性が上がる」という期待**\n\n「すべての働き手が速くなる」「少ない人数でより多くをつくれる」「生産性が何倍にもなる」「デザインはプロンプト一つでできる」といった言説を紹介。しかし、実際のデータは必ずしもその期待どおりではないと問題提起した。" },
            { photos: ["photos/s11/03.jpg"], text: "**3．AI利用の増加と、集中効率の低下**\n\n1,000超の組織、約16万3,000人、4億4,000万時間超の労働を対象とした調査を紹介。**AI導入率80％、AIサービスの利用時間8倍**に対し、**生産的な時間の増加は5％、集中効率は60％まで低下**（3年ぶりの低水準）。\n\n消耗感は減った一方、自分の能力を十分に使えていないと感じる人が増えている。「単調な仕事をAIに任せ、人間は難しい仕事に集中する」という説明と食い違う結果として取り上げた。" },
            { photos: ["photos/s11/04.jpg"], text: "**4．燃え尽きの減少と、挑戦不足の増加**\n\n仕事への関与が低下するリスクが**23％上昇**。燃え尽きが減ったことはよい変化と認めつつ、過剰に働いているのではなく、**十分に挑戦できていない人が増えている**点を問題視した。" },
            { photos: ["photos/s11/05.jpg"], text: "**5．「AIパイロットの95％が失敗」という報告**\n\n2025年のMITの調査として「AIパイロットの95％が失敗する」という数字を紹介。ただし講演者自身は、その数字には不公平な面があり、失敗を織り込んだ試行も含まれるのではないかと留保した。" },
            { photos: ["photos/s11/06.jpg"], text: "**6．制作の加速に、注意・集中・判断の設計が追いついていない**\n\nなぜこうした結果になるのか、「答えは分からない」としたうえで一つの仮説を示した。成果物を速く出すことに注目する一方、チームの注意力、集中力、判断力をどう育て、維持するかが置き去りになっているのではないか。" },
          ],
        },
        {
          title: "道具は決して中立ではない",
          blocks: [
            { photos: ["photos/s11/07.jpg"], text: "**7．道具は決して中立ではない**\n\nここから、道具が仕事や思考に与える影響へと議論を移した。AIを単に便利な手段と見るのではなく、使う人の行動や考え方を変えるものとして捉える必要がある。" },
            { photos: ["photos/s11/08.jpg"], text: "**8．道具が仕事を支える段階から、仕事を支配する段階へ**\n\nイヴァン・イリイチの「**コンヴィヴィアルな道具**」を紹介。==ペンや紙のように自由・技能・創造性を広げる道具がある一方、複雑化した道具は、ある段階（閾値）から利用者の要求ではなく、道具自身の要求に合わせて仕事を組み替え始める==。その状態を「**ラディカルな独占**」と説明した。" },
          ],
        },
        {
          title: "そもそも「AI」とは何か",
          blocks: [
            { photos: ["photos/s11/09.jpg"], text: "**9．「AI」は一つのものではない**\n\n「AIができるようになった」と聞くと、講演者はまず「**どの種類のAIか**」と問い返す。AIは約70年の歴史を持つ広い研究領域であり、現在よく使われる生成AIだけを意味するものではない。" },
            { photos: ["photos/s11/10.jpg"], text: "**10．AIには複数の研究系統がある**\n\n初期のシンボリックAI、1980年代のエキスパートシステム、その後のAIの冬、機械学習への展開を概観。群知能、ニューロシンボリックAI、ニューロモーフィックAI、身体性を持つAIなど、並行する研究も続いている。\n\n次の変化がどの系統から生まれるかは分からないため、現在主流の方式をAI全体と同一視しないよう促した。" },
            { photos: ["photos/s11/11.jpg"], text: "**11．機械学習・深層学習・生成AI・LLMの関係**\n\nニューラルネットワークの層を深くしたものが深層学習、それを使って新しい合成データを生成するのが生成AI、その一つの方式がLLM。\n\n深層学習の「深い」は、人間の深い理解ではなく、**アーキテクチャの深さ**を指すと強調。言語モデル自体は以前からあり、現在の特徴はその大規模化だと述べた。" },
            { photos: ["photos/s11/12.jpg"], text: "**12．モデルと、利用者が触れるサービスは異なる**\n\nトランスフォーマーはLLMを実現する一つの方式で、現在は事実上の標準。そのうえで、多くの利用者が接しているのはモデルそのものではなく、**モデルへのインターフェース**であると区別した。" },
            { photos: ["photos/s11/13.jpg"], text: "**13．私たちが使っているのは「道具」か「サービス」か**\n\n一般的な対話型AIを「**道具ではなくサービス**」と位置づけた。==自分の技能を道具で延長するというより、サービスにコンテンツを注文し、受け取っている==という捉え方である。後半の依存や責任の議論につながる重要な区別となっている。" },
            { photos: ["photos/s11/14.jpg"], text: "**14．AI全体のごく一部が、議論の中心になっている**\n\n広いAI研究領域のうち、議論は**3社が提供する4つのサービス**に集中していると指摘。「AI」と言うときに何を指しているかを明確にし、商用サービスを中立・無偏見・客観的な存在として扱わないよう促した。" },
          ],
        },
        {
          title: "道具と心：拡張と切断",
          blocks: [
            { photos: ["photos/s11/15.jpg"], text: "**15．技術は能力を拡張すると同時に、何かを失わせる**\n\nマクルーハンを参照。電話は声、自動車は足の能力を拡張する一方、**あらゆる拡張は何かを切り離す**。仕事に技術を導入するときには、何ができるようになるかだけでなく、何を失うのか、その代償に価値があるかも問う必要がある。" },
            { photos: ["photos/s11/16.jpg"], text: "**16．メディアの論理が、心の論理になる**\n\nInstagramを使ううちに世界を投稿向けの「魅力的な正方形」で見るようになることや、Xでは短い文字数の単位で議論するようになることを例示。使い続けるメディアの形式が、注意の向け方や思考の形式にも影響する。" },
            { photos: ["photos/s11/17.jpg"], text: "**17．スケッチの曖昧さが、発見を生む**\n\nユハニ・パラスマーの議論を紹介。スケッチの価値は、すぐ明確な答えを出すことではなく、==曖昧さを生み、その状態にとどまれることにある==。==「早すぎる明確化は発見を殺す」==。" },
            { photos: ["photos/s11/18.jpg"], text: "**18．プロセスそのものが思考である**\n\nナイジェル・クロスは、==デザインが外在化、反復、再構成を通じて知識を生み出すと論じる==。プロセスは成果物への単なる手順ではなく、==プロセスそのものが思考==である。プロセスを変えれば、思考も変わる。" },
            { photos: ["photos/s11/19.jpg"], text: "**19．考える前に答えが提示されると、探究の仕方が変わる**\n\nデザイナーが考える前に、使っている仕組みが構造を決め、パターンを埋め、解決策を提案すると、探究そのもののあり方が変わる。\n\n強力な道具に反対しているのではない。それが==自由を広げる道具なのか、判断を置き換える仕組みなのかを見極めることが重要==だとした。" },
          ],
        },
        {
          title: "判断と自動化",
          blocks: [
            { photos: ["photos/s11/20.jpg"], text: "**20．判断と自動化**\n\n判断と自動化は別のもので、ときに衝突すると説明。人間をどこに位置づけるかという前日のパネルにも触れつつ、デザインが扱う知識の種類から考える方向へ進んだ。" },
            { photos: ["photos/s11/21.jpg"], text: "**21．デザインを支える三つの知識の伝統**", list: ["**ネオ実証主義／分析**：LLMは分析、構造化、案の生成で高い能力を示し得る。ただし、使い続けることでモデルの統計的な既定値が、人間の判断に置き換わるおそれがある。", "**プラグマティズム／つくって試すこと**：LLMは下書きや選択肢をつくれるが、それを現実世界で実際に試すことはできない。", "**現象学／生きられた経験**：身体を使ってつくり、試し、サービスを経験する過程から得られる知識は、分析とは異なる種類のもの。"] },
            { photos: ["photos/s11/22.jpg"], text: "**22．デザイン判断に必要なもの**\n\n**途切れない注意**、洞察が生まれるまで**曖昧さに耐えること**、**まだきれいに整っていない表現を探索する姿勢**。最初からピクセル単位で完成して見える必要はなく、==未完成な状態にも意味がある==。" },
            { photos: ["photos/s11/23.jpg"], text: "**23．最初の行動がプロンプトだと、何を飛ばすのか**\n\n問題設定から、不確実性、洞察、判断、明確化、反復を経て成果物に至る流れと、問題設定をそのままプロンプトにして成果物を得る流れを対比した。\n\n見栄えがよく、顧客に売れそうな回答がすぐ得られても、==独自の思考が生まれる部分を飛ばしている可能性がある==。成果物は得られても、十分に練られたものではないかもしれない。\n\n==問題を定義してすぐにLLMへ投げかけ、売り物のように整った回答を得ると、独自の思考が生まれるプロセスを飛ばしてしまう==。" },
            { photos: ["photos/s11/24.jpg"], text: "**24．AIに費やす時間と、実際に考える時間**\n\n冒頭の「AI利用8倍」「集中効率60％」「関与低下リスク23％増」を再提示。==AIを使う時間は増えているのに、実際の思考を伴う時間は少なくなっている==のではないか。" },
            { photos: ["photos/s11/25.jpg"], text: "**25．LLMは平均へと引き寄せる**\n\n==LLMは統計的な機械であり、出力を平均的・一般的な方向へ引き寄せる。文章を何度も調整するうち、標準的で個性の薄いものになる==経験を例に挙げた。\n\n独創的で分布の端にあるような考えを求めるなら、**LLMが向かう方向に抗う必要がある**。" },
            { photos: ["photos/s11/26.jpg"], text: "**26．「考えられるデザイナー」と「プロンプトを使えるデザイナー」**\n\n==「考えることのできるデザイナーと、プロンプトを使えるデザイナーには違いがある」==という挑発的な対比を提示。「自分は両方できる」と考える聴衆にも問いを向け、==プロンプトを使えることを、思考力が保たれている証拠とみなさない==よう揺さぶった。" },
          ],
        },
        {
          title: "扱いやすい問題と、厄介な問題",
          blocks: [
            { photos: ["photos/s11/27.jpg"], text: "**27．扱いやすい問題と、厄介な問題**\n\nリッテルとウェーバー（1973）の区別。定義が明確で、客観的・測定可能に評価できる問題と、複雑で文脈依存の問題を対比した。前者は専門教育で扱いやすく、管理者にも好まれ、AIも得意とする領域。" },
            { photos: ["photos/s11/28.jpg"], text: "**28．AIが得意な領域と、デザインが向き合う複雑さ**\n\n問題を単純な二分法ではなく、**一般的で扱いやすい問題から、まれで厄介な領域固有の問題までの連続体**として設定。この後のグラフで、問題の性質とデザイナーやLLMのパフォーマンスの関係を考えていく。" },
            { photos: ["photos/s11/29.jpg"], text: "**29．問題の難しさによって、能力の見え方は変わる**\n\n一般的で日常的な問題では高い成果を出せても、まれで複雑な問題になるほど、通常はパフォーマンスが落ちる。優れたデザイナーにも同様の傾向があるが、成果の水準は異なる。\n\nLLMも問題領域によって見え方が変わり、**自分の専門外のデモほど感心してしまう**という経験を語った。" },
            { photos: ["photos/s11/30.jpg"], text: "**30．自分とチームは、どの問題領域で仕事をしているか**\n\n同じグラフ上でチームの位置を変えながら、普段の仕事が横軸のどこにあるかを見極めるよう促した。AIの性能を抽象的に評価するのではなく、自分たちが実際に扱う問題との関係で考える必要がある。" },
            { photos: ["photos/s11/31.jpg"], text: "**31．若手・熟練者と、LLMの支援をどう組み合わせるか**\n\nグラフの表示を変え、チームの能力分布や役割分担には複数の形があると示した。若手が比較的容易な仕事、熟練者が難しい仕事を担う場合も含め、**LLMが誰の、どの仕事を、どう支援しているか**を評価するよう促した。" },
          ],
        },
        {
          title: "デザイナーとチームへの七つの問い",
          blocks: [
            { photos: ["photos/s11/32.jpg"], text: "**32．デザイナーとチームへの七つの問い**\n\nこれがチームの変革の出発点になる、として七つの問いを示した。", list: ["この道具・サービスは、自分やチームの何を拡張するのか。", "時間とともに、何を置き換えるのか。", "AIを前提とする環境で育つ若手は、どのように技能を身につけるのか。", "どのような組織知を築いているのか。それは持ち運べるのか。", "レジリエンスを育てているのか、それとも依存を深めているのか。", "明日の朝LLMサービスが消えたら、簡単には再構築できない何を失うのか。", "使っている道具は、能力を育てているのか。それとも主に安心感を与えているのか。"] },
            { text: "口頭では、学習の機会となる基礎的な仕事がなくなれば若手はどうシニアになるのか、ハーネス、スキル、ファインチューニング、RAGに埋め込んだ知識の何が移植可能なのか、と問いを掘り下げた。値上げやサービス消失の可能性にも注意を促した。" },
          ],
        },
        {
          title: "個人の心から、組織へ",
          blocks: [
            { photos: ["photos/s11/33.jpg"], text: "**33．個人の心から、組織へ**\n\nここから、個人の思考への影響を、企業、大学、行政など、知識を保持する組織の問題へ広げた。AIへの依存は、個人の使い方だけでは完結しない。" },
            { photos: ["photos/s11/34.jpg"], text: "**34．組織における「ラディカルな独占」**\n\n検索、要約、下書き、制作のすべてが二、三のクローズドモデルを通じて行われるようになると、それは単なる便利な道具ではなく、組織や分野全体の基盤になる。そのとき、道具の独占が組織の知識活動そのものを支配する構造へ変わり得ると警告した。" },
            { photos: ["photos/s11/35.jpg"], text: "**35．共同の探究としての知識と、私有される知識**\n\nプラグマティズムでは、知識は共同体の中で生み、試し、修正するものだ。一方、最先端モデルを中心とする経済は、監査できないブラックボックスを受け身で消費し、提供企業の価値観に沿う構造になっていると批判した。" },
            { photos: ["photos/s11/36.jpg"], text: "**36．メディアの論理が、組織の論理になる**\n\n利用者のプロンプトには提供企業のシステムプロンプトが加わり、回答はその価値観を通して形成される。個人だけでなく、組織の思考にもサービス側の論理が入り込む。\n\nさらに、AIを「サービス」ではなく「道具」と呼ぶことで責任が利用者側に置かれると主張。ハンマーを自分で使う場合と、大工に仕事を依頼する場合を対比した（講演者の見解であり、個別の契約への法的判断ではない）。" },
          ],
        },
        {
          title: "結び：テクノロジーとの関係を、自ら設計する",
          blocks: [
            { photos: ["photos/s11/37.jpg"], text: "**37．参加型デザインの原点に戻る**\n\n1970年代のスカンジナビアの参加型デザイン、ユートピア・プロジェクト、ペレ・イーンの「共に実践しながらデザインする」という考え方に言及。参加型デザイン自体が、**テクノロジーへの権力集中に応答するために生まれた伝統**であることを思い出すよう促した。" },
            { photos: ["photos/s11/38.jpg"], text: "**38．参加型の知識インフラをつくる**\n\n代替の方向として、オープンで、内部を検証でき、地域や当事者が統治する「**参加型の知識インフラ**」を提案した。ただし、この方向性の提示にとどまり、具体的な技術構成や導入手順までは説明していない。" },
            { photos: ["photos/s11/39.jpg"], text: "**39．テクノロジーとの関係を、誰が設計しているのか**\n\n締めくくりの問いは、私たちがテクノロジーとの関係を設計しているのか、それとも気づかないうちにテクノロジーによって設計されているのか。デザインの専門家が、自分たちと技術との関係を設計しないのは皮肉なことではないか、と問いかけた。" },
            { photos: ["photos/s11/40.jpg"], text: "**40．次のデザインの姿を、自覚的に選ぶ**\n\n最後は「**次のデザインの姿を決めるのはあなた。目を開いて、その選択をしてほしい**」という呼びかけで終了。AIを使うか使わないかの単純な選択ではなく、何が変わり、何を失い、誰に依存するのかを認識したうえで関係を選ぶ、という締めくくりだった。" },
          ],
        },
        {
          title: "質疑応答：AI時代のデザイン教育",
          blocks: [
            { photos: ["photos/s11/41.jpg"], text: "**質問**：プロセスそのものが思考であり、早すぎる明確化がそれを妨げるなら、これから技能を学ぶデザイナーの教育はどうあるべきか。\n\n**回答**：難しい問いで、自分にも確定した答えはないと明言したうえで、二つを両立させる必要があると述べた。", list: ["**卒業後に仕事を得られること**：職場がAIへの習熟を求めるなら、それに応える教育も必要。", "**長い職業人生を支える基礎**：デジタルツールだけでなく、現実でつくって試すこと、身体的な経験、スケッチ、曖昧さにとどまる力を育てる。"] },
            { text: "まず基礎的な技能を身につければ、その後にLLMやFigmaを使うことも容易になる。**ペンと紙を使いこなすこと**を勧めた。" },
          ],
        },
      ],
      // トップの「インサイト」カード。head＝見出し、text＝本文、hl＝ページ内で何番目のハイライトへ移動するか（概要→ポイントの順に1から数える）
      learnings: [
        { hl: 13, head: "速さより、判断の設計", headEn: "Design judgement, not just speed",
          text: "AI利用は8倍、生産的な時間は5％増、集中効率は60％に低下。制作の加速に、注意・集中・判断の設計が追いついていない。",
          en: "AI use up 8x, productive time up 5%, focus efficiency down to 60%. Governing attention and judgement hasn't kept pace with faster production." },
        { hl: 3, head: "道具が主役になる瞬間", headEn: "When the tool takes over",
          text: "ペンや紙のように自由・技能・創造性を広げる道具がある一方、複雑化した道具は、ある段階（閾値）から利用者の要求ではなく、道具自身の要求に合わせて仕事を組み替え始める。その状態が「ラディカルな独占」。",
          en: "Some tools, like pen and paper, expand freedom, skill and creativity. Past a threshold, complex tools start reorganising work around their own needs rather than the user's. That is a “radical monopoly”." },
        { hl: 15, head: "考えるか、プロンプトするか", headEn: "Think, or prompt?",
          text: "「考えることのできるデザイナーと、プロンプトを使えるデザイナーには違いがある」。デザインは外在化、反復、再構成を通じて知識を生み出す。プロセスそのものが思考である。",
          en: "“There's a difference between designers who can think and designers who can prompt.” Design generates knowledge through externalisation, iteration and reframing. The process is the thinking." },
        { hl: 5, head: "スケッチの曖昧さが、発見を生む", headEn: "Ambiguity in sketches sparks discovery",
          text: "パラスマーによれば、スケッチの価値は、すぐ明確な答えを出すことではなく、曖昧さを生み、その状態にとどまれることにある。「早すぎる明確化は発見を殺す」。最初の一手がプロンプトだと、独自の思考が生まれる部分を飛ばしてしまう。",
          en: "Juhani Pallasmaa argues that the value of sketching isn't fast clarity but producing ambiguity and staying with it. “Premature clarity kills discovery.” When the first move is a prompt, we skip the part where original thinking happens." },
      ],
      insights: [
        "AIを導入するときは、何を拡張し、何を置き換えるのかをチームで言葉にする。",
        "最初の一手をプロンプトにせず、スケッチや対話で曖昧さにとどまる時間をつくる。",
        "LLMサービスが明日なくなったら何を失うかを点検し、持ち運べる組織知を残す。",
      ],
      photos: [...Array.from({ length: 41 }, (_, i) => String(i + 1).padStart(2, "0"))].map((n) => `photos/s11/${n}.jpg`),
      en: {
        keyPhrase: "Designers who can think, or designers who can prompt?",
        summary:
          "AI makes design faster, but how does it change the way we think and judge? This session ==took a critical look at the promise of AI productivity, exploring how tools extend human abilities while also reshaping work and thought==. Focusing on how design creates knowledge through sketching, prototyping and staying with ambiguity, it contrasted getting answers quickly with thinking things through.\n\nDistinguishing problems AI handles well from those that need human judgement and real-world testing, it also looked at developing junior designers, building institutional knowledge and dependence on specific services. The question is not whether to use AI, but what to hand over and what to keep growing as our own capability, and how to consciously design our relationship with technology.",
        points: [
          { title: "Intro: Did AI Really Make Us More Productive?", blocks: [
            "**1. Title: AI, Responsibility, and Better Decisions in an Age of Hype**\n\nThe theme was not just using AI to produce faster, but ==how designers keep their ability to think and judge==. He opened by asking “Are you tired of talking about AI yet?” and set out to look critically at the hype.",
            "**2. The Promise of AI Productivity**\n\n“Every worker gets faster”, “designers can do more with less”, “8x productivity is imminent”, “design is a prompt away”. He questioned whether the data actually matches these claims.",
            "**3. More AI Use, Lower Focus**\n\nA study of over 1,000 organisations, about 163,000 employees and 440 million work hours: **AI adoption at 80% and time in AI services up 8x**, but **productive hours up only 5%, and focus efficiency down to 60%**, a three-year low.\n\nExhaustion dropped, yet more people feel under-used. This contradicts the story that AI takes the dull work so people can focus on the hard work.",
            "**4. Less Burnout, More Under-challenge**\n\nThe risk of disengagement **jumped 23%**. Less burnout is a genuine win, but more employees are **chronically under-challenged rather than overextended**.",
            "**5. “95% of AI Pilots Are Failing”**\n\nHe cited a 2025 MIT study claiming 95% of AI pilots fail, while noting the figure may be unfair and could include pilots designed to fail.",
            "**6. Attention and Judgement Haven't Kept Pace**\n\nWhy these results? “I don't know,” he said, but offered a hypothesis: while we focus on producing faster, governing the team's attention, focus and judgement hasn't kept pace.",
          ] },
          { title: "Tools Are Never Neutral", blocks: [
            "**7. Tools Are Never Neutral**\n\nThe talk turned to how tools shape work and thinking. AI is not just a convenient means; it changes how its users act and think.",
            "**8. The Tool Threshold**\n\nIvan Illich's **convivial tools**, ==like pen and paper, enhance freedom, skill and creativity. Past a threshold, complex tools start reorganising work around their own requirements rather than the user's==. He called this a **radical monopoly**.",
          ] },
          { title: "What Do We Mean by “AI”?", blocks: [
            "**9. “AI” Is Not One Thing**\n\nWhen he hears “AI can now do X”, he first asks “**which kind of AI?**” AI is a 70-year-old field, far broader than today's generative AI.",
            "**10. Many Lines of AI Research**\n\nFrom early symbolic AI and 1980s expert systems, through the AI winter, to machine learning. Swarm, neuro-symbolic, neuromorphic and embodied AI are researched in parallel.\n\nNo one knows where the next shift will come from, so don't equate today's dominant approach with all of AI.",
            "**11. Machine Learning, Deep Learning, GenAI, LLMs**\n\nDeeper neural networks are deep learning; using them to generate new synthetic data is generative AI; LLMs are one form of it.\n\nThe “deep” refers to **architectural depth**, not deep understanding. Language models aren't new; what's new is their scale.",
            "**12. Models vs. the Services We Touch**\n\nTransformers are one way to build LLMs and now the de facto standard. But most people interact not with the model itself, but with **an interface to it**.",
            "**13. Tools or Services?**\n\nHe framed chat AI as **a service, not a tool**: ==rather than extending our skills, we order content and receive it==. This distinction underpins the later argument about dependency and responsibility.",
            "**14. A Tiny Slice of AI Dominates the Debate**\n\nOf the whole field, the conversation centres on **four services from three companies**. Be clear what you mean by “AI”, and don't treat commercial services as neutral, unbiased or objective.",
          ] },
          { title: "Tools and Minds: Extension and Amputation", blocks: [
            "**15. Every Extension Amputates**\n\nCiting McLuhan: the phone extends the voice, the car the feet, but **every extension amputates a part of ourselves**. When bringing technology into work, ask not only what it enables, but what we lose and whether it's worth it.",
            "**16. The Logic of the Medium Becomes the Logic of the Mind**\n\nInstagram users start seeing the world in attractive squares; X users start arguing in short posts. The form of the media we use shapes how we attend and think.",
            "**17. Sketching Produces Ambiguity**\n\nJuhani Pallasmaa: the value of sketching isn't fast clarity but ==producing ambiguity and staying with it==. ==“Premature clarity kills discovery.”==",
            "**18. The Process Is the Thinking**\n\nNigel Cross: ==design generates knowledge through externalisation, iteration and reframing==. The process is not just steps to an output; ==the process is the thinking==. Change the process and you change the thinking.",
            "**19. When Answers Come Before Thinking**\n\nIf the material prescribes structure, autofills patterns or suggests solutions before the designer has thought, the mode of inquiry itself is altered.\n\nHe isn't against powerful tools; ==the point is to tell tools that expand freedom from systems that replace judgement==.",
          ] },
          { title: "Judgement and Automation", blocks: [
            "**20. Judgement and Automation**\n\nJudgement and automation are different and sometimes collide. Touching on the previous day's panel about where humans belong, he turned to the kinds of knowledge design relies on.",
            { text: "**21. Three Knowledge Traditions Behind Design**", list: ["**Neo-positivism / analysis**: LLMs can out-analyse and out-generate many designers, but over time the model's statistical defaults may replace human judgement.", "**Pragmatism / making and testing**: LLMs can draft options, but cannot test them in the real world.", "**Phenomenology / lived experience**: the embodied, ambiguous knowledge of making and experiencing services is a different kind of knowledge, and no model has a body."] },
            "**22. What Design Judgement Requires**\n\n**Sustained, uninterrupted attention**, **tolerance of ambiguity** long enough for insight to emerge, and **willingness to explore representations that don't yet look good**. Things don't need to look pixel-perfect from the start; ==unfinished states have meaning too==.",
            "**23. When the First Move Is a Prompt**\n\nHe contrasted two paths: from problem statement through uncertainty, insight, judgement, clarity and iteration to product, versus turning the problem statement straight into a prompt.\n\nA great-looking, sellable answer may mean ==we may have skipped the part where original thinking happens==. You get a product, but maybe not a well-considered one.\n\n==Define a problem, throw it straight at an LLM and get a polished, sellable answer, and you skip the process where original thinking emerges==.",
            "**24. Time With AI vs. Time Thinking**\n\nHe brought back the numbers: AI use up 8x, focus efficiency at 60%, disengagement risk up 23%. ==We spend more hours with AI, but fewer of them involve actual thinking.==",
            "**25. LLMs Pull Toward the Mean**\n\n==LLMs are statistical machines that pull outputs toward the average. Refine a text with one enough times and it turns generic.==\n\nIf you want original ideas at the edges of the distribution, **you have to work against the LLM's pull**.",
            "**26. Designers Who Can Think vs. Designers Who Can Prompt**\n\nA provocation: ==“There's a difference between designers who can think and designers who can prompt services.”== Even to those who say they can do both, he warned ==not to take prompting skill as proof that thinking is intact==.",
          ] },
          { title: "Tame Problems and Wicked Problems", blocks: [
            "**27. Tame Problems / Wicked Problems**\n\nRittel and Webber (1973): well-defined problems with objective, measurable evaluation versus complex, context-specific ones. The former are easy to teach, managers like them, and AI does well on them.",
            "**28. Where AI Excels, and Where Design Lives**\n\nRather than a binary, problems sit on **a continuum from common, tame and generic to rare, wicked and specific**. The following charts relate this to the performance of designers and LLMs.",
            "**29. Performance Depends on the Problem**\n\nPerformance is high on common problems and usually drops as problems get rarer and more complex. The best designers follow the same curve at a higher level.\n\nLLMs look different depending on the domain, and **demos are most impressive outside your own expertise**.",
            "**30. Where Do You and Your Team Work?**\n\nMoving the team along the same chart, he asked where our everyday work sits on the axis. Judge AI not in the abstract, but against the problems you actually handle.",
            "**31. Combining Juniors, Seniors and LLMs**\n\nTeams distribute capability and roles in different ways, such as juniors on easier work and seniors on harder work. Assess **whose work the LLM supports, which work, and how**.",
          ] },
          { title: "Questions for Designers", blocks: [
            { text: "**32. Seven Questions for Designers and Teams**\n\nHe offered seven questions as the starting point for transformation in a team.", list: ["What does this tool (or service) extend in me or my team?", "What does it replace over time?", "How do junior designers develop skills inside an AI-powered environment?", "What institutional knowledge are we building, and is it portable?", "Are we building resilience or dependency?", "If our LLM service disappeared tomorrow morning, what would we lose that we can't easily reconstruct?", "Do the tools I use build capability, or comfort?"] },
            "Verbally he went further: if entry-level work disappears, how do juniors become seniors? What knowledge embedded in harnesses, skills, fine-tuning and RAG is actually portable? He also warned of price rises and services disappearing.",
          ] },
          { title: "From Mind to Institution", blocks: [
            "**33. From Mind to Institution**\n\nHe widened the lens from individual minds to institutions that hold knowledge: companies, universities, governments. AI dependency doesn't stop at individual use.",
            "**34. The Institutional Radical Monopoly**\n\nWhen two or three closed models become the substrate for searching, summarising, drafting and creating, they're no longer tools but infrastructure. The tool monopoly can become a monopoly over the institution's knowledge work itself.",
            "**35. Knowledge as Public Inquiry vs. Private Property**\n\nPragmatism holds that knowledge is produced, tested and repaired communally. The frontier-model economy is the opposite: opaque knowledge, consumed passively and shaped to the vendor's values.",
            "**36. The Logic of the Medium Becomes the Logic of the Organisation**\n\nEvery prompt is wrapped in the vendor's system prompt, so answers are shaped by its values. The service's logic seeps into organisational thinking.\n\nCalling AI a “tool” rather than a “service” also places responsibility on the user, like using a hammer yourself versus hiring a carpenter (his view, not a legal opinion).",
          ] },
          { title: "Closing: Design Your Own Relationship With Technology", blocks: [
            "**37. Back to the Roots of Participatory Design**\n\nHe recalled 1970s Scandinavian participatory design, the Utopia project and Pelle Ehn's “design-by-doing-together”. Participatory design was itself **a response to power concentrated in technology**.",
            "**38. Build Participatory Knowledge Infrastructure**\n\nAs an alternative, he proposed **participatory knowledge infrastructure**: open, inspectable and locally governed. He offered this as a direction, without technical details or rollout steps.",
            "**39. Who Is Designing Whom?**\n\nThe closing question: are we designing our own relationship to technology, or are we being designed by it? Isn't it ironic for design professionals not to design that relationship?",
            "**40. Choose What Design Looks Like Next**\n\nHe ended with: “**You decide what design looks like next. Make that choice with your eyes open.**” Not a simple yes or no to AI, but choosing the relationship knowing what changes, what's lost and whom we depend on.",
          ] },
          { title: "Q&A: Design Education in the Age of AI", blocks: [
            { text: "**Q**: If the process is the thinking and premature clarity gets in the way, how should we educate designers who are still learning the craft?\n\n**A**: He said it's a hard question with no settled answer, but two things must be balanced.", list: ["**Employability**: if workplaces expect AI fluency, education must respond.", "**Foundations for a long career**: not only digital tools, but making and testing in the real world, embodied experience, sketching and staying with ambiguity."] },
            "Once the fundamentals are in place, LLMs and Figma become easier to use. His advice: **master pen and paper**.",
          ] },
        ],
        insights: [
          "When adopting AI, put into words as a team what it extends and what it replaces.",
          "Don't make a prompt your first move; make time to stay with ambiguity through sketching and conversation.",
          "Check what you'd lose if your LLM service vanished tomorrow, and keep institutional knowledge portable.",
        ],
      },
    },
  ],
};
