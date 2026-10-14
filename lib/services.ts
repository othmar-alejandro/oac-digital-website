// The ten services. English strings; translate at render with useTx().
// Titles and descriptions match the menu in components/layout/nav-data.ts (scripts/check-content.mjs enforces it).

export const SERVICES = [
  { slug: "web-design", group: "Get found", title: "Websites", desc: "A site you own that turns visitors into calls." },
  { slug: "seo", group: "Get found", title: "SEO", desc: "Show up on Google and Bing when locals search for what you do." },
  { slug: "ai-search", group: "Get found", title: "AI search", desc: "Built so ChatGPT and Google's AI can find you and recommend you." },
  { slug: "automations", group: "Never miss a lead", title: "Automations", desc: "Replies, reminders and follow-ups that send themselves." },
  { slug: "ai-agents", group: "Never miss a lead", title: "AI agents", desc: "An agent that answers questions and books appointments, day and night." },
  { slug: "ai-personal-assistant", group: "Never miss a lead", title: "AI personal assistant", desc: "Your own assistant on WhatsApp, Telegram or text." },
  { slug: "crm", group: "Keep clients, stay organized", title: "CRM built for you", desc: "Every lead and client in one place, shaped around your business." },
  { slug: "client-apps", group: "Keep clients, stay organized", title: "Apps for your clients", desc: "Booking apps that make coming back one tap." },
  { slug: "custom-tools", group: "Keep clients, stay organized", title: "Custom business tools", desc: "Dashboards and internal apps built around how you work." },
  { slug: "business-ai", group: "Keep clients, stay organized", title: "Your own business AI", desc: "A private AI that knows your prices, services and policies." },
] as const;

export type Service = (typeof SERVICES)[number];
export type ServiceSlug = Service["slug"];
