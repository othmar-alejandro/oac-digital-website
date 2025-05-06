"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Import useTranslations
import { SectionWrapper } from "@/components/common/section-wrapper";
import { LocationItem } from "@/types";
import { cn } from "@/lib/utils";

// Function to generate locations using translations
// Note: Images would ideally come from a CMS or data source
const getLocations = (t: Function): LocationItem[] => [
  {
    city: t('locations.newYork.city'),
    country: t('locations.newYork.country'),
    image: "https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder
  },
  {
    city: t('locations.california.city'),
    country: t('locations.california.country'),
    image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder
  },
  {
    city: t('locations.dubai.city'),
    country: t('locations.dubai.country'),
    image: "https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder
  },
  {
    city: t('locations.sydney.city'), // Assuming Sydney, Australia
    country: t('locations.sydney.country'),
    image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder
  },
];


export function LocationsReach() { // Removed props
  const t = useTranslations("HomePage.locations"); // Initialize translations
  const locations = getLocations(t); // Get translated locations
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

    const locationElements = document.querySelectorAll(".location-item");
    locationElements.forEach((el) => observer.observe(el));

    return () => {
      locationElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <SectionWrapper bgColor="dark" id="locations">
      <div ref={sectionRef} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{t('title')}</h2> {/* Use translation */}
        {/* Subtitle uses count - pass it as a variable */}
        <p className="text-2xl text-accent">{t('subtitle', { count: locations.length })}</p> {/* Use translation */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {locations.slice(0, 2).map((location, index) => (
            <div
              key={index}
              className="location-item opacity-0 flex justify-between items-center py-6 border-b border-gray-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-xl">{location.city}</span> {/* Already translated */}
              <div className="flex items-center">
                {location.image && (
                  <div className="relative w-16 h-16 rounded-md overflow-hidden mr-4">
                    <Image
                      src={location.image}
                      alt={location.city} // Alt text from translated city name
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                  <span className="text-2xl">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {locations.slice(2).map((location, index) => (
            <div
              key={index}
              className={cn(
                "location-item opacity-0 flex justify-between items-center py-6",
                index < locations.slice(2).length - 1 ? "border-b border-gray-700" : ""
              )}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <span className="text-xl">{location.city}</span> {/* Already translated */}
              <div className="flex items-center">
                {location.image && (
                  <div className="relative w-16 h-16 rounded-md overflow-hidden mr-4">
                    <Image
                      src={location.image}
                      alt={location.city} // Alt text from translated city name
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                  <span className="text-2xl">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-gray-400 text-center">
        <p>
          {t('footerText')} {/* Use translation */}
        </p>
      </div>
    </SectionWrapper>
  );
}
