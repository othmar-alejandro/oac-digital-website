"use client";

"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NavItem } from "@/types";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher"; // Import LanguageSwitcher
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Keep hrefs, titles will come from translations
const navLinks: Omit<NavItem, 'title'>[] = [
  { href: "/" },
  { href: "/services" },
  { href: "/portfolio" },
  { href: "/about" },
  { href: "/blog" },
  { href: "/contact" },
];

// Define keys for translation lookup
const navKeys = ['home', 'services', 'portfolio', 'about', 'blog', 'contact'];

export function Header() {
  const t = useTranslations("Navigation"); // Initialize translation function
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled
          ? "bg-primary-dark shadow-md py-2"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center">
            <Image
              src="/images/logo-oac.png"
              alt={t('logoAlt')}
              width={120}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-white hover:text-accent transition-colors",
                  "tracking-wide uppercase"
                )}
              >
                {t(navKeys[index])} {/* Use translation for title */}
              </Link>
            ))}
            <LanguageSwitcher /> {/* Add LanguageSwitcher here */}
            <Button size="sm" className="text-black bg-gradient-to-b from-[hsl(40,90%,60%)] to-[hsl(40,90%,55%)] hover:from-[hsl(40,90%,55%)] hover:to-[hsl(40,90%,50%)]">
              {t('getAQuote')} {/* Use translation for button text */}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')} // Use translation for aria-label
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary-dark z-40 pt-20">
          <nav className="flex flex-col items-center justify-center h-full">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white hover:text-accent py-4 text-xl font-medium tracking-wide uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(navKeys[index])} {/* Use translation for title */}
              </Link>
            ))}
            <Button
              size="lg"
              className="mt-6 text-black bg-gradient-to-b from-[hsl(40,90%,60%)] to-[hsl(40,90%,55%)] hover:from-[hsl(40,90%,55%)] hover:to-[hsl(40,90%,50%)]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('getAQuote')} {/* Use translation for button text */}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
