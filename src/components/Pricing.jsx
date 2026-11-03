import { Check } from 'lucide-react'
import { pricing, spotsText } from '../data/site'
import { Reveal, SectionHead, Sticker } from './ui'

// Package buttons tell the contact form which option to preselect.
const choosePackage = (name) => window.dispatchEvent(new CustomEvent('choose-package', { detail: name }))

export default function Pricing() {
  const [starter, growth] = pricing.packages

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHead
          id="pricing-title"
          align="center"
          eyebrow="Pricing"
          title={
            <>
              Clear prices. <span className="text-tangerine-deep">No surprises.</span>
            </>
          }
          intro="One extra job usually pays for the site. You’ll know exactly what you’re getting and what it costs before we start."
        />

        <Reveal
          delay={0.1}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 rounded-[1.75rem] bg-ink p-5 text-center text-cream sm:mt-14 sm:flex-row sm:gap-6 sm:p-6 sm:text-left"
        >
          <span className="sticker shrink-0 -rotate-3 bg-sunshine text-ink">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="ping absolute inset-0 rounded-full bg-tangerine" />
              <span className="relative size-2 rounded-full bg-tangerine" />
            </span>
            {spotsText}
          </span>
          <p className="text-[0.95rem] leading-relaxed text-cream/85">{pricing.founding.text}</p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <Reveal y={36} className="lg:col-span-7">
            <Package pkg={starter} featured />
          </Reveal>
          <Reveal y={36} delay={0.1} className="lg:col-span-5">
            <Package pkg={growth} />
          </Reveal>

          <Reveal y={24} delay={0.15} className="lg:col-span-12">
            <div className="grid gap-6 rounded-[2rem] bg-sunshine p-7 sm:p-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold tracking-[0.14em] text-ink/70 uppercase">Optional, recommended</p>
                <h3 className="display mt-2 text-5xl">{pricing.care.name}</h3>
              </div>
              <p className="leading-relaxed text-ink/80 md:col-span-6">{pricing.care.text}</p>
              <p className="flex items-baseline gap-2 md:col-span-3 md:justify-end">
                <span className="display text-6xl">{pricing.care.price}</span>
                <span className="text-base text-ink/70">/ month</span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} as="p" className="mx-auto mt-8 max-w-2xl text-center text-[0.95rem] leading-relaxed text-ink-soft">
          {pricing.terms}
        </Reveal>
      </div>
    </section>
  )
}

function Package({ pkg, featured = false }) {
  const tone = featured ? 'bg-tangerine' : 'bg-white ring-2 ring-ink/8'
  const muted = featured ? 'text-ink/75' : 'text-ink-soft'

  return (
    <article
      aria-labelledby={`${pkg.id}-title`}
      className={`relative flex h-full flex-col rounded-[2rem] p-7 text-ink sm:p-10 ${tone}`}
    >
      {pkg.badge && (
        <Sticker tone="ink" rotate={6} delay={0.3} className="absolute -top-3 right-8">
          {pkg.badge}
        </Sticker>
      )}

      <h3 id={`${pkg.id}-title`} className="display text-5xl sm:text-6xl">
        {pkg.name}
      </h3>
      <p className={`mt-4 max-w-sm leading-relaxed ${muted}`}>{pkg.tagline}</p>

      <div className="mt-8">
        <p className={`text-sm ${muted}`}>
          <span className="sr-only">Regular price </span>
          <s>
            {pkg.from && 'from '}
            {pkg.regular}
          </s>
          <span aria-hidden="true"> · </span>
          <span className="font-semibold text-ink">Founding-client rate</span>
        </p>
        <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
          {pkg.from && <span className={`text-base ${muted}`}>from</span>}
          <span className={`display ${featured ? 'text-8xl sm:text-9xl' : 'text-7xl sm:text-8xl'}`}>{pkg.price}</span>
          <span className={`text-base whitespace-nowrap ${muted}`}>one-time</span>
        </p>
      </div>

      <ul className={`mt-8 space-y-3 border-t-2 pt-8 ${featured ? 'border-ink/15' : 'border-ink/8'}`}>
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[0.95rem] leading-relaxed">
            <span
              className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${featured ? 'bg-ink text-tangerine' : 'bg-sunshine text-ink'}`}
            >
              <Check aria-hidden="true" className="size-3" strokeWidth={3} />
            </span>
            <span className={featured ? 'text-ink/90' : 'text-ink-soft'}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
        <a
          href="#contact"
          onClick={() => choosePackage(pkg.name)}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-transform duration-300 ease-(--ease-pop) hover:-translate-y-0.5 ${
            featured ? 'bg-ink text-cream' : 'bg-tangerine text-ink'
          }`}
        >
          Get started
          <span className="sr-only"> with the {pkg.name}</span>
        </a>
        {pkg.timeline && <p className={`text-sm ${muted}`}>{pkg.timeline}</p>}
      </div>
    </article>
  )
}
