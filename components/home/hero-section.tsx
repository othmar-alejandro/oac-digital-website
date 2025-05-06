"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link

interface HeroSectionProps {
  headline: string; // Make required
  subHeadline: string; // Make required
  // backgroundImage prop removed
}

export function HeroSection({
  headline, // Remove default value
  subHeadline, // Remove default value
}: HeroSectionProps) {
  const t = useTranslations("HomePage.hero"); // Initialize translations
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subHeadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    const subheadline = subHeadlineRef.current;
    const button = buttonRef.current;

    if (headline) headline.classList.add("slide-up");

    setTimeout(() => {
      if (subheadline) subheadline.classList.add("slide-up");
    }, 200);

    setTimeout(() => {
      if (button) button.classList.add("fade-in");
    }, 400);
  }, []);

  return (
    /* TODO: Add a default background image via CSS or fetch from CMS */
    <div className="relative min-h-screen flex items-center justify-center bg-primary-dark overflow-hidden bg-[url('/images/default-hero-bg.jpg')] bg-cover bg-center"> {/* Example: Added default bg via CSS */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Removed backgroundImage prop logic */}

      <div className="container relative z-20 px-4 md:px-8 flex flex-col items-center text-center">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl mb-6 opacity-0"
        >
          {headline}
        </h1>

        <p
          ref={subHeadlineRef}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 opacity-0"
        >
          {subHeadline}
        </p>

        <div ref={buttonRef} className="flex flex-col md:flex-row gap-4 opacity-0">
          <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-black">
            <Link href="/portfolio">
              {t('viewWorkButton')} <ArrowRight size={16} className="ml-2" /> {/* Use translation */}
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/contact">
              {t('getInTouchButton')} {/* Use translation */}
            </Link>
          </Button>
        </div>
      </div> {/* Close container div */}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div> // Close main wrapper div
  );
}
