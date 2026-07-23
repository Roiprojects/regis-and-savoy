import puppeteer from "puppeteer-core";

const OUT =
  "C:/Users/SaiPr/AppData/Local/Temp/claude/C--Users-SaiPr-Desktop-regis/86cafc5d-7843-40c6-b252-15e88c9857f0/scratchpad";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = "http://localhost:4321";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
// dismiss the first-visit disclaimer so we see the page content
await page.evaluateOnNewDocument(() => {
  try { sessionStorage.setItem("rs-disclaimer-ack", "1"); } catch {}
});

for (const [route, name] of [
  ["/", "final-home"],
  ["/about/", "final-about"],
  ["/services/", "final-services"],
  ["/contact/", "final-contact"],
]) {
  await page.goto(BASE + route, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1400));
  await page.screenshot({ path: `${OUT}/${name}.png` }); // above-the-fold
  console.log("shot", name);
}
await browser.close();
console.log("done");
