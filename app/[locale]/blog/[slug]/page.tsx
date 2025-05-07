"use client";

import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { useTranslations } from "next-intl";
// import { setRequestLocale } from 'next-intl/server';

export default function BlogPostPage({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    // Enable static rendering
    // setRequestLocale(locale); // Removed as this is a Client Component

    const t = useTranslations("BlogDetailPage");

    // In a real application, you would fetch blog post content based on the slug
    // For now, we'll just display the slug and a placeholder message.

    return (
        <Layout>
            <SectionWrapper bgColor="dark" className="pt-32 md:pt-40">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{t('title')}</h1>
                </div>
            </SectionWrapper>

            <SectionWrapper bgColor="light">
                <div className="max-w-3xl mx-auto prose lg:prose-xl">
                    <h2 className="text-2xl font-semibold mb-4">{slug.replace(/-/g, ' ')}</h2>
                    <p>
                        {t('contentPlaceholder', { slug: slug })}
                    </p>
                    {/* TODO: Add actual blog post content here, likely fetched and rendered as Markdown */}
                </div>
            </SectionWrapper>
        </Layout>
    );
}
