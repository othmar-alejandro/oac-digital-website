import React from 'react'; // Add explicit React import
import '../globals.css'; // Adjusted path for globals.css
import type { Metadata } from 'next';
import { Playfair_Display, Inter, Roboto } from 'next/font/google'; // Added Roboto
// import { notFound } from 'next/navigation'; // No longer needed here
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale
import { getMessages } from '../../i18n'; // Import getMessages from local i18n.ts
import { ThemeProvider } from '@/components/providers/theme-provider';
import GoogleAnalytics from '@/components/providers/google-analytics'; // Import Google Analytics
import { cn } from '@/lib/utils';
import { routing } from '@/i18n/routing'; // Import routing config for locales

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});

const inter = Inter({ // This will be replaced but kept for now to avoid breaking changes if Playfair is still used elsewhere
    subsets: ['latin'],
    variable: '--font-inter',
});

const roboto = Roboto({ // Added Roboto configuration
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Include desired weights
    variable: '--font-roboto',
});

// Define base metadata values (can be moved to a config or fetched)
const siteConfig = {
    name: "OAC Digital Innovations | Web & SEO Solutions",
    description: "Expert web development, SEO, and marketing automation to elevate your business. OAC Digital delivers innovative solutions for measurable growth.",
    url: "https://www.oacdigital.biz",
    ogImage: "https://www.oacdigital.biz/og-image.png",
    twitterCard: "summary_large_image",
    twitterCreator: "@oacdigital",
    googleAnalyticsId: "G-RPCP07MESG",
};

// Function to generate static params for locales
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// Generate metadata dynamically
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    // TODO: Fetch localized metadata if needed using getTranslations from next-intl
    // const t = await getTranslations({ locale, namespace: 'Metadata' });
    // const title = t('title');
    // const description = t('description');

    const title = siteConfig.name;
    const description = siteConfig.description;

    return {
        title: {
            default: title,
            template: `%s | ${title}`, // For page-specific titles
        },
        description: description,
        // Add other metadata fields as needed: icons, manifest, keywords etc.
        openGraph: {
            type: "website",
            locale: locale,
            url: siteConfig.url,
            title: title,
            description: description,
            siteName: title,
            images: [
                {
                    url: siteConfig.ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: siteConfig.twitterCard as "summary" | "summary_large_image" | "app" | "player",
            title: title,
            description: description,
            images: [siteConfig.ogImage],
            creator: siteConfig.twitterCreator,
        },
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: siteConfig.url,
            languages: {
                'en': `${siteConfig.url}/en`,
                'es': `${siteConfig.url}/es`,
            },
        },
    };
}


export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Enable static rendering
    setRequestLocale(locale);
    console.log(`[app/[locale]/layout.tsx] setRequestLocale called with: ${locale}`); // DEBUGGING LINE
    console.log('[DEBUG] RootLayout rendered with locale:', locale); // ADDED DEBUG LINE

    // Provide messages to the client
    const messages = await getMessages(locale); // Pass locale to getMessages

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'OAC Digital Innovations',
                            url: 'https://www.oacdigital.biz',
                            logo: 'https://www.oacdigital.biz/logo.png',
                            contactPoint: {
                                '@type': 'ContactPoint',
                                telephone: '+1-786-615-1828',
                                contactType: 'Customer Service',
                            },
                            address: {
                                '@type': 'PostalAddress',
                                addressLocality: 'Miami',
                                addressRegion: 'FL',
                                addressCountry: 'US',
                            },
                        }),
                    }}
                />
                {siteConfig.googleAnalyticsId && (
                    <GoogleAnalytics measurementId={siteConfig.googleAnalyticsId} />
                )}
            </head>
            <body
                className={cn(
                    roboto.variable, // Changed from inter.variable
                    playfair.variable,
                    'font-sans antialiased'
                )}
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
