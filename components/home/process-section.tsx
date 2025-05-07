"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { ProcessStep } from "@/types";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { cn } from "@/lib/utils";

// Function to generate steps using translations
const getSteps = (t: Function): ProcessStep[] => [
  {
    icon: "🔍", // Icons can remain hardcoded or be made configurable
    title: t('steps.listen.title'),
    description: t('steps.listen.description'),
  },
  {
    icon: "⚡", // Changed icon for Rapid Deployment
    title: t('steps.deploy.title'),
    description: t('steps.deploy.description'),
  },
  {
    icon: "🤝", // Changed icon for Collaborative Growth
    title: t('steps.collaborate.title'),
    description: t('steps.collaborate.description'),
  },
  {
    icon: "🌱", // Changed icon for Ongoing Evolution
    title: t('steps.evolve.title'),
    description: t('steps.evolve.description'),
  },
];


export function ProcessSection() { // Removed props
  const t = useTranslations("HomePage.process"); // Initialize translations
  const steps = getSteps(t); // Get translated steps
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

    const elementsToObserve: Element[] = []; // Explicitly typed
    if (sectionRef.current) {
      elementsToObserve.push(sectionRef.current);
    }
    const stepElements = document.querySelectorAll(".process-step");
    stepElements.forEach((el) => elementsToObserve.push(el));

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => {
        if (el) observer.unobserve(el); // Check if el exists before unobserving
      });
    };
  }, []);

  return (
    <SectionWrapper
      bgColor="dark"
      id="process"
      className="relative bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0),radial-gradient(circle_at_10px_10px,_rgba(255,255,255,0.05)_1px,_transparent_0)] [background-size:20px_20px]"
    >
      <div ref={sectionRef} className="text-center mb-16 opacity-0 relative z-10"> {/* Added relative z-10 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
          {(() => {
            const titleText = t('title'); // "The OAC Approach"
            const oacPart = "OAC";
            if (titleText.includes(oacPart)) {
              const parts = titleText.split(oacPart);
              return (
                <>
                  {parts[0]}
                  <span className="text-accent">{oacPart}</span>
                  {parts[1]}
                </>
              );
            }
            return titleText;
          })()}
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">{t('subtitle')}</p> {/* Use translation */}
      </div>

      {/* Adjusted grid columns for 4 steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {steps.map((step, index) => (
          <div
            key={step.title} // Use title as key (assuming titles are unique)
            className={cn(
              "process-step opacity-0 text-center",
              "transform transition-all duration-500"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="text-4xl mb-6">{step.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
