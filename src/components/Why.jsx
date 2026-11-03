import { reasons } from '../data/site'
import { Reveal, SectionHead } from './ui'

export default function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHead
          id="why-title"
          eyebrow="Why it matters"
          title={
            <>
              Great work spreads by word of mouth. <span className="text-fog">Then people search for you.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:mt-20 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.1} y={20} className="bg-night p-8 sm:p-10">
              <p className="display text-5xl text-signal">0{i + 1}</p>
              <h3 className="mt-10 text-xl font-semibold tracking-tight">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-fog">{reason.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
