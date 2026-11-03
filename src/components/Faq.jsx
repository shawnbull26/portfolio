import { useId, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/site'
import { Button, Reveal, SectionHead, Sticker, calm } from './ui'

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="relative lg:col-span-5">
          <SectionHead
            id="faq-title"
            eyebrow="Questions"
            title={
              <>
                New to websites? <span className="text-tangerine-deep">Good.</span>
              </>
            }
            intro="If you’ve never had a website before, you’re in the right place. These are the questions owners usually ask first."
          />
          <Reveal delay={0.2} className="mt-10">
            <Button href="#contact" variant="outline">
              Ask me anything
            </Button>
          </Reveal>
          <Sticker tone="bubblegum" rotate={-7} delay={0.4} className="absolute top-0 right-0 hidden lg:inline-flex">
            No silly questions
          </Sticker>
        </div>

        <Reveal as="ul" delay={0.1} className="space-y-3 lg:col-span-7">
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
    <li
      className={`rounded-[1.5rem] transition-colors duration-300 ${open ? 'bg-sunshine' : 'bg-white shadow-[0_1px_0_rgb(23_19_15/0.06)]'}`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-bold tracking-tight"
        >
          {item.q}
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
              open ? 'bg-ink text-cream' : 'bg-blush group-hover:bg-tangerine'
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
            <p className="max-w-xl px-6 pb-6 leading-relaxed text-ink/80">{item.a}</p>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  )
}
