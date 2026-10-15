import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { CaseStudyView } from "@/components/pages/work-pages";
import { LOCALES, pageMeta } from "@/lib/page-meta";
import { CASE_STUDIES } from "@/lib/work";

type Props = { params: { locale: string; slug: string } };

const find = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => CASE_STUDIES.map((c) => ({ locale, slug: c.slug })));
}

export function generateMetadata({ params: { locale, slug } }: Props) {
  const c = find(slug);
  return c ? pageMeta(locale, `/portfolio/${c.slug}`, c.client, c.sub) : {};
}

export default function CaseStudyPage({ params: { locale, slug } }: Props) {
  setRequestLocale(locale);
  if (!find(slug)) notFound();
  return (
    <Layout>
      <CaseStudyView slug={slug} />
    </Layout>
  );
}
