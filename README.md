# actions-playground

Github Actions 学習・実験用の環境

## CI の使い分け

- `.github/workflows/ci.yml` は Node.js プロジェクト向けで、`npm run lint` と `npm run format` を実行します。
- `.github/workflows/security.yml` は `gitleaks` で秘密情報の混入を検査します。
- `npm run lint` を使うには、ローカルにも `package.json` と `lint` スクリプトが必要です。
- `npm run lint:fix` を使うと、ESLint が自動修正できる範囲を更新できます。
- `npm run format` を使うには、ローカルにも `package.json` と `format` スクリプトが必要です。
- `npm run format:fix` を使うと、Prettier で自動整形できます。
- `package-lock.json` がある場合は `npm ci`、ない場合は `npm install` を使う前提にしています。
