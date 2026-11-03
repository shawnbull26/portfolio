import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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
      className={`anim-fade-in fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        scrolled && !open ? 'bg-cream/85 shadow-[0_1px_0_rgb(23_19_15/0.06)] backdrop-blur-md' : ''
      }`}
      style={{ '--d': '0.6s' }}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:h-[4.5rem] sm:px-6 lg:px-10">
        <nav aria-label="Main" className="hidden items-center gap-1.5 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full bg-white px-3.5 py-2 text-[0.8rem] font-medium shadow-[0_1px_0_rgb(23_19_15/0.06)] transition-colors duration-300 hover:bg-sunshine"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="relative z-10 col-start-1 justify-self-start md:col-start-2 md:justify-self-center"
          aria-label={`${brand.name}, back to top`}
          onClick={() => setOpen(false)}
        >
          <Wordmark mono={open} />
        </a>

        <div className="col-start-3 flex justify-end">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-ink py-1.5 pr-1.5 pl-4 text-[0.85rem] font-semibold text-cream md:inline-flex"
          >
            Let’s talk
            <span className="grid size-7 place-items-center rounded-full bg-tangerine text-ink">
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-500 ease-(--ease-pop) group-hover:rotate-45"
              />
            </span>
          </a>
          <button
            type="button"
            className="relative z-10 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="fixed inset-0 flex flex-col bg-tangerine px-5 pt-28 pb-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.4, ease: calm }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[...nav, { label: 'Let’s talk', href: '#contact' }].map((item, i) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display border-b-2 border-ink/15 py-3 text-[3.4rem]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: calm, delay: 0.06 + i * 0.05 }}
                >
                  {item.label}
                </m.a>
              ))}
            </nav>
            <p className="mt-auto text-sm font-medium">
              {brand.tagline} · {brand.location}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
