// Places we serve: 26 cities in three counties, 3 city hubs and 11 business districts. Proper nouns, so no Spanish needed.
// Coordinates and zip codes were lifted from the old service x city pages. OAC is based in Miami; the other cities are service areas, not offices.

export type CountySlug = "miami-dade" | "broward" | "palm-beach";
export const COUNTIES: Record<CountySlug, string> = { "miami-dade": "Miami-Dade County", broward: "Broward County", "palm-beach": "Palm Beach County" };

export type City = { slug: string; name: string; county: CountySlug; lat: number; lng: number; zip: string };

export const CITIES: City[] = [
  { slug: "miami", name: "Miami", county: "miami-dade", lat: 25.7617, lng: -80.1918, zip: "33101" },
  { slug: "miami-beach", name: "Miami Beach", county: "miami-dade", lat: 25.7907, lng: -80.1300, zip: "33139" },
  { slug: "coral-gables", name: "Coral Gables", county: "miami-dade", lat: 25.7213, lng: -80.2683, zip: "33134" },
  { slug: "homestead", name: "Homestead", county: "miami-dade", lat: 25.4687, lng: -80.4776, zip: "33030" },
  { slug: "hialeah", name: "Hialeah", county: "miami-dade", lat: 25.8576, lng: -80.2781, zip: "33010" },
  { slug: "kendall", name: "Kendall", county: "miami-dade", lat: 25.6793, lng: -80.3200, zip: "33156" },
  { slug: "aventura", name: "Aventura", county: "miami-dade", lat: 25.9565, lng: -80.1390, zip: "33180" },
  { slug: "doral", name: "Doral", county: "miami-dade", lat: 25.8195, lng: -80.3553, zip: "33166" },
  { slug: "fort-lauderdale", name: "Fort Lauderdale", county: "broward", lat: 26.1224, lng: -80.1373, zip: "33301" },
  { slug: "hollywood", name: "Hollywood", county: "broward", lat: 26.0112, lng: -80.1495, zip: "33019" },
  { slug: "pembroke-pines", name: "Pembroke Pines", county: "broward", lat: 26.0070, lng: -80.2962, zip: "33028" },
  { slug: "davie", name: "Davie", county: "broward", lat: 26.0764, lng: -80.2526, zip: "33314" },
  { slug: "plantation", name: "Plantation", county: "broward", lat: 26.1267, lng: -80.2331, zip: "33324" },
  { slug: "sunrise", name: "Sunrise", county: "broward", lat: 26.1669, lng: -80.2567, zip: "33322" },
  { slug: "coral-springs", name: "Coral Springs", county: "broward", lat: 26.2710, lng: -80.2706, zip: "33065" },
  { slug: "pompano-beach", name: "Pompano Beach", county: "broward", lat: 26.2379, lng: -80.1248, zip: "33060" },
  { slug: "miramar", name: "Miramar", county: "broward", lat: 25.9873, lng: -80.2322, zip: "33025" },
  { slug: "weston", name: "Weston", county: "broward", lat: 26.1003, lng: -80.3997, zip: "33326" },
  { slug: "west-palm-beach", name: "West Palm Beach", county: "palm-beach", lat: 26.7153, lng: -80.0534, zip: "33401" },
  { slug: "boca-raton", name: "Boca Raton", county: "palm-beach", lat: 26.3683, lng: -80.1289, zip: "33431" },
  { slug: "delray-beach", name: "Delray Beach", county: "palm-beach", lat: 26.4615, lng: -80.0728, zip: "33444" },
  { slug: "boynton-beach", name: "Boynton Beach", county: "palm-beach", lat: 26.5253, lng: -80.0664, zip: "33435" },
  { slug: "wellington", name: "Wellington", county: "palm-beach", lat: 26.6581, lng: -80.2417, zip: "33414" },
  { slug: "palm-beach-gardens", name: "Palm Beach Gardens", county: "palm-beach", lat: 26.8234, lng: -80.1387, zip: "33410" },
  { slug: "jupiter", name: "Jupiter", county: "palm-beach", lat: 26.9342, lng: -80.0942, zip: "33458" },
  { slug: "lake-worth", name: "Lake Worth", county: "palm-beach", lat: 26.6156, lng: -80.0669, zip: "33460" },
];

/** The three city hubs at /locations/[slug]; each is also a city. */
export const HUB_SLUGS = ["miami", "fort-lauderdale", "west-palm-beach"] as const;

export type District = { slug: string; name: string; city: string; lat: number; lng: number };

export const DISTRICTS: District[] = [
  { slug: "downtown-miami", name: "Downtown Miami", city: "miami", lat: 25.7743, lng: -80.1937 },
  { slug: "brickell", name: "Brickell", city: "miami", lat: 25.7663, lng: -80.1917 },
  { slug: "wynwood", name: "Wynwood", city: "miami", lat: 25.8011, lng: -80.1994 },
  { slug: "design-district", name: "Design District", city: "miami", lat: 25.8014, lng: -80.1953 },
  { slug: "south-beach", name: "South Beach", city: "miami-beach", lat: 25.7814, lng: -80.1300 },
  { slug: "downtown-fort-lauderdale", name: "Downtown Fort Lauderdale", city: "fort-lauderdale", lat: 26.1224, lng: -80.1373 },
  { slug: "las-olas", name: "Las Olas", city: "fort-lauderdale", lat: 26.1201, lng: -80.1434 },
  { slug: "port-everglades", name: "Port Everglades", city: "fort-lauderdale", lat: 26.0890, lng: -80.1187 },
  { slug: "downtown-west-palm-beach", name: "Downtown West Palm Beach", city: "west-palm-beach", lat: 26.7153, lng: -80.0534 },
  { slug: "clematis-street", name: "Clematis Street", city: "west-palm-beach", lat: 26.7145, lng: -80.0558 },
  { slug: "palm-beach-gardens-business-park", name: "Palm Beach Gardens Business Park", city: "palm-beach-gardens", lat: 26.8234, lng: -80.1387 },
];

/** Hubs live at /locations; every other city is reached through its web design page. */
export const cityHref = (c: City) => ((HUB_SLUGS as readonly string[]).includes(c.slug) ? `/locations/${c.slug}` : `/services/web-design/${c.slug}`);
export const cityBySlug = (slug: string) => CITIES.find((c) => c.slug === slug);
export const districtBySlug = (slug: string) => DISTRICTS.find((d) => d.slug === slug);

// The four services that have city pages. Two of them are old slugs: they have no page of their own in lib/services.ts,
// so they are defined here as a pair of real services. `noun` is the headline phrase; the city follows it.
// English strings; translate at render with useTx().
import type { ServiceSlug } from "./services";

export type CityService = {
  slug: "web-design" | "seo" | "digital-marketing" | "ai-solutions";
  noun: string;
  /** Services whose pages and use cases this one stands for. */
  parts: ServiceSlug[];
  /** Composite slugs only: the line and three points the city page and /services/<slug> carry. */
  plain?: string;
  gets?: [string, string, string];
  hubTitle?: string;
  hubEm?: string;
};

export const CITY_SERVICES: CityService[] = [
  { slug: "web-design", noun: "Web design", parts: ["web-design"] },
  { slug: "seo", noun: "SEO", parts: ["seo"] },
  {
    slug: "digital-marketing",
    noun: "Digital marketing",
    parts: ["seo", "ai-search"],
    plain: "When someone nearby looks for what you do, your business is what they find, on Google and when they ask ChatGPT.",
    gets: [
      "A page for each service you offer and each area you cover.",
      "Your business written so an AI can read it, trust it and name it.",
      "It builds over time. We tell you that before we start.",
    ],
    hubTitle: "Digital marketing is",
    hubEm: "search and AI search.",
  },
  {
    slug: "ai-solutions",
    noun: "AI agents and automations",
    parts: ["ai-agents", "automations"],
    plain: "An agent talks with your customers at any hour. Automations send the replies, reminders and review requests for you.",
    gets: [
      "It uses your prices, your services and your way of talking.",
      "Reminders before the appointment and a review request after.",
      "A reply from the customer reaches you and stops the follow-up.",
    ],
    hubTitle: "AI solutions are",
    hubEm: "agents and automations.",
  },
];

export const cityService = (slug: string) => CITY_SERVICES.find((s) => s.slug === slug);
