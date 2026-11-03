import { m } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export const calm = [0.16, 1, 0.3, 1]
export const pop = [0.34, 1.4, 0.64, 1]

export function Reveal({ as = 'div', delay = 0, y = 28, amount = 0.3, className, children, ...props }) {
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

// A tilted label that pops in when it scrolls into view.
export function Sticker({ children, rotate = -6, tone = 'ink', delay = 0, className = '' }) {
  const tones = {
    ink: 'bg-ink text-cream',
    tangerine: 'bg-tangerine text-ink',
    sunshine: 'bg-sunshine text-ink',
    sky: 'bg-sky text-ink',
    bubblegum: 'bg-bubblegum text-ink',
    cream: 'bg-cream text-ink',
  }
  return (
    <m.span
      className={`sticker ${tones[tone]} ${className}`}
      initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.7, ease: pop, delay }}
    >
      {children}
    </m.span>
  )
}

export function Eyebrow({ children, className = '' }) {
  return <p className={`text-xs font-semibold tracking-[0.16em] uppercase ${className}`}>{children}</p>
}

// The wordmark: "design by dae." in condensed tangerine with an ink period, or all one color with `mono`.
export function Wordmark({ mono = false, className = '' }) {
  return (
    <span
      className={`font-display text-[1.6rem] leading-none font-extrabold tracking-[-0.01em] [font-stretch:72%] ${mono ? '' : 'text-tangerine-deep'} ${className}`}
    >
      design by dae<span className={mono ? '' : 'text-ink'}>.</span>
    </span>
  )
}

// Pill button with a round arrow badge that spins a quarter turn on hover.
export function Button({ href, children, variant = 'ink', className = '', ...props }) {
  const variants = {
    ink: ['bg-ink text-cream hover:bg-[#2b241d]', 'bg-tangerine text-ink'],
    tangerine: ['bg-tangerine text-ink hover:bg-[#ff7240]', 'bg-ink text-cream'],
    outline: ['border-2 border-ink text-ink hover:bg-ink hover:text-cream', 'bg-ink text-cream group-hover:bg-tangerine group-hover:text-ink'],
    cream: ['bg-cream text-ink hover:bg-white', 'bg-tangerine text-ink'],
  }
  const [pill, badge] = variants[variant]
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-5 text-[0.95rem] font-semibold transition-colors duration-300 ${pill} ${className}`}
      {...props}
    >
      {children}
      <span className={`grid size-9 place-items-center rounded-full transition-colors duration-300 ${badge}`}>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-500 ease-(--ease-pop) group-hover:rotate-45"
        />
      </span>
    </a>
  )
}

// Section intro: small label, big condensed headline, optional supporting line.
export function SectionHead({ id, eyebrow, title, intro, align = 'left', className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-4xl ${className}`}>
      <Reveal>
        <Eyebrow className="text-ink-soft">{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal as="h2" id={id} delay={0.05} className="display mt-5 text-[clamp(3rem,8vw,6.5rem)]">
        {title}
      </Reveal>
      {intro && (
        <Reveal
          as="p"
          delay={0.12}
          className={`mt-6 max-w-xl text-lg leading-relaxed text-ink-soft ${center ? 'mx-auto' : ''}`}
        >
          {intro}
        </Reveal>
      )}
    </div>
  )
}

// A thick hand-drawn loop, drawn on as it scrolls into view.
export function Squiggle({ className = '', color = 'var(--color-tangerine)', d, viewBox = '0 0 400 400', width = 26 }) {
  return (
    <svg aria-hidden="true" viewBox={viewBox} fill="none" className={`pointer-events-none ${className}`}>
      <m.path
        d={d}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: calm }}
      />
    </svg>
  )
}
