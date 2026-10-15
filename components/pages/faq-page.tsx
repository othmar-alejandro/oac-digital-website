"use client";

import { useState } from "react";
import { useTx } from "@/lib/home-i18n";
import { FAQ_GROUPS, type FaqGroup } from "@/lib/faq-page";
import { Ask, PageHero, PageShell } from "./parts";

function Group({ group }: { group: FaqGroup }) {
  const tx = useTx();
  const [open, setOpen] = useState(0);
  return (
    <div className="oa-wrap oa-split" style={{ paddingTop: 48 }}>
      <div className="oa-stk">
        <h2 className="oa-serif oa-h2 oa-rv" style={{ fontSize: 36 }}>
          {tx(group.title)}
        </h2>
      </div>
      <div>
        {group.items.map((f, i) => (
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
      </div>
    </div>
  );
}

export function FaqPageView() {
  const tx = useTx();
  const all = FAQ_GROUPS.flatMap((g) => g.items);
  return (
    <PageShell>
      <PageHero crumb={{ label: "Home", href: "/" }} title="Questions people ask" em="before the call." sub="Short answers. The rest is what the free call is for." />
      <div className="oa-sec" style={{ paddingTop: 0 }}>
        {FAQ_GROUPS.map((g) => (
          <Group key={g.title} group={g} />
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: all.map((f) => ({ "@type": "Question", name: tx(f.q), acceptedAnswer: { "@type": "Answer", text: tx(f.a) } })) }) }} />
      <Ask />
    </PageShell>
  );
}
