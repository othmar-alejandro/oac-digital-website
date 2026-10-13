"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useTx } from "@/lib/home-i18n";
import { CONTACT, NAV_LINKS, SERVICE_GROUPS, SERVICES_HREF } from "./nav-data";

// Internal links kept for SEO: locations, industries, districts and resources.
const footerSections = [
  {
    key: 'locations', // Popular locations
    items: [
      { key: 'miami', href: "/services/web-design/miami" },
      { key: 'fortLauderdale', href: "/services/web-design/fort-lauderdale" },
      { key: 'westPalmBeach', href: "/services/web-design/west-palm-beach" },
      { key: 'bocaRaton', href: "/services/web-design/boca-raton" },
      { key: 'hollywood', href: "/services/web-design/hollywood" },
    ],
  },
  {
    key: 'industries',
    items: [
      { key: 'healthcare', href: "/industries/healthcare" },
      { key: 'realEstate', href: "/industries/real-estate" },
      { key: 'legal', href: "/industries/legal" },
      { key: 'restaurants', href: "/industries/restaurants" },
      { key: 'retail', href: "/industries/retail" },
    ],
  },
  {
    key: 'businessDistricts',
    items: [
      { key: 'brickell', href: "/areas/brickell" },
      { key: 'wynwood', href: "/areas/wynwood" },
      { key: 'downtownMiami', href: "/areas/downtown-miami" },
      { key: 'southBeach', href: "/areas/south-beach" },
      { key: 'lasOlas', href: "/areas/las-olas" },
    ],
  },
  {
    key: 'resources', // Key for section title translation
    items: [
      { key: 'faqs', href: "/resources/faqs" },
      { key: 'comparisons', href: "/compare/shopify-vs-woocommerce" },
      { key: 'servicePackages', href: "/packages/web-design-and-seo" },
      { key: 'privacyPolicy', href: "/privacy-policy" },
      { key: 'termsOfService', href: "/terms-of-service" },
    ],
  },
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/oacdigital_/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61556018600563" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-alejandro-1a39bb2a3/" },
  { label: "GitHub", href: "https://github.com/Genuino-01" },
];

export function Footer() {
  const t = useTranslations("Footer");
  const tx = useTx();
  // Section titles in the message files carry a leading emoji; the redesign drops it.
  const plain = (s: string) => s.replace(/^[^A-Za-zÀ-ÿ]+/, "");

  return (
    <footer className="oa oa-page">
      <div className="oa-wrap oa-foot">
        <div className="oa-fg">
          <div className="oa-col oa-fgw" style={{ lineHeight: 1.5, gap: 14 }}>
            <span className="oa-mut" style={{ maxWidth: 300 }}>
              {tx("Websites, AI agents and automations for South Florida businesses.")}
            </span>
            <div className="oa-row" style={{ gap: 16, flexWrap: "wrap" }}>
              {SOCIAL.map((s) => (
                <a key={s.label} className="oa-sm" href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="oa-col">
            <span className="oa-fh">{tx("Services")}</span>
            {SERVICE_GROUPS.map((g) => (
              <Link key={g.title} href={SERVICES_HREF}>
                {tx(g.title)}
              </Link>
            ))}
          </div>
          <div className="oa-col">
            <span className="oa-fh">{tx("Company")}</span>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {tx(l.title)}
              </Link>
            ))}
            <Link href="/blog">{t("sections.company.items.blog")}</Link>
            <Link href="/contact">{t("sections.company.items.contact")}</Link>
          </div>
          <div className="oa-col">
            <span className="oa-fh">{tx("Contact")}</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer">
              {CONTACT.instagram}
            </a>
          </div>
        </div>

        <div className="oa-seo">
          {footerSections.map((section) => (
            <div key={section.key} className="oa-col">
              <span className="oa-fh">{plain(t(`sections.${section.key}.title`))}</span>
              {section.items.map((item) => (
                <Link key={item.key} href={item.href}>
                  {t(`sections.${section.key}.items.${item.key}`)}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <Image className="oa-flogo" src="/images/home/logo-sig.png" width={800} height={277} alt="OAC Digital Innovations" />

        <div className="oa-row oa-fine oa-mut">
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          <span className="oa-row" style={{ gap: 20 }}>
            <Link href="/privacy-policy">{t("privacyPolicy")}</Link>
            <Link href="/terms-of-service">{t("termsOfService")}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
