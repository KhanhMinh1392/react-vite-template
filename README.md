# React Vite Template

A minimal, extendable starter template for modern React apps using Vite + TypeScript + Tailwind. Clone this repository when you want a fast project scaffold with sensible defaults (linting, formatting, Husky hooks, and useful dev scripts).

## Why use this template

- Fast dev server with Vite
- TypeScript configured and ready
- Tailwind CSS integrated
- ESLint + Prettier opinionated setup
- Husky + lint-staged for pre-commit formatting
- Small, focused file structure so you can start building immediately

## What's included

- Vite (dev, build, preview)
- React 18+ with TypeScript
- Tailwind CSS + PostCSS
- ESLint + Prettier + Tailwind plugin
- Husky + lint-staged pre-commit hooks
- Opinionated folder layout: `src/` with a minimal app entry

## Quickstart

1. Clone this template and enter the folder

```bash
git clone https://github.com/KhanhMinh1392/react-vite-template.git my-app
cd my-app
```

2. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the dev server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview the production build locally

```bash
npm run preview
```

## Available scripts

The `package.json` includes the following useful scripts:

- `dev` - Start Vite dev server
- `build` - Type-check and build production assets
- `preview` - Preview the production build locally
- `lint` - Run ESLint across the project

Adjust or add scripts to suit your workflow.

## Project structure

```
.
├─ public/            # static assets served as-is
├─ src/               # application source
│  ├─ assets/         # images and static media
│  ├─ components/     # React components
│  ├─ lib/            # small helper libraries
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Customizing the template

- Rename the `name` field in `package.json`.
- Remove or adapt Husky / lint-staged if you don't want pre-commit hooks.
- Update ESLint / Prettier rules to match your team's preferences.

## Recommended editor setup

- VS Code with these extensions:
	- ESLint
	- Prettier - Code formatter
	- Tailwind CSS IntelliSense

## Contribution

This repo is intended as a personal template. If you want to suggest changes, open an issue or a PR against the original template repository.

## License

Choose a license for your project after cloning (e.g., MIT). This template does not impose a specific license.

---

If you'd like, I can also:

- add a short CONTRIBUTING.md
- add a LICENSE file (MIT by default)
- wire up GitHub Actions for CI (lint + build)

If you want any of those, tell me which and I'll add them.

