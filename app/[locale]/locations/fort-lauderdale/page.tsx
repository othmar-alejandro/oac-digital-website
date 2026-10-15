import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { PlaceView } from "@/components/pages/location-pages";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { translate } from "@/lib/home-i18n";
import { pageMeta } from "@/lib/page-meta";

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props) {
  const tx = translate(locale);
  return pageMeta(locale, "/locations/fort-lauderdale", `${tx("Websites, AI and automation in")} Fort Lauderdale`, "Websites that bring calls, search that finds you, and agents and automations that answer. For local businesses.");
}

export default function Page({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const base = `https://www.oacdigital.biz/${locale}`;
  return (
    <Layout>
      <BreadcrumbSchema items={[{ name: "Home", url: base }, { name: "Fort Lauderdale", url: `${base}/locations/fort-lauderdale` }]} />
      <PlaceView citySlug="fort-lauderdale" />
    </Layout>
  );
}
