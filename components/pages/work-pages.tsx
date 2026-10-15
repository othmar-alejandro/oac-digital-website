"use client";

import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { SERVICES } from "@/lib/services";
import { USE_CASES } from "@/lib/use-cases";
import { VERTICALS } from "@/lib/verticals";
import { CASE_STUDIES, LISTINGS } from "@/lib/work";
import { Arrow } from "@/components/layout/header";
import { Ask, PageHero, PageShell, UseCaseCard } from "./parts";
import { SeoReport } from "./visuals";

const stagger = (i: number) => (i % 3 === 1 ? "oa-rv2" : i % 3 === 2 ? "oa-rv3" : "");

export function WorkIndex() {
  const tx = useTx();
  return (
    <PageShell>
      <PageHero
        crumb={{ label: "Work", href: "/portfolio" }}
        title="Work that shows up where customers"
        em="actually look."
        sub="Three contractors, three different problems. Each one links to the capture behind the result."
      />
      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <div className="oa-proofs">
            {CASE_STUDIES.map((c) => (
              <Link key={c.slug} className="oa-proof oa-rv" href={`/portfolio/${c.slug}`}>
                <div className="oa-frame">
                  <img className="oa-simg" src={c.site} alt="" loading="lazy" decoding="async" />
                </div>
                <div>
                  <p className="oa-serif oa-not">{c.client}</p>
                  <span className="oa-sm">{tx(c.trade)}</span>
                  <p className="oa-rs" style={{ marginTop: 12 }}>
                    {tx(c.sub)}
                  </p>
                </div>
                <span className="oa-pill oa-ghost" style={{ height: "auto", padding: 0 }}>
                  {tx("Read the case study")}
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("More sites we've")} <span className="oa-em">{tx("built.")}</span>
          </h2>
          <div className="oa-proofs">
            {LISTINGS.map((l) => (
              <a key={l.client} className="oa-proof oa-rv" href={l.url} target="_blank" rel="noopener noreferrer">
                <div className="oa-frame">
                  <img className="oa-simg" src={l.site} alt="" loading="lazy" decoding="async" />
                </div>
                <div>
                  <p className="oa-serif oa-not">{l.client}</p>
                  <span className="oa-sm">
                    {tx(l.trade)} · {tx(l.what)}
                  </span>
                </div>
                <span className="oa-pill oa-ghost" style={{ height: "auto", padding: 0 }}>
                  {tx("See it live")}
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Ask />
    </PageShell>
  );
}

export function CaseStudyView({ slug }: { slug: string }) {
  const tx = useTx();
  const c = CASE_STUDIES.find((x) => x.slug === slug)!;
  const vertical = VERTICALS.find((v) => v.slug === c.vertical)!;
  const services = c.services.map((s) => SERVICES.find((x) => x.slug === s)!);
  const useCases = USE_CASES.filter((u) => u.vertical === c.vertical).slice(0, 3);
  const steps = [
    { n: "01", t: "Where it started", body: [c.before] },
    { n: "02", t: "What we built", body: c.built },
    { n: "03", t: "What changed", body: [c.outcome] },
  ];
  return (
    <PageShell>
      <PageHero crumb={{ label: "Work", href: "/portfolio" }} title={c.title} em={c.em} sub={c.sub} />
      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <a className="oa-frame oa-rv" style={{ display: "block", aspectRatio: "16 / 8" }} href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`${c.client} website`}>
            <img className="oa-simg" src={c.site} alt={`${c.client} website`} decoding="async" />
          </a>
          <div className="oa-cline oa-rv">
            <p className="oa-serif">
              {c.client} <span className="oa-sm">· {tx(c.trade)}</span>
            </p>
            <a className="oa-pill oa-ghost" href={c.url} target="_blank" rel="noopener noreferrer">
              {tx("See it live")}
              <Arrow />
            </a>
          </div>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <div className="oa-steps" style={{ marginTop: 0 }}>
            {steps.map((s, i) => (
              <div key={s.n} className={`oa-step oa-rv ${i ? `oa-step2 ${i === 2 ? "oa-rv3" : "oa-rv2"}` : ""}`}>
                <span className="oa-num">{s.n}</span>
                <p className="oa-serif oa-st">{tx(s.t)}</p>
                {s.body.map((b) => (
                  <p key={b} className="oa-rs" style={{ marginTop: 12 }}>
                    {tx(b)}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="oa-cline oa-rv">
            <p className="oa-serif">{tx("Built with")}</p>
            <span style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {services.map((s) => (
                <Link key={s.slug} className="oa-pill oa-ghost" style={{ height: "auto", padding: 0 }} href={`/services/${s.slug}`}>
                  {tx(s.title)}
                  <Arrow />
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("The proof,")} <span className="oa-em">{tx("as it is.")}</span>
          </h2>
          <div className="oa-wshots">
            {c.shots.map((s, i) => (
              <figure key={s.src} className={`oa-pshot oa-rv ${i === 0 ? "" : "oa-rv2"}`} style={{ position: "static" }}>
                <img src={s.src} alt={tx(s.alt)} loading="lazy" decoding="async" />
                <figcaption className="oa-sm">{tx(s.cap)}</figcaption>
              </figure>
            ))}
            {c.seoReport && <SeoReport />}
          </div>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("What this looks like for")} <span className="oa-em">{tx(vertical.title)}</span>
          </h2>
          <div className="oa-ucgrid" style={{ marginTop: 56 }}>
            {useCases.map((u, i) => (
              <UseCaseCard key={u.slug} useCase={u} className={stagger(i)} />
            ))}
          </div>
          <div className="oa-cline oa-rv">
            <p className="oa-serif">{tx(vertical.title)}</p>
            <Link className="oa-pill oa-ghost" href={`/industries/${vertical.slug}`}>
              {tx("See all five")}
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <Ask />
    </PageShell>
  );
}
