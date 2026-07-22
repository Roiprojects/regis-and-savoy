import puppeteer from "puppeteer-core";

const OUT =
  "C:/Users/SaiPr/AppData/Local/Temp/claude/C--Users-SaiPr-Desktop-regis/86cafc5d-7843-40c6-b252-15e88c9857f0/scratchpad";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = "http://localhost:4321";
const routes = ["/", "/about/", "/services/", "/contact/"];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox"],
});

let totalErrors = 0;
for (const route of routes) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const errors = [];
  const failed = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
  page.on("requestfailed", (r) =>
    failed.push(`${r.failure()?.errorText} ${r.url()}`)
  );
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push(`HTTP ${r.status()} ${r.url()}`);
  });

  await page.goto(BASE + route, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 800));

  const text = await page.evaluate(() => document.body.innerText.length);
  const title = await page.title();
  if (route === "/") {
    await page.screenshot({ path: OUT + "/static-home.png" });
  }
  const errCount = errors.length + failed.length;
  totalErrors += errCount;
  console.log(
    `${route.padEnd(12)} | title="${title.slice(0, 40)}" | textLen=${text} | errors=${errors.length} | failedReq=${failed.length}`
  );
  errors.slice(0, 5).forEach((e) => console.log("   ERR:", e.slice(0, 120)));
  failed.slice(0, 5).forEach((f) => console.log("   REQ:", f.slice(0, 120)));
  await page.close();
}

await browser.close();
console.log(totalErrors === 0 ? "\nRESULT: CLEAN — no errors/failed requests" : `\nRESULT: ${totalErrors} issue(s) found`);
