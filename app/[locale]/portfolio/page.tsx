"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectItem } from "@/types";
// import { setRequestLocale } from 'next-intl/server'; // Removed as it's not used

// Function to generate projects using new images and generated content
const getProjects = (t: Function): ProjectItem[] => [
  {
    id: "ai-podcast-creator",
    title: "AI Podcast Creator",
    description: "An innovative application that leverages AI to automate podcast creation, transcription, and distribution.",
    image: "/images/ai-podcast-creator-application-portfolio.png",
    services: ["AI Development", "SaaS Platform", "Audio Engineering"],
    link: "/portfolio/ai-podcast-creator",
  },
  {
    id: "auto-transport-website",
    title: "Auto Transport Website",
    description: "A sleek and modern website for an auto transport logistics company, featuring instant quotes and shipment tracking.",
    image: "/images/auto-transport-website-portfolio.png",
    services: ["Web Design", "Web Development", "API Integration"],
    link: "/portfolio/auto-transport-website",
  },
  {
    id: "ai-crm-dashboard", // Updated ID
    title: "AI-Powered CRM Dashboard", // Updated Title
    description: "An intelligent CRM dashboard leveraging AI to provide actionable insights, automate sales workflows, and enhance customer relationship management.", // Updated Description
    image: "/images/dashboard-asciende-capital-group-portfolio.jpg",
    services: ["AI Development", "CRM Solutions", "Dashboard UI/UX"], // Updated Services
    link: "/portfolio/ai-crm-dashboard", // Updated Link
  },
  {
    id: "general-contractor-website",
    title: "General Contractor Website",
    description: "A professional website for a general contractor, showcasing past projects, services, and client testimonials.",
    image: "/images/general-contractor-website-porfolio.png", // Assuming typo, using "porfolio" as in filename
    services: ["Web Development", "Portfolio Showcase", "Lead Generation"],
    link: "/portfolio/general-contractor-website",
  },
  {
    id: "real-estate-website",
    title: "Real Estate Platform",
    description: "A feature-rich real estate platform with advanced search, property listings, and agent management tools.",
    image: "/images/real-estate-website-portfolio.png",
    services: ["Web Platform Development", "UX/UI Design", "Map Integration"],
    link: "/portfolio/real-estate-platform",
  },
];

export default function Portfolio({ params: { locale } }: { params: { locale: string } }) {
  // setRequestLocale(locale); // Removed as this is a Client Component

  const t = useTranslations("PortfolioPage"); // This will be used for page title, subtitle etc.
  const projects = getProjects(t); // Projects now have hardcoded text, t can be used for other parts if needed
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
        bgColor="dark" // Added back to satisfy TypeScript, bg-image will override visually
        className="pt-32 md:pt-40 relative bg-cover bg-center bg-[url('/images/cosmic-background-with-colorful-laser-lights-perfect-digital-wallpaper.jpg')]"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* This creates the fade effect */}
        <div ref={headerRef} className="text-center mb-16 opacity-0 relative z-10"> {/* Ensure content is above overlay */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">{t('title')}</h1> {/* Ensure text is white for contrast */}
          <p className="text-xl text-gray-200 max-w-3xl mx-auto"> {/* Ensure text is light for contrast */}
            {t('subtitle')} {/* Use translation */}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper bgColor="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            // Assuming ProjectCard will be refactored
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
