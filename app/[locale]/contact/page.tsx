import { redirect } from "next/navigation";

// The consultation form on the homepage is the contact page.
export default function Contact({ params: { locale } }: { params: { locale: string } }) {
  redirect(`/${locale}#consult`);
}
