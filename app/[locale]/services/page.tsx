"use client";

import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ServiceDetail } from "@/components/services/service-detail";
import { useTranslations } from "next-intl";
import { ServiceItem } from "@/types";
import { CTASection } from "@/components/home/cta-section";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import ServiceSchema from "@/components/shared/ServiceSchema";
import Head from "next/head";

// Function to generate services using translations
const getServices = (t: Function): ServiceItem[] => [
  {
    id: "webDev", // Unique ID for key generation
    icon: "🖥️",
    image: "/images/website-building-oac.jpg", // Added image
    title: t('webDev.title'),
    description: t('webDev.description'),
    features: [
      t('webDev.features.0'),
      t('webDev.features.1'),
      t('webDev.features.2'),
      t('webDev.features.3'),
      t('webDev.features.4'),
    ],
  },
  {
    id: "seo",
    icon: "🔍",
    image: "/images/seo-oac.jpg", // Added image
    title: t('seo.title'),
    description: t('seo.description'),
    features: [
      t('seo.features.0'),
      t('seo.features.1'),
      t('seo.features.2'),
      t('seo.features.3'),
      t('seo.features.4'),
    ],
  },
  {
    id: "saas",
    icon: "⚙️", // Placeholder icon
    image: "/images/oac-ai-coding.jpg", // Added image
    title: t('saas.title'),
    description: t('saas.description'),
    features: [
      t('saas.features.0'),
      t('saas.features.1'),
      t('saas.features.2'),
      t('saas.features.3'),
      t('saas.features.4'),
    ],
  },
  {
    id: "marketingAutomation",
    icon: "📈",
    image: "/images/digital-marketing-oac.jpg", // Added image
    title: t('marketingAutomation.title'),
    description: t('marketingAutomation.description'),
    features: [
      t('marketingAutomation.features.0'),
      t('marketingAutomation.features.1'),
      t('marketingAutomation.features.2'),
      t('marketingAutomation.features.3'),
      t('marketingAutomation.features.4'),
    ],
  },
];

export default function Services({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("ServicesPage");
  const services = getServices(t);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentHeaderRef = headerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our Services - OAC Digital</title>
        <meta
          name="description"
          content="Explore the comprehensive digital marketing services offered by OAC Digital, including web development, SEO, SaaS solutions, and marketing automation."
        />
        {services.map((service) => (
          <ServiceSchema
            key={service.id}
            pageUrl={`https://oac-digital.com/services#${service.id}`}
            serviceName={service.title}
            serviceDescription={service.description}
            serviceCategory={service.title}
          />
        ))}
      </Head>
      <Layout>
        <SectionWrapper
          bgColor="dark"
          className="pt-32 md:pt-40 relative bg-cover bg-center bg-[url('/images/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative.jpg')]"
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div ref={headerRef} className="text-center mb-16 opacity-0 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">{t('title')}</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper bgColor="light">
          <div className="max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceDetail
                key={service.id}
                service={service}
                index={index}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </SectionWrapper>

        <FaqAccordion />

        <CTASection />
      </Layout>
    </>
  );
}
