import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { HomeV2 } from "@/components/home/v2/home";

const META = {
  en: {
    title: "OAC Digital Innovations | AI agency for local businesses in Miami",
    description:
      "We set up AI agents, automations, websites and search so local businesses in South Florida get found, answer every lead and keep their clients. Free consultation, in English or Spanish.",
  },
  es: {
    title: "OAC Digital Innovations | Agencia de IA para negocios locales en Miami",
    description:
      "Montamos agentes de IA, automatizaciones, sitios web y búsqueda para que los negocios locales del sur de Florida aparezcan, respondan cada contacto y conserven a sus clientes. Consulta gratis, en español o inglés.",
  },
};

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === "es" ? META.es : META.en;
}

export default function Home() {
  return (
    <Layout>
      <HomeV2 />
    </Layout>
  );
}
