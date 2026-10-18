import { readdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const imageDirectory = path.resolve(".vercel/output/static/images");
const sourceExtensions = new Set([".jpg", ".jpeg", ".png"]);
const sourceImages = [];

async function collectImages(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectImages(entryPath);
    } else if (sourceExtensions.has(path.extname(entry.name).toLowerCase())) {
      sourceImages.push(entryPath);
    }
  }
}

async function requireOptimizedVariants(imagePath) {
  const relativePath = path.relative(imageDirectory, imagePath);
  const segments = relativePath.split(path.sep);
  const webpName = `${path.parse(imagePath).name}.webp`;
  const variantPaths =
    segments[0] === "events"
      ? [
          path.join(path.dirname(imagePath), "optimized", webpName),
          path.join(path.dirname(imagePath), "thumbnails", webpName),
        ]
      : [path.join(path.dirname(imagePath), webpName)];

  for (const variantPath of variantPaths) {
    const variant = await stat(variantPath).catch((error) => {
      if (error.code === "ENOENT") {
        throw new Error(
          `Missing optimized image for ${relativePath}: ${path.relative(imageDirectory, variantPath)}`,
        );
      }
      throw error;
    });
    if (variant.size === 0) {
      throw new Error(`Optimized image is empty: ${path.relative(imageDirectory, variantPath)}`);
    }
  }
}

await collectImages(imageDirectory);
for (const imagePath of sourceImages) {
  await requireOptimizedVariants(imagePath);
}

let removedBytes = 0;
for (const imagePath of sourceImages) {
  removedBytes += (await stat(imagePath)).size;
  await rm(imagePath);
}

console.log(
  `Removed ${sourceImages.length} original images from production output (${(removedBytes / 1024 / 1024).toFixed(1)} MB). Originals remain in public/images.`,
);
