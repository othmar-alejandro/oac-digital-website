"use client";

import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogPost } from "@/types";

const blogPosts: BlogPost[] = [
  {
    title: "Color theory for designers",
    excerpt: "Understanding color theory can significantly enhance your design projects. Learn the fundamentals of color harmony and psychology.",
    date: "May 15, 2025",
    image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Jane Smith",
    slug: "color-theory-for-designers",
  },
  {
    title: "Experience of white space in design",
    excerpt: "White space is a powerful design element often overlooked. Discover how to use negative space effectively in your layouts.",
    date: "Apr 28, 2025",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Michael Johnson",
    slug: "experience-of-white-space-in-design",
  },
  {
    title: "UX trends in 2025",
    excerpt: "Stay ahead of the curve with the latest UX design trends shaping the digital landscape in 2025 and beyond.",
    date: "Apr 15, 2025",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Alex Rodriguez",
    slug: "ux-trends-in-2025",
  },
  {
    title: "The future of web development",
    excerpt: "Explore emerging technologies and methodologies that are set to transform the web development landscape.",
    date: "Mar 22, 2025",
    image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "David Brown",
    slug: "future-of-web-development",
  },
  {
    title: "Maximizing ROI with marketing automation",
    excerpt: "Learn how to leverage marketing automation to increase efficiency, improve customer experiences, and boost your return on investment.",
    date: "Mar 10, 2025",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Sarah Williams",
    slug: "maximizing-roi-with-marketing-automation",
  },
  {
    title: "Essential SEO strategies for 2025",
    excerpt: "Discover the most effective SEO techniques to improve your search rankings and drive organic traffic in 2025.",
    date: "Feb 28, 2025",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Emily Chen",
    slug: "essential-seo-strategies-2025",
  },
];

export default function Blog() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tips, and industry trends from our experts to help you stay ahead 
            in the digital landscape.
          </p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper bgColor="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} index={index} />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}