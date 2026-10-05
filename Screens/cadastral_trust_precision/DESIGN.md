---
name: Cadastral Trust & Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006329'
  on-tertiary: '#ffffff'
  tertiary-container: '#007f36'
  on-tertiary-container: '#c7ffca'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#7ffc97'
  tertiary-fixed-dim: '#62df7d'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005320'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style
This design system establishes a high-trust, authoritative land-tech aesthetic engineered for cadastral verification, surveyor discovery, and legal land boundaries across Telangana and Andhra Pradesh. 

The visual language bridges institutional authority with modern operational speed. The design avoids playful startup patterns in favor of structured reliability, crisp geometric precision, and legal certitude. The core emotional goal is to dispel the anxiety, ambiguity, and fraud fears inherent in property transactions by projecting certified authenticity, bank-grade escrow security, and exact spatial measurement.

The aesthetic direction merges **Modern Functionalism** with **Civic Tech Precision**:
- **Clarity over ornament:** Uncluttered layouts that prioritize land survey numbers, Patta passbook linkages, and official state records (Dharani and Meebhoomi).
- **Engineering discipline:** Crisp micro-borders, structured information density, and explicit status verifications.
- **Bilingual balance:** Native script legibility (Telugu + English) treated with visual parity across key operational triggers.

## Colors
The palette leverages high-contrast structural tones with hyper-specific functional accents designed for clarity under bright, direct outdoor sunlight (field inspections) and indoor reviews.

- **Primary (`#2563EB` - Electric Blue):** Powers primary functional paths, active toggles, booking confirmation steps, and interactive plot anchors.
- **Secondary (`#0F172A` - Deep Slate Navy):** Anchors headers, elevated bottom sheets, bottom navigation chrome, and authoritative legal credentials.
- **Tertiary (`#16A34A` / `#22C55E` - Vibrant Cadastral Green):** Dedicated strictly to validated state portal records (Dharani/Meebhoomi verification), verified Field Measurement Books (FMB), certified surveyor badges, and escrow vault guarantees.
- **Neutral Core (`#F8FAFC` to `#0F172A`):**
  - `#F8FAFC` serves as the canvas substrate to reduce eye fatigue.
  - `#FFFFFF` is reserved for elevated cards, modal drawers, and critical data matrices.
  - `#E2E8F0` defines structural boundary dividers and input strokes.
  - `#64748B` and `#94A3B8` designate secondary metadata, survey coordinate annotations, and auxiliary legal clauses.
- **Warning & Dispute Accents:** Amber (`#D97706`) signals boundary overlap alerts or pending tahsildar clearances; Crimson (`#DC2626`) is reserved for land encumbrance notices and title dispute flags.

## Typography
Typographic rhythm is executed using **Inter** to ensure maximum legibility at small sizes and high rendering accuracy for numeric survey data.

- **Tabular Numerics:** All currency (`₹`), Sy. No. (Survey Numbers), Extent measurements (Acres/Guntas/Cents), and GIS Lat/Long metrics must use CSS `font-feature-settings: "tnum" 1` to align tables and comparison matrices seamlessly.
- **Headings:** Tightly tracked headings create an assertive, editorial anchor for legal headers and official documentation summaries.
- **Dual-Language Typesetting (EN/తె):** Telugu copy inherits system font fallbacks matching vertical baseline alignment with Inter, maintaining equal optical height without clipping descenders.

## Layout & Spacing
The layout follows a fluid mobile-first architecture anchored to an 8-point base grid (with a 4-point micro-step for tags and inline badges).

- **Mobile Viewport Structure:**
  - Standard edge margin: `16px` (`margin`).
  - Interior card gutters: `16px` (`gutter`).
  - Screen content conforms to single-column vertical flows with modular sticky headers and bottom action sheets.
- **Desktop/Tablet Breakpoints:**
  - At 768px (Tablet), cards shift to an alternating 2-column grid; edge margins expand to `24px`.
  - At 1024px+ (Desktop/Field Ops Portal), the app employs a locked 12-column split with a persistent cadastral map panel on the left (7 columns) and surveyor workflows on the right (5 columns).
- **Component Breathing Room:**
  - Card internal padding: `16px` (`space-lg`).
  - Chip horizontal padding: `12px` (`space-md`).
  - Form field vertical padding: `12px` (`space-md`).

## Elevation & Depth
Elevation is maintained using a hybrid of crisp hairline borders (`1px` solid `#E2E8F0`) and subtle, ambient directional drop shadows tinted with Navy slate to eliminate pure gray muddiness.

- **Level 0 (Canvas):** Substrate background (`#F8FAFC`). No shadow, no border.
- **Level 1 (Card & Content Blocks):** Pure white `#FFFFFF` surface with a `1px` border of `#E2E8F0` and `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Interactive Floating Elements & Active Cards):** Hover or selected cards, surveyor mini-profiles, and verification callouts: `box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Sticky Action Bars & Bottom Sheets):** Sticky booking confirmations and map detail trays: `box-shadow: 0 -4px 16px 0 rgba(15, 23, 42, 0.08)` with top edge border in `#E2E8F0`.
- **Level 4 (Modals & Legal Overlays):** Full alerts, escrow pin verification: `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`.

## Shapes
A roundedness factor of `2` provides balanced radius scaling that communicates approachable modernization while keeping structural geometry disciplined.

- **Standard Containers & Cards:** `12px` to `16px` radius (`rounded-lg` to `rounded-xl`).
- **Interactive Inputs & Primary Buttons:** `10px` to `12px` radius for high touch target ergonomics.
- **Micro-Badges & Status Tags:** `6px` to `8px` (`rounded-sm` / `rounded-md`) to ensure they remain architectural rather than pillowy.
- **Language Switchers & Cadastral Toggle Chips:** Fully rounded pill capsules (`9999px`) to distinguish selection toggles from structural content cards.

## Components

### Buttons
- **Primary:** Deep Electric Blue (`#2563EB`) fill, `#FFFFFF` text, `12px` border radius, `h-12` minimum touch target. Pressed state darkens to `#1D4ED8`.
- **Secondary (Authority/Review):** Slate Navy (`#0F172A`) fill, `#FFFFFF` text. Used exclusively for binding checkout, legally valid signatures, and official report downloads.
- **Outlined:** `#FFFFFF` background, `1px` border in `#E2E8F0`, `#0F172A` text.

### Chips & Badges
- **Cadastral Plot Chip:** Light Slate background (`#F1F5F9`), bordered with `#CBD5E1`. Displays Survey Number (`Sy. No. 244/A`) in bold tabular text with extent size tags.
- **Dharani / Meebhoomi Verification Badge:** Light green tint background (`#DCFCE7`), solid green border (`#86EFAC`), bold green label (`#15803D`) coupled with an official shield checkmark icon.
- **Dual-Language Pill:** Compact segmented control (`EN | తె`) with smooth sliding highlight (`#0F172A` background, white label when selected; transparent when idle).

### Escrow Security Guarantee Cards
- Distinctive structural card featuring a top accent rail (`3px` solid `#16A34A`), soft gradient backdrop tint (`from #FFFFFF to #F0FDF4`), depicting step-locked funds, survey milestone tracking, and licensed dispute arbitration guarantees.

### Input Fields
- White fill with `1px` neutral border (`#CBD5E1`). Focus state introduces a crisp `2px` ring in `#2563EB` with an offset of `0px`. Helper labels provide instant inline verification of district, mandal, and village records.

### Lists & Surveyor Cards
- Surveyor profiles render rating stars, licensed surveyor council IDs, equipment badges (DGPS, Total Station, Drone Certified), distance in kilometers, and transparent base rates per acre. Dividers between line-items utilize a clean `1px` hairline (`#E2E8F0`).