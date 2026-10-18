import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imageDirectory = path.resolve("public/images");
const generatedDirectories = new Set(["banners", "events"]);
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const sourceImages = [];

async function collectImages(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectImages(entryPath);
    } else if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      sourceImages.push(entryPath);
    }
  }
}

for (const entry of await readdir(imageDirectory, { withFileTypes: true })) {
  if (entry.isDirectory() && !generatedDirectories.has(entry.name)) {
    await collectImages(path.join(imageDirectory, entry.name));
  } else if (
    !entry.isDirectory() &&
    supportedExtensions.has(path.extname(entry.name).toLowerCase())
  ) {
    sourceImages.push(path.join(imageDirectory, entry.name));
  }
}

let sourceBytes = 0;
let optimizedBytes = 0;

for (const imagePath of sourceImages) {
  const outputPath = path.join(path.dirname(imagePath), `${path.parse(imagePath).name}.webp`);
  await sharp(imagePath)
    .rotate()
    .resize({ width: 1920, height: 1440, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(outputPath);
  sourceBytes += (await stat(imagePath)).size;
  optimizedBytes += (await stat(outputPath)).size;
}

const megabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(
  `Optimized ${sourceImages.length} site images: ${megabytes(sourceBytes)} MB originals -> ${megabytes(optimizedBytes)} MB WebP.`,
);
