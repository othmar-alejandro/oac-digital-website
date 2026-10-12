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
- Audit 2026-10-12 (Fable): 22/32. Root cause of "faded": surfaces 1.03 to 1.09 apart in dark mode. Fixed: surface scale, inverted pain band, light hero board with typing search bar, 72% secondary text, italic phrase on all 7 headlines, scroll reveals on 28 elements, nav transparent until scrolled, four built demo screens (WhatsApp agent, automation timeline, CRM record, booking app), Steep-style section links, footer logo 560px, numbers and scroll hint removed. Re-rendered clean: 0 errors, 0 broken images, both themes.
- 2026-10-12, second pass: four Higgsfield scene plates (gpt_image_2_5, 4 x 0.25 credits = 1 credit) with blank frontal phones, measured screen rectangles, built UIs composited inside (WhatsApp agent, automation timeline, CRM record, booking app). Real Telegram screenshot of Brokie in the assistant section, client name, address, phone and prices blurred; the raw file stays out of the repo. Full signature logo in nav and footer. Dark theme fully dark again. Rendered clean: 0 errors, 0 broken images.
- 2026-10-12, third pass: gold system (primary pill, hero and closing italics, tour progress, status chips, story underline, section-link chevrons), drafting grid behind hero, results and closing, gold registration ticks on the hero board, faint gold folio numerals on results and steps. Proof copy rewritten without monthly stats. No overlaps (measured), 0 errors.
- 2026-10-12, fourth pass: pain-point section rebuilt as a Today / With OAC flip. Five Higgsfield scene photos (4:5, no people, 1.25 credits), each with a live artifact card that changes state: Today = loss (pink card, red chip, "Seen at 9:02 am"), With OAC = relief (white card, gold chip, "Replied 9:14 pm · Booked"). Opens on Today, flips itself once after 3 seconds in view, then the segmented control takes over. 0 errors, 0 broken images. Higgsfield total so far: 2.25 credits.
- 2026-10-12, fifth pass: the Today / With OAC toggle was wrong UX (hidden state, label meaningless before reading). Replaced with problem-over-resolution cards: pain line on top, the "today" artifact (pink, red chip), then the OAC artifact (white, gold chip, "A" mark + service name) that slides in on its own about a second after the card scrolls into view, while the today card dims. Legend in the intro cell. No clicks required; both halves always visible.
- 2026-10-12, sixth pass (reference-driven): looked at Linear, Granola, Attio, Raycast, Fin and a Dribbble sweep for problem-to-solution sections. Took three things: Granola's day-in-the-life framing (cards reordered 7:40 am to 11:48 pm, a travelling gold dot on the intro timeline), Linear's figure numbering and two-line restraint (gold index + time chip per card), Attio/Linear's drawn connections (problem and fix are one thread with the OAC mark on the line). Page layout untouched. Found and fixed a broken `.scrim` rule that was swallowing the rule after it.
- 2026-10-12, seventh pass: the four tour demos rebuilt as dense product screens on the grid stage, no photo plates (Othmar: the hand-held-phone plates read as stock). AI agent = clean phone frame with a full WhatsApp thread plus an "Handled by the agent" log; Automations = Attio-style flow graph (trigger, texts, waits, if/else branch) plus a run log; CRM = four-column pipeline board with a highlighted record and an open record panel; Booking = client phone (rebook card, week strip, past visits) plus the owner's week calendar. All labelled example or concept. 0 errors.
- 2026-10-12, eighth pass: hero cards changed from four Noah G items to one card per result across three clients (Othmar chose option A): ChatGPT answer for Fitoria under the typed query, the Brokie Telegram screenshot, a CRM pipeline fragment (example), the WhatsApp booking chip (example). Noah G stays in the client strip and story band. Othmar kept: the four service screens, the day-in-the-life section, gold and grid levels, the example captions as they are. Footer and nav logos hardened and measured in WebKit (2.89 ratio in both engines).
- Left: phone layout; contact form + calendar step; Spanish layout pass (go-ahead pending).
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
9. Anti-AI rules for every section: real captures and photos, never text-in-a-box standing in for an image; no glow gradients; no uppercase label above headings; vary the section type so no two neighbours share a layout; boxes only where something is contained, hairlines elsewhere; gold appears once per view.
11. Headline emphasis is a system, not a tic (audit 2026-10-12): one italic phrase per headline, ink-colored; cobalt only in the hero. Section links in sentence case ("Services ›") are allowed above a heading because they are links, not labels.
12. Tonal range: adjacent surfaces must differ by a contrast ratio of 1.3 or more, or they are the same color. Dark stays fully dark (Othmar's call); range in dark comes from the light hero board, white proof cards, the cobalt story band and the photo plates, not from inverted bands.
14. Gold is a system now (Othmar, 2026-10-12): primary action fill, the italic phrase in hero and closing, progress and status marks, folio numerals. Cobalt stays for the story band and secondary links. No monthly stats on the page; proof reads as before/after and outcome.
15. Never hide half of an argument behind a control. A before/after must show both states in reading order without a click; interaction may add, never gate.
13. Every section headline reveals on scroll (mask wipe + rise), then its description, then its control. Nothing below the hero sits static.
10. Nav and footer use the full signature logo (Othmar's call, 2026-10-12, overriding the kit's 500px rule). One transparent file for both themes; no wordmark text beside it.
3. No default shadcn look. The page must read as custom and expensive: motion, depth and type per the premium build standard.
