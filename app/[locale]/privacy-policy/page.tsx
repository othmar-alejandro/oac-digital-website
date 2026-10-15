import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/layout/layout";
import { PageHero, PageShell } from "@/components/pages/parts";
import { pageMeta } from "@/lib/page-meta";

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props) {
  return pageMeta(locale, "/privacy-policy", "Privacy Policy", "How OAC Digital Innovations collects and uses information.");
}

// The text is the original template, unchanged and in English on both languages. It needs a legal review before it is relied on.
export default function PrivacyPolicyPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  return (
    <Layout>
      <PageShell>
        <PageHero crumb={{ label: "Home", href: "/" }} title="Privacy Policy" />
        <div className="oa-sec" style={{ paddingTop: 0 }}>
          <div className="oa-wrap oa-legal">
        <p>
            Welcome to OAC Digital&apos;s Privacy Policy. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>

        <h2>Information Collection and Use</h2>
        <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>

        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:
        </p>
        <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Cookies and Usage Data</li>
        </ul>

        <h4>Usage Data</h4>
        <p>
            We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
        </p>

        <h2>Use of Data</h2>
        <p>
            OAC Digital uses the collected data for various purposes:
        </p>
        <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2>Changes to This Privacy Policy</h2>
        <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the &quot;effective date&quot; at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
            If you have any questions about this Privacy Policy, please contact us.
        </p>
          </div>
        </div>
      </PageShell>
    </Layout>
  );
}
