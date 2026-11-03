import { useEffect, useRef, useState } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { samples } from '../data/site'
import { Reveal, SectionHead } from './ui'

// The one light section in the middle of the page, so the screenshots read clearly.
export default function Samples() {
  return (
    <section id="samples" aria-labelledby="samples-title" className="relative bg-cloud py-28 text-night sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHead
          id="samples-title"
          tone="light"
          eyebrow="Sample sites"
          title={
            <>
              See what yours <span className="text-signal-deep">could look like.</span>
            </>
          }
          intro="Two sample sites I designed and built for local service businesses. Each one has its own look, and both are made to turn visitors into calls."
        />

        <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-2">
          {samples.map((sample, i) => (
            <Reveal key={sample.id} delay={i * 0.12} y={40} amount={0.2}>
              <SampleCard sample={sample} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SampleCard({ sample }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const narrow = useNarrow()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // The phone drifts a little further than the browser, for a gentle sense of depth.
  const phoneY = useTransform(scrollYProgress, [0, 1], narrow ? [24, -16] : [60, -40])
  const host = new URL(sample.url).host

  return (
    <a
      ref={ref}
      href={sample.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-[2rem] bg-cloud-deep p-5 transition-colors duration-500 hover:bg-[#dedbd3] sm:p-8"
    >
      <div className="relative pr-[10%] pb-[12%]">
        <div className="overflow-hidden rounded-xl bg-white shadow-[0_30px_70px_-35px_rgba(0,0,0,0.45)] transition-transform duration-700 ease-(--ease-calm) group-hover:-translate-y-1.5">
          <div className="flex h-7 items-center gap-1.5 border-b border-black/5 bg-[#f3f3f1] px-3">
            <span className="size-2 rounded-full bg-black/12" />
            <span className="size-2 rounded-full bg-black/12" />
            <span className="size-2 rounded-full bg-black/12" />
            <span className="mx-auto hidden rounded-full bg-black/5 px-6 py-0.5 text-[0.65rem] text-black/45 sm:block">
              {host}
            </span>
          </div>
          <img
            src={sample.images.desktop}
            srcSet={`${sample.images.desktop} 960w, ${sample.images.desktopLarge} 1440w`}
            sizes="(min-width: 1024px) 560px, 90vw"
            width="1440"
            height="900"
            loading="lazy"
            decoding="async"
            alt={`Home page of the ${sample.name} sample site`}
            className="block h-auto w-full"
          />
        </div>
        <m.div
          style={reduce ? undefined : { y: phoneY }}
          className="absolute right-0 bottom-0 w-[24%] overflow-hidden rounded-[1.1rem] border-[4px] border-night bg-night shadow-[0_25px_50px_-20px_rgba(0,0,0,0.55)] sm:rounded-[1.5rem] sm:border-[5px]"
        >
          <img
            src={sample.images.mobile}
            width="390"
            height="844"
            loading="lazy"
            decoding="async"
            alt=""
            className="block h-auto w-full rounded-[0.8rem] sm:rounded-[1.1rem]"
          />
        </m.div>
      </div>

      <div className="mt-8 flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-smoke uppercase">{sample.industry}</p>
          <h3 className="display mt-3 text-3xl sm:text-4xl">{sample.name}</h3>
          <p className="mt-3 max-w-sm leading-relaxed text-smoke">{sample.note}</p>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-night text-cloud transition-colors duration-500 group-hover:bg-signal group-hover:text-night">
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 transition-transform duration-500 ease-(--ease-calm) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
      <p className="mt-6 text-sm font-medium text-night">
        View the live sample <span className="sr-only">(opens in a new tab)</span>
        <span className="ml-2 text-smoke">· Concept site, fictional business</span>
      </p>
    </a>
  )
}

// True on phone-width screens. Starts false so the prerendered markup matches the first client render.
function useNarrow() {
  const [narrow, setNarrow] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setNarrow(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return narrow
}
