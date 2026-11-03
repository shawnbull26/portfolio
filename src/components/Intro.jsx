import { Eyebrow, Reveal, Rule } from './ui'

const offers = [
  {
    title: 'Look established',
    text: 'A site that matches the quality of your work, so you never lose a job to someone who simply looks more professional.',
  },
  {
    title: 'Get more calls',
    text: 'Clear words, honest photos and a call or book button always within reach, especially on a phone.',
  },
  {
    title: 'Stay fast and findable',
    text: 'Pages that load in a blink, read well to Google, and stay simple for you to keep up to date.',
  },
]

export default function Intro() {
  return (
    <section id="intro" aria-labelledby="intro-title" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="01" className="text-ink-mute">
              What I do
            </Eyebrow>
          </Reveal>

          <div className="lg:col-span-9">
            <Reveal as="h2" id="intro-title" className="font-serif text-[clamp(2rem,4.6vw,3.9rem)] leading-[1.08] tracking-[-0.015em]" amount={0.5}>
              Most local business owners are excellent at what they do, and far too busy to think about their
              website. <span className="text-ink-mute italic">That part is my job.</span>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft">
              <p>
                I help local service businesses get websites that look professional, explain what they offer in plain
                language, and make it effortless for the right customers to reach out. No templates and no jargon, just
                a site built around how your customers actually decide.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-x-10 gap-y-14 sm:mt-32 md:grid-cols-3 lg:pl-[25%]">
          {offers.map((offer, i) => (
            <div key={offer.title}>
              <Rule className="mb-6 text-ink" delay={i * 0.12} />
              <Reveal delay={0.15 + i * 0.12} y={18}>
                <h3 className="text-[0.95rem] font-medium">{offer.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-mute">{offer.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
