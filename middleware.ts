import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'es'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Explicitly set localeDetection to true (though it's the default)
    localeDetection: true,

    // Optionally, you can specify how the locale prefix is handled.
    // The default is 'as-needed'.
    // localePrefix: 'always' // or 'as-needed' or 'never'
});

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'] // Using array for matcher as per suggestion, though string was also fine
};
