# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio (in English) for Ramón Pastré, built with **Vite + React + TypeScript + Tailwind CSS v4**, deployed on **Vercel**. `portfolio.md` holds the final text content that the site displays.

## Working with the user

- The user is learning: they know very little React and almost no Tailwind. Work step by step, explain what each piece does and why, and let them ask questions before moving on. Avoid large unexplained changes.
- The user writes in Spanish or English; reply in the same language.
- **Everything in the codebase is in English**: identifiers, file names, comments, commit messages and docs — even when the conversation is in Spanish.
- Keep it simple. Prefer clear, plain components over abstractions, extra libraries or clever patterns.

## Architecture (planned)

- **Content is separated from presentation.** All text lives in `src/data/content.ts`, sourced from `portfolio.md`. Components receive content via props/imports and never hardcode copy. To change wording, edit `content.ts` (and keep `portfolio.md` in sync).
- `src/sections/` — one component per page section, in this order: About, Current Projects, Past Projects, Future Projects, Comparison (ORM vs raw SQL).
- `src/components/` — small reusable pieces (section wrapper, header/nav, project card, tech tag).
- Static assets (profile photo, later the video) go in `public/`.
- The **Comparison** section will eventually be a video (images + the user's voiceover + synced English subtitles). Until then it renders an empty video placeholder of the final size; the video itself is a later, separate task.

## Design

Minimal dark theme with a single accent color. Includes a header with anchor navigation to each section, contact links (GitHub, LinkedIn, email), a profile photo in About, and technology tags on project cards. Must be responsive (mobile-first).

## Commands

- `npm run dev` — local dev server with hot reload (http://localhost:5173)
- `npm run build` — type-check (`tsc -b`) and production build into `dist/`
- `npm run lint` — lint with oxlint (config in `.oxlintrc.json`)
- `npm run preview` — serve the production build locally

No test setup yet.

Tailwind v4 is wired through the `@tailwindcss/vite` plugin in `vite.config.ts` and `@import 'tailwindcss'` in `src/index.css` — there is no `tailwind.config.js`; theme customization goes in CSS via `@theme`.
