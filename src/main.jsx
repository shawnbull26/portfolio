import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import NotFound from './components/NotFound'
import Privacy from './components/Privacy'
import '@fontsource-variable/inter-tight/wght.css'
import '@fontsource-variable/archivo/wdth.css'
import './index.css'

const root = document.getElementById('root')
const Page = { 404: NotFound, privacy: Privacy }[root.dataset.page] ?? App
const app = (
  <StrictMode>
    <Page />
  </StrictMode>
)

// The production page is prerendered (scripts/prerender.js), so hydrate it;
// the dev server serves an empty root, so render from scratch.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
