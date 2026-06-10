# Fonts

This library ships with **open-source fallback fonts** only (Doto · Geist Mono, loaded from Google Fonts in `index.html`; UI/headline fall back to Helvetica/Arial). There is **no serif** — Nothing's system has none.

If you have properly licensed Nothing typefaces, place the relevant files in this folder:

```
Ndot57-Regular.otf
NType82-Regular.otf
NType82-Headline.otf
NType82Mono-Regular.otf
```

`css/tokens.css` declares NDot and NType82 Mono. The NType82 UI/headline declarations remain commented out until licensed files are supplied; follow the comments in that file to enable them.

**These fonts are proprietary to Nothing.** They are git-ignored on purpose. Do not commit, redistribute, or obtain them from unofficial mirrors. Acquire an appropriate license from the rights holder.
