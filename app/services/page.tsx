"use client";

import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ServiceDetail } from "@/components/services/service-detail";
import { ServiceItem } from "@/types";
import { CTASection } from "@/components/home/cta-section";

const services: ServiceItem[] = [
  {
    title: "Website Development",
    description: "We create responsive, user-friendly websites that engage visitors and drive conversions using the latest technologies and best practices.",
    icon: "🖥️",
    features: [
      "Custom website design and development",
      "E-commerce solutions",
      "Progressive Web Applications (PWAs)",
      "Responsive design for all devices",
      "Content Management Systems (CMS)",
      "Web hosting and maintenance",
    ],
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing processes and increase efficiency with our tailored marketing automation solutions that nurture leads and boost ROI.",
    icon: "📈",
    features: [
      "Email marketing automation",
      "Lead generation and nurturing",
      "CRM integration",
      "Customer journey mapping",
      "Personalized content delivery",
      "Performance analytics and reporting",
    ],
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and drive organic traffic with our comprehensive SEO strategies designed to rank your business higher in search results.",
    icon: "🔍",
    features: [
      "Keyword research and analysis",
      "On-page and off-page optimization",
      "Content strategy and creation",
      "Technical SEO improvements",
      "Local SEO for businesses",
      "Regular performance reporting",
    ],
  },
];

export default function Services() {
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
      <SectionWrapper bgColor="dark" className="pt-32 md:pt-40">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive digital solutions tailored to your specific needs, 
            helping your business thrive in the digital landscape.
          </p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper bgColor="light">
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceDetail 
              key={index} 
              service={service} 
              index={index} 
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </SectionWrapper>
      
      <CTASection />
    </Layout>
  );
}