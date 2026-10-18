import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const bannerDirectory = path.resolve("public/images/banners");
const fallbackBanner = path.resolve("public/images/page-banner.JPG");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const images = [fallbackBanner];

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectImages(entryPath);
    } else if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(entryPath);
    }
  }
}

await collectImages(bannerDirectory);

let originalBytes = 0;
let optimizedBytes = 0;

for (const imagePath of images) {
  const imageDirectory = path.dirname(imagePath);
  const webpName = `${path.parse(imagePath).name}.webp`;
  const outputDirectory = imagePath === fallbackBanner ? path.dirname(imagePath) : imageDirectory;
  const outputPath = path.join(outputDirectory, webpName);
  const originalSize = await stat(imagePath);
  originalBytes += originalSize.size;

  await mkdir(outputDirectory, { recursive: true });
  await sharp(imagePath)
    .rotate()
    .resize({ width: 1920, height: 900, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(outputPath);
  optimizedBytes += (await stat(outputPath)).size;
}

const megabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(
  `Optimized ${images.length} banners: ${megabytes(originalBytes)} MB originals -> ${megabytes(optimizedBytes)} MB WebP.`,
);
