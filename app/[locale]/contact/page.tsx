"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, PhoneCall, MapPin, Clock } from "lucide-react";
import { Toaster } from "sonner";
import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale

export default function Contact({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);

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

      <SectionWrapper bgColor="dark" className="pt-32 md:pt-40">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{t('title')}</h1> {/* Use translation */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  {/* Keep actual emails hardcoded for now */}
                  <p className="text-gray-600">info@oacdigital.com</p>
                  <p className="text-gray-600">support@oacdigital.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('phoneLabel')}</h3> {/* Use translation */}
                  {/* Keep actual phone numbers hardcoded */}
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('addressLabel')}</h3> {/* Use translation */}
                  {/* Keep actual address hardcoded */}
                  <p className="text-gray-600">
                    123 Innovation Avenue<br />
                    Suite 200<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('hoursLabel')}</h3> {/* Use translation */}
                  <p className="text-gray-600">{t('hours.weekdays')}</p> {/* Use translation */}
                  <p className="text-gray-600">{t('hours.saturday')}</p> {/* Use translation */}
                  <p className="text-gray-600">{t('hours.sunday')}</p> {/* Use translation */}
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
    </Layout>
  );
}
