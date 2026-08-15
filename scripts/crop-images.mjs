import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

const MONSTERS_DIR = 'd:/slay/seer-wiki/docs/public/images/monsters';
const PADDING = 30;

async function cropTransparent(inputPath, outputPath) {
  const img = sharp(inputPath);
  const metadata = await img.metadata();
  
  // Get raw pixel data to find non-transparent bounds
  const { data, info } = await img
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const { width, height } = info;
  let minX = width, minY = height, maxX = -1, maxY = -1;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const alpha = data[idx + 3];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  if (maxX === -1) {
    console.log(`  No non-transparent pixels found, skipping`);
    return;
  }
  
  // Apply padding
  minX = Math.max(0, minX - PADDING);
  minY = Math.max(0, minY - PADDING);
  maxX = Math.min(width - 1, maxX + PADDING);
  maxY = Math.min(height - 1, maxY + PADDING);
  
  const cropWidth = maxX - minX + 1;
  const cropHeight = maxY - minY + 1;
  
  await sharp(inputPath)
    .extract({ left: minX, top: minY, width: cropWidth, height: cropHeight })
    .toFile(outputPath);
  
  console.log(`  ${metadata.width}x${metadata.height} -> ${cropWidth}x${cropHeight}`);
}

async function main() {
  // First process kunge_egg specifically
  console.log('Processing kunge_egg.png:');
  await cropTransparent(
    join(MONSTERS_DIR, 'kunge_egg.png'),
    join(MONSTERS_DIR, 'kunge_egg.png')
  );
  
  // Then check all small files (< 10KB) and see if they need cropping too
  console.log('\nChecking all monster images for excess transparency...');
  const files = readdirSync(MONSTERS_DIR).filter(f => f.endsWith('.png'));
  
  for (const file of files) {
    if (file === 'kunge_egg.png') continue;
    const filePath = join(MONSTERS_DIR, file);
    const stats = await sharp(filePath).metadata();
    // If image is very large canvas but likely has lots of transparency, crop it
    if (stats.width > 800 || stats.height > 800) {
      console.log(`Processing ${file} (${stats.width}x${stats.height}):`);
      await cropTransparent(filePath, filePath);
    }
  }
  
  console.log('\nAll done!');
}

main().catch(console.error);
