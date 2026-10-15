"use client";

import { useTx } from "@/lib/home-i18n";

// Coded panels for the service pages. Real captures and real numbers only; every figure carries its source.

const STACK = [
  { name: "South Florida Mold Help", img: "/images/home/site-moldhelp.jpg", url: "https://southfloridamoldhelp.com/" },
  { name: "D-Tail Wash", img: "/images/home/site-dtailwash.jpg", url: "https://www.dtailwash.com/en" },
  { name: "Keep Her Light Alive Foundation", img: "/images/home/site-keepherlightalive.jpg", url: "https://www.keepherlightalive.com/" },
];

/** Three live sites we built, layered like browser windows. Front one is fully visible. */
export function SiteStack() {
  const tx = useTx();
  return (
    <figure className="oa-stack oa-rv">
      <div className="oa-stackin">
        {STACK.map((s, i) => (
          <a key={s.name} className={`oa-win oa-win${i}`} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} website`}>
            <span className="oa-winbar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>{s.url.replace(/^https:\/\/(www\.)?/, "").replace(/\/.*$/, "")}</span>
            </span>
            <img src={s.img} alt={`${s.name} website`} loading="lazy" decoding="async" />
          </a>
        ))}
      </div>
      <figcaption className="oa-sm">
        {tx("Live sites we built:")} {STACK.map((s) => s.name).join(", ")}.
      </figcaption>
    </figure>
  );
}

// Fitoria Tile & Marble, Google Search Console exports (OAC monthly reports, April to September 2026).
// Impressions per day for each report window: Apr 28d, Jun 28d, Jul 28d, Aug 31d.
const IMPRESSIONS_PER_DAY = [
  { label: "Apr", value: 52.2 },
  { label: "Jun", value: 103.7 },
  { label: "Jul", value: 109.3 },
  { label: "Aug", value: 138.4 },
];
// Search terms with an average position of 10 or better in the Aug 1 to Sep 24 export. Not compared with older
// windows here: they cover a different number of days.
const PAGE_ONE = 68;
const TOP_QUERIES = [
  { q: "backsplash installation", pos: "1.0" },
  { q: "tile installation", pos: "1.25" },
  { q: "how much does epoxy flooring cost in miami", pos: "8.09" },
];

/** A Search Console style report card with Fitoria's real numbers. */
export function SeoReport() {
  const tx = useTx();
  const max = Math.max(...IMPRESSIONS_PER_DAY.map((d) => d.value));
  return (
    <figure className="oa-seo2 oa-rv">
      <div className="oa-seocard">
        <div className="oa-row oa-seohd">
          <span className="oa-seog" aria-hidden="true">G</span>
          <div>
            <b>{tx("Search performance")}</b>
            <span>fitoriatileandmarble.com</span>
          </div>
        </div>

        <div className="oa-seosec">
          <span className="oa-seolab">{tx("Times Google showed the site, per day")}</span>
          <div className="oa-sbars" role="img" aria-label={IMPRESSIONS_PER_DAY.map((d) => `${tx(d.label)}: ${Math.round(d.value)}`).join(", ")}>
            {IMPRESSIONS_PER_DAY.map((d, i) => (
              <div key={d.label} className="oa-sbar" title={`${tx(d.label)}: ${Math.round(d.value)}`}>
                <span className="oa-sbarv">{i === 0 || i === IMPRESSIONS_PER_DAY.length - 1 ? Math.round(d.value) : ""}</span>
                <span className="oa-sbarw">
                  <span className="oa-sbarf" style={{ height: `${(d.value / max) * 100}%` }} />
                </span>
                <span className="oa-sbarl">{tx(d.label)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="oa-seosec oa-row oa-seostat">
          <span className="oa-seolab">{tx("Search terms on Google's first page, Aug 1 to Sep 24")}</span>
          <span className="oa-seonum">{PAGE_ONE}</span>
        </div>

        <div className="oa-seosec">
          <div className="oa-row oa-seoq oa-seoqh">
            <span>{tx("Search term")}</span>
            <span>{tx("Avg. position")}</span>
          </div>
          {TOP_QUERIES.map((r) => (
            <div key={r.q} className="oa-row oa-seoq">
              <span>{r.q}</span>
              <b>{r.pos}</b>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="oa-sm">{tx("From Fitoria Tile & Marble's Google Search Console exports, April to September 2026. Per-day figures are averages for each month's report.")}</figcaption>
    </figure>
  );
}

// Example conversation for "Your own business AI". Not built for a client yet, so it is tagged Concept and Example.
// No prices: the site never shows them.
const ASK = [
  { q: "Do we work in Weston?", a: "Yes. Weston is in your service area. Your notes say visits there go on Tuesdays and Thursdays.", src: "Service area" },
  { q: "A client wants to cancel tomorrow's visit. What's our policy?", a: "Cancelling 24 hours ahead is free. Later than that, your policy keeps the deposit. Want me to draft the reply?", src: "Policies" },
  { q: "What do we recommend for a shower floor?", a: "Your notes recommend a small matte porcelain mosaic, for grip.", src: "Product notes" },
];

/** A private assistant answering an owner's questions from the business's own documents. */
export function AskYourBusiness() {
  const tx = useTx();
  return (
    <figure className="oa-ask2 oa-rv">
      <div className="oa-askcard">
        <div className="oa-row oa-seohd" style={{ justifyContent: "space-between" }}>
          <div className="oa-row" style={{ gap: 12 }}>
            <span className="oa-askdot" aria-hidden="true" />
            <div>
              <b>{tx("Ask the business")}</b>
              <span>{tx("Private to your team")}</span>
            </div>
          </div>
          <span className="oa-tag">{tx("Concept")}</span>
        </div>
        <div className="oa-askthread">
          {ASK.map((m) => (
            <div key={m.q} className="oa-col" style={{ gap: 8 }}>
              <p className="oa-askq">{tx(m.q)}</p>
              <div className="oa-aska">
                <p>{tx(m.a)}</p>
                <span className="oa-asksrc">
                  {tx("From:")} {tx(m.src)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="oa-row oa-askin" aria-hidden="true">
          <span>{tx("Ask about your prices, services or policies…")}</span>
          <i>↑</i>
        </div>
      </div>
      <figcaption className="oa-sm">{tx("Example conversation. Answers come from your own documents.")}</figcaption>
    </figure>
  );
}
