import { useEffect, useRef, useState } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { samples } from '../data/site'
import { Reveal, SectionHead } from './ui'

const notes = { apex: 'prices up front', lumen: 'calm & trustworthy' }

// A navy "blueprint" band so the screenshots glow against it.
export default function Samples() {
  return (
    <section id="samples" aria-labelledby="samples-title" className="relative overflow-hidden bg-navy py-24 text-paper sm:py-32">
      <div aria-hidden="true" className="blueprint-dark absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHead
          id="samples-title"
          tone="dark"
          label="Sample sites"
          title={
            <>
              See what yours <span className="text-marigold">could look like.</span>
            </>
          }
          intro="Two sample sites I designed and built for local service businesses. Each has its own personality, and both are made to turn visitors into calls."
        />

        <div className="mt-14 grid gap-8 sm:mt-20 lg:grid-cols-2">
          {samples.map((sample, i) => (
            <Reveal key={sample.id} delay={i * 0.12} y={40} amount={0.2}>
              <SampleCard sample={sample} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SampleCard({ sample, index }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const narrow = useNarrow()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // The phone drifts a little further than the browser, for a gentle sense of depth.
  const phoneY = useTransform(scrollYProgress, [0, 1], narrow ? [24, -16] : [60, -40])
  const host = new URL(sample.url).host

  return (
    <a ref={ref} href={sample.url} target="_blank" rel="noreferrer" className="group block">
      <div className="label mb-4 flex items-center justify-between text-pencil-light">
        <span>Fig. 0{index + 1}</span>
        <span className="hand text-xl tracking-normal text-marigold normal-case">{notes[sample.id]} ↘</span>
      </div>
      <div className="relative rounded-[1.75rem] border border-pencil-light/25 bg-navy-deep/60 p-5 transition-colors duration-500 group-hover:border-marigold/60 sm:p-7">
        <div className="relative pr-[10%] pb-[12%]">
          <div className="overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)] transition-transform duration-700 ease-(--ease-calm) group-hover:-translate-y-1.5">
            <div className="flex h-7 items-center gap-1.5 border-b border-black/5 bg-[#f3f3f1] px-3">
              <span className="size-2 rounded-full bg-black/15" />
              <span className="size-2 rounded-full bg-black/15" />
              <span className="size-2 rounded-full bg-black/15" />
              <span className="mx-auto hidden rounded-full bg-black/5 px-6 py-0.5 text-[0.65rem] text-black/50 sm:block">
                {host}
              </span>
            </div>
            <img
              src={sample.images.desktop}
              srcSet={`${sample.images.desktopSmall} 640w, ${sample.images.desktop} 960w, ${sample.images.desktopLarge} 1440w`}
              sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 80vw"
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
            className="absolute right-0 bottom-0 w-[24%] overflow-hidden rounded-[1.1rem] border-[4px] border-paper bg-paper shadow-[0_25px_50px_-20px_rgb(0_0_0/0.6)] sm:rounded-[1.5rem] sm:border-[5px]"
          >
            <img
              src={sample.images.mobile}
              srcSet={`${sample.images.mobileSmall} 260w, ${sample.images.mobile} 390w`}
              sizes="(min-width: 1280px) 130px, (min-width: 1024px) 10vw, 20vw"
              width="390"
              height="844"
              loading="lazy"
              decoding="async"
              alt=""
              className="block h-auto w-full rounded-[0.8rem] sm:rounded-[1.1rem]"
            />
          </m.div>
        </div>

        <div className="mt-6 flex items-end justify-between gap-6 border-t border-pencil-light/20 pt-6">
          <div>
            <p className="label text-pencil-light">{sample.industry}</p>
            <h3 className="display mt-2 text-3xl sm:text-4xl">{sample.name}</h3>
            <p className="mt-2 max-w-sm leading-relaxed text-paper/70">{sample.note}</p>
            <p className="mt-3 text-xs text-paper/55">
              Concept site, fictional business<span className="sr-only"> (opens the live sample in a new tab)</span>
            </p>
          </div>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-marigold text-navy transition-transform duration-500 ease-(--ease-pop) group-hover:scale-110 group-hover:rotate-45">
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </span>
        </div>
      </div>
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
