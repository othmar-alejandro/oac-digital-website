"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, PhoneCall, MapPin, Clock } from "lucide-react";
import { Toaster } from "sonner";
import { FaqAccordion } from "@/components/common/FaqAccordion"; // Import FaqAccordion
// import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale

export default function Contact({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  // setRequestLocale(locale); // Removed as this is a Client Component

  const t = useTranslations("ContactPage"); // Initialize translations
  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

    [headerRef, infoRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [headerRef, infoRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Layout>
      <Toaster position="top-center" />

      <SectionWrapper
        bgColor="dark" // Visually overridden by bg-image
        className="pt-32 md:pt-40 relative bg-cover bg-center bg-[url('/images/robot-call-center-contact-us.jpg')]"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for text contrast */}
        <div ref={headerRef} className="text-center mb-16 opacity-0 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">{t('title')}</h1> {/* Ensure text is white */}
          <p className="text-xl text-gray-200 max-w-3xl mx-auto"> {/* Ensure text is light gray */}
            {t('subtitle')} {/* Use translation */}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper bgColor="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={infoRef} className="opacity-0">
            <h2 className="text-3xl font-bold mb-6">{t('getInTouchTitle')}</h2> {/* Use translation */}
            <p className="text-gray-600 mb-8">
              {t('getInTouchDescription')} {/* Use translation */}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('emailLabel')}</h3> {/* Use translation */}
                  <p className="text-gray-600">info@oacdigital.biz</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('phoneLabel')}</h3> {/* Use translation */}
                                                        <p className="text-gray-600">{t('phone')}</p>
                                                    </div>
                                                </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('addressLabel')}</h3> {/* Use translation */}
                  <p className="text-gray-600">
                    Miami, FL
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('hoursLabel')}</h3> {/* Use translation */}
                  <p className="text-gray-600">{t('hours.appointmentOnly')}</p> {/* Use translation */}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">{t('formTitle')}</h2> {/* Use translation */}
            {/* Assuming ContactForm will be refactored */}
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <FaqAccordion /> {/* Add FAQ section here */}
    </Layout>
  );
}
