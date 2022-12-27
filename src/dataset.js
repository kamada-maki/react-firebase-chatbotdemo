const defaultDataset = {
  "init": {
      answers: [
          {content: "会員サイトについて質問したい", nextId: "about_cms"},
          {content: "管理画面について質問したい", nextId: "about_crm"},
          {content: "アンバサダークラウドについて相談したい", nextId: "consultant"},
          {content: "雑談したいぜ★", nextId: "talking"},
      ],
      question: "こんにちは！🐯トラハックへのご用件はなんでしょうか？",
  },
  "about_cms": {
      answers: [
          {content: "記事について質問したい", nextId: "article"},
          {content: "LP作成について質問したい", nextId: "lp"},
          {content: "サンプル記事について確認したい", nextId: "sample_article"},
          {content: "その他", nextId: "other"}
      ],
      question: "どのようなご質問でしょうか？",
  },
  "article": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "記事についてですね。コチラからお問い合わせできます。",
  },
  "lp": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "LPについてですね。コチラからお問い合わせできます。",
  },
  "sample_article": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "サンプル記事についてですね。コチラからお問い合わせできます。",
  },
  "other": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね。コチラからお問い合わせできます。",
  },
  "consultant": {
      answers: [
          {content: "アンバサダークラウドってなに？", nextId: "https://www.ambassador-cloud.biz/"},
          {content: "ランク設計について相談したい", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "システム操作以外に関するご相談はこちらからお問い合わせできます。",
  },
  "about_crm": {
      answers: [
          {content: "ポイントについて", nextId: "about_point"},
          {content: "それ以外", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "管理画面についてですね。コチラからお問い合わせできます。",
  },
  "about_point": {
      answers: [
          {content: "ポイント承認について", nextId: "https://sites.google.com/libcon.co.jp/ac-user-site/crm/会員のポイント申請を承認する"},
          {content: "ポイント付与について", nextId: "https://sites.google.com/libcon.co.jp/ac-user-site/crm/会員にポイントを付与する"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "ポイントについてですね",
  },
  "talking": {
      answers: [
          {content: "雑談したい", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "問い合わせフォームで送ってくださいな",
  },
}

export default defaultDataset