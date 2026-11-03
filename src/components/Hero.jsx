import { person } from '../data/site'
import { PrimaryButton, UnderlineLink } from './ui'

// Hero entrances are CSS (see index.css) so the prerendered page animates before JS arrives.
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <Atmosphere />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-16 sm:px-8 lg:px-12">
        <p
          className="anim-fade-up mb-8 flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-ink-mute uppercase sm:mb-10"
          style={{ '--d': '0.2s' }}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
          Websites for local service businesses
        </p>

        <h1 className="font-serif text-[clamp(3.1rem,10.5vw,9.5rem)] leading-[0.92] tracking-[-0.025em] text-ink">
          <span className="line-mask">
            <span style={{ '--d': '0.35s' }}>Look as good online</span>
          </span>
          <span className="line-mask">
            <span style={{ '--d': '0.52s' }}>
              as you are <em className="text-ember">in person.</em>
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-12 md:items-end">
          <p
            className="anim-fade-up max-w-md text-lg leading-relaxed text-ink-soft md:col-span-6 lg:col-span-5"
            style={{ '--d': '1s' }}
          >
            Your customers already trust you. I design and build websites for detailers, cleaners, contractors and the
            other businesses people rely on, so strangers feel that same trust in seconds, and call.
          </p>

          <div
            className="anim-fade-up flex flex-wrap items-center gap-x-8 gap-y-5 md:col-span-6 md:justify-end lg:col-span-5 lg:col-start-8"
            style={{ '--d': '1.15s' }}
          >
            <PrimaryButton href="#contact">Start a project</PrimaryButton>
            <UnderlineLink href="#work" className="text-[0.95rem] font-medium text-ink">
              See the work
            </UnderlineLink>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8 lg:px-12">
        <div className="anim-draw-x h-px bg-ink/15" style={{ '--d': '1.3s' }} />
        <div
          className="anim-fade-in flex items-center justify-between pt-5 text-xs tracking-[0.14em] text-ink-mute uppercase"
          style={{ '--d': '1.6s' }}
        >
          <span className="flex items-center gap-2.5">
            <span aria-hidden="true" className="relative flex size-1.5">
              <span className="breathe absolute inset-0 rounded-full bg-ember" />
              <span className="relative size-1.5 rounded-full bg-ember" />
            </span>
            Booking new projects<span className="hidden sm:inline"> · {person.location}</span>
          </span>
          <a href="#intro" className="hidden items-center gap-3 sm:flex">
            Scroll
            <span aria-hidden="true" className="relative h-8 w-px overflow-hidden bg-ink/15">
              <span className="scroll-cue absolute inset-0 bg-ink/60" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

// Soft, slow-moving light behind the headline: two warm glows and a faint horizon.
function Atmosphere() {
  return (
    <div aria-hidden="true" className="anim-fade-in pointer-events-none absolute inset-0" style={{ '--d': '0.1s' }}>
      <div className="drift-a absolute -top-[20%] -right-[15%] size-[70vmax] rounded-full bg-[radial-gradient(closest-side,var(--color-ember-soft),transparent)] opacity-70" />
      <div className="drift-b absolute -bottom-[35%] -left-[20%] size-[65vmax] rounded-full bg-[radial-gradient(closest-side,var(--color-sand),transparent)] opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-paper to-transparent" />
    </div>
  )
}
