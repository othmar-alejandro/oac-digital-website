"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useTx } from "@/lib/home-i18n";
import { Arrow } from "@/components/layout/header";
import { NOT_SURE, SLOTS, SV } from "./data";

const STEP_LABELS = ["1 of 4", "2 of 4", "3 of 4", "4 of 4", "Last step", ""];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * One question per screen: name, what they need, website, phone + email, then a time.
 * chisle: nothing is sent or stored yet; wiring to the leads API and the calendar is phase 8.
 */
export function ConsultForm() {
  const tx = useTx();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [picks, setPicks] = useState<number[]>([]);
  const [info, setInfo] = useState(-1);
  const [site, setSite] = useState("");
  const [noSite, setNoSite] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState(-1);
  const [err, setErr] = useState("");
  const card = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  // Focus the field of each new step, but never steal focus on first paint.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    card.current?.querySelector<HTMLInputElement>(".oa-fin:not(:disabled)")?.focus({ preventScroll: true });
  }, [step]);

  const go = (n: number) => {
    setErr("");
    setStep(n);
  };

  const next = (e: FormEvent) => {
    e.preventDefault();
    if (step === 0) return name.trim().length < 2 ? setErr("Tell us your name so we know who to ask for.") : go(1);
    if (step === 1) return picks.length ? go(2) : setErr("Pick at least one, or choose Not sure yet.");
    if (step === 2) return go(3);
    if (step === 3) {
      if (phone.replace(/\D/g, "").length < 7) return setErr("We need a phone number to call you.");
      if (!EMAIL.test(email.trim())) return setErr("That email doesn't look right.");
      go(4);
    }
  };

  const togglePick = (i: number) => {
    setInfo(i);
    setErr("");
    setPicks((p) => {
      if (i === NOT_SURE) return p.includes(i) ? [] : [i];
      const rest = p.filter((x) => x !== NOT_SURE);
      return rest.includes(i) ? rest.filter((x) => x !== i) : [...rest, i];
    });
  };

  const firstName = name.trim().split(" ")[0];
  const picked = slot >= 0 ? SLOTS[slot] : null;

  const actions = (
    <>
      <span className="oa-ferr" role="alert">
        {err && tx(err)}
      </span>
      <div className="oa-row oa-fact">
        <button className="oa-pill oa-fbtn2" type="submit">
          {tx("Continue")}
          <Arrow />
        </button>
        <span className="oa-sm oa-ent">{tx("or press Enter ↵")}</span>
      </div>
    </>
  );

  return (
    <div className="oa-fcard oa-rv oa-rv2" id="consult" ref={card}>
      <div className="oa-pbar">
        <div className={`oa-pb oa-p${step}`} />
      </div>
      <div className="oa-row oa-fhead">
        <button className={`oa-back${step > 0 && step < 5 ? "" : " oa-hid"}`} type="button" onClick={() => go(step - 1)}>
          {tx("← Back")}
        </button>
        <span className="oa-sm">{STEP_LABELS[step] && tx(STEP_LABELS[step])}</span>
      </div>

      {step === 0 && (
        <form className="oa-col oa-fstep" onSubmit={next} noValidate>
          <label className="oa-serif oa-fq2" htmlFor="f-name">
            {tx("First, what's your name?")}
          </label>
          <input id="f-name" className="oa-fin" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          {actions}
        </form>
      )}

      {step === 1 && (
        <form className="oa-col oa-fstep" onSubmit={next} noValidate>
          <span className="oa-sm">
            {tx("Nice to meet you,")} {firstName}
          </span>
          <span className="oa-serif oa-fq2">{tx("What do you need help with?")}</span>
          <span className="oa-sm">{tx("Pick as many as you like.")}</span>
          <div className="oa-svgrid">
            {SV.map(([label], i) => (
              <div key={label} className={`oa-svc2${picks.includes(i) ? " oa-on" : ""}`}>
                <button className="oa-svcb" type="button" aria-pressed={picks.includes(i)} onClick={() => togglePick(i)}>
                  {tx(label)}
                </button>
                <button className="oa-svci" type="button" aria-label={`${tx(label)}: ?`} onClick={() => setInfo(i)}>
                  i
                </button>
              </div>
            ))}
          </div>
          <div className="oa-expl" aria-live="polite">
            {tx(info >= 0 ? SV[info][1] : "Tap the i next to any of them to see what it means, in plain words.")}
          </div>
          {actions}
        </form>
      )}

      {step === 2 && (
        <form className="oa-col oa-fstep" onSubmit={next} noValidate>
          <label className="oa-serif oa-fq2" htmlFor="f-site">
            {tx("Do you have a website?")}
          </label>
          <span className="oa-sm">{tx("Optional. It helps us look before we talk.")}</span>
          <input id="f-site" className="oa-fin" type="text" inputMode="url" placeholder="yourbusiness.com" disabled={noSite} value={noSite ? "" : site} onChange={(e) => setSite(e.target.value)} />
          <button className={`oa-chipb${noSite ? " oa-on" : ""}`} type="button" aria-pressed={noSite} onClick={() => setNoSite(!noSite)}>
            {tx("I don't have one yet")}
          </button>
          {actions}
        </form>
      )}

      {step === 3 && (
        <form className="oa-col oa-fstep" onSubmit={next} noValidate>
          <span className="oa-serif oa-fq2">{tx("Where can we reach you?")}</span>
          <label className="oa-fl2">
            <span>{tx("Phone")}</span>
            <input className="oa-fin" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label className="oa-fl2">
            <span>{tx("Email")}</span>
            <input className="oa-fin" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          {actions}
        </form>
      )}

      {step === 4 && (
        <div className="oa-col oa-fstep">
          <span className="oa-serif oa-fq2">{tx("Got it. Want to pick a time?")}</span>
          <span className="oa-sm" style={{ fontSize: 15 }}>
            {tx("Choose one, or skip it and we'll call you within one business day.")}
          </span>
          <div className="oa-slots">
            {SLOTS.map(([day, time], i) => (
              <button
                key={day + time}
                className="oa-slot"
                type="button"
                onClick={() => {
                  setSlot(i);
                  go(5);
                }}
              >
                <b>{tx(day)}</b>
                <span>{time}</span>
              </button>
            ))}
          </div>
          <button className="oa-skip" type="button" onClick={() => go(5)}>
            {tx("Skip, just call me")}
          </button>
        </div>
      )}

      {step === 5 && (
        <div className="oa-col oa-fstep" style={{ alignItems: "flex-start" }}>
          <span className="oa-ok">{tx("You're in")}</span>
          <span className="oa-serif oa-fq2">
            {tx("Thanks,")} {firstName}
          </span>
          <span className="oa-serif" style={{ fontSize: 28, lineHeight: 1.15 }}>
            {picked ? tx(picked[0]) : tx("We'll call you within one business day.")} {picked && <span style={{ color: "var(--o-gold)" }}>{picked[1]}</span>}
          </span>
          <div className="oa-svgrid">
            {picks.map((i) => (
              <span key={i} className="oa-svc2 oa-on" style={{ padding: "7px 14px", fontSize: 14 }}>
                {tx(SV[i][0])}
              </span>
            ))}
          </div>
          <span className="oa-sm" style={{ fontSize: 15 }}>
            {tx("You'll get a text to confirm. Talk soon.")}
          </span>
        </div>
      )}
    </div>
  );
}
