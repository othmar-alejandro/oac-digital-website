import { NextResponse } from "next/server";

// Leads live in the "oac-leads" Supabase project. The publishable key is safe to ship: row level
// security lets it insert a new lead and nothing else (no read, update or delete).
const SUPABASE_URL = process.env.LEADS_SUPABASE_URL ?? "https://qlvqngssyfdwnsdkjhyc.supabase.co";
const SUPABASE_KEY = process.env.LEADS_SUPABASE_KEY ?? "sb_publishable_oh2nnqvK_gHnHii3wgAg5g_q4Sq_hh4";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const text = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: real visitors never see this field. Answer as if it worked so bots don't retry.
  if (text(body.company, 200)) return NextResponse.json({ ok: true });

  const name = text(body.name, 120);
  const phone = text(body.phone, 40);
  const email = text(body.email, 200);
  const website = text(body.website, 300);
  const services = Array.isArray(body.services) ? body.services.map((s) => text(s, 60)).filter(Boolean).slice(0, 12) : [];

  if (name.length < 2 || phone.replace(/\D/g, "").length < 7 || !EMAIL.test(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({
        name,
        phone,
        email,
        website: website || null,
        no_website: body.noWebsite === true,
        services,
        locale: body.locale === "es" ? "es" : "en",
      }),
      cache: "no-store",
      // Don't leave the visitor waiting if the database is slow or unreachable.
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("lead insert failed", res.status, await res.text());
      return NextResponse.json({ error: "unavailable" }, { status: 502 });
    }
  } catch (error) {
    console.error("lead insert failed", error);
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
