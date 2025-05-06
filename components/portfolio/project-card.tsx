"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <Card 
      ref={cardRef}
      className={cn(
        "overflow-hidden opacity-0 group cursor-pointer",
        "transition-all duration-500 hover:shadow-xl",
        className
      )}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            href={project.link}
            className="bg-accent text-black px-6 py-2 rounded-md font-medium flex items-center"
          >
            View Project <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.services.map((service, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {service}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}