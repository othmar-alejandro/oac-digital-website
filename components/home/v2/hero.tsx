"use client";

import { useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";

export function Hero() {
  const tx = useTx();
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress through the pinned hero drives the whole story via one CSS variable.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const total = el.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total)) : 0;
      el.style.setProperty("--o-p", p.toFixed(3));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="oa-hero" id="hero" ref={ref}>
      <div className="oa-stick oa-gridbg">
        <div className="oa-stage">
          <div className="oa-col oa-head">
            <span className="oa-sm" style={{ fontSize: "15px" }}>
              {tx("An AI agency in Miami. English and Spanish.")}
            </span>
            <h1 className="oa-serif oa-h1">
              <span className="oa-ln">
                <span className="oa-w">
                  {tx("More")}
                </span>
                {" "}
                <span className="oa-w oa-d2">
                  {tx("customers.")}
                </span>
              </span>
              <span className="oa-ln oa-it">
                <span className="oa-w oa-d3">
                  {tx("Less")}
                </span>
                {" "}
                <span className="oa-w oa-d4">
                  {tx("busywork.")}
                </span>
              </span>
            </h1>
            <p className="oa-sub oa-mut">
              {tx("We build the websites, AI agents and automations that find your customers, answer them right away and keep them coming back. You run the business.")}
            </p>
            <div className="oa-row oa-cta">
              <a className="oa-pill" href="#consult">
                {tx("Get my free consultation")}
                <span className="oa-arr">
                  <span className="oa-arrin">
                    {"→"}
                  </span>
                </span>
              </a>
              <Link className="oa-pill oa-ghost" href="/portfolio">
                {tx("See the work")}
                <span className="oa-arr">
                  <span className="oa-arrin">
                    {"→"}
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="oa-board oa-tick">
            <div className="oa-row oa-bhead">
              <div className="oa-ask">
                <span className="oa-typed">
                  {tx("best tile contractor near me")}
                </span>
                <span className="oa-caret"></span>
                <span className="oa-askb">
                  {"↑"}
                </span>
              </div>
              <span className="oa-mut">
                {tx("Asked in ChatGPT. Captured October 12, 2026.")}
              </span>
            </div>
          </div>
          <div className="oa-art oa-a1">
            <img className="oa-shot" src="/images/home/chatgpt-fitoria.png" alt="ChatGPT answer listing Fitoria Tile and Marble first for best tile contractor near me" loading="lazy" decoding="async" />
            <div className="oa-cap">
              <span>
                {tx("ChatGPT, unedited")}
              </span>
              <span>
                {tx("Client: Fitoria Tile & Marble")}
              </span>
            </div>
          </div>
          <div className="oa-art oa-a2">
            <img className="oa-shot" style={{ objectPosition: "center 16%" }} src="/images/home/telegram.jpg" alt="Telegram screenshot of the Brokie agent team built for Broke and Fixed" loading="lazy" decoding="async" />
            <div className="oa-cap">
              <span>
                {tx("Telegram, real screenshot")}
              </span>
              <span>
                {tx("Brokie, built for Broke & Fixed")}
              </span>
            </div>
          </div>
          <div className="oa-art oa-a3 oa-col" style={{ padding: "0", gap: "0", alignItems: "stretch" }}>
            <div className="oa-row" style={{ justifyContent: "space-between", padding: "10px 14px", borderBottom: "1px solid var(--o-line)", fontSize: "13px" }}>
              <span style={{ fontWeight: "500" }}>
                {tx("Leads & jobs")}
              </span>
              <span className="oa-sm" style={{ fontSize: "12px" }}>
                {tx("this week")}
              </span>
            </div>
            <div className="oa-mini">
              <div>
                <span className="oa-mh2">
                  {tx("New lead")}
                </span>
                <div className="oa-mc oa-hot">
                  <b>
                    {"Maria R."}
                  </b>
                  <span>
                    {tx("Bathroom tile · website chat")}
                  </span>
                </div>
              </div>
              <div>
                <span className="oa-mh2">
                  {tx("Estimate booked")}
                </span>
                <div className="oa-mc">
                  <b>
                    {"Carla M."}
                  </b>
                  <span>
                    {tx("Floor tile · Sat 9:00")}
                  </span>
                </div>
              </div>
              <div>
                <span className="oa-mh2">
                  {tx("Quote sent")}
                </span>
                <div className="oa-mc">
                  <b>
                    {"Jorge A."}
                  </b>
                  <span style={{ color: "var(--o-gold)" }}>
                    {tx("Follow-up Fri, automatic")}
                  </span>
                </div>
              </div>
            </div>
            <div className="oa-cap" style={{ height: "auto", padding: "8px 14px" }}>
              <span>
                {tx("Your CRM")}
              </span>
              <span>
                {tx("Example")}
              </span>
            </div>
          </div>
          <div className="oa-art oa-a4 oa-col" style={{ gap: "6px" }}>
            <div className="oa-row" style={{ justifyContent: "space-between" }}>
              <span className="oa-sm">
                {tx("WhatsApp · Thu 10:00 am")}
              </span>
              <span className="oa-ok">
                {tx("Booked by the agent")}
              </span>
            </div>
            <div style={{ fontSize: "17px", fontWeight: "500" }}>
              {tx("Free estimate, bathroom tile")}
            </div>
            <div className="oa-sm">
              {tx("Asked at 9:14 pm. Confirmed at 9:15 pm. Example.")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
