"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogPost } from "@/types";
// import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale

// Define keys for blog posts
const blogPostKeys = [
  'colorTheory',
  'whiteSpace',
  'uxTrends',
  'webDevFuture',
  'marketingRoi',
  'seoStrategies',
];

// Hardcoded images, dates, slugs for now
const blogPostMeta: { [key: string]: { image: string; date: string; slug: string } } = {
  colorTheory: {
    image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 15, 2025",
    slug: "color-theory-for-designers",
  },
  whiteSpace: {
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Apr 28, 2025",
    slug: "experience-of-white-space-in-design",
  },
  uxTrends: {
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Apr 15, 2025",
    slug: "ux-trends-in-2025",
  },
  webDevFuture: {
    image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Mar 22, 2025",
    slug: "future-of-web-development",
  },
  marketingRoi: {
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Mar 10, 2025",
    slug: "maximizing-roi-with-marketing-automation",
  },
  seoStrategies: {
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Feb 28, 2025",
    slug: "essential-seo-strategies-2025",
  },
};

// Function to generate blog posts using translations
const getBlogPosts = (t: Function): BlogPost[] => blogPostKeys.map(key => ({
  title: t(`posts.${key}.title`),
  excerpt: t(`posts.${key}.excerpt`),
  author: t(`posts.${key}.author`),
  image: blogPostMeta[key].image,
  date: blogPostMeta[key].date,
  slug: blogPostMeta[key].slug,
}));


export default function Blog({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  // setRequestLocale(locale); // Removed as this is a Client Component

  const t = useTranslations("BlogPage"); // Initialize translations
  const blogPosts = getBlogPosts(t); // Get translated posts
  const headerRef = useRef<HTMLDivElement>(null);

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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
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

      <SectionWrapper bgColor="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            // Assuming BlogPostCard will be refactored
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
