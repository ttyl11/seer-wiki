// 检查哪些卡有多个变量在升级中变化（可能被 v1 脚本改错）
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MOD_ROOT = path.resolve(__dirname, '../../mymod/seer001')
const CODE_DIR = path.join(MOD_ROOT, 'src/Core/Models')

function parseCsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const vars = {}
  const canonMatch = content.match(/CanonicalVars\s*=>\s*(?:new\s+DynamicVar\[\]\s*\{|new\s*\[)\s*([\s\S]*?)\}/)
  if (canonMatch) {
    const varRegex = /new\s+DynamicVar\s*\(\s*"(\w+)"\s*,\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    let m
    while ((m = varRegex.exec(canonMatch[1])) !== null) {
      vars[m[1]] = parseFloat(m[2])
    }
  }

  const upgradeChanges = {}
  const onUpgradeMatch = content.match(/override\s+void\s+OnUpgrade\(\)\s*\{([\s\S]*?)\n\s*\}/)
  if (onUpgradeMatch) {
    const upgradeContent = onUpgradeMatch[1]
    const changeRegex = /DynamicVars\["(\w+)"\]\.BaseValue\s*(\+=|-=|=)\s*(\d+(?:\.\d+)?)m?/g
    let m
    while ((m = changeRegex.exec(upgradeContent)) !== null) {
      const op = m[2], num = parseFloat(m[3])
      if (op === '+=') upgradeChanges[m[1]] = (vars[m[1]] || 0) + num
      else if (op === '-=') upgradeChanges[m[1]] = (vars[m[1]] || 0) - num
      else upgradeChanges[m[1]] = num
    }
    const upByRegex = /(?:\(\(DynamicVar\)|\(\(CardsVar\))?DynamicVars(?:\["(\w+)"\]|\.(\w+))\)?\.UpgradeValueBy\s*\(\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    while ((m = upByRegex.exec(upgradeContent)) !== null) {
      const varName = m[1] || m[2]
      upgradeChanges[varName] = (vars[varName] || 0) + parseFloat(m[3])
    }
    const baseUpByRegex = /base\.DynamicVars\.(\w+)\.UpgradeValueBy\s*\(\s*(-?\d+(?:\.\d+)?)m?\s*\)/g
    while ((m = baseUpByRegex.exec(upgradeContent)) !== null) {
      upgradeChanges[m[1]] = (vars[m[1]] || 0) + parseFloat(m[2])
    }
  }
  return { vars, upgradeChanges }
}

function search(dir, className) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      const r = search(full, className)
      if (r) return r
    } else if (name === `${className}.cs`) return full
  }
  return null
}

// 找出多变量变化的卡
const cardsDir = path.join(CODE_DIR, 'Cards')
const multiVarCards = []
const sameValueCards = []

for (const name of fs.readdirSync(cardsDir)) {
  if (!name.endsWith('.cs') || !name.startsWith('Seer')) continue
  const filePath = path.join(cardsDir, name)
  const { vars, upgradeChanges } = parseCsFile(filePath)
  const changedVars = Object.keys(upgradeChanges)
  if (changedVars.length >= 2) {
    // 检查这些变量的初始值是否有相同的
    const values = changedVars.map(v => vars[v])
    const hasDup = new Set(values).size !== values.length
    multiVarCards.push({
      file: name,
      changes: changedVars.map(v => `${v}: ${vars[v]}→${upgradeChanges[v]}`).join(', '),
      hasDup
    })
    if (hasDup) sameValueCards.push(name)
  }
}

console.log(`\n多变量变化的卡牌（${multiVarCards.length} 个）：`)
for (const c of multiVarCards) {
  console.log(`  ${c.file}: ${c.changes}${c.hasDup ? ' ⚠️ 有相同初始值' : ''}`)
}

console.log(`\n有相同初始值的多变量卡（${sameValueCards.length} 个，可能被 v1 改错）：`)
for (const f of sameValueCards) {
  console.log(`  ${f}`)
}
