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
      className={`anim-fade-in fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
        scrolled && !open ? 'border-navy/10 bg-paper/85 backdrop-blur-md' : 'border-transparent'
      }`}
      style={{ '--d': '0.5s' }}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-navy px-4 py-2 text-sm font-semibold text-paper focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8 lg:px-10">
        <a href="#top" className="relative z-10" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="group relative text-sm font-medium">
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1 h-[1.5px] origin-left scale-x-0 bg-pencil transition-transform duration-500 ease-(--ease-calm) group-hover:scale-x-100"
              />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-navy-deep"
          >
            Get a free quote
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 rounded-full border-[1.5px] border-navy px-4 py-1.5 text-sm font-semibold md:hidden"
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
            className="blueprint fixed inset-0 flex flex-col bg-paper px-5 pt-28 pb-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.4, ease: calm }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[...nav, { label: 'Get a free quote', href: '#contact' }].map((item, i) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display border-b border-navy/12 py-4 text-[2.6rem] last:text-pencil"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: calm, delay: 0.06 + i * 0.05 }}
                >
                  {item.label}
                </m.a>
              ))}
            </nav>
            <p className="label mt-auto text-slate">
              {brand.tagline} · {brand.location}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
