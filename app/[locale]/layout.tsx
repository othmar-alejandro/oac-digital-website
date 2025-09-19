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
import LocalBusinessSchema from '@/components/shared/LocalBusinessSchema'
import OrganizationSchema from '@/components/shared/OrganizationSchema'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});

const roboto = Roboto({ // Added Roboto configuration
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Include desired weights
    variable: '--font-roboto',
});

// Define base metadata values optimized for local SEO dominance
const siteConfig = {
    name: "OAC Digital Innovations - Premier Miami Digital Agency",
    description: "Premier AI-enhanced digital marketing agency in South Florida. Custom web development, SEO optimization, AI chatbot integration for Miami, Fort Lauderdale, West Palm Beach businesses. 30-60% faster delivery.",
    url: "https://www.oacdigital.biz",
    ogImage: "https://www.oacdigital.biz/og-image.jpg",
    twitterCard: "summary_large_image",
    twitterCreator: "@oacdigital",
    keywords: [
        "Miami digital marketing agency",
        "South Florida web design",
        "AI web development Miami",
        "Fort Lauderdale SEO",
        "West Palm Beach digital agency",
        "Brickell web design",
        "Wynwood digital marketing",
        "Coral Gables SEO",
        "Doral web development",
        "Aventura digital agency"
    ].join(", ")
};

// Function to generate static params for locales
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// Generate metadata dynamically for local SEO dominance
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const title = locale === 'es'
        ? "OAC Digital Innovations - Agencia Digital Premier en Miami"
        : "OAC Digital Innovations - Premier Miami Digital Marketing Agency";

    const description = locale === 'es'
        ? "Agencia digital líder en South Florida especializada en desarrollo web con IA, SEO, chatbots y marketing digital. Servimos Miami-Dade, Broward y Palm Beach con entrega 30-60% más rápida."
        : siteConfig.description;

    return {
        icons: {
            icon: '/images/favicon.ico',
        },
        title: {
            default: title,
            template: `%s | OAC Digital`,
        },
        description: description,
        keywords: siteConfig.keywords,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: 'a_GLwDCAFcLfpBFdFLrDY7l6BisyzTOr3FxEqiPIFQ8',
            yandex: 'your-yandex-verification-code', // Add actual verification code
            yahoo: 'your-yahoo-verification-code', // Add actual verification code
        },
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
        alternates: {
            canonical: `https://www.oacdigital.biz/${locale}`,
            languages: {
                'en': 'https://www.oacdigital.biz/en',
                'es': 'https://www.oacdigital.biz/es',
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

    // Provide messages to the client
    const messages = await getMessages(locale); // Pass locale to getMessages

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                {/* Preconnect to external services for better performance */}
                <link rel="preconnect" href="https://connect.facebook.net" />
                <link rel="preconnect" href="https://www.facebook.com" />
                <link rel="preconnect" href="https://scripts.clarity.ms" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* LLM-optimized structured data for local SEO dominance */}
                <LocalBusinessSchema />
                <OrganizationSchema />

                {/* Local SEO meta tags for South Florida dominance */}
                <meta name="geo.region" content="US-FL" />
                <meta name="geo.placename" content="Miami, Florida" />
                <meta name="geo.position" content="25.7617;-80.1918" />
                <meta name="ICBM" content="25.7617, -80.1918" />
                <meta name="DC.title" content={siteConfig.name} />

                {/* Enhanced local business markup */}
                <meta name="business:contact_data:street_address" content="Miami, FL" />
                <meta name="business:contact_data:locality" content="Miami" />
                <meta name="business:contact_data:region" content="FL" />
                <meta name="business:contact_data:postal_code" content="33101" />
                <meta name="business:contact_data:country_name" content="USA" />
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
