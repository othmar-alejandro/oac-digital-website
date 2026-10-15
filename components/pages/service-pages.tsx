"use client";

import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { SERVICES, type Service } from "@/lib/services";
import { USE_CASES } from "@/lib/use-cases";
import { Arrow } from "@/components/layout/header";
import { Ask, DemoStage, FaqBlock, PageHero, PageShell, ProofBand, UseCaseCard, gridClass } from "./parts";
import { AskYourBusiness, SeoReport, SiteStack } from "./visuals";

const GROUPS = Array.from(new Set(SERVICES.map((s) => s.group)));

export function ServiceCard({ service, className = "" }: { service: Service; className?: string }) {
  const tx = useTx();
  return (
    <Link className={`oa-uc oa-rv ${className}`} href={`/services/${service.slug}`}>
      <p className="oa-serif oa-not">{tx(service.title)}</p>
      <p className="oa-rs">{tx(service.desc)}</p>
      <span className="oa-pill oa-ghost oa-ucgo">
        {tx("See how it works")}
        <Arrow />
      </span>
    </Link>
  );
}

export function ServicesIndex() {
  const tx = useTx();
  return (
    <PageShell>
      <PageHero crumb={{ label: "Services", href: "/services" }} title="Three results. Ten ways we" em="get you there." sub="You don't need to know which one you need. Tell us what's slowing you down and we'll tell you what we'd build first." />
      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          {GROUPS.map((group, g) => (
            <div key={group} className="oa-grp">
              <div className="oa-grph oa-rv">
                <span className="oa-grpn">0{g + 1}</span>
                <h2 className="oa-serif oa-rt" style={{ margin: 0, maxWidth: "none" }}>
                  {tx(group)}
                </h2>
              </div>
              <div className={gridClass(SERVICES.filter((s) => s.group === group).length)}>
                {SERVICES.filter((s) => s.group === group).map((s, i) => (
                  <ServiceCard key={s.slug} service={s} className={i % 3 === 1 ? "oa-rv2" : i % 3 === 2 ? "oa-rv3" : ""} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Ask />
    </PageShell>
  );
}

export function ServicePageView({ slug }: { slug: Service["slug"] }) {
  const tx = useTx();
  const service = SERVICES.find((s) => s.slug === slug)!;
  const page = SERVICE_PAGES[slug];
  const allUseCases = USE_CASES.filter((u) => u.service === slug);
  // Two rows at most; the rest are one click away.
  const useCases = allUseCases.slice(0, 6);
  const siblings = SERVICES.filter((s) => s.group === service.group && s.slug !== slug);
  const Visual = page.visual === "sites" ? SiteStack : page.visual === "seo" ? SeoReport : page.visual === "ask" ? AskYourBusiness : null;
  const more = [...siblings.map((s) => ({ service: s })), { all: true as const }];

  return (
    <PageShell>
      {/* The hero carries the explanation and the visual together, so nothing is said twice. */}
      <div className="oa-sec oa-gridbg oa-ahero" style={{ position: "relative" }}>
        {/* Three areas: words, visual, list. On phones the visual sits between the explanation and the list. */}
        <div className="oa-wrap oa-shero">
          <div className="oa-col oa-shtext" style={{ gap: 28 }}>
            <div>
              <Link className="oa-sl oa-rv" href="/services">
                {tx(service.group)} <span>›</span>
              </Link>
              <h1 className="oa-serif oa-h2 oa-ah1 oa-rv">{tx(service.title)}</h1>
            </div>
            <p className="oa-mut oa-rv oa-rv2" style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 560, margin: 0 }}>
              {tx(page.plain)}
            </p>
          </div>
          <div className="oa-shgets">
            <h2 className="oa-sl oa-rv" style={{ marginBottom: 4 }}>
              {tx("What you")} {tx("get.")}
            </h2>
            {page.gets.map((line, i) => (
              <div key={line} className={`oa-res oa-rv${i === page.gets.length - 1 ? " oa-resl" : ""}`} style={{ padding: "18px 0" }}>
                <p className="oa-rs" style={{ color: "var(--o-ink)", fontSize: 18, maxWidth: 560 }}>
                  <span className="oa-stepn">0{i + 1}</span>
                  {tx(line)}
                </p>
              </div>
            ))}
          </div>
          <div className="oa-shvis">{Visual ? <Visual /> : <DemoStage demo={page.demo} shot={page.shot} />}</div>
        </div>
      </div>

      {page.proof && <ProofBand client={page.proof} />}

      {useCases.length > 0 && (
        <div className="oa-sec" style={{ paddingTop: page.proof ? undefined : 0 }}>
          <div className="oa-wrap">
            <h2 className="oa-serif oa-h2 oa-rv">
              {tx("Where it's")} <span className="oa-em">{tx("used.")}</span>
            </h2>
            <div className={gridClass(useCases.length)} style={{ marginTop: 56 }}>
              {useCases.map((u, i) => (
                <UseCaseCard key={u.slug} useCase={u} className={i % 3 === 1 ? "oa-rv2" : i % 3 === 2 ? "oa-rv3" : ""} />
              ))}
            </div>
            {allUseCases.length > useCases.length && (
              <div className="oa-cline oa-rv">
                <p className="oa-serif">
                  {allUseCases.length} {tx("use cases use this service.")}
                </p>
                <Link className="oa-pill oa-ghost" href="/use-cases">
                  {tx("See all use cases")}
                  <Arrow />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="oa-sec" style={{ paddingTop: useCases.length || !page.proof ? 0 : undefined }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("In the same")} <span className="oa-em">{tx("group.")}</span>
          </h2>
          <div className={gridClass(more.length)} style={{ marginTop: 56 }}>
            {more.map((m, i) =>
              "service" in m ? (
                <ServiceCard key={m.service.slug} service={m.service} className={i % 3 === 1 ? "oa-rv2" : i % 3 === 2 ? "oa-rv3" : ""} />
              ) : (
                <Link key="all" className="oa-uc oa-ucall oa-rv" href="/services">
                  <p className="oa-serif oa-not">{tx("All services")}</p>
                  <span className="oa-pill oa-ghost oa-ucgo">
                    {tx("Services")}
                    <Arrow />
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      <FaqBlock />
      <Ask />
    </PageShell>
  );
}
