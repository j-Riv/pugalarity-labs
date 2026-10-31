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
src/components/   BarChart, LineChart, BleedHero, InvestorRow, PersonCard, PageHeader, WaitlistForm, CookieBanner
src/assets/       hero, team, board, investor, brand logo, and 404 images (processed by Astro at build)
src/data/         content as typed data: team, roles, papers, benchmarks, investors, psl
src/styles/       global.css: Tailwind import and light/dark design tokens
public/           copied to dist/ as-is: favicons and site.webmanifest, og-image.png, robots.txt, CNAME
design/           og-image.svg, the source for public/og-image.png (uses the hero photo and logo from src/assets/)
scripts/          check-external.mjs
```

## Swapping the art

The hero, team portraits, and investor logos are images in `src/assets/` (`hero/`, `team/`, `investors/`). Astro resizes them at build and serves AVIF/WebP with a JPEG fallback (`<Picture>` for photos, `<Image>` for logos). To swap one, replace the file keeping its name and dimensions. Alt text lives in `src/data/team.ts`, `src/data/board.ts`, and on the hero in `src/pages/index.astro`. Investor logos are decorative (`alt=""`) because the firm name sits next to them as live text, and are tinted to the theme with a CSS filter, so they should be a single flat color on a transparent background.

The 404 page uses `src/components/BleedHero.astro` (a full-bleed image whose edges fade into the page background) with `src/assets/404/pug-not-found.jpg`.

To regenerate the social preview after editing `design/og-image.svg`, screenshot it at 1200×630 into `public/og-image.png` (headless Chrome: `--window-size=1200,630 --screenshot=public/og-image.png file://$PWD/design/og-image.svg`).

## Theme

Dark is the default and ignores the operating system's setting. The header toggle switches to light and saves the choice in `localStorage` (this browser only, never sent anywhere). The colors are CSS variables in `src/styles/global.css`: `:root` is dark and `:root[data-theme='light']` overrides it. A small inline script in `Base.astro` sets `data-theme` before first paint, so there is no flash. Anything theme-specific should key off `data-theme` (Tailwind's `dark:` variant is wired to it), not `prefers-color-scheme`.

## Deploying to GitHub Pages

1. Repository Settings → Pages → Source: **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` builds and publishes.
3. Point the domain's DNS at GitHub Pages ([custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)). `public/CNAME` already names the domain.

`astro.config.mjs` sets `site` and deliberately no `base`. A `base` breaks routing on a custom domain.

Netlify also works with no adapter: build command `npm run build`, publish directory `dist`.

## Content rules

See `CLAUDE.md`. Original art only (our own SVG/CSS and generated images); invented names only; nothing leaves the page.
