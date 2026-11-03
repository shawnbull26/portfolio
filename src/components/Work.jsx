import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { projects } from '../data/site'
import { Eyebrow, Reveal, calm } from './ui'

// Each case study borrows the personality of the site it presents.
const themes = {
  apex: {
    stage: 'bg-apex-900 text-[#e4ece3]',
    muted: 'text-apex-300',
    rule: 'border-white/10',
    accent: 'text-apex-lime',
    name: 'font-sans font-semibold tracking-[-0.04em] text-white',
    stat: 'font-sans font-semibold tracking-[-0.04em] text-apex-lime',
    phone: 'border-apex-950 bg-apex-950 ring-1 ring-apex-lime/20',
    badge: 'bg-apex-lime text-apex-950',
    toggle: 'border-white/20 text-white hover:border-apex-lime hover:text-apex-lime',
    sheen: true,
  },
  lumen: {
    stage: 'bg-lumen-cream text-lumen-ink ring-1 ring-ink/6',
    muted: 'text-[#565d66]',
    rule: 'border-lumen-ink/10',
    accent: 'text-lumen-leaf',
    name: 'font-serif italic tracking-[-0.02em] text-lumen-leaf',
    stat: 'font-serif tracking-[-0.02em] text-lumen-leaf',
    phone: 'border-lumen-ink bg-lumen-ink',
    badge: 'bg-lumen-leaf text-lumen-cream',
    toggle: 'border-lumen-ink/20 text-lumen-ink hover:border-lumen-leaf hover:text-lumen-leaf',
    sheen: false,
  },
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative pt-8 pb-28 sm:pb-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="02" className="text-ink-mute">
              Selected work
            </Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal
              as="h2"
              id="work-title"
              className="max-w-3xl font-serif text-[clamp(2.4rem,5.6vw,4.8rem)] leading-[1.02] tracking-[-0.02em]"
            >
              Two businesses. Two personalities. <span className="text-ink-mute italic">One goal: more calls.</span>
            </Reveal>
            <Reveal delay={0.15} as="p" className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Concept projects I designed and built end to end, each one shaped around how customers in that industry
              decide who to hire.
            </Reveal>
          </div>
        </div>

        <div className="mt-20 space-y-8 sm:mt-28 sm:space-y-12">
          {projects.map((project, i) => (
            <CaseStudy key={project.id} project={project} theme={themes[project.id]} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudy({ project, theme: t, flip }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const narrow = useNarrow()
  const [open, setOpen] = useState(false)
  const storyId = useId()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // The phone travels further than the browser, giving the pair a gentle sense of depth.
  // Phones get a smaller range so the mockups never drift out of their card.
  const desktopY = useTransform(scrollYProgress, [0, 1], narrow ? [12, -12] : [40, -40])
  const phoneY = useTransform(scrollYProgress, [0, 1], narrow ? [36, -24] : [100, -70])
  const host = new URL(project.url).host

  return (
    <Reveal as="article" y={48} amount={0.15} aria-labelledby={`${project.id}-title`}>
      <div ref={ref} className={`relative isolate overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] ${t.stage}`}>
        <Backdrop id={project.id} />

        <div className="grid gap-14 p-6 py-10 sm:p-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-16">
          <div className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
            <p className={`text-xs font-medium tracking-[0.18em] uppercase ${t.muted}`}>
              Case study {project.index} · {project.industry}
            </p>
            <h3
              id={`${project.id}-title`}
              className={`mt-5 text-[clamp(2.3rem,4.4vw,3.6rem)] leading-[1] ${t.name}`}
            >
              {project.name}
            </h3>
            <p className="mt-6 text-[1.05rem] leading-relaxed opacity-90">{project.description}</p>

            <dl className={`mt-10 border-t pt-6 ${t.rule}`}>
              <dt className={`text-xs font-medium tracking-[0.18em] uppercase ${t.muted}`}>The focus</dt>
              <dd className="mt-3 text-[0.95rem] leading-relaxed opacity-90">{project.focus}</dd>
              <dt className={`mt-8 text-xs font-medium tracking-[0.18em] uppercase ${t.muted}`}>
                The result <span className="tracking-normal normal-case">(Lighthouse, live site)</span>
              </dt>
              <dd className="mt-4 grid grid-cols-3 gap-4">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className={`text-4xl leading-none sm:text-[2.75rem] ${t.stat}`}>
                      {stat.value}
                      {stat.unit && <span className="ml-0.5 text-lg">{stat.unit}</span>}
                    </p>
                    <p className={`mt-2 text-xs leading-snug ${t.muted}`}>{stat.label}</p>
                  </div>
                ))}
              </dd>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={storyId}
                onClick={() => setOpen((v) => !v)}
                className={`group inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.95rem] font-medium transition-colors duration-500 ${t.toggle}`}
              >
                <Plus
                  aria-hidden="true"
                  className={`size-4 transition-transform duration-700 ease-(--ease-calm) ${open ? 'rotate-45' : ''}`}
                />
                {open ? 'Close case study' : 'Read the case study'}
              </button>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={`group inline-flex items-center gap-3 text-[0.95rem] font-medium ${t.accent}`}
              >
                <span className="relative pb-1">
                  View project
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px origin-left bg-current transition-transform duration-700 ease-(--ease-calm) group-hover:scale-x-[0.4]"
                  />
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-700 ease-(--ease-calm) group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <span className="sr-only">(opens the live {project.name} site in a new tab)</span>
              </a>
            </div>
            <p className={`mt-5 text-xs ${t.muted}`}>Concept project · fictional business</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className={`group relative order-first block lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : 'lg:order-none'}`}
          >
            <div className="relative pr-[9%] pb-[14%]">
              <m.div
                style={reduce ? undefined : { y: desktopY }}
                className="relative overflow-hidden rounded-lg bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] transition-transform duration-1000 ease-(--ease-calm) group-hover:scale-[1.015] sm:rounded-xl"
              >
                <div className="flex h-7 items-center gap-1.5 border-b border-black/5 bg-[#f3f3f1] px-3 sm:h-8">
                  <span className="size-2 rounded-full bg-black/12" />
                  <span className="size-2 rounded-full bg-black/12" />
                  <span className="size-2 rounded-full bg-black/12" />
                  <span className="mx-auto hidden rounded-full bg-black/5 px-8 py-0.5 text-[0.65rem] text-black/45 sm:block">
                    {host}
                  </span>
                </div>
                <img
                  src={project.images.desktop}
                  srcSet={`${project.images.desktop} 960w, ${project.images.desktopLarge} 1440w`}
                  sizes="(min-width: 1280px) 680px, (min-width: 1024px) 52vw, 90vw"
                  width="1440"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="block h-auto w-full"
                />
                {t.sheen && (
                  <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[1600ms] ease-(--ease-calm) group-hover:translate-x-full" />
                )}
                <span
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-30%] rounded-full px-5 py-2.5 text-sm font-medium opacity-0 shadow-lg transition-[opacity,translate] duration-700 ease-(--ease-calm) group-hover:-translate-y-1/2 group-hover:opacity-100 ${t.badge}`}
                >
                  View live site ↗
                </span>
              </m.div>

              <m.div
                style={reduce ? undefined : { y: phoneY }}
                className={`absolute bottom-0 w-[25%] overflow-hidden rounded-[1.1rem] border-[4px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:rounded-[1.6rem] sm:border-[6px] ${t.phone} right-0`}
              >
                <img
                  src={project.images.mobile}
                  width="390"
                  height="844"
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="block h-auto w-full rounded-[0.8rem] sm:rounded-[1.1rem]"
                />
              </m.div>
            </div>
          </a>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <m.div
              key="story"
              id={storyId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.9, ease: calm }}
              className="overflow-hidden"
            >
              <Story project={project} theme={t} />
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

function Story({ project, theme: t }) {
  const { problem, decisions, next } = project.story
  return (
    <div className="px-6 pb-12 sm:px-12 lg:px-16 lg:pb-16">
      <div className={`grid gap-12 border-t pt-12 lg:grid-cols-12 lg:gap-10 ${t.rule}`}>
        <div className="lg:col-span-4">
          <h4 className={`text-xs font-medium tracking-[0.18em] uppercase ${t.muted}`}>The problem</h4>
          <p className="mt-4 text-lg leading-relaxed">{problem}</p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <h4 className={`text-xs font-medium tracking-[0.18em] uppercase ${t.muted}`}>What I did</h4>
          <ol className="mt-4 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {decisions.map((d, i) => (
              <li key={d.title}>
                <p className={`text-sm ${t.accent}`}>0{i + 1}</p>
                <h5 className="mt-2 font-medium">{d.title}</h5>
                <p className="mt-2 text-[0.95rem] leading-relaxed opacity-80">{d.text}</p>
              </li>
            ))}
          </ol>
          <p className={`mt-10 border-t pt-6 text-[0.95rem] leading-relaxed ${t.rule} ${t.muted}`}>{next}</p>
        </div>
      </div>
    </div>
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

// Quiet environmental light, tuned to each brand.
function Backdrop({ id }) {
  if (id === 'apex') {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/3 -right-1/4 size-[60rem] rounded-full bg-[radial-gradient(closest-side,rgba(200,236,122,0.14),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.03)_50%,transparent_60%)]" />
      </div>
    )
  }
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="breathe absolute -top-1/4 -left-1/5 size-[46rem] rounded-full bg-[radial-gradient(closest-side,var(--color-lumen-lime),transparent)]" />
      <div
        className="breathe absolute -right-1/5 -bottom-1/3 size-[42rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,154,128,0.35),transparent)]"
        style={{ animationDelay: '-4.5s' }}
      />
    </div>
  )
}
