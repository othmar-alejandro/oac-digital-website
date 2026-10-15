// Image balance check over the built pages. Run after `npm run build`: node scripts/check-images.mjs
// Fails if an image appears twice on one page, or if two service pages share a main image.
import { readFileSync, existsSync } from "node:fs";

const dir = ".next/server/app/en";
import { USE_CASES } from "../lib/use-cases.ts";
import { CASE_STUDIES } from "../lib/work.ts";
import { VERTICALS } from "../lib/verticals.ts";

const pages = ["", "/about", "/services", "/use-cases", "/portfolio", ...CASE_STUDIES.map((c) => `/portfolio/${c.slug}`), ...VERTICALS.map((v) => `/industries/${v.slug}`), ...USE_CASES.map((u) => `/use-cases/${u.slug}`)];
const services = ["web-design", "seo", "ai-search", "automations", "ai-agents", "ai-personal-assistant", "crm", "client-apps", "custom-tools", "business-ai"];
const imgs = (html) => [...html.matchAll(/<img[^>]*?src="([^"]+)"/g)].map((m) => m[1]).filter((s) => s.startsWith("/") && !s.includes("logo") && !s.includes("avatar"));

const errors = [];
const warnings = [];
const owners = new Map();
for (const p of [...pages, ...services.map((s) => `/services/${s}`)]) {
  const path = p ? `${dir}${p}.html` : ".next/server/app/en.html";
  if (!existsSync(path)) { errors.push(`missing build output: ${path}`); continue; }
  const list = imgs(readFileSync(path, "utf8"));
  const seen = new Set();
  for (const src of list) {
    // The homepage marquee repeats its site list to loop; anything else repeated there is reported, not failed,
    // because the homepage layout was approved as is (Telegram in the hero and the agents section, the active story in the strip).
    if (seen.has(src)) (p === "" ? warnings : errors).push(`${p || "/"}: ${src} appears twice`);
    seen.add(src);
    if (p.startsWith("/services/")) {
      if (owners.has(src) && owners.get(src) !== p) errors.push(`${src} on both ${owners.get(src)} and ${p}`);
      owners.set(src, p);
    }
  }
}
const marquee = (w) => w.includes("/site-") && !w.includes("site-noahgpaint") && !w.includes("site-fitoria") && !w.includes("site-brokeandfixed");
for (const w of new Set(warnings)) if (!marquee(w)) console.warn(`warning: ${w}`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`ok: ${pages.length + services.length} pages checked, no image twice on an inner page; ${owners.size} images across ${services.length} service pages, none shared`);
