"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { TABS } from "./data";

export function DemoWa() {
  const tx = useTx();
  return (
    <div className="oa-dstage oa-gridbg">
      <div className="oa-ph2">
        <div className="oa-ph2s">
          <div className="oa-wah2" style={{ padding: "1.6em 1em .8em" }}>
            <span className="oa-wav2">
              {"F"}
            </span>
            <div>
              <div className="oa-b">
                {"Fitoria Tile & Marble"}
              </div>
              <div className="oa-xs">
                {tx("Business account · online")}
              </div>
            </div>
          </div>
          <div className="oa-wabd" style={{ fontSize: "12.5px" }}>
            <div className="oa-bo">
              {tx("Do you do bathroom tile? Need a quote this week.")}
              <i>
                {"9:14 pm"}
              </i>
            </div>
            <div className="oa-bi">
              {tx("Yes, we do. I can book a free estimate at your place. Thursday at 10 or Friday at 2?")}
              <i>
                {"9:14 pm"}
              </i>
            </div>
            <div className="oa-bo">
              {tx("Thursday")}
              <i>
                {"9:15 pm"}
              </i>
            </div>
            <div className="oa-bi">
              {tx("Booked. Thursday, 10:00 am. You'll get a reminder Wednesday. Can you send a photo of the bathroom so we come prepared?")}
              <i>
                {"9:15 pm"}
              </i>
            </div>
            <div className="oa-bo" style={{ padding: "4px" }}>
              <span className="oa-bimg"></span>
              <i>
                {"9:17 pm"}
              </i>
            </div>
            <div className="oa-bi">
              {tx("Got it. Luis will bring porcelain and ceramic samples.")}
              <i>
                {"9:17 pm"}
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="oa-win oa-agl">
        <div className="oa-wh">
          <span>
            {tx("Handled by the agent")}
          </span>
          <span className="oa-xs">
            {tx("Last 7 days · example")}
          </span>
        </div>
        <div className="oa-agr oa-on">
          <span className="oa-dot oa-g"></span>
          <div>
            <b>
              {"Maria R."}
            </b>
            <span>
              {tx("Bathroom tile · booked Thu 10:00")}
            </span>
          </div>
          <span className="oa-xs">
            {"9:15 pm"}
          </span>
        </div>
        <div className="oa-agr">
          <span className="oa-dot oa-g"></span>
          <div>
            <b>
              {"Jorge A."}
            </b>
            <span>
              {tx("Backsplash · quote sent, follow-up Fri")}
            </span>
          </div>
          <span className="oa-xs">
            {"10:41 pm"}
          </span>
        </div>
        <div className="oa-agr">
          <span className="oa-dot oa-g"></span>
          <div>
            <b>
              {"Dani P."}
            </b>
            <span>
              {tx("Shower remodel · rescheduled to Mon")}
            </span>
          </div>
          <span className="oa-xs">
            {"6:02 am"}
          </span>
        </div>
        <div className="oa-agr">
          <span className="oa-dot oa-y"></span>
          <div>
            <b>
              {tx("Unknown number")}
            </b>
            <span>
              {tx("Asked about pricing · sent your range")}
            </span>
          </div>
          <span className="oa-xs">
            {"7:48 am"}
          </span>
        </div>
        <div className="oa-agr">
          <span className="oa-dot oa-g"></span>
          <div>
            <b>
              {"Carla M."}
            </b>
            <span>
              {tx("Floor tile · estimate Sat 9:00")}
            </span>
          </div>
          <span className="oa-xs">
            {"12:20 pm"}
          </span>
        </div>
        <div className="oa-agf">
          <span>
            {tx("Answered in under a minute, every time")}
          </span>
          <span className="oa-gch">
            {tx("Day and night")}
          </span>
        </div>
      </div>
      <span className="oa-pcap">
        {tx("AI agent on WhatsApp Business. Example conversation.")}
      </span>
    </div>
  );
}

export function DemoAuto() {
  const tx = useTx();
  return (
    <div className="oa-dstage oa-gridbg">
      <div className="oa-win oa-flow">
        <div className="oa-wh">
          <span>
            {tx("After a job is marked done")}
          </span>
          <span className="oa-gch">
            {tx("Running")}
          </span>
        </div>
        <div className="oa-fl">
          <svg className="oa-fsvg" viewBox="0 0 420 430" fill="none">
            <path d="M110 66 V 96" stroke="#C79A43" strokeWidth="1.5" />
            <path d="M110 152 V 182" stroke="#C79A43" strokeWidth="1.5" />
            <path d="M110 238 V 268" stroke="#C79A43" strokeWidth="1.5" />
            <path d="M110 324 V 354" stroke="rgba(10,21,34,.3)" strokeWidth="1.5" strokeDasharray="3 4" />
            <path d="M210 296 H 250 Q 262 296 262 284 V 234 Q 262 222 274 222 H 300" stroke="rgba(10,21,34,.3)" strokeWidth="1.5" />
            <path d="M210 296 H 250 Q 262 296 262 308 V 336 Q 262 348 274 348 H 300" stroke="rgba(10,21,34,.3)" strokeWidth="1.5" />
          </svg>
          <div className="oa-fn oa-trig" style={{ left: "10px", top: "10px" }}>
            <span className="oa-fk">
              {tx("Trigger")}
            </span>
            <b>
              {tx("Job marked complete")}
            </b>
            <span className="oa-fs">
              {tx("by you, or by the CRM")}
            </span>
          </div>
          <div className="oa-fn" style={{ left: "10px", top: "96px" }}>
            <span className="oa-fk">
              {tx("Text")}
            </span>
            <b>
              {tx("Thank-you message")}
            </b>
            <span className="oa-fs">
              {tx("to the customer · right away")}
            </span>
          </div>
          <div className="oa-fn" style={{ left: "10px", top: "182px" }}>
            <span className="oa-fk">
              {tx("Wait")}
            </span>
            <b>
              {tx("1 day")}
            </b>
            <span className="oa-fs">
              {tx("then")}
            </span>
          </div>
          <div className="oa-fn" style={{ left: "10px", top: "268px" }}>
            <span className="oa-fk">
              {tx("Text")}
            </span>
            <b>
              {tx("Ask for a Google review")}
            </b>
            <span className="oa-fs">
              {tx("with your review link")}
            </span>
          </div>
          <div className="oa-fn" style={{ left: "10px", top: "354px" }}>
            <span className="oa-fk">
              {tx("Wait")}
            </span>
            <b>
              {tx("30 days")}
            </b>
            <span className="oa-fs">
              {tx("then a check-in")}
            </span>
          </div>
          <div className="oa-fn oa-sm2" style={{ left: "300px", top: "196px" }}>
            <span className="oa-fk">
              {tx("If reviewed")}
            </span>
            <b>
              {tx("Thank them, ask for a photo")}
            </b>
          </div>
          <div className="oa-fn oa-sm2" style={{ left: "300px", top: "322px" }}>
            <span className="oa-fk">
              {tx("If not")}
            </span>
            <b>
              {tx("Remind once, 3 days later")}
            </b>
          </div>
        </div>
      </div>
      <div className="oa-win oa-runlog">
        <div className="oa-wh">
          <span>
            {tx("Today")}
          </span>
          <span className="oa-xs">
            {tx("example")}
          </span>
        </div>
        <div className="oa-agr oa-on">
          <span className="oa-dot oa-g"></span>
          <div>
            <b>
              {tx("Maria R. · kitchen backsplash")}
            </b>
            <span>
              {tx("Thank-you text sent")}
            </span>
          </div>
          <span className="oa-xs">
            {"4:53 pm"}
          </span>
        </div>
        <div className="oa-agr">
          <span className="oa-dot oa-y"></span>
          <div>
            <b>
              {"Maria R."}
            </b>
            <span>
              {tx("Review request queued")}
            </span>
          </div>
          <span className="oa-xs">
            {tx("Tomorrow 10:00")}
          </span>
        </div>
        <div className="oa-agr">
          <span className="oa-dot oa-g"></span>
          <div>
            <b>
              {tx("Jorge A. · bathroom floor")}
            </b>
            <span>
              {tx("Google review received · thanked, photo requested")}
            </span>
          </div>
          <span className="oa-xs">
            {"11:10 am"}
          </span>
        </div>
        <div className="oa-agr">
          <span className="oa-dot oa-g"></span>
          <div>
            <b>
              {tx("Dani P. · shower")}
            </b>
            <span>
              {tx("30-day check-in sent")}
            </span>
          </div>
          <span className="oa-xs">
            {"9:00 am"}
          </span>
        </div>
      </div>
      <span className="oa-pcap">
        {tx("Follow-up automation. Example run.")}
      </span>
    </div>
  );
}

export function DemoCrm() {
  const tx = useTx();
  return (
    <div className="oa-dstage oa-gridbg">
      <div className="oa-win oa-kanw">
        <div className="oa-wh">
          <span>
            {tx("Leads & jobs")}
          </span>
          <span className="oa-xs">
            {tx("This month · example")}
          </span>
        </div>
        <div className="oa-kan">
          <div className="oa-kcol">
            <h5>
              {tx("New lead")}{" "}
              <span>
                {"2"}
              </span>
            </h5>
            <div className="oa-kc oa-hot">
              <b>
                {"Maria R."}
              </b>
              <span className="oa-km">
                {tx("Bathroom tile · website chat")}
              </span>
              <span className="oa-km">
                <span className="oa-av2">
                  {"LU"}
                </span>
                {tx("Estimate Thu 10:00")}
              </span>
            </div>
            <div className="oa-kc">
              <b>
                {tx("Unknown · 786")}
              </b>
              <span className="oa-km">
                {tx("Pricing question · WhatsApp")}
              </span>
              <span className="oa-km">
                {tx("Range sent · waiting")}
              </span>
            </div>
          </div>
          <div className="oa-kcol">
            <h5>
              {tx("Estimate booked")}{" "}
              <span>
                {"3"}
              </span>
            </h5>
            <div className="oa-kc">
              <b>
                {"Carla M."}
              </b>
              <span className="oa-km">
                {tx("Floor tile · 640 sq ft")}
              </span>
              <span className="oa-km">
                <span className="oa-av2">
                  {"LU"}
                </span>
                {tx("Sat 9:00")}
              </span>
            </div>
            <div className="oa-kc">
              <b>
                {"Omar T."}
              </b>
              <span className="oa-km">
                {tx("Shower walls")}
              </span>
              <span className="oa-km">
                <span className="oa-av2">
                  {"RF"}
                </span>
                {tx("Mon 2:00")}
              </span>
            </div>
            <div className="oa-kc">
              <b>
                {"The Garcias"}
              </b>
              <span className="oa-km">
                {tx("Kitchen backsplash")}
              </span>
              <span className="oa-km">
                <span className="oa-av2">
                  {"LU"}
                </span>
                {tx("Tue 11:00")}
              </span>
            </div>
          </div>
          <div className="oa-kcol">
            <h5>
              {tx("Quote sent")}{" "}
              <span>
                {"2"}
              </span>
            </h5>
            <div className="oa-kc">
              <b>
                {"Jorge A."}
              </b>
              <span className="oa-km">
                {tx("Backsplash · sent Tue")}
              </span>
              <span className="oa-km oa-gold">
                {tx("Follow-up Fri, automatic")}
              </span>
            </div>
            <div className="oa-kc">
              <b>
                {"Dani P."}
              </b>
              <span className="oa-km">
                {tx("Shower remodel")}
              </span>
              <span className="oa-km">
                {tx("Opened twice · no reply")}
              </span>
            </div>
          </div>
          <div className="oa-kcol">
            <h5>
              {tx("Won")}{" "}
              <span>
                {"4"}
              </span>
            </h5>
            <div className="oa-kc">
              <b>
                {"Lena K."}
              </b>
              <span className="oa-km">
                {tx("Porcelain slab · starts Mon")}
              </span>
              <span className="oa-km">
                {tx("Deposit received")}
              </span>
            </div>
            <div className="oa-kc">
              <b>
                {tx("Rivera family")}
              </b>
              <span className="oa-km">
                {tx("Full bathroom")}
              </span>
              <span className="oa-km">
                {tx("In progress")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="oa-win oa-rec">
        <div className="oa-wh">
          <span>
            {"Maria R."}
          </span>
          <span className="oa-gch">
            {tx("New lead")}
          </span>
        </div>
        <div className="oa-rk">
          <span>
            {tx("Service")}
          </span>
          <b>
            {tx("Bathroom tile")}
          </b>
          <span>
            {tx("Source")}
          </span>
          <b>
            {tx("Website chat, 9:14 pm")}
          </b>
          <span>
            {tx("Estimate")}
          </span>
          <b>
            {tx("Thursday 10:00, Luis")}
          </b>
          <span>
            {tx("Phone")}
          </span>
          <b>
            {tx("Saved · WhatsApp")}
          </b>
          <span>
            {tx("Next step")}
          </span>
          <b>
            {tx("Send quote after the visit")}
          </b>
        </div>
        <div className="oa-ract">
          <span className="oa-xs">
            {tx("Activity")}
          </span>
          <div>
            <span className="oa-dot oa-g"></span>
            {tx("Booked by the agent")}
            <i>
              {"9:15 pm"}
            </i>
          </div>
          <div>
            <span className="oa-dot oa-g"></span>
            {tx("Photo received")}
            <i>
              {"9:17 pm"}
            </i>
          </div>
          <div>
            <span className="oa-dot oa-y"></span>
            {tx("Reminder scheduled")}
            <i>
              {tx("Wed 6:00 pm")}
            </i>
          </div>
        </div>
      </div>
      <span className="oa-pcap">
        {tx("A CRM built around how you work. Example data.")}
      </span>
    </div>
  );
}

export function DemoApp() {
  const tx = useTx();
  return (
    <div className="oa-dstage oa-gridbg">
      <div className="oa-ph2 oa-ph2l">
        <div className="oa-ph2s oa-uibook" style={{ fontSize: "12.5px" }}>
          <div className="oa-uih" style={{ border: "0", padding: "1.9em 1.2em .6em" }}>
            <span className="oa-xs">
              {tx("Good afternoon, Carlos")}
            </span>
            <div className="oa-b" style={{ fontSize: "1.5em", fontFamily: "var(--font-newsreader),serif", fontWeight: "400" }}>
              {tx("Same as last time?")}
            </div>
          </div>
          <div className="oa-uib" style={{ padding: "0 1.2em" }}>
            <div className="oa-bk">
              <div className="oa-row2">
                <b>
                  {tx("Haircut with Luis")}
                </b>
                <span className="oa-xs">
                  {"45 min"}
                </span>
              </div>
              <div className="oa-xs">
                {tx("Friday, 4:30 pm · your usual chair")}
              </div>
              <div className="oa-btn2">
                {tx("Book it")}
              </div>
              <div className="oa-xs" style={{ textAlign: "center" }}>
                {tx("Pick another time")}
              </div>
            </div>
            <div className="oa-wk">
              <span className="oa-wd">
                {tx("Mon")}
                <b>
                  {"13"}
                </b>
              </span>
              <span className="oa-wd">
                {tx("Tue")}
                <b>
                  {"14"}
                </b>
              </span>
              <span className="oa-wd">
                {tx("Wed")}
                <b>
                  {"15"}
                </b>
              </span>
              <span className="oa-wd">
                {tx("Thu")}
                <b>
                  {"16"}
                </b>
              </span>
              <span className="oa-wd oa-on">
                {tx("Fri")}
                <b>
                  {"17"}
                </b>
              </span>
              <span className="oa-wd">
                {tx("Sat")}
                <b>
                  {"18"}
                </b>
              </span>
            </div>
            <div className="oa-pv">
              <span className="oa-xs">
                {tx("Past visits")}
              </span>
              <div className="oa-row2">
                <span>
                  {tx("Sep 26 · Haircut, Luis")}
                </span>
                <span className="oa-xs">
                  {"★ 5"}
                </span>
              </div>
              <div className="oa-row2">
                <span>
                  {tx("Sep 5 · Haircut + beard, Luis")}
                </span>
                <span className="oa-xs">
                  {"★ 5"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="oa-win oa-owner">
        <div className="oa-wh">
          <span>
            {tx("Luis · this week")}
          </span>
          <span className="oa-xs">
            {tx("owner view · example")}
          </span>
        </div>
        <div className="oa-cal2">
          <div className="oa-ch"></div>
          <div className="oa-ch">
            {tx("Thu 16")}
          </div>
          <div className="oa-ch oa-on">
            {tx("Fri 17")}
          </div>
          <div className="oa-ch">
            {tx("Sat 18")}
          </div>
          <div className="oa-ct">
            {"9:00"}
          </div>
          <div className="oa-cs">
            <span className="oa-bkg">
              {tx("Omar · fade")}
            </span>
          </div>
          <div className="oa-cs">
            <span className="oa-bkg">
              {tx("Andre · cut")}
            </span>
          </div>
          <div className="oa-cs">
            <span className="oa-bkg">
              {tx("Walk-in")}
            </span>
          </div>
          <div className="oa-ct">
            {"10:30"}
          </div>
          <div className="oa-cs">
            <span className="oa-bkg">
              {tx("Mateo · cut + beard")}
            </span>
          </div>
          <div className="oa-cs"></div>
          <div className="oa-cs">
            <span className="oa-bkg">
              {tx("Nico · fade")}
            </span>
          </div>
          <div className="oa-ct">
            {"1:00"}
          </div>
          <div className="oa-cs"></div>
          <div className="oa-cs">
            <span className="oa-bkg">
              {tx("Luis P. · cut")}
            </span>
          </div>
          <div className="oa-cs">
            <span className="oa-bkg">
              {tx("Sam · kids cut")}
            </span>
          </div>
          <div className="oa-ct">
            {"4:30"}
          </div>
          <div className="oa-cs">
            <span className="oa-bkg">
              {tx("Ray · fade")}
            </span>
          </div>
          <div className="oa-cs">
            <span className="oa-bkg oa-gold2">
              {tx("Carlos · haircut")}
            </span>
          </div>
          <div className="oa-cs"></div>
        </div>
        <div className="oa-agf">
          <span>
            {tx("Reminders go out the day before")}
          </span>
          <span className="oa-gch">
            {tx("No-shows down")}
          </span>
        </div>
      </div>
      <span className="oa-pcap">
        {tx("Booking app for repeat clients, client and owner views. Concept.")}
      </span>
    </div>
  );
}

const DEMOS = { wa: DemoWa, auto: DemoAuto, crm: DemoCrm, app: DemoApp };

export function Tour() {
  const tx = useTx();
  const [tab, setTab] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();

  // Tabs advance on their own; picking one restarts the clock.
  const arm = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setTab((t) => (t + 1) % TABS.length), 7000);
  }, []);
  useEffect(() => {
    arm();
    return () => clearInterval(timer.current);
  }, [arm]);

  const pick = (i: number) => {
    setTab(i);
    arm();
  };
  const active = TABS[tab];
  const Demo = active.kind ? DEMOS[active.kind] : null;

  return (
    <div className="oa-sec" style={{ paddingTop: 0 }}>
      <div className="oa-wrap">
        <Link className="oa-sl oa-rv" href="/services">
          {tx("Services")} <span>›</span>
        </Link>
        <h2 className="oa-serif oa-h2 oa-rv oa-rv2" style={{ maxWidth: 760 }}>
          {tx("What it looks like when it")} <span className="oa-em">{tx("runs without you.")}</span>
        </h2>
        <div className="oa-tour">
          <div role="tablist">
            {TABS.map((t, i) => (
              <div
                key={t.title}
                role="tab"
                tabIndex={0}
                aria-selected={i === tab}
                className={`oa-tab${i === tab ? " oa-on" : ""}`}
                onClick={() => pick(i)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && pick(i)}
              >
                <p className="oa-tt">{tx(t.title)}</p>
                <div className="oa-tdw">
                  <div className="oa-tdi">
                    <p className="oa-tdp">{tx(t.desc)}</p>
                  </div>
                </div>
                {i === tab && <div className="oa-prog" />}
              </div>
            ))}
          </div>
          <div className="oa-demo">
            {Demo && <Demo />}
            {active.shot && (
              <div key={tab} className="oa-dpad oa-col" style={{ gap: 14 }}>
                <img className="oa-dimg" src={active.shot.src} alt={active.shot.alt} loading="lazy" decoding="async" />
                <span className="oa-sm">{tx(active.shot.cap)}</span>
              </div>
            )}
          </div>
        </div>
        <div className="oa-cline oa-rv">
          <p className="oa-serif">
            {tx("Not sure which one you need?")}{" "}
            <span className="oa-em">
              {tx("That's what the call is for.")}
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
