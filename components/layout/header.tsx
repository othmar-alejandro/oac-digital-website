"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { CONSULT_HREF, NAV_LINKS, SERVICE_GROUPS, SERVICES_HREF } from "./nav-data";

export function Arrow() {
  return (
    <span className="oa-arr" aria-hidden="true">
      <span className="oa-arrin">→</span>
    </span>
  );
}

export function Header() {
  const tx = useTx();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenu(false), [pathname]);

  // Dark is the default theme, so render dark until the stored choice is known.
  const dark = !mounted || resolvedTheme !== "light";
  // Only the homepage hero is designed to sit under a transparent bar.
  const solid = scrolled || menu || pathname !== "/";
  const otherLocale = locale === "en" ? "es" : "en";

  const switchLocale = () => router.replace(pathname, { locale: otherLocale });
  const toggleTheme = () => setTheme(dark ? "light" : "dark");

  const langButton = (
    <button className="oa-langb" onClick={switchLocale} aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}>
      {otherLocale.toUpperCase()}
    </button>
  );
  const themeButton = (
    <button className="oa-tog" onClick={toggleTheme}>
      {tx(dark ? "Light" : "Dark")}
    </button>
  );

  return (
    <>
      <header className={`oa oa-nav${solid ? " oa-on" : ""}`}>
        <div className="oa-wrap" style={{ position: "relative" }}>
          <div className="oa-row oa-navin">
            <Link href="/" aria-label="OAC Digital Innovations">
              <Image className="oa-lg" src="/images/home/logo-sig.png" width={800} height={277} alt="OAC Digital Innovations" priority />
            </Link>

            <nav className="oa-links" aria-label="Main">
              <div className="oa-svc">
                <Link className="oa-lk" href={SERVICES_HREF} style={{ display: "block" }}>
                  {tx("Services")}
                </Link>
                <div className="oa-mega">
                  <div className="oa-megain">
                    {SERVICE_GROUPS.map((group, i) => (
                      <div key={group.title} className={`oa-mcol${i === 0 ? " oa-mcol1" : ""}`}>
                        <p className="oa-mh">{tx(group.title)}</p>
                        {group.items.map((item) => (
                          <Link key={item.title} className="oa-mi" href={SERVICES_HREF}>
                            <p className="oa-mt">{tx(item.title)}</p>
                            <p className="oa-md">{tx(item.desc)}</p>
                          </Link>
                        ))}
                      </div>
                    ))}
                    <div className="oa-mcol oa-col oa-mask">
                      <div>
                        <p className="oa-mh" style={{ color: "inherit", opacity: 0.75 }}>
                          {tx("Not sure what you need?")}
                        </p>
                        <p className="oa-serif" style={{ fontSize: 27, lineHeight: 1.15, margin: 0 }}>
                          {tx("Tell us what's slowing you down. We'll tell you what we'd build first.")}
                        </p>
                      </div>
                      <Link className="oa-pill" style={{ alignSelf: "flex-start" }} href={CONSULT_HREF}>
                        {tx("Get my free consultation")}
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} className="oa-lk" href={link.href}>
                  {tx(link.title)}
                </Link>
              ))}
            </nav>

            <div className="oa-row oa-navr" style={{ gap: 16 }}>
              {langButton}
              {themeButton}
              <Link className="oa-pill oa-navpill" href={CONSULT_HREF}>
                {tx("Free consultation")}
                <Arrow />
              </Link>
              <button className="oa-burger" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}>
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`oa oa-drawer${menu ? " oa-open" : ""}`} aria-hidden={!menu}>
        {SERVICE_GROUPS.map((group) => (
          <div key={group.title} className="oa-dgrp">
            <span className="oa-dh">{tx(group.title)}</span>
            {group.items.map((item) => (
              <Link key={item.title} href={SERVICES_HREF}>
                {tx(item.title)}
              </Link>
            ))}
          </div>
        ))}
        <div className="oa-dlinks">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {tx(link.title)}
            </Link>
          ))}
        </div>
        <div className="oa-row" style={{ gap: 10 }}>
          {langButton}
          {themeButton}
        </div>
        <Link className="oa-pill" style={{ justifyContent: "center" }} href={CONSULT_HREF}>
          {tx("Get my free consultation")}
          <Arrow />
        </Link>
      </div>
    </>
  );
}
