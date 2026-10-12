# Homepage redesign

Branch `redesign/home`. One phase open at a time. A phase closes when its "done when" passes and its gate opens. Full plan: `~/.claude/plans/there-is-a-folder-jaunty-piglet.md`.

Brand kit: `~/Documents/Codex/2026-09-16/i-r/outputs/oac-brand-kit/` (navy `#061321`, cobalt `#173F7A` / `#285AA6`, gold `#C79A43`, soft white `#F4F6F8`).

## Phases

- [x] **0 Baseline** · build passes on the branch
- [ ] **1 Structure + copy** · EN + ES for all 12 sections · gate: Othmar approves
- [ ] **2 Design direction** · nav + hero + footer, 3 directions in Claude Design · gate: Othmar picks one
- [ ] **3 Full homepage design** · desktop + mobile · gate: Othmar approves
- [ ] **4 Assets** · hero loop + stills, real screenshots · gate: Othmar approves each, spend capped
- [ ] **5 Foundation build** · tokens, fonts, logo, nav, footer · gate: Othmar tests preview
- [ ] **6a Build top** · hero + local clients strip
- [ ] **6b Build middle** · pain points + what I build + work glimpse
- [ ] **6c Build bottom** · how it works + pricing + who I serve + about + FAQ + final ask
- [ ] **7 Motion** · reduced-motion respected, no layout shift, performance not below baseline
- [ ] **8 Leads + CRM v1** · Neon `leads`, real contact form, `/admin/leads`
- [ ] **9 Challenge + launch** · Codex review, preview, production · gate: Othmar says ship

## Receipts

### Phase 0 (2026-10-12)

- `npm run build`: passes, after excluding the untracked `websites-funnel/` app from the root `tsconfig.json` (it was being type-checked by the root project and failing on its own `@/` imports).
- Screenshots of the current home: `.redesign/baseline/{en,es}-{1440,390}.jpeg` (not committed).
- Lighthouse, mobile, `/en`, local production build: performance 77, accessibility 100, SEO 85. LCP 5.8 s, CLS 0, TBT 80 ms.
- Known before redesign: contact form does not submit anywhere (`components/contact/contact-form.tsx`); `app/[locale]/page.tsx` sets its title through `next/head`, which the app router ignores.

## Rules learned

Every rejection becomes a rule here and applies to all later sections.

1. Brand direction is the brand kit above, not the black + `#F4AF25` palette in the `/oac-brand` skill.
2. One phase at a time; finish and test before the next.
