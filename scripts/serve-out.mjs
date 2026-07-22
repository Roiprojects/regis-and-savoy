// Minimal static server that mimics shared/Apache hosting of the `out/` export:
// - directory requests -> index.html
// - clean URLs -> .html
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve("out");
const PORT = 4321;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".woff2": "font/woff2",
};

async function resolveFile(urlPath) {
  let p = decodeURIComponent(urlPath.split("?")[0]);
  const candidates = [];
  if (p.endsWith("/")) candidates.push(path.join(ROOT, p, "index.html"));
  else {
    candidates.push(path.join(ROOT, p));
    candidates.push(path.join(ROOT, p + ".html"));
    candidates.push(path.join(ROOT, p, "index.html"));
  }
  for (const c of candidates) {
    try {
      const s = await stat(c);
      if (s.isFile()) return c;
    } catch {}
  }
  return null;
}

http
  .createServer(async (req, res) => {
    let file = await resolveFile(req.url === "/" ? "/index.html" : req.url);
    if (!file) {
      const nf = path.join(ROOT, "404.html");
      try {
        const body = await readFile(nf);
        res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
        return res.end(body);
      } catch {
        res.writeHead(404);
        return res.end("Not found");
      }
    }
    const body = await readFile(file);
    res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(body);
  })
  .listen(PORT, () => console.log(`serving out/ at http://localhost:${PORT}`));
