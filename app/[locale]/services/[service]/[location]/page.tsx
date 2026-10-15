import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { ServiceCityView } from "@/components/pages/location-pages";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { translate } from "@/lib/home-i18n";
import { CITIES, CITY_SERVICES, cityBySlug, cityService } from "@/lib/locations";
import { LOCALES, pageMeta } from "@/lib/page-meta";
import { SERVICE_PAGES } from "@/lib/service-pages";

type Props = { params: { locale: string; service: string; location: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => CITY_SERVICES.flatMap((s) => CITIES.map((c) => ({ locale, service: s.slug, location: c.slug }))));
}

const plainFor = (slug: string) => {
  const cs = cityService(slug)!;
  return cs.plain ?? SERVICE_PAGES[cs.parts[0]].plain;
};

export function generateMetadata({ params: { locale, service, location } }: Props) {
  const cs = cityService(service);
  const city = cityBySlug(location);
  if (!cs || !city) return {};
  const tx = translate(locale);
  return pageMeta(locale, `/services/${cs.slug}/${city.slug}`, `${tx(`${cs.noun} in`)} ${city.name}, FL`, `${tx(`${cs.noun} in`)} ${city.name}. ${tx(plainFor(cs.slug))}`);
}

export default function ServiceCityPage({ params: { locale, service, location } }: Props) {
  setRequestLocale(locale);
  const cs = cityService(service);
  const city = cityBySlug(location);
  if (!cs || !city) notFound();
  const base = `https://www.oacdigital.biz/${locale}`;
  return (
    <Layout>
      <ServiceSchema service={{ name: `${cs.noun} in ${city.name}`, description: plainFor(cs.slug), serviceType: cs.noun, provider: "OAC Digital Innovations", areaServed: `${city.name}, FL` }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: base },
          { name: "Services", url: `${base}/services` },
          { name: cs.noun, url: `${base}/services/${cs.slug}` },
          { name: city.name, url: `${base}/services/${cs.slug}/${city.slug}` },
        ]}
      />
      <ServiceCityView serviceSlug={cs.slug} citySlug={city.slug} />
    </Layout>
  );
}
