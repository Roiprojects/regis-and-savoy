import puppeteer from "puppeteer-core";
import path from "node:path";

const OUT =
  "C:/Users/SaiPr/AppData/Local/Temp/claude/C--Users-SaiPr-Desktop-regis/86cafc5d-7843-40c6-b252-15e88c9857f0/scratchpad";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE || "http://localhost:3001";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-device-scale-factor=1"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

// Pre-seed the disclaimer ack so it never shows.
await page.evaluateOnNewDocument(() => {
  try {
    sessionStorage.setItem("rs-disclaimer-ack", "1");
  } catch {}
});

async function shot(route, name, full = false) {
  await page.goto(BASE + route, { waitUntil: "networkidle0" });
  // let entrance animations settle
  await new Promise((r) => setTimeout(r, 1600));
  await page.screenshot({ path: path.join(OUT, name), fullPage: full });
  console.log("shot", name);
}

await shot("/", "home-hero.png");

// Zoom the CTA button row
await page.goto(BASE + "/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1600));
const btn = await page.$("a.btn-primary");
if (btn) {
  const box = await btn.boundingBox();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 3 });
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({
    path: path.join(OUT, "cta-zoom.png"),
    clip: {
      x: Math.max(0, box.x - 20),
      y: Math.max(0, box.y - 20),
      width: 620,
      height: box.height + 40,
    },
  });
  console.log("shot cta-zoom.png");
}
await browser.close();
console.log("done");
