// Converte scripts/og-source.svg → public/og-image.png (1200x630) usando sharp (já vem com o Astro).
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const svg = readFileSync(fileURLToPath(new URL('./og-source.svg', import.meta.url)));
const out = fileURLToPath(new URL('../public/og-image.png', import.meta.url));

await sharp(svg, { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile(out);

console.log('OK: public/og-image.png gerado.');
