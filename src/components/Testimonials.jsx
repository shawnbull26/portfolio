import { testimonials } from '../data/site'
import { Reveal, SectionHead } from './ui'

// Hidden until the first quote is added to `testimonials` in src/data/site.js.
export default function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHead
          id="reviews-title"
          eyebrow="Kind words"
          title={
            <>
              From the owners <span className="text-slate">I’ve built for.</span>
            </>
          }
        />
        <ul className="mt-16 grid gap-5 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={(i % 3) * 0.08}
              y={24}
              className="flex flex-col rounded-3xl border border-navy/12 bg-paper-light p-8"
            >
              <span aria-hidden="true" className="display text-6xl leading-none text-pencil">
                “
              </span>
              <blockquote className="mt-4 text-lg leading-relaxed">{t.quote}</blockquote>
              <p className="mt-auto pt-8 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-slate"> · {t.business}</span>
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
