import { CalendarCheck, LayoutTemplate, PenLine, Search, ShieldCheck, Smartphone } from 'lucide-react'
import { included } from '../data/site'
import { Button, Reveal, SectionHead } from './ui'

const icons = [LayoutTemplate, Smartphone, CalendarCheck, Search, PenLine, ShieldCheck]

export default function Included() {
  return (
    <section id="included" aria-labelledby="included-title" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            id="included-title"
            eyebrow="What you get"
            title={
              <>
                A website that works <span className="text-signal">as hard as you do.</span>
              </>
            }
            intro="Everything a local business needs to look professional and turn visitors into calls, handled from start to finish."
          />
          <Reveal delay={0.2} className="shrink-0">
            <Button href="#pricing" variant="ghost" className="text-cloud">
              Compare packages
            </Button>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 0.08}
                y={24}
                className="group rounded-3xl border border-white/8 bg-night-raised p-8 transition-colors duration-500 hover:border-signal/40"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-signal/12 text-signal transition-colors duration-500 group-hover:bg-signal group-hover:text-night">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-fog">{item.text}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
