# Fonts

The public build is self-contained and bundles four open-source font families in `fonts/open/`:

| Role | Family | Source | License |
|---|---|---|---|
| Dot display | Doto | [Google Fonts](https://github.com/google/fonts/tree/main/ofl/doto) | SIL OFL 1.1 |
| UI and headline | Geist | [Google Fonts](https://github.com/google/fonts/tree/main/ofl/geist) | SIL OFL 1.1 |
| Mono and data | Geist Mono | [Google Fonts](https://github.com/google/fonts/tree/main/ofl/geistmono) | SIL OFL 1.1 |
| Editorial accent | Newsreader Italic | [Google Fonts](https://github.com/google/fonts/tree/main/ofl/newsreader) | SIL OFL 1.1 |

`css/tokens.css` loads these files locally, so the component reference works offline and renders consistently after cloning. Newsreader Italic is intentionally limited to brand lines, pull quotes, and other expressive moments; functional UI remains sans-serif.

The license text for each family is stored beside the font files. Proprietary NDot, NType, or Lettera files are not part of this project. Do not commit, redistribute, or obtain those assets from unofficial mirrors.
