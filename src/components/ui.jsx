import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// One easing curve for every reveal; slightly quicker than before to suit the bolder brand.
export const calm = [0.16, 1, 0.3, 1]

export function Reveal({ as = 'div', delay = 0, y = 28, amount = 0.3, className, children, ...props }) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      {...props}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1, ease: calm, delay }}
    >
      {children}
    </Tag>
  )
}

// A small label above each section heading: an orange dot, then the name.
export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase ${className}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
      {children}
    </p>
  )
}

// The wordmark: "Design by Dae." with the period in signal orange.
export function Wordmark({ className = '' }) {
  return (
    <span className={`font-display text-[1.15rem] font-extrabold tracking-[-0.04em] [font-stretch:112%] ${className}`}>
      Design by Dae<span className="text-signal">.</span>
    </span>
  )
}

// Pill button with an arrow that slides through on hover.
export function Button({ href, children, variant = 'signal', className = '', ...props }) {
  const variants = {
    signal: 'bg-signal text-night hover:bg-signal-soft',
    light: 'bg-cloud text-night hover:bg-white',
    ghost: 'border border-current/25 hover:border-current',
  }
  const dot = variant === 'ghost' ? 'bg-current/10' : 'bg-night/10'
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 rounded-full py-2 pr-2 pl-6 text-[0.95rem] font-semibold transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <span className={`relative grid size-9 place-items-center overflow-hidden rounded-full ${dot}`}>
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-500 ease-(--ease-calm) group-hover:translate-x-9"
        />
        <ArrowRight
          aria-hidden="true"
          className="absolute size-4 -translate-x-9 transition-transform duration-500 ease-(--ease-calm) group-hover:translate-x-0"
        />
      </span>
    </a>
  )
}

// Section intro used across the page: eyebrow, big headline, optional supporting line.
export function SectionHead({ id, eyebrow, title, intro, tone = 'dark', className = '' }) {
  const muted = tone === 'dark' ? 'text-fog' : 'text-smoke'
  return (
    <div className={`max-w-4xl ${className}`}>
      <Reveal>
        <Eyebrow className={muted}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal as="h2" id={id} delay={0.05} className="display mt-6 text-[clamp(2.4rem,6vw,5rem)]">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={0.12} className={`mt-6 max-w-xl text-lg leading-relaxed ${muted}`}>
          {intro}
        </Reveal>
      )}
    </div>
  )
}
