// Navigation content for the redesigned header, drawer and footer. Strings are English; translate with useTx().

export const SERVICE_GROUPS = [
  {
    title: "Get found",
    items: [
      { title: "Websites", href: "/services/web-design", desc: "A site you own that turns visitors into calls." },
      { title: "SEO", href: "/services/seo", desc: "Show up on Google and Bing when locals search for what you do." },
      { title: "AI search", href: "/services/ai-search", desc: "Built so ChatGPT and Google's AI can find you and recommend you." },
    ],
  },
  {
    title: "Never miss a lead",
    items: [
      { title: "Automations", href: "/services/automations", desc: "Replies, reminders and follow-ups that send themselves." },
      { title: "AI agents", href: "/services/ai-agents", desc: "An agent that answers questions and books appointments, day and night." },
      { title: "AI personal assistant", href: "/services/ai-personal-assistant", desc: "Your own assistant on WhatsApp, Telegram or text." },
    ],
  },
  {
    title: "Keep clients, stay organized",
    items: [
      { title: "CRM built for you", href: "/services/crm", desc: "Every lead and client in one place, shaped around your business." },
      { title: "Apps for your clients", href: "/services/client-apps", desc: "Booking apps that make coming back one tap." },
      { title: "Custom business tools", href: "/services/custom-tools", desc: "Dashboards and internal apps built around how you work." },
      { title: "Your own business AI", href: "/services/business-ai", desc: "A private AI that knows your prices, services and policies." },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "Use cases", href: "/use-cases" },
  { title: "Work", href: "/portfolio" },
  { title: "How it works", href: "/#how" },
  { title: "About", href: "/about" },
] as const;

export const SERVICES_HREF = "/services";

// The one ask: the consultation form at the bottom of the homepage.
export const CONSULT_HREF = "/#consult";

export const CONTACT = {
  email: "Ocasilla@oacdigital.biz",
  instagram: "@oacdigital_",
  instagramHref: "https://www.instagram.com/oacdigital_/",
} as const;
