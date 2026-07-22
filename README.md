# Regis and Savoy Corporate Services LLP — Website

Animation-rich marketing site for **Regis and Savoy Corporate Services LLP**,
skinned in the Regis & Savoy heritage identity (crimson crest, warm ivory,
aged gold, Cormorant Garamond). Built with **Next.js 16 + React 19**, exported
as a fully static site so it runs on **any** host with zero server config.

> The Next.js app now lives at the **repository root** (no `web/` subfolder),
> so Vercel and static hosts detect it automatically.

## Local development
```bash
npm install
npm run dev      # dev server (http://localhost:3000)
```

## Build (produces the static site)
```bash
npm run build    # outputs a fully static site into ./out
```
`next.config.ts` sets `output: "export"`, so every route is pre-rendered to
plain HTML in `out/` — no Node server required at runtime.

## Deploy

### Option A — Vercel (automatic)
1. Import the repo at https://vercel.com/new (Root Directory = repo root).
2. Framework auto-detects **Next.js** → **Deploy**. Nothing else to configure.

### Option B — Your own server / shared hosting (cPanel, Apache, Nginx)
1. `npm run build`
2. Upload the **contents of `out/`** into the site's document root
   (so `index.html`, `_next/`, `about/`, `services/`, … sit at the root —
   **not** inside an `out/` folder). A prebuilt `regis-site.zip` is provided.
3. Make sure the **`_next`** folder uploads (some FTP clients skip names that
   start with `_`). Included `.htaccess` wires up the branded 404 on Apache.

Internal navigation uses plain `<a>` links (classic multi-page site), so there
are **no client-side prefetch requests** — the site loads with zero console
errors on any static host.

## Structure
- `src/app/` — routes: `/` (home), `/about`, `/services`, `/contact`
- `src/components/` — Header (floating glass nav + mega-menu), Footer,
  DisclaimerGate, motion primitives, sections, `AppLink` (hard-nav link)
- `src/lib/content.ts` — all site copy (from the brand document)
- `public/brand/` — crest marks generated from the logo PDFs
- `public/images/` — photography
- `content/` — original source brand assets (logo PDFs, profile document)
- `scripts/` — one-off asset/screenshot utilities (not part of the build)
