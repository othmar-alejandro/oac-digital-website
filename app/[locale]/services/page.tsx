"use client";

import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ServiceDetail } from "@/components/services/service-detail";
import { useTranslations } from "next-intl"; // Import useTranslations
import { ServiceItem } from "@/types";
import { CTASection } from "@/components/home/cta-section";
import { FaqAccordion } from "@/components/common/FaqAccordion"; // Import FaqAccordion
// import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale

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
  // Enable static rendering
  // setRequestLocale(locale); // Removed as this is a Client Component

  const t = useTranslations("ServicesPage"); // Initialize translations
  const services = getServices(t); // Get translated services
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <Layout>
      <SectionWrapper
        bgColor="dark" // Visually overridden by bg-image
        className="pt-32 md:pt-40 relative bg-cover bg-center bg-[url('/images/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative.jpg')]"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for text contrast */}
        <div ref={headerRef} className="text-center mb-16 opacity-0 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">{t('title')}</h1> {/* Ensure text is white */}
          <p className="text-xl text-gray-200 max-w-3xl mx-auto"> {/* Ensure text is light gray */}
            {t('description')} {/* Use translation */}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper bgColor="light">
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceDetail
              key={service.id} // Use unique ID as key
              service={service}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </SectionWrapper>

      <FaqAccordion /> {/* Add FAQ section here */}

      <CTASection />
    </Layout>
  );
}
