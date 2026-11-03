import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { heroFacts, heroTrades, spotsText } from '../data/site'
import { Button, Label } from './ui'

// Hero entrances are CSS (see index.css) so the prerendered page animates before JS arrives.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div aria-hidden="true" className="blueprint fade-edges absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-6">
          <p
            className="anim-fade-up inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-paper-light px-3.5 py-1.5 text-xs font-semibold"
            style={{ '--d': '0.05s' }}
          >
            <span aria-hidden="true" className="relative flex size-2">
              <span className="ping absolute inset-0 rounded-full bg-marigold" />
              <span className="relative size-2 rounded-full bg-marigold" />
            </span>
            Founding-client rates · {spotsText}
          </p>

          <div className="anim-fade-up mt-8" style={{ '--d': '0.1s' }}>
            <Label className="text-pencil">Web design for local businesses</Label>
          </div>

          <h1 className="display mt-5 text-[clamp(2.9rem,6.4vw,5.6rem)]">
            <span className="line-mask">
              <span style={{ '--d': '0.1s' }}>Let’s put your</span>
            </span>{' '}
            <span className="line-mask">
              <span style={{ '--d': '0.2s' }}>
                <Typed words={heroTrades} />
              </span>
            </span>{' '}
            <span className="line-mask">
              <span style={{ '--d': '0.3s' }}>
                business <span className="marker">online.</span>
              </span>
            </span>
          </h1>

          <p className="anim-fade-up mt-7 max-w-lg text-lg leading-relaxed text-slate" style={{ '--d': '0.45s' }}>
            I build websites for local businesses that don’t have one yet, so people searching for what you do can
            find you and call.
          </p>

          <div className="anim-fade-up mt-9 flex flex-wrap items-center gap-3" style={{ '--d': '0.55s' }}>
            <Button href="#contact">Get a free quote</Button>
            <Button href="#process" variant="outline">
              How it works
            </Button>
          </div>

          <ul
            className="anim-fade-up mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.78rem] font-medium text-slate"
            style={{ '--d': '0.65s' }}
          >
            {heroFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-1.5">
                <Check aria-hidden="true" className="size-3.5 text-pencil" strokeWidth={3} />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <Blueprint />
        </div>
      </div>
    </section>
  )
}

// Types and deletes each word in turn, like someone filling in the blank. Starts on the last word
// ("local") so the prerendered page, search engines and no-JS visitors read a complete sentence.
function Typed({ words }) {
  const [index, setIndex] = useState(words.length - 1)
  const [text, setText] = useState(words[words.length - 1])
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const word = words[index]
    let delay = deleting ? 45 : 85
    if (!deleting && text === word) delay = 1800
    if (deleting && text === '') delay = 250
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  // A fixed width (the longest word) keeps the headline from reflowing as letters change.
  const width = `${Math.max(...words.map((w) => w.length)) + 1}ch`
  return (
    <span className="inline-block font-mono font-medium tracking-[-0.06em] text-pencil" style={{ minWidth: width }}>
      {text}
      <span aria-hidden="true" className="caret ml-0.5 inline-block h-[0.8em] w-[0.08em] translate-y-[0.08em] bg-pencil" />
    </span>
  )
}

// A line drawing of the visitor's future website, with handwritten notes on what each part does for them.
function Blueprint() {
  const draw = (d) => ({ pathLength: 1, className: 'anim-draw', style: { '--d': `${d * 0.5}s` } })
  const fill = (d) => ({ className: 'anim-fade-in', style: { '--d': `${d * 0.5}s` } })
  const sans = 'Inter Tight Variable, sans-serif'
  return (
    <div className="relative mx-auto max-w-xl pb-10 lg:pb-0">
      <p className="label mb-3 text-pencil/80" aria-hidden="true">
        Fig. 01 · Your website, drawn up
      </p>
      <svg
        viewBox="0 0 560 420"
        fill="none"
        role="img"
        aria-label="A sketch of a small-business website: a header with a big call button, a headline, photos of your work, customer reviews and three services."
        className="w-full overflow-visible drop-shadow-[0_30px_40px_rgb(18_48_107/0.12)]"
      >
        <rect x="10" y="10" width="540" height="400" rx="16" fill="#fbfaf6" {...fill(0.2)} />
        <rect x="10" y="10" width="540" height="400" rx="16" stroke="#12306b" strokeWidth="2" {...draw(0.2)} />
        <path d="M10 46 H550" stroke="#12306b" strokeWidth="1.5" {...draw(0.4)} />
        {[32, 48, 64].map((x) => (
          <circle key={x} cx={x} cy="28" r="4.5" stroke="#12306b" strokeWidth="1.5" {...draw(0.5)} />
        ))}
        <rect x="200" y="20" width="160" height="16" rx="8" fill="#12306b" fillOpacity="0.07" {...fill(0.6)} />

        {/* Header: logo, links and the call button */}
        <rect x="30" y="62" width="74" height="20" rx="5" fill="#12306b" {...fill(0.8)} />
        <path d="M250 72 H290 M305 72 H345" stroke="#56627d" strokeWidth="3" strokeLinecap="round" {...draw(0.8)} />
        <rect x="384" y="58" width="146" height="30" rx="15" fill="#f5b70a" {...fill(1.4)} />
        <text x="457" y="77" textAnchor="middle" fontSize="12" fontWeight="700" fill="#12306b" fontFamily={sans}>
          Call now
        </text>

        {/* Headline, copy and button */}
        <rect x="30" y="112" width="240" height="22" rx="5" fill="#12306b" {...fill(0.9)} />
        <rect x="30" y="142" width="180" height="22" rx="5" fill="#12306b" {...fill(1)} />
        <path d="M30 182 H260 M30 196 H220" stroke="#56627d" strokeWidth="4" strokeLinecap="round" {...draw(1.05)} />
        <rect x="30" y="216" width="124" height="34" rx="17" fill="#2453c4" {...fill(1.2)} />
        <text x="92" y="238" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily={sans}>
          Book a visit
        </text>

        {/* Photo of the work */}
        <rect
          x="300"
          y="108"
          width="230"
          height="146"
          rx="12"
          stroke="#2453c4"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          fill="#2453c4"
          fillOpacity="0.05"
          {...fill(0.9)}
        />
        <path d="M300 108 L530 254 M530 108 L300 254" stroke="#2453c4" strokeOpacity="0.35" strokeWidth="1" {...draw(1)} />
        <circle cx="415" cy="181" r="22" fill="#fbfaf6" stroke="#2453c4" strokeWidth="1.5" {...fill(1.1)} />
        <path d="M405 186 L412 178 L419 184 L425 176 L432 186 Z" stroke="#2453c4" strokeWidth="1.5" strokeLinejoin="round" {...draw(1.2)} />

        {/* Reviews */}
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M${38 + i * 22} 272 l3.5 7 7.7 1.1 -5.6 5.4 1.3 7.7 -6.9 -3.6 -6.9 3.6 1.3 -7.7 -5.6 -5.4 7.7 -1.1 z`}
            fill="#f5b70a"
            {...fill(1.6 + i * 0.06)}
          />
        ))}
        <path d="M152 284 H260" stroke="#56627d" strokeWidth="4" strokeLinecap="round" {...draw(1.7)} />

        {/* Three services */}
        {[30, 200, 370].map((x, i) => (
          <g key={x}>
            <rect x={x} y="312" width="160" height="78" rx="12" stroke="#12306b" strokeWidth="1.5" {...draw(1.3 + i * 0.1)} />
            <circle cx={x + 26} cy="338" r="11" fill="#2453c4" fillOpacity="0.15" {...fill(1.5 + i * 0.1)} />
            <path
              d={`M${x + 16} 364 H${x + 130} M${x + 16} 376 H${x + 100}`}
              stroke="#56627d"
              strokeWidth="3.5"
              strokeLinecap="round"
              {...draw(1.5 + i * 0.1)}
            />
          </g>
        ))}
      </svg>

      {/* The phone version, overlapping the corner */}
      <svg
        viewBox="0 0 120 230"
        fill="none"
        aria-hidden="true"
        className="anim-fade-up absolute -right-2 -bottom-2 w-[22%] drop-shadow-[0_20px_30px_rgb(18_48_107/0.2)] sm:-right-6 lg:-bottom-10"
        style={{ '--d': '0.9s' }}
      >
        <rect x="4" y="4" width="112" height="222" rx="20" fill="#12306b" />
        <rect x="11" y="16" width="98" height="198" rx="12" fill="#fbfaf6" />
        <rect x="20" y="30" width="40" height="10" rx="3" fill="#12306b" />
        <rect x="20" y="56" width="78" height="12" rx="3" fill="#12306b" />
        <rect x="20" y="74" width="56" height="12" rx="3" fill="#12306b" />
        <rect x="20" y="98" width="80" height="26" rx="13" fill="#f5b70a" />
        <rect x="20" y="134" width="80" height="50" rx="8" fill="#2453c4" fillOpacity="0.12" />
        <path d="M20 196 H90" stroke="#56627d" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Handwritten notes, pointing at the parts that win customers */}
      <HandNote className="top-[-9%] right-[-2%] sm:right-[0%]" delay={1.1} rotate={4} arrow="down">
        your number, big &amp; tappable
      </HandNote>
      <HandNote className="right-[24%] -bottom-6 hidden sm:flex lg:-bottom-14" delay={1.5} rotate={-3} arrow="right">
        perfect on phones
      </HandNote>
    </div>
  )
}

function HandNote({ children, className = '', delay, rotate, arrow }) {
  const arrows = {
    down: 'M40 4 C 46 16, 44 30, 30 42 M30 42 L 31 30 M30 42 L 41 38',
    up: 'M8 44 C 4 30, 10 14, 26 6 M26 6 L 14 6 M26 6 L 22 17',
    right: 'M4 30 C 20 40, 40 38, 56 22 M56 22 L 44 22 M56 22 L 54 34',
    left: 'M56 30 C 40 40, 20 38, 4 22 M4 22 L 16 22 M4 22 L 6 34',
  }
  return (
    <span
      aria-hidden="true"
      className={`anim-pop pointer-events-none absolute flex items-end gap-1 text-pencil ${className}`}
      style={{ '--d': `${delay}s`, rotate: `${rotate}deg` }}
    >
      {(arrow === 'up' || arrow === 'left') && <NoteArrow d={arrows[arrow]} />}
      <span className="hand rounded-md bg-paper/80 px-1 text-[1.35rem] sm:text-2xl">{children}</span>
      {(arrow === 'down' || arrow === 'right') && <NoteArrow d={arrows[arrow]} />}
    </span>
  )
}

function NoteArrow({ d }) {
  return (
    <svg viewBox="0 0 60 48" fill="none" className="h-9 w-11 shrink-0">
      <path d={d} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
