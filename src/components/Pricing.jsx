import { Check } from 'lucide-react'
import { pricing, spotsText } from '../data/site'
import { Note, Reveal, SectionHead } from './ui'

// Package buttons tell the contact form which option to preselect.
const choosePackage = (name) => window.dispatchEvent(new CustomEvent('choose-package', { detail: name }))

export default function Pricing() {
  const [starter, growth] = pricing.packages

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative bg-paper-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            id="pricing-title"
            label="Pricing"
            title={
              <>
                Clear prices. <span className="marker">No surprises.</span>
              </>
            }
            intro="One extra job usually pays for the site. You’ll know exactly what you’re getting and what it costs before we start."
          />
          <Reveal delay={0.15} className="max-w-sm rounded-2xl border-[1.5px] border-dashed border-pencil/50 p-5">
            <p className="label flex items-center gap-2 text-pencil">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="ping absolute inset-0 rounded-full bg-marigold" />
                <span className="relative size-2 rounded-full bg-marigold" />
              </span>
              {spotsText}
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{pricing.founding.text}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-12">
          <Reveal y={32} className="lg:col-span-7">
            <Package pkg={starter} featured />
          </Reveal>
          <Reveal y={32} delay={0.1} className="lg:col-span-5">
            <Package pkg={growth} />
          </Reveal>

          <Reveal y={20} delay={0.15} className="lg:col-span-12">
            <div className="grid gap-6 rounded-3xl border-[1.5px] border-navy p-7 sm:p-9 md:grid-cols-12 md:items-center">
              <div className="md:col-span-3">
                <p className="label text-pencil">Optional, recommended</p>
                <h3 className="display mt-2 text-4xl">{pricing.care.name}</h3>
              </div>
              <p className="leading-relaxed text-slate md:col-span-6">{pricing.care.text}</p>
              <p className="flex items-baseline gap-2 md:col-span-3 md:justify-end">
                <span className="display text-6xl">{pricing.care.price}</span>
                <span className="text-slate">/ month</span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} as="p" className="mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-slate">
          {pricing.terms}
        </Reveal>
      </div>
    </section>
  )
}

function Package({ pkg, featured = false }) {
  const tone = featured ? 'bg-navy text-paper' : 'border-[1.5px] border-navy/15 bg-paper text-navy'
  const muted = featured ? 'text-paper/70' : 'text-slate'

  return (
    <article
      aria-labelledby={`${pkg.id}-title`}
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-10 ${tone}`}
    >
      {featured && <div aria-hidden="true" className="blueprint-dark absolute inset-0" />}
      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 id={`${pkg.id}-title`} className="display text-4xl sm:text-5xl">
            {pkg.name}
          </h3>
          {pkg.badge && <span className="label rounded-full bg-marigold px-3 py-1.5 text-navy">{pkg.badge}</span>}
        </div>
        <p className={`mt-4 max-w-sm leading-relaxed ${muted}`}>{pkg.tagline}</p>

        <div className="mt-8">
          <p className={`text-sm ${muted}`}>
            <span className="sr-only">Regular price </span>
            <s>
              {pkg.from && 'from '}
              {pkg.regular}
            </s>
            <span aria-hidden="true"> · </span>
            <span className={`font-semibold ${featured ? 'text-marigold' : 'text-pencil'}`}>Founding-client rate</span>
          </p>
          <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
            {pkg.from && <span className={muted}>from</span>}
            <span className={`display ${featured ? 'text-7xl sm:text-8xl' : 'text-6xl sm:text-7xl'}`}>{pkg.price}</span>
            <span className={`whitespace-nowrap ${muted}`}>one-time</span>
            {featured && (
              <Note arrow="left" rotate={-6} delay={0.4} showFrom="sm" color="text-marigold-soft" className="ml-2">
                most owners pick this
              </Note>
            )}
          </p>
        </div>

        <ul className={`mt-8 space-y-3 border-t pt-8 ${featured ? 'border-paper/15' : 'border-navy/10'}`}>
          {pkg.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-[0.95rem] leading-relaxed">
              <Check
                aria-hidden="true"
                className={`mt-1 size-4 shrink-0 ${featured ? 'text-marigold' : 'text-pencil'}`}
                strokeWidth={3}
              />
              <span className={featured ? 'text-paper/90' : 'text-slate'}>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
          <a
            href="#contact"
            onClick={() => choosePackage(pkg.name)}
            className={`inline-flex items-center rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-300 ${
              featured ? 'bg-marigold text-navy hover:bg-marigold-soft' : 'bg-navy text-paper hover:bg-navy-deep'
            }`}
          >
            Get started
            <span className="sr-only"> with the {pkg.name}</span>
          </a>
          {pkg.timeline && <p className={`text-sm ${muted}`}>{pkg.timeline}</p>}
        </div>
      </div>
    </article>
  )
}
