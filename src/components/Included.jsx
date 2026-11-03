import { CalendarCheck, LayoutTemplate, PenLine, Search, ShieldCheck, Smartphone } from 'lucide-react'
import { included } from '../data/site'
import { Button, Reveal, SectionHead } from './ui'

const icons = [LayoutTemplate, Smartphone, CalendarCheck, Search, PenLine, ShieldCheck]

// Laid out like a spec sheet: numbered items on drafting paper, separated by fine rules.
export default function Included() {
  return (
    <section id="included" aria-labelledby="included-title" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="blueprint absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            id="included-title"
            label="What you get"
            title="What every site includes."
            intro="Design, writing help, setup and launch, all handled by me. You don’t need to hire anyone else or learn any software."
          />
          <Reveal delay={0.2} className="shrink-0">
            <Button href="#pricing" variant="outline">
              Compare packages
            </Button>
          </Reveal>
        </div>

        <ul className="mt-14 grid overflow-hidden rounded-3xl border-[1.5px] border-navy bg-paper-light sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 0.08}
                y={16}
                className="group relative border-navy/15 p-8 transition-colors duration-500 hover:bg-white max-sm:border-b sm:border-r sm:border-b sm:p-9 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(n+5)]:border-b-0 lg:[&:nth-child(n+4)]:border-b-0"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-pencil/10 text-pencil transition-colors duration-500 group-hover:bg-marigold group-hover:text-navy">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="label text-slate/70">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{item.text}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
