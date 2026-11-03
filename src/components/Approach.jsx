import { steps } from '../data/site'
import { Eyebrow, Reveal, Rule } from './ui'

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="relative bg-paper-deep/60 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="03" className="text-ink-mute">
              Approach
            </Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal
              as="h2"
              id="approach-title"
              className="max-w-3xl font-serif text-[clamp(2.4rem,5.6vw,4.8rem)] leading-[1.02] tracking-[-0.02em]"
            >
              A simple process, <span className="text-ink-mute italic">and no surprises.</span>
            </Reveal>
            <Reveal delay={0.15} as="p" className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              You bring the knowledge of your business. I handle everything else, and keep you in the loop without
              asking you to become a web expert.
            </Reveal>
          </div>
        </div>

        <ol className="mt-20 grid gap-x-10 gap-y-14 sm:mt-28 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Rule className="text-ink" delay={i * 0.15} />
              <Reveal delay={0.2 + i * 0.15} y={20} className="pt-8">
                <p className="font-serif text-2xl text-ember italic">0{i + 1}</p>
                <h3 className="mt-6 font-serif text-[2.1rem] leading-none tracking-[-0.01em]">{step.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-mute">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
