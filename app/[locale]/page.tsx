"use client";

import React from 'react';
import { useTranslations } from "next-intl";
import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { ProcessSection } from "@/components/home/process-section";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { LocationsReach } from "@/components/home/locations-reach";
import { BlogPreview } from "@/components/home/blog-preview";
import { CTASection } from "@/components/home/cta-section";
import Head from 'next/head';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations("HomePage.hero");

    return (
        <>
            <Head>
                <title>OAC Digital - Web Design, SEO, and Digital Marketing</title>
                <meta
                    name="description"
                    content="OAC Digital offers top-tier web design, SEO, and comprehensive digital marketing services to elevate your brand's online presence. Discover our innovative solutions."
                />
            </Head>
            <Layout>
                <HeroSection
                    headline={t('headline')}
                    subHeadline={t('subHeadline')}
                />
                <ServicesOverview />
                <ProcessSection />
                <PortfolioPreview />
                <LocationsReach />
                <BlogPreview />
                <CTASection />
            </Layout>
        </>
    );
}
