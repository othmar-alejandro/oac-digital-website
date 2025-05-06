"use client";

import React from 'react'; // Add explicit React import
import { useTranslations } from "next-intl";
import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { ProcessSection } from "@/components/home/process-section";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { LocationsReach } from "@/components/home/locations-reach";
import { BlogPreview } from "@/components/home/blog-preview";
import { AboutAtmospherePreview } from "@/components/home/about-atmosphere-preview";
import { CTASection } from "@/components/home/cta-section";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
    // setRequestLocale(locale); // Removed as it's handled in the layout

    const t = useTranslations("HomePage.hero"); // Initialize translations for Hero section

    return (
        <Layout>
            {/* Pass translated props to HeroSection */}
            <HeroSection
                headline={t('headline')}
                subHeadline={t('subHeadline')}
            // backgroundImage prop removed - should be handled within HeroSection or via CSS/CMS
            />
            <ServicesOverview /> {/* Already refactored */}
            <ProcessSection />
            <PortfolioPreview />
            <LocationsReach />
            <BlogPreview />
            <AboutAtmospherePreview />
            <CTASection />
        </Layout>
    );
}
