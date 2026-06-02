#!/usr/bin/env node
// Regenerate all branded image derivatives from the single master logo.
// Run with: node scripts/brand-gen.mjs
// Source of truth: public/brand/logo.png (extracted from the canonical SVG)

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const master = resolve(root, "public/brand/logo.png");

const TANGERINE = { r: 0xf4, g: 0x7b, b: 0x20, alpha: 1 };

async function ensureDir(p) {
  await mkdir(dirname(p), { recursive: true });
}

async function resize(out, size) {
  await ensureDir(out);
  await sharp(master).resize(size, size, { fit: "contain" }).png({ quality: 92 }).toFile(out);
  console.log(`✓ ${out} (${size}×${size})`);
}

async function ogImage(out, width = 1200, height = 630) {
  await ensureDir(out);
  const logoSize = Math.round(Math.min(width, height) * 0.85);
  const logoBuffer = await sharp(master).resize(logoSize, logoSize).toBuffer();
  await sharp({
    create: { width, height, channels: 3, background: TANGERINE },
  })
    .composite([{ input: logoBuffer, gravity: "center" }])
    .png({ quality: 92 })
    .toFile(out);
  console.log(`✓ ${out} (${width}×${height})`);
}

await resize(resolve(root, "src/app/icon.png"), 256);
await resize(resolve(root, "src/app/apple-icon.png"), 180);
await resize(resolve(root, "public/brand/social-avatar.png"), 1080);
await ogImage(resolve(root, "src/app/opengraph-image.png"));
await ogImage(resolve(root, "src/app/twitter-image.png"));
console.log("\nAll branded assets regenerated from public/brand/logo.png");
