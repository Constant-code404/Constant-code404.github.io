// Génère le CV en PDF (A4, une page) à partir de la page cv.html.
// Usage : npm run cv
// Premier lancement : npx playwright install chromium
import { preview } from 'vite';
import { chromium } from 'playwright';
import { copyFileSync } from 'node:fs';
import { profile } from '../src/data/profile.js';

const out = `public/${profile.cvFile}`;

const server = await preview({ preview: { port: 4317, open: false } });
const url = server.resolvedUrls.local[0];

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}
);
const page = await browser.newPage();
await page.goto(`${url}cv.html`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.emulateMedia({ media: 'print' });
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });

await browser.close();
server.httpServer.close();

copyFileSync(out, `dist/${profile.cvFile}`);
console.log(`CV généré : ${out} (copié dans dist/)`);
