// Génère le CV en PDF (A4, une page) à partir de la page cv.html.
// Usage : npm run cv
// Premier lancement : npx playwright install chromium
import { preview } from 'vite';
import { chromium } from 'playwright';
import { copyFileSync } from 'node:fs';
import { profile } from '../src/data/profile.js';
import { variants } from '../src/data/variants.js';

const jobs = [['', profile.cvFile], ...Object.entries(variants).map(([k, v]) => [`?v=${k}`, v.cvFile])];

const server = await preview({ preview: { port: 4317, open: false } });
const url = server.resolvedUrls.local[0];

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}
);
const page = await browser.newPage();
for (const [query, file] of jobs) {
  const out = `public/${file}`;
  await page.goto(`${url}cv.html${query}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
  copyFileSync(out, `dist/${file}`);
  console.log(`CV généré : ${out}`);
}

await browser.close();
server.httpServer.close();

