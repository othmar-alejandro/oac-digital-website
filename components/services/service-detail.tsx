"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceDetailProps {
  service: ServiceItem;
  index: number;
  isReversed?: boolean;
}

export function ServiceDetail({
  service,
  index,
  isReversed = false
}: ServiceDetailProps) {
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentServiceRef = serviceRef.current;
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

    if (currentServiceRef) {
      observer.observe(currentServiceRef);
    }

    return () => {
      if (currentServiceRef) {
        observer.unobserve(currentServiceRef);
      }
    };
  }, []);

  return (
    <div
      id={service.title.toLowerCase().replace(/ /g, "-")}
      ref={serviceRef}
      className={cn(
        "opacity-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-24",
        index > 0 && "border-t border-gray-200 pt-16"
      )}
    >
      <div className={isReversed ? "md:order-2" : ""}>
        <span className="text-4xl mb-6 inline-block">
          {service.icon}
        </span>
        <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-8">{service.description}</p>

        {service.features && (
          <ul className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <span className="mr-3 text-accent">
                  <Check size={20} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className={cn(
          "relative h-64 md:h-96 rounded-lg overflow-hidden",
          isReversed ? "md:order-1" : ""
        )}
      >
        <Image
          src={service.image || `https://images.pexels.com/photos/114907${index + 1}/pexels-photo-114907${index + 1}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
