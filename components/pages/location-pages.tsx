"use client";

import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { CITIES, CITY_SERVICES, COUNTIES, DISTRICTS, HUB_SLUGS, cityBySlug, cityService, type City } from "@/lib/locations";
import { SERVICE_PAGES, type ServicePage } from "@/lib/service-pages";
import { USE_CASES } from "@/lib/use-cases";
import { VERTICALS } from "@/lib/verticals";
import { Arrow } from "@/components/layout/header";
import { ServiceCard } from "./service-pages";
import { SERVICES } from "@/lib/services";
import { Ask, DemoStage, FaqBlock, PageHero, PageShell, UseCaseCard, gridClass } from "./parts";
import { AskYourBusiness, SeoReport, SiteStack } from "./visuals";

const stagger = (i: number) => (i % 3 === 1 ? "oa-rv2" : i % 3 === 2 ? "oa-rv3" : "");

/** Hubs live at /locations; every other city is reached through its web design page. */
const cityHref = (c: City) => (HUB_SLUGS.includes(c.slug as (typeof HUB_SLUGS)[number]) ? `/locations/${c.slug}` : `/services/web-design/${c.slug}`);

function Row({ href, title, note }: { href: string; title: string; note?: string }) {
  return (
    <Link className="oa-prow oa-rv" href={href}>
      <span className="oa-serif oa-prt">{title}</span>
      {note && <span className="oa-rs oa-prn">{note}</span>}
      <Arrow />
    </Link>
  );
}


type ServiceHeroProps = { crumb: { label: string; href: string }; h1: ReactNode; plain: string; gets: readonly string[]; note?: string; first: ServicePage };

/** The explanation, the three points and the visual in one band, shared by city pages and the two parent pages. */
function ServiceHero({ crumb, h1, plain, gets, note, first }: ServiceHeroProps) {
  const tx = useTx();
  const Visual = first.visual === "sites" ? SiteStack : first.visual === "seo" ? SeoReport : first.visual === "ask" ? AskYourBusiness : null;
  return (
    <div className="oa-sec oa-gridbg oa-ahero" style={{ position: "relative" }}>
      <div className="oa-wrap oa-shero">
        <div className="oa-col oa-shtext" style={{ gap: 28 }}>
          <div>
            <Link className="oa-sl oa-rv" href={crumb.href}>
              {tx(crumb.label)} <span>›</span>
            </Link>
            <h1 className="oa-serif oa-h2 oa-ah1 oa-rv">{h1}</h1>
          </div>
          <p className="oa-mut oa-rv oa-rv2" style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 560, margin: 0 }}>
            {tx(plain)}
          </p>
          {note && <span className="oa-sm oa-rv oa-rv3">{note}</span>}
        </div>
        <div className="oa-shgets">
          <h2 className="oa-sl oa-rv" style={{ marginBottom: 4 }}>
            {tx("What you")} {tx("get.")}
          </h2>
          {gets.map((line, i) => (
            <div key={line} className={`oa-res oa-rv${i === gets.length - 1 ? " oa-resl" : ""}`} style={{ padding: "18px 0" }}>
              <p className="oa-rs" style={{ color: "var(--o-ink)", fontSize: 18, maxWidth: 560 }}>
                <span className="oa-stepn">0{i + 1}</span>
                {tx(line)}
              </p>
            </div>
          ))}
        </div>
        <div className="oa-shvis">{Visual ? <Visual /> : <DemoStage demo={first.demo} shot={first.shot} />}</div>
      </div>
    </div>
  );
}

/** One service in one city: what it is, what you get, where it's used, and the way out to its neighbours. */
export function ServiceCityView({ serviceSlug, citySlug }: { serviceSlug: string; citySlug: string }) {
  const tx = useTx();
  const cs = cityService(serviceSlug)!;
  const city = cityBySlug(citySlug)!;
  const first = SERVICE_PAGES[cs.parts[0]];
  const page = cs.plain && cs.gets ? { plain: cs.plain, gets: cs.gets } : first;
  const useCases = USE_CASES.filter((u) => cs.parts.includes(u.service)).slice(0, 3);
  const otherServices = CITY_SERVICES.filter((s) => s.slug !== cs.slug);
  const nearby = CITIES.filter((c) => c.county === city.county && c.slug !== city.slug);
  const districts = DISTRICTS.filter((d) => d.city === city.slug);

  return (
    <PageShell>
      <ServiceHero crumb={{ label: cs.noun, href: `/services/${cs.slug}` }} h1={<>{tx(`${cs.noun} in`)} <span className="oa-it">{city.name}.</span></>} plain={page.plain} gets={page.gets} note={`${city.name}, ${tx(COUNTIES[city.county])}.${city.slug !== "miami" ? ` ${tx("Based in Miami.")}` : ""}`} first={first} />

      {useCases.length > 0 && (
        <div className="oa-sec" style={{ paddingTop: 0 }}>
          <div className="oa-wrap">
            <h2 className="oa-serif oa-h2 oa-rv">
              {tx("Where it's")} <span className="oa-em">{tx("used.")}</span>
            </h2>
            <div className={gridClass(useCases.length)} style={{ marginTop: 56 }}>
              {useCases.map((u, i) => (
                <UseCaseCard key={u.slug} useCase={u} className={stagger(i)} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <div className="oa-cline oa-rv">
            <p className="oa-serif">{tx("The work behind it")}</p>
            <Link className="oa-pill oa-ghost" href="/portfolio">
              {tx("See the work")}
              <Arrow />
            </Link>
          </div>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("Also in")} <span className="oa-em">{city.name}.</span>
          </h2>
          <div className="oa-plist">
            {otherServices.map((s) => (
              <Row key={s.slug} href={`/services/${s.slug}/${city.slug}`} title={`${tx(s.noun)} · ${city.name}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx(`${cs.noun} near`)} <span className="oa-em">{city.name}.</span>
          </h2>
          <div className="oa-pcities oa-rv">
            {[...nearby.map((c) => ({ key: c.slug, name: c.name, href: `/services/${cs.slug}/${c.slug}` })), ...districts.map((d) => ({ key: d.slug, name: d.name, href: `/areas/${d.slug}` }))].map((l) => (
              <Link key={l.key} className="oa-pill oa-ghost" href={l.href}>
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FaqBlock />
      <Ask />
    </PageShell>
  );
}

/** A city hub (/locations/miami) or a business district (/areas/brickell). Both say the same few true things. */
export function PlaceView({ citySlug, districtName, siblings }: { citySlug: string; districtName?: string; siblings?: { slug: string; name: string }[] }) {
  const tx = useTx();
  const city = cityBySlug(citySlug)!;
  const place = districtName ?? city.name;
  const districts = DISTRICTS.filter((d) => d.city === city.slug);
  const nearby = CITIES.filter((c) => c.county === city.county && c.slug !== city.slug);

  return (
    <PageShell>
      <PageHero
        crumb={districtName ? { label: city.name, href: cityHref(city) } : { label: "Services", href: "/services" }}
        title="Websites, AI and automation in"
        em={`${place}.`}
        sub="Websites that bring calls, search that finds you, and agents and automations that answer. For local businesses."
      >
        <span className="oa-sm oa-rv" style={{ display: "block", marginTop: 20 }}>
          {districtName ? `${city.name}, ` : ""}
          {tx(COUNTIES[city.county])}. {city.slug !== "miami" && tx("Based in Miami.")}
        </span>
      </PageHero>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("What we do in")} <span className="oa-em">{city.name}.</span>
          </h2>
          <div className="oa-psplit">
            <div className="oa-plist">
              {CITY_SERVICES.map((s) => (
                <Row key={s.slug} href={`/services/${s.slug}/${city.slug}`} title={tx(s.noun)} note={tx(s.plain ?? SERVICE_PAGES[s.parts[0]].plain)} />
              ))}
            </div>
            <SiteStack />
          </div>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("The trades we")} <span className="oa-em">{tx("work with.")}</span>
          </h2>
          <div className={gridClass(VERTICALS.length)} style={{ marginTop: 56 }}>
            {VERTICALS.map((v, i) => (
              <Link key={v.slug} className={`oa-uc oa-rv ${stagger(i)}`} href={`/industries/${v.slug}`}>
                <p className="oa-serif oa-not">{tx(v.title)}</p>
                <p className="oa-rs">{tx(v.trades)}</p>
                <span className="oa-pill oa-ghost oa-ucgo">
                  {tx("See the five use cases")}
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
            {districtName ? tx("Other places in") : tx("Nearby in")} <span className="oa-em">{tx(COUNTIES[city.county])}.</span>
          </h2>
          <div className="oa-pcities oa-rv">
            {(districtName ? siblings ?? [] : districts).map((d) => (
              <Link key={d.slug} className="oa-pill oa-ghost" href={`/areas/${d.slug}`}>
                {d.name}
              </Link>
            ))}
            {nearby.map((c) => (
              <Link key={c.slug} className="oa-pill oa-ghost" href={cityHref(c)}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Ask />
    </PageShell>
  );
}

/** /services/digital-marketing and /services/ai-solutions: the two old slugs, each standing for a pair of real services. */
export function CompositeServiceView({ slug }: { slug: string }) {
  const tx = useTx();
  const cs = cityService(slug)!;
  const parts = cs.parts.map((p) => SERVICES.find((s) => s.slug === p)!);
  const useCases = USE_CASES.filter((u) => cs.parts.includes(u.service)).slice(0, 3);
  return (
    <PageShell>
      <ServiceHero
        crumb={{ label: "Services", href: "/services" }}
        h1={<>{tx(cs.hubTitle!)} <span className="oa-it">{tx(cs.hubEm!)}</span></>}
        plain={cs.plain!}
        gets={cs.gets!}
        first={SERVICE_PAGES[cs.parts[0]]}
      />
      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("Two services,")} <span className="oa-em">{tx("one result.")}</span>
          </h2>
          <div className={gridClass(parts.length)} style={{ marginTop: 56 }}>
            {parts.map((s, i) => (
              <ServiceCard key={s.slug} service={s} className={stagger(i)} />
            ))}
          </div>
        </div>
      </div>
      {useCases.length > 0 && (
        <div className="oa-sec" style={{ paddingTop: 0 }}>
          <div className="oa-wrap">
            <h2 className="oa-serif oa-h2 oa-rv">
              {tx("Where it's")} <span className="oa-em">{tx("used.")}</span>
            </h2>
            <div className={gridClass(useCases.length)} style={{ marginTop: 56 }}>
              {useCases.map((u, i) => (
                <UseCaseCard key={u.slug} useCase={u} className={stagger(i)} />
              ))}
            </div>
          </div>
        </div>
      )}
      <FaqBlock />
      <Ask />
    </PageShell>
  );
}
