import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { WorkIndex } from "@/components/pages/work-pages";
import { pageMeta } from "@/lib/page-meta";

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props) {
  return pageMeta(locale, "/portfolio", "Work", "Three contractors, three different problems. Each case study links to the capture behind the result.");
}

export default function Work({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return (
    <Layout>
      <WorkIndex />
    </Layout>
  );
}
