"use client";

import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectItem } from "@/types";

const projects: ProjectItem[] = [
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
  {
    title: "E-Learning Platform",
    description: "A comprehensive platform for online courses, featuring video lectures, quizzes, and student progress tracking.",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: ["Web Development", "UX Design", "Database Architecture"],
    link: "/portfolio/e-learning-platform",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app that helps users track workouts, nutrition, and health goals with detailed analytics and insights.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: ["Mobile Development", "Health Tech", "Data Analytics"],
    link: "/portfolio/fitness-tracker",
  },
  {
    title: "Real Estate Marketplace",
    description: "A platform connecting buyers, sellers, and agents with virtual tours and intelligent property matching.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: ["Web Development", "Virtual Reality", "AI"],
    link: "/portfolio/real-estate-marketplace",
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive tool for businesses to manage and analyze their social media presence across multiple platforms.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    services: ["Marketing Tech", "Data Visualization", "API Integration"],
    link: "/portfolio/social-media-dashboard",
  },
];

export default function Portfolio() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio of projects that showcase our expertise in web development, 
            marketing automation, and SEO optimization.
          </p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper bgColor="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}