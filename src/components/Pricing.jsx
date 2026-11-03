import { Check } from 'lucide-react'
import { pricing } from '../data/site'
import { Reveal, SectionHead } from './ui'

// Package buttons tell the contact form which option to preselect.
const choosePackage = (name) => window.dispatchEvent(new CustomEvent('choose-package', { detail: name }))

export default function Pricing() {
  const [starter, growth] = pricing.packages

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHead
          id="pricing-title"
          eyebrow="Pricing"
          title={
            <>
              Clear prices. <span className="text-fog">No surprise invoices.</span>
            </>
          }
          intro="One extra job usually pays for the site. You'll know exactly what you're getting and what it costs before we start."
        />

        <Reveal
          delay={0.1}
          className="mt-14 flex flex-col gap-3 rounded-2xl border border-signal/30 bg-signal/8 p-5 sm:mt-16 sm:flex-row sm:items-center sm:gap-8 sm:p-6"
        >
          <p className="flex shrink-0 items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-signal uppercase">
            <span aria-hidden="true" className="relative flex size-1.5">
              <span className="breathe absolute inset-0 rounded-full bg-signal" />
              <span className="relative size-1.5 rounded-full bg-signal" />
            </span>
            {pricing.founding.spots}
          </p>
          <p className="leading-relaxed text-cloud/85">{pricing.founding.text}</p>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          <Reveal y={36} className="lg:col-span-7">
            <Package pkg={starter} featured />
          </Reveal>
          <Reveal y={36} delay={0.1} className="lg:col-span-5">
            <Package pkg={growth} />
          </Reveal>

          <Reveal y={24} delay={0.15} className="lg:col-span-12">
            <div className="grid gap-6 rounded-3xl border border-white/8 bg-night-raised p-7 sm:p-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold tracking-[0.18em] text-fog uppercase">Optional, recommended</p>
                <h3 className="display mt-3 text-3xl">{pricing.care.name}</h3>
              </div>
              <p className="leading-relaxed text-fog md:col-span-6">{pricing.care.text}</p>
              <p className="display text-5xl md:col-span-3 md:text-right">
                {pricing.care.price}
                <span className="font-sans text-base font-normal tracking-normal text-fog [font-stretch:100%]"> / month</span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} as="p" className="mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-fog">
          {pricing.terms}
        </Reveal>
      </div>
    </section>
  )
}

function Package({ pkg, featured = false }) {
  const tone = featured ? 'bg-signal text-night' : 'border border-white/8 bg-night-raised text-cloud'
  const muted = featured ? 'text-night/70' : 'text-fog'

  return (
    <article
      aria-labelledby={`${pkg.id}-title`}
      className={`relative isolate flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-10 ${tone}`}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="breathe absolute -top-1/2 -right-1/3 -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.35),transparent)]"
        />
      )}

      <div className="flex flex-wrap items-start justify-between gap-4">
        <h3 id={`${pkg.id}-title`} className="display text-3xl sm:text-4xl">
          {pkg.name}
        </h3>
        {pkg.badge && (
          <span className="rounded-full bg-night px-3 py-1 text-xs font-semibold text-cloud">{pkg.badge}</span>
        )}
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
          <span className={`font-semibold ${featured ? 'text-night' : 'text-signal'}`}>Founding-client rate</span>
        </p>
        <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
          {pkg.from && <span className={`text-base ${muted}`}>from</span>}
          <span className={`display ${featured ? 'text-6xl sm:text-7xl' : 'text-5xl sm:text-6xl'}`}>{pkg.price}</span>
          <span className={`text-base whitespace-nowrap ${muted}`}>one-time</span>
        </p>
      </div>

      <ul className={`mt-8 space-y-3 border-t pt-8 ${featured ? 'border-night/15' : 'border-white/8'}`}>
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[0.95rem] leading-relaxed">
            <Check aria-hidden="true" className={`mt-1 size-4 shrink-0 ${featured ? 'text-night' : 'text-signal'}`} />
            <span className={featured ? 'text-night/85' : 'text-cloud/85'}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
        <a
          href="#contact"
          onClick={() => choosePackage(pkg.name)}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-300 ${
            featured ? 'bg-night text-cloud hover:bg-black' : 'bg-cloud text-night hover:bg-white'
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
