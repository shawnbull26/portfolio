import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { brand, nav } from '../data/site'
import { Wordmark, calm } from './ui'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`anim-fade-in fixed inset-x-0 top-0 z-50 border-b text-cloud transition-[background-color,border-color] duration-500 ${
        scrolled && !open ? 'border-white/8 bg-night/80 backdrop-blur-md' : 'border-transparent'
      }`}
      style={{ '--d': '0.9s' }}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-signal px-4 py-2 text-sm font-semibold text-night focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8 lg:px-12">
        <a href="#top" className="relative z-10" aria-label={`${brand.name}, back to top`} onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-fog transition-colors duration-300 hover:text-cloud"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-night transition-colors duration-300 hover:bg-signal-soft"
          >
            Let's talk
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 -mr-2 px-2 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-0 flex flex-col bg-night px-5 pt-28 pb-10 sm:px-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: calm }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[...nav, { label: "Let's talk", href: '#contact' }].map((item, i) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display border-b border-white/10 py-4 text-[2.6rem] last:text-signal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: calm, delay: 0.08 + i * 0.06 }}
                >
                  {item.label}
                </m.a>
              ))}
            </nav>
            <p className="mt-auto text-sm text-fog">
              {brand.tagline} · {brand.location}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
