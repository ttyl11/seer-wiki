// 检查所有遗物 wiki 页面中的链接是否指向存在的目标
// 用法: node check-relic-links.mjs
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve('docs');
const RELICS_DIR = path.join(ROOT, 'relics');

// 收集所有存在的 wiki 页面（不含 .md 后缀的相对路径）
const existingPages = new Set();
function collectPages(dir, base = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      collectPages(full, rel);
    } else if (entry.name.endsWith('.md')) {
      // 同时记录带 .md 和不带 .md 的形式
      const withoutExt = rel.replace(/\.md$/, '');
      existingPages.add(withoutExt);
      existingPages.add(rel);
    }
  }
}
collectPages(ROOT);

// 验证链接目标是否存在
function targetExists(link) {
  // 去掉开头的 /
  let p = link.replace(/^\//, '');
  // 去掉查询参数和锚点
  p = p.split('#')[0].split('?')[0];
  // 去掉 .md 后缀（如果有的话）
  const withoutMd = p.replace(/\.md$/, '');
  // 检查多种可能的形式
  return existingPages.has(p) ||
         existingPages.has(withoutMd) ||
         existingPages.has(p + '.md') ||
         existingPages.has(withoutMd + '.md') ||
         existingPages.has(withoutMd + '/index') ||
         existingPages.has(withoutMd + '/index.md');
}

// 提取所有 markdown 链接 [text](url)
const LINK_RE = /\[([^\]]*)\]\(([^)]+)\)/g;

// 扫描所有遗物页面
const brokenLinks = [];
let checkedCount = 0;
let fileCount = 0;

function scanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (entry.name.endsWith('.md')) {
      fileCount++;
      const content = fs.readFileSync(full, 'utf-8');
      let match;
      while ((match = LINK_RE.exec(content)) !== null) {
        const text = match[1];
        const link = match[2];
        checkedCount++;
        // 只检查内部链接（以 / 开头）
        if (!link.startsWith('/')) continue;
        // 跳过图片链接（以 ! 开头的不在此正则中，但 /images/ 路径跳过）
        if (link.startsWith('/images/')) continue;
        if (!targetExists(link)) {
          brokenLinks.push({
            file: path.relative(ROOT, full),
            text,
            link,
          });
        }
      }
    }
  }
}
scanDir(RELICS_DIR);

console.log(`\n=== 检查结果 ===`);
console.log(`扫描文件数: ${fileCount}`);
console.log(`检查链接数: ${checkedCount}`);
console.log(`损坏链接数: ${brokenLinks.length}`);

if (brokenLinks.length > 0) {
  console.log(`\n=== 损坏链接列表 ===`);
  for (const bl of brokenLinks) {
    console.log(`[${bl.file}] "${bl.text}" -> ${bl.link}`);
  }
}
