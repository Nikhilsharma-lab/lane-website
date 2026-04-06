# Lane Marketing Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page dark-theme marketing website at `/` (root route) that matches factory.ai's visual language, incorporating patterns from Vercel, Linear, Supabase, and Conductor.build. The existing dashboard app at `/dashboard` remains untouched.

**Architecture:** The marketing page is a standalone Next.js page (`app/(marketing)/page.tsx`) inside a `(marketing)` route group with its own layout. It uses a completely separate dark design system (CSS custom properties scoped under `[data-theme="dark"]`) so the existing warm-cream dashboard styles are unaffected. All marketing components live in `components/marketing/`. The root `app/page.tsx` renders the marketing page instead of redirecting to `/login`.

**Tech Stack:** Next.js 14 App Router, Tailwind CSS, React Server Components (no client JS except for tab interactions and mobile nav toggle), Lucide icons, `cn()` utility from `lib/utils.ts`.

**Design Reference Sites:**
- factory.ai — visual language (dark theme, orange accent, sticky header, diagonal stripe button hover, rounded footer)
- Vercel — outcome-first hero, stat blocks, interleaved social proof, security-as-section
- Linear — opinionated headings, methodology page pattern, pricing comparison table
- Supabase — tabbed product showcase, product cards with illustrations, framework compatibility bar, compression hero
- Conductor.build — changelog badge, dogfood CTA, 3-step TLDR, └ attribution, frosted glass buttons, tight page structure

---

## File Structure

```
app/
  (marketing)/
    layout.tsx              ← Dark theme layout (no auth, no sidebar)
    page.tsx                ← Single-page marketing site (all sections)
  page.tsx                  ← MODIFY: render marketing page instead of redirect

components/
  marketing/
    header.tsx              ← Sticky nav with mobile menu
    hero.tsx                ← Hero section with badge, headline, CTAs, screenshot
    metrics-bar.tsx         ← 3-stat outcome bar
    trusted-by.tsx          ← Logo row with hover effect
    how-it-works.tsx        ← 3-step TLDR + 4-phase tabs (client component)
    features.tsx            ← 6-card feature grid with icons
    testimonials.tsx        ← Quote blocks with └ attribution
    anti-surveillance.tsx   ← 4-card pledge section
    cta-section.tsx         ← Inverted dogfood CTA
    footer.tsx              ← Rounded container footer

app/globals.css             ← MODIFY: add [data-theme="dark"] custom properties

tailwind.config.ts          ← MODIFY: add dark marketing tokens
```

**Key constraint:** The middleware matcher is `["/dashboard/:path*", "/login", "/signup"]` — it does NOT match `/`, so the marketing page will render without auth checks. No middleware changes needed.

---

## Task 1: Dark Theme CSS Custom Properties

**Files:**
- Modify: `app/globals.css:1-122`

This task adds a `[data-theme="dark"]` scope with all the dark marketing tokens. The existing `:root` variables for the dashboard are untouched.

- [ ] **Step 1: Add dark theme variables to globals.css**

Add this block after the existing `:root { ... }` block (after line 122), before the `body` selector:

```css
/* ═══ Marketing site — dark theme ═══ */
[data-theme="dark"] {
  /* Backgrounds */
  --bg-base: #0A0A0A;
  --bg-surface: #141414;
  --bg-subtle: #1A1A1A;
  --bg-hover: #1F1F1F;
  --bg-elevated: #242424;

  /* Text */
  --text-primary: #FAFAFA;
  --text-secondary: #A1A1AA;
  --text-tertiary: #71717A;

  /* Borders */
  --border: #27272A;
  --border-strong: #3F3F46;

  /* Accent — orange */
  --accent: #F97316;
  --accent-hover: #EA580C;
  --accent-subtle: rgba(249, 115, 22, 0.1);
  --accent-text: #FFFFFF;

  /* Shadows */
  --shadow-border: 0 0 0 1px rgba(255, 255, 255, 0.06);
  --shadow-border-hover: 0 0 0 1px rgba(255, 255, 255, 0.12);
  --shadow-card: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 2px rgba(0, 0, 0, 0.3);
}
```

- [ ] **Step 2: Add the slidePattern keyframe for button hover**

Add this after the existing `@keyframes dockSlideIn` block:

```css
@keyframes slidePattern {
  from { background-position: 0 0; }
  to   { background-position: 40px 0; }
}
```

- [ ] **Step 3: Verify existing styles are unchanged**

Run: `npm run dev`
Navigate to `/login` — confirm the warm cream dashboard styles still render correctly. The dark theme only activates when `data-theme="dark"` is set on an ancestor element.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "feat: add dark theme CSS custom properties for marketing site"
```

---

## Task 2: Tailwind Config — Dark Marketing Tokens

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Extend Tailwind config with marketing tokens**

Replace the entire file content:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        'marketing': '1920px',
      },
      colors: {
        'dark-base': 'var(--bg-base)',
        'dark-surface': 'var(--bg-surface)',
        'dark-subtle': 'var(--bg-subtle)',
        'dark-hover': 'var(--bg-hover)',
        'dark-elevated': 'var(--bg-elevated)',
        'dark-border': 'var(--border)',
        'dark-border-strong': 'var(--border-strong)',
      },
      animation: {
        'slide-pattern': 'slidePattern 1s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
```

- [ ] **Step 2: Verify build passes**

Run: `npx tsc --noEmit && npm run build`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: extend Tailwind config with marketing font and color tokens"
```

---

## Task 3: Marketing Layout

**Files:**
- Create: `app/(marketing)/layout.tsx`

This layout wraps only the marketing page. It sets `data-theme="dark"` on the `<div>` wrapper, loads the dark aesthetic, and renders no sidebar/auth/dashboard chrome.

- [ ] **Step 1: Create the marketing route group directory**

```bash
mkdir -p /Users/yashkaushal/Lane/app/\(marketing\)
```

- [ ] **Step 2: Create the layout file**

Create `app/(marketing)/layout.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lane — The AI Operating System for Design Teams',
  description:
    'From 45% coordination waste to zero. Lane is the AI-native command center for design operations. Problem intake, scientific design stages, developer handoff, and impact measurement — all in one system.',
  openGraph: {
    title: 'Lane — The AI Operating System for Design Teams',
    description:
      'From 45% coordination waste to zero. AI-native design operations for teams who refuse to be managed by Jira.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lane — The AI Operating System for Design Teams',
    description:
      'From 45% coordination waste to zero. AI-native design operations.',
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div data-theme="dark" className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] font-sans antialiased">
      {children}
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/\(marketing\)/layout.tsx
git commit -m "feat: add marketing layout with dark theme and OG metadata"
```

---

## Task 4: Header Component

**Files:**
- Create: `components/marketing/header.tsx`

Sticky dark header matching factory.ai: logo left, mono nav links center, CTA button right. Mobile hamburger menu. Animated underline on hover.

- [ ] **Step 1: Create the marketing components directory**

```bash
mkdir -p /Users/yashkaushal/Lane/components/marketing
```

- [ ] **Step 2: Create the header component**

Create `components/marketing/header.tsx`:

```tsx
'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Backdrop blur bar */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-base)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-marketing items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            Lane
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative font-mono text-[12px] uppercase leading-none tracking-[-0.015rem]',
                  'text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent)]',
                  // Animated underline
                  'after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-full',
                  'after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-200',
                  'hover:after:scale-x-100'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#early-access"
            className={cn(
              'hidden md:inline-flex items-center gap-2 rounded-md px-4 py-2',
              'bg-[var(--accent)] text-sm font-medium text-white',
              'transition-colors hover:bg-[var(--accent-hover)]',
              // Diagonal stripe hover overlay
              'relative overflow-hidden',
              'before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100',
              'before:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]',
              'before:animate-slide-pattern'
            )}
          >
            Request Early Access
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg-base)]/95 backdrop-blur-md">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)] hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
            >
              Request Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/marketing/header.tsx
git commit -m "feat: add sticky marketing header with factory.ai nav pattern"
```

---

## Task 5: Hero Section

**Files:**
- Create: `components/marketing/hero.tsx`

Outcome-first headline (Vercel), compression subline (Supabase), changelog badge (Conductor), dual CTAs (primary solid + secondary frosted glass), product screenshot placeholder.

- [ ] **Step 1: Create the hero component**

Create `components/marketing/hero.tsx`:

```tsx
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-marketing">
        {/* Badge — Conductor pattern */}
        <div className="flex justify-center mb-8">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)]'
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Launching Summer 2026
          </span>
        </div>

        {/* Headline — Vercel outcome-first */}
        <h1
          className={cn(
            'mx-auto max-w-4xl text-center',
            'text-[40px] leading-[100%] tracking-[-0.16rem]',
            'lg:text-6xl 2xl:text-7xl',
            'font-semibold text-[var(--text-primary)]'
          )}
        >
          From 45% coordination waste{' '}
          <span className="text-[var(--accent)]">to zero.</span>
        </h1>

        {/* Subtext — Supabase compression + factory.ai mono */}
        <p
          className={cn(
            'mx-auto mt-6 max-w-2xl text-center',
            'font-mono text-[16px] leading-[140%] tracking-[-0.02rem]',
            'lg:text-[18px]',
            'text-[var(--text-secondary)]'
          )}
        >
          The AI operating system for design teams.
          <br className="hidden sm:block" />
          Set up in an hour. Run your design org forever.
        </p>

        {/* Dual CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary — solid orange, factory.ai stripe hover */}
          <a
            href="#early-access"
            className={cn(
              'inline-flex items-center gap-2 rounded-md px-6 py-3',
              'bg-[var(--accent)] text-sm font-medium text-white',
              'transition-colors hover:bg-[var(--accent-hover)]',
              'relative overflow-hidden',
              'before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100',
              'before:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]',
              'before:animate-slide-pattern'
            )}
          >
            Request Early Access
          </a>

          {/* Secondary — frosted glass, Conductor pattern */}
          <a
            href="#how-it-works"
            className={cn(
              'group inline-flex items-center gap-2 rounded-md px-6 py-3',
              'border border-[var(--border)] bg-[var(--bg-base)]/50 backdrop-blur-md',
              'text-sm font-medium text-[var(--text-secondary)]',
              'transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
            )}
          >
            See how it works
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Product screenshot placeholder */}
        <div className="mt-16 lg:mt-20 mx-auto max-w-5xl">
          <div
            className={cn(
              'aspect-[16/10] w-full rounded-xl lg:rounded-2xl',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'flex items-center justify-center'
            )}
          >
            {/*
              SCREENSHOT PLACEHOLDER
              Replace this div with: <Image src="/marketing/hero-screenshot.png" ... />
              Recommended size: 1920x1200 or 2560x1600 for retina
              Content: Show the main dashboard — request list with AI triage visible
            */}
            <div className="text-center px-8">
              <p className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                Product Screenshot
              </p>
              <p className="mt-2 text-sm text-[var(--text-tertiary)]">
                hero-screenshot.png — 1920x1200
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/hero.tsx
git commit -m "feat: add hero section with outcome-first headline and screenshot placeholder"
```

---

## Task 6: Metrics Bar

**Files:**
- Create: `components/marketing/metrics-bar.tsx`

Three stat blocks in a row — Vercel enterprise page pattern. Big number, small label.

- [ ] **Step 1: Create the metrics bar component**

Create `components/marketing/metrics-bar.tsx`:

```tsx
import { cn } from '@/lib/utils'

const metrics = [
  {
    before: '45%',
    after: '0%',
    label: 'coordination waste',
  },
  {
    before: '5+',
    after: '1',
    label: 'request channels',
  },
  {
    before: '0%',
    after: '100%',
    label: 'design ops visibility',
  },
]

export function MetricsBar() {
  return (
    <section className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-marketing">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className={cn(
                'text-center px-6 py-6',
                'rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]'
              )}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-[14px] text-[var(--text-tertiary)] line-through">
                  {m.before}
                </span>
                <span className="text-[var(--text-tertiary)]">&rarr;</span>
                <span className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
                  {m.after}
                </span>
              </div>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/metrics-bar.tsx
git commit -m "feat: add metrics bar with before/after stat blocks"
```

---

## Task 7: Trusted By Section

**Files:**
- Create: `components/marketing/trusted-by.tsx`

Logo row with muted opacity, brighten on hover. Pre-launch: use placeholder company type labels instead of real logos (to be replaced later).

- [ ] **Step 1: Create the trusted-by component**

Create `components/marketing/trusted-by.tsx`:

```tsx
import { cn } from '@/lib/utils'

const placeholders = [
  'Series B Fintech',
  'Growth Startup',
  'Enterprise SaaS',
  'Design Agency',
  'AI Company',
  'Consumer App',
]

export function TrustedBy() {
  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-marketing">
        <p className="text-center font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
          Built for teams who refuse to be managed by Jira
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {placeholders.map((name) => (
            <span
              key={name}
              className={cn(
                'font-mono text-[13px] tracking-tight text-[var(--text-tertiary)]',
                'opacity-40 transition-opacity hover:opacity-100'
              )}
            >
              {/*
                LOGO PLACEHOLDER
                Replace with: <Image src={`/marketing/logos/${slug}.svg`} alt={name} width={120} height={32} />
                When real logos are available, swap text for SVG images.
              */}
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/trusted-by.tsx
git commit -m "feat: add trusted-by section with placeholder logos"
```

---

## Task 8: How It Works — TLDR + Tabs

**Files:**
- Create: `components/marketing/how-it-works.tsx`

This is the most complex section. Top: 3-step monospace TLDR (Conductor). Below: 4-phase interactive tabs (Supabase). Each tab shows an opinionated heading (Linear) + description + screenshot placeholder. Client component for tab state.

- [ ] **Step 1: Create the how-it-works component**

Create `components/marketing/how-it-works.tsx`:

```tsx
'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const steps = [
  'PM brings a problem. AI blocks solutions.',
  'Designer explores five stages. No deadlines. No surveillance.',
  'Dev builds. PM measures impact. AI reports weekly.',
]

const phases = [
  {
    id: 'predesign',
    label: 'Predesign',
    heading: 'Block solutions. Demand problems.',
    description:
      'Requests enter through an AI gate that classifies them as problem-framed, solution-specific, or hybrid. Solution-specific requests are blocked until the PM articulates the actual user problem. AI auto-triages priority, complexity, and type — all with reasoning.',
    screenshot: {
      file: 'predesign.png',
      hint: 'Show the intake form with AI classification badge and reframe prompt',
    },
  },
  {
    id: 'design',
    label: 'Design',
    heading: 'Five stages. No deadlines. No surveillance.',
    description:
      'Designers move freely between Sense, Frame, Diverge, Converge, and Prove. No stage timers. No "days in stage" counters. Progress is captured through reflections — the designer\'s own words — not forced status updates. AI nudges go to the designer privately.',
    screenshot: {
      file: 'design.png',
      hint: 'Show the 5-stage design flow with a reflection entry visible',
    },
  },
  {
    id: 'build',
    label: 'Build',
    heading: 'Lock the design. Ship with confidence.',
    description:
      'Figma files are version-locked at handoff. Dev kanban opens: To Do, In Progress, In Review, Design QA, Done. Post-handoff Figma changes trigger automatic alerts. Design QA is required — dev cannot ship without designer confirmation.',
    screenshot: {
      file: 'build.png',
      hint: 'Show the dev kanban board with a Design QA column highlighted',
    },
  },
  {
    id: 'track',
    label: 'Track',
    heading: 'Predicted vs. actual. No more guessing.',
    description:
      'PMs predict impact at intake. After shipping, they log actual results. AI compares the two, calculates accuracy, and generates impact narratives. PM calibration scores build accountability over time — framed as calibration, not scoring.',
    screenshot: {
      file: 'track.png',
      hint: 'Show the impact comparison view with predicted vs actual metrics',
    },
  },
]

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="how-it-works" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-marketing">
        {/* Section badge */}
        <div className="flex justify-center mb-6">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)]'
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            How it works
          </span>
        </div>

        {/* Section heading */}
        <h2
          className={cn(
            'text-center',
            'text-[30px] leading-[100%] tracking-[-0.05625rem]',
            'lg:text-[48px] lg:tracking-[-0.09rem]',
            'font-semibold text-[var(--text-primary)]'
          )}
        >
          Four phases. One system.
          <br />
          <span className="text-[var(--text-secondary)]">Zero coordination overhead.</span>
        </h2>

        {/* 3-step TLDR — Conductor pattern */}
        <div className="mt-12 mx-auto max-w-xl space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="font-mono text-[14px] text-[var(--accent)] leading-relaxed">
                {i + 1}.
              </span>
              <p className="font-mono text-[14px] leading-relaxed text-[var(--text-secondary)]">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Tab navigation */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-1">
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => setActiveTab(i)}
                className={cn(
                  'rounded-md px-4 py-2 font-mono text-[12px] uppercase tracking-[-0.015rem] transition-colors',
                  activeTab === i
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                )}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active tab content */}
        <div className="mt-10">
          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text */}
            <div>
              <h3
                className={cn(
                  'text-[24px] leading-[110%] tracking-tight',
                  'lg:text-[30px]',
                  'font-semibold text-[var(--text-primary)]'
                )}
              >
                {phases[activeTab].heading}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {phases[activeTab].description}
              </p>
            </div>

            {/* Screenshot placeholder */}
            <div
              className={cn(
                'aspect-[4/3] rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]',
                'flex items-center justify-center'
              )}
            >
              {/*
                SCREENSHOT PLACEHOLDER
                Replace with: <Image src={`/marketing/phases/${phases[activeTab].screenshot.file}`} ... />
                Recommended size: 1200x900
              */}
              <div className="text-center px-6">
                <p className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  {phases[activeTab].screenshot.file}
                </p>
                <p className="mt-2 text-[13px] text-[var(--text-tertiary)]">
                  {phases[activeTab].screenshot.hint}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/how-it-works.tsx
git commit -m "feat: add how-it-works section with 3-step TLDR and phase tabs"
```

---

## Task 9: Testimonials Component

**Files:**
- Create: `components/marketing/testimonials.tsx`

Reusable quote block with Conductor's └ attribution pattern. Used between sections (Vercel interleave pattern).

- [ ] **Step 1: Create the testimonials component**

Create `components/marketing/testimonials.tsx`:

```tsx
import { cn } from '@/lib/utils'

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <section className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <blockquote className="text-[18px] leading-relaxed text-[var(--text-primary)] lg:text-[20px]">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-4 font-mono text-[13px] text-[var(--text-tertiary)]">
          └ {author}, {role}
        </p>
      </div>
    </section>
  )
}

/**
 * Pre-built testimonials for use on the marketing page.
 * Replace with real customer quotes post-launch.
 */
export const testimonials = {
  intake: {
    quote:
      'We spent more time arguing about what to build than actually building it. The intake gate changed that overnight.',
    author: 'Design Lead',
    role: 'Series B Fintech',
  },
  autonomy: {
    quote:
      'For the first time, our design tool doesn\'t feel like it was built to spy on us. It actually helps.',
    author: 'Senior Designer',
    role: 'Growth Startup',
  },
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/testimonials.tsx
git commit -m "feat: add testimonial component with └ attribution pattern"
```

---

## Task 10: Features Grid

**Files:**
- Create: `components/marketing/features.tsx`

6-card grid — Supabase product card pattern with Lucide icons. Cards use `bg-[var(--bg-surface)]`, `border-[var(--border)]`, `rounded-xl`.

- [ ] **Step 1: Create the features component**

Create `components/marketing/features.tsx`:

```tsx
import { cn } from '@/lib/utils'
import {
  ShieldCheck,
  BellRing,
  CheckCheck,
  FileText,
  Target,
  Figma,
} from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'AI Intake Gate',
    bullets: [
      'Blocks solution-specific requests automatically',
      'Extracts the real problem from hybrid submissions',
      'AI-generated priority, complexity, and type with reasoning',
    ],
  },
  {
    icon: BellRing,
    title: 'Private AI Nudges',
    bullets: [
      'Contextual nudges go to the designer first',
      'Never escalated to leads automatically',
      'Friendly tone, not surveillance language',
    ],
  },
  {
    icon: CheckCheck,
    title: '3-Sign-Off Quality Gate',
    bullets: [
      'Designer, PM, and Design Head must all approve',
      'Structured feedback on rejection — not just "no"',
      'Nothing ships without design QA',
    ],
  },
  {
    icon: FileText,
    title: 'Weekly AI Digest',
    bullets: [
      'Auto-generated narrative every Friday',
      'Shipped work, team health, recommendations',
      'Design Head gets the full picture in 30 seconds',
    ],
  },
  {
    icon: Target,
    title: 'PM Calibration',
    bullets: [
      'Predicted vs. actual impact comparison',
      'Rolling accuracy score per PM',
      'Framed as calibration, not blame',
    ],
  },
  {
    icon: Figma,
    title: 'Figma Integration',
    bullets: [
      'Design files locked at handoff',
      'Post-handoff changes trigger dev alerts',
      'Version history preserved automatically',
    ],
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-marketing">
        {/* Section badge */}
        <div className="flex justify-center mb-6">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)]'
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Features
          </span>
        </div>

        {/* Heading — opinionated, Linear style */}
        <h2
          className={cn(
            'text-center',
            'text-[30px] leading-[100%] tracking-[-0.05625rem]',
            'lg:text-[48px] lg:tracking-[-0.09rem]',
            'font-semibold text-[var(--text-primary)]'
          )}
        >
          The AI runs operations.
          <br />
          <span className="text-[var(--text-secondary)]">Humans steer.</span>
        </h2>

        {/* 6-card grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={cn(
                  'rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6',
                  'transition-colors hover:border-[var(--border-strong)]'
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">
                    {f.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {f.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-[var(--text-secondary)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-tertiary)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/features.tsx
git commit -m "feat: add 6-card feature grid with Lucide icons"
```

---

## Task 11: Anti-Surveillance Pledge

**Files:**
- Create: `components/marketing/anti-surveillance.tsx`

4-card grid inspired by Vercel's security section. Each card: what Lane NEVER builds + what it builds instead.

- [ ] **Step 1: Create the anti-surveillance component**

Create `components/marketing/anti-surveillance.tsx`:

```tsx
import { cn } from '@/lib/utils'
import { EyeOff, Clock, Gauge, MessageSquareOff } from 'lucide-react'

const pledges = [
  {
    icon: Gauge,
    never: 'No utilization percentages',
    instead: 'Designers set their own capacity. Leads see team health signals, never individual tracking.',
  },
  {
    icon: Clock,
    never: 'No "last seen" timestamps',
    instead: 'Privacy is the default. Activity data belongs to the individual, not their manager.',
  },
  {
    icon: EyeOff,
    never: 'No speed rankings',
    instead: 'Impact, not velocity. We measure what changed for users, not how fast you moved.',
  },
  {
    icon: MessageSquareOff,
    never: 'No forced status updates',
    instead: 'Reflections are the designer\'s own words, shared when they\'re ready. No rush.',
  },
]

export function AntiSurveillance() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-marketing">
        {/* Section badge */}
        <div className="flex justify-center mb-6">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)]'
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Our pledge
          </span>
        </div>

        <h2
          className={cn(
            'text-center',
            'text-[30px] leading-[100%] tracking-[-0.05625rem]',
            'lg:text-[48px] lg:tracking-[-0.09rem]',
            'font-semibold text-[var(--text-primary)]'
          )}
        >
          Support, not surveillance.
        </h2>

        <p className="mt-4 text-center text-[15px] text-[var(--text-secondary)] max-w-xl mx-auto">
          These aren&apos;t toggles you can turn off. They&apos;re hard constraints baked into Lane&apos;s architecture. No exceptions, no admin overrides.
        </p>

        {/* 4-card grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {pledges.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.never}
                className={cn(
                  'rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6',
                  'transition-colors hover:border-[var(--border-strong)]'
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-[var(--accent)]" />
                  <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">
                    {p.never}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {p.instead}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/anti-surveillance.tsx
git commit -m "feat: add anti-surveillance pledge section with 4-card grid"
```

---

## Task 12: Pricing Section

**Files:**
- Create: `components/marketing/pricing.tsx`

3-tier pricing cards inline on the same page (not a separate page). Professional tier highlighted with orange border. Annual toggle not needed for pre-launch — just show monthly prices.

- [ ] **Step 1: Create the pricing component**

Create `components/marketing/pricing.tsx`:

```tsx
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: '1–3 person design team',
    highlighted: false,
    features: [
      'AI intake gate',
      '4-phase workflow',
      'Figma integration',
      '3-sign-off quality gate',
      'Designer reflections',
      'Dev kanban with Design QA',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: '4–10 person team',
    highlighted: true,
    features: [
      'Everything in Starter',
      'Weekly AI digest',
      'PM calibration scores',
      'Idea Board with voting',
      'Private AI nudges',
      'Morning briefings',
      'Capacity dashboard',
      'Smart assignment',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: '10+ seats, SLA',
    highlighted: false,
    features: [
      'Everything in Professional',
      'Custom integrations',
      'Dedicated support',
      'SSO & advanced security',
      'Custom onboarding',
      'SLA guarantee',
    ],
    cta: 'Contact Us',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-marketing">
        {/* Section badge */}
        <div className="flex justify-center mb-6">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1',
              'border border-[var(--border)] bg-[var(--bg-surface)]',
              'font-mono text-[12px] uppercase tracking-[-0.015rem] text-[var(--text-tertiary)]'
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Pricing
          </span>
        </div>

        <h2
          className={cn(
            'text-center',
            'text-[30px] leading-[100%] tracking-[-0.05625rem]',
            'lg:text-[48px] lg:tracking-[-0.09rem]',
            'font-semibold text-[var(--text-primary)]'
          )}
        >
          Simple pricing.
          <br />
          <span className="text-[var(--text-secondary)]">No per-seat games.</span>
        </h2>

        <p className="mt-4 text-center text-[15px] text-[var(--text-secondary)]">
          Flat-rate plans. Save 8% with annual billing.
        </p>

        {/* 3 tier cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'rounded-xl border p-6 lg:p-8 flex flex-col',
                tier.highlighted
                  ? 'border-[var(--accent)] bg-[var(--bg-surface)]'
                  : 'border-[var(--border)] bg-[var(--bg-surface)]'
              )}
            >
              <div>
                <h3 className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  {tier.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-[36px] font-semibold tracking-tight text-[var(--text-primary)]">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-[14px] text-[var(--text-tertiary)]">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
                  {tier.description}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    <span className="text-[13px] text-[var(--text-secondary)]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#early-access"
                className={cn(
                  'mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors',
                  tier.highlighted
                    ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] relative overflow-hidden before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)] before:animate-slide-pattern'
                    : 'border border-[var(--border)] bg-[var(--bg-base)]/50 backdrop-blur-md text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/pricing.tsx
git commit -m "feat: add pricing section with 3-tier cards"
```

---

## Task 13: CTA Section (Dogfood)

**Files:**
- Create: `components/marketing/cta-section.tsx`

Factory.ai's inverted section: light background card on dark page. Conductor's dogfood messaging. Rounded container.

- [ ] **Step 1: Create the CTA section component**

Create `components/marketing/cta-section.tsx`:

```tsx
import { cn } from '@/lib/utils'

export function CtaSection() {
  return (
    <section id="early-access" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-marketing">
        <div
          className={cn(
            'rounded-xl lg:rounded-2xl px-8 py-16 lg:px-16 lg:py-20',
            'bg-[#FAFAFA] text-[#0A0A0A]',
            'text-center'
          )}
        >
          <p className="font-mono text-[13px] uppercase tracking-wider text-[#71717A]">
            We run our own design team on Lane.
          </p>

          <h2 className="mt-4 text-[30px] leading-[110%] tracking-tight font-semibold lg:text-[48px] lg:tracking-[-0.09rem]">
            We think yours will love it too.
          </h2>

          <p className="mt-4 text-[15px] text-[#52525B] max-w-lg mx-auto">
            Surveillance produces performance. Support produces truth.
            <br />
            Lane optimizes for truth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="mailto:yash@lane.so?subject=Early%20Access%20Request"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-6 py-3',
                'bg-[#0A0A0A] text-sm font-medium text-white',
                'transition-colors hover:bg-[#27272A]',
                'relative overflow-hidden',
                'before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100',
                'before:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]',
                'before:animate-slide-pattern'
              )}
            >
              Request Early Access
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:yash@lane.so?subject=Book%20a%20Demo"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-6 py-3',
                'border border-[#D4D4D8] bg-white text-sm font-medium text-[#52525B]',
                'transition-colors hover:bg-[#F4F4F5] hover:text-[#0A0A0A]'
              )}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/cta-section.tsx
git commit -m "feat: add inverted CTA section with dogfood messaging"
```

---

## Task 14: Footer

**Files:**
- Create: `components/marketing/footer.tsx`

Factory.ai pattern: rounded container with `bg-[var(--bg-surface)]`. 3-column link layout. Trust badges. Social links.

- [ ] **Step 1: Create the footer component**

Create `components/marketing/footer.tsx`:

```tsx
import { cn } from '@/lib/utils'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="px-6 pb-6 lg:px-8 lg:pb-8">
      <div className="mx-auto max-w-marketing">
        <div
          className={cn(
            'rounded-xl lg:rounded-2xl',
            'border border-[var(--border)] bg-[var(--bg-surface)]',
            'px-8 py-12 lg:px-12 lg:py-16'
          )}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            {/* Logo + tagline */}
            <div>
              <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                Lane
              </span>
              <p className="mt-2 text-[13px] text-[var(--text-tertiary)] max-w-xs">
                The AI operating system for design teams.
              </p>
              {/* Trust badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  Anti-surveillance by design
                </span>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-3 gap-8 lg:gap-16">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
                    {col.title}
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border)] pt-8">
            <p className="text-[12px] text-[var(--text-tertiary)]">
              &copy; 2026 Lane. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                className="text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/marketing/footer.tsx
git commit -m "feat: add rounded footer with trust badge and social links"
```

---

## Task 15: Assemble the Marketing Page

**Files:**
- Create: `app/(marketing)/page.tsx`
- Modify: `app/page.tsx`

Wire all components into the single-page marketing site. Update the root page to render the marketing page instead of redirecting to `/login`.

- [ ] **Step 1: Create the marketing page**

Create `app/(marketing)/page.tsx`:

```tsx
import { Header } from '@/components/marketing/header'
import { Hero } from '@/components/marketing/hero'
import { MetricsBar } from '@/components/marketing/metrics-bar'
import { TrustedBy } from '@/components/marketing/trusted-by'
import { HowItWorks } from '@/components/marketing/how-it-works'
import { Testimonial, testimonials } from '@/components/marketing/testimonials'
import { Features } from '@/components/marketing/features'
import { AntiSurveillance } from '@/components/marketing/anti-surveillance'
import { Pricing } from '@/components/marketing/pricing'
import { CtaSection } from '@/components/marketing/cta-section'
import { Footer } from '@/components/marketing/footer'

export default function MarketingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetricsBar />
        <TrustedBy />
        <HowItWorks />
        <Testimonial {...testimonials.intake} />
        <Features />
        <Testimonial {...testimonials.autonomy} />
        <AntiSurveillance />
        <Pricing />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Update the root page.tsx**

Replace the content of `app/page.tsx` with:

```tsx
import { redirect } from 'next/navigation'

// Root route now serves the marketing site via the (marketing) route group.
// This file acts as a fallback — the (marketing)/page.tsx takes precedence
// at the "/" path because route groups are transparent.
//
// If Next.js resolves this file instead, redirect to login as before.
export default function Home() {
  redirect('/login')
}
```

**Important:** In Next.js App Router, `app/(marketing)/page.tsx` and `app/page.tsx` both match the `/` route. The route group `(marketing)` is transparent — its `page.tsx` will be served for `/`. However, having two `page.tsx` files matching the same route causes a conflict.

The correct approach: **delete `app/page.tsx`** so that `app/(marketing)/page.tsx` is the sole handler for `/`.

```bash
rm app/page.tsx
```

- [ ] **Step 3: Verify the middleware doesn't block the marketing page**

Read `middleware.ts` matcher config. It only matches:
```typescript
matcher: ["/dashboard/:path*", "/login", "/signup"]
```

The `/` route is NOT matched, so no auth check runs. The marketing page renders for all visitors.

- [ ] **Step 4: Run the dev server and verify**

Run: `npm run dev`

Navigate to `http://localhost:3000/` — should show the dark marketing page with all 9 sections.

Navigate to `http://localhost:3000/login` — should still show the existing login page with warm cream theme.

Navigate to `http://localhost:3000/dashboard` — should still show the dashboard (or redirect to login if not authenticated).

- [ ] **Step 5: Verify build passes**

Run: `npm run build`
Expected: No errors. Both marketing and dashboard routes compile.

- [ ] **Step 6: Commit**

```bash
git add app/\(marketing\)/page.tsx
git rm app/page.tsx
git commit -m "feat: assemble single-page marketing site at root route"
```

---

## Task 16: Create public directory and screenshot placeholders

**Files:**
- Create: `public/marketing/` directory structure

Create the directory structure for screenshots that the user will provide later.

- [ ] **Step 1: Create placeholder directories**

```bash
mkdir -p /Users/yashkaushal/Lane/public/marketing/phases
```

- [ ] **Step 2: Create a placeholder README for the user**

Create `public/marketing/README.md`:

```markdown
# Marketing Screenshots

Place your product screenshots here. The marketing page expects these files:

## Hero
- `hero-screenshot.png` — Main dashboard view (1920x1200 or 2560x1600 for retina)
  Show: Request list with AI triage badges visible

## Phase tabs (How it Works section)
- `phases/predesign.png` — Intake form with AI classification (1200x900)
- `phases/design.png` — 5-stage design flow with reflection entry (1200x900)
- `phases/build.png` — Dev kanban with Design QA column (1200x900)
- `phases/track.png` — Impact comparison view (1200x900)

## Logos (when available)
- `logos/` — Customer/partner SVG logos (120x32 recommended)

After adding screenshots, update the placeholder divs in:
- `components/marketing/hero.tsx` — hero screenshot
- `components/marketing/how-it-works.tsx` — phase tab screenshots
- `components/marketing/trusted-by.tsx` — company logos
```

- [ ] **Step 3: Commit**

```bash
git add public/marketing/README.md
git commit -m "feat: add screenshot placeholder directory with size guide"
```

---

## Task 17: Final Build Verification

**Files:** None created — verification only.

- [ ] **Step 1: Type check**

Run: `npx tsc --noEmit`
Expected: No type errors.

- [ ] **Step 2: Full build**

Run: `npm run build`
Expected: All routes compile successfully.

- [ ] **Step 3: Production preview**

Run: `npm run start`
Navigate to `http://localhost:3000/` — verify the full marketing page renders.

Check:
- Dark theme applies correctly (near-black background, light text)
- Header sticks on scroll with backdrop blur
- Nav links scroll to correct sections
- Mobile menu opens/closes
- Phase tabs switch content
- Pricing cards render with orange border on Professional tier
- CTA section has inverted light background
- Footer renders in rounded container
- `/login` and `/dashboard` still work normally with warm cream theme

- [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: final adjustments from build verification"
```

---

## Screenshot Swap Guide (Post-Plan)

When the user provides real screenshots, the changes are minimal:

1. Drop images into `public/marketing/`
2. In each component, replace the placeholder `<div>` with:

```tsx
import Image from 'next/image'

<Image
  src="/marketing/hero-screenshot.png"
  alt="Lane dashboard showing request list with AI triage"
  width={1920}
  height={1200}
  className="rounded-xl lg:rounded-2xl"
  priority  // for hero only
/>
```

3. In `next.config.js`, no changes needed — images in `public/` are served statically.

---

## Reference: Design Pattern Attribution

| Component | Primary Pattern Source | Secondary |
|---|---|---|
| Header | factory.ai (sticky, mono nav, stripe button) | — |
| Hero badge | Conductor (changelog pill) | factory.ai (dot indicator) |
| Hero headline | Vercel (outcome-first number) | — |
| Hero subline | Supabase (compression) | factory.ai (mono body) |
| Hero CTAs | factory.ai (solid primary) | Conductor (frosted secondary) |
| Hero screenshot | Conductor (product as visual) | — |
| Metrics bar | Vercel (stat blocks) | — |
| Trusted by | Vercel (carousel hover) | Conductor (logo grid) |
| How it works TLDR | Conductor (3-step mono) | — |
| How it works tabs | Supabase (tabbed showcase) | Linear (opinionated headings) |
| Testimonials | Conductor (└ attribution) | Vercel (interleaved placement) |
| Feature grid | Supabase (product cards + icons) | factory.ai (card styles) |
| Anti-surveillance | Vercel (security section grid) | Linear (manifesto tone) |
| Pricing | Linear (tier cards, highlighted) | factory.ai (card borders) |
| CTA section | factory.ai (inverted bg) | Conductor (dogfood copy) |
| Footer | factory.ai (rounded container) | Supabase (trust badges) |
