# Pugalarity Labs

Pugalarity Labs: Artificial Intelligence, Questionable Intelligence. A satirical AI startup site built with Astro, TypeScript and Tailwind.

Source for [pugalaritylabs.com](https://pugalaritylabs.com). A static [Astro](https://astro.build) site with TypeScript and Tailwind CSS. No backend, no accounts, no personal data collection, no secrets. The only analytics is Cloudflare Web Analytics (cookieless page-view counts).

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

The home hero has two images of the same size: `src/assets/hero/hero.jpg` (dark theme) and `hero-light.jpg` (light theme, on a cream background); `BleedHero.astro` shows the one for the current theme.

The header logo is `src/assets/brand/pugalarity-labs-logo.png`; the light-theme copy (dark wordmark) is generated from it, so after replacing the logo run `node scripts/make-light-logo.mjs` and commit both files.

The 404 page uses `src/components/BleedHero.astro` (a full-bleed image whose edges fade into the page background) with `src/assets/404/pug-not-found.jpg` and, for the light theme, `pug-not-found-light.jpg`.

To regenerate the social preview after editing `design/og-image.svg`, screenshot it at 1200×630 into `public/og-image.png` (headless Chrome: `--window-size=1200,630 --screenshot=public/og-image.png file://$PWD/design/og-image.svg`).

## Theme

Dark is the default and ignores the operating system's setting. The header toggle switches to light and saves the choice in `localStorage` (this browser only, never sent anywhere). The colors are CSS variables in `src/styles/global.css`: `:root` is dark and `:root[data-theme='light']` overrides it. A small inline script in `Base.astro` sets `data-theme` before first paint, so there is no flash. Anything theme-specific should key off `data-theme` (Tailwind's `dark:` variant is wired to it), not `prefers-color-scheme`.

## Playground

`/playground` is a simulated chat, not a real model. Every reply lives in `src/data/snort.ts` (three models, keyword categories with per-model replies, fallbacks, the four starter prompts, and the status and thinking lines). `src/lib/snort.ts` only matches keywords and picks an entry, never repeating the previous one. To add or change a joke, edit the data file; categories are tried in order, so put specific patterns before broad ones. There is no network call: the only thing stored is the fake "treat allowance" count, in `sessionStorage` for the tab. The playground also has a few hidden interactions; their content is in `src/data/easter-eggs.ts` and their trigger logic in `src/lib/easter-eggs.ts`, kept apart from the public reply library.

### Hidden interactions

Spoilers. Triggers are matched against the whole message (case-insensitive), so ordinary sentences never fire them. "New conversation" resets all of it, and nothing is saved between page loads.

| Easter egg | Trigger | What happens |
| --- | --- | --- |
| Squirrel emergency | Mention "squirrel" or "squirrels" three times in total, in one message or across several. Fires once per conversation. | Red security-breach overlay; "Dismiss Alert" returns to chat. |
| Nap Mode | Send exactly `go to sleep`, `take a nap` or `nap mode` (optionally prefixed with "please"). | The model hibernates and the input is disabled until "Wake Model". |
| Developer terminal | Send exactly `sudo su` (or `sudo su -`). | Fake console with a fixed command table: `help`, `status`, `whoami`, `ls`, `cat squirrels.log`, `uptime`, `sudo apt install intelligence`, `clear`, `exit`. Nothing is evaluated. Escape or `exit` closes it. |
| Snort-2 (Experimental) | Send exactly `unlock snort-2` (also `snort 2` or `snort2`). | Short unlock sequence, then Snort-2 is added to the model selector. Its replies are in `snort2Bank` in `src/data/easter-eggs.ts`. |

## Deploying to GitHub Pages

1. Repository Settings → Pages → Source: **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` builds and publishes.
3. Point the domain's DNS at GitHub Pages ([custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)). `public/CNAME` already names the domain.

`astro.config.mjs` sets `site` and deliberately no `base`. A `base` breaks routing on a custom domain.

`/sitemap.xml` is generated at build from the files in `src/pages` (`src/pages/sitemap.xml.ts`, no dependency) and is listed in `public/robots.txt`. To get indexed, add the domain in Google Search Console, verify it with the DNS TXT record (so nothing goes in the repo), and submit `https://pugalaritylabs.com/sitemap.xml`.

Netlify also works with no adapter: build command `npm run build`, publish directory `dist`.

## Content rules

See `CLAUDE.md`. Original art only (our own SVG/CSS and generated images); invented names only; nothing personal leaves the page (the one exception is the Cloudflare Web Analytics beacon).
