import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { FaqPageView } from "@/components/pages/faq-page";
import { pageMeta } from "@/lib/page-meta";

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props) {
  return pageMeta(locale, "/resources/faqs", "Questions people ask", "Short answers about AI agents, search, ownership and the free call.");
}

export default function Faqs({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return (
    <Layout>
      <FaqPageView />
    </Layout>
  );
}
