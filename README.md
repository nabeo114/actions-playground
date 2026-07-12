# actions-playground
Github Actions 学習・実験用の環境

## lint の使い分け

- `.github/workflows/lint-node.yml` は Node.js プロジェクト向けで、`package.json` があるときに `npm run lint` を実行します。
- `npm run lint` を使うには、ローカルにも `package.json` と `lint` スクリプトが必要です。
- `package-lock.json` がある場合は `npm ci`、ない場合は `npm install` を使う前提にしています。
