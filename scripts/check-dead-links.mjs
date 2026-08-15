// 检测 wiki 页面中的死链（链接到不存在的页面）
// 用法: node scripts/check-dead-links.mjs [relics|powers|all]
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DOCS_DIR = path.resolve(__dirname, '../docs')

const targetArg = process.argv[2] || 'relics'
const targets = targetArg === 'all' ? ['relics', 'powers'] : [targetArg]

// 收集所有 docs 下的 .md 文件路径（相对路径，不含 .md 扩展名）
const allMdFiles = new Set()
function collectMdFiles(dir, base = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true })
  for (const item of items) {
    const fullPath = path.join(dir, item.name)
    const relPath = base ? `${base}/${item.name}` : item.name
    if (item.isDirectory()) {
      if (item.name === 'public' || item.name === '.vitepress') continue
      collectMdFiles(fullPath, relPath)
    } else if (item.name.endsWith('.md')) {
      // 去掉 .md 扩展名
      allMdFiles.add(relPath.replace(/\.md$/, ''))
    }
  }
}
collectMdFiles(DOCS_DIR)

console.log(`docs 下共 ${allMdFiles.size} 个 .md 文件\n`)

function checkDir(dirName) {
  const TARGET_DIR = path.join(DOCS_DIR, dirName)
  if (!fs.existsSync(TARGET_DIR)) {
    console.log(`[skip] ${dirName} 目录不存在`)
    return
  }

  // 读取所有 wiki 文件
  const files = fs.readdirSync(TARGET_DIR)
    .filter(f => f.endsWith('.md') && f !== 'all.md' && f !== 'index.md')

  const deadLinks = []

  for (const file of files) {
    const filePath = path.join(TARGET_DIR, file)
    const content = fs.readFileSync(filePath, 'utf8')

    // 匹配 markdown 链接 [text](/path)
    const linkRegex = /\]\((\/[^)]+)\)/g
    let match
    while ((match = linkRegex.exec(content)) !== null) {
      const linkPath = match[1]
      // 忽略外部链接和锚点
      if (linkPath.startsWith('http')) continue

      // 去掉锚点
      const pathWithoutAnchor = linkPath.split('#')[0]

      // 转换为文件路径：/relics/xxx.md → relics/xxx（去掉前导/和.md后缀）
      const filePath = pathWithoutAnchor.replace(/^\//, '').replace(/\.md$/, '')

      // 检查文件是否存在
      if (!allMdFiles.has(filePath)) {
        deadLinks.push({ file, link: linkPath, filePath })
      }
    }
  }

  console.log(`=== ${dirName}: ${deadLinks.length} 个死链 ===\n`)

  // 按死链目标分组
  const byTarget = {}
  for (const dl of deadLinks) {
    if (!byTarget[dl.filePath]) byTarget[dl.filePath] = []
    byTarget[dl.filePath].push(dl.file)
  }

  const sortedTargets = Object.entries(byTarget).sort((a, b) => b[1].length - a[1].length)
  for (const [target, files] of sortedTargets) {
    console.log(`\n${target} (在 ${files.length} 个页面中)`)
    if (files.length <= 5) {
      for (const f of files) {
        console.log(`  - ${f}`)
      }
    } else {
      for (const f of files.slice(0, 5)) {
        console.log(`  - ${f}`)
      }
      console.log(`  ... 还有 ${files.length - 5} 个`)
    }
  }
}

for (const t of targets) {
  console.log(`\n##### 检查 ${t} 目录 #####`)
  checkDir(t)
}
