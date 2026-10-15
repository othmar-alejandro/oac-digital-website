"use client";

import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { Arrow } from "@/components/layout/header";
import { CONSULT_HREF } from "@/components/layout/nav-data";
import { STORIES } from "@/components/home/v2/data";
import { DemoApp, DemoAuto, DemoCrm, DemoWa } from "@/components/home/v2/tour";
import { useReveal } from "@/components/home/v2/use-reveal";
import type { UseCase } from "@/lib/use-cases";

const DEMOS = { wa: DemoWa, auto: DemoAuto, crm: DemoCrm, app: DemoApp };

export type Shot = { src: string; alt: string; cap: string };

/** Card grid sized to its count: one, two or four cards use two columns so no card sits alone on a row of three. */
export const gridClass = (count: number) => `oa-ucgrid${count <= 2 || count === 4 ? " oa-ucgrid2" : ""}`;

/** Page wrapper for the redesigned inner pages: brand surface plus scroll reveals. */
export function PageShell({ children }: { children: ReactNode }) {
  const root = useReveal<HTMLDivElement>();
  return (
    <div className="oa oa-page" ref={root}>
      {children}
    </div>
  );
}

export function PageHero({ crumb, title, em, sub, children }: { crumb: { label: string; href: string }; title: string; em?: string; sub?: string; children?: ReactNode }) {
  const tx = useTx();
  return (
    <div className="oa-sec oa-gridbg oa-ahero" style={{ position: "relative" }}>
      <div className="oa-wrap">
        <Link className="oa-sl oa-rv" href={crumb.href}>
          {tx(crumb.label)} <span>›</span>
        </Link>
        <h1 className="oa-serif oa-h2 oa-ah1 oa-rv">
          {tx(title)}
          {em && (
            <>
              {" "}
              <span className="oa-it">{tx(em)}</span>
            </>
          )}
        </h1>
        {sub && (
          <p className="oa-mut oa-rv oa-rv2" style={{ fontSize: 20, maxWidth: 640, margin: "32px 0 0" }}>
            {tx(sub)}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

/** Built for a named client, or an honest Concept tag. */
export function StatusTag({ status }: { status: UseCase["status"] }) {
  const tx = useTx();
  return status.kind === "built" ? (
    <span className="oa-tag oa-tagb">
      {tx("Built for")} {status.client}
    </span>
  ) : (
    <span className="oa-tag">{tx("Concept")}</span>
  );
}

export function UseCaseCard({ useCase, className = "" }: { useCase: UseCase; className?: string }) {
  const tx = useTx();
  return (
    <Link className={`oa-uc oa-rv ${className}`} href={`/use-cases/${useCase.slug}`}>
      <div className="oa-row" style={{ justifyContent: "space-between", gap: 12 }}>
        <span className="oa-uct">{tx(useCase.time)}</span>
        <StatusTag status={useCase.status} />
      </div>
      <p className="oa-serif oa-not">{tx(useCase.title)}</p>
      <p className="oa-rs">{tx(useCase.moment)}</p>
      <span className="oa-pill oa-ghost oa-ucgo">
        {tx("See how it works")}
        <Arrow />
      </span>
    </Link>
  );
}

/** A built demo screen (example data) or a real capture, in the same frame as the homepage tour. */
export function DemoStage({ demo, shot }: { demo?: keyof typeof DEMOS; shot?: Shot }) {
  const tx = useTx();
  const Demo = demo ? DEMOS[demo] : null;
  if (Demo) {
    return (
      <div className="oa-demo oa-rv">
        <Demo />
      </div>
    );
  }
  if (!shot) return null;
  // A real capture keeps its own proportions instead of being cropped to the demo frame.
  return (
    <figure className="oa-pshot oa-rv">
      <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
      <figcaption className="oa-sm">{tx(shot.cap)}</figcaption>
    </figure>
  );
}

/** One client story from the homepage, as a proof band. */
export function ProofBand({ client }: { client: string }) {
  const tx = useTx();
  const story = STORIES.find((s) => s.name === client);
  if (!story) return null;
  return (
    <div className="oa-story">
      <div className="oa-wrap">
        <Link className="oa-sl oa-rv" href="/portfolio" style={{ marginBottom: 40 }}>
          {tx("Work")} <span>›</span>
        </Link>
        <div className="oa-sgrid">
          <div className="oa-col" style={{ gap: 28, alignItems: "flex-start" }}>
            <p className="oa-serif oa-sline">{tx(story.line)}</p>
            <span style={{ opacity: 0.75, fontSize: 15 }}>
              {story.name} · {tx(story.what)}
            </span>
            <a className="oa-pill oa-ghost" style={{ color: "inherit", padding: 0, height: "auto" }} href={story.url} target="_blank" rel="noopener noreferrer">
              {tx("See it live")}
              <Arrow />
            </a>
          </div>
          <div className="oa-sfr">
            <img className="oa-sfi" src={story.img} alt={`${story.name} website`} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** The one ask, same close as the About page. */
export function Ask() {
  const tx = useTx();
  return (
    <div className="oa-wrap oa-gridbg" style={{ position: "relative" }}>
      <div className="oa-aend">
        <h2 className="oa-serif oa-h2 oa-ah1 oa-rv">
          {tx("The first call is")} <span className="oa-it">{tx("free.")}</span>
        </h2>
        <p className="oa-mut oa-rv oa-rv2" style={{ fontSize: 20, maxWidth: 560, margin: 0 }}>
          {tx("You tell us where your hours go. You leave knowing what we'd build first, and you decide after that. We call back within one business day.")}
        </p>
        <Link className="oa-pill oa-rv oa-rv3" href={CONSULT_HREF}>
          {tx("Get my free consultation")}
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
