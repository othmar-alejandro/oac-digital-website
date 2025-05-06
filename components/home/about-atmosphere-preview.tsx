"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { cn } from "@/lib/utils";

interface AboutAtmospherePreviewProps {
  title?: string;
  subtitle?: string;
  images?: string[];
}

const defaultImages = [
  "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export function AboutAtmospherePreview({
  title = "See claw",
  subtitle = "creative atmosphere",
  images = defaultImages,
}: AboutAtmospherePreviewProps) {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const imageElements = document.querySelectorAll(".image-item");
    imageElements.forEach((el) => observer.observe(el));
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      imageElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <SectionWrapper bgColor="dark" id="atmosphere">
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h2>
        <p className="text-2xl text-accent">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "image-item opacity-0 relative h-64 md:h-80 rounded-md overflow-hidden",
              "transition-transform duration-500 hover:scale-105"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <Image
              src={image}
              alt={`Creative atmosphere ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}