"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
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
          <Link href="/" className="relative z-10">
            <Image 
              src="/images/logo-dark.png" 
              alt="OAC Digital Innovations" 
              width={120} 
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-white hover:text-accent transition-colors",
                  "tracking-wide uppercase"
                )}
              >
                {item.title}
              </Link>
            ))}
            <Button size="sm" className="bg-accent hover:bg-accent-dark text-black">
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary-dark z-40 pt-20">
          <nav className="flex flex-col items-center justify-center h-full">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white hover:text-accent py-4 text-xl font-medium tracking-wide uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button
              size="lg"
              className="mt-6 bg-accent hover:bg-accent-dark text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}