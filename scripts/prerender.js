// Writes the rendered pages into dist/ after `vite build`, so the site ships real
// content (and animates in CSS) before any JavaScript runs.
import { readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverDir = join(root, 'dist-server')

const { render, renderNotFound, siteUrl } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href)

// Preload the Latin font files used above the fold so the hero paints in the right font.
const fontPreloads = (await readdir(join(dist, 'assets')))
  .filter((f) => /^(inter-tight-latin-wght-normal|instrument-serif-latin-400-(normal|italic))-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const socialTags = [
  `<link rel="canonical" href="${siteUrl}/" />`,
  `<meta property="og:url" content="${siteUrl}/" />`,
  `<meta property="og:image" content="${siteUrl}/og-image.jpg" />`,
  '<meta property="og:image:width" content="1200" />',
  '<meta property="og:image:height" content="630" />',
  '<meta property="og:image:alt" content="Daeshawn Bullock: Look as good online as you are in person." />',
  '<meta name="twitter:card" content="summary_large_image" />',
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
  .replace(/<title>.*?<\/title>/, '<title>Page not found | Daeshawn Bullock</title>\n    <meta name="robots" content="noindex" />')
  .replace(/<form name="project"[\s\S]*?<\/form>/, '')
  .replace('<div id="root"></div>', `<div id="root" data-page="404">${renderNotFound()}</div>`)
await writeFile(join(dist, '404.html'), notFound)
console.log('prerendered 404.html')

await rm(serverDir, { recursive: true, force: true })
