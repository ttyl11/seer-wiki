import { readdirSync, copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const PORTRAIT_DIR = 'D:/BaiduNetdiskDownload/Unity精灵立绘/Unity精灵立绘';
const WIKI_MONSTERS_DIR = 'd:/slay/seer-wiki/docs/public/images/monsters';

// Monster wiki filename -> Chinese name mapping (from monsters.json)
const monsterMap = {
  // Normal monsters
  'pipi_monster.png': '皮皮',
  'annie_monster.png': '安妮',
  'bibi_mouse_monster.png': '比比鼠',
  'cactus_monster.png': '仙人掌',
  'magic_flower_monster.png': '魔花仙子',
  'jill_monster.png': '吉尔',
  'thunder_mouse_monster.png': '天雷鼠',
  'moges_monster.png': '摩哥斯',
  'nil_monster.png': '尼尔',
  'jiabu_monster.png': '加布',
  'menghuwang_monster.png': '猛虎王',
  'siduer_monster.png': '斯嘟尔',
  'buluke_monster.png': '布鲁克',
  'telanxi_monster.png': '特兰西',
  'taiwosi_monster.png': '泰沃斯',
  'dixius_monster.png': '狄修斯',
  'sakesen_monster.png': '萨克森',
  'tailesi_monster.png': '泰勒斯',
  'doushen_ruiersi_monster.png': '斗神瑞尔斯',
  'kunge_monster.png': '坤格',
  // Slimes - Slay the Spire original, skip for now (we have sequence frames already)
  'slime_monster.png': null,
  'attack_slime_monster.png': null,
  'defense_slime_monster.png': null,
  'speed_slime_monster.png': null,
  'hp_slime_monster.png': null,
  'slime_prince_monster.png': null,
  'slime_king_monster.png': null,
  'tyrant_slime_monster.png': null,
  'splinter_monster.png': '斯普林特',
  
  // Elite monsters
  'mushroom_monster.png': '蘑菇怪',
  'axe_monster.png': '阿克希亚',
  'tias_monster.png': '提亚斯',
  'steel_jaw_shark_monster.png': '钢牙鲨',
  'mojj_monster.png': '魔狮迪露',
  'younas_monster.png': '尤纳斯',
  'hayek_monster.png': '哈耶克',
  'nai_ni_fen_duo_monster.png': '奈尼芬多',
  'dou_mo_wang_qiao_monster.png': '斗魔旺乔',
  'hamlet_monster.png': '哈莫雷特',
  'medusa_monster.png': '墨杜萨',
  'yizhake_monster.png': '伊扎克',
  'rio_monster.png': '里奥斯',
  
  // Boss monsters
  'ray_monster.png': '雷伊',
  'buster_monster.png': '巴斯特',
  'durgar_monster.png': '朵拉格',
  'tiger_monster.png': '泰格尔',
  'phoenix_monster.png': '菲尼克斯',
  'gaia_monster.png': '盖亚',
  'casius_monster.png': '卡修斯',
  'blake_monster.png': '布莱克',
  'muse_monster.png': '缪斯',
  'puni_monster.png': '谱尼',
  'soulson_monster.png': '索伦森',
  
  // Special monsters
  'kunge_egg.png': null, // User said not in the set
  'trial_slime_monster.png': null,
  'medusa_minion_monster.png': '墨鲁萨',
};

// Get all portrait files
const portraitFiles = readdirSync(PORTRAIT_DIR).filter(f => f.endsWith('.png'));
console.log(`Found ${portraitFiles.length} portrait files`);

const found = [];
const notFound = [];

for (const [wikiFile, chineseName] of Object.entries(monsterMap)) {
  if (!chineseName) {
    console.log(`⏭️  ${wikiFile}: ${chineseName === null ? 'Skipped (slime/egg)' : 'No name'}`);
    continue;
  }
  
  // Try exact match first (filename contains chineseName)
  let match = portraitFiles.find(f => f.includes(chineseName + '.png'));
  
  if (!match) {
    // Try partial match (for longer names, match any part)
    match = portraitFiles.find(f => f.includes(chineseName));
  }
  
  if (match) {
    const srcPath = join(PORTRAIT_DIR, match);
    const destPath = join(WIKI_MONSTERS_DIR, wikiFile);
    copyFileSync(srcPath, destPath);
    console.log(`✅ ${chineseName}: ${match} -> ${wikiFile}`);
    found.push({ wikiFile, chineseName, match });
  } else {
    console.log(`❌ ${chineseName} (${wikiFile}): NOT FOUND`);
    notFound.push({ wikiFile, chineseName });
  }
}

console.log('\n=== Summary ===');
console.log(`Found and replaced: ${found.length} images`);
console.log(`Not found: ${notFound.length}`);
if (notFound.length > 0) {
  console.log('\nNot found list:');
  notFound.forEach(n => console.log(`  - ${n.chineseName} (${n.wikiFile})`));
}
