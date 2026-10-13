"use client";

import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";

export function Results() {
  const tx = useTx();
  return (
    <div className="oa-sec oa-gridbg" style={{ position: "relative" }}>
      <div className="oa-wrap oa-split">
        <div className="oa-stk">
          <Link className="oa-sl oa-rv" href="/services">
            {tx("Services")}{" "}
            <span>
              {"›"}
            </span>
          </Link>
          <h2 className="oa-serif oa-h2 oa-rv oa-rv2">
            {tx("Three results. Ten ways we")}{" "}
            <span className="oa-em">
              {tx("get you there.")}
            </span>
          </h2>
        </div>
        <div>
          <div className="oa-res oa-rv">
            <span className="oa-num">
              {"01"}
            </span>
            <div>
              <p className="oa-serif oa-rt">
                {tx("Get found")}
              </p>
              <p className="oa-rs">
                {tx("Websites you own. SEO on Google and Bing. AI search, so ChatGPT names you when someone asks.")}
              </p>
            </div>
          </div>
          <div className="oa-res oa-rv oa-rv2">
            <span className="oa-num">
              {"02"}
            </span>
            <div>
              <p className="oa-serif oa-rt">
                {tx("Never miss a lead")}
              </p>
              <p className="oa-rs">
                {tx("Automations that send the reply and the reminder. AI agents that answer and book. An assistant that works for you alone.")}
              </p>
            </div>
          </div>
          <div className="oa-res oa-resl oa-rv oa-rv3">
            <span className="oa-num">
              {"03"}
            </span>
            <div>
              <p className="oa-serif oa-rt">
                {tx("Keep clients, stay organized")}
              </p>
              <p className="oa-rs">
                {tx("A CRM built around your business. Booking apps for your regulars. Custom tools. Your own business AI.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Agents() {
  const tx = useTx();
  return (
    <div className="oa-sec">
      <div className="oa-wrap oa-asst">
        <div className="oa-col" style={{ gap: "24px" }}>
          <h2 className="oa-serif oa-h2 oa-rv">
            {tx("Message it like you'd message")}{" "}
            <span className="oa-em">
              {tx("your best employee.")}
            </span>
          </h2>
          <p className="oa-mut oa-rv oa-rv2" style={{ fontSize: "20px", maxWidth: "480px", margin: "0" }}>
            {tx("Your own team of AI agents, in the app you already use. One for proposals, one for leads and estimates, others for SEO, social and video. You send what you have. It does the rest.")}
          </p>
          <span className="oa-sm">
            {tx("A real screenshot of Brokie, the agent team we built for Broke & Fixed. Client details blurred.")}
          </span>
        </div>
        <div className="oa-phone oa-rv oa-rv2">
          <div className="oa-scr">
            <img className="oa-tgimg" src="/images/home/telegram.jpg" alt="Telegram screenshot of the Brokie agent team: the proposals agent asks for scope, photos and next action, and keeps the CRM clean. Client details blurred." loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Steps() {
  const tx = useTx();
  return (
    <div className="oa-sec" id="how" style={{ paddingTop: "0", scrollMarginTop: "110px" }}>
      <div className="oa-wrap">
        <h2 className="oa-serif oa-h2 oa-rv">
          {tx("Three")}{" "}
          <span className="oa-em">
            {tx("steps.")}
          </span>
        </h2>
        <div className="oa-steps">
          <div className="oa-step oa-rv">
            <span className="oa-num">
              {"01"}
            </span>
            <p className="oa-serif oa-st">
              {tx("Free consultation")}
            </p>
            <p className="oa-tdp" style={{ padding: "0" }}>
              {tx("We look at how your business runs today. You tell us what's slowing you down. We tell you what we'd build first.")}
            </p>
          </div>
          <div className="oa-step oa-step2 oa-rv oa-rv2">
            <span className="oa-num">
              {"02"}
            </span>
            <p className="oa-serif oa-st">
              {tx("We build it")}
            </p>
            <p className="oa-tdp" style={{ padding: "0" }}>
              {tx("You see it working and ask for changes before it goes live.")}
            </p>
          </div>
          <div className="oa-step oa-step2 oa-rv oa-rv3">
            <span className="oa-num">
              {"03"}
            </span>
            <p className="oa-serif oa-st">
              {tx("It works while you work")}
            </p>
            <p className="oa-tdp" style={{ padding: "0" }}>
              {tx("It's yours, it runs every day, and we're a call away.")}
            </p>
          </div>
        </div>
        <div className="oa-cline oa-rv">
          <p className="oa-serif">
            {tx("Step one is")}{" "}
            <span className="oa-em">
              {tx("free.")}
            </span>
          </p>
          <a className="oa-pill" href="#consult">
            {tx("Get my free consultation")}
            <span className="oa-arr">
              <span className="oa-arrin">
                {"→"}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const tx = useTx();
  return (
    <div className="oa-sec" style={{ paddingTop: 0 }}>
      <div className="oa-wrap">
        <div className="oa-about">
          <div className="oa-col" style={{ gap: "18px" }}>
            <img className="oa-port oa-rv" src="/images/home/othmar-2.jpg" alt="Othmar Casilla, founder of OAC Digital Innovations" loading="lazy" decoding="async" />
            <div>
              <div style={{ fontWeight: "500" }}>
                {"Othmar Casilla"}
              </div>
              <div className="oa-sm">
                {tx("Founder. Miami, since 2023.")}
              </div>
            </div>
          </div>
          <div className="oa-col" style={{ gap: "32px" }}>
            <Link className="oa-sl oa-rv" href="/about" style={{ marginBottom: "0" }}>
              {tx("About")}{" "}
              <span>
                {"›"}
              </span>
            </Link>
            <p className="oa-serif oa-hon oa-rv oa-rv2">
              {tx("AI won't fix a business that does bad work. It fixes the part where good businesses lose customers to")}{" "}
              <span className="oa-em">
                {tx("slow replies and forgotten follow-ups.")}
              </span>
            </p>
            <p className="oa-mut oa-rv oa-rv3" style={{ fontSize: "20px", margin: "0", maxWidth: "600px" }}>
              {tx("OAC Digital Innovations started in Miami in 2023. Othmar and the team build these systems every day, in English and Spanish, for businesses like the one down your street.")}
            </p>
          </div>
        </div>
        <div style={{ marginTop: "144px" }}>
          <span className="oa-mut oa-rv">
            {tx("Who we work with")}
          </span>
          <p className="oa-serif oa-trades oa-rv oa-rv2">
            {tx("Contractors, home services, barbers and salons, pet groomers, restaurants, real estate, auto, cleaning, legal and healthcare.")}{" "}
            <span className="oa-mut">
              {tx("Owners in Miami-Dade, Broward and Palm Beach who would rather serve customers than learn software.")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
