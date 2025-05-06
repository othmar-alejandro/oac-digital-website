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
    id: "foodApp", // Unique ID
    title: t('projects.foodApp.title'),
    description: t('projects.foodApp.description'),
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder
    services: [t('projects.foodApp.services.0'), t('projects.foodApp.services.1'), t('projects.foodApp.services.2')],
    link: "/portfolio/food-delivery-app", // Placeholder link
  },
  {
    id: "digitalWallet",
    title: t('projects.digitalWallet.title'),
    description: t('projects.digitalWallet.description'),
    image: "https://images.pexels.com/photos/6694544/pexels-photo-6694544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder
    services: [t('projects.digitalWallet.services.0'), t('projects.digitalWallet.services.1'), t('projects.digitalWallet.services.2')],
    link: "/portfolio/digital-wallet", // Placeholder link
  },
  // Add more projects as needed
];


export function PortfolioPreview() { // Removed props
  const t = useTranslations("HomePage.portfolio"); // Initialize translations
  const projects = getProjects(t); // Get translated projects
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <SectionWrapper bgColor="light" id="portfolio">
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{t('title')}</h2> {/* Use translation */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p> {/* Use translation */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id} // Use project id as key
            project={project}
            className={index === activeIndex ? "scale-105 z-10" : ""}
          />
        ))}
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
