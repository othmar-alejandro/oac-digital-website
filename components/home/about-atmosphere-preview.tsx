"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Import useTranslations
import { SectionWrapper } from "@/components/common/section-wrapper";
import { cn } from "@/lib/utils";

// Updated images with "oac" theme
const oacImages = [
  "/images/working-in-office-oac.jpg",
  "/images/codes-oac.jpg",
  "/images/digital-marketing-oac.jpg",
];

export function AboutAtmospherePreview() {
  const t = useTranslations("HomePage.atmosphere");
  const images = oacImages; // Use OAC images
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
      <div ref={sectionRef} className="text-center mb-12 md:mb-16 opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t('title')}{' '}
          <span className="text-accent">{t('subtitle')}</span>
        </h2>
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
