import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { PlaceView } from "@/components/pages/location-pages";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { translate } from "@/lib/home-i18n";
import { DISTRICTS, cityBySlug, cityHref, districtBySlug } from "@/lib/locations";
import { LOCALES, pageMeta } from "@/lib/page-meta";

type Props = { params: { locale: string; district: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => DISTRICTS.map((d) => ({ locale, district: d.slug })));
}

export function generateMetadata({ params: { locale, district } }: Props) {
  const d = districtBySlug(district);
  if (!d) return {};
  const tx = translate(locale);
  return pageMeta(locale, `/areas/${d.slug}`, `${tx("Websites, AI and automation in")} ${d.name}`, `${tx("Websites that bring calls, search that finds you, and agents and automations that answer. For local businesses.")}`);
}

export default function DistrictPage({ params: { locale, district } }: Props) {
  setRequestLocale(locale);
  const d = districtBySlug(district);
  if (!d) notFound();
  const city = cityBySlug(d.city)!;
  const base = `https://www.oacdigital.biz/${locale}`;
  const siblings = DISTRICTS.filter((x) => x.slug !== d.slug && cityBySlug(x.city)!.county === city.county);
  return (
    <Layout>
      <BreadcrumbSchema items={[{ name: "Home", url: base }, { name: city.name, url: `${base}${cityHref(city)}` }, { name: d.name, url: `${base}/areas/${d.slug}` }]} />
      <PlaceView citySlug={city.slug} districtName={d.name} siblings={siblings} />
    </Layout>
  );
}
