import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { UseCasesIndex } from "@/components/pages/use-case-pages";
import { pageMeta } from "@/lib/page-meta";

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props) {
  return pageMeta(locale, "/use-cases", "Use cases", "Twenty moments from a normal day in four trades, and the system that handles each one. Two are built for clients. The rest are marked Concept.");
}

export default function UseCases({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return (
    <Layout>
      <UseCasesIndex />
    </Layout>
  );
}
