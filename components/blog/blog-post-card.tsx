"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation"; // Import locale-aware Link
import { useTranslations } from "next-intl";
import { BlogPost } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  const t = useTranslations("BlogPage"); // Use BlogPage namespace for common text like 'readMore'

  return (
    <Card
      className={cn(
        "blog-post-card opacity-0 overflow-hidden border-none shadow-md",
        "group cursor-pointer transition-all duration-300 hover:shadow-xl"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-accent hover:text-accent-dark font-medium inline-flex items-center"
          aria-label={`Read more about ${post.title}`}
        >
          {t('readMore')} <ArrowRight size={16} className="ml-1" /> {/* Use translation */}
        </Link>
      </CardContent>
    </Card>
  );
}
