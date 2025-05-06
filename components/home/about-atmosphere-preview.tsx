"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Import useTranslations
import { SectionWrapper } from "@/components/common/section-wrapper";
import { cn } from "@/lib/utils";

// Keep images hardcoded for now, ideally from CMS/data source
const defaultImages = [
  "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];


export function AboutAtmospherePreview() { // Removed props
  const t = useTranslations("HomePage.atmosphere"); // Initialize translations
  const images = defaultImages; // Use default images for now
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{t('title')}</h2> {/* Use translation */}
        <p className="text-2xl text-accent">{t('subtitle')}</p> {/* Use translation */}
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
              alt={t('imageAlt', { index: index + 1 })} // Use translation for alt text
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
