import { getRequestConfig, GetRequestConfigParams } from 'next-intl/server';
import { routing } from './i18n/routing'; // Import routing config

// New getMessages function with debugging
export async function getMessages(locale: string) {
    console.log('[DEBUG] getMessages called with locale:', locale);
    try {
        // Make sure this path is correct
        return (await import(`./messages/${locale}.json`)).default;
    } catch (error) {
        console.error(`[DEBUG] Error loading messages for locale ${locale}:`, error);
        // Fallback to defaultLocale from routing config
        console.log(`[DEBUG] Falling back to locale: ${routing.defaultLocale}`);
        return (await import(`./messages/${routing.defaultLocale}.json`)).default;
    }
}

// Modified getRequestConfig with debugging
export default getRequestConfig(async (params: GetRequestConfigParams) => {
    const localeFromParams = params.locale;
    console.log('[DEBUG] getRequestConfig called with locale:', localeFromParams);

    let currentLocale: string;

    if (localeFromParams && localeFromParams !== 'undefined' && routing.locales.includes(localeFromParams as any)) {
        currentLocale = localeFromParams;
    } else {
        console.log(`[DEBUG] Locale '${localeFromParams}' is undefined or invalid, defaulting to '${routing.defaultLocale}'.`);
        currentLocale = routing.defaultLocale;
    }

    return {
        locale: currentLocale,
        messages: await getMessages(currentLocale)
    };
});
