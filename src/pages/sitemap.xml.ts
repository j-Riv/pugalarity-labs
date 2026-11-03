// Lists every page under src/pages, so new pages are picked up with no edits here.
// The canonical URLs in Base.astro end in a slash, so these do too.
import type { APIRoute } from 'astro';
import { papers } from '../data/papers';

const pages = import.meta.glob('./**/*.astro');

// Dynamic routes (like /research/[slug]/) are listed from their data below.
const paths = Object.keys(pages)
  .map((file) => file.slice(1).replace(/\.astro$/, '').replace(/\/?index$/, '/'))
  .map((path) => (path.endsWith('/') ? path : `${path}/`))
  .filter((path) => path !== '/404/' && !path.includes('['))
  .concat(papers.map((p) => `/research/${p.slug}/`))
  .sort();

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
