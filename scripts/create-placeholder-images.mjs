import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const outDir = path.join(__dirname, '..', 'docs', 'public', 'images', 'monsters');

// Create 500x335 solid red placeholder
function createRedPlaceholder(filename) {
  const canvas = createCanvas(500, 335);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#cc0000';
  ctx.fillRect(0, 0, 500, 335);
  
  // Add text label
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const label = filename.replace('_monster.png', '').toUpperCase();
  ctx.fillText(label, 250, 167);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outDir, filename), buffer);
  console.log(`Created: ${filename} (500x335)`);
}

// Puni (谱尼) - replace the tiny 24x24 one
createRedPlaceholder('puni_monster.png');

// Soulson (索伦森) - also check/replace
if (fs.existsSync(path.join(outDir, 'soulson_monster.png'))) {
  const stats = fs.statSync(path.join(outDir, 'soulson_monster.png'));
  if (stats.size < 10000) { // also small
    createRedPlaceholder('soulson_monster.png');
  } else {
    console.log('soulson_monster.png already exists and is normal size');
  }
}
