import { copyFileSync } from 'fs';
import { join } from 'path';

const PORTRAIT_DIR = 'D:/BaiduNetdiskDownload/Unity精灵立绘/Unity精灵立绘';
const WIKI_DIR = 'd:/slay/seer-wiki/docs/public/images/monsters';

const slimeMap = {
  'slime_monster.png': '2211-史莱姆.png',
  'trial_slime_monster.png': '2211-史莱姆.png', // 试炼史莱姆就是史莱姆
  'attack_slime_monster.png': '2285-攻击史莱姆.png',
  'defense_slime_monster.png': '2264-防御史莱姆.png',
  'speed_slime_monster.png': '2252-速度史莱姆.png',
  'hp_slime_monster.png': '2253-体力史莱姆.png',
  'slime_prince_monster.png': '2227-史莱姆王子.png',
  'slime_king_monster.png': '2228-史莱姆国王.png',
  'tyrant_slime_monster.png': '3522-暴君史莱姆.png',
};

for (const [wikiFile, portrait] of Object.entries(slimeMap)) {
  const src = join(PORTRAIT_DIR, portrait);
  const dest = join(WIKI_DIR, wikiFile);
  copyFileSync(src, dest);
  console.log(`✅ ${portrait} -> ${wikiFile}`);
}

console.log('All slimes replaced!');
