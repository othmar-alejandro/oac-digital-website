"use client";

import { useTranslations } from 'next-intl';
import { SectionWrapper } from '@/components/common/section-wrapper';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Define a type for the bgColor prop if it's passed
interface FaqAccordionProps {
    bgColor?: "light" | "dark";
}

export function FaqAccordion({ bgColor = "dark" }: FaqAccordionProps) {
    const t = useTranslations('Faqs'); // Namespace for FAQ related translations

    const faqData = [
        {
            id: "item-1",
            questionKey: "question1Title", // Key for CMS/i18n
            answerKey: "question1Answer",   // Key for CMS/i18n
            defaultQuestion: "What services do you offer?",
            defaultAnswer: "We offer a range of digital services including AI-enhanced website development, intelligent SEO solutions, tailored SaaS development, and smart content automation. Our goal is to provide custom AI solutions that drive growth, efficiency, and competitive advantage for your business."
        },
        {
            id: "item-2",
            questionKey: "question2Title",
            answerKey: "question2Answer",
            defaultQuestion: "How does AI enhance website development?",
            defaultAnswer: "AI can enhance website development by enabling personalized user experiences, automating content creation and updates, improving SEO through data analysis, providing intelligent chatbot support, and optimizing website performance for speed and security."
        },
        {
            id: "item-3",
            questionKey: "question3Title",
            answerKey: "question3Answer",
            defaultQuestion: "What is your process for starting a new project?",
            defaultAnswer: "Our process begins with deeply understanding your vision, values, and voice. We then move to rapid deployment of solutions, followed by collaborative growth and ongoing evolution to ensure your digital assets continue to deliver value."
        },
        {
            id: "item-4",
            questionKey: "question4Title",
            answerKey: "question4Answer",
            defaultQuestion: "How long does it take to see results?",
            defaultAnswer: "Our streamlined processes and AI-enhanced workflows mean you'll see results in days or weeks, not months. However, the exact timeline can vary depending on the project's complexity and scope."
        }
    ];

    return (
        <SectionWrapper bgColor={bgColor}>
            <div className="container mx-auto py-12 px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    {t('title')} {/* "Frequently Asked Questions" from en.json */}
                </h2>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((faq) => (
                            <AccordionItem value={faq.id} key={faq.id}>
                                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                                    {/* Using defaultQuestion directly as per current setup */}
                                    {/* For full i18n: t(faq.questionKey, { defaultMessage: faq.defaultQuestion }) */}
                                    {faq.defaultQuestion}
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 pb-4 text-gray-300">
                                    {/* Ensure text color contrasts with dark bg if SectionWrapper makes text white */}
                                    {/* For full i18n: t(faq.answerKey, { defaultMessage: faq.defaultAnswer }) */}
                                    {faq.defaultAnswer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </SectionWrapper>
    );
}
