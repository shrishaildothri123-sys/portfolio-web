---
name: Synthetic Slate
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#bdc2ff'
  on-secondary: '#131e8c'
  secondary-container: '#2f3aa3'
  on-secondary-container: '#a8afff'
  tertiary: '#98d3ff'
  on-tertiary: '#00344d'
  tertiary-container: '#43bbff'
  on-tertiary-container: '#00486a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000767'
  on-secondary-fixed-variant: '#2f3aa3'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  badge-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1.25rem
  margin-lg: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes a high-performance, precision-engineered identity tailored for elite developers, systems architects, and technical creators. It strikes an intersection between minimal developer utilitarianism and atmospheric, high-fidelity dark-mode surfaces.

Key stylistic pillars:
- **Atmospheric Depth:** Deep space and navy canvasses layered with low-opacity gradient glows, creating spatial dimension without sacrificing interface clarity.
- **Instrument Precision:** Monospaced technical indicators, surgical 1px borders, and micro-metric labels evoke modern IDEs and production telemetry suites.
- **Luminescent Response:** Tactile feedback is driven by subtle cyan-to-electric-sky luminescence, rewarding interaction with refined focal glows rather than heavy structural displacement.

## Colors
The palette utilizes deeply saturated, low-luminance slate baselines punctuated by electric photons.

### Surface System
- `canvas-root`: `#0b0f19` (Primary background, deep cold abyss)
- `surface-base`: `#0f172a` (Default container and card substrate)
- `surface-raised`: `#1e293b` (Elevated overlays, popovers, active controls)
- `surface-inset`: `#070a10` (Code editors, terminal blocks, recessed zones)

### Accent Hierarchy
- **Electric Cyan (`#38bdf8`):** Primary interaction driver, selected indicators, and focal glows.
- **Electric Sky (`#0ea5e9`):** Dynamic gradient anchor, interactive hover terminations.
- **Synthetic Iris (`#818cf8`):** Tertiary semantic bridge, metadata highlights, and secondary tags.

### Border & Stroke Tokens
- `border-subtle`: `rgba(255, 255, 255, 0.08)`
- `border-medium`: `rgba(255, 255, 255, 0.14)`
- `border-glow`: `rgba(56, 189, 248, 0.35)`

## Typography
Typography balances high-density utility with clean modern editorial weights. 

- **Inter** provides structured, neutral neutral-to-condensed legibility across display, body, and navigation structures.
- **JetBrains Mono** serves as the system's technical voice: applied systematically to badges, stat counters, metadata timestamps, repository metrics, and code blocks.
- Large titles leverage tight, negative tracking (`-0.02em` to `-0.03em`) for a solid architectural lockup, while code-driven labels use wide letter spacing (`0.08em`) to enforce legibility at small optical sizes.

## Layout & Spacing
The layout leverages a 12-column responsive fluid grid pinned within an ultra-wide max content container of `1280px`.

### Grid Adaptation
- **Desktop (1024px+):** 12 columns, `gutter: 1.5rem`, outer section margin `margin-lg: 5rem`.
- **Tablet (768px – 1023px):** 8 columns, `gutter: 1.5rem`, section padding `margin: 2rem`.
- **Mobile (< 768px):** 4 columns, `gutter-sm: 1rem`, side padding `margin-sm: 1.25rem`.

### Spatial Rhythm
Internal component hierarchy adheres strictly to 4px and 8px step increments. Vertical rhythm between modular portfolio projects relies on uncrowded negative space (`space-xl` to double `space-xl`) to preserve high-signal readability across technical showcases.

## Elevation & Depth
Depth avoids heavy opaque drop shadows, relying instead on translucent layering, light dispersion, and precision edge lighting.

### Surface Hierarchy
1. **Root Surface:** Canvas `#0b0f19` featuring ambient SVG radial background mesh gradients (`radial-gradient(ellipse at 50% 0%, rgba(14, 165, 233, 0.08) 0%, transparent 70%)`).
2. **Layer 1 (Card Default):** `#0f172a` backed with `border: 1px solid rgba(255, 255, 255, 0.08)`.
3. **Layer 2 (Card Hover / Elevated Panel):** `#1e293b` with a border transition to `rgba(56, 189, 248, 0.3)` and an outer luminescent cast: `box-shadow: 0 0 24px -4px rgba(56, 189, 248, 0.15)`.
4. **Layer 3 (Modals / Floats):** Semi-transparent `#0f172a` at 85% opacity, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255, 255, 255, 0.14)`.

## Shapes
The system implements a refined, restrained shape geometry (`roundedness: 1`):
- Standard cards, interactive controls, inputs, and code viewports utilize `0.5rem` (`rounded-lg`).
- Inline elements, badge chips, and small triggers implement `0.25rem` (`rounded-base`).
- Full rounded pills (`9999px`) are reserved exclusively for status indicators, active live-pulse tags, and avatar rings.

## Components

### Buttons
- **Primary:** Gradient fill `linear-gradient(135deg, #38bdf8, #0ea5e9)`, text `#0b0f19` (bold), subtle inset light stroke. Hover states trigger an ambient aura: `box-shadow: 0 0 20px rgba(56, 189, 248, 0.45)`.
- **Secondary / Outline:** Background `rgba(15, 23, 42, 0.6)`, text `#f8fafc`, border `1px solid rgba(255, 255, 255, 0.08)`. Hover transitions border to `rgba(56, 189, 248, 0.4)` and applies a low cyan glow.
- **Ghost / Icon:** Monospaced text or icon, transparent background. Active/hover receives a `#1e293b` background with `border: 1px solid rgba(255, 255, 255, 0.08)`.

### Badge Chips
- Built with `JetBrains Mono` at `12px`.
- Structure: background `rgba(56, 189, 248, 0.06)`, text `#38bdf8`, border `1px solid rgba(56, 189, 248, 0.2)`.
- Optional live dot: 6px circular indicator with an animated CSS ping glow.

### Cards & Project Tiles
- Base: `#0f172a` fill, `border: 1px solid rgba(255, 255, 255, 0.08)`, radius `0.5rem`.
- Interactive cards feature a cursor-tracking spot illumination overlay (`radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(56,189,248,0.06), transparent 40%)`).

### Input Fields & Search Bars
- Background: `#070a10`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#f1f5f9`.
- Focus state: border shifts to `#38bdf8` with an internal focus glow `box-shadow: 0 0 0 1px #38bdf8, 0 0 12px rgba(56, 189, 248, 0.2)`.

### Code Blocks & Terminal Snippets
- Recessed background `#070a10` with header status bar (macOS dots or git branch status chip).
- Border: `1px solid rgba(255, 255, 255, 0.08)`.
- Integrated copy button floating in the top right, styled as an elevated glass trigger.