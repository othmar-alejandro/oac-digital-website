"use client";

import { Layout } from "@/components/layout/layout"; // Assuming a general layout component
import { FaqAccordion } from "@/components/common/FaqAccordion";

// It's good practice to define props for page components, even if just for locale
interface FaqsPageProps {
    params: {
        locale: string;
    };
}

export default function FaqsPage({ params }: FaqsPageProps) {
    // The FaqAccordion component now handles its own translations and data
    // It also defaults to bgColor="dark" which is what was requested for this page.
    return (
        <Layout>
            {/* The FaqAccordion includes its own SectionWrapper */}
            <FaqAccordion />
        </Layout>
    );
}
