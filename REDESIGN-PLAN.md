# Homepage redesign

Branch `redesign/home`. One phase open at a time. A phase closes when its "done when" passes and its gate opens. Full plan: `~/.claude/plans/there-is-a-folder-jaunty-piglet.md`.

Brand kit: `~/Documents/Codex/2026-09-16/i-r/outputs/oac-brand-kit/` (navy `#061321`, cobalt `#173F7A` / `#285AA6`, gold `#C79A43`, soft white `#F4F6F8`).

## Phases

- [x] **0 Baseline** · build passes on the branch
- [x] **1 Structure + copy** · EN + ES for all 12 sections · gate: Othmar approves
- [x] **2 Design direction** · Steep-style editorial, dark default with light toggle · chosen by Othmar 2026-10-12
- [ ] **3 Full homepage design** · desktop + mobile · gate: Othmar approves
- [ ] **4 Assets** · hero loop + stills, real screenshots · gate: Othmar approves each, spend capped
- [ ] **5 Foundation build** · tokens, fonts, logo, nav, footer · gate: Othmar tests preview
- [ ] **6a Build top** · hero + local clients strip
- [ ] **6b Build middle** · pain points + what I build + work glimpse
- [ ] **6c Build bottom** · how it works + pricing + who I serve + about + FAQ + final ask
- [ ] **7 Motion** · reduced-motion respected, no layout shift, performance not below baseline
- [ ] **8 Leads + CRM v1** · Neon `leads`, real contact form, `/admin/leads`
- [ ] **9 Challenge + launch** · Codex review, preview, production · gate: Othmar says ship

## Premium build standard (applies to phases 2 to 7)

The home page is not built from default shadcn parts. Radix stays only where it does accessibility work (FAQ accordion, mobile menu dialog, form).

- **One signature moment:** pinned hero scroll story built from real UI fragments (ChatGPT answer, agent reply, booking, client number) that fly in and dock as you scroll. GSAP ScrollTrigger, no video. Phones get a static stacked version; reduced motion shows everything in place.
- **Motion system:** GSAP + ScrollTrigger for scroll choreography, Lenis for smooth scroll (run on the GSAP ticker). Custom easing only. Nothing pops in.
- **Type:** a real display face at large scale. No Roboto, Inter or Arial. Chosen in phase 2.
- **Material:** floating glass nav pill, nested "double bezel" cards, hairlines, fine grain. No 1px gray borders, no stock drop shadows, no thick Lucide icons.
- **Layout:** asymmetric bento and editorial splits, a pinned horizontal work gallery. No centered hero over three equal cards.
- **Micro-interactions:** press states on every button, cursor-aware work tiles, live-site screenshots that scroll inside device frames.
- **No WebGL/3D scene:** heavy on phones, where this audience is. The scrubbed sequence carries the wow.
- **Guardrails:** animate transform and opacity only; blur only on fixed elements; Lighthouse performance stays at or above the phase 0 score.

Higgsfield balance on 2026-10-12: 263.5 credits (Starter). Enough for one short hero clip, not a multi-scene build.

## Receipts

### Phase 0 (2026-10-12)

- `npm run build`: passes, after excluding the untracked `websites-funnel/` app from the root `tsconfig.json` (it was being type-checked by the root project and failing on its own `@/` imports).
- Screenshots of the current home: `.redesign/baseline/{en,es}-{1440,390}.jpeg` (not committed).
- Lighthouse, mobile, `/en`, local production build: performance 77, accessibility 100, SEO 85. LCP 5.8 s, CLS 0, TBT 80 ms.
- Known before redesign: contact form does not submit anywhere (`components/contact/contact-form.tsx`); `app/[locale]/page.tsx` sets its title through `next/head`, which the app router ignores.

### Phase 1 (2026-10-12)

- Copy: `REDESIGN-COPY.md`, draft 4. Hero A chosen by Othmar: "More customers. Less busywork."
- Checks: 13 blocks in EN + ES; banned-word and dash grep clean; no prices; one ask (free consultation).
- Every result line has a source: Noah G August 2026 report (2,215 → 8,666 monthly Google impressions, Feb to Jul), Fitoria June 2026 report (1,463 → 2,904 impressions April to June; 36 → 54 pages on page one), three screenshots in `.redesign/proof/`.
- Still open, not blocking: ChatGPT screenshot for Broke & Fixed; each client's OK to publish their numbers (naming them is already cleared).
- Decided: booking calendar = Cal.com synced to Google Calendar, shown after the form so the lead is saved even if no time is picked (phase 8). Booking-app concept image in phase 4. No privacy or turnaround FAQ until there is a real answer.
- Work-page candidates from GitHub, beyond the six on the home page: ProEdge Security, Argoticlean, Integrity Mitigation, 2 Step Ahead, AAAA Transport, Asciende system, MyProgressBud app, Monster Truck Stories, customs duty calculator (RD), Broke & Fixed OS.

### Phase 3 (open)

- Working copy of the prototype: `.redesign/prototype/` (served locally; Claude Design holds an older copy without images).
- Done: desktop page, all sections, both themes, real assets (logos, two headshots, five site captures, ChatGPT and Google proof, Pace dashboard with demo data, Brokie agent thread with client details removed).
- Left: Othmar's sign-off on desktop; phone layout; contact form + calendar step; Spanish layout pass.
- Broke & Fixed does not show in ChatGPT yet, so no AI-search claim is made for them. Their story is the agent team.

## Rules learned

Every rejection becomes a rule here and applies to all later sections.

1. Brand direction is the brand kit above, not the black + `#F4AF25` palette in the `/oac-brand` skill.
2. One phase at a time; finish and test before the next.
4. Positioning is an AI agency that sells results. Websites are one of ten services. Never open with "your website".
5. No prices anywhere on the site. The one ask is a free consultation.
6. Unfinished projects may be shown, tagged "In progress". Mockups are tagged "Concept". Result claims need a screenshot behind them.
7. Design reference is Steep (steep.app): editorial serif headlines with the last words in italic, calm near-monochrome surfaces, one rare accent, floating product fragments, word-by-word reveals. Take the system, not the layout or assets.
8. Dark navy is the default theme, with a working light toggle. Every color is a token so both themes come from one set of components.
9. Anti-AI rules for every section: real captures and photos, never text-in-a-box standing in for an image; no glow gradients; no uppercase label above headings; italic accent in the hero and closing only; vary the section type so no two neighbours share a layout; boxes only where something is contained, hairlines elsewhere; gold appears once per view.
10. Full signature logo only at 500px wide or more (brand kit rule). Nav and small sizes use the "A" avatar plus the name in type.
3. No default shadcn look. The page must read as custom and expensive: motion, depth and type per the premium build standard.
