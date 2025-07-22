"use client";

import { Layout } from "@/components/layout/layout";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import FAQSchema from "@/components/shared/FAQSchema";
import Head from "next/head";
import { useTranslations } from "next-intl";

interface FaqsPageProps {
    params: {
        locale: string;
    };
}

const getFaqs = (t: Function) => {
    const faqs = [];
    for (let i = 0; i < 5; i++) { // Assuming 5 FAQs
        faqs.push({
            question: t(`faqs.${i}.question`),
            answer: t(`faqs.${i}.answer`),
        });
    }
    return faqs;
};

export default function FaqsPage({ params }: FaqsPageProps) {
    const t = useTranslations("FaqAccordion");
    const faqs = getFaqs(t);

    return (
        <>
            <Head>
                <title>Frequently Asked Questions - OAC Digital</title>
                <meta
                    name="description"
                    content="Find answers to common questions about OAC Digital's services, including web design, SEO, and digital marketing strategies."
                />
                <FAQSchema faqs={faqs} />
            </Head>
            <Layout>
                <FaqAccordion />
            </Layout>
        </>
    );
}
