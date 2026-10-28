# Ramón Pastré — Portfolio

Personal portfolio website, written in English.

**Live site:** https://portfolio-english-fawn.vercel.app/

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/) — every push to `main` is published automatically

## Getting started

Requires Node.js and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev       # http://localhost:5173
```

Other scripts:

```bash
pnpm build     # type-check and build into dist/
pnpm preview   # serve the production build
pnpm lint      # lint with oxlint
```

## Project structure

```
src/
  data/content.ts   # all the text shown on the site
  components/       # reusable pieces (Section, Project, Header, ...)
  sections/         # one component per page section
  index.css         # Tailwind import and design tokens (fonts, accent color)
public/             # static files (profile photo, favicon)
```

To change any text, edit `src/data/content.ts`.
