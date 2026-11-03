import { useId, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/site'
import { Button, Reveal, SectionHead, calm } from './ui'

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative bg-paper-light py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHead
            id="faq-title"
            label="Questions"
            title={
              <>
                New to websites? <span className="marker">Good.</span>
              </>
            }
            intro="The questions business owners tend to ask before getting their first website."
          />
          <Reveal delay={0.2} className="mt-10">
            <Button href="#contact" variant="outline">
              Ask me anything
            </Button>
          </Reveal>
        </div>

        <Reveal as="ul" delay={0.1} className="border-t-[1.5px] border-navy lg:col-span-7">
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
    <li className="border-b border-navy/15">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-bold tracking-tight"
        >
          {item.q}
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-full border-[1.5px] transition-colors duration-300 ${
              open ? 'border-marigold bg-marigold' : 'border-navy/25 group-hover:border-navy'
            }`}
          >
            <Plus
              aria-hidden="true"
              className={`size-4 transition-transform duration-500 ease-(--ease-pop) ${open ? 'rotate-45' : ''}`}
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
            transition={{ duration: 0.5, ease: calm }}
            className="overflow-hidden"
          >
            <p className="max-w-xl pb-6 leading-relaxed text-slate">{item.a}</p>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  )
}
