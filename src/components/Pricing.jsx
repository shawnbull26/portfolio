import { Check } from 'lucide-react'
import { pricing } from '../data/site'
import { Eyebrow, Reveal } from './ui'

// Package buttons tell the contact form which option to preselect.
const choosePackage = (name) => window.dispatchEvent(new CustomEvent('choose-package', { detail: name }))

export default function Pricing() {
  const [starter, growth] = pricing.packages

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="04" className="text-ink-mute">
              Pricing
            </Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal
              as="h2"
              id="pricing-title"
              className="max-w-3xl font-serif text-[clamp(2.4rem,5.6vw,4.8rem)] leading-[1.02] tracking-[-0.02em]"
            >
              Clear prices, <span className="text-ink-mute italic">decided before we start.</span>
            </Reveal>
            <Reveal delay={0.15} as="p" className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              One extra job usually pays for the site. You'll know exactly what you're getting and what it costs, with
              no hourly billing and no surprise invoices.
            </Reveal>
          </div>
        </div>

        <Reveal
          delay={0.1}
          className="mt-20 grid gap-4 border-y border-ink/10 py-7 sm:mt-28 md:grid-cols-12 md:items-center md:gap-10"
        >
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.18em] text-ember-deep uppercase md:col-span-4">
            <span aria-hidden="true" className="relative flex size-1.5">
              <span className="breathe absolute inset-0 rounded-full bg-ember" />
              <span className="relative size-1.5 rounded-full bg-ember" />
            </span>
            {pricing.founding.label}
            <span className="tracking-normal text-ink-mute normal-case">· {pricing.founding.spots}</span>
          </p>
          <p className="leading-relaxed text-ink-soft md:col-span-8">{pricing.founding.text}</p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal y={36} className="lg:col-span-7">
            <Package pkg={starter} featured />
          </Reveal>
          <Reveal y={36} delay={0.12} className="lg:col-span-5">
            <Package pkg={growth} />
          </Reveal>

          <Reveal y={24} delay={0.2} className="lg:col-span-12">
            <div className="grid gap-6 rounded-[1.75rem] border border-ink/10 p-7 sm:p-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-3">
                <p className="text-xs font-medium tracking-[0.18em] text-ink-mute uppercase">Recommended with every site</p>
                <h3 className="mt-3 font-serif text-3xl tracking-[-0.01em]">{pricing.care.name}</h3>
              </div>
              <p className="leading-relaxed text-ink-soft md:col-span-6">{pricing.care.text}</p>
              <p className="font-serif text-5xl tracking-[-0.02em] md:col-span-3 md:text-right">
                {pricing.care.price}
                <span className="font-sans text-base tracking-normal text-ink-mute"> / month</span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} as="p" className="mt-10 max-w-2xl text-[0.95rem] leading-relaxed text-ink-mute">
          {pricing.terms}
        </Reveal>
      </div>
    </section>
  )
}

function Package({ pkg, featured = false }) {
  const tone = featured ? 'bg-ink text-paper' : 'border border-ink/10 bg-paper-deep/40'
  const muted = featured ? 'text-paper/65' : 'text-ink-mute'

  return (
    <article
      aria-labelledby={`${pkg.id}-title`}
      className={`relative isolate flex h-full flex-col overflow-hidden rounded-[1.75rem] p-7 sm:p-10 ${tone}`}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="breathe absolute -top-1/2 -right-1/3 -z-10 size-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(180,83,47,0.4),transparent)]"
        />
      )}

      <div className="flex flex-wrap items-start justify-between gap-4">
        <h3 id={`${pkg.id}-title`} className="font-serif text-3xl tracking-[-0.01em] sm:text-4xl">
          {pkg.name}
        </h3>
        {pkg.badge && (
          <span className="rounded-full border border-paper/20 px-3 py-1 text-xs text-paper/80">{pkg.badge}</span>
        )}
      </div>
      <p className={`mt-4 max-w-sm leading-relaxed ${muted}`}>{pkg.tagline}</p>

      <div className="mt-8">
        <p className={`text-sm ${muted}`}>
          <span className="sr-only">Regular price </span>
          <s className="decoration-1">
            {pkg.from && 'from '}
            {pkg.regular}
          </s>
          <span aria-hidden="true"> · </span>
          <span className={featured ? 'text-ember-soft' : 'text-ember-deep'}>Founding-client rate</span>
        </p>
        <p className="mt-3 font-serif text-6xl leading-none tracking-[-0.02em] sm:text-7xl">
          {pkg.from && <span className={`mr-2 font-sans text-base tracking-normal ${muted}`}>from</span>}
          {pkg.price}
          <span className={`ml-2 font-sans text-base tracking-normal ${muted}`}>one-time</span>
        </p>
      </div>

      <ul className={`mt-8 space-y-3 border-t pt-8 ${featured ? 'border-paper/12' : 'border-ink/10'}`}>
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[0.95rem] leading-relaxed">
            <Check
              aria-hidden="true"
              className={`mt-1 size-4 shrink-0 ${featured ? 'text-ember-soft' : 'text-ember-deep'}`}
            />
            <span className={featured ? 'text-paper/90' : 'text-ink-soft'}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
        <a
          href="#contact"
          onClick={() => choosePackage(pkg.name)}
          className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-medium transition-colors duration-500 ${
            featured ? 'bg-paper text-ink hover:bg-white' : 'border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper'
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
