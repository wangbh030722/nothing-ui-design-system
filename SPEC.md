# nothing-ui · Generation Spec (Normative)

**Audience:** humans and AI assistants generating UI with this library.
**Goal:** anything you build with nothing-ui must be **visually indistinguishable** from `index.html`. This document is the contract that makes that happen. When in doubt, open `index.html`, find the closest component, and copy its markup verbatim.

The keywords **MUST**, **MUST NOT**, **NEVER**, **ALWAYS** are normative. Violating any rule in §1 means the output is wrong, even if it "looks nice".

---

## 0 · How to use the library (the only correct setup)

```html
<!doctype html>
<html lang="en" data-theme="dark"> <!-- or "light"; dark is the default -->
<head>
  <link rel="stylesheet" href="css/nothing-ui.css">
</head>
<body>
  <!-- components here -->
  <script src="js/nothing-ui.js"></script>
</body>
</html>
```

- **MUST** load `css/nothing-ui.css` (it imports `css/tokens.css`). **MUST NOT** copy token values into inline styles or a second stylesheet.
- **MUST** keep the bundled `fonts/open/` directory beside the CSS. `tokens.css` loads every typeface locally, including Doto's round-dot variable font.
- Theme switching is **only** `data-theme="dark" | "light"` on `<html>` (or a region). **MUST NOT** invent a third theme or override token values per-page.
- **MUST NOT** add any other CSS framework, reset, or font (no Tailwind, no Bootstrap, no Inter/Roboto/Instrument Serif).

---

## 1 · Hard rules (any violation = wrong output)

1. **Monochrome first.** Black / grey / white carry the entire interface. ≤4 greys per screen, all from tokens.
2. **The accent is a signal, never decoration.** `--accent` (Nothing red `#D71921`) appears **only** for: needs-decision counts, `NEEDS INPUT` states, over-limit values, live/recording dots, notification badges, and the accent swatch itself. A typical screen shows **0–2** red elements. If you are about to use red on a button, tab, link, slider, or hover — stop; that is wrong.
3. **Active states invert black↔white, they do not colorize.** Primary buttons, switches ON, selected chips/tabs/pagination/calendar-today, stepper current, progress fills, gauges: all use `--display` on `--bg` (or inverted). NEVER the accent.
4. **Functional UI stays sans-serif; the editorial italic is a page-level accent, never a component.** Headlines use `--f-head` (grotesque, weight 600). `--f-editorial` (Newsreader Italic) is the sole serif exception, allowed **only in showcase / marketing / page-level HTML** — a hero line, a section intro, a pull quote: at most one short expressive sentence per view. It **MUST NOT appear inside any reusable component** (button, input, card, table, nav, modal, chip, list, dashboard tile, …). Components ship sans-serif only, so anything you build *from* the library is serif-free by default; the italic is something a page author adds *around* components, not inside them. Never use it for controls, data, or long body copy.
5. **No shadows, no gradients.** Depth comes from 1px hairlines (`--line`/`--line-2`), whitespace, and frosted glass (`backdrop-filter: blur` is material, not shadow — it is allowed). `box-shadow` is forbidden (sole exception: the `0 0 0 2px` ring on stacked avatars, which is a border substitute).
6. **Cards are borderless frosted glass.** `background: var(--glass)` + `backdrop-filter: blur(12–16px)`, radius `--r-md` (8px), no `border` (a ≤1px `--glass-brd` inner hairline is optional), hover = `translateY(-2px)`, never a shadow or border change.
7. **Every dot is a complete circle.** Dot-matrix icons are CSS-grid cells with `border-radius: 50%`. NEVER build dot icons with `mask`, `clip-path`, or dotted borders — they clip dots into partial circles.
8. **Dots live behind cards.** The background dot field sits at `z-index: -1`; cards always cover it. NEVER overlay dots on foreground content.
9. **All values come from tokens.** No raw hex, no arbitrary px radii, no ad-hoc font stacks. If a value isn't in §2, you may not use it.
10. **No toasts that float over content as the primary status channel, no zebra tables, no mascots/illustrations/emoji-as-UI, no spring/bounce easing, no parallax.**

---

## 2 · Tokens (single source of truth = `css/tokens.css`)

### 2.1 Color — dark (`:root`, default)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#000` | page canvas |
| `--surface` | `#0C0C0C` | menus, modals, cmd palette |
| `--raised` | `#171717` | thumbs, kbd, avatar fill |
| `--line` / `--line-2` | `#262626` / `#3A3A3A` | hairlines / control borders |
| `--muted` / `--secondary` | `#5A5A5A` / `#8C8C8C` | placeholders / labels, body-secondary |
| `--primary` | `#EDEDED` | body text, icons (soft white, not `#FFF`) |
| `--display` | `#FFF` | headings, hero numerals, inversion fill |
| `--accent` | `#D71921` | signal FILL only |
| `--accent-ink` | `#FFFFFF` | text on top of accent fill |
| `--accent-text` | `#FF4438` | accent as FOREGROUND (text/border/icon) |
| `--success` / `--warning` / `--error` | `#7BE38A` / `#F2C94C` / `#FF5247` | data states, on values only |
| `--dotbg` | legacy token, unused by the dot field | — |
| `--glass` / `--glass-brd` | `rgba(16,16,16,.9)` / `rgba(255,255,255,.09)` | card fill / optional inner hairline |

### 2.2 Color — light (`[data-theme="light"]`)

`--bg #F2F2F2 · --surface #FFF · --raised #EDEDED · --line #E2E2E2 · --line-2 #CFCFCF · --muted #9A9A9A · --secondary #585A5A · --primary #1C1C1C · --display #000 · --accent #D71921 · --accent-text #C2141C · --success #3D8B4A · --warning #9C6B00 · --error #D23B30 · --glass rgba(255,255,255,.96) · --glass-brd rgba(0,0,0,.08)`

Rules: accent fill stays the same red in both themes; the **foreground** variant brightens on dark (`#FF4438`) and darkens on light (`#C2141C`). Status colors darken in light mode. Body text is soft (`#1C1C1C`), never pure black.

### 2.3 Typography — five roles, bundled locally

| Role | Token | Bundled family | Used for |
|---|---|---|---|
| Dot display | `--f-display` | **Doto** (`ROND` 100, weight ≤500) | wordmark, hero/standalone numerals, glyphs, clocks, module numbers |
| UI / body | `--f-ui` | **Geist** | body copy, control labels |
| Mono / data | `--f-mono` | **Geist Mono** | UPPERCASE labels (`.08–.12em` tracking), data, code, table cells, timestamps |
| Headline | `--f-head` | **Geist SemiBold** | card/dialog/section titles |
| Editorial accent | `--f-editorial` | **Newsreader Italic** | short brand lines and pull quotes only |

- Every **standalone number** (calendar dates, page numbers, stepper indices, counts, percentages, gauge readings) **MUST** use `--f-display`, including its `%` sign. Letter units (GB, K) stay small `--f-mono`.
- Labels are `--f-mono`, uppercase, 9–10px, letter-spacing `.08–.14em`, color `--secondary`/`--muted`.
- Base body: 11px `--f-mono`, line-height 1.45. `font-variation-settings:'ROND' 100` is set on `body` — do not unset it.
- The bundled families are SIL OFL 1.1 fonts. Proprietary NDot/NType assets are not required and MUST NOT be committed.

### 2.4 Geometry & motion

- Spacing: 4px scale — `4 8 12 16 20 24 32 40 64 80 96 128`. Module padding 22–24px; poster gap 12px.
- Radius: `--r-sm` 6px (controls) · `--r-md` 8px (cards/modals) · `--r-pill` 999px (chips, switches, pills). Nothing else.
- Hairlines: always 1px, `--line` (inside lists/tables) or `--line-2` (control outlines).
- Motion: `ease-in-out` only; ~200ms controls / ~350ms theme; hover = `opacity .8` (buttons) or `translateY(-2px)` (cards). No springs, no scale-pops.
- Layout: 12-column poster grid (`.poster` + `.mod.s2…s12`), grid gap 12px, max width 1480px (`.outer`).

---

## 3 · The dot-field background (signature — get this exactly right)

One sparse layer of fine dots that takes the **local inverse of the surface beneath it**: light dots over dark surfaces, dark dots over light surfaces — one continuous field crossing both reads correctly on each. Cards sit on top and cover it.

```css
body::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;
  background-image:radial-gradient(rgba(255,255,255,.42) 1.3px, transparent 1.7px);
  background-size:120px 120px;background-attachment:fixed;mix-blend-mode:difference}
```

- **MUST** be `~1.3px` dots at `~120px` spacing — visible on inspection, never competing. Denser than ~64px is wrong.
- **MUST** use `mix-blend-mode:difference` on a white-dot layer — this is what produces local inversion in both themes with one rule. Do not replace it with a per-theme dot color.
- **MUST** sit at `z-index:-1` (page: `body::before`; a self-contained dark region like a dashboard: `position:relative; isolation:isolate;` on the region + the same `::before`). Dots never appear on card faces.
- `background-attachment:fixed` keeps it one continuous viewport-aligned grid across modules.

---

## 4 · Dot-matrix language

- **9×9 icons** (status/system glyphs): CSS grid `repeat(9,1fr)`, each lit cell a full circle. Size is driven by `--gs` (default 30px; gap = `--gs/20`): `<span class="gico" style="--gs:48px">`. Add new glyphs to the `G` dictionary in `js/nothing-ui.js` as 9-row strings of `#`/`.`, or render markup via `data-dot="name"`.
- **25×25 Glyph Matrix** (hero/device-grade glyphs): canonical Phone (3) grid — 25×25 addressable, **circularly masked** (no dots in corners), white round dots on a `#070707` circular panel, dim-LED base texture (`rgba(255,255,255,.06)`), lit dots `#fff`, signal glyphs `--accent`. Build glyphs as geometric functions `(x,y,center)→bool` like the `GMX` array in `js/nothing-ui.js`; do not hand-draw ragged bitmaps at this size.
- **Punctuation** (`:` `·` `…`) in dot-matrix contexts uses the round-dot units `.colon` / `.pdot` / `.ellip` sized via `--pxd`, slightly smaller than adjacent digit dots — not font glyphs.
- Functional in-control icons (button/input/nav) are **1.5px-stroke line SVGs** from the `<symbol>` set in `index.html` (`.ico` 22px / `.ico.sm` 16px, `stroke:currentColor`, round caps). Never fill them, never multicolor them.

---

## 5 · Component recipes (copy these exactly)

Markup contracts — class names and structure are fixed. Find the live reference for each in `index.html` (module number in parentheses).

- **Buttons (05):** `.btn.btn-primary` (display-on-bg inversion) · `.btn.btn-outline` · `.btn.btn-text` · `.btn-icon` (38px circle) · `.btn-sq`. States: hover `opacity:.8`, pressed `.6`, disabled `.3`. NEVER a red button.
- **Inputs (06):** `.field > .label + .inp`; focus = `border-color: var(--primary)` (no glow, no accent). Checkbox `.box(.on)`, radio `.rdo(.on)`, switch `.switch(.on)` — ON state is **white track / bg knob** inversion.
- **Chips & tags (07):** `.chip(.on)` pill; active = display fill. `.tag` is the 6px-radius variant.
- **Navigation (09/38):** `.navbar` pill bar; `.tabs` underline (2px `--display`); `.tabpills`; `.pager` with Doto numerals; active = inversion.
- **Alerts (10):** `.alert.success|warning|error` — icon + 3px left border + ~9% tint via `color-mix`. The ONLY place status colors fill an area.
- **Cards (13):** `.card` glass; serif-free `.ttl` (`--f-head` 600 18px), `.ds` 10px `--secondary`.
- **Table (15):** mono cells, uppercase mono `th`, hairline rows, **no zebra**; status pills `.pill.a` (inversion) / `.pill.i` (outline).
- **Calendar (16):** Doto digits; today = inversion fill; selected = `--display` outline.
- **Modal (18):** `.modal > .mh + .mb + .mf`; title `--f-head`; footer = `.btn-text` cancel + `.btn-primary` confirm.
- **Progress & stepper (19):** `.lp` linear (display fill), `.stepper` Doto indices, current = inversion.
- **Segmented bar** (dashboard): discrete square cells, 2px gaps, no radius; fill `--display`; **over-limit cells only** may be `--accent`; always paired with a numeric readout.
- **Menus / command palette (22/27):** `.menu` / `.cmd` on `--surface`, hover = `--raised` (no accent), `⌘` shortcuts in muted mono.
- **Toast (29):** inline stack `.toasts > .toast`, statically placed in a corner region — not animated fly-ins.
- **Empty state (31):** dashed border, 9×9 `data-dot` glyph, `--f-head` title, one `.btn-primary`. No illustrations.
- **Metric (37):** `.metric` with Doto value; delta `↑/↓` uses success/error on the value only.
- **Banner (36):** default = display-inversion fill; `.sig` (red fill, white text) is reserved for needs-decision messages.
- **Dashboards / product consoles:** ALWAYS dark — wrap in a region that pins the dark token set (see `.appwrap`), regardless of page theme.

When you need a component this library doesn't have: compose it from tokens + the rules in §1 (hairlines, inversion, mono labels, glass) and match the visual density of the nearest existing module. Do not import one from elsewhere.

---

## 6 · Pre-ship checklist (run every time)

- [ ] Zero raw hex / px radii / font names in your markup — tokens only
- [ ] ≤2 red elements on screen, all genuine signals; every active state is black↔white inversion
- [ ] Functional UI is sans-serif; editorial italic appears only in showcase/page-level copy — **never inside a component**; standalone numerals (and their `%`) are dot-display
- [ ] No `box-shadow`, no gradients, no borders on cards; hairlines are 1px token colors
- [ ] Dot field: difference-blend layer behind cards, ~1.3px/~120px, fixed attachment
- [ ] Dot icons are complete circles (grid cells, no masks); 9×9 scaled only via `--gs`
- [ ] Both `data-theme="dark"` and `"light"` verified; dashboards stay dark
- [ ] Hover = opacity/translateY only; easing `ease-in-out`
- [ ] Only the audited SIL OFL font allowlist is committed; proprietary fonts remain excluded

**Final test:** place your screen next to `index.html`. If a stranger can tell which one wasn't shipped with the library, fix yours.
