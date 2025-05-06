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

    const stepElements = document.querySelectorAll(".process-step");
    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <SectionWrapper bgColor="dark" id="process">
      <div ref={sectionRef} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{t('title')}</h2> {/* Use translation */}
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
