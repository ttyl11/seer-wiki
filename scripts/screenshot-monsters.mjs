import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';
import { join } from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE_URL = 'http://localhost:5182';
const OUT_DIR = 'd:\\slay\\seer-wiki\\screenshots';
const VIEWPORT = { width: 1400, height: 900, deviceScaleFactor: 1 };

mkdirSync(OUT_DIR, { recursive: true });

// All monster pages: [category, filename, displayName]
const pages = [
  // Normal (28)
  ['normal', 'annie_monster', '安妮'],
  ['normal', 'attack_slime_monster', '攻击史莱姆'],
  ['normal', 'bibi_mouse_monster', '比比鼠'],
  ['normal', 'buluke_monster', '布鲁克'],
  ['normal', 'cactus_monster', '仙人掌'],
  ['normal', 'defense_slime_monster', '防御史莱姆'],
  ['normal', 'dixius_monster', '狄修斯'],
  ['normal', 'doushen_ruiersi_monster', '斗神瑞尔斯'],
  ['normal', 'jiabu_monster', '加布'],
  ['normal', 'jill_monster', '吉尔'],
  ['normal', 'kunge_monster', '坤格'],
  ['normal', 'magic_flower_monster', '魔花仙子'],
  ['normal', 'menghuwang_monster', '猛虎王'],
  ['normal', 'moges_monster', '摩哥斯'],
  ['normal', 'nil_monster', '尼尔'],
  ['normal', 'sakesen_monster', '萨克森'],
  ['normal', 'siduer_monster', '斯嘟尔'],
  ['normal', 'slime_monster', '史莱姆'],
  ['normal', 'slime_king_monster', '史莱姆国王'],
  ['normal', 'slime_prince_monster', '史莱姆王子'],
  ['normal', 'speed_slime_monster', '速度史莱姆'],
  ['normal', 'hp_slime_monster', '体力史莱姆'],
  ['normal', 'splinter_monster', '斯普林特'],
  ['normal', 'tailesi_monster', '泰勒斯'],
  ['normal', 'taiwosi_monster', '泰沃斯'],
  ['normal', 'telanxi_monster', '特兰西'],
  ['normal', 'tyrant_slime_monster', '暴君史莱姆'],
  ['normal', 'pipi_monster', '皮皮'],
  // Elite (14)
  ['elite', 'axe_monster', '阿克希亚'],
  ['elite', 'dou_mo_wang_qiao_monster', '斗魔旺乔'],
  ['elite', 'hamlet_monster', '哈莫雷特'],
  ['elite', 'hayek_monster', '哈耶克'],
  ['elite', 'medusa_monster', '墨杜萨'],
  ['elite', 'mojj_monster', '魔狮迪露'],
  ['elite', 'mushroom_monster', '蘑菇怪'],
  ['elite', 'nai_ni_fen_duo_monster', '奈尼芬多'],
  ['elite', 'rio_monster', '里奥斯'],
  ['elite', 'steel_jaw_shark_monster', '钢牙鲨'],
  ['elite', 'thunder_mouse_monster', '天雷鼠'],
  ['elite', 'tias_monster', '提亚斯'],
  ['elite', 'yizhake_monster', '伊扎克'],
  ['elite', 'younas_monster', '尤纳斯'],
  // Boss (11)
  ['boss', 'blake_monster', '布莱克'],
  ['boss', 'buster_monster', '巴斯特'],
  ['boss', 'casius_monster', '卡修斯'],
  ['boss', 'durgar_monster', '朵拉格'],
  ['boss', 'gaia_monster', '盖亚'],
  ['boss', 'muse_monster', '缪斯'],
  ['boss', 'phoenix_monster', '菲尼克斯'],
  ['boss', 'puni_monster', '谱尼'],
  ['boss', 'ray_monster', '雷伊'],
  ['boss', 'soulson_monster', '索伦森'],
  ['boss', 'tiger_monster', '泰格尔'],
  // Special (3)
  ['special', 'kunge_egg', '坤格的蛋'],
  ['special', 'medusa_minion_monster', '墨鲁萨'],
  ['special', 'trial_slime_monster', '试炼史莱姆'],
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  let ok = 0, fail = 0;
  for (const [cat, name, label] of pages) {
    const url = `${BASE_URL}/monsters/${cat}/${name}`;
    const outPath = join(OUT_DIR, `${cat}_${name}.png`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait for mermaid svg to render
      await page.waitForSelector('.mermaid svg', { timeout: 10000 }).catch(() => {});
      await sleep(2000);
      // Take screenshot of the visible viewport (top of page)
      await page.screenshot({ path: outPath, fullPage: false });
      // Scroll to mermaid and screenshot that area
      const mermaidEl = await page.$('.mermaid');
      if (mermaidEl) {
        await mermaidEl.scrollIntoView();
        await sleep(800);
        await page.screenshot({ path: join(OUT_DIR, `${cat}_${name}_mermaid.png`) });
      }
      console.log(`OK [${cat}] ${label} (${name})`);
      ok++;
    } catch (e) {
      console.error(`FAIL [${cat}] ${label} (${name}): ${e.message}`);
      fail++;
    }
  }

  await browser.close();
  console.log(`\nDone: ${ok} OK, ${fail} FAIL`);
}

main().catch(e => { console.error(e); process.exit(1); });
