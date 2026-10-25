---
name: DigiPolicy TrustGuard
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#43474f'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#747780'
  outline-variant: '#c3c6d0'
  surface-tint: '#405f8e'
  primary: '#001f41'
  on-primary: '#ffffff'
  primary-container: '#0f3460'
  on-primary-container: '#7f9dd0'
  inverse-primary: '#a9c8fc'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fc721e'
  on-secondary-container: '#5a2100'
  tertiary: '#002136'
  on-tertiary: '#ffffff'
  tertiary-container: '#003756'
  on-tertiary-container: '#59a3db'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a9c8fc'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#274774'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#91cdff'
  on-tertiary-fixed: '#001e31'
  on-tertiary-fixed-variant: '#004b72'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
  brand-gold: '#D4A347'
  surface-canvas: '#F8FAFC'
  surface-card: '#FFFFFF'
  trust-emerald: '#10B981'
  alert-coral: '#EF4444'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a trustworthy, modern, and accessible fintech aesthetic tailored for retail insurance and advisory services ("Sahi Advice Sahi Insurance"). The brand balances the grounded credibility of an established financial institution with the fluidity and rapid discovery mechanics of a consumer-first mobile application. 

The aesthetic is built on a **Corporate Modern** foundation enriched with subtle tactile depth and warm welcoming cues:
- **Tone:** Authoritative yet approachable, transparent, advisory, and reassuring.
- **Target Audience:** Digital-savvy individuals, young families, and professionals seeking transparent policy comparisons, rapid quotation, and reliable claims guidance on mobile devices.
- **Visual Tenets:** Crisp card architecture, prominent high-contrast typography, warm saffron/amber reassurance accents balanced against deep maritime blues, and generous touch targets.

## Colors

The palette grounds itself in deep navy blue (`#0F3460`) to project institutional security and stability, complemented by an approachable cerulean blue (`#3282B8`) extracted from the brand identity. To echo the logo's flame motif and advisory energy, vivid warm amber/orange (`#E8630A`) and metallic warm gold (`#D4A347`) serve as active conversion drivers and reassurance badges.

- **Primary (`#0F3460`):** Used for primary navigation headers, high-level typography, prominent dark action states, and key branding anchors.
- **Secondary (`#E8630A`):** Reserved for primary interactive conversion items (e.g., "Check Premium", "Buy Now", "Get Instant Quote") and active indicators.
- **Tertiary (`#3282B8`):** Applied to auxiliary interactive chips, step trackers, filter badges, and secondary utility buttons.
- **Neutral (`#4A5568`):** The baseline tone for standard body copy, field labels, and secondary descriptive text, set against a soft off-white canvas (`#F8FAFC`).
- **Semantic Accents:** `trust-emerald` conveys verified coverages, claims ratios, and success feedback; `alert-coral` flags policy expiries, exclusions, or form validation errors.

## Typography

The design system employs **Plus Jakarta Sans** across display, body, and label tiers. Its modern geometric curves combined with clear, accessible apertures provide immediate clarity across high-density financial comparison tables and fast-scrolling mobile viewports.

- Use bold and semi-bold weights (`700`/`600`) for headers and numeric financial quotes (e.g., coverage amounts, premiums) to establish instant hierarchy.
- Use `headline-lg-mobile` for mobile banner statements, ensuring large headers never wrap awkwardly on 360–390px viewports.
- Maintain a generous line-height across `body-lg` and `body-md` to preserve readability in dense policy terms and bulleted benefits.

## Layout & Spacing

A mobile-first, 4-column fluid grid defines viewport widths under 768px, transitioning to an 8-column layout on tablets (768px–1023px) and a 12-column layout on desktop viewports (1024px+).

- **Mobile Viewport Rules:** A standard `margin` of `1rem` (16px) with an interior `gutter` of `1rem` ensures optimal finger-tap margins and compact card real estate.
- **Card Spacing:** Internal padding of insurance product cards adheres to `space-md` (16px) on mobile and expands to `space-lg` (24px) on wider displays.
- **Touch-First Sizing:** All touch interactive controls (input fields, action toggles, bottom sheets) must maintain an absolute minimum height of 48px with a vertical separation of at least `space-sm` (8px).

## Elevation & Depth

Visual hierarchy is communicated through subtle ambient elevation, clean background contrasts, and delicate low-contrast outlines:

- **Flat Canvas:** The default application canvas uses a soft cool tint (`#F8FAFC`).
- **Level 1 (Cards, Selectors, Policy Rows):** Solid `#FFFFFF` background with a crisp 1px perimeter border (`rgba(15, 52, 96, 0.08)`) and an ultra-soft ambient shadow: `box-shadow: 0 2px 8px rgba(15, 52, 96, 0.04)`.
- **Level 2 (Featured Policies, Hover States, Dropdowns):** Used for highlighting recommended plans or interactive cards: `box-shadow: 0 8px 24px rgba(15, 52, 96, 0.08)`.
- **Level 3 (Sticky CTAs, Floating Quote Summaries, Modals):** Pinned bottom bars and comparison dialogs use `box-shadow: 0 -4px 20px rgba(15, 52, 96, 0.12)` to establish clear physical separation above scrolling content.

## Shapes

The design system uses a balanced **Rounded (Level 2)** shape standard:
- Standard UI containers, cards, and input fields feature `0.5rem` (8px) corners.
- Featured product bundles, comparison panels, and dialog sheets use `rounded-lg` (`1rem` / 16px).
- Bottom sheets and floating modals use `rounded-xl` (`1.5rem` / 24px) on their top edges.
- Tags, pill badges (e.g., "Cashless Hospital", "Tax Saver"), and quick-filter category chips use fully rounded capsules (`rounded-full` / 9999px) to contrast against structural rectangular cards.

## Components

### Buttons
- **Primary Action (Instant Quote / Buy Now):** Filled with secondary brand orange (`#E8630A`), white bold text, minimum height 48px, 8px rounded corners. Active click states apply a subtle scale (0.98) and darken slightly (`#D35400`).
- **Secondary Action (View Details / Plan Brochure):** Transparent surface with 1.5px border in tertiary blue (`#3282B8`) or navy (`#0F3460`), matching colored typography.
- **Advisory / Quick Call CTA:** Soft pill container with a warm gold tone (`#D4A347` at 15% opacity) and dark navy icon/text.

### Badges & Category Chips
- **Category Filter Chips (Health, Motor, Term Life, Travel):** 36px height, rounded capsule shape (`9999px`). Default state uses `#FFFFFF` with 1px border (`#E2E8F0`). Selected state shifts to `#0F3460` with pure white text and icon.
- **Value Badges (e.g., "Top Rated", "Instant Claim"):** Compact pill (`label-sm`), featuring light background tints (`#E8630A` at 10% opacity) with solid secondary text.

### Policy Comparison Cards
- **Structure:** Clean white card (`Level 1` elevation), 8px border radius, with a 3-part vertical layout:
  1. Header with insurance provider logo and plan tier.
  2. Grid of key highlights (Claim Settlement Ratio, Network Hospitals/Garages, Cover Amount).
  3. Action footer featuring transparent monthly/annual premium pricing on the left and a 48px primary action CTA on the right.
- **Recommended Flag:** Cards tagged as "Sahi Choice" or "Best Value" display an attached top banner in `#0F3460` or `#D4A347` with white text.

### Form Inputs & Selectors
- **Input Fields (Vehicle No, Age, Pin Code):** 48px height, 8px corner radius, `#FFFFFF` fill, 1px border in `#CBD5E1`. Focus state transitions border to tertiary blue (`#3282B8`) with a 3px matching glow (`rgba(50, 130, 184, 0.15)`).
- **Segmented Sliders / Toggles (Coverage Tenure, Sum Insured):** Horizontal scrolling segment tracks with clearly defined active markers in `#0F3460`.

### Bottom Sticky Bar (Mobile Only)
- Pinned to the viewport bottom with safe-area insets. Houses total premium calculations, immediate coverage breakdown link, and full-width "Proceed" or "Compare" buttons for effortless one-handed thumb interaction.