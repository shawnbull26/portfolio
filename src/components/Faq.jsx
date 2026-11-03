import { useId, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/site'
import { Button, Reveal, SectionHead, calm } from './ui'

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative bg-cloud py-28 text-night sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <SectionHead
            id="faq-title"
            tone="light"
            eyebrow="Questions"
            title={
              <>
                New to websites? <span className="text-signal-deep">Good.</span>
              </>
            }
            intro="If you’ve never had a website before, you’re in the right place. These are the questions owners usually ask first."
          />
          <Reveal delay={0.2} className="mt-10">
            <Button href="#contact" variant="ghost" className="text-night">
              Ask me anything
            </Button>
          </Reveal>
        </div>

        <Reveal as="ul" delay={0.1} className="border-t border-night/12 lg:col-span-7">
          {faqs.map((item) => (
            <Question key={item.q} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Question({ item }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <li className="border-b border-night/12">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-tight"
        >
          {item.q}
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
              open ? 'bg-signal text-night' : 'bg-night/6 group-hover:bg-night/12'
            }`}
          >
            <Plus
              aria-hidden="true"
              className={`size-4 transition-transform duration-500 ease-(--ease-calm) ${open ? 'rotate-45' : ''}`}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id={id}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: calm }}
            className="overflow-hidden"
          >
            <p className="max-w-xl pb-7 leading-relaxed text-smoke">{item.a}</p>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  )
}
