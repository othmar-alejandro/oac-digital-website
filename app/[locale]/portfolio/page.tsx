"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectItem } from "@/types";
import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale

// Define keys for projects
const projectKeys = [
  'foodApp',
  'digitalWallet',
  'eLearning',
  'fitnessTracker',
  'realEstate',
  'socialDashboard',
];

// Hardcoded images and links for now
const projectMeta: { [key: string]: { image: string; link: string } } = {
  foodApp: {
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/portfolio/food-delivery-app",
  },
  digitalWallet: {
    image: "https://images.pexels.com/photos/6694544/pexels-photo-6694544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/portfolio/digital-wallet",
  },
  eLearning: {
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/portfolio/e-learning-platform",
  },
  fitnessTracker: {
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/portfolio/fitness-tracker",
  },
  realEstate: {
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/portfolio/real-estate-marketplace",
  },
  socialDashboard: {
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/portfolio/social-media-dashboard",
  },
};

// Function to generate projects using translations
const getProjects = (t: Function): ProjectItem[] => projectKeys.map(key => ({
  id: key, // Use key as id
  title: t(`projects.${key}.title`),
  description: t(`projects.${key}.description`),
  services: [
    t(`projects.${key}.services.0`),
    t(`projects.${key}.services.1`),
    t(`projects.${key}.services.2`), // Assuming 3 services per project for now
  ],
  image: projectMeta[key].image,
  link: projectMeta[key].link,
}));


export default function Portfolio({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("PortfolioPage"); // Initialize translations
  const projects = getProjects(t); // Get translated projects
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{t('title')}</h1> {/* Use translation */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
