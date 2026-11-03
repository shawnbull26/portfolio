import { Check } from 'lucide-react'
import { about, brand } from '../data/site'
import { Eyebrow, Reveal } from './ui'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <Portrait />
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow className="text-fog">About</Eyebrow>
            </Reveal>
            <Reveal as="h2" id="about-title" delay={0.05} className="display mt-6 text-[clamp(2.6rem,6vw,5rem)]">
              {about.heading}
            </Reveal>
            <Reveal delay={0.12} className="mt-8 space-y-5 text-lg leading-relaxed text-fog">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Reveal>
            <Reveal as="ul" delay={0.2} className="mt-10 space-y-3">
              {about.promises.map((promise) => (
                <li key={promise} className="flex items-center gap-3 font-medium">
                  <span className="grid size-6 place-items-center rounded-full bg-signal text-night">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  {promise}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

// Shows brand.photo when it's set; until then, a bold monogram card stands in.
function Portrait() {
  if (brand.photo) {
    return (
      <img
        src={brand.photo}
        width="800"
        height="1000"
        loading="lazy"
        decoding="async"
        alt={`Portrait of ${brand.owner}`}
        className="aspect-[4/5] w-full max-w-md rounded-[2rem] object-cover"
      />
    )
  }
  return (
    <div className="@container relative isolate aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-night-raised ring-1 ring-white/8">
      <div className="grid-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="breathe absolute -right-1/3 -bottom-1/3 -z-10 size-[130%] rounded-full bg-[radial-gradient(closest-side,rgba(255,106,43,0.45),transparent)]"
      />
      <div className="flex h-full flex-col justify-between p-8">
        <span aria-hidden="true" className="display text-[30cqw] leading-none">
          Dae<span className="text-signal">.</span>
        </span>
        <p className="text-sm leading-relaxed text-fog">
          {brand.owner}
          <br />
          Founder, {brand.name}
        </p>
      </div>
    </div>
  )
}
