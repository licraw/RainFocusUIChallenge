# RainFocus UI Challenge

React + TypeScript + SCSS implementation of the provided Figma design.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

A standalone production build is also included in `/build`. Open `build/index.html` directly in a browser to view the project without installing dependencies.

## Notes

- Styling is organized with SCSS partials for tokens, layout, and component styles.
- Components are split into reusable layout, navigation, card, and UI pieces.
- The app uses local mock data and locally stored assets.
- Core colors and layout values are tokenized to support lightweight theming.
- The layout is responsive and collapses the sidebar navigation on smaller screens.