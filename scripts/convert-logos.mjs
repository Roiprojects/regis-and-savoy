import { pdf } from "pdf-to-img";
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const CONTENT = path.resolve("../content");
const OUT = path.resolve("public/brand");

async function renderPage(pdfPath, pageNum) {
  const doc = await pdf(pdfPath, { scale: 4 });
  let i = 0;
  for await (const page of doc) {
    i++;
    if (i === pageNum) return page; // Buffer (PNG)
  }
  return null;
}

// Make white background transparent, keep the red/black crest.
async function toTransparent(buf, outFile) {
  const img = sharp(buf).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);
  for (let p = 0; p < out.length; p += channels) {
    const r = out[p], g = out[p + 1], b = out[p + 2];
    // near-white -> transparent
    const min = Math.min(r, g, b);
    if (min > 240) {
      out[p + 3] = 0;
    } else if (min > 205) {
      // soft edge: scale alpha down for light greys
      out[p + 3] = Math.round(((240 - min) / 35) * 255);
    }
  }
  await sharp(out, { raw: { width, height, channels } })
    .png()
    .trim({ threshold: 10 })
    .toFile(outFile);
  console.log("wrote", outFile);
}

await mkdir(OUT, { recursive: true });

// logo_1.pdf p1 = red "Regis and Savoy Capital"
const l1 = await renderPage(path.join(CONTENT, "logo_1.pdf"), 1);
await toTransparent(l1, path.join(OUT, "crest-red.png"));

// logo_2.pdf p1 = red "Pvt. Ltd", p2 = black "Pvt. Ltd"
const l2p1 = await renderPage(path.join(CONTENT, "logo_2.pdf"), 1);
await toTransparent(l2p1, path.join(OUT, "crest-red-alt.png"));
const l2p2 = await renderPage(path.join(CONTENT, "logo_2.pdf"), 2);
await toTransparent(l2p2, path.join(OUT, "crest-black.png"));

console.log("done");
