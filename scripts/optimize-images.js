import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
const files = fs.readdirSync(assetsDir).filter(file => 
  imageExtensions.some(ext => file.endsWith(ext))
);

console.log(`Found ${files.length} images to optimize...\n`);

let totalOriginalSize = 0;
let totalOptimizedSize = 0;

for (const file of files) {
  const inputPath = path.join(assetsDir, file);
  const fileStats = fs.statSync(inputPath);
  const originalSize = fileStats.size;
  totalOriginalSize += originalSize;

  // Convert to WebP format
  const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(outputDir, outputName);

  try {
    await sharp(inputPath)
      .resize(1920, null, { // Max width 1920px, maintain aspect ratio
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: 85, // High quality but compressed
        effort: 6 // Higher effort = better compression
      })
      .toFile(outputPath);

    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = optimizedStats.size;
    totalOptimizedSize += optimizedSize;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${file}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB (${outputName})`);
    console.log(`  Savings: ${savings}%\n`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
}

console.log('\n=== Summary ===');
console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total savings: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB (${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%)`);
console.log(`\nOptimized images saved to: ${outputDir}`);

