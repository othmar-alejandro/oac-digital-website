import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { AboutV2 } from "@/components/about/about-v2";

const META = {
  en: {
    title: { absolute: "About | OAC Digital Innovations" },
    description:
      "Othmar Casilla has been in business since 2016 and is an artificial intelligence graduate from Miami Dade College. OAC Digital Innovations helps local businesses in South Florida get organized and grow.",
  },
  es: {
    title: { absolute: "Nosotros | OAC Digital Innovations" },
    description:
      "Othmar Casilla está en los negocios desde 2016 y es graduado en inteligencia artificial de Miami Dade College. OAC Digital Innovations ayuda a los negocios locales del sur de Florida a organizarse y crecer.",
  },
};

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === "es" ? META.es : META.en;
}

export default function About() {
  return (
    <Layout>
      <AboutV2 />
    </Layout>
  );
}
