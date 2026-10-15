// Image balance check over the built pages. Run after `npm run build`: node scripts/check-images.mjs
// Fails if an image appears twice on one page, or if two service pages share a main image.
import { readFileSync, existsSync } from "node:fs";

const dir = ".next/server/app/en";
const pages = ["", "/about", "/services", "/use-cases", "/industries/home-services"];
const services = ["web-design", "seo", "ai-search", "automations", "ai-agents", "ai-personal-assistant", "crm", "client-apps", "custom-tools", "business-ai"];
const imgs = (html) => [...html.matchAll(/<img[^>]*?src="([^"]+)"/g)].map((m) => m[1]).filter((s) => s.startsWith("/") && !s.includes("logo") && !s.includes("avatar"));

const errors = [];
const owners = new Map();
for (const p of [...pages, ...services.map((s) => `/services/${s}`)]) {
  const path = p ? `${dir}${p}.html` : ".next/server/app/en.html";
  if (!existsSync(path)) { errors.push(`missing build output: ${path}`); continue; }
  const list = imgs(readFileSync(path, "utf8"));
  const seen = new Set();
  for (const src of list) {
    // The homepage marquee loops its site list on purpose; its hero card and agents section share the Telegram capture (known, approved layout).
    const known = p === "" && (src.includes("/site-") || src.includes("telegram"));
    if (seen.has(src) && !known) errors.push(`${p || "/"}: ${src} appears twice`);
    seen.add(src);
    if (p.startsWith("/services/")) {
      if (owners.has(src) && owners.get(src) !== p) errors.push(`${src} on both ${owners.get(src)} and ${p}`);
      owners.set(src, p);
    }
  }
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`ok: no image repeats on a page; ${owners.size} images across ${services.length} service pages, none shared`);
