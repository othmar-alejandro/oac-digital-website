"use client";

import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { SERVICES, type Service } from "@/lib/services";
import { USE_CASES } from "@/lib/use-cases";
import { Arrow } from "@/components/layout/header";
import { Ask, DemoStage, PageHero, PageShell, ProofBand, UseCaseCard } from "./parts";

const GROUPS = Array.from(new Set(SERVICES.map((s) => s.group)));

function ServiceCard({ service, className = "" }: { service: Service; className?: string }) {
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
              <div className="oa-ucgrid">
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
  const useCases = USE_CASES.filter((u) => u.service === slug);
  const siblings = SERVICES.filter((s) => s.group === service.group && s.slug !== slug);
  const visual = page.demo || page.shot;

  return (
    <PageShell>
      <PageHero crumb={{ label: service.group, href: "/services" }} title={service.title} sub={service.desc} />

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className={`oa-wrap${visual ? " oa-pgrid" : ""}`}>
          <div className="oa-col" style={{ gap: 40 }}>
            <p className="oa-serif oa-hon oa-rv" style={{ maxWidth: 720 }}>
              {tx(page.plain)}
            </p>
            <div>
              <h2 className="oa-sl oa-rv" style={{ marginBottom: 8 }}>
                {tx("What you")} {tx("get.")}
              </h2>
              {page.gets.map((line, i) => (
                <div key={line} className={`oa-res oa-rv${i === page.gets.length - 1 ? " oa-resl" : ""}`} style={{ padding: "22px 0" }}>
                  <p className="oa-rs" style={{ color: "var(--o-ink)", fontSize: 20, maxWidth: 560 }}>
                    <span className="oa-stepn">0{i + 1}</span>
                    {tx(line)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <DemoStage demo={page.demo} shot={page.shot} />
        </div>
      </div>

      {page.proof && <ProofBand client={page.proof} />}

      {useCases.length > 0 && (
        <div className="oa-sec" style={{ paddingTop: page.proof ? undefined : 0 }}>
          <div className="oa-wrap">
            <h2 className="oa-serif oa-h2 oa-rv">
              {tx("Where it's")} <span className="oa-em">{tx("used.")}</span>
            </h2>
            <div className="oa-ucgrid" style={{ marginTop: 56 }}>
              {useCases.map((u, i) => (
                <UseCaseCard key={u.slug} useCase={u} className={i % 3 === 1 ? "oa-rv2" : i % 3 === 2 ? "oa-rv3" : ""} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="oa-sec" style={{ paddingTop: useCases.length || !page.proof ? 0 : undefined }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("In the same")} <span className="oa-em">{tx("group.")}</span>
          </h2>
          <div className="oa-ucgrid" style={{ marginTop: 56 }}>
            {siblings.map((s, i) => (
              <ServiceCard key={s.slug} service={s} className={i % 3 === 1 ? "oa-rv2" : i % 3 === 2 ? "oa-rv3" : ""} />
            ))}
            <Link className="oa-uc oa-ucall oa-rv" href="/services">
              <p className="oa-serif oa-not">{tx("All services")}</p>
              <span className="oa-pill oa-ghost oa-ucgo">
                {tx("Services")}
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Ask />
    </PageShell>
  );
}
