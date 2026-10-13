"use client";

import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { Arrow } from "@/components/layout/header";
import { CONSULT_HREF } from "@/components/layout/nav-data";
import { SITES, STORIES } from "@/components/home/v2/data";
import { useReveal } from "@/components/home/v2/use-reveal";

const STORY = [
  "Before I built systems for owners, I was the owner doing everything myself.",
  "I've been in business since 2016, in other companies before OAC. That's where I learned what a business needs and how it's run, and what an owner goes through when nobody showed them another way or there is nobody to hand the work to.",
  "That is how you end up doing everything yourself. You stop being the owner and become the employee who works the most and gets paid the least. If the business only grows by taking more of your hours, making more money doesn't fix it.",
  "I'm an artificial intelligence graduate from Miami Dade College. OAC Digital Innovations is where I put that to work for owners in the spot I've been in.",
];

const FACTS = ["In business since 2016", "AI graduate, Miami Dade College", "In Miami since 2023", "English and Spanish"];

const WONT = [
  { title: "We won't hold your site hostage", text: "Your domain, your site, your accounts and your logins are in your name. If you ever leave, everything goes with you." },
  { title: "We won't disappear", text: "You have a direct line to us. We call back within one business day, and we're still a call away after it goes live." },
  { title: "We won't tell you AI fixes everything", text: "AI won't fix a business that does bad work. It fixes the part where good businesses lose customers to slow replies and forgotten follow-ups." },
  { title: "We won't go live without you", text: "You see it working first. You ask for changes. It goes live when you say it's right." },
];

// Named with each client's permission. Stories come from the homepage; the rest list what we built.
const PROOF = SITES.map((site) => {
  const story = STORIES.find((s) => s.name === site.name);
  return { ...site, what: story?.what ?? "Website", line: story?.line };
});

const WAYS = [
  { title: "Someone in your corner", text: "We don't take a share of your business and we don't want one. Partner means you have people to call who know how your business runs and want it to grow." },
  { title: "Organized first", text: "Before we add anything, we look at how leads, clients and jobs move through your business today, and we close the places where they get lost." },
  { title: "Then growth", text: "Once nothing slips, we bring more people in: search, your website, and AI agents and automations that answer and follow up for you." },
];

export function AboutV2() {
  const tx = useTx();
  const root = useReveal<HTMLDivElement>();

  return (
    <div className="oa oa-page" ref={root}>
      <div className="oa-sec oa-gridbg oa-ahero" style={{ position: "relative" }}>
        <div className="oa-wrap">
          <span className="oa-sl oa-rv">
            {tx("About")} <span>›</span>
          </span>
          <h1 className="oa-serif oa-h2 oa-ah1 oa-rv">
            {tx("Too many owners are the employee who works the most and")} <span className="oa-it">{tx("gets paid the least.")}</span>
          </h1>
          <p className="oa-mut oa-rv oa-rv2" style={{ fontSize: 20, maxWidth: 620, margin: "32px 0 0" }}>
            {tx("OAC Digital Innovations is an AI agency in Miami. We help local businesses get organized and grow, in English and Spanish.")}
          </p>
          <ul className="oa-facts oa-rv oa-rv3">
            {FACTS.map((fact) => (
              <li key={fact}>{tx(fact)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <div className="oa-about">
            <div className="oa-col oa-stk" style={{ gap: 18 }}>
              <img className="oa-port oa-rv" src="/images/home/othmar-2.jpg" alt="Othmar Casilla" />
              <div>
                <div style={{ fontWeight: 500 }}>Othmar Casilla</div>
                <div className="oa-sm">{tx("Founder. Artificial intelligence graduate, Miami Dade College.")}</div>
              </div>
            </div>
            <div className="oa-col" style={{ gap: 28 }}>
              <span className="oa-sl oa-rv" style={{ marginBottom: 0 }}>
                {tx("From Othmar")} <span>›</span>
              </span>
              <p className="oa-serif oa-hon oa-rv">{tx(STORY[0])}</p>
              {STORY.slice(1).map((line) => (
                <p key={line} className="oa-mut oa-rv" style={{ fontSize: 20, lineHeight: 1.5, margin: 0, maxWidth: 620 }}>
                  {tx(line)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="oa-band">
        <div className="oa-wrap">
          <p className="oa-serif oa-trades oa-rv" style={{ marginTop: 0 }}>
            {tx("A disorganized business")} <span className="oa-em">{tx("always leaks.")}</span>{" "}
            <span className="oa-mut">{tx("A lead nobody called back. A client nobody reminded. A quote that stayed in a notebook. None of it looks like much on the day it happens.")}</span>
          </p>
        </div>
      </div>

      <div className="oa-sec">
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("What we")} <span className="oa-em">{tx("won't do.")}</span>
          </h2>
          <p className="oa-mut oa-rv oa-rv2" style={{ fontSize: 20, maxWidth: 560, margin: "20px 0 0" }}>
            {tx("If you've been burned before, it was probably by one of these.")}
          </p>
          <div className="oa-wont">
            {WONT.map((item, i) => (
              <div key={item.title} className={`oa-no oa-rv${i % 2 ? " oa-rv2" : ""}`}>
                <span className="oa-nox" aria-hidden="true">
                  ×
                </span>
                <p className="oa-serif oa-not">{tx(item.title)}</p>
                <p className="oa-rs">{tx(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap">
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("Don't take our word for it.")} <span className="oa-em">{tx("Look at the work.")}</span>
          </h2>
          <div className="oa-proofs">
            {PROOF.map((p) => (
              <a key={p.name} className="oa-proof oa-rv" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="oa-frame">
                  <img className="oa-simg" src={p.img} alt="" loading="lazy" decoding="async" />
                </div>
                <div>
                  <p className="oa-serif oa-not">{p.name}</p>
                  <span className="oa-sm">
                    {tx(p.trade)} · {tx(p.what)}
                  </span>
                  {p.line && <p className="oa-rs" style={{ marginTop: 12 }}>{tx(p.line)}</p>}
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

      <div className="oa-sec" style={{ paddingTop: 0 }}>
        <div className="oa-wrap oa-split">
          <div className="oa-stk">
            <h2 className="oa-serif oa-h2 oa-rv">
              {tx("What partner")} <span className="oa-em">{tx("means here.")}</span>
            </h2>
          </div>
          <div>
            {WAYS.map((way, i) => (
              <div key={way.title} className="oa-res oa-rv">
                <span className="oa-num">0{i + 1}</span>
                <div>
                  <p className="oa-serif oa-rt">{tx(way.title)}</p>
                  <p className="oa-rs">{tx(way.text)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
    </div>
  );
}
