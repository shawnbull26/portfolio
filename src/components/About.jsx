import { Check } from 'lucide-react'
import { about, brand } from '../data/site'
import { Eyebrow, Reveal, Sticker } from './ui'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-blush py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5">
            <Portrait />
            <Sticker tone="ink" rotate={-8} delay={0.3} className="absolute top-6 -left-3">
              Founder
            </Sticker>
            <Sticker tone="sky" rotate={6} delay={0.45} className="absolute -right-3 bottom-10">
              {brand.location}
            </Sticker>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow className="text-ink-soft">About</Eyebrow>
            </Reveal>
            <Reveal as="h2" id="about-title" delay={0.05} className="display mt-5 text-[clamp(3.4rem,9vw,7rem)]">
              Hi, I’m <span className="text-tangerine-deep">Dae.</span>
            </Reveal>
            <Reveal delay={0.12} className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Reveal>
            <Reveal as="ul" delay={0.2} className="mt-10 flex flex-wrap gap-2.5">
              {about.promises.map((promise) => (
                <li
                  key={promise}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold shadow-[0_1px_0_rgb(23_19_15/0.06)]"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-tangerine">
                    <Check aria-hidden="true" className="size-3" strokeWidth={3} />
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

// Shows brand.photo when it's set; until then, a bright monogram card stands in.
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
        className="aspect-[4/5] w-full rotate-2 rounded-[2.25rem] border-8 border-white object-cover shadow-[0_30px_60px_-30px_rgb(23_19_15/0.5)]"
      />
    )
  }
  return (
    <div className="@container relative aspect-[4/5] w-full rotate-2 overflow-hidden rounded-[2.25rem] border-8 border-white bg-sunshine shadow-[0_30px_60px_-30px_rgb(23_19_15/0.5)]">
      <svg aria-hidden="true" viewBox="0 0 400 500" fill="none" className="absolute inset-0 size-full">
        <path
          d="M-20 380 C 80 300, 200 420, 260 330 C 320 240, 200 180, 160 250 C 120 320, 260 360, 420 300"
          stroke="var(--color-tangerine)"
          strokeWidth="26"
          strokeLinecap="round"
        />
      </svg>
      <div className="relative flex h-full flex-col justify-between p-7">
        <span aria-hidden="true" className="display text-[38cqw] leading-[0.8]">
          Dae<span className="text-tangerine-deep">.</span>
        </span>
        <p className="text-sm font-semibold">
          {brand.owner}
          <br />
          <span className="font-normal text-ink/70">Founder, {brand.name}</span>
        </p>
      </div>
    </div>
  )
}
