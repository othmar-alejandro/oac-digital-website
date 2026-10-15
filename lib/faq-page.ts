// The FAQ page. English strings; translate at render with useTx().
// Every answer restates something the site already says elsewhere. No prices, no turnaround promises, no guarantees.

export type FaqGroup = { title: string; items: { q: string; a: string }[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Getting started",
    items: [
      { q: "What happens on the free call?", a: "You tell us where your hours go. You leave knowing what we'd build first, and you decide after that. We call back within one business day." },
      { q: "Do I need to know which service I need?", a: "No. Tell us what's slowing you down and we'll tell you what we'd build first." },
      { q: "Where do you work?", a: "We're based in Miami and work with local businesses across Miami-Dade, Broward and Palm Beach counties." },
      { q: "Do you work in Spanish?", a: "Yes. Calls, the site and the messages your customers get can be in Spanish, English or both." },
    ],
  },
  {
    title: "What we build",
    items: [
      { q: "What is an AI agent, in plain words?", a: "A program that talks with your customers the way a good receptionist would. It answers questions, takes details and books appointments, at any hour." },
      { q: "Will it sound like a robot?", a: "It uses your prices, your services and your way of talking. You approve what it says before it goes live." },
      { q: "What's the difference between SEO and AI search?", a: "SEO is how you show up when someone searches on Google or Bing. AI search is how you show up when someone asks ChatGPT or Google's AI. We set up both so your business can be found and named." },
      { q: "Can you guarantee I'll be first on Google or ChatGPT?", a: "No. Nobody controls what a search engine or an AI answers. We make your business the one they can find, and it builds over time. We tell you that before we start." },
      { q: "Which businesses do you work with?", a: "Most of our clients are local service businesses: contractors, painters, tile and remodeling, auto detailing and mold remediation. The use cases on this site cover home services, barbers and salons, healthcare and real estate." },
    ],
  },
  {
    title: "Owning it and approving it",
    items: [
      { q: "Do I own what you build?", a: "Yes. The domain, the site, the accounts and the logins are in your name." },
      { q: "Can I see it before it goes live?", a: "Yes. You see it working and ask for changes before it goes live." },
      { q: "I'm not good with technology. Is that a problem?", a: "No. We set it up and show you the one or two things you'll use." },
    ],
  },
];
