# Contributing

Thanks for helping improve Vibe-Nothing-UI-Design.

## Development

The project has no build step. Serve the repository with any static file server:

```sh
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/` for the component reference
- `http://localhost:8000/demo.html` for the interactive demo

## Pull Requests

1. Keep changes focused and explain the user-facing reason.
2. Use existing tokens and component patterns before adding new ones.
3. Verify dark and light themes.
4. Check keyboard interaction and visible focus states.
5. Do not add runtime dependencies or a build system without prior discussion.
6. Do not commit proprietary fonts or other unlicensed assets.
7. Update `SPEC.md` when behavior or markup contracts change.
8. Update `CHANGELOG.md` for notable user-facing changes.

## Design Constraints

- Accent red is a signal, not decoration.
- Controls use monochrome inversion for active states.
- No decorative gradients, shadows, or radii above the established tokens.
- Dot-matrix elements use round cells.
- The rendered `index.html` remains the visual ground truth.

## Reporting Issues

Use the appropriate issue template and include:

- Browser and operating system
- Expected and actual behavior
- Minimal reproduction
- Screenshot or recording for visual issues
