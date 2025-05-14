"use client";

import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NavItem } from "@/types";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

// Define structure without titles, titles will come from translations
const footerSections = [
  {
    key: 'company', // Key for section title translation
    items: [
      { key: 'about', href: "/about" },
      { key: 'services', href: "/services" },
      { key: 'portfolio', href: "/portfolio" },
      { key: 'blog', href: "/blog" },
      { key: 'contact', href: "/contact" },
    ],
  },
  {
    key: 'services', // Key for section title translation
    items: [
      // Note: These keys might need adjustment based on final service list
      { key: 'webDevelopment', href: "/services#web-development" },
      { key: 'marketingAutomation', href: "/services#marketing-automation" },
      { key: 'seo', href: "/services#seo" },
      { key: 'saasDevelopment', href: "/services#saas" }, // Added based on previous discussion
      { key: 'digitalStrategy', href: "/services#strategy" }, // Kept for now, adjust as needed
    ],
  },
  {
    key: 'resources', // Key for section title translation
    items: [
      { key: 'caseStudies', href: "/resources/case-studies" },
      { key: 'documentation', href: "/resources/documentation" },
      { key: 'faqs', href: "/resources/faqs" },
      { key: 'privacyPolicy', href: "/privacy-policy" }, // Duplicate link, also at bottom
      { key: 'termsOfService', href: "/terms-of-service" }, // Duplicate link, also at bottom
    ],
  },
];

export function Footer() {
  const t = useTranslations("Footer"); // Initialize translation function

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-oac.png"
                alt={t('logoAlt')} // Use translation
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              {t('description')} {/* Use translation */}
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61556018600563" aria-label={t('facebookAria')} className="text-gray-400 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer"> {/* Use translation */}
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/oacdigital_/" aria-label={t('instagramAria')} className="text-gray-400 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer"> {/* Use translation */}
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/omar-alejandro-1a39bb2a3/" aria-label={t('linkedinAria')} className="text-gray-400 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer"> {/* Use translation */}
                <Linkedin size={20} />
              </Link>
              <Link href="https://github.com/Genuino-01" aria-label={t('githubAria')} className="text-gray-400 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer"> {/* Use translation */}
                <Github size={20} />
              </Link>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.key}>
              <h3 className="text-lg font-bold mb-4">{t(`sections.${section.key}.title`)}</h3> {/* Use translation */}
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {t(`sections.${section.key}.items.${item.key}`)} {/* Use translation */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('copyright', { year: new Date().getFullYear() })} {/* Use translation with variable */}
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              {t('privacyPolicy')} {/* Use translation */}
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              {t('termsOfService')} {/* Use translation */}
            </Link>
            <Link href="/sitemap" className="hover:text-accent transition-colors">
              {t('sitemap')} {/* Use translation */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
