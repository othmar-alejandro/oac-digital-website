import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { ServicePageView } from "@/components/pages/service-pages";
import { LOCALES, pageMeta } from "@/lib/page-meta";
import { SERVICES } from "@/lib/services";

type Props = { params: { locale: string; service: string } };

const find = (slug: string) => SERVICES.find((s) => s.slug === slug);

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => SERVICES.map((s) => ({ locale, service: s.slug })));
}

export function generateMetadata({ params: { locale, service } }: Props) {
  const s = find(service);
  return s ? pageMeta(locale, `/services/${s.slug}`, s.title, s.desc) : {};
}

export default function ServicePage({ params: { locale, service } }: Props) {
  setRequestLocale(locale);
  const s = find(service);
  // Old slugs (ai-solutions, digital-marketing) only have city pages under them.
  if (!s) notFound();
  return (
    <Layout>
      <ServicePageView slug={s.slug} />
    </Layout>
  );
}
