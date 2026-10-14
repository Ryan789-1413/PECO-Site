# CLAUDE.md: Power Engineering website (pecowater.com)

@docs/PROJECT_CONTEXT.md

## What this repo is
This is the production rebuild of pecowater.com for Power Engineering Company, Inc. (PECO), an industrial water treatment company in Salt Lake City (founded 1946, water treatment since 1961) with an in-house lab, **Ridgewater Analytical** (HPLC, ICP, IC).

`prototype/index.html` is the **approved design**. It is a single self-contained HTML file and the visual source of truth. Production code must match its look, tokens, typography and copy unless Ryan approves a change. Never edit the prototype to fix production bugs; it is a reference.

## Hard requirements
- **No animation.** No scroll effects, parallax, carousels, sliders, animated counters, or fade-ins. Static pages.
- Fast and accessible: WCAG 2.2 AA, zero client JS by default, and responsive down to 360px with no horizontal scroll.
- Only publish facts tagged as sourced in `docs/PROJECT_CONTEXT.md` §2. Anything tagged `[CONFIRM]` must stay out of production copy (or be visibly marked as a TODO in drafts) until Ryan confirms it.
- Keep Wikimedia Commons photo credits wherever those photos are used (CC BY / CC BY-SA).

## Stack (proposed; confirm with Ryan before Phase 0)
- Astro (static output) + TypeScript strict + plain CSS tokens ported from the prototype
- Self-hosted fonts via @fontsource: Saira Semi Condensed, IBM Plex Sans, IBM Plex Mono
- Content collections with Zod schemas for products, systems, industries, courses and case studies
- `astro:assets` for images; `@astrojs/sitemap`; a `_redirects` file for old WordPress URLs
- Host: Netlify, Cloudflare Pages or Vercel (TBD). Forms via the host's form handling or a serverless function plus an email API.

## Conventions
- CSS: design tokens live in `src/styles/tokens.css` (copy the `:root` block from the prototype). Components use tokens only, never literal colors.
- Components: one `.astro` file per prototype section or component (see the repo layout in PROJECT_CONTEXT §7).
- Copy voice: plain, technical, short active sentences, using real industry terms. No hype, no emoji.
- Commits: small and descriptive. Open PRs for each phase. Don't push to `main` without review once CI exists.
- Never commit secrets. Use environment variables on the host.

## Commands (fill in after scaffolding)
- `npm run dev`: local dev server
- `npm run build`: static build to `dist/`
- `npm run preview`: serve the build
- `npm run check`: astro check + tsc + lint
- `npm run test:e2e`: Playwright smoke and visual tests

## Start here (first Claude Code session)
1. Read `docs/PROJECT_CONTEXT.md` fully and open `prototype/index.html` in a browser.
2. Confirm the stack and host choice with Ryan (§9 open questions 1–2 are blockers for forms and launch).
3. Phase 0: scaffold Astro, port the tokens and base styles, and set up CI.
4. Phase 1: rebuild the home page as components at visual parity with the prototype.
