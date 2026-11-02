# SDGC26 聴講レポート

- サイト：GitHub Pages（このリポジトリの `main` ブランチをそのまま公開）
- いいね・コメント：Supabase の `rx_reactions` テーブルに1件1行で蓄積

## 内容を更新するとき

ファイルを編集して GitHub Desktop で Commit → Push すると、1〜2分で同じURLに反映されます。
リポジトリ名やGitHubのユーザー名を変えない限りURLは変わりません。

## リアクションの確認・管理（Supabase の Table Editor → rx_reactions）

- `kind`：like（ハート）/ stamp（スタンプ）/ comment（コメント）
- `session_id`：セッション、`quote`：対象の文章、`body`：コメント本文、`created_at`：日時
- `deleted_at`：取り消し日時（空なら表示中）。取り消しても履歴として行は残ります
- 不適切なコメントを隠す：その行の `deleted_at` に日時を入れます
- 書き出し：Table Editor の Export から CSV で保存できます

`assets/config.js` に書く Project URL と Publishable key は公開されても問題ありません。
service_role / secret キーは絶対に書かないでください。

Supabase 無料プランは利用が少ないと一時停止されることがあるため、
`.github/workflows/keepalive.yml` が3日ごとに軽い読み取りを行います。
もし停止したら、Supabase の管理画面から再開できます。
