// Builds the light-theme header logo: the cream "Pugalarity" wordmark goes dark so it reads on the
// light page. The pug, divider, "LABS" and rules are untouched. Run after replacing the logo:
//   node scripts/make-light-logo.mjs
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const src = fileURLToPath(new URL('../src/assets/brand/pugalarity-labs-logo.png', import.meta.url));
const out = fileURLToPath(
  new URL('../src/assets/brand/pugalarity-labs-logo-light.png', import.meta.url),
);

// Wordmark region of the 1200x345 logo: right of the divider, above "LABS". Tune if the art changes.
const X_MIN = 540;
const Y_MAX = 238;
// The light theme's --ink.
const INK = [0x1d, 0x1a, 0x16];

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

for (let y = 0; y <= Math.min(Y_MAX, height - 1); y++) {
  for (let x = X_MIN; x < width; x++) {
    const i = (y * width + x) * channels;
    if (data[i + 3] === 0) continue;
    // Keep alpha so the edges stay anti-aliased; the cream fill and its dark outline become one color.
    data[i] = INK[0];
    data[i + 1] = INK[1];
    data[i + 2] = INK[2];
  }
}

await sharp(data, { raw: { width, height, channels } }).png({ compressionLevel: 9 }).toFile(out);
console.log(`wrote ${out}`);
