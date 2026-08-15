import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const monstersDir = path.join(__dirname, '..', 'docs', 'monsters');

function fixMermaidInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Match mermaid code blocks
  const fixedContent = content.replace(/```mermaid\n([\s\S]*?)```/g, (match, mermaidCode) => {
    // Replace literal \n with <br/> in labels (inside quotes or after :)
    // But be careful not to replace actual newlines in the code
    let fixed = mermaidCode;
    
    // Replace literal \n (two characters: backslash + n) that appear in text labels
    // These are the ones that were written as \n in the markdown source
    fixed = fixed.replace(/\\n/g, '<br/>');
    
    if (fixed !== mermaidCode) {
      changed = true;
    }
    return '```mermaid\n' + fixed + '```';
  });
  
  if (changed) {
    fs.writeFileSync(filePath, fixedContent, 'utf-8');
    console.log(`Fixed: ${path.relative(monstersDir, filePath)}`);
    return true;
  }
  return false;
}

function walkDir(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

const mdFiles = walkDir(monstersDir);
console.log(`Found ${mdFiles.length} markdown files`);

let fixedCount = 0;
for (const file of mdFiles) {
  if (fixMermaidInFile(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files with mermaid \\n issues`);
