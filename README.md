# RainFocus UI Challenge

A static React, TypeScript, and SCSS implementation of the provided RainFocus Figma design.

## Setup

```bash
npm install
```

This restores `node_modules`, which is intentionally not included in the submitted zip.

## Development

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

The production build writes a single `build/index.html` file. CSS, JavaScript, and local image assets are inlined so the file can be opened directly in a browser.

## Preview

```bash
npm run preview
```

## Implementation Notes

- Styles are written in SCSS and imported through `src/styles/main.scss`.
- SCSS is split into `abstracts`, `base`, `layout`, and `components` folders.
- The UI is built from reusable React components for the frame, sidebar, navigation, header, sections, cards, buttons, search, and assets.
- Page content comes from local mock data in `src/data/mockData.ts`.
- Images and SVGs used by the page live in `src/assets`.
- Theme-facing colors are exposed as CSS variables and consumed through Sass tokens.
- On smaller screens, the sidebar navigation collapses behind a sticky mobile toggle.
