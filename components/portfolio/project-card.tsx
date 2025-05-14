"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import { useTranslations } from "next-intl";
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
  const t = useTranslations("PortfolioPage"); // Use PortfolioPage namespace for common text
  const isExternalLink = project.link.startsWith('http');

  return (
    <Card
      className={cn(
        "overflow-hidden group cursor-pointer flex flex-col h-full",
        "transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1", // Enhanced hover effect
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
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className="bg-accent text-black px-6 py-2 rounded-md font-medium flex items-center"
          >
            {t('viewProjectButton')} <ArrowRight size={16} className="ml-2" /> {/* Use translation */}
          </Link>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-grow"> {/* Added flex flex-col flex-grow */}
        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p> {/* Added flex-grow */}
        <div className="flex flex-wrap gap-2 mt-auto"> {/* Added mt-auto to push to bottom */}
          {project.services.map((service, index) => (
            <Badge key={index} variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90"> {/* More vibrant badges */}
              {service}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
