import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { ServicesIndex } from "@/components/pages/service-pages";
import { pageMeta } from "@/lib/page-meta";

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props) {
  return pageMeta(locale, "/services", "Services", "You don't need to know which one you need. Tell us what's slowing you down and we'll tell you what we'd build first.");
}

export default function Services({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return (
    <Layout>
      <ServicesIndex />
    </Layout>
  );
}
