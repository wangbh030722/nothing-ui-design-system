# How to add the two demo GIFs (then delete this file)

The README shows two animated demos. The image files are not in the repo yet — add them here, in `docs/`, with these **exact filenames**:

| File (exact path) | What to record | Specs |
|---|---|---|
| `docs/demo-compare.gif` | `demo.html` **Stage 1** — the split between generic AI output and Vibe-Nothing-UI. Let the auto-sweep run once, then drag the divider left↔right a couple of times. | ~1000–1200px wide · 5–8s loop · ≤8MB |
| `docs/demo-theme.gif` | `demo.html` **Stage 2** — Dark ⟷ Light. Drag the divider across while the dashboard motion runs. | ~1000–1200px wide · 5–8s loop · ≤8MB |

## Recording (macOS)

1. Open the live demo or the local file: `demo.html`.
2. `⌘⇧5` → record a small region around the console → stop. (Or use [Kap](https://getkap.co), which exports GIF directly.)
3. Convert the `.mov` to GIF with [Gifski](https://gif.ski) (drag the clip in, set width ~1100px, export).
4. Save the result as `docs/demo-compare.gif` / `docs/demo-theme.gif` (overwrite — these exact names).

## Publish

```sh
git add docs/demo-compare.gif docs/demo-theme.gif
git rm docs/_HOW-TO-ADD-GIFS.md      # delete this helper once both GIFs are in
git commit -m "Add demo GIFs to README"
git push
```

That's it — the README `<img>` tags already point at these paths, so the GIFs appear automatically. Until both files exist, those two images render as broken on the README.
