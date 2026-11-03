import { steps } from '../data/site'
import { Reveal, SectionHead, Squiggle } from './ui'

const badges = ['bg-sunshine', 'bg-sky', 'bg-bubblegum', 'bg-tangerine']
const tilts = ['-rotate-6', 'rotate-3', '-rotate-3', 'rotate-6']

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <Squiggle
        className="absolute -top-10 -right-24 w-[26rem] opacity-90 sm:-right-10"
        d="M380 40 C 250 20, 150 90, 190 190 C 220 260, 320 240, 300 170 C 280 100, 150 130, 140 230 C 130 330, 230 380, 360 390"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHead
          id="process-title"
          eyebrow={<span className="text-cream/70">How it works</span>}
          title={
            <>
              First call to live site <span className="text-tangerine">in about a week.</span>
            </>
          }
          intro={
            <span className="text-cream/75">
              You bring what you know about your business. I handle everything else, and keep you in the loop without the
              tech talk.
            </span>
          }
        />

        <ol className="mt-16 grid gap-5 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={0.1 + i * 0.12}
              y={24}
              className="group rounded-[2rem] bg-cream/6 p-7 ring-1 ring-cream/10 transition-colors duration-500 hover:bg-cream/10"
            >
              <span
                className={`display grid size-16 place-items-center rounded-full text-4xl text-ink transition-transform duration-500 ease-(--ease-pop) group-hover:rotate-0 ${badges[i]} ${tilts[i]}`}
              >
                {i + 1}
              </span>
              <h3 className="display mt-8 text-4xl">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-cream/75">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
