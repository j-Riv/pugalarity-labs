// Fails if the built site references any off-site URL. The site must make no
// third-party requests and carry no tracking. Allowed: the SVG and sitemap XML namespaces
// (identifiers, never fetched), and the site's own domain.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = 'dist';
const ALLOWED = [/^https?:\/\/www\.w3\.org\/2000\/svg/, /^https?:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9/, /^https:\/\/pugalaritylabs\.com(\/|$)/,
];
const TEXT = new Set(['.html', '.css', '.js', '.svg', '.txt', '.json', '.xml']);

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const offenders = [];
for (const file of walk(DIST).filter((f) => TEXT.has(extname(f)))) {
  let text = readFileSync(file, 'utf8');
  // Comments are never fetched (Tailwind's license banner links to its homepage).
  if (extname(file) === '.css') text = text.replace(/\/\*[\s\S]*?\*\//g, '');
  const urls = text.match(/https?:\/\/[^\s"'<>)\\]+/g) ?? [];
  for (const url of urls) if (!ALLOWED.some((ok) => ok.test(url))) offenders.push(`${file}: ${url}`);
}

if (offenders.length) {
  console.error(`Found ${offenders.length} off-site URL(s):\n${[...new Set(offenders)].join('\n')}`);
  process.exit(1);
}
console.log('No off-site URLs in dist/.');
