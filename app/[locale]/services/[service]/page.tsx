import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { CompositeServiceView } from "@/components/pages/location-pages";
import { ServicePageView } from "@/components/pages/service-pages";
import { CITY_SERVICES } from "@/lib/locations";
import { LOCALES, pageMeta } from "@/lib/page-meta";
import { SERVICES } from "@/lib/services";

type Props = { params: { locale: string; service: string } };

const find = (slug: string) => SERVICES.find((s) => s.slug === slug);
// digital-marketing and ai-solutions have no entry in SERVICES: each is a pair of real services.
const composite = (slug: string) => CITY_SERVICES.find((s) => s.slug === slug && s.hubTitle);

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => [...SERVICES.map((s) => s.slug), ...CITY_SERVICES.filter((s) => s.hubTitle).map((s) => s.slug)].map((service) => ({ locale, service })));
}

export function generateMetadata({ params: { locale, service } }: Props) {
  const s = find(service);
  const c = composite(service);
  if (c) return pageMeta(locale, `/services/${c.slug}`, c.noun, c.plain!);
  return s ? pageMeta(locale, `/services/${s.slug}`, s.title, s.desc) : {};
}

export default function ServicePage({ params: { locale, service } }: Props) {
  setRequestLocale(locale);
  const s = find(service);
  const c = composite(service);
  if (c) {
    return (
      <Layout>
        <CompositeServiceView slug={c.slug} />
      </Layout>
    );
  }
  if (!s) notFound();
  return (
    <Layout>
      <ServicePageView slug={s.slug} />
    </Layout>
  );
}
