"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import Image from "next/image";

interface HeroSectionProps {
  headline: string;
  subHeadline: string;
}

export function HeroSection({
  headline,
  subHeadline,
}: HeroSectionProps) {
  const t = useTranslations("HomePage.hero");
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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/Hero-Section_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 hero-content flex flex-col justify-center items-center min-h-screen text-center text-white p-4">
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-full mb-4 text-shadow-sm leading-tight" // Adjusted sizes, max-w-full, REMOVED whitespace-nowrap
        >
          {(() => {
            const aiEn = "AI";
            const aiEs = "IA"; // Assuming "IA" is the Spanish translation for AI in your messages file
            let processedHeadline = headline;

            // Replace "AMPLIFIED" or "AMPLIFICADO" with normal text if they exist
            processedHeadline = processedHeadline.replace("AMPLIFIED", "Amplified");
            processedHeadline = processedHeadline.replace("AMPLIFICADO", "Amplificado");

            if (processedHeadline.includes(aiEn)) {
              const parts = processedHeadline.split(aiEn);
              return (
                <>
                  {parts[0]}
                  <span className="text-accent font-extrabold">{aiEn}</span>
                  {parts[1]}
                </>
              );
            } else if (processedHeadline.includes(aiEs)) {
              const parts = processedHeadline.split(aiEs);
              return (
                <>
                  {parts[0]}
                  <span className="text-accent font-extrabold">{aiEs}</span>
                  {parts[1]}
                </>
              );
            }
            return processedHeadline; // Fallback if AI/IA not found (should not happen with current translations)
          })()}
        </h1>

        <p
          ref={subHeadlineRef}
          className="text-xl md:text-2xl text-gray-200 max-w-full mb-8 text-shadow-sm" // Increased size, lighter gray, reduced margin, added shadow, CHANGED max-w-3xl to max-w-full
        >
          {subHeadline}
        </p>

        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 mt-2"> {/* Added small top margin */}
          <Button asChild size="lg" className="text-black bg-gradient-to-b from-[hsl(40,90%,60%)] to-[hsl(40,90%,55%)] hover:from-[hsl(40,90%,55%)] hover:to-[hsl(40,90%,50%)]">
            <Link href="/portfolio">
              {t('viewWorkButton')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
            <Link href="/contact">
              {t('getInTouchButton')}
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
