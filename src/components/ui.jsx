import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// One easing curve and a slower-than-usual pace keeps every reveal feeling calm.
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
      transition={{ duration: 1.2, ease: calm, delay }}
    >
      {children}
    </Tag>
  )
}

// A hairline that draws itself left to right as it scrolls into view.
export function Rule({ className = '', delay = 0 }) {
  return (
    <m.div
      aria-hidden="true"
      className={`h-px origin-left bg-current opacity-20 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.8, ease: calm, delay }}
    />
  )
}

export function Eyebrow({ index, children, className = '' }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase ${className}`}>
      {index && <span className="font-serif text-sm tracking-normal normal-case italic opacity-70">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-8 bg-current opacity-30" />}
      <span>{children}</span>
    </p>
  )
}

// The primary call to action: ink pill with an arrow that slides through on hover.
export function PrimaryButton({ href, children, tone = 'ink', className = '' }) {
  const tones = {
    ink: 'bg-ink text-paper hover:bg-[#2a2720]',
    paper: 'bg-paper text-ink hover:bg-white',
  }
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 rounded-full py-2.5 pr-2.5 pl-6 text-[0.95rem] font-medium transition-colors duration-500 ${tones[tone]} ${className}`}
    >
      {children}
      <span
        className={`relative grid size-9 place-items-center overflow-hidden rounded-full ${tone === 'ink' ? 'bg-paper/12' : 'bg-ink/8'}`}
      >
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-700 ease-(--ease-calm) group-hover:translate-x-9"
        />
        <ArrowRight
          aria-hidden="true"
          className="absolute size-4 -translate-x-9 transition-transform duration-700 ease-(--ease-calm) group-hover:translate-x-0"
        />
      </span>
    </a>
  )
}

// Text link whose underline retracts and redraws on hover.
export function UnderlineLink({ href, children, className = '', ...props }) {
  return (
    <a href={href} className={`group relative inline-flex items-center gap-2 pb-1 ${className}`} {...props}>
      {children}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-right bg-current opacity-40 transition-transform duration-700 ease-(--ease-calm) group-hover:scale-x-0"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform delay-150 duration-700 ease-(--ease-calm) group-hover:scale-x-100"
      />
    </a>
  )
}
