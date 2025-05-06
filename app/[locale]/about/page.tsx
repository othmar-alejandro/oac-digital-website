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
import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale

// Define structure for team members using keys for translation
// Images remain hardcoded for now
const teamMemberKeys = ['johnDoe', 'janeSmith', 'michaelJohnson', 'sarahWilliams', 'davidBrown', 'emilyChen'];
const teamMemberImages: { [key: string]: string } = {
  johnDoe: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  janeSmith: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  michaelJohnson: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  sarahWilliams: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  davidBrown: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  emilyChen: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

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

// Function to generate team members using translations
const getTeamMembers = (t: Function): TeamMemberType[] => teamMemberKeys.map(key => ({
  name: t(`team.${key}.name`),
  position: t(`team.${key}.position`),
  image: teamMemberImages[key],
  bio: t(`team.${key}.bio`),
}));

export default function About({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("AboutPage"); // Initialize translations
  const teamMembers = getTeamMembers(t); // Get translated team members
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
      <SectionWrapper bgColor="dark" className="pt-32 md:pt-40">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{t('title')}</h1> {/* Use translation */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder image
              alt={t('valuesAndPromises.title')} // Use title as alt for now
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bgColor="light" id="our-team">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('team.title')}</h2> {/* Use translation */}
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('team.subtitle')} {/* Use translation */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            // Assuming TeamMember component will be refactored to handle translated props
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </Layout>
  );
}
