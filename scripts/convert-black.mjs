import { pdf } from "pdf-to-img";
import sharp from "sharp";
import path from "node:path";

const CONTENT = path.resolve("../content");
const OUT = path.resolve("public/brand");

async function toTransparent(buf, outFile) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);
  for (let p = 0; p < out.length; p += channels) {
    const min = Math.min(out[p], out[p + 1], out[p + 2]);
    if (min > 240) out[p + 3] = 0;
    else if (min > 205) out[p + 3] = Math.round(((240 - min) / 35) * 255);
  }
  await sharp(out, { raw: { width, height, channels } }).png().trim({ threshold: 10 }).toFile(outFile);
  console.log("wrote", outFile);
}

const doc = await pdf(path.join(CONTENT, "logo_2.pdf"), { scale: 4 });
console.log("logo_2 pages:", doc.length);
let i = 0;
for await (const page of doc) {
  i++;
  await toTransparent(page, path.join(OUT, i === 2 ? "crest-black.png" : `crest-l2p${i}.png`));
}
