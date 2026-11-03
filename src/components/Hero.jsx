import { useState } from 'react'
import { Check, Pause, Play } from 'lucide-react'
import { heroFacts, pricing, spotsText } from '../data/site'
import { Button } from './ui'

const industries = [
  'Detailers',
  'House cleaners',
  'Landscapers',
  'Barbers',
  'Plumbers',
  'Painters',
  'Contractors',
  'Pressure washers',
  'Pet groomers',
  'Movers',
]

// Hero entrances are CSS (see index.css) so the prerendered page animates before JS arrives.
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <Atmosphere />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-14 sm:px-8 lg:px-12">
        <p
          className="anim-fade-up mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/12 bg-white/4 px-4 py-2 text-xs font-medium text-fog sm:mb-10"
          style={{ '--d': '0.15s' }}
        >
          <span aria-hidden="true" className="relative flex size-1.5">
            <span className="breathe absolute inset-0 rounded-full bg-signal" />
            <span className="relative size-1.5 rounded-full bg-signal" />
          </span>
          {pricing.founding.label} · {spotsText}
        </p>

        <h1 className="display text-[clamp(2.4rem,10vw,8.6rem)]">
          <span className="line-mask">
            <span style={{ '--d': '0.05s' }}>No website yet?</span>
          </span>
          <span className="line-mask">
            <span style={{ '--d': '0.15s' }}>Let’s get you</span>
          </span>
          <span className="line-mask">
            <span className="text-signal" style={{ '--d': '0.25s' }}>
              found.
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 sm:mt-14 md:grid-cols-12 md:items-end">
          <p
            className="anim-fade-up max-w-lg text-lg leading-relaxed text-fog md:col-span-7 lg:col-span-6"
            style={{ '--d': '0.55s' }}
          >
            Design by Dae builds clean, fast websites for local businesses that don’t have one, so customers can find
            you on Google, trust you at a glance, and call.
          </p>

          <div
            className="anim-fade-up flex flex-wrap items-center gap-x-6 gap-y-4 md:col-span-5 md:justify-end lg:col-span-6"
            style={{ '--d': '0.65s' }}
          >
            <Button href="#contact">Let’s talk</Button>
            <Button href="#pricing" variant="ghost" className="text-cloud">
              See pricing
            </Button>
          </div>
        </div>

        <ul
          className="anim-fade-up mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-fog sm:mt-16"
          style={{ '--d': '0.8s' }}
        >
          {heroFacts.map((fact) => (
            <li key={fact} className="flex items-center gap-2">
              <Check aria-hidden="true" className="size-4 text-signal" />
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <Industries />
    </section>
  )
}

// A slow ribbon of the kinds of businesses served. It pauses on hover or with its button, and screen readers get a plain list.
function Industries() {
  const [paused, setPaused] = useState(false)
  const row = [...industries, ...industries]
  return (
    <div className="anim-fade-in relative border-y border-white/8" style={{ '--d': '1s' }}>
      <p className="sr-only">Built for local service businesses like {industries.join(', ')}.</p>
      <div className="py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div
          aria-hidden="true"
          className={`marquee flex w-max ${paused ? 'is-paused' : ''}`}
        >
          {row.map((name, i) => (
            <span key={i} className="display flex items-center gap-8 pr-8 text-2xl text-white/25 sm:text-3xl">
              {name}
              <span className="size-2 rounded-full bg-signal/70" />
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((v) => !v)}
        aria-label={paused ? 'Play the scrolling list of businesses' : 'Pause the scrolling list of businesses'}
        className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full border border-white/12 bg-night/80 text-fog transition-colors duration-300 hover:text-cloud sm:right-5"
      >
        {paused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
      </button>
    </div>
  )
}

// A faint grid and a slow orange glow behind the headline.
function Atmosphere() {
  return (
    <div aria-hidden="true" className="anim-fade-in pointer-events-none absolute inset-0" style={{ '--d': '0.05s' }}>
      <div className="grid-lines absolute inset-0" />
      <div className="drift-a absolute -right-[20%] -bottom-[30%] size-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgba(255,106,43,0.28),transparent)]" />
      <div className="drift-b absolute -top-[30%] -left-[25%] size-[55vmax] rounded-full bg-[radial-gradient(closest-side,rgba(255,154,107,0.08),transparent)]" />
    </div>
  )
}
