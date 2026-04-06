# Changelog

All notable changes to the Lane marketing website are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

---

## [0.2.0] — 2026-04-07

### Added
- `BeforeAfter` component — "Without Lane / With Lane" comparison table sourced from product vision doc, placed between MetricsBar and HowItWorks
- `lane docs/` added to `.gitignore` — internal product docs excluded from repo

### Changed
- **Hero:** Headline updated to "The AI chief of staff your design team never had." — aligns with brand one-liner. Descriptions updated to match brand voice from STORY.md
- **Features:** All 6 feature cards updated to reflect current product — Design Radar, AI Context Brief, Handoff Intelligence, Proactive Alerts, PM Calibration, AI Intake Gate. Section heading updated to "AI runs the ops. / You lead the design."
- **How it works:** 3-step TLDR sharpened. Phase 4 renamed Track → Impact to match PRD. Section heading updated to "From idea to impact. / One system."
- **Metrics bar:** All 3 metrics updated to reflect PRD pain points — Monday morning reconstruction, ops overhead, impact accountability
- **Pricing:** Section heading updated to "Flat-rate. No per-seat confusion." All 3 tier feature lists updated to match VISION.md business model — Starter, Professional (adds Design Radar, AI Context Brief, Handoff Intelligence, Dev Board, Projects), Enterprise (adds Lane Agent, Skills System, Figma Agent)
- **Anti-surveillance:** All 4 pledge descriptions tightened to match PRD Philosophy 3 language precisely
- **Footer:** Badge label updated from "Footer" to brand tagline "Own your lane."
- **README:** Replaced default create-next-app boilerplate with full project documentation

---

## [0.1.0] — 2026-04-03

### Added
- Initial marketing website
- Single-page layout with wireframe grid shell (dashed border rails)
- Components: Header, Hero, TrustedBy, MetricsBar, HowItWorks, Testimonial, Features, AntiSurveillance, Pricing, CtaSection, Footer
- Animated hero section with SVG constellation, pixel-font LANE typewriter, and floating UI micro-cards
- 4-phase tabbed walkthrough (Predesign, Design, Build, Track)
- 3-tier pricing (Starter $99, Professional $299, Enterprise custom)
- Motion primitives: FadeIn, ScaleIn, Stagger, StaggerItem, TabContent
- Design system: warm ivory base, deep forest green accent, Satoshi + Geist Mono typography
- Deployed to Vercel
