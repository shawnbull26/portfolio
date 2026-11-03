import { CalendarCheck, LayoutTemplate, PenLine, Search, ShieldCheck, Smartphone } from 'lucide-react'
import { included } from '../data/site'
import { Button, Reveal, SectionHead, Sticker } from './ui'

const icons = [LayoutTemplate, Smartphone, CalendarCheck, Search, PenLine, ShieldCheck]
const blobs = ['bg-sunshine', 'bg-sky', 'bg-bubblegum', 'bg-tangerine', 'bg-sky', 'bg-sunshine']

export default function Included() {
  return (
    <section id="included" aria-labelledby="included-title" className="relative bg-blush py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="relative">
            <SectionHead
              id="included-title"
              eyebrow="What you get"
              title={
                <>
                  A website that works <span className="text-tangerine-deep">as hard as you do.</span>
                </>
              }
              intro="Everything a local business needs to look professional and turn visitors into calls, handled from start to finish."
            />
            <Sticker tone="sky" rotate={8} delay={0.3} className="absolute top-4 right-0 hidden lg:inline-flex">
              All done for you
            </Sticker>
          </div>
          <Reveal delay={0.2} className="shrink-0">
            <Button href="#pricing" variant="outline">
              Compare packages
            </Button>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 0.08}
                y={24}
                className="group rounded-[2rem] bg-white p-8 shadow-[0_1px_0_rgb(23_19_15/0.06)] transition-transform duration-500 ease-(--ease-pop) hover:-translate-y-1.5 hover:-rotate-1"
              >
                <span
                  className={`grid size-14 place-items-center rounded-2xl transition-transform duration-500 ease-(--ease-pop) group-hover:scale-110 group-hover:rotate-6 ${blobs[i]}`}
                >
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-8 text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
