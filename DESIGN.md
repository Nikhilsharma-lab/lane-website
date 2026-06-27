# Lane — Style Reference
> botanical journal at dawn (Adaline system)

**Theme:** light

Lane renders as a contemplative workspace: a warm cream canvas draped over a painted landscape, with near-black forest text and one deep warm-brown action color. Typography stays geometric and humanist (Akkurat) with an experimental monospace (Fragment Mono) for micro-labels — never decorative, always functional. Surfaces layer as subtle sage tints, borders are hairline thin, and components whisper rather than shout: ghost buttons, outlined nav, 20px pill radii, almost zero elevation. The whole system behaves like a botanical journal — quiet, organic, deliberate — where the only saturated moment is the primary action and the only sharp edge is the cursor.

> Substitution note: Akkurat is commercial, so the build uses **Inter** (the spec's named substitute) for `--font-akkurat`; **Fragment Mono** is the real Google font. All token VALUES below are authoritative to the last pixel.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Cream Paper | `#fbfdf6` | `--color-cream-paper` | Page canvas, card surfaces, inverted text on dark fills |
| Botanical Ink | `#0a1d08` | `--color-botanical-ink` | Primary headings, body text, outlined/ghost button borders, nav text |
| Bark Brown | `#31200b` | `--color-bark-brown` | Decorative fill, secondary text tone, SVG illustration depth |
| Warm Loam | `#4a3212` | `--color-warm-loam` | Primary action button fill — the single chromatic CTA, deep earthy brown against cream |
| Forest Floor | `#203b14` | `--color-forest-floor` | Green outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Sage Mist | `#eff2e8` | `--color-sage-mist` | First elevated surface above canvas — subtle section banding |
| Lichen | `#e0e5d5` | `--color-lichen` | Secondary surface tint, pill button borders, hairline dividers |
| Moss Veil | `#d7e8b5` | `--color-moss-veil` | Tag/badge backgrounds, soft highlight washes, selected state fills |
| Eucalyptus | `#c5ccb6` | `--color-eucalyptus` | Tertiary surface, large decorative borders, muted section frames |
| Onyx | `#000000` | `--color-onyx` | Logo mark fill, SVG icon strokes, maximum-contrast elements |

## Tokens — Typography

### Akkurat (→ Inter substitute) — Primary typeface across all UI — nav, body, headings, buttons. The tight -0.04em tracking at display sizes (47-53px) pulls letters together, giving headlines a dense, inked-on-page quality. Weight 400 is default; 700 reserved for emphasis and nav items. Humanist grotesque proportions soften the technical context, making the product feel editorial rather than engineering. · `--font-akkurat`
- **Substitute:** Inter, Söhne, or system-ui
- **Weights:** 400, 700
- **Sizes:** 12, 14, 18, 47, 53
- **Line height:** 1.0, 1.33, 1.43, 1.44, 1.67
- **Letter spacing:** -0.04em
- **OpenType features:** `"calt", "kern"`

### Fragment Mono — Micro-labels, status indicators, tag text, code-adjacent annotations. Used sparingly as typographic punctuation — never for running text. The slight +0.02em tracking widens the mono for legibility at small sizes. The system's 'technical whisper'. · `--font-fragment-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 400
- **Sizes:** 14
- **Line height:** 1.0
- **Letter spacing:** 0.02em

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1 | -0.48px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.56px | `--text-body-sm` |
| body | 18px | 1.67 | -0.72px | `--text-body` |
| heading-sm | 47px | 0.98 | -1.88px | `--text-heading-sm` |
| display | 53px | 1 | -2.12px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px · **Density:** comfortable

### Spacing Scale
8 · 16 · 24 · 32 · 40 · 48 · 64 · 128 · 160 (px) — tokens `--spacing-{n}`.

### Border Radius
| Element | Value |
|---------|-------|
| nav | 20px |
| tags | 9999px |
| images | 8px |
| buttons | 20px |

### Shadows
| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(99, 143, 61, 0.1) 0px 0px 0px 1px` | `--shadow-subtle` |

### Layout
- **Page max-width:** 1200px · **Section gap:** 64-90px · **Card padding:** 24-32px · **Element gap:** 8-16px

## Components

### Primary Action Button (Filled)
Filled Warm Loam (`#4a3212`), cream text (`#fbfdf6`), 20px radius, 24px×32px padding. Akkurat 14px weight 700, tracking -0.04em. Hovers to Forest Floor (`#203b14`). Deep earthy brown against cream — urgency through warmth, not aggression.

### Ghost / Outlined Button
Transparent fill, 1px Botanical Ink (`#0a1d08`) border, 20px radius, 12px×24px padding. Akkurat 14px weight 700, Botanical Ink text. The outlined border is the only chromatic border system — always Botanical Ink.

### Navigation Bar
Full-width transparent over canvas, max-width 1200px centered. Logo + slash mark in `#000000`. 20px radius on all interactive elements. Akkurat 14px weight 700, Botanical Ink.

### Hero Headline
Akkurat 47-53px **weight 400** (signature choice — authority through scale and restraint, not boldness), line-height ~1.0, tracking -1.88 to -2.12px, Botanical Ink, centered. Sits over the painted landscape without competing.

### Trust Logo Strip
Centered horizontal row of monochrome marks, Botanical Ink at ~24px height. 'Trusted by' label above in Fragment Mono 14px tracking +0.02em.

### Micro-Label
Fragment Mono 14px weight 400, tracking +0.02em, Botanical Ink, uppercase by convention. Typographic annotation between major blocks.

### Tag / Badge
Moss Veil (`#d7e8b5`) background, Botanical Ink text, 9999px radius, 4px×12px padding, Fragment Mono 14px. The only place a green tint appears as fill — small functional punctuation.

### Card Surface
Cream Paper (`#fbfdf6`) or Lichen (`#e0e5d5`) background, 1px Botanical Ink or Eucalyptus border, 8-20px radius, 24-32px padding. **No shadow** — the border defines the edge, not elevation.

### Landscape Backdrop
Full-bleed painted illustration: misty lake, rolling hills, solitary bench, bonsai-like trees. Sage greens, warm earths, cream sky. No hard edges. The imagery is the brand's emotional anchor; UI floats over it with cream/ink contrast.

## Do's and Don'ts

### Do
- Warm Loam (`#4a3212`) exclusively for the primary filled action — never decorative, icons, or large surfaces.
- All button/nav radii 20px; 8px images; 9999px tags only.
- -0.04em letter-spacing on all Akkurat text at every size.
- Layer surfaces in order: Cream Paper → Sage Mist → Lichen → Moss Veil → Eucalyptus — never skip levels or invert.
- Fragment Mono 14px for all micro-labels/status; Akkurat for all running text and headings.
- Center hero headlines at 47-53px **weight 400** — the weight choice is the authority signal.
- 1px Botanical Ink borders for all outlined/ghost interactive elements.

### Don't
- No weight 700 for headlines — 400 + tight tracking carries more presence.
- No drop shadows beyond the single 1px green-tinted ring — shadow-averse by design.
- No saturated colors outside the earth/sage palette — no blues, no vivid greens, no warm reds.
- No sharp corners (0px) on interactive elements — min 8px images, 20px controls.
- No Fragment Mono on body copy or headings — micro-labels/annotations only.
- Don't split nav/button radii — both lock to 20px.
- Verify 17:1 contrast holds before inverting ink/cream on a surface.

## Surfaces
| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#fbfdf6` | Page background — warm off-white, green undertone |
| 1 | First Elevation | `#eff2e8` | Subtle section banding, alternating blocks |
| 2 | Second Elevation | `#e0e5d5` | Card surfaces, pill outlines, bordered containers |
| 3 | Third Elevation | `#d7e8b5` | Active states, selected highlights, accent tags |
| 4 | Fourth Elevation | `#c5ccb6` | Decorative frames, large section borders, muted overlays |

## Elevation
- **Primary Button / subtle ring:** `rgba(99, 143, 61, 0.1) 0px 0px 0px 1px`

## Imagery
Anchored by a single signature visual: a painted landscape — misty lake, bonsai trees, solitary bench, rolling sage hills in cream sky. Painterly depth, soft atmospheric perspective, muted earth/sage palette mirroring the UI tokens. Full-bleed hero backdrop and section divider. Iconography minimal and monolinear. Contemplative and organic — a botanical journal aesthetic, not a tech-product aesthetic. Imagery occupies ~40% of the hero viewport and bleeds behind the headline without competing.

## Layout
Centered max-width 1200px within a full-bleed canvas. Hero = centered headline stack over full-bleed landscape; text floats, doesn't compete. Nav top, transparent, logo + nav links/CTA split. Trust strip centered below headline. Sections alternate with 64-90px gaps using sage surface tints (Lichen, Sage Mist) for banding rather than hard dividers. Content blocks tend toward centered stacks or 2-column text+image splits. The page breathes — spacious, contemplative.

## Color System Logic
Single axis: green-warmth saturation. Cream canvas with green undertone, near-black ink with green undertone, and Warm Loam (warm brown) as the chromatic pivot between green and warm poles. The sage surface stack (Sage Mist → Lichen → Moss Veil → Eucalyptus) is a green desaturation gradient — a single continuous surface language, never mixed as distinct palettes.

## Similar Brands
Linear · Notion · Vercel · Anthropic · Read.cv — near-monochrome earth/sage palettes, one chromatic accent, weight-400 tight-tracked headlines, imagery doing the emotional work, contemplative not tech-cliché.

## Quick Start — :root

```css
:root {
  /* Colors */
  --color-cream-paper: #fbfdf6;
  --color-botanical-ink: #0a1d08;
  --color-bark-brown: #31200b;
  --color-warm-loam: #4a3212;
  --color-forest-floor: #203b14;
  --color-sage-mist: #eff2e8;
  --color-lichen: #e0e5d5;
  --color-moss-veil: #d7e8b5;
  --color-eucalyptus: #c5ccb6;
  --color-onyx: #000000;

  /* Type */
  --font-akkurat: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-fragment-mono: 'Fragment Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  --text-caption: 12px; --tracking-caption: -0.48px;
  --text-body-sm: 14px; --tracking-body-sm: -0.56px;
  --text-body: 18px; --tracking-body: -0.72px;
  --text-heading-sm: 47px; --tracking-heading-sm: -1.88px;
  --text-display: 53px; --tracking-display: -2.12px;

  /* Radius */
  --radius-images: 8px;
  --radius-controls: 20px; /* nav + buttons */
  --radius-tags: 9999px;

  /* Shadow (the only one) */
  --shadow-subtle: rgba(99,143,61,0.1) 0px 0px 0px 1px;

  /* Surfaces */
  --surface-canvas: #fbfdf6;
  --surface-1: #eff2e8;
  --surface-2: #e0e5d5;
  --surface-3: #d7e8b5;
  --surface-4: #c5ccb6;
}
```
