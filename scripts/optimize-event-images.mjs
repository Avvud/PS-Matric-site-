import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const eventsDirectory = path.resolve("public/images/events");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const images = [];
const force = process.argv.includes("--force");
const eventName = process.argv.slice(2).find((argument) => argument !== "--force");

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
let optimizedCount = 0;
let skippedCount = 0;

async function getUpToDateSize(filePath, sourceModifiedTime) {
  try {
    const output = await stat(filePath);
    return output.mtimeMs >= sourceModifiedTime ? output.size : null;
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

for (const [index, imagePath] of images.entries()) {
  const imageDirectory = path.dirname(imagePath);
  const webpName = `${path.parse(imagePath).name}.webp`;
  const originalSize = await stat(imagePath);
  originalBytes += originalSize.size;

  const optimizedDirectory = path.join(imageDirectory, "optimized");
  const optimizedPath = path.join(optimizedDirectory, webpName);
  const thumbnailsDirectory = path.join(imageDirectory, "thumbnails");
  const thumbnailPath = path.join(thumbnailsDirectory, webpName);
  const [optimizedSize, thumbnailSize] = force
    ? [null, null]
    : await Promise.all([
        getUpToDateSize(optimizedPath, originalSize.mtimeMs),
        getUpToDateSize(thumbnailPath, originalSize.mtimeMs),
      ]);

  if (optimizedSize !== null && thumbnailSize !== null) {
    optimizedBytes += optimizedSize + thumbnailSize;
    skippedCount += 1;
    continue;
  }

  await Promise.all([
    mkdir(optimizedDirectory, { recursive: true }),
    mkdir(thumbnailsDirectory, { recursive: true }),
  ]);
  const pipeline = sharp(imagePath).rotate();
  await Promise.all([
    pipeline
      .clone()
      .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(optimizedPath),
    pipeline
      .clone()
      .resize({ width: 800, height: 800, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 76, effort: 4 })
      .toFile(thumbnailPath),
  ]);
  optimizedBytes += (await stat(optimizedPath)).size + (await stat(thumbnailPath)).size;
  optimizedCount += 1;

  if (optimizedCount % 20 === 0 || index === images.length - 1) {
    console.log(`Processed ${index + 1}/${images.length} event images.`);
  }
}

const megabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(
  `Event images: ${optimizedCount} optimized, ${skippedCount} up to date, ${images.length} total; ${megabytes(originalBytes)} MB originals -> ${megabytes(optimizedBytes)} MB gallery variants.`,
);
