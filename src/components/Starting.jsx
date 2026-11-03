import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { startingPoints } from '../data/site'
import { Button, PencilLine, Reveal, SectionHead, calm } from './ui'

// Each answer preselects the matching option in the contact form.
const choose = (name) => window.dispatchEvent(new CustomEvent('choose-package', { detail: name }))

export default function Starting() {
  const [active, setActive] = useState(startingPoints[0].id)
  const current = startingPoints.find((p) => p.id === active)

  return (
    <section id="start" aria-labelledby="start-title" className="relative bg-paper-light py-24 sm:py-32">
      <PencilLine className="absolute inset-x-0 top-0 h-16 w-full" d="M0 60 C 200 10, 380 100, 600 50 S 1000 20, 1200 70" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHead
            id="start-title"
            label="Start here"
            title={
              <>
                Where are you <span className="marker">starting from?</span>
              </>
            }
            intro="Every business starts somewhere different. Pick the one that sounds like you, and I’ll tell you how we’d get you online."
          />
        </div>

        <div className="lg:col-span-7">
          <Reveal as="ul" delay={0.1} role="list" className="space-y-2">
            {startingPoints.map((point) => {
              const on = point.id === active
              return (
                <li key={point.id}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(point.id)}
                    className={`group flex w-full flex-wrap items-baseline gap-x-4 gap-y-1 rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${
                      on ? 'bg-navy text-paper' : 'hover:bg-paper-deep/70'
                    }`}
                  >
                    <ChevronRight
                      aria-hidden="true"
                      className={`size-6 shrink-0 self-center transition-transform duration-500 ease-(--ease-pop) ${
                        on ? 'rotate-90 text-marigold' : 'text-pencil group-hover:translate-x-1'
                      }`}
                      strokeWidth={3}
                    />
                    <span className="display text-[clamp(1.6rem,3.4vw,2.5rem)]">{point.label}</span>
                    <span className={`hand text-xl ${on ? 'text-marigold-soft' : 'text-pencil'}`}>— {point.note}</span>
                  </button>
                </li>
              )
            })}
          </Reveal>

          <div className="mt-6 min-h-[11rem] rounded-2xl border-[1.5px] border-dashed border-pencil/40 p-6 sm:p-8" aria-live="polite">
            <AnimatePresence mode="wait">
              <m.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: calm }}
              >
                <p className="label text-pencil">Here’s the plan</p>
                <p className="mt-3 max-w-xl text-lg leading-relaxed">{current.text}</p>
                <Button href="#contact" variant="navy" className="mt-6" onClick={() => choose(current.choice)}>
                  That’s me, let’s talk
                </Button>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
