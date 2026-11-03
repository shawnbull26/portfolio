import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const calm = [0.16, 1, 0.3, 1]
export const pop = [0.34, 1.4, 0.64, 1]

export function Reveal({ as = 'div', delay = 0, y = 24, amount = 0.3, className, children, ...props }) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      {...props}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease: calm, delay }}
    >
      {children}
    </Tag>
  )
}

// A drafting-style label: a short rule, then a monospace caption.
export function Label({ children, className = '' }) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-50" />
      {children}
    </p>
  )
}

// The logo: a navy tile with "d." beside the name.
export function Wordmark({ inverted = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid size-8 place-items-center rounded-lg font-display text-lg leading-none font-extrabold ${
          inverted ? 'bg-paper text-navy' : 'bg-navy text-paper'
        }`}
      >
        <span className="-mt-0.5">
          d<span className="text-marigold">.</span>
        </span>
      </span>
      <span className="font-display text-[1.15rem] font-bold tracking-[-0.03em] [font-stretch:92%]">Design by Dae</span>
    </span>
  )
}

// Pill button with an arrow that slides through on hover.
export function Button({ href, children, variant = 'marigold', className = '', ...props }) {
  const variants = {
    marigold: 'bg-marigold text-navy hover:bg-marigold-soft shadow-[0_8px_20px_-10px_rgb(245_183_10/0.8)]',
    navy: 'bg-navy text-paper hover:bg-navy-deep',
    outline: 'border-[1.5px] border-current hover:bg-navy hover:text-paper hover:border-navy',
    paper: 'bg-paper text-navy hover:bg-white',
  }
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <span className="relative grid size-4 overflow-hidden">
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-500 ease-(--ease-calm) group-hover:translate-x-5"
        />
        <ArrowRight
          aria-hidden="true"
          className="absolute inset-0 size-4 -translate-x-5 transition-transform duration-500 ease-(--ease-calm) group-hover:translate-x-0"
        />
      </span>
    </a>
  )
}

// Section intro: drafting label, bold headline, optional supporting line.
export function SectionHead({ id, label, title, intro, tone = 'light', align = 'left', className = '' }) {
  const muted = tone === 'light' ? 'text-slate' : 'text-paper/70'
  const center = align === 'center'
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      <Reveal>
        <Label className={`${tone === 'light' ? 'text-pencil' : 'text-pencil-light'} ${center ? 'justify-center' : ''}`}>
          {label}
        </Label>
      </Reveal>
      <Reveal as="h2" id={id} delay={0.05} className="display mt-5 text-[clamp(2.5rem,6vw,4.6rem)]">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={0.12} className={`mt-5 max-w-xl text-lg leading-relaxed ${muted} ${center ? 'mx-auto' : ''}`}>
          {intro}
        </Reveal>
      )}
    </div>
  )
}

// A handwritten margin note with a little hand-drawn arrow. Decorative, so it's hidden from screen readers.
// `showFrom` hides it on smaller screens ('sm' or 'lg'); `color` overrides the pencil blue.
const showFromClasses = { all: 'inline-flex', sm: 'hidden sm:inline-flex', lg: 'hidden lg:inline-flex' }
export function Note({ children, arrow = 'left', rotate = -4, delay = 0, showFrom = 'all', color = 'text-pencil', className = '' }) {
  const arrows = {
    left: 'M60 8 C 40 4, 18 10, 6 26 M6 26 L 4 14 M6 26 L 17 23',
    right: 'M4 8 C 24 4, 46 10, 58 26 M58 26 L 60 14 M58 26 L 47 23',
    down: 'M10 4 C 4 20, 10 36, 24 46 M24 46 L 12 44 M24 46 L 22 34',
  }
  return (
    <m.span
      aria-hidden="true"
      className={`pointer-events-none items-center gap-1 ${showFromClasses[showFrom]} ${color} ${className}`}
      initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: pop, delay }}
    >
      {arrow === 'left' && <Arrow d={arrows.left} />}
      <span className="hand text-xl sm:text-2xl">{children}</span>
      {arrow !== 'left' && <Arrow d={arrows[arrow]} />}
    </m.span>
  )
}

function Arrow({ d }) {
  return (
    <svg viewBox="0 0 64 50" fill="none" className="h-8 w-10 shrink-0">
      <path d={d} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// A thin pencil line that draws itself as it scrolls into view. The whole SVG is watched, since
// browsers don't report visibility for individual paths reliably.
export function PencilLine({ d, viewBox = '0 0 1200 120', className = '', color = 'var(--color-pencil)', delay = 0 }) {
  return (
    <m.svg
      aria-hidden="true"
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      initial="hidden"
      whileInView="drawn"
      viewport={{ once: true, amount: 0.3 }}
    >
      <m.path
        d={d}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        variants={{ hidden: { pathLength: 0 }, drawn: { pathLength: 1 } }}
        transition={{ duration: 2, ease: calm, delay }}
      />
    </m.svg>
  )
}
