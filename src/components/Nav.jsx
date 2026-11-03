import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { nav, person } from '../data/site'
import { calm } from './ui'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [overDark, setOverDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // The closing contact section is ink-colored, so the bar inverts once it slides beneath.
    const dark = document.getElementById('contact-zone')
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      setOverDark(!!dark && dark.getBoundingClientRect().top < 72)
    }
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
      className={`anim-fade-in fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color] duration-700 ${
        open
          ? 'border-transparent'
          : overDark
            ? 'border-paper/10 bg-ink/80 text-paper backdrop-blur-md'
            : scrolled
              ? 'border-ink/8 bg-paper/80 backdrop-blur-md'
              : 'border-transparent'
      }`}
      style={{ '--d': '1.2s' }}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 text-sm text-paper focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8 lg:px-12">
        <a href="#top" className="relative z-10 font-serif text-[1.35rem] leading-none tracking-tight" onClick={() => setOpen(false)}>
          {person.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm opacity-75 transition-opacity duration-500 hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-500 ${
              overDark
                ? 'border-paper/25 hover:border-paper hover:bg-paper hover:text-ink'
                : 'border-ink/20 hover:border-ink hover:bg-ink hover:text-paper'
            }`}
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 -mr-2 px-2 py-2 text-sm font-medium md:hidden"
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
            className="fixed inset-0 flex flex-col bg-paper px-5 pt-28 pb-10 text-ink sm:px-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6, ease: calm }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item, i) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/10 py-4 font-serif text-5xl tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: calm, delay: 0.1 + i * 0.07 }}
                >
                  {item.label}
                </m.a>
              ))}
            </nav>
            <p className="mt-auto text-sm text-ink-mute">
              {person.role} · {person.location}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
