// 检查整个 docs 目录中所有指向 /relics/ 的链接是否正确
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve('docs');

// 收集所有存在的 wiki 页面
const existingPages = new Set();
function collectPages(dir, base = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      collectPages(full, rel);
    } else if (entry.name.endsWith('.md')) {
      const withoutExt = rel.replace(/\.md$/, '');
      existingPages.add(withoutExt);
      existingPages.add(rel);
    }
  }
}
collectPages(ROOT);

function targetExists(link) {
  let p = link.replace(/^\//, '');
  p = p.split('#')[0].split('?')[0];
  // 去掉末尾的 /
  p = p.replace(/\/$/, '');
  const withoutMd = p.replace(/\.md$/, '');
  return existingPages.has(p) ||
         existingPages.has(withoutMd) ||
         existingPages.has(p + '.md') ||
         existingPages.has(withoutMd + '.md') ||
         existingPages.has(withoutMd + '/index') ||
         existingPages.has(withoutMd + '/index.md') ||
         existingPages.has(p + '/index') ||
         existingPages.has(p + '/index.md');
}

const LINK_RE = /\[([^\]]*)\]\(([^)]+)\)/g;

const brokenLinks = [];
let checkedCount = 0;
let relicLinkCount = 0;
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
        if (!link.startsWith('/')) continue;
        if (link.startsWith('/images/')) continue;
        // 特别标记指向 /relics/ 的链接
        if (link.startsWith('/relics/')) {
          relicLinkCount++;
        }
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
scanDir(ROOT);

console.log(`\n=== 全站检查结果 ===`);
console.log(`扫描文件数: ${fileCount}`);
console.log(`检查链接数: ${checkedCount}`);
console.log(`其中指向 /relics/ 的链接数: ${relicLinkCount}`);
console.log(`损坏链接数: ${brokenLinks.length}`);

if (brokenLinks.length > 0) {
  console.log(`\n=== 损坏链接列表 ===`);
  for (const bl of brokenLinks) {
    console.log(`[${bl.file}] "${bl.text}" -> ${bl.link}`);
  }
}
