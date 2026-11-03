import { m } from 'framer-motion'
import { steps } from '../data/site'
import { Reveal, SectionHead, calm } from './ui'

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHead
          id="process-title"
          eyebrow="How it works"
          title={
            <>
              From first call to live site <span className="text-fog">in about a week.</span>
            </>
          }
          intro="You bring what you know about your business. I handle everything else, and keep you in the loop without the tech talk."
        />

        <div className="relative mt-16 sm:mt-24">
          {/* A line that fills in orange as the steps scroll into view. */}
          <div aria-hidden="true" className="absolute top-6 right-0 left-0 hidden h-px bg-white/10 lg:block">
            <m.div
              className="h-full origin-left bg-signal"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 2.2, ease: calm, delay: 0.2 }}
            />
          </div>
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={0.15 + i * 0.15} y={20} className="relative">
                <span className="relative grid size-12 place-items-center rounded-full border border-white/12 bg-night font-display text-sm font-bold text-signal">
                  {i + 1}
                </span>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-fog">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
