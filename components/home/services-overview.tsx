"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import { ArrowRight } from "lucide-react";

// Function to generate services using translations (similar to ServicesPage)
// We might want to centralize this logic later if needed
const getServices = (t: Function): ServiceItem[] => [
  {
    id: "webDev",
    icon: "🖥️",
    title: t('webDev.title'),
    description: t('webDev.description'),
    // No features needed for overview
  },
  {
    id: "seo",
    icon: "🔍",
    title: t('seo.title'),
    description: t('seo.description'),
  },
  {
    id: "saas",
    icon: "⚙️",
    title: t('saas.title'),
    description: t('saas.description'),
  },
  {
    id: "marketingAutomation",
    icon: "📈",
    title: t('marketingAutomation.title'),
    description: t('marketingAutomation.description'),
  },
];


export function ServicesOverview() { // Removed props as they will come from translations
  const t = useTranslations("ServicesOverview"); // Use specific namespace
  const tServices = useTranslations("ServicesPage"); // Use namespace for service details
  const services = getServices(tServices); // Get translated services
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const serviceElements = document.querySelectorAll(".service-item");
    serviceElements.forEach((el) => observer.observe(el));

    return () => {
      serviceElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <SectionWrapper bgColor="light" id="services">
      <div ref={sectionRef} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{t('title')}</h2> {/* Use translation */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p> {/* Use translation */}
      </div>

      {/* Adjusted grid columns for 4 items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={service.id} // Use service id as key
            className={cn(
              "service-item bg-white p-8 rounded-lg shadow-md opacity-0",
              "transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3> {/* Already translated */}
            <p className="text-gray-600 mb-6">{service.description}</p> {/* Already translated */}
            <Link
              href={`/services#${service.id}`} // Use service id for link
              className="text-accent hover:text-accent-dark font-medium inline-flex items-center"
            >
              {t('learnMore')} <ArrowRight size={16} className="ml-1" /> {/* Use translation */}
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-black">
          <Link href="/services">
            {t('viewAllServices')} <ArrowRight size={16} className="ml-2" /> {/* Use translation */}
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
