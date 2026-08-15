import { copyFileSync } from 'fs';
import { join } from 'path';

const PORTRAIT_DIR = 'D:/BaiduNetdiskDownload/Unity精灵立绘/Unity精灵立绘';
const WIKI_DIR = 'd:/slay/seer-wiki/docs/public/images/monsters';

// Exact correct matches (original form, not evolution/skin)
const corrections = {
  'jill_monster.png': '35-吉尔.png',
  'nil_monster.png': '77-尼尔.png',
  'menghuwang_monster.png': '299-猛虎王.png',
  'mushroom_monster.png': '47-蘑菇怪.png',
  'axe_monster.png': '50-阿克希亚.png',
  'rio_monster.png': '42-里奥斯.png',
  'ray_monster.png': '70-雷伊.png',
  'gaia_monster.png': '261-盖亚.png',
  'casius_monster.png': '798-卡修斯.png',
  'blake_monster.png': '875-布莱克.png',
};

for (const [wikiFile, correctPortrait] of Object.entries(corrections)) {
  const src = join(PORTRAIT_DIR, correctPortrait);
  const dest = join(WIKI_DIR, wikiFile);
  copyFileSync(src, dest);
  console.log(`Fixed: ${correctPortrait} -> ${wikiFile}`);
}

console.log('All corrections applied!');
