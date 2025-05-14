"use client";

import { useEffect, useRef } from "react"; // Added useEffect
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Added cn
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import { ArrowRight } from "lucide-react"; // Import ArrowRight

export function LocationsReach() {
  const t = useTranslations("HomePage");
  const sectionRef = useRef<HTMLDivElement>(null);
  const expertiseCardsRef = useRef<HTMLDivElement[]>([]);

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

    const elementsToObserve: Element[] = [];
    if (sectionRef.current) {
      elementsToObserve.push(sectionRef.current);
    }
    expertiseCardsRef.current.forEach((card) => {
      if (card) elementsToObserve.push(card);
    });

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const expertiseItems = [
    { id: "digital", titleKey: "expertise.digital.title", descKey: "expertise.digital.description" },
    { id: "creative", titleKey: "expertise.creative.title", descKey: "expertise.creative.description" },
    { id: "strategy", titleKey: "expertise.strategy.title", descKey: "expertise.strategy.description" },
  ];

  return (
    <SectionWrapper
      bgColor="dark"
      id="expertise"
      className="relative bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0),radial-gradient(circle_at_10px_10px,_rgba(255,255,255,0.05)_1px,_transparent_0)] [background-size:20px_20px]"
    // The above applies:
    // backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0), radial-gradient(circle at 10px 10px, rgba(255,255,255,0.05) 1px, transparent 0)`
    // backgroundSize: '20px 20px'
    >
      {/* Optional: Add an overlay if the pattern makes text hard to read, though opacity is low */}
      {/* <div className="absolute inset-0 bg-primary-dark opacity-50 z-0"></div> */}
      <div ref={sectionRef} className="text-center mb-16 opacity-0 relative z-10"> {/* Ensure content is above pattern */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
          {t('expertise.title')}
        </h2>
        <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto">
          {t('expertise.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {expertiseItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) expertiseCardsRef.current[index] = el;
            }}
            className={cn(
              "bg-gray-800 p-8 rounded-lg opacity-0", // Added opacity-0
              "transform transition-all duration-500" // Base transition for hover (can be expanded)
            )}
            style={{ transitionDelay: `${index * 150}ms` }} // Staggered fade-in
          >
            <h3 className="text-2xl mb-4">{t(item.titleKey)}</h3>
            <p className="text-gray-300 mb-6">
              {t(item.descKey)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center opacity-0" ref={(el) => { if (el) expertiseCardsRef.current.push(el) }}> {/* Added opacity-0 and ref for fade-in */}
        <Button asChild size="lg" className="px-8 py-6 text-lg bg-accent hover:bg-accent-dark text-black">
          <Link href="/services"> {/* Assuming this button should link to services page */}
            {t('expertise.cta')}
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
