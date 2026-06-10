# NOTHING-INSPIRED DESIGN SYSTEM

An open-source design language inspired by **Nothing** (nothing.tech), aimed at developer tools and AI-agent products. This file is the **single source of truth**: it holds the complete principles, tokens, component specs, and anti-patterns. The `index.html` in the same directory is its visual implementation (dark / light, the component library, and an applied example).

> **How to use this document**
> - Read it in full before generating or modifying any interface. Take every visual value from the tokens below — never hand-write raw values — and self-check against the Checklist at the end.
> - It is written to be self-contained and portable: the whole file can serve as a blueprint that drives interface generation and extension. Re-skin globally by editing tokens.
> - The public build bundles SIL OFL 1.1 open fonts and does not depend on Nothing's proprietary font files.

---

## 0 · Philosophy

> **Like a precision instrument: black and white as the base, information first, the accent lighting up only for the single most important thing.**

This is the design language for a developer-tools / agent product line. The interface should feel **restrained, industrial, trustworthy** — not a consumer toy. Its character comes from three tensions: the order of Swiss / grotesque typography, the retro-tech of the dot matrix, and the calm of generous negative space.

Tone keywords: **monochrome · round-dot matrix · grotesque sans typography · restrained editorial italic · industrial minimalism · abundant whitespace · mechanical precision**.

When a detail isn't covered by this spec, decide by this line: **quiet, precise, information-first.**

---

## 1 · Principles

1. **Black / grey / white dominate; the accent is extremely scarce.** The whole surface is built from black / grey / white. The accent (here, Nothing signal-red `#D71921`) is **only for genuine "signals"** — happening now, needs a decision, over limit, live status. The number of accent elements on a screen should be countable on one hand. Nothing's own site uses almost zero UI accent (its red lives only on hardware / packaging / the Glyph).
2. **Active controls invert black↔white, they don't colorize.** Primary buttons, switches, selected states, etc. follow Nothing's black/white inversion (dark mode: white fill / black text, white track / black knob; light mode the reverse), saving the accent for signals.
3. **Structure comes from lines and whitespace, not shadows.** Layer with 1px hairlines and generous negative space. **No drop shadows, gradients, or blur shadows**; express depth with z-index only. (A glass card's backdrop-blur is material, not shadow — allowed.)
4. **Typography does the heavy lifting.** Build hierarchy with size jumps and font roles, not color / icons / borders. Largely a single weight (see the type section).
5. **The dot matrix is the native tongue.** Numbers, icons, and punctuation — anything in a "dot-matrix context" — use one unified round-dot unit (see §4).
6. **Hover = drop opacity, not change color.** Hover uses `opacity .8 / .75`; cards `translateY(-2px)`; mechanical, crisp, no rebound.
7. **Values come only from tokens.** No raw color or pixel values by hand.

---

## 2 · Color

**Dark-first; the greyscale itself is the hierarchy — ≤4 greys per screen.** Soft black / soft white for text (not pure #000/#FFF) to reduce glare.

| token | Dark | Light | Role |
|---|---|---|---|
| `bg` | `#000000` | `#F2F2F2` | canvas (OLED black / warm-grey paper) |
| `surface` | `#0E0E0E` | `#FFFFFF` | panels / card base |
| `raised` | `#171717` | `#EDEDED` | secondary lift, active rows |
| `line` | `#222222` | `#E5E7EB` | hairline dividers |
| `line-2` | `#333333` | `#CFCFCF` | visible borders / outlines |
| `muted` | `#5A5A5A` | `#9A9A9A` | faintest text, ticks |
| `secondary` | `#8C8C8C` | `#585A5A` | labels, secondary text |
| `primary` | `#EDEDED` | `#1C1C1C` | body text, default icon color |
| `display` | `#FFFFFF` | `#000000` | headings, hero numerals, inversion fill |
| `accent` | `#D71921` | `#D71921` | **the single accent (signal) = Nothing red**. For fills; red holds on both light and dark |
| `accent-text` | `#FF4438` | `#C2141C` | accent as **foreground** (text/border/icon): brightened on dark, darkened on light for contrast |
| `accent-ink` | `#FFFFFF` | `#FFFFFF` | text color on top of an accent-red fill (white) |
| `success` | `#7BE38A` | `#3D8B4A` | data state: good / connected (green, on values only) |
| `warning` | `#F2C94C` | `#9C6B00` | data state: caution / pending (amber, on values only) |
| `error` | `#FF5247` | `#D23B30` | data state: error. Same red family as the accent — red *is* the alert, one signal family |
| `focus` | `rgb(59 130 246 / .55)` | same | accessibility focus ring — the only non-monochrome decoration allowed |

**Accent rules (important)**
- The accent is **for signals only**: needs-decision counts, `NEEDS INPUT`, over-limit values, live dots, notification badge dots, the accent swatch itself, and semantic alerts.
- Active control states (buttons / switches / selected / current tab / today / current step / ordinary progress · gauge · battery) **always use black/white inversion** (`display` ↔ `bg`), **never** the accent.
- **Foreground and fill are two tokens**: `--accent` (signal-red `#D71921`) is for **fills** only, with white `accent-ink` on top; `--accent-text` is the **foreground** (text/border/icon), brightened to `#FF4438` on dark and darkened to `#C2141C` on light to keep contrast (≥4.5:1). success/warning/error darken on light too.
- Data-state colors sit **on the value itself**, never on a label or a whole-row background.

---

## 3 · Typography

Five roles, each with a job. The public build keeps the fonts and their licenses in `fonts/open/`, so a clone renders identically with no network access.

| Role | Open font | Use |
|---|---|---|
| **Dot Display** | **Doto** (`ROND` axis = 100 → round, not square dots) | hero numerals, wordmark, glyphs, clocks, standalone numbers |
| **UI / Body** | **Geist** | body, secondary copy, UI text |
| **Mono / Data** | **Geist Mono** | labels (uppercase), data, code, navigation, timestamps |
| **Headline** | **Geist SemiBold** | card titles, dialog titles, functional headings |
| **Editorial Accent** | **Newsreader Italic** | brand lines, pull quotes, a few expressive moments |

> **The boundary of the italic (important)**: Newsreader Italic is an expressive accent, not a base UI face. The axis is **page-level vs component-level**: it is **allowed only in showcase / marketing / page-level HTML** (a hero line, a section intro, a pull quote — at most one short sentence per view); it **must never appear inside any reusable component** — buttons, inputs, cards, tables, navigation, modals, chips, lists, dashboard tiles are all sans-serif. In other words, anything built *from* this library is serif-free by default; the italic is an accent a page author adds *around* components, not inside them. Long body copy still uses Geist / Geist Mono.

> **Fonts and licensing**: Doto, Geist, Geist Mono, and Newsreader are released under SIL OFL 1.1, with license copies shipped in the repo. Proprietary assets such as NDot, NType, and Lettera are not included and must not be obtained from unofficial mirrors, committed, or redistributed.

**Font loading**
```css
@font-face{font-family:'Doto';src:url('../fonts/open/Doto-ROND-wght.ttf')}
@font-face{font-family:'Geist';src:url('../fonts/open/Geist-Regular.ttf');font-weight:400}
@font-face{font-family:'Geist';src:url('../fonts/open/Geist-SemiBold.ttf');font-weight:600}
@font-face{font-family:'Geist Mono';src:url('../fonts/open/GeistMono-Regular.ttf')}
@font-face{font-family:'Newsreader';src:url('../fonts/open/Newsreader-Italic.ttf');font-style:italic}
--f-display:'Doto',monospace;
--f-ui:'Geist','Helvetica Neue',Arial,sans-serif;
--f-mono:'Geist Mono',ui-monospace,monospace;
--f-head:'Geist','Helvetica Neue',Arial,sans-serif;
--f-editorial:'Newsreader',Georgia,serif;
```
`body{font-variation-settings:'ROND' 100}` locks Doto's round-dot shape (set ROND only, leave weight alone).

**Doto weight rule**: large dot-matrix type uses **~400–500 weight** so adjacent dots stay **separate and round**; 700/900 smears the dots together and pinches sharp corners at curve tops (the "0" gets a pointed head). For the "many small round dots" feel, **don't bold it**.

**Type scale** (site values, heading line-height 1.2 / body 1.5, single weight in principle):
`display 40 · heading-xl 32 · heading-lg 24 · heading-md 20 · body 16 · small 14 · caption/label 11`.
(Dashboard hero numerals may exceed 40 for dramatic hierarchy; labels are always Geist Mono, uppercase, tracking .08–.1em.)

---

## 4 · Dot-Matrix Language

The dot matrix is the system's native tongue; three places share one round-dot texture:

- **Numbers**: **every standalone number uses dot-display Doto** — calendar dates, page numbers, stepper indices, counts, percentages, gauge readings. Its **symbol** (especially `%`) goes with the number in Doto (e.g. `78%` `73%` as one dot-matrix unit) — don't dot-matrix the digits but render `%` in mono. Letter units (GB / K / MB) stay small sans. Data tables / very small inline counts may use mono as an exception.
- **Icons**: showcase icons are **true 9×9 dot-matrix bitmaps** — each icon hand-drawn on a 9×9 grid, each filled cell a **complete round dot** (CSS grid + `border-radius:50%`). **Don't clip with `mask`**: that cuts dots into half-circles. **Scalable**: size is driven by the `--gs` variable (default 30px), with gap scaling as `--gs/20`, so `style="--gs:48px"` enlarges the whole icon without distorting the dot spacing. **Functional small icons** inside buttons / inputs / nav may still be 1.5px line SVGs for legibility.
- **Glyph Matrix — the canonical grid (25×25, circular mask)**: matches the real Nothing Phone (3) spec — a **25×25 addressable grid, circularly masked (no LEDs in the corners), white round-dot units, dim LEDs as base texture** (the hardware uses 0–255 grayscale; this system simplifies to three levels: dim texture / lit dot / red signal). Use 25×25 when you need device-grade, high-fidelity dot art (hero glyphs, Glyph-Toy style); use 9×9 for in-page status icons. The 25×25 glyphs are generated from geometric functions (rings, hearts, triangles, equalizer bars, …) rather than hand-drawn, keeping the dots clean. **Signal glyphs (e.g. recording / live) use signal-red; the rest are white.**
- **Punctuation**: `:` `.` `…` etc. render from the same **round-dot unit** as the numbers (`.colon` two vertical dots / `.pdot` single dot / `.ellip` three horizontal dots), diameter controlled by `--pxd`, **slightly smaller** than the adjacent digit dots. Don't use font glyphs or squares.

---

## 5 · Background (the dot field)

Nothing's signature background: a layer of **very sparse round dots**. Its layer model is the key:

> **Three layers, bottom to top: `Background` → `Dots` → `Card`.**

- **Local-inverse coloring (core)**: the dots are not "one fixed dot color per theme" — they take the inverse of **whatever surface they currently sit on**: lighter over a dark object, darker over a light object; **one continuous field crossing light and dark inverts on each.**
- **Implementation = `mix-blend-mode:difference`**: the dot layer is semi-transparent white dots (`rgba(255,255,255,~.42)`) with `mix-blend-mode:difference`, which automatically inverts against the surface behind it — **no per-theme dot color needed.**
  - The crucial layering: put the dot layer **beneath the cards** (`z-index:-1`, or a region's `::before` + `z-index:-1`). Difference then inverts only against the **background / region surfaces** behind it, while **cards always sit on top and cover the dots** — which doesn't contradict the old rule "don't blend dots onto foreground content": the difference blend acts on the background layer, not on the foreground cards.
- **Dots are background only**: cards float above and **cover** them; card faces show no dots; dots are visible only in the **gaps and edges between cards.**
- **Fine and very sparse**: dots ~1.3px, spacing **~120px**; visible on inspection, never competing.
- **Continuous alignment**: the whole layer is anchored to the viewport (`background-attachment:fixed`), aligning into one grid across modules.
- **Per region**: distinct background regions (such as the always-dark dashboard `.appwrap`) each carry their own difference dot `::before` (`position:absolute;inset:0;z-index:-1`), inverting automatically within that region.
- **Cards are frosted glass**: `--glass` + `backdrop-filter:blur`, **borderless**, separated by glass fill and gaps.

> The spec doc should keep a **dedicated section** for the background: a **local-inverse diagram** (one dot field crossing a dark and a light block, inverting on each + a card covering the dots) plus prose.

---

## 6 · Spacing · Radius · Elevation · Motion

**Spacing** (4px base, use only these steps): `0 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 64 · 80 · 96 · 128`.
Relationship semantics: 4–8 touching / 16 same group / 32–48 new group / 64–128 new context. **When you reach for a divider, you usually just need more space.**

**Radius**: controls/buttons **6px**, cards **8px**, switch tracks / chips / avatars are pill. No big capsules, no card corners > 8px.

**Elevation / layering**: no shadows; z-index only (base 10 / overlay 30 / modal 40 / header 50).

**Motion**: micro-interactions `200ms` / transitions `400ms`, `ease-in-out`, **no spring rebound**. Hover drops opacity (.8 / .75), cards `translateY(-2px)`. Prefer opacity transitions; use displacement sparingly.

---

## 7 · Components

**Unified state machine** (shared system-wide, don't invent new names): `idle` (grey static dot) · `running` (white pulsing dot) · `needs-input` (signal dot) · `done` (grey solid dot) · `error` (outlined). State is expressed by **shape + label** first, color second.

- **Button**: 6px radius (not a capsule). Primary = `display` fill + `bg` text (black/white inversion, **not red**); Outline = `line-2` border; Text/Ghost = text only. Labels in Geist Mono uppercase, tracking .04–.06em; hover drops opacity; a CTA may carry a round arrow on the right.
- **Input**: underline or 6px border; label above (Geist Mono uppercase, secondary); focus = `focus` blue ring + transparent border; error = `error` border + red text below; the value is Geist Mono.
- **Chips / Tags**: outlined, no fill, pill (a tag may use a 4px technical corner); active = **inversion fill** (white fill, dark text), not red.
- **Switch**: pill track + round knob; ON = `display` white track + `bg` black knob (a switch isn't an accent moment, **no red**).
- **Slider**: thin track + round knob; fill and knob use `display` (white), not the accent.
- **Segmented Bar** (signature): discrete squares + 2px gaps, square ends, no radius; normal fill `display`, **over-limit** uses `accent` (signal), empty slots `line`; always paired with a numeric readout.
- **Gauge**: thin ring + tick ring + **centered** Doto number, `%` right after it (no wrap). Normal arc uses `display`; use the accent only to express an alert.
- **Card**: frosted glass, 8px radius, 24px padding, **borderless and shadowless**, hover `translateY(-2px)`. Title in Geist SemiBold (`--f-head` + 600).
- **Table**: Geist Mono; numbers right-aligned, text left-aligned; **no zebra striping**; active row gets a `raised` background + a 2px accent indicator bar on the left.
- **Navigation / Tabs / Pagination**: labels in Geist Mono uppercase; current state = `display` (white) underline / inversion, not the accent.
- **Calendar**: dates are Doto dot-matrix numbers; today = inversion fill; selected = `display` outline.
- **Stepper**: indices in Doto; current step = inversion fill.
- **Alerts / status**: success / warning / error use their semantic color (icon + 3px left border + a very faint tint); title in `display`, description in secondary. **No toasts** — use inline status like `[SAVED]` / `[ERROR: …]`.
- **Content cards (gallery type)**: header `mono label + [count] + ♡` → preview thumbnail → footer `avatar + username`; sections led by a `Primary CTA + See all` button pair.
- **Product UI / dashboards stay dark**: like Nothing's own console, they don't follow the page light/dark toggle; this keeps their accent red uniformly `#D71921` (including the timer-colon signal), avoiding a "foreground red vs fill red" mismatch.
- **Default icon color** = `primary` (≈ white on dark / ≈ black on light), turning `accent-text` only on hover; don't default to grey.

---

## 8 · Don'ts (never)

**A serif in functional UI, or overusing the editorial italic** · gradients · shadows / blur shadows · skeleton screens (use `[LOADING…]` or a segmented spinner) · toast popups (use inline status) · mascots / sad-face illustrations / multi-line empty-state copy · zebra-striped tables · filled icons / multicolor icons / emoji-as-UI · parallax / scroll-jacking · spring-rebound easing · stacking hierarchy with many weights · using the accent as decoration or filling controls with it · blending dots onto foreground content · card borders + radius > 8px · high-chroma color as text/border on a light background.

---

## 9 · Platform mapping

- **Web**: local `@font-face` + CSS variables; type in `rem`, spacing/borders in `px`; light/dark via `prefers-color-scheme` or a class.
- **Native desktop (SwiftUI)**: bundle the fonts; a `Color` extension keyed by token; switch mode with `@Environment(\.colorScheme)`.
- **Markdown output**: no CSS — restrained heading levels, tables + horizontal rules for separation, extremely sparing emoji, monospace for data.

---

## 10 · Application Checklist (self-check before and after producing)

- [ ] Color / spacing / type size / radius / easing all come from tokens, no raw values
- [ ] Black/grey/white dominate; accent elements countable on one hand, only on "signals"
- [ ] Active controls use black/white inversion, not the accent (switch ON = white track)
- [ ] Structure from hairlines + whitespace, zero shadows / zero gradients
- [ ] Standalone numbers and their `%` in Doto; headings and body in Geist, labels/data in Geist Mono; Newsreader Italic only for a one-line brand phrase or quote
- [ ] Doto weight ≤ 500, `ROND=100` (dots separate and round, the "0" has no pointed head)
- [ ] Icons are 9×9 complete dots (not mask-clipped), scalable via `--gs`; punctuation uses round-dot units
- [ ] Background dots: sparse ~120px, **local-inverse coloring** (`mix-blend-mode:difference`, `z-index:-1` beneath cards), covered by cards (not over foreground)
- [ ] Cards are frosted glass, borderless
- [ ] State names all live within the unified state machine
- [ ] The interface is quiet by default, drawing attention only when it should
