import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const eventsDirectory = path.resolve("public/images/events");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const images = [];
const eventName = process.argv[2];

let sourceDirectory = eventsDirectory;
if (eventName) {
  const entries = await readdir(eventsDirectory, { withFileTypes: true });
  if (!entries.some((entry) => entry.isDirectory() && entry.name === eventName)) {
    throw new Error(`Unknown event "${eventName}" in public/images/events.`);
  }
  sourceDirectory = path.join(eventsDirectory, eventName);
}

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

await collectImages(sourceDirectory);

let originalBytes = 0;
let optimizedBytes = 0;

for (const imagePath of images) {
  const imageDirectory = path.dirname(imagePath);
  const webpName = `${path.parse(imagePath).name}.webp`;
  const originalSize = await stat(imagePath);
  originalBytes += originalSize.size;

  const optimizedDirectory = path.join(imageDirectory, "optimized");
  await mkdir(optimizedDirectory, { recursive: true });
  const optimizedPath = path.join(optimizedDirectory, webpName);
  await sharp(imagePath)
    .rotate()
    .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(optimizedPath);
  optimizedBytes += (await stat(optimizedPath)).size;

  const thumbnailsDirectory = path.join(imageDirectory, "thumbnails");
  await mkdir(thumbnailsDirectory, { recursive: true });
  const thumbnailPath = path.join(thumbnailsDirectory, webpName);
  await sharp(imagePath)
    .rotate()
    .resize({ width: 800, height: 800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 76, effort: 4 })
    .toFile(thumbnailPath);
  optimizedBytes += (await stat(thumbnailPath)).size;
}

const megabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(
  `Optimized ${images.length} event images: ${megabytes(originalBytes)} MB originals -> ${megabytes(optimizedBytes)} MB gallery variants.`,
);
