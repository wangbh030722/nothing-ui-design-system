<div align="center">

<img src="docs/logo.png" alt="Vibe-Nothing-UI-Design" width="720">

[![MIT License](https://img.shields.io/badge/license-MIT-white.svg)](LICENSE)
[![Zero dependencies](https://img.shields.io/badge/dependencies-0-D71921.svg)](#quick-start)
[![Live demo](https://img.shields.io/badge/demo-GitHub%20Pages-black.svg)](https://wangbh030722.github.io/vibe-nothing-ui-design/)

**A Nothing-inspired UI design system for the web.**

Monochrome surfaces · round-dot type & icons · a single signal-red accent · a sparse dot field that inverts against whatever sits behind it. Zero dependencies — pure HTML, CSS custom properties, and a little vanilla JavaScript. No framework, no build step.

**[Live demo](https://wangbh030722.github.io/vibe-nothing-ui-design/demo.html)** · **[All components](https://wangbh030722.github.io/vibe-nothing-ui-design/)** · **[SPEC.md](SPEC.md)** · **[DESIGN.md](DESIGN.md)**

</div>

---

<div align="center">

### Generic AI output ⟷ Vibe-Nothing-UI

*Drag the divider — same content, default AI styling on the left, this system on the right.*

<!-- ▼▼▼ GIF #1 — PASTE YOUR RECORDING HERE ▼▼▼
     Save your file at EXACTLY:  docs/demo-compare.gif
     Record demo.html Stage 1 (the AI-vs-Vibe-Nothing-UI split): let it auto-sweep once,
     then drag the divider left↔right a couple of times. ~1000–1200px wide, 5–8s loop, ≤8MB.
     Once the file exists this image renders automatically — nothing else to edit.
     See docs/_HOW-TO-ADD-GIFS.md for full steps; delete that file when done. ▲▲▲ -->
<img src="docs/demo-compare.gif" alt="Dragging between a generic AI dashboard and the Vibe-Nothing-UI version" width="900">

### Dark ⟷ Light — one attribute

<!-- ▼▼▼ GIF #2 — PASTE YOUR RECORDING HERE ▼▼▼
     Save your file at EXACTLY:  docs/demo-theme.gif
     Record demo.html Stage 2 (dark↔light): drag the divider across, with the dashboard motion running.
     ~1000–1200px wide, 5–8s loop, ≤8MB. ▲▲▲ -->
<img src="docs/demo-theme.gif" alt="Dragging between dark and light themes of the same console" width="900">

</div>

## Quick start

```html
<link rel="stylesheet" href="css/nothing-ui.css">

<body data-theme="dark">
  <button class="btn btn-primary">Run agent</button>
</body>

<script src="js/nothing-ui.js"></script>
```

Keep the bundled `fonts/open/` folder next to the CSS, and switch theme on any ancestor:

```html
<main data-theme="light">…</main>
```

No package manager, no compiler — copy the files into any static site, or take the tokens into your own stack.

## Components

Foundations, forms, navigation, feedback, data display, and an applied dashboard — 40+ components, all in two themes.

![Foundations — color, dot-matrix type, iconography](docs/components.png)

![Controls — buttons, inputs, sliders, navigation, alerts, switches](docs/controls.png)

### Applied console

A real-world layout: live session clock, breathing CPU gauge, an event spark, and segmented bars — the accent red appears only on genuine signals.

![Applied agent console](docs/console.png)

### Glyph Matrix

A canonical 25×25 circular-masked dot panel (the Phone (3) grid), plus scalable 9×9 interface icons.

![25×25 Glyph Matrix](docs/glyph-matrix.png)

## Principles

- Black, grey, and white carry the hierarchy; the accent is reserved for live / blocked / needs-input signals.
- Controls use black↔white inversion, never the accent color.
- Depth comes from hairlines, whitespace, and frosted glass — no shadows, no gradients.
- One round-dot geometry runs through type, icons, and status glyphs.
- Functional UI stays sans-serif; an editorial italic appears only in page-level copy, never inside a component.

## Fonts

Self-contained and open: **Doto** (round-dot display), **Geist** (UI & headlines), **Geist Mono** (labels & data), and **Newsreader Italic** (editorial accent). All bundled files are SIL OFL 1.1 — sources and licenses in [`fonts/open/`](fonts/open). No proprietary fonts are included or required.

## Documentation

- **[SPEC.md](SPEC.md)** — the normative generation contract: exact tokens, hard rules, component recipes, and a release checklist. Hand it to an AI assistant to generate compatible UI.
- **[DESIGN.md](DESIGN.md)** — the design rationale and decision history.

The rendered `index.html` is the visual source of truth.

## License & trademark

Code under the [MIT License](LICENSE). This is an independent, community project inspired by Nothing's visual language — not affiliated with, endorsed by, or sponsored by Nothing Technology Limited. "Nothing", "NDot", and "NType" are trademarks or assets of their respective owners; none are included here.
