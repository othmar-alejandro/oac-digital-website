import type { Metadata } from "next";
import { translate } from "./home-i18n";

const BASE = "https://www.oacdigital.biz";

/** Metadata for a redesigned page: translated title and description, canonical and language alternates. */
export function pageMeta(locale: string, path: string, title: string, description: string): Metadata {
  const tx = translate(locale);
  return {
    title: { absolute: `${tx(title)} | OAC Digital Innovations` },
    description: tx(description),
    alternates: {
      canonical: `${BASE}/${locale}${path}`,
      languages: { en: `${BASE}/en${path}`, es: `${BASE}/es${path}` },
    },
  };
}

export const LOCALES = ["en", "es"] as const;
