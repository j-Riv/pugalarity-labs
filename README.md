# Pugalarity Labs

Source for [pugalaritylabs.com](https://pugalaritylabs.com). A static [Astro](https://astro.build) site with TypeScript and Tailwind CSS. No backend, no analytics, no data collection, no secrets.

## Requirements

Node **22.23.4 or newer** (`nvm use` reads `.nvmrc`).

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Type-check (`astro check`) then build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check:links` | Crawl `dist/` and fail on any broken link or `#fragment` |
| `npm run check:external` | Fail if `dist/` references any off-site URL |
| `npm run check:lighthouse` | Lighthouse on all 14 pages (needs Chrome; set `CHROME_PATH` if it isn't found) |
| `npm run check` | Build, then all three checks above |

Lighthouse thresholds (`lighthouserc.json`): Accessibility = 1.00, Performance / Best Practices / SEO ≥ 0.95.

## Layout

```
src/pages/        one file per route (research/, models/, news/, legal/ are folders)
src/layouts/      Base (head, nav, footer, cookie banner) and Legal
src/components/   Pug, BarChart, LineChart, InvestorLogo, PageHeader, WaitlistForm, CookieBanner
src/data/         content as typed data: team, roles, papers, benchmarks, investors, psl
src/styles/       global.css: Tailwind import and light/dark design tokens
public/           copied to dist/ as-is: favicon, og-image.png, robots.txt, CNAME
design/           og-image.svg, the source for public/og-image.png
scripts/          check-external.mjs
```

## Swapping the art

All pug illustrations come from `src/components/Pug.astro`. Replace its shapes and every page updates. Keep the `alt` prop behavior: with `alt` the SVG is announced as an image, without it the SVG is hidden from assistive tech. Check both color schemes afterward, since the portrait backgrounds follow the theme.

To regenerate the social preview after editing `design/og-image.svg`, screenshot it at 1200×630 into `public/og-image.png` (headless Chrome: `--window-size=1200,630 --screenshot=public/og-image.png file://$PWD/design/og-image.svg`).

## Deploying to GitHub Pages

1. Repository Settings → Pages → Source: **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` builds and publishes.
3. Point the domain's DNS at GitHub Pages ([custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)). `public/CNAME` already names the domain.

`astro.config.mjs` sets `site` and deliberately no `base`. A `base` breaks routing on a custom domain.

Netlify also works with no adapter: build command `npm run build`, publish directory `dist`.

## Content rules

See `CLAUDE.md`. Original SVG/CSS art only; invented names only; nothing leaves the page.
