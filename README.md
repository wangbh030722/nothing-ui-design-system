# nothing-ui

[![MIT License](https://img.shields.io/badge/license-MIT-white.svg)](LICENSE)
[![Zero dependencies](https://img.shields.io/badge/dependencies-0-D71921.svg)](#quick-start)
[![Live demo](https://img.shields.io/badge/demo-GitHub%20Pages-black.svg)](https://wangbh030722.github.io/nothing-ui-design-system/)

A **Nothing-inspired** UI system for the web. Monochrome surfaces, round-dot type and icons, a single signal-red accent, and a sparse dot field that inverts against whatever sits behind it.

Zero dependencies — pure HTML, CSS custom properties, and a little vanilla JavaScript. No framework, no build step.

![Generic AI dashboard versus nothing-ui](docs/preview.png)

**[Live demo](https://wangbh030722.github.io/nothing-ui-design-system/demo.html)** · **[All components](https://wangbh030722.github.io/nothing-ui-design-system/)** · **[SPEC.md](SPEC.md)**

## Quick start

```html
<link rel="stylesheet" href="css/nothing-ui.css">

<body data-theme="dark">            <!-- or "light" -->
  <button class="btn btn-primary">Button</button>
</body>

<script src="js/nothing-ui.js"></script>
```

## What's inside

- **40+ components** — forms, navigation, feedback, data display, applied dashboards
- **Dark / light** through one `data-theme` attribute
- **Two dot systems** — scalable 9×9 interface icons and a 25×25 circular Glyph Matrix
- **Self-hosted OFL fonts** — Doto, Geist, Geist Mono, Newsreader
- **`SPEC.md`** — a generation contract precise enough to reproduce the look with zero drift

![Glyph Matrix](docs/glyph-matrix.png)

## Principles

Black, grey, and white carry hierarchy. Red `#D71921` appears only as a signal — live, blocked, needs-input — never as decoration. Controls invert black↔white instead of colorizing. Depth comes from hairlines and whitespace, not shadows. Every dot is a complete circle.

## Docs

| File | What it's for |
|---|---|
| `index.html` | Visual reference — the ground truth |
| `SPEC.md` | Normative rules, tokens, and per-component recipes |
| `DESIGN.md` | The reasoning behind the system |

## Fonts

Self-contained and open: Doto, Geist, Geist Mono, and Newsreader Italic — all under the SIL Open Font License 1.1 (see [`fonts/README.md`](fonts/README.md)). Proprietary Nothing typefaces are never bundled.

## License

[MIT](LICENSE). An independent project inspired by Nothing's visual language — not affiliated with, endorsed by, or sponsored by Nothing Technology Limited.
