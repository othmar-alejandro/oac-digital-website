"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Import useTranslations
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { TeamMember } from "@/components/about/team-member";
import { TeamMemberType } from "@/types";
import { CheckCircle } from "lucide-react";
import { CTASection } from "@/components/home/cta-section";
// import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale

// Team member section and related constants will be removed.

// Define keys for values
const valueKeys = [
  'innovation',
  'satisfaction',
  'integrity',
  'learning',
  'collaboration',
  'excellence',
];

// Define keys for Values & Promises
const valuePromiseKeys = [
  'integrity',
  'speed',
  'partnership',
  'evolution',
];

// const getTeamMembers function will be removed.

export default function About({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  // setRequestLocale(locale); // Removed as this is a Client Component

  const t = useTranslations("AboutPage"); // Initialize translations
  // const teamMembers = getTeamMembers(t); // This line will be removed.
  const headerRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null); // Added ref for mission
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesPromisesRef = useRef<HTMLDivElement>(null); // Added ref for values & promises
  const valuesRef = useRef<HTMLDivElement>(null);


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

    [headerRef, missionRef, storyRef, valuesPromisesRef, valuesRef].forEach((ref) => { // Added new refs
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [headerRef, missionRef, storyRef, valuesPromisesRef, valuesRef].forEach((ref) => { // Added new refs
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Layout>
      <SectionWrapper
        bgColor="dark" // Visually overridden by bg-image
        className="pt-32 md:pt-40 relative bg-cover bg-center bg-[url('/images/art-oac.jpg')]"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for text contrast */}
        <div ref={headerRef} className="text-center mb-16 opacity-0 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">{t('title')}</h1> {/* Ensure text is white */}
          <p className="text-xl text-gray-200 max-w-3xl mx-auto"> {/* Ensure text is light gray */}
            {t('subtitle')} {/* Use translation */}
          </p>
        </div>
      </SectionWrapper>

      {/* Mission Statement Section */}
      <SectionWrapper bgColor="light" id="mission-statement">
        <div ref={missionRef} className="text-center py-12 opacity-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Mission Statement</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('missionStatement')}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper bgColor="light" id="our-story">
        <div
          ref={storyRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('story.title')}</h2> {/* Use translation */}
            <p className="text-gray-600 mb-4">
              {t('story.paragraph1')} {/* Use translation */}
            </p>
            <p className="text-gray-600 mb-4">
              {t('story.paragraph2')} {/* Use translation */}
            </p>
            <p className="text-gray-600">
              {t('story.paragraph3')} {/* Use translation */}
            </p>
          </div>

          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/website-planing-oac.jpg" // Updated image
              alt={t('story.imageAlt')} // Use translation
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bgColor="dark" id="our-values">
        <div
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
        >
          <div className="order-2 md:order-1 relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/coding-oac.jpg" // Updated image
              alt={t('values.imageAlt')} // Use translation
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">{t('values.title')}</h2> {/* Use translation */}
            <p className="text-gray-300 mb-6">
              {t('values.description')} {/* Use translation */}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueKeys.map((key) => (
                <div key={key} className="flex items-center">
                  <CheckCircle className="text-accent mr-2" size={20} />
                  <span>{t(`values.items.${key}`)}</span> {/* Use translation */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Values & Promises Section */}
      <SectionWrapper bgColor="light" id="our-values-promises">
        <div
          ref={valuesPromisesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
        >
          <div className="order-1 md:order-1"> {/* Text on left */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('valuesAndPromises.title')}</h2>
            <p className="text-gray-700 mb-6">
              {t('valuesAndPromises.intro')}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {valuePromiseKeys.map((key) => (
                <div key={key} className="flex items-center">
                  <CheckCircle className="text-primary mr-3" size={24} /> {/* Adjusted icon color and size */}
                  <span className="text-gray-700">{t(`valuesAndPromises.items.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-2 md:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden"> {/* Image on right */}
            <Image
              src="/images/working-in-office-oac.jpg" // Updated image
              alt={t('valuesAndPromises.title')} // Use title as alt for now
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Meet Our Team section removed */}

      <CTASection />
    </Layout>
  );
}
