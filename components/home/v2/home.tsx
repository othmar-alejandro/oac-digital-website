"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { Arrow } from "@/components/layout/header";
import { ConsultForm } from "./consult-form";
import { FAQS, PAINS, SITES, STORIES } from "./data";
import { Hero } from "./hero";
import { About, Agents, Results, Steps } from "./static";
import { Tour } from "./tour";
import { useReveal } from "./use-reveal";

function ConsultLine({ lead, em, className = "" }: { lead: string; em: string; className?: string }) {
  const tx = useTx();
  return (
    <div className={`oa-cline oa-rv ${className}`}>
      <p className="oa-serif">
        {tx(lead)} <span className="oa-em">{tx(em)}</span>
      </p>
      <a className="oa-pill" href="#consult">
        {tx("Get my free consultation")}
        <Arrow />
      </a>
    </div>
  );
}

function WorkStrip() {
  const tx = useTx();
  return (
    <div className="oa-work">
      <div className="oa-wrap oa-row" style={{ justifyContent: "space-between" }}>
        <span className="oa-mut">{tx("Local businesses running on OAC")}</span>
        <Link className="oa-pill oa-ghost" style={{ height: "auto", padding: 0 }} href="/portfolio">
          {tx("See all the work")}
          <Arrow />
        </Link>
      </div>
      <div className="oa-strip">
        <div className="oa-track">
          {/* Rendered twice so the marquee loops without a seam; the copy is hidden from assistive tech. */}
          {[...SITES, ...SITES].map((site, i) => {
            const copy = i >= SITES.length;
            return (
              <a key={i} className="oa-site" href={site.url} target="_blank" rel="noopener noreferrer" aria-hidden={copy || undefined} tabIndex={copy ? -1 : undefined}>
                <div className="oa-frame">
                  <img className="oa-simg" src={site.img} alt={copy ? "" : `${site.name} website`} loading="lazy" decoding="async" />
                </div>
                <p className="oa-sname">{site.name}</p>
                <span className="oa-sm">{tx(site.trade)}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stories() {
  const tx = useTx();
  const [active, setActive] = useState(0);
  const story = STORIES[active];
  return (
    <div className="oa-story">
      <div className="oa-wrap">
        <Link className="oa-sl oa-rv" href="/portfolio" style={{ marginBottom: 40 }}>
          {tx("Work")} <span>›</span>
        </Link>
        <div className="oa-sgrid">
          <div className="oa-col" style={{ gap: 28, alignItems: "flex-start" }}>
            <p key={active} className="oa-serif oa-sline">
              {tx(story.line)}
            </p>
            <span style={{ opacity: 0.75, fontSize: 15 }}>{tx(story.what)}</span>
            <a className="oa-pill oa-ghost" style={{ color: "inherit", padding: 0, height: "auto" }} href={story.url} target="_blank" rel="noopener noreferrer">
              {tx("See it live")}
              <Arrow />
            </a>
          </div>
          <div className="oa-sfr">
            <img key={active} className="oa-sfi" src={story.img} alt={`${story.name} website`} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="oa-slogs">
          {STORIES.map((s, i) => (
            <button key={s.name} type="button" className={`oa-slog${i === active ? " oa-on" : ""}`} aria-pressed={i === active} onClick={() => setActive(i)}>
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Day() {
  const tx = useTx();
  return (
    <div className="oa-band" id="band">
      <div className="oa-wrap">
        <div className="oa-bgrid">
          <div className="oa-bcell oa-bintro oa-col">
            <h2 className="oa-serif oa-h2 oa-rv" style={{ fontSize: 52 }}>
              {tx("Good businesses lose customers to")} <span className="oa-em">{tx("small things.")}</span>
            </h2>
            <p className="oa-pf oa-rv oa-rv2" style={{ fontSize: 18, maxWidth: 340 }}>
              {tx("One day in a small business. Five things that slip, and how each one gets caught.")}
            </p>
            <div className="oa-legend oa-rv oa-rv3">
              <span className="oa-lgt">7:40 am</span>
              <span className="oa-lgl" />
              <span className="oa-lgt">11:48 pm</span>
            </div>
          </div>
          {PAINS.map((p) => (
            <div key={p.idx} className="oa-bcell oa-scene oa-rv">
              <img className="oa-simg2" src={p.img} alt={p.alt} loading="lazy" decoding="async" />
              <div className="oa-scrim" />
              <div className="oa-chead">
                <span className="oa-cidx">{p.idx}</span>
                <span className="oa-ctime">{p.time}</span>
              </div>
              <p className="oa-serif oa-pline">{tx(p.line)}</p>
              <div className="oa-thread">
                <div className="oa-nt oa-bad">
                  <span className="oa-nico">{p.ico}</span>
                  <div className="oa-ntb">
                    <div className="oa-row2">
                      <b>{tx(p.app)}</b>
                      <span className="oa-xs2">{tx(p.t1)}</span>
                    </div>
                    <div className="oa-ntt">{tx(p.title1)}</div>
                    <span className="oa-nst oa-bad">{tx(p.chip1)}</span>
                  </div>
                </div>
                <div className="oa-link">
                  <span className="oa-lline" />
                  <img className="oa-lnode" src="/images/home/avatar.png" alt="OAC" loading="lazy" decoding="async" />
                  <span className="oa-lline" />
                </div>
                <div className="oa-nt oa-fix">
                  <span className="oa-nico oa-oac">A</span>
                  <div className="oa-ntb">
                    <div className="oa-row2">
                      <b>OAC · {tx(p.svc)}</b>
                      <span className="oa-xs2">{tx(p.t2)}</span>
                    </div>
                    <div className="oa-ntt">{tx(p.title2)}</div>
                    <span className="oa-nst oa-good">{tx(p.chip2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ConsultLine lead="Which one is" em="yours?" className="oa-clb" />
      </div>
    </div>
  );
}

function Faq() {
  const tx = useTx();
  const [open, setOpen] = useState(0);
  return (
    <div className="oa-sec oa-faqsec" style={{ paddingTop: 0 }}>
      <div className="oa-wrap oa-split">
        <div className="oa-stk">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("Questions people ask")} <span className="oa-em">{tx("before the call.")}</span>
          </h2>
        </div>
        <div>
          {FAQS.map((f, i) => (
            <div key={f.q} className={`oa-fq${i === open ? " oa-open" : ""}`}>
              <button type="button" className="oa-fqq" aria-expanded={i === open} onClick={() => setOpen(i === open ? -1 : i)}>
                <span>{tx(f.q)}</span>
                <span className="oa-plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="oa-fqa">
                <div className="oa-tdi">
                  <p className="oa-fqp">{tx(f.a)}</p>
                </div>
              </div>
            </div>
          ))}
          <ConsultLine lead="Ask the rest" em="on the call." />
        </div>
      </div>
      {/* Structured data mirrors the visible answers in the page's language. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: tx(f.q), acceptedAnswer: { "@type": "Answer", text: tx(f.a) } })) }) }} />
    </div>
  );
}

function Closing() {
  const tx = useTx();
  return (
    <div className="oa-wrap oa-gridbg" style={{ position: "relative" }}>
      <div className="oa-end">
        <div className="oa-col" style={{ gap: 28, alignItems: "flex-start" }}>
          <h2 className="oa-serif oa-h2 oa-rv" style={{ fontSize: 84, letterSpacing: "-.025em", lineHeight: 1 }}>
            {tx("Tell us what's")} <span className="oa-it">{tx("slowing you down.")}</span>
          </h2>
          <p className="oa-mut oa-rv oa-rv2" style={{ margin: 0, maxWidth: 520, fontSize: 20 }}>
            {tx("We look at how customers find you, how fast they get an answer and where they slip away. You leave knowing what we'd build first.")}
          </p>
          <div className="oa-row oa-who oa-rv oa-rv3">
            <img className="oa-face" src="/images/home/othmar.jpg" alt="Othmar Casilla" loading="lazy" decoding="async" />
            <div>
              <div style={{ fontWeight: 500 }}>Othmar Casilla</div>
              <div className="oa-sm">{tx("Founder, OAC Digital Innovations")}</div>
            </div>
          </div>
        </div>
        <ConsultForm />
      </div>
    </div>
  );
}

export function HomeV2() {
  const root = useReveal<HTMLDivElement>();

  return (
    <div className="oa oa-page" ref={root}>
      <Hero />
      <WorkStrip />
      <Results />
      <Tour />
      <Stories />
      <Day />
      <Agents />
      <Steps />
      <About />
      <Faq />
      <Closing />
    </div>
  );
}
