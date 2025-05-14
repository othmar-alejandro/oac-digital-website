"use client";

import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { useTranslations } from "next-intl";
// import { setRequestLocale } from 'next-intl/server';

export default function PortfolioProjectPage({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    // Enable static rendering
    // setRequestLocale(locale); // Removed as this is a Client Component

    const t = useTranslations("PortfolioDetailPage");

    // In a real application, you would fetch project details based on the slug
    // For now, we'll just display the slug and a placeholder message.

    return (
        <Layout>
            <SectionWrapper bgColor="dark" className="pt-32 md:pt-40">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{t('title')}</h1>
                </div>
            </SectionWrapper>

            <SectionWrapper bgColor="light">
                <div className="max-w-3xl mx-auto text-left"> {/* Changed to text-left for better readability of details */}
                    <h2 className="text-3xl font-bold mb-6 text-center capitalize">{slug.replace(/-/g, ' ')}</h2>

                    {slug === 'ai-crm-dashboard' && (
                        <div className="prose lg:prose-lg mx-auto">
                            <p>This project involves a comprehensive system designed for companies to automatically prequalify clients using AI. Key features include intelligent lead scoring, automated communication sequences for follow-ups, and seamless integration with existing sales pipelines to enhance efficiency and conversion rates.</p>
                            <p>The AI engine analyzes client data to predict likelihood to convert, prioritizes leads for sales teams, and can initiate personalized outreach campaigns. This significantly reduces manual effort and allows sales teams to focus on high-potential prospects.</p>
                            {/* TODO: Add more specific details, technologies used, images/videos if available */}
                        </div>
                    )}

                    {slug === 'ai-podcast-creator' && (
                        <div className="prose lg:prose-lg mx-auto">
                            <p>An innovative application currently in development, the AI Podcast Creator allows users to generate complete podcasts from a simple topic input. The AI handles research, scriptwriting, and voice generation in a selected tone.</p>
                            <p>Future enhancements aim to include customizable voice avatars, multi-language support, automated episode scheduling, and direct distribution to major podcast platforms, all designed to empower creators without requiring any manual recording or extensive audio editing skills.</p>
                            {/* TODO: Add more specific details, technologies used, images/videos if available */}
                        </div>
                    )}

                    {slug !== 'ai-crm-dashboard' && slug !== 'ai-podcast-creator' && (
                        <p className="text-gray-700 text-center">
                            {t('contentPlaceholder', { slug: slug })}
                        </p>
                    )}
                    {/* TODO: Add actual project details here for other projects or a more robust data fetching solution */}
                </div>
            </SectionWrapper>
        </Layout>
    );
}
