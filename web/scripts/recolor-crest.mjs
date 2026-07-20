import sharp from "sharp";
import path from "node:path";

const OUT = path.resolve("public/brand");
const src = path.join(OUT, "crest-red.png");

// Use the red crest's alpha as a stencil, fill with a flat color.
async function recolor(hex, outName) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const out = Buffer.alloc(data.length);
  for (let p = 0; p < data.length; p += channels) {
    out[p] = r; out[p + 1] = g; out[p + 2] = b; out[p + 3] = data[p + 3];
  }
  await sharp(out, { raw: { width, height, channels } }).png().toFile(path.join(OUT, outName));
  console.log("wrote", outName, `${width}x${height}`);
}

await recolor("#F4ECD9", "crest-cream.png");   // for dark backgrounds
await recolor("#1A1613", "crest-charcoal.png"); // near-black
await recolor("#C6A15B", "crest-gold.png");     // gold accent
console.log("done");
