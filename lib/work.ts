import type { ServiceSlug } from "./services";
import type { VerticalSlug } from "./verticals";

// Work: client projects. English strings; translate at render with useTx().
// A case study needs a capture behind every result claim. Anything without one is a listing only.

export type Shot = { src: string; alt: string; cap: string };

export type CaseStudy = {
  slug: string;
  client: string;
  trade: string;
  url: string;
  site: string;
  vertical: VerticalSlug;
  services: ServiceSlug[];
  title: string;
  em: string;
  sub: string;
  before: string;
  built: string[];
  outcome: string;
  shots: Shot[];
  /** Renders the Search Console report card built from Fitoria's exports. */
  seoReport?: boolean;
};

export type Listing = { client: string; trade: string; what: string; url: string; site: string };

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "noah-g-paint-and-design",
    client: "Noah G Paint & Design",
    trade: "Painting, Miami",
    url: "https://www.noahgpaint.net/",
    site: "/images/home/site-noahgpaint.jpg",
    vertical: "home-services",
    services: ["web-design", "seo", "ai-search", "custom-tools"],
    title: "Ask ChatGPT for the best painting contractor in Kendall. It names",
    em: "Noah G first.",
    sub: "A painting contractor who wasn't showing up on Google. Now he's the first name AI search gives, and the first business on the map.",
    before: "Noah G Paint & Design didn't show up on Google. Customers who searched for a painter nearby found other companies.",
    built: [
      "A website that says what he paints and where.",
      "Search work so Google lists him for the jobs he wants.",
      "Setup so ChatGPT can find him and recommend him.",
      "Pace, a daily dashboard: sold this month, blocked jobs, the three things to do today.",
    ],
    outcome: "ChatGPT names him as the top recommendation for painting contractors in Kendall. Google puts him first in the map results for \"paint contractors near me\". Monthly Google impressions went from 2,215 in February to 8,666 in July.",
    shots: [
      { src: "/images/work/noahg-chatgpt.png", alt: "ChatGPT answer for best painting contractor in Kendall, listing Noah G Paint & Design first", cap: "ChatGPT, asked for the best painting contractor in Kendall. Screenshot taken October 12, 2026." },
      { src: "/images/work/noahg-google.png", alt: "Google results for paint contractors near me, with Noah G Paint & Design first", cap: "Google, \"paint contractors near me\". Screenshot taken October 12, 2026." },
      { src: "/images/home/pace.png", alt: "The Pace dashboard showing sold this month and three things to do today", cap: "Pace, built for a Miami painting contractor. Shown with demo data, not his real book of business." },
    ],
  },
  {
    slug: "fitoria-tile-and-marble",
    client: "Fitoria Tile & Marble",
    trade: "Tile and marble, Miami",
    url: "https://fitoriatileandmarble.com/",
    site: "/images/home/site-fitoria.jpg",
    vertical: "home-services",
    services: ["web-design", "seo", "ai-search"],
    title: "Ask ChatGPT for a tile contractor nearby. Fitoria is",
    em: "the first one it lists.",
    sub: "A tile and marble company that wasn't on Google when we started. Now both Google and ChatGPT send people to them.",
    before: "Fitoria wasn't showing up on Google when we started. Someone searching for a tile contractor in Miami-Dade didn't find them.",
    built: [
      "A website for their tile and marble work.",
      "Monthly search work, reported from Google Search Console.",
      "Setup so ChatGPT can find them and recommend them.",
    ],
    outcome: "ChatGPT lists them first for tile contractors nearby, and the phone started ringing. Their pages on Google's first page keep growing in every monthly report.",
    shots: [{ src: "/images/home/chatgpt-fitoria.png", alt: "ChatGPT answer for best tile contractor near me, listing Fitoria Tile & Marble first", cap: "ChatGPT, asked for the best tile contractor near me. Screenshot taken October 12, 2026." }],
    seoReport: true,
  },
  {
    slug: "broke-and-fixed-home-solutions",
    client: "Broke & Fixed Home Solutions",
    trade: "Kitchen and bath remodeling, Miami-Dade",
    url: "https://brokeandfixed.com/en",
    site: "/images/home/site-brokeandfixed.jpg",
    vertical: "home-services",
    services: ["web-design", "ai-agents", "ai-personal-assistant"],
    title: "A remodeling company with its own team of",
    em: "AI agents.",
    sub: "The owner runs the company from Telegram. Each agent has its own channel and its own job.",
    before: "Proposals got written at night, after a day on the job. Leads and estimates lived in texts and notebooks.",
    built: [
      "A website that carries the work.",
      "Brokie, a team of agents in Telegram: one for proposals, one for leads and estimates, others for SEO, social and video.",
      "A proposal agent that works from the owner's own services and wording.",
    ],
    outcome: "He sends the job details in the chat, the way he'd text a partner, and the proposal comes back in the same place. The agents work from his template and his notes, and he approves everything before it goes out.",
    shots: [{ src: "/images/home/telegram.jpg", alt: "The Brokie agent team in Telegram, with a proposal request in the Proposals channel", cap: "The Proposals channel in Telegram. The client's name, address, phone and prices are blurred." }],
  },
];

/** Live sites we built without a measured result to show. Listed, linked, not claimed. */
export const LISTINGS: Listing[] = [
  { client: "South Florida Mold Help", trade: "Mold remediation, South Florida", what: "Website", url: "https://southfloridamoldhelp.com/", site: "/images/home/site-moldhelp.jpg" },
  { client: "D-Tail Wash", trade: "Mobile auto detailing", what: "Website", url: "https://www.dtailwash.com/en", site: "/images/home/site-dtailwash.jpg" },
  { client: "Keep Her Light Alive Foundation", trade: "Nonprofit and memorial", what: "Website", url: "https://www.keepherlightalive.com/", site: "/images/home/site-keepherlightalive.jpg" },
];
