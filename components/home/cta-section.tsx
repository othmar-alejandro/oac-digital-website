"use client";

import { useEffect, useRef } from "react";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title = "Let's Work Together",
  subtitle = "Have a project in mind? We'd love to hear about it. Let's discuss how we can help transform your digital presence.",
  buttonText = "Get in Touch",
  buttonLink = "/contact",
}: CTASectionProps) {
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
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <SectionWrapper bgColor="dark" className="relative overflow-hidden" id="cta">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>
      
      <div 
        ref={sectionRef} 
        className="relative z-10 opacity-0 max-w-4xl mx-auto text-center py-16 md:py-24"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">{subtitle}</p>
        
        <div className="inline-block relative">
          <Button 
            asChild 
            size="lg" 
            className="px-8 py-6 text-lg bg-accent hover:bg-accent-dark text-black"
          >
            <Link href={buttonLink}>
              {buttonText} <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
          
          {/* Decorative circular logo */}
          <div className="hidden md:block absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-white p-2">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <p className="text-white text-xl font-bold">OAC</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}