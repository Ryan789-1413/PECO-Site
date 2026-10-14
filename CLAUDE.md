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

## Stack (approved by Ryan, Oct 14, 2026)
- Astro (static output) + TypeScript strict + plain CSS tokens ported from the prototype
- Self-hosted fonts via @fontsource: Saira Semi Condensed, IBM Plex Sans, IBM Plex Mono
- Content collections with Zod schemas for products, systems, industries, courses and case studies
- `astro:assets` for images; `@astrojs/sitemap`; `public/_redirects` for old WordPress URLs
- Host: **Cloudflare Pages**. Config lives in `public/_redirects` and `public/_headers`. Forms (Phase 4): a Pages Function + Turnstile + an email API, with keys in Cloudflare environment variables.
- Light theme only; the prototype's dark theme is not ported unless Ryan asks (PROJECT_CONTEXT §9 q14).
- URLs end in `/` (`trailingSlash: 'always'`).

## Conventions
- CSS: design tokens live in `src/styles/tokens.css` (copy the `:root` block from the prototype). Components use tokens only, never literal colors.
- Components: one `.astro` file per prototype section or component (see the repo layout in PROJECT_CONTEXT §7).
- Copy voice: plain, technical, short active sentences, using real industry terms. No hype, no emoji.
- Commits: small and descriptive. Open PRs for each phase. Don't push to `main` without review once CI exists.
- Never commit secrets. Use environment variables on the host.

## Commands
Node 22 (exact version in `.node-version`). Install with `npm ci`.
- `npm run dev`: local dev server at http://localhost:4321
- `npm run build`: static build to `dist/` (pages, `sitemap-index.xml`, and `public/` files including `_redirects` and `_headers`)
- `npm run preview`: serve the built `dist/` locally
- `npm run check`: `astro check` + `tsc --noEmit` + `npm run lint`. Run before every commit; CI runs the same command.
- `npm run lint`: ESLint (TypeScript, Astro, jsx-a11y-x) + `prettier --check`
- `npm run format`: `prettier --write .` (`prototype/`, `docs/`, `brand/` and Markdown are ignored)
- `npm run lhci`: Lighthouse CI against `dist/` (run `npm run build` first). Asserts performance ≥ 0.95 and accessibility = 1.00.
- `npm run test:e2e`: Playwright smoke and visual tests (added in Phase 1)

CI (`.github/workflows/ci.yml`) runs on every PR: check + build, lychee link check on `dist/`, and Lighthouse CI.

## Start here (first Claude Code session)
1. Read `docs/PROJECT_CONTEXT.md` fully and open `prototype/index.html` in a browser.
2. Confirm the stack and host choice with Ryan (§9 open questions 1–2 are blockers for forms and launch).
3. Phase 0: scaffold Astro, port the tokens and base styles, and set up CI.
4. Phase 1: rebuild the home page as components at visual parity with the prototype.
