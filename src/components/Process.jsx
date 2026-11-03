import { steps } from '../data/site'
import { Note, PencilLine, Reveal, SectionHead } from './ui'

const notes = ['20 minutes, no pressure', 'words included', 'the fun part', 'about a week in']

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHead
          id="process-title"
          label="How it works"
          align="center"
          title={
            <>
              First call to live site <span className="marker">in about a week.</span>
            </>
          }
          intro="You bring what you know about your business. I handle everything else, and keep you in the loop without the tech talk."
        />

        <div className="relative mt-16 sm:mt-24">
          {/* A hand-drawn path that links the four steps, drawn on as it scrolls into view. */}
          <PencilLine
            className="absolute top-3 left-0 hidden h-16 w-full lg:block"
            viewBox="0 0 1200 80"
            delay={0.2}
            d="M60 40 C 200 0, 260 80, 360 40 S 560 0, 660 40 S 860 80, 960 40 S 1100 10, 1140 40"
          />

          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={0.15 + i * 0.15} y={20} className="text-center">
                <span className="display relative mx-auto grid size-16 place-items-center rounded-full border-[1.5px] border-navy bg-paper text-2xl">
                  {i + 1}
                </span>
                <Note arrow="down" rotate={i % 2 ? 4 : -4} delay={0.6 + i * 0.15} className="mt-2 justify-center">
                  {notes[i]}
                </Note>
                <h3 className="display mt-3 text-3xl">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-slate">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
