"use client";

"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import { ArrowRight } from "lucide-react";

// Function to generate projects using translations
// Note: Images and links would ideally come from a CMS or data source
const getProjects = (t: Function): ProjectItem[] => [
  {
    id: "tenx-financial",
    title: "10X Financial Services Website",
    description: "Empowering business growth through personalized funding solutions.",
    image: "/images/10X_Financial_Services_Website_by_OAC.png",
    services: ["Financial Services", "Web Development", "Funding Solutions"],
    link: "https://10xfinancial.net/",
  },
  {
    id: "ai-podcast-creator",
    title: "AI Podcast Creator", // Generated from filename
    description: "An innovative application that leverages AI to automate podcast creation and production.", // Generated description
    image: "/images/ai-podcast-creator-application-portfolio.png",
    services: ["AI Development", "Application Design", "Audio Processing"], // Example services
    link: "/portfolio/ai-podcast-creator",
  },
  {
    id: "auto-transport-website",
    title: "Auto Transport Website", // Generated from filename
    description: "A modern website for an auto transport company, featuring vehicle tracking and quote generation.", // Generated description
    image: "/images/auto-transport-website-portfolio.png",
    services: ["Web Design", "Frontend Development", "Logistics Integration"], // Example services
    link: "https://www.shipmycartoday.com/",
  },
  {
    id: "ai-crm-dashboard",
    title: "AI-Powered CRM Dashboard",
    description: "An intelligent CRM dashboard leveraging AI to provide actionable insights and automate sales workflows.", // Slightly shorter for preview
    image: "/images/dashboard-asciende-capital-group-portfolio.jpg",
    services: ["AI Development", "CRM Solutions", "Dashboard UI/UX"],
    link: "/portfolio/ai-crm-dashboard",
  },
  // Add more projects here for the main portfolio page later
  // The real-estate-website is still available on the main portfolio page
];


export function PortfolioPreview() {
  const t = useTranslations("HomePage.portfolio"); // Using existing translation scope, can be adjusted
  const projects = getProjects(t); // Get projects
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the title section

  // Display all defined projects in the preview carousel
  const previewProjects = projects; // Changed from projects.slice(0, 3)
  const duplicatedProjects = [...previewProjects, ...previewProjects]; // Duplicate for seamless scroll

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
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

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <SectionWrapper bgColor="light" id="portfolio">
      <div ref={sectionRef} className="text-center mb-16 opacity-0"> {/* Added ref and opacity-0 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{t('title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden mb-16">
        <div className="flex animate-scroll-left">
          {duplicatedProjects.map((project, index) => (
            <div key={`${project.id}-${index}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-black">
          <Link href="/portfolio">
            {t('viewAllButton')} <ArrowRight size={16} className="ml-2" /> {/* Use translation */}
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
