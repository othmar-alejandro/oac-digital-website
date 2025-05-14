"use client";

import { useTranslations } from 'next-intl';
import { SectionWrapper } from '@/components/common/section-wrapper';

export default function TermsOfServicePage() {
    const t = useTranslations('TermsOfService'); // Basic namespace for translations

    return (
        <SectionWrapper bgColor="dark">
            <div className="container mx-auto py-12 px-4 md:px-8">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    {/* Placeholder - ideally t('title') */}
                    Terms of Service
                </h1>
                <div className="prose lg:prose-xl max-w-none mx-auto text-gray-200"> {/* Changed text color for dark bg */}
                    <p>
                        {/* Placeholder - ideally t('introduction') */}
                        Welcome to OAC Digital. These terms and conditions outline the rules and regulations for the use of OAC Digital&apos;s Website.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        {/* Placeholder - ideally t('acceptance') */}
                        By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use OAC Digital&apos;s website if you do not accept all of the terms and conditions stated on this page.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">2. License</h2>
                    <p>
                        {/* Placeholder - ideally t('license') */}
                        Unless otherwise stated, OAC Digital and/or its licensors own the intellectual property rights for all material on OAC Digital. All intellectual property rights are reserved. You may view and/or print pages from oacdigital.com for your own personal use subject to restrictions set in these terms and conditions.
                    </p>
                    <p>You must not:</p>
                    <ul>
                        <li>Republish material from oacdigital.com</li>
                        <li>Sell, rent or sub-license material from oacdigital.com</li>
                        <li>Reproduce, duplicate or copy material from oacdigital.com</li>
                        <li>Redistribute content from OAC Digital (unless content is specifically made for redistribution).</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Comments</h2>
                    <p>
                        {/* Placeholder - ideally t('userComments') */}
                        Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data (&apos;Comments&apos;). OAC Digital does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions ofOAC Digital, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">4. Disclaimer</h2>
                    <p>
                        {/* Placeholder - ideally t('disclaimer') */}
                        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to These Terms</h2>
                    <p>
                        {/* Placeholder - ideally t('changesToTerms') */}
                        We reserve the right to amend these terms and conditions at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
                    <p>
                        {/* Placeholder - ideally t('contactUs') */}
                        If you have any questions about these Terms, please contact us.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
