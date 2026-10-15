# Homepage redesign

Branch `redesign/home`. One phase open at a time. A phase closes when its "done when" passes and its gate opens. Full plan: `~/.claude/plans/there-is-a-folder-jaunty-piglet.md`.

Brand kit: `~/Documents/Codex/2026-09-16/i-r/outputs/oac-brand-kit/` (navy `#061321`, cobalt `#173F7A` / `#285AA6`, gold `#C79A43`, soft white `#F4F6F8`).

## Phases

- [x] **0 Baseline** · build passes on the branch
- [x] **1 Structure + copy** · EN + ES for all 12 sections · gate: Othmar approves
- [x] **2 Design direction** · Steep-style editorial, dark default with light toggle · chosen by Othmar 2026-10-12
- [x] **3 Full homepage design** · desktop + phone, EN + ES, interactive form · approved by Othmar 2026-10-12
- [x] **4 Assets** · 17 files in `public/images/home/` (2.3 MB) · all shown on the approved page
- [ ] **5 Foundation build** · tokens, fonts, logo, nav, footer · gate: Othmar tests preview
- [ ] **6 Homepage build** (6a, 6b, 6c merged at Othmar's request 2026-10-12) · all 11 sections live in the Next.js site · built, gate: Othmar tests
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
- 2026-10-12, ninth pass: primary buttons given a Liquid Glass material (gold-tinted translucent fill, backdrop blur, bright top-left rim via masked gradient border, specular highlight that slides on hover, lift on hover, scale + brighten on press). Secondary "ghost" buttons stay flat on purpose. Applied only to the primary pill class.
- 2026-10-12, tenth pass: glass buttons kept (Othmar). CTA type: weight 600, slight negative tracking, arrow inside a translucent chip at the button's trailing edge; secondary text links at 600 with a gold arrow. Labels switched to first person ("Get my free consultation") in hero, mega menu and closing; nav keeps "Free consultation".
- 2026-10-12, eleventh pass: four in-section CTAs added (approved by Othmar), same single ask with a section-specific lead-in: after the services demos ("Not sure which one you need? That's what the call is for."), after the day cards ("Which one is yours?"), after Three steps ("Step one is free."), after the FAQ ("Ask the rest on the call."). Local server now sends `Cache-Control: no-store`; the browser had been caching `HomeSections.dc.html`, so plain refreshes could show stale sections.
- 2026-10-12, twelfth pass (the last three phase 3 items):
  - **Phone layout** (760px and below): hamburger + full-screen drawer (three service groups, links, language, theme, the ask); static stacked hero with no scroll story; demos cropped and scaled inside their box; every grid to one column. Measured at 390px: 0px horizontal overflow, no element past the right edge, EN and ES.
  - **Consultation form**: name, phone, email (optional), what's going on; submit saves first, then offers six time slots or "skip, just call me"; confirmation state. All CTAs on the page now scroll to it. Prototype only: nothing is sent or stored (real wiring is phase 8, Neon + Cal.com).
  - **Spanish**: working EN/ES switch in the nav and drawer. 290 strings in `.redesign/prototype/es.js`, keyed by the English text, which becomes the source for `messages/es.json` at build. Checked: 0 strings left in English after switching, 0 overflow on desktop and phone, tab changes stay in Spanish.
  - Bugs found and fixed in this pass: a class name shared by the hero stage and the demo stage; a stray rule shrinking the founder photo to 16px; demo screens escaping their box on phones.
  - Not done: Spanish alt text on images; light theme on phone was not screenshotted; tablet widths (761 to 1100px) not designed, the two-column tour crops there.
- 2026-10-12, thirteenth pass: static form replaced by a one-question-at-a-time flow (Othmar asked for an interactive form). Steps: name → what you need help with (ten plain-language service chips, multi-select, an "i" on each that explains it in one sentence, "Not sure yet" is exclusive) → website (optional, or "I don't have one yet") → phone + email (both required) → pick a time or skip → confirmation with their name, slot and chosen services. Progress line, step counter, Back keeps every answer, Enter continues, field is focused on each step, inline errors in plain words. Tested end to end by typing through it: empty name, no service, short phone, bad email, back and forth, slot pick, English and Spanish, phone width. 343 Spanish strings now.
  - Fixed on the way: the component's update hook never received the previous state, so switching back from Spanish to English did nothing and step focus never fired; the browser's own email check was swallowing the submit.
- **Phase 3 closed 2026-10-12.** Othmar approved the form, the phone layout and the Spanish. Standing choices: Spanish hero is "Menos papeleo"; tablet widths (761 to 1100px) are handled in the build, not designed separately.

### Phase 4 (2026-10-12)

No hero video (the hero is built UI). Final set copied to `public/images/home/`, only what the page references:

| File | What | Real or generated |
|---|---|---|
| `logo-sig.png`, `avatar.png` | Brand kit signature logo and "A" mark | real |
| `othmar.jpg`, `othmar-2.jpg` | Founder photos | real |
| `site-*.jpg` (5) | Live captures of client sites, taken 2026-10-12 | real |
| `chatgpt-fitoria.png` | Unedited ChatGPT answer | real |
| `telegram.jpg` | Brokie agent team; client name, address, phone and prices blurred | real, redacted |
| `pace.png` | Pace dashboard with its own demo-data label | real product, demo data |
| `pain-1..5.jpg` | Scene photos for the day-in-the-life cards, no people | generated (Higgsfield) |

Higgsfield spend for the whole project: 2.25 credits. Not shipped: the four hand-held-phone plates, the Noah G ChatGPT and Google crops, the composed logo lockups. `public/images/brand/` (copied earlier, 8 files) is unused by the page and can be trimmed to the favicon sources in phase 5.
- Broke & Fixed does not show in ChatGPT yet, so no AI-search claim is made for them. Their story is the agent team.

### Phase 5 (2026-10-12, built, waiting on Othmar's test)

- Real code now. New site-wide header (signature logo, mega menu, phone drawer, EN/ES switch, theme toggle, glass ask) and footer (new columns, the four SEO link groups kept, signature logo), in `components/layout/`.
- `app/redesign.css`: the prototype's styles, namespaced `oa-*` / `--o-*` so they cannot collide with the existing site. `lib/home-i18n.ts`: the 343 Spanish strings, looked up by the English text.
- Fonts: Newsreader (next/font/google) and Geist (local file, `app/fonts/`), replacing Playfair and Roboto. Default theme dark.
- Tokens in `app/globals.css` mapped to the brand kit. **The pages not yet redesigned stay light in both themes** on purpose: they hardcode white panels, and letting them follow the dark theme made text invisible on the programmatic SEO pages. Until those pages are redesigned the site is dark chrome around light content.
- Checks: `npm run build` passes (307 pages), lint clean, sitemap serves 324 URLs, EN ↔ ES switch keeps the path, theme toggle works, mega menu and drawer open, 0px sideways scroll at 390px. Looked at: home, About, an industry page, a programmatic service page, EN and ES.
- Pre-existing, not touched: 20 MISSING_MESSAGE errors during build (Faqs, PrivacyPolicy, TermsOfService, FaqAccordion, ContactPage.hours) that exist on main without these changes.
- Not done yet: the homepage body is still the old one (phase 6); the ask points to `/contact` until the new form ships in 6c; the footer no longer links `/sitemap`, which was a dead link.

### Phase 6 (2026-10-12, built, waiting on Othmar's test)

- Othmar saw the new header over the old homepage and asked for the rest, so 6a to 6c were built as one slice.
- `components/home/v2/` (hero, static, tour, home, consult-form, data), `app/[locale]/page.tsx` now a server component with EN/ES metadata. Old `components/home/*` are unused by the homepage and left in place.
- `npm run build`: 307 pages, exit 0. Type-check clean. Lint: only `<img>` warnings. The 20 MISSING_MESSAGE errors are the same ones on main.
- Browser run at 1440 and 390, `/en` and `/es`: no horizontal overflow, no broken images, 38 of 38 reveals fire, no console errors except the Vercel insights script (404 on localhost only).
- Clicked through: hero scroll story, 6 service tabs, 3 client stories, FAQ, the form (each error message, Not sure yet is exclusive, Back keeps answers, slot and confirmation), light and dark, nav button from `/about` lands on the form.
- Not done yet: the form sends nothing (phase 8) while its last screen says "You'll get a text to confirm"; image alt text and client trade lines are English on `/es`; tablet widths unchecked; Lighthouse not rerun (phase 7).
- Screenshots: `.redesign/design/p6-*.jpg`.

### Phase 8, first part (2026-10-12)

- Leads save to the `leads` table in the Supabase project `oac-leads` (free plan), through `app/api/leads/route.ts`. Othmar chose Supabase over Neon for launch.
- The public key can only insert a new lead: reading and deleting with it return 401 (checked with curl).
- Form test on `/es`: a real submission created one row; an invalid request got 400; the honeypot stored nothing; a forced failure kept the visitor on the step with an error.
- Placeholder time slots removed. The form ends on "We'll call you within one business day."
- Still open: notification when a lead arrives, `/admin/leads`, calendar.

### Inner pages, slices 1 to 3 (2026-10-13, built, waiting on Othmar's test)

- Page plan: `~/.claude/plans/pasted-content-id-000b-let-s-see-enchanted-wombat.md`. Data and copy for 10 services, 4 trades and 20 use cases were written in an earlier session.
- Built: `/services` (three groups, ten cards), 10 service pages, `/use-cases` and 20 use case pages, 4 trade pages under `/industries` (home-services, barbers-salons, healthcare, real-estate). `/contact` redirects to the homepage form. Menu items link to their service page; "Use cases" added to the nav; sitemap reads the data files.
- Templates in `components/pages/`, built only from homepage parts in `app/redesign.css`. No new images.
- `npm run build`: 374 pages (was 307), exit 0. `scripts/check-content.mjs` ok. Every string on the new pages has Spanish.
- Browser at 1440 and 390, `/en` and `/es`, 14 page types: no sideways scroll, no broken images, no page errors. Reveals fire on the 6 pages rechecked at normal scroll speed.
- Not done: Work page and case studies (slice 4), city and district pages (5), blog, FAQ, legal, cuts and redirects (6), second batch of trades (7). Service pages have no FAQ block yet. Legal, restaurants, retail and automotive keep the old page.

### Inner pages, slice 4: Work (2026-10-15, built, waiting on Othmar's test)

- `/portfolio` rewritten as an index: three case studies, three listed sites (South Florida Mold Help, D-Tail Wash, Keep Her Light Alive). Case studies at `/portfolio/[slug]` for Noah G, Fitoria and Broke & Fixed, from `lib/work.ts`; template in `components/pages/work-pages.tsx`.
- Every result sits next to a capture: ChatGPT and Google screenshots (Noah G, Oct 12, copied from `.redesign/proof/` to `public/images/work/`), ChatGPT screenshot and the Search Console card (Fitoria), blurred Telegram capture (Broke & Fixed). Pace is shown with its "demo data" caption. No Higgsfield images: real captures cover every slot.
- Old template and demo entries dropped. `/portfolio/ai-podcast-creator`, `ai-crm-dashboard`, `general-contractor-website` return 308 to `/portfolio` in EN and ES (`next.config.js`).
- Checks: `npm run build` exit 0 (380 pages), `check-content.mjs` ok, `check-images.mjs` ok with portfolio added, browser at 1440 and 390 on EN and ES: no sideways scroll, no broken images.
- Noah G's 2,215 to 8,666 monthly impressions (Feb to Jul) is on the page. Othmar confirmed 2026-10-15 he has the clients' authorization to publish their numbers. Dead code left in place: `components/portfolio/project-card.tsx`, `components/home/portfolio-preview.tsx`, `ProjectItem` in `types/index.ts`.

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
16. No image twice on a page, and no two service pages share an image. Spread proof across the client sites instead of leaning on one (Othmar, 2026-10-15). `scripts/check-images.mjs` checks it after a build.
