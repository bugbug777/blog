# Sihle’s Studio

以繁體中文記錄網站開發、投資理財與生活日常的個人部落格。

## 本機開發

需求：Node.js `22.23.4` 或更新版本。

```sh
npm ci
PRIVATE_DRAFTS_DIR=../sihle-studio-drafts/content npm run dev
```

開發伺服器以背景模式執行，使用 `astro dev status`、`astro dev logs` 與 `astro dev stop` 管理。開發模式可瀏覽私人草稿；正式建置固定從公開專案的 `src/content/blog/` 讀取，確保私人草稿不會進入正式網站。

## 撰寫文章

文章草稿先放在私人草稿儲存庫，核准發布後才複製到公開網站專案的 `src/content/blog/`。檔名會成為文章英文字 slug。Frontmatter 範例：

```yaml
---
title: '文章標題'
description: '簡短摘要'
pubDate: '2026-11-18'
category: website-development
draft: false
---
```

`category` 可使用 `website-development`、`finance` 或 `daily-life`。公開網站儲存庫只放已核准、準備發布的內容；不要把私人草稿或敏感資料提交到公開儲存庫。正式網站、RSS 與 sitemap 會排除 `draft: true` 的文章，但公開儲存庫內的原始檔仍可被任何人查看。

## GitHub Pages

`.github/workflows/deploy.yml` 會在推送至 `main` 後建置並部署網站，也可從 Actions 頁面手動執行。GitHub 專案頁的站點網址與 repo base path 會由 workflow 依 repo 資訊推導。

若設定自訂網域，請在 GitHub Pages 設定完成網域與 DNS，並於 Repository Variables 設定：

- `SITE_URL`：完整網站網址，例如 `https://example.com`
- `BASE_PATH`：自訂網域使用 `/`
- `PUBLIC_GA4_ID`：GA4 Measurement ID（例如 `G-XXXXXXXXXX`）；未設定時網站不顯示同意提示，也不載入 Analytics。此值是公開網站識別碼，不是密鑰。
- `PAGES_DEPLOYMENT_ENABLED`：只有上線門檻全部完成後才設為 `true`；未啟用時，推送 `main` 不會部署正式網站。

正式網域已購買為 `sihle.cc`，預定使用 `https://sihle.cc/`。GA4 只會在訪客同意後載入；建立 GA4 資源後，將 Measurement ID 設為 GitHub Repository Variable `PUBLIC_GA4_ID`，並確認隱私權說明及同意介面設定。Cloudflare CSP 最終政策需允許同意後載入的 Google tag 資源。

## 常用指令

```sh
npm run build
npm run preview
```
