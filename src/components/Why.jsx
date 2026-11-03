import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { reasons } from '../data/site'
import { Eyebrow, Reveal, Sticker } from './ui'

const statement =
  'Great work spreads by word of mouth. Then people search for you. If nothing comes up, they call whoever does. Let’s make sure that’s you.'

const cardTones = ['bg-sunshine', 'bg-sky', 'bg-bubblegum']
const cardTilts = ['md:-rotate-2', 'md:rotate-1', 'md:-rotate-1']

export default function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow className="text-ink-soft">Why it matters</Eyebrow>
        </Reveal>
        <div className="relative">
          <FillText id="why-title" text={statement} />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
            <Sticker tone="tangerine" rotate={-8} className="absolute top-[12%] -left-2">
              Word of mouth ✓
            </Sticker>
            <Sticker tone="ink" rotate={6} delay={0.2} className="absolute right-[4%] -bottom-12">
              Found on Google ✓
            </Sticker>
          </div>
        </div>

        <ul className="mt-20 grid gap-5 sm:mt-24 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal
              as="li"
              key={reason.title}
              delay={i * 0.1}
              y={30}
              className={`rounded-[2rem] p-8 transition-transform duration-500 ease-(--ease-pop) hover:rotate-0 sm:p-9 ${cardTones[i]} ${cardTilts[i]}`}
            >
              <p className="display text-7xl">0{i + 1}</p>
              <h3 className="mt-8 text-xl font-bold tracking-tight">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/75">{reason.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Big statement whose words fill in from tangerine to ink (both readable) as it scrolls through the screen.
function FillText({ id, text }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')
  return (
    <h2
      ref={ref}
      id={id}
      className="fill-text mx-auto mt-6 max-w-5xl text-center font-display text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[1.02] font-bold tracking-[-0.02em] [font-stretch:85%]"
    >
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </h2>
  )
}

function Word({ progress, range, children }) {
  const color = useTransform(progress, range, ['rgb(232, 71, 11)', 'rgb(23, 19, 15)'])
  return <m.span style={{ color }}>{children} </m.span>
}
