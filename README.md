# Design by Dae

The marketing site for Design by Dae, a web design business that builds first websites for local businesses that don't have one yet. Built with React, Vite, Tailwind CSS 4 and Framer Motion, prerendered to static HTML and set up for Netlify.

## Develop

```bash
npm install
npm run dev
```

`npm run build` builds the site, renders `dist/index.html`, `dist/privacy/index.html` and `dist/404.html`, and writes `robots.txt` and `sitemap.xml` (scripts/prerender.js), and `npm run preview` serves the result.

## Where things live

- `src/data/site.js`: all copy (brand, reasons, what's included, sample sites, process, pricing, about, FAQ), plus `siteUrl` (canonical and social tags) and `brand.photo` (set a path to replace the About monogram).
- `src/components/`: one file per section (Hero, Why, Included, Samples, Process, Pricing, About, Faq, Contact) plus `ui.jsx` for shared pieces (wordmark, buttons, section headings, reveals).
- Brand colors and fonts live in `src/index.css` (`@theme`): near-black `night`, off-white `cloud`, `signal` orange; Archivo for headlines (the `display` utility), Inter Tight for body text.
- `public/work/`: sample-site screenshots (WebP).
- `scripts/og-image.html` and `scripts/apple-touch-icon.html`: sources for `public/og-image.jpg` and `public/apple-touch-icon.png`; each file's comment has the command to regenerate it.
- `src/data/schema.js`: the schema.org business details added to the home page.

## Common edits (all in `src/data/site.js`)

- **Contact details:** set `brand.phone`, `brand.email` and `brand.booking` (a Cal.com or Calendly link). Each appears in the contact section and in the business info Google reads, only once set.
- **Founding spots:** lower `pricing.founding.spotsLeft` as clients sign on.
- **Testimonials:** add `{ quote, name, business }` entries to `testimonials`; the section appears automatically.
- **Photo:** set `brand.photo` to a portrait in `public/`.
- **Domain:** update `siteUrl` when you move to a custom domain.

## Motion

The hero animates in CSS (`index.css`), so the prerendered page animates before JavaScript loads. Everything below the fold uses Framer Motion through `LazyMotion`, with the animation engine in its own chunk. All motion respects reduced-motion settings.

## Deploy

Netlify reads `netlify.toml`. After the first deploy, turn on form detection (Forms → Enable form detection) and redeploy so the contact form (`project`) starts collecting submissions.
