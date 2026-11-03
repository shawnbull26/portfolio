# Design by Dae

The marketing site for Design by Dae, a web design business that builds first websites for local businesses that don't have one yet. Built with React, Vite, Tailwind CSS 4 and Framer Motion, prerendered to static HTML and set up for Netlify.

## Develop

```bash
npm install
npm run dev
```

`npm run build` builds the site, renders `dist/index.html`, `dist/privacy/index.html` and `dist/404.html`, and writes `robots.txt` and `sitemap.xml` (scripts/prerender.js), and `npm run preview` serves the result.

## Where things live

- `src/data/site.js`: all copy (brand, hero, starting points, what's included, sample sites, process, pricing, about, FAQ, testimonials), plus `siteUrl` (canonical and social tags), `copyrightYear` (footer) and `brand.photo` (set a path to replace the About monogram).
- `src/components/`: one file per section (Hero, Starting, Included, Samples, Testimonials, Process, Pricing, About, Faq, Contact) plus `ui.jsx` for shared pieces (wordmark, buttons, section headings, reveals).
- Brand colors and fonts live in `src/index.css` (`@theme`): drafting-paper backgrounds with a `blueprint` grid, `navy`, `pencil` blue and `marigold`; Archivo for headlines (the `display` utility), Inter Tight for body text, JetBrains Mono for `label`s and the typed word, and Caveat for handwritten notes (`hand`, and the `Note` component).
- `public/work/`: sample-site screenshots (WebP).
- `scripts/og-image.html` and `scripts/apple-touch-icon.html`: sources for `public/og-image.jpg` and `public/apple-touch-icon.png`; each file's comment has the command to regenerate it.
- `src/data/schema.js`: the schema.org business details added to the home page.

## Common edits (all in `src/data/site.js`)

- **Contact details:** set `brand.phone`, `brand.email` and `brand.booking` (a Cal.com or Calendly link). Each appears in the contact section and in the business info Google reads, only once set.
- **Founding spots:** lower `pricing.founding.spotsLeft` as clients sign on.
- **Testimonials:** add `{ quote, name, business }` entries to `testimonials`; the section appears automatically.
- **Photo:** set `brand.photo` to a portrait in `public/`.
- **Domain:** update `siteUrl` when you move to a custom domain.
- **New year:** update `copyrightYear`.

## Motion

The hero animates in CSS (`index.css`), so the prerendered page animates before JavaScript loads. Everything below the fold uses Framer Motion through `LazyMotion`, with the animation engine in its own chunk. All motion respects reduced-motion settings.

## Deploy

Pushing to `main` on GitHub deploys to Netlify automatically. `netlify.toml` sets the build, cache headers and basic security headers. Form detection is on for the contact form (`project`); add your email under Forms → Form notifications so new messages reach you.
