"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { SectionWrapper } from "@/components/common/section-wrapper";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogPost } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import { ArrowRight } from "lucide-react";

// Function to generate posts using translations
// Note: Images, dates, authors, slugs would ideally come from a CMS or data source
const getPosts = (t: Function): BlogPost[] => [
  {
    title: t('posts.colorTheory.title'),
    excerpt: t('posts.colorTheory.excerpt'),
    date: "May 15, 2025", // Keep date hardcoded for now
    image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder
    author: t('posts.colorTheory.author'),
    slug: "color-theory-for-designers", // Keep slug hardcoded
  },
  {
    title: t('posts.whiteSpace.title'),
    excerpt: t('posts.whiteSpace.excerpt'),
    date: "Apr 28, 2025",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: t('posts.whiteSpace.author'),
    slug: "experience-of-white-space-in-design",
  },
  {
    title: t('posts.uxTrends.title'),
    excerpt: t('posts.uxTrends.excerpt'),
    date: "Apr 15, 2025",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: t('posts.uxTrends.author'),
    slug: "ux-trends-in-2025",
  },
];


export function BlogPreview() { // Removed props
  const t = useTranslations("HomePage.blog"); // Initialize translations
  const posts = getPosts(t); // Get translated posts
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null); // Ref for the button

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

    const elementsToObserve: Element[] = [];
    if (sectionRef.current) {
      elementsToObserve.push(sectionRef.current);
    }
    const postElements = document.querySelectorAll(".blog-post-card"); // This class is on the BlogPostCard component itself
    postElements.forEach((el) => elementsToObserve.push(el));
    if (buttonRef.current) {
      elementsToObserve.push(buttonRef.current);
    }

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <SectionWrapper bgColor="light" id="blog">
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{t('title')}</h2> {/* Use translation */}
        <p className="text-2xl text-accent">{t('subtitle')}</p> {/* Use translation */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {posts.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} index={index} /> // Use slug as key
        ))}
      </div>

      <div ref={buttonRef} className="text-center opacity-0"> {/* Added ref and opacity-0 */}
        <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-black">
          <Link href="/blog">
            {t('readAllButton')} <ArrowRight size={16} className="ml-2" /> {/* Use translation */}
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
