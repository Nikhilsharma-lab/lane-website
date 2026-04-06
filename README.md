# Lane — Marketing Website

The public marketing website for [Lane](https://lane.so) — the AI chief of staff your design team never had.

Built with Next.js 16, Tailwind CSS 4, and Motion (Framer Motion). Deployed on Vercel.

---

## What this is

This repo contains the marketing site only. The Lane product (the actual design ops platform) lives in a separate repo.

The site is a single-page marketing experience with sections covering the product's value proposition, how it works, features, anti-surveillance pledge, pricing, and early access CTA.

---

## Tech stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16.2.2 | Framework (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| Motion | 12 | Animations |
| Lucide React | latest | Icons |
| clsx + tailwind-merge | latest | Conditional class names |

---

## Design system

The site follows a **Warm Editorial Minimalism** aesthetic — a tool built by designers, for designers.

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F8F6F1` | Warm ivory base |
| Surface | `#FFFFFF` | Cards, panels |
| Accent | `#2E5339` | Deep forest green — CTAs, active states |
| Text primary | `#1C1917` | Warm near-black |
| Text secondary | `#78716C` | Labels, descriptions |
| Font (UI) | Satoshi | All human-authored text |
| Font (data) | Geist Mono | IDs, tags, timestamps, code |

Full design system reference: `lane docs/DESIGN.md` (gitignored, internal only).

---

## Project structure

```
lane-website/
├── app/
│   ├── page.tsx          # Page composition — all sections assembled here
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── globals.css       # CSS custom properties (design tokens), global styles
├── components/
│   └── marketing/
│       ├── header.tsx          # Sticky nav with logo and CTA
│       ├── hero.tsx            # Hero section with animated workflow visual
│       ├── trusted-by.tsx      # Logo marquee
│       ├── metrics-bar.tsx     # 3 before/after metric cards
│       ├── before-after.tsx    # Without Lane / With Lane comparison table
│       ├── how-it-works.tsx    # 4-phase tabbed walkthrough
│       ├── features.tsx        # 6-card feature grid
│       ├── anti-surveillance.tsx # Anti-surveillance pledge cards
│       ├── testimonials.tsx    # Reusable pull quote component
│       ├── pricing.tsx         # 3-tier pricing cards
│       ├── cta-section.tsx     # Early access CTA block
│       ├── footer.tsx          # Footer with nav columns
│       └── motion.tsx          # Shared animation primitives (FadeIn, ScaleIn, etc.)
├── lib/
│   └── utils.ts          # cn() utility
├── public/               # Static assets
└── docs/                 # Implementation notes (not gitignored)
```

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables required to run the site locally.

---

## Available scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

The site deploys automatically to Vercel on every push to `main`.

- **Production:** https://lane.so (or configured Vercel domain)
- **Preview:** Vercel generates a preview URL for every PR

No manual deployment steps required.

---

## Adding or editing content

All marketing copy lives in the component files under `components/marketing/`. Each component is self-contained — copy, structure, and styles are co-located.

To update section content, edit the relevant component directly. The `page.tsx` file only handles section ordering and layout wrappers — it contains no copy.

---

## Internal docs

The `lane docs/` directory contains internal product documentation (PRD, VISION, STORY, DESIGN). It is gitignored and not included in this repo.
