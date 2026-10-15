import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { PageHero, PageShell } from "@/components/pages/parts";
import { pageMeta } from "@/lib/page-meta";

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props) {
  return pageMeta(locale, "/terms-of-service", "Terms of Service", "The terms for using the OAC Digital Innovations website.");
}

// The text is the original template, unchanged and in English on both languages. It needs a legal review before it is relied on.
export default function TermsOfServicePage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return (
    <Layout>
      <PageShell>
        <PageHero crumb={{ label: "Home", href: "/" }} title="Terms of Service" />
        <div className="oa-sec" style={{ paddingTop: 0 }}>
          <div className="oa-wrap oa-legal">
        <p>
            Welcome to OAC Digital. These terms and conditions outline the rules and regulations for the use of OAC Digital&apos;s Website.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use OAC Digital&apos;s website if you do not accept all of the terms and conditions stated on this page.
        </p>

        <h2>2. License</h2>
        <p>
            Unless otherwise stated, OAC Digital and/or its licensors own the intellectual property rights for all material on OAC Digital. All intellectual property rights are reserved. You may view and/or print pages from oacdigital.com for your own personal use subject to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
            <li>Republish material from oacdigital.com</li>
            <li>Sell, rent or sub-license material from oacdigital.com</li>
            <li>Reproduce, duplicate or copy material from oacdigital.com</li>
            <li>Redistribute content from OAC Digital (unless content is specifically made for redistribution).</li>
        </ul>

        <h2>3. User Comments</h2>
        <p>
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data (&apos;Comments&apos;). OAC Digital does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions ofOAC Digital, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.
        </p>

        <h2>4. Disclaimer</h2>
        <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
        </p>

        <h2>Changes to These Terms</h2>
        <p>
            We reserve the right to amend these terms and conditions at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes.
        </p>

        <h2>Contact Us</h2>
        <p>
            If you have any questions about these Terms, please contact us.
        </p>
          </div>
        </div>
      </PageShell>
    </Layout>
  );
}
