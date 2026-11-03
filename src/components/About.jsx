import { Check } from 'lucide-react'
import { about, brand } from '../data/site'
import { Label, Note, Reveal } from './ui'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-sm lg:col-span-5">
            <Portrait />
            <Note arrow="left" rotate={-5} delay={0.4} showFrom="sm" className="absolute bottom-16 sm:-right-24">
              that’s me!
            </Note>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Label className="text-pencil">About</Label>
            </Reveal>
            <Reveal as="h2" id="about-title" delay={0.05} className="display mt-5 text-[clamp(2.8rem,7vw,5.4rem)]">
              Hi, I’m <span className="marker">Dae.</span>
            </Reveal>
            <Reveal delay={0.12} className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Reveal>
            <Reveal as="ul" delay={0.2} className="mt-10 space-y-3">
              {about.promises.map((promise) => (
                <li key={promise} className="flex items-center gap-3 font-semibold">
                  <span className="grid size-6 place-items-center rounded-full bg-marigold">
                    <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
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

// Shows brand.photo when it's set; until then, a blueprint-style monogram card stands in.
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
        className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_30px_60px_-30px_rgb(18_48_107/0.5)]"
      />
    )
  }
  return (
    <div className="@container relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-navy text-paper shadow-[0_30px_60px_-30px_rgb(18_48_107/0.5)]">
      <div aria-hidden="true" className="blueprint-dark absolute inset-0" />
      <svg aria-hidden="true" viewBox="0 0 400 500" fill="none" className="absolute inset-0 size-full">
        <circle cx="200" cy="230" r="120" stroke="var(--color-pencil-light)" strokeOpacity="0.5" strokeDasharray="6 8" />
        <path d="M40 230 H360 M200 70 V390" stroke="var(--color-pencil-light)" strokeOpacity="0.3" />
      </svg>
      <div className="relative flex h-full flex-col justify-between p-7">
        <p className="label text-pencil-light">Fig. 04 · The designer</p>
        <span aria-hidden="true" className="display self-center text-[34cqw] leading-none">
          Dae<span className="text-marigold">.</span>
        </span>
        <p className="text-sm">
          <span className="font-semibold">{brand.owner}</span>
          <br />
          <span className="text-paper/70">Founder, {brand.name}</span>
        </p>
      </div>
    </div>
  )
}
