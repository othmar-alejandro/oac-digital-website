// The trades with a page under /industries. English strings; translate at render with useTx().

export const VERTICALS = [
  {
    slug: "home-services",
    title: "Home services",
    trades: "Contractors, painters, tile, remodeling, cleaning",
    lead: "You're on a job all day. The leads, the quotes and the follow-ups wait until night.",
  },
  {
    slug: "barbers-salons",
    title: "Barbers and salons",
    trades: "Barbers, salons, groomers, detailers: anyone with regulars",
    lead: "Your hands are busy and the phone keeps buzzing. Regulars drift when nobody reminds them.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    trades: "Dental, med spa, chiropractic, small clinics",
    lead: "The front desk is on the phone, at the window and on the computer at once. Calls after five go to voicemail.",
  },
  {
    slug: "real-estate",
    title: "Real estate",
    trades: "Agents and small brokerages",
    lead: "A lead comes in while you're at a showing. By the time you call, they've talked to someone else.",
  },
] as const;

export type Vertical = (typeof VERTICALS)[number];
export type VerticalSlug = Vertical["slug"];
