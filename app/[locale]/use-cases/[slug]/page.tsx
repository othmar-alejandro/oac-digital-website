import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { UseCasePageView } from "@/components/pages/use-case-pages";
import { LOCALES, pageMeta } from "@/lib/page-meta";
import { USE_CASES } from "@/lib/use-cases";

type Props = { params: { locale: string; slug: string } };

const find = (slug: string) => USE_CASES.find((u) => u.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => USE_CASES.map((u) => ({ locale, slug: u.slug })));
}

export function generateMetadata({ params: { locale, slug } }: Props) {
  const u = find(slug);
  return u ? pageMeta(locale, `/use-cases/${u.slug}`, u.title, u.moment) : {};
}

export default function UseCasePage({ params: { locale, slug } }: Props) {
  setRequestLocale(locale);
  if (!find(slug)) notFound();
  return (
    <Layout>
      <UseCasePageView slug={slug} />
    </Layout>
  );
}
