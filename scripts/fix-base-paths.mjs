// 构建后处理：给 dist 里 HTML 中硬编码的站内绝对路径补 base 前缀
// 背景：markdown 里手写的 <a href="/xxx/"> / <img src="/images/..."> 不会被
// VitePress 自动加 base，子路径部署（GitHub Pages 项目页）时全部 404。
// 用法：node scripts/fix-base-paths.mjs <base>   例如 node scripts/fix-base-paths.mjs /seer-wiki/
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const base = process.argv[2]
if (!base || !/^\/[\w-]+\/$/.test(base)) {
  console.error('用法: node scripts/fix-base-paths.mjs /前缀/  （必须以斜杠开头结尾）')
  process.exit(1)
}

// 站内一级目录名单（href 用；src 只需处理 /images/）
// 只匹配紧跟 href="/ 的名单目录，天然不会误伤已带前缀的 /seer-wiki/... 链接
const SECTIONS = 'cards|relics|powers|potions|monsters|mechanics|characters|enchantments|orbs|trivia|combos|easter-eggs|changelog|support|comments'

const reHref = new RegExp(`href="\\/(${SECTIONS})\\/([^"]*)"`, 'g')
const reSrc = /src="\/(images)\/([^"]*)"/g

const distDir = join(process.cwd(), 'docs', '.vitepress', 'dist')
let files = 0, changed = 0

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) { walk(p); continue }
    if (!name.endsWith('.html')) continue
    files++
    const orig = readFileSync(p, 'utf8')
    const out = orig
      .replace(reHref, (m, sec, rest) => `href="${base}${sec}/${rest}"`)
      .replace(reSrc, (m, dir2, rest) => `src="${base}${dir2}/${rest}"`)
    if (out !== orig) { writeFileSync(p, out); changed++ }
  }
}

walk(distDir)
console.log(`fix-base-paths: 检查 ${files} 个 HTML，改写 ${changed} 个（前缀 ${base}）`)
