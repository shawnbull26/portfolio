// Writes the rendered pages into dist/ after `vite build`, so the site ships real
// content (and animates in CSS) before any JavaScript runs.
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverDir = join(root, 'dist-server')

const { render, renderNotFound, renderPrivacy, siteUrl, businessSchema } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href)

// Preload the Latin font files used above the fold so the hero paints in the right font.
const fontPreloads = (await readdir(join(dist, 'assets')))
  .filter((f) => /^(inter-tight-latin-wght-normal|archivo-latin-wdth-normal|jetbrains-mono-latin-wght-normal)-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const socialTags = [
  `<link rel="canonical" href="${siteUrl}/" />`,
  `<meta property="og:url" content="${siteUrl}/" />`,
  `<meta property="og:image" content="${siteUrl}/og-image.jpg" />`,
  '<meta property="og:image:width" content="1200" />',
  '<meta property="og:image:height" content="630" />',
  '<meta property="og:image:alt" content="Design by Dae: No website yet? Let’s get you found." />',
  '<meta name="twitter:card" content="summary_large_image" />',
  `<script type="application/ld+json">${JSON.stringify(businessSchema)}</script>`,
].join('\n    ')

const template = (await readFile(join(dist, 'index.html'), 'utf8')).replace(
  '<link rel="icon"',
  `${fontPreloads}\n    <link rel="icon"`,
)

const home = template
  .replace('<link rel="icon"', `${socialTags}\n    <link rel="icon"`)
  .replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
await writeFile(join(dist, 'index.html'), home)
console.log('prerendered index.html')

// The 404 page drops the Netlify form copy and is kept out of search results.
const notFound = template
  .replace(/<title>.*?<\/title>/, '<title>Page not found | Design by Dae</title>\n    <meta name="robots" content="noindex" />')
  .replace(/<form name="project"[\s\S]*?<\/form>/, '')
  .replace('<div id="root"></div>', `<div id="root" data-page="404">${renderNotFound()}</div>`)
await writeFile(join(dist, '404.html'), notFound)
console.log('prerendered 404.html')

const privacy = template
  .replace(
    /<title>.*?<\/title>\s*<meta\s+name="description"[\s\S]*?\/>/,
    `<title>Privacy | Design by Dae</title>\n    <meta name="description" content="What happens to the information you share with Design by Dae." />\n    <link rel="canonical" href="${siteUrl}/privacy/" />`,
  )
  .replace(/<form name="project"[\s\S]*?<\/form>/, '')
  .replace('<div id="root"></div>', `<div id="root" data-page="privacy">${renderPrivacy()}</div>`)
await mkdir(join(dist, 'privacy'), { recursive: true })
await writeFile(join(dist, 'privacy', 'index.html'), privacy)
console.log('prerendered privacy/index.html')

// Pages are served with a trailing slash on Netlify, so the sitemap lists them that way.
const today = new Date().toISOString().slice(0, 10)
const urls = ['/', '/privacy/'].map((p) => `  <url><loc>${siteUrl}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log('wrote sitemap.xml and robots.txt')

await rm(serverDir, { recursive: true, force: true })
