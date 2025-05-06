"use client";

import { useEffect, useRef } from "react";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { BlogPost } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPreviewProps {
  title?: string;
  subtitle?: string;
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
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
];

export function BlogPreview({
  title = "Read our",
  subtitle = "latest blogs",
  posts = defaultPosts,
}: BlogPreviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const postElements = document.querySelectorAll(".blog-post-card");
    postElements.forEach((el) => observer.observe(el));
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      postElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <SectionWrapper bgColor="light" id="blog">
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h2>
        <p className="text-2xl text-accent">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {posts.map((post, index) => (
          <BlogPostCard key={index} post={post} index={index} />
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-black">
          <Link href="/blog">
            Read All Articles <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}