import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';
import { join } from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE_URL = 'http://localhost:5182';
const OUT_DIR = 'd:\\slay\\seer-wiki\\screenshots';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const targets = [
  { url: '/monsters/boss/puni_monster', name: 'boss_puni_monster' },
  { url: '/monsters/boss/soulson_monster', name: 'boss_soulson_monster' },
];

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const target of targets) {
    console.log(`Capturing ${target.name}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 2000, deviceScaleFactor: 1 });
    
    const url = BASE_URL + target.url + '.html';
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await sleep(2000);
    
    // Full page screenshot
    await page.screenshot({ path: join(OUT_DIR, target.name + '.png'), fullPage: true });
    
    // Mermaid diagram closeup
    const mermaid = await page.$('.mermaid');
    if (mermaid) {
      await mermaid.screenshot({ path: join(OUT_DIR, target.name + '_mermaid.png') });
    }
    
    await page.close();
    console.log(`  Done: ${target.name}`);
  }

  await browser.close();
  console.log('All done!');
}

main().catch(console.error);
