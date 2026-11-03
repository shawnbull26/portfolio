import { useState } from 'react'
import { Pause, Play, Store } from 'lucide-react'
import { samples, spotsText } from '../data/site'
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
    <>
      <section id="top" className="relative overflow-hidden bg-blush pt-28 sm:pt-32">
        <Loops />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
          <p
            className="anim-fade-up mx-auto inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-[0_1px_0_rgb(23_19_15/0.06)]"
            style={{ '--d': '0.1s' }}
          >
            <span aria-hidden="true" className="relative flex size-2">
              <span className="ping absolute inset-0 rounded-full bg-tangerine" />
              <span className="relative size-2 rounded-full bg-tangerine" />
            </span>
            Founding-client rates · {spotsText}
          </p>

          <div className="relative mx-auto mt-8 max-w-6xl">
            <h1 className="display text-[clamp(3.6rem,10.5vw,9rem)] text-tangerine-deep">
              <span className="line-mask">
                <span style={{ '--d': '0.05s' }}>No website yet?</span>
              </span>
              <span className="line-mask">
                <span style={{ '--d': '0.15s' }}>Let’s get you</span>
              </span>
              <span className="line-mask">
                <span className="text-ink" style={{ '--d': '0.25s' }}>
                  found.
                </span>
              </span>
            </h1>

            {/* Decorative tags: the same facts are repeated in the copy below for screen readers. */}
            <div aria-hidden="true" className="hidden sm:block">
              <span
                className="anim-pop sticker absolute top-[-7%] left-[2%] rotate-[-9deg] bg-ink text-cream sm:left-[6%]"
                style={{ '--d': '0.7s' }}
              >
                For local businesses
              </span>
              <span
                className="anim-pop sticker absolute right-[0%] bottom-[12%] rotate-[7deg] bg-sky sm:right-[6%]"
                style={{ '--d': '0.85s' }}
              >
                Live in about a week
              </span>
              <span
                className="anim-pop sticker absolute bottom-[12%] left-[6%] hidden rotate-[5deg] bg-sunshine sm:inline-flex"
                style={{ '--d': '1s' }}
              >
                No tech talk, promise
              </span>
              <span
                className="anim-pop sticker absolute top-[-6%] right-[8%] hidden rotate-[-5deg] bg-bubblegum sm:inline-flex"
                style={{ '--d': '1.1s' }}
              >
                From $697
              </span>
            </div>
          </div>

          <div aria-hidden="true" className="mt-7 flex flex-wrap justify-center gap-2 sm:hidden">
            <span className="anim-pop sticker rotate-[-4deg] bg-ink text-cream" style={{ '--d': '0.6s' }}>
              For local businesses
            </span>
            <span className="anim-pop sticker rotate-[3deg] bg-sky" style={{ '--d': '0.7s' }}>
              Live in about a week
            </span>
            <span className="anim-pop sticker rotate-[-2deg] bg-sunshine" style={{ '--d': '0.8s' }}>
              From $697
            </span>
          </div>

          <p
            className="anim-fade-up mx-auto mt-10 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            style={{ '--d': '0.5s' }}
          >
            Design by Dae builds bright, friendly websites for local businesses that don’t have one, so customers can
            find you on Google, trust you at a glance, and call. Live in about a week, from $697, no tech talk.
          </p>

          <div
            className="anim-fade-up mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ '--d': '0.6s' }}
          >
            <Button href="#contact">Let’s talk</Button>
            <Button href="#samples" variant="outline">
              See sample sites
            </Button>
          </div>
        </div>

        <Collage />
      </section>

      <Ribbon />
    </>
  )
}

// Three tilted cards peeking up from the bottom of the hero: two sample sites and a spot for "yours".
function Collage() {
  const [apex, lumen] = samples
  return (
    <div aria-hidden="true" className="relative mx-auto mt-16 h-[15rem] max-w-5xl px-5 sm:mt-20 sm:h-[22rem]">
      <div
        className="anim-fade-up absolute bottom-[-2.5rem] left-[2%] w-[46%] rotate-[-7deg] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_30px_60px_-30px_rgb(23_19_15/0.5)] sm:left-[4%] sm:w-[38%]"
        style={{ '--d': '0.75s' }}
      >
        <img
          src={apex.images.desktopSmall}
          width="640"
          height="400"
          alt=""
          decoding="async"
          className="block h-auto w-full"
        />
      </div>

      <div
        className="anim-fade-up absolute bottom-[-1rem] left-1/2 z-10 flex aspect-[4/3] w-[44%] -translate-x-1/2 rotate-[2deg] flex-col justify-between rounded-2xl border-4 border-dashed border-ink/25 bg-sunshine p-4 shadow-[0_30px_60px_-30px_rgb(23_19_15/0.5)] sm:w-[32%] sm:p-6"
        style={{ '--d': '0.9s' }}
      >
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-ink/25" />
          <span className="size-2 rounded-full bg-ink/25" />
          <span className="size-2 rounded-full bg-ink/25" />
        </div>
        <div className="text-left">
          <Store className="size-6 sm:size-8" />
          <p className="display mt-2 text-[clamp(1.4rem,4vw,2.6rem)]">Your business here</p>
        </div>
      </div>

      <div
        className="anim-fade-up absolute right-[4%] bottom-[-3rem] w-[22%] rotate-[8deg] overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-ink shadow-[0_30px_60px_-30px_rgb(23_19_15/0.5)] sm:right-[10%] sm:w-[16%]"
        style={{ '--d': '1.05s' }}
      >
        <img
          src={lumen.images.mobileSmall}
          width="260"
          height="563"
          alt=""
          decoding="async"
          className="block h-auto w-full rounded-[1rem]"
        />
      </div>
    </div>
  )
}

// A tilted band of the kinds of businesses served. It pauses on hover or with its button.
function Ribbon() {
  const [paused, setPaused] = useState(false)
  const row = [...industries, ...industries]
  return (
    <div className="relative z-10 -mt-6 overflow-hidden py-6">
      <div className="relative -mx-4 rotate-[-2deg] bg-tangerine py-4 shadow-[0_10px_30px_-15px_rgb(23_19_15/0.5)]">
        <p className="sr-only">Built for local service businesses like {industries.join(', ')}.</p>
        <div aria-hidden="true" className={`marquee flex w-max ${paused ? 'is-paused' : ''}`}>
          {row.map((name, i) => (
            <span key={i} className="display flex items-center gap-6 pr-6 text-3xl text-ink sm:text-4xl">
              {name}
              <svg viewBox="0 0 40 40" className="size-5 text-cream">
                <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" fill="currentColor" />
              </svg>
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          aria-label={paused ? 'Play the scrolling list of businesses' : 'Pause the scrolling list of businesses'}
          className="absolute top-1/2 right-8 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 hover:scale-110"
        >
          {paused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
        </button>
      </div>
    </div>
  )
}

// Two big hand-drawn loops at the edges of the hero, drawn on in CSS.
function Loops() {
  return (
    <div aria-hidden="true" className="anim-fade-in pointer-events-none absolute inset-0 hidden sm:block">
      <svg viewBox="0 0 300 600" fill="none" className="absolute top-[8%] -left-28 h-[42%] lg:-left-16">
        <path
          pathLength="1"
          className="anim-draw"
          style={{ '--d': '0.3s' }}
          d="M-40 80 C 120 60, 230 160, 190 280 C 160 370, 40 360, 60 270 C 80 190, 220 230, 230 340 C 240 450, 120 540, -30 560"
          stroke="var(--color-tangerine)"
          strokeWidth="22"
          strokeLinecap="round"
        />
      </svg>
      <svg viewBox="0 0 300 600" fill="none" className="absolute top-[2%] -right-28 h-[40%] lg:-right-16">
        <path
          pathLength="1"
          className="anim-draw"
          style={{ '--d': '0.5s' }}
          d="M340 60 C 180 40, 60 130, 110 240 C 150 320, 270 290, 240 210 C 210 130, 70 180, 80 300 C 90 420, 230 470, 330 520"
          stroke="var(--color-tangerine)"
          strokeWidth="22"
          strokeLinecap="round"
        />
      </svg>
      <svg viewBox="0 0 40 40" className="absolute top-[22%] left-[18%] size-6 text-sunshine sm:size-8">
        <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 40 40" className="absolute top-[58%] right-[16%] size-5 text-sky sm:size-7">
        <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" fill="currentColor" />
      </svg>
    </div>
  )
}
