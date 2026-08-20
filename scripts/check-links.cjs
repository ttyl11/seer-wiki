const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const problems = [];

function walk(dir, cb) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === '.vitepress' || name === 'dist') continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, cb);
    else if (name.endsWith('.md')) cb(full);
  }
}

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  // 匹配 markdown 链接 [text](/path) 和 <a href="/path">
  const patterns = [/\[([^\]]*)\]\((\/[^)#\s]+)\)/g, /href="(\/[^"#\s]+)"/g];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(content)) !== null) {
      const url = m[2] || m[1];
      if (!url.endsWith('.md') && !url.endsWith('/')) continue;
      let rel = url.replace(/^\//, '');
      if (url.endsWith('/')) rel = rel + 'index.md';
      const target = path.join(docsDir, rel);
      if (!fs.existsSync(target)) {
        const line = content.slice(0, m.index).split('\n').length;
        problems.push(`${path.relative(docsDir, file)}:${line} -> ${url}`);
      }
    }
  }
}

walk(docsDir, checkFile);
console.log(problems.length ? `发现 ${problems.length} 个死链接：\n` + problems.join('\n') : '全部链接有效');
