"use client";

import { useEffect, useRef } from "react";
import { ProcessStep } from "@/types";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Understand",
    description: "We start by deeply understanding your business goals, target audience, and market position through comprehensive research and analysis.",
    icon: "🔍",
  },
  {
    title: "Plan",
    description: "With insights gathered, we create a tailored strategy that aligns with your objectives and outlines the path to achieving measurable results.",
    icon: "📝",
  },
  {
    title: "Design",
    description: "Our expert team designs beautiful, functional solutions that embody your brand identity while providing exceptional user experiences.",
    icon: "✏️",
  },
];

export function ProcessSection({
  title = "Our Process",
  subtitle = "We solve people's problems and make them happy.",
  steps = defaultSteps,
}: ProcessSectionProps) {
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {steps.map((step, index) => (
          <div
            key={index}
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