"use client";

import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { SERVICES } from "@/lib/services";
import { USE_CASES } from "@/lib/use-cases";
import { VERTICALS, type Vertical } from "@/lib/verticals";
import { STORIES } from "@/components/home/v2/data";
import { Arrow } from "@/components/layout/header";
import { Ask, DemoStage, PageHero, PageShell, ProofBand, StatusTag, UseCaseCard } from "./parts";

const stagger = (i: number) => (i % 3 === 1 ? "oa-rv2" : i % 3 === 2 ? "oa-rv3" : "");

export function UseCasesIndex() {
  const tx = useTx();
  return (
    <PageShell>
      <PageHero crumb={{ label: "Use cases", href: "/use-cases" }} title="What we could build" em="for your trade." sub="Twenty moments from a normal day in four trades, and the system that handles each one. Two are built for clients. The rest are marked Concept." />
      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          {VERTICALS.map((v, n) => (
            <div key={v.slug} className="oa-grp">
              <Link className="oa-grph oa-rv" href={`/industries/${v.slug}`}>
                <span className="oa-grpn">0{n + 1}</span>
                <div>
                  <h2 className="oa-serif oa-rt" style={{ margin: 0, maxWidth: "none" }}>
                    {tx(v.title)}
                  </h2>
                  <span className="oa-sm">{tx(v.trades)}</span>
                </div>
              </Link>
              <div className="oa-ucgrid">
                {USE_CASES.filter((u) => u.vertical === v.slug).map((u, i) => (
                  <UseCaseCard key={u.slug} useCase={u} className={stagger(i)} />
                ))}
              </div>
            </div>
          ))}
          <div className="oa-cline oa-rv">
            <p className="oa-serif">
              {tx("Your trade isn't here?")} <span className="oa-em">{tx("Tell us about your day.")}</span>
            </p>
          </div>
        </div>
      </div>
      <Ask />
    </PageShell>
  );
}

export function VerticalPageView({ slug }: { slug: Vertical["slug"] }) {
  const tx = useTx();
  const vertical = VERTICALS.find((v) => v.slug === slug)!;
  const useCases = USE_CASES.filter((u) => u.vertical === slug);
  // Every named client so far is a home services business.
  const stories = slug === "home-services" ? STORIES : [];
  // A trade with no named client yet shows one of the built screens, tagged as example data.
  const demo = stories.length ? undefined : useCases.find((x) => x.demo)?.demo;

  return (
    <PageShell>
      <PageHero crumb={{ label: "Who we work with", href: "/use-cases" }} title={vertical.title} sub={vertical.lead}>
        <p className="oa-sm oa-rv oa-rv3" style={{ marginTop: 20 }}>
          {tx(vertical.trades)}
        </p>
      </PageHero>

      {demo && (
        <div className="oa-sec" style={{ paddingTop: 0 }}>
          <div className="oa-wrap">
            <DemoStage demo={demo} />
            <span className="oa-sm" style={{ display: "block", marginTop: 12 }}>{tx("Example data")}</span>
          </div>
        </div>
      )}

      <div className="oa-band">
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("One day.")} <span className="oa-em">{tx("Five things that slip.")}</span>
          </h2>
          <p className="oa-pf oa-rv oa-rv2" style={{ maxWidth: 480, marginTop: 20 }}>
            {tx("Each one is a moment in your day and the system that catches it.")}
          </p>
          <div className="oa-day">
            {useCases.map((u) => (
              <Link key={u.slug} className="oa-dayrow oa-rv" href={`/use-cases/${u.slug}`}>
                <span className="oa-uct">{tx(u.time)}</span>
                <div>
                  <p className="oa-serif oa-not">{tx(u.title)}</p>
                  <p className="oa-pf" style={{ maxWidth: 620 }}>
                    {tx(u.moment)}
                  </p>
                </div>
                <div className="oa-col" style={{ gap: 14, alignItems: "flex-end" }}>
                  <StatusTag status={u.status} />
                  <span className="oa-pill oa-ghost" style={{ height: "auto", padding: 0, color: "inherit" }}>
                    {tx("See how it works")}
                    <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {stories.length > 0 && (
        <div className="oa-sec">
          <div className="oa-wrap">
            <h2 className="oa-serif oa-h2 oa-rv">
              {tx("Work we've done for")} <span className="oa-em">{tx("this trade.")}</span>
            </h2>
            <div className="oa-proofs">
              {stories.map((s) => (
                <a key={s.name} className="oa-proof oa-rv" href={s.url} target="_blank" rel="noopener noreferrer">
                  <div className="oa-frame">
                    <img className="oa-simg" src={s.img} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <p className="oa-serif oa-not">{s.name}</p>
                    <span className="oa-sm">{tx(s.what)}</span>
                    <p className="oa-rs" style={{ marginTop: 12 }}>
                      {tx(s.line)}
                    </p>
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
      )}

      <Ask />
    </PageShell>
  );
}

export function UseCasePageView({ slug }: { slug: string }) {
  const tx = useTx();
  const useCase = USE_CASES.find((u) => u.slug === slug)!;
  const vertical = VERTICALS.find((v) => v.slug === useCase.vertical)!;
  const service = SERVICES.find((s) => s.slug === useCase.service)!;
  const siblings = USE_CASES.filter((u) => u.vertical === useCase.vertical && u.slug !== slug).slice(0, 2);
  const built = useCase.status.kind === "built" ? useCase.status : null;
  const shot = built ? { src: built.shot, alt: `${built.client}: ${useCase.title}`, cap: `${tx("Built for")} ${built.client}` } : undefined;
  const visual = Boolean(useCase.demo || shot);

  return (
    <PageShell>
      <PageHero crumb={{ label: vertical.title, href: `/industries/${vertical.slug}` }} title={useCase.title} sub={useCase.moment}>
        <div className="oa-row oa-rv oa-rv3" style={{ gap: 12, marginTop: 28, flexWrap: "wrap" }}>
          <span className="oa-uct">{tx(useCase.time)}</span>
          <StatusTag status={useCase.status} />
        </div>
        {!built && (
          <p className="oa-sm oa-rv oa-rv3" style={{ marginTop: 12 }}>
            {tx("Not built for a client yet. This is how we would set it up.")}
          </p>
        )}
      </PageHero>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className={`oa-wrap${visual ? " oa-pgrid" : ""}`}>
          <div>
            <h2 className="oa-serif oa-h2 oa-rv" style={{ marginBottom: 32 }}>
              {tx("How it")} <span className="oa-em">{tx("works.")}</span>
            </h2>
            {useCase.steps.map((step, i) => (
              <div key={step} className={`oa-res oa-rv${i === useCase.steps.length - 1 ? " oa-resl" : ""}`} style={{ padding: "22px 0" }}>
                <p className="oa-rs" style={{ color: "var(--o-ink)", fontSize: 20, maxWidth: 560 }}>
                  <span className="oa-stepn">0{i + 1}</span>
                  {tx(step)}
                </p>
              </div>
            ))}
            <div className="oa-facts2">
              <div className="oa-rv">
                <span className="oa-sm">{tx("What it connects to")}</span>
                <div className="oa-svgrid" style={{ marginTop: 12 }}>
                  {useCase.connects.map((c) => (
                    <span key={c} className="oa-tag">
                      {tx(c)}
                    </span>
                  ))}
                </div>
              </div>
              <div className="oa-rv">
                <span className="oa-sm">{tx("What you see")}</span>
                <p className="oa-rs" style={{ color: "var(--o-ink)", marginTop: 10 }}>
                  {tx(useCase.ownerSees)}
                </p>
              </div>
              {useCase.not && (
                <div className="oa-rv">
                  <span className="oa-sm">{tx("What it doesn't do")}</span>
                  <p className="oa-rs" style={{ color: "var(--o-ink)", marginTop: 10 }}>
                    {tx(useCase.not)}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <DemoStage demo={useCase.demo} shot={shot} />
            {useCase.demo && <span className="oa-sm" style={{ display: "block", marginTop: 12 }}>{tx("Example data")}</span>}
          </div>
        </div>
      </div>

      {built && <ProofBand client={built.client} />}

      <div className="oa-sec" style={{ paddingTop: built ? undefined : 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("More for")} <span className="oa-em">{tx(vertical.title)}</span>
          </h2>
          <div className="oa-ucgrid" style={{ marginTop: 56 }}>
            {siblings.map((u, i) => (
              <UseCaseCard key={u.slug} useCase={u} className={stagger(i)} />
            ))}
            <Link className="oa-uc oa-ucall oa-rv oa-rv3" href={`/services/${service.slug}`}>
              <span className="oa-uct">{tx("The service behind it")}</span>
              <p className="oa-serif oa-not">{tx(service.title)}</p>
              <p className="oa-rs">{tx(service.desc)}</p>
              <span className="oa-pill oa-ghost oa-ucgo">
                {tx("See how it works")}
                <Arrow />
              </span>
            </Link>
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
