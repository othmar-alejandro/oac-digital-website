"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { SectionWrapper } from "@/components/common/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import { ArrowRight } from "lucide-react";


export function CTASection() { // Removed props
  const t = useTranslations("HomePage.cta"); // Initialize translations
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonLink = "/contact"; // Keep link hardcoded for navigation

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
    <SectionWrapper
      bgColor="dark" // Added to satisfy TypeScript, bg-image will override
      id="cta"
      className="relative overflow-hidden bg-cover bg-center bg-[url('/images/section-background.jpg')]"
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Adjust opacity as needed */}

      <div
        ref={sectionRef}
        className="relative z-10 opacity-0 max-w-4xl mx-auto text-center py-16 md:py-24 text-white" // Ensure text is white
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6">{t('title')}</h2> {/* Use translation */}
        <p className="text-lg md:text-xl text-accent mb-10">{t('subtitle')}</p> {/* Use translation, changed to accent color */}

        <div className="inline-block relative">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-lg text-black bg-gradient-to-b from-[hsl(40,90%,60%)] to-[hsl(40,90%,55%)] hover:from-[hsl(40,90%,55%)] hover:to-[hsl(40,90%,50%)]" // Using the gradient button style
          >
            <Link href={buttonLink}>
              {t('buttonText')} <ArrowRight size={20} className="ml-2" /> {/* Use translation */}
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
