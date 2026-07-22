import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Emit a fully static site (plain HTML/CSS/JS) into `out/` on `next build`,
  // so it can be hosted on any static/shared server (cPanel, Apache, Nginx…)
  // without a running Node server.
  output: "export",

  // Directory-style routes: /about -> /about/index.html (plays nice with Apache).
  trailingSlash: true,

  // Static hosting has no Next Image Optimization server, so serve images as-is.
  images: {
    unoptimized: true,
  },

  // Pin the workspace root — a stray lockfile in the home dir otherwise
  // makes Turbopack infer the wrong root.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
