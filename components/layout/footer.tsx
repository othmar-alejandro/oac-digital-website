import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/types";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const footerLinks: { title: string; items: NavItem[] }[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Website Development", href: "/services#web-development" },
      { title: "Marketing Automation", href: "/services#marketing-automation" },
      { title: "SEO", href: "/services#seo" },
      { title: "UI/UX Design", href: "/services#design" },
      { title: "Digital Strategy", href: "/services#strategy" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Documentation", href: "/resources/documentation" },
      { title: "FAQs", href: "/resources/faqs" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-dark.png"
                alt="OAC Digital Innovations"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Driving digital transformation through innovative web solutions, marketing automation, and SEO strategies.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OAC Digital Innovations. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}