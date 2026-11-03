import { renderToString } from 'react-dom/server'
import App from './App'
import NotFound from './components/NotFound'
import Privacy from './components/Privacy'

// Used by scripts/prerender.js at build time to produce the static pages.
export const render = () => renderToString(<App />)
export const renderNotFound = () => renderToString(<NotFound />)
export const renderPrivacy = () => renderToString(<Privacy />)
export { siteUrl } from './data/site'
export { businessSchema } from './data/schema'
