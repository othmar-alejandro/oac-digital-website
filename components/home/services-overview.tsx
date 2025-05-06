"use client";

import { useEffect, useRef } from "react";
import { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServicesOverviewProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    title: "Website Development",
    description: "We create responsive, user-friendly websites that engage visitors and drive conversions using the latest technologies and best practices.",
    icon: "🖥️",
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing processes and increase efficiency with our tailored marketing automation solutions that nurture leads and boost ROI.",
    icon: "📈",
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and drive organic traffic with our comprehensive SEO strategies designed to rank your business higher in search results.",
    icon: "🔍",
  },
];

export function ServicesOverview({
  title = "Our Services",
  subtitle = "We help businesses transform their digital presence with strategic solutions tailored to their unique needs.",
  services = defaultServices,
}: ServicesOverviewProps) {
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={cn(
              "service-item bg-white p-8 rounded-lg shadow-md opacity-0",
              "transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <Link 
              href={`/services#${service.title.toLowerCase().replace(/ /g, "-")}`}
              className="text-accent hover:text-accent-dark font-medium inline-flex items-center"
            >
              Learn More <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-black">
          <Link href="/services">
            View All Services <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}