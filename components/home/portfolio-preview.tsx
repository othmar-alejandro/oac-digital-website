"use client";

import { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectItem } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PortfolioPreviewProps {
  title?: string;
  subtitle?: string;
  projects?: ProjectItem[];
}

const defaultProjects: ProjectItem[] = [
  {
    title: "Food Delivery App",
    description: "A modern mobile app for ordering food from local restaurants with real-time tracking and secure payments.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: ["UI/UX Design", "Mobile Development", "Backend API"],
    link: "/portfolio/food-delivery-app",
  },
  {
    title: "Digital Wallet",
    description: "A secure financial platform enabling users to manage transactions, investments, and cryptocurrency assets.",
    image: "https://images.pexels.com/photos/6694544/pexels-photo-6694544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: ["Fintech", "Security", "Blockchain"],
    link: "/portfolio/digital-wallet",
  },
];

export function PortfolioPreview({
  title = "Our Works",
  subtitle = "Our portfolio speaks for itself. Explore our latest projects showcasing our expertise and creative solutions.",
  projects = defaultProjects,
}: PortfolioPreviewProps) {
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            className={index === activeIndex ? "scale-105 z-10" : ""}
          />
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-black">
          <Link href="/portfolio">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}