# Regis and Savoy Corporate Services LLP — Website

An AZB-inspired, animation-rich marketing site skinned in the Regis & Savoy
heritage identity (crimson crest, warm ivory, aged gold, Cormorant Garamond).

## Stack
- **Next.js 16.2** (App Router, Turbopack) + **React 19.2**
- **Tailwind CSS v4** (CSS-based theme in `src/app/globals.css`)
- **Framer Motion** (scroll reveals, staggers, hero parallax, mega-menu)
- **Lenis** weighted smooth-scroll (`src/components/SmoothScroll.tsx`)

## Run
```bash
npm run dev      # dev server (auto-picks a free port, e.g. 3001)
npm run build    # production build (all routes prerender static)
npm start        # serve the production build
```

## Structure
- `src/lib/content.ts` — all Regis & Savoy copy (from the brand document)
- `public/brand/` — crest PNGs generated from the supplied logo PDFs
- `src/components/` — Header (mega-menu), Footer, DisclaimerGate, motion primitives, sections
- `src/app/` — `/` (home), `/about`, `/services`, `/contact`

## Animations replicated from azbpartners.com
Word-by-word hero reveal, parallax crest, scroll-triggered fade/rise section
reveals, staggered card grids, an infinite specialism marquee, expandable
service accordion (+/- toggles), clip-path full-screen mega-menu, animated
hamburger, scroll-aware sticky header, arrow-hover link swaps, dark quote
panels, newsletter "Stay in the loop" footer, and an informational
disclaimer splash.
