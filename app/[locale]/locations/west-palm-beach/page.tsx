"use client";

import { Layout } from "@/components/layout/layout";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CTASection } from "@/components/home/cta-section";
import LocationSpecificSchema from "@/components/shared/LocationSpecificSchema";
import Head from "next/head";
import { useTranslations } from "next-intl";

export default function WestPalmBeachPage() {
    const t = useTranslations("Locations.WestPalmBeach");

    return (
        <>
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
                <LocationSpecificSchema
                    pageUrl="https://www.oacdigital.biz/locations/west-palm-beach"
                    locationName="West Palm Beach"
                    nearbyAreas={["Boca Raton", "Delray Beach", "Jupiter"]}
                    serviceName="Digital Marketing"
                    serviceCategory="Digital Marketing"
                />
            </Head>
            <Layout>
                <SectionWrapper bgColor="light">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{t('description')}</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{t('services.title')}</h2>
                        <ul className="list-disc list-inside">
                            <li>{t('services.webDesign')}</li>
                            <li>{t('services.seo')}</li>
                            <li>{t('services.saas')}</li>
                            <li>{t('services.marketingAutomation')}</li>
                        </ul>
                    </div>
                </SectionWrapper>
                <CTASection />
            </Layout>
        </>
    );
}
