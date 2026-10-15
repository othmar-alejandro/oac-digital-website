// Content check for the page data files. Run: node scripts/check-content.mjs
// Fails if a use case points at a missing vertical or service, a slug repeats, a string has no Spanish, or copy breaks a site rule.
import { SERVICES } from "../lib/services.ts";
import { VERTICALS } from "../lib/verticals.ts";
import { USE_CASES } from "../lib/use-cases.ts";
import { CASE_STUDIES, LISTINGS } from "../lib/work.ts";
import { PAGES_ES } from "../lib/pages-i18n.ts";
import { SERVICE_GROUPS } from "../components/layout/nav-data.ts";

const errors = [];
const services = new Set(SERVICES.map((s) => s.slug));
const verticals = new Set(VERTICALS.map((v) => v.slug));

const menu = SERVICE_GROUPS.flatMap((g) => g.items.map((i) => `${g.title}|${i.title}|${i.desc}`));
const data = SERVICES.map((s) => `${s.group}|${s.title}|${s.desc}`);
if (menu.join("\n") !== data.join("\n")) errors.push("lib/services.ts and the menu in nav-data.ts differ");

const slugs = new Set();
const strings = VERTICALS.flatMap((v) => [v.title, v.trades, v.lead]);
for (const u of USE_CASES) {
  if (slugs.has(u.slug)) errors.push(`duplicate slug: ${u.slug}`);
  slugs.add(u.slug);
  if (!verticals.has(u.vertical)) errors.push(`${u.slug}: unknown vertical ${u.vertical}`);
  if (!services.has(u.service)) errors.push(`${u.slug}: unknown service ${u.service}`);
  strings.push(u.title, u.time, u.moment, ...u.steps, ...u.connects, u.ownerSees, ...(u.not ? [u.not] : []));
}
for (const c of CASE_STUDIES) {
  if (!verticals.has(c.vertical)) errors.push(`${c.slug}: unknown vertical ${c.vertical}`);
  for (const sv of c.services) if (!services.has(sv)) errors.push(`${c.slug}: unknown service ${sv}`);
  strings.push(c.trade, c.title, c.em, c.sub, c.before, ...c.built, c.outcome, ...c.shots.flatMap((s) => [s.alt, s.cap]));
}
for (const l of LISTINGS) strings.push(l.trade, l.what);
for (const v of verticals) {
  const n = USE_CASES.filter((u) => u.vertical === v).length;
  if (n !== 5) errors.push(`${v}: ${n} use cases, expected 5`);
}

const clock = /^\d{1,2}:\d\d [ap]m$/;
for (const s of new Set(strings)) {
  if (!clock.test(s) && !(s in PAGES_ES)) errors.push(`no Spanish: ${s}`);
}
// Site rules: no prices, no long dashes.
for (const s of [...strings, ...Object.values(PAGES_ES)]) {
  if (/[$€]\s?\d|[—–]/.test(s)) errors.push(`price or dash: ${s}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`ok: ${SERVICES.length} services, ${VERTICALS.length} verticals, ${USE_CASES.length} use cases, ${new Set(strings).size} strings in Spanish`);
