import React from 'react'; // Add explicit React import
import '../globals.css'; // Adjusted path for globals.css
import type { Metadata } from 'next';
import { Playfair_Display, Roboto } from 'next/font/google'; // Added Roboto
// import { notFound } from 'next/navigation'; // No longer needed here
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server'; // Import setRequestLocale
import { getMessages } from '../../i18n'; // Import getMessages from local i18n.ts
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';
import { routing } from '@/i18n/routing'; // Import routing config for locales
import { Analytics } from "@vercel/analytics/next"

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});

const roboto = Roboto({ // Added Roboto configuration
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Include desired weights
    variable: '--font-roboto',
});

// Define base metadata values (can be moved to a config or fetched)
const siteConfig = {
    name: "OAC Digital",
    description: "OAC Digital is a digital marketing agency specializing in web design, SEO, and content creation.",
    url: "https://oac-digital.com", // Replace with actual URL
    ogImage: "https://oac-digital.com/og-image.jpg", // Replace with actual OG image URL
    twitterCard: "summary_large_image",
    twitterCreator: "@oacdigital", // Replace with actual Twitter handle
};

// Function to generate static params for locales
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// Generate metadata dynamically
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const title = "OAC Digital - Web Design & SEO Agency";
    const description = "OAC Digital is a digital marketing agency specializing in web design, SEO, and content creation. We help businesses grow their online presence.";

    return {
        icons: {
            icon: '/images/favicon.ico',
        },
        title: {
            default: title,
            template: `%s | OAC Digital`,
        },
        description: description,
        openGraph: {
            title: "OAC Digital - Web Design & SEO Agency",
            description: "Innovative web solutions to grow your business.",
            url: siteConfig.url,
            type: "website",
            images: [
                {
                    url: siteConfig.ogImage,
                    width: 1200,
                    height: 630,
                    alt: "OAC Digital - Web Design & SEO Agency",
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
        verification: {
            google: 'a_GLwDCAFcLfpBFdFLrDY7l6BisyzTOr3FxEqiPIFQ8',
        },
        alternates: {
            canonical: `https://oac-digital.com/${locale}`,
            languages: {
                'en': 'https://oac-digital.com/en',
                'es': 'https://oac-digital.com/es',
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
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": "https://oac-digital.com/#business",
                            name: "OAC Digital",
                            legalName: "OAC Digital LLC",
                            description: "OAC Digital is a digital marketing agency specializing in web design, SEO, and content creation.",
                            url: "https://oac-digital.com",
                            telephone: "(305) 340-5282",
                            email: "contact@oac-digital.com",
                            image: "https://oac-digital.com/logo.png",
                            logo: "https://oac-digital.com/logo.png",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "123 Main St",
                                addressLocality: "Miami",
                                addressRegion: "FL",
                                postalCode: "33101",
                                addressCountry: "US"
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: 25.7617,
                                longitude: -80.1918
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                    opens: "09:00",
                                    closes: "17:00"
                                }
                            ],
                            priceRange: "$$",
                            areaServed: ["Miami", "Fort Lauderdale", "West Palm Beach"],
                        }),
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1238734610862878');
fbq('track', 'PageView');
`,
                    }}
                />
                <noscript><img height="1" width="1" style={{display:'none'}}
src="https://www.facebook.com/tr?id=1238734610862878&ev=PageView&noscript=1"
alt=""
rel="preload"
/></noscript>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "sj2c5ntj5v");
`,
                    }}
                />
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
                        <Analytics />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
