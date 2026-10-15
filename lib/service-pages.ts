import type { ServiceSlug } from "./services";

// What each service page says beyond the menu line. English strings; translate at render with useTx().
// `demo` is a built screen from components/home/v2 (shown with example data); `shot` is a real capture;
// `visual` is a coded panel from components/pages/visuals.tsx; `proof` names a client story in STORIES.
// Rule (scripts/check-images.mjs): no image appears twice on a page and no two service pages share an image.
// A visual and a proof band may name the same client when they show different things (SEO: numbers, then the site).

export type ServicePage = {
  plain: string;
  gets: [string, string, string];
  demo?: "wa" | "auto" | "crm" | "app";
  shot?: { src: string; alt: string; cap: string };
  visual?: "sites" | "seo";
  proof?: string;
};

export const SERVICE_PAGES: Record<ServiceSlug, ServicePage> = {
  "web-design": {
    plain: "A website built to turn a visitor into a call. The domain, the site and the logins are in your name.",
    gets: [
      "It works on a phone first, because that's where your customers find you.",
      "English, Spanish or both.",
      "You see it working and ask for changes before it goes live.",
    ],
    visual: "sites",
  },
  seo: {
    plain: "When someone nearby searches for what you do, your business should be what they find. We set that up on Google and on Bing.",
    gets: [
      "A page for each service you offer and each area you cover.",
      "The setup search engines need to read your site.",
      "It builds over time. We tell you that before we start.",
    ],
    visual: "seo",
    proof: "Fitoria Tile & Marble",
  },
  "ai-search": {
    plain: "More people now ask ChatGPT instead of Google. We set up your business so the AI can read it, trust it and name it.",
    gets: [
      "Your services, areas and hours written so an AI can read them.",
      "We ask ChatGPT what your customers would ask, and see who it names.",
      "Nobody controls what an AI answers. We make you the business it can find.",
    ],
    shot: { src: "/images/home/chatgpt-fitoria.png", alt: "ChatGPT answer listing Fitoria Tile and Marble first for best tile contractor near me", cap: "ChatGPT, unedited. Client: Fitoria Tile & Marble." },
    proof: "Noah G Paint & Design",
  },
  automations: {
    plain: "The reply, the reminder, the review request and the follow-up go out without you touching them.",
    gets: [
      "The first reply goes out while you're still on the job.",
      "Reminders before the appointment and a review request after.",
      "A reply from the customer stops the sequence and reaches you.",
    ],
    demo: "auto",
  },
  "ai-agents": {
    plain: "A program that talks with your customers the way a good receptionist would. It answers questions, takes details and books appointments, at any hour.",
    gets: [
      "It uses your prices, your services and your way of talking.",
      "You approve what it says before it goes live.",
      "It works on your site, your phone line or your messages.",
    ],
    demo: "wa",
  },
  "ai-personal-assistant": {
    plain: "Your own assistant in the app you already use. You message it like you'd message your best employee, and it does the rest.",
    gets: [
      "On WhatsApp, Telegram or text.",
      "One assistant or a small team, each with its own job.",
      "Built around the work you repeat every week.",
    ],
    shot: { src: "/images/home/telegram.jpg", alt: "Telegram screenshot of the Brokie agent team built for Broke and Fixed. Client details blurred.", cap: "A real screenshot of Brokie, the agent team we built for Broke & Fixed. Client details blurred." },
    proof: "Broke & Fixed Home Solutions",
  },
  crm: {
    plain: "Not a giant system with a hundred buttons. One built around how your business works, with your contacts moved in.",
    gets: [
      "Every lead and client in one list, with the next step.",
      "Only the stages and fields your business uses.",
      "Your existing contacts moved in for you.",
    ],
    demo: "crm",
  },
  "client-apps": {
    plain: "For barbers, salons, groomers and anyone with regulars. They rebook from their phone. You see your week at a glance.",
    gets: [
      "Your regulars rebook in one tap.",
      "Reminders go out before the appointment.",
      "Your week on one screen.",
    ],
    demo: "app",
  },
  "custom-tools": {
    plain: "When no app fits how you work, we build the one that does. Pace turns an owner's spreadsheet into one screen and tells him the three things to do today.",
    gets: [
      "Built around how you already work.",
      "One screen instead of a spreadsheet and three apps.",
      "It shows what needs you today.",
    ],
    shot: { src: "/images/home/pace.png", alt: "Pace dashboard showing sold this month, the three things to do today and blocked jobs", cap: "Pace, built for a Miami painting contractor. Shown with demo data." },
  },
  "business-ai": {
    plain: "A private AI that knows your prices, your services and your policies. You and your team ask it what you'd ask your most experienced employee.",
    gets: [
      "It answers from your own information.",
      "Your team gets the same answer every time.",
      "It stays inside your business.",
    ],
  },
};
