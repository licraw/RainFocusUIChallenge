# RainFocus UI Challenge

Static React + TypeScript + SCSS implementation of the provided Figma frame.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Notes

- Styling is written in SCSS with `src/styles/main.scss` as the ordered entry point.
- SCSS is organized into `abstracts`, `base`, `layout`, and `components` partials.
- The app uses local mock data from `src/data/mockData.ts`.
- Figma-provided image assets are referenced in `src/components/Assets.tsx`.

## Architecture Notes

- Components are organized by UI responsibility: app frame, sidebar, navigation, content sections, cards, buttons, search, and asset wrappers.
- SCSS tokens live in `src/styles/abstracts/_tokens.scss`; base rules, layout shells, and component styles are split into focused partials and imported from `main.scss`.
- Core brand colors are exposed as CSS custom properties in `src/styles/base/_global.scss`, allowing runtime white-label theming without recompiling Sass.
- Mobile navigation collapses into a sticky toggle so users can reach page content quickly on small screens.
- Figma-exported assets are stored locally in `src/assets` so the UI does not depend on expiring MCP asset URLs.
