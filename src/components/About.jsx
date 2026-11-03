import { person, principles } from '../data/site'
import { Eyebrow, Reveal, Rule } from './ui'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow index="05" className="text-ink-mute">
                About
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.2} className="mt-12 hidden lg:block">
              <Portrait />
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal
              as="h2"
              id="about-title"
              className="font-serif text-[clamp(2.4rem,5.6vw,4.8rem)] leading-[1.02] tracking-[-0.02em]"
            >
              I'm Daeshawn. <span className="text-ink-mute italic">I make good businesses easy to trust.</span>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 grid gap-6 text-lg leading-relaxed text-ink-soft md:grid-cols-2 md:gap-10">
              <p>
                I'm a web designer and developer in {person.location}. I care most about the businesses that keep a
                neighborhood running: the detailer who shows up on a Saturday, the cleaning crew you trust with a key,
                the contractor everyone's neighbor recommends.
              </p>
              <p>
                They are rarely short on skill. What they're often missing is a website that does that reputation
                justice. Getting that right, with care and without the agency price tag, is the work I enjoy most.
              </p>
              <p className="md:col-span-2">
                I'm taking on my first client projects now. That means every site gets my full attention, from the first
                call to well after launch, and you work directly with the person building it.
              </p>
            </Reveal>

            <ul className="mt-20 space-y-0">
              {principles.map((item, i) => (
                <li key={item.title}>
                  <Rule className="text-ink" delay={i * 0.1} />
                  <Reveal delay={0.1 + i * 0.1} y={16} className="grid gap-2 py-7 md:grid-cols-2 md:gap-10">
                    <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em]">{item.title}</h3>
                    <p className="leading-relaxed text-ink-mute">{item.text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// Shows person.photo when it's set; until then, a typographic monogram stands in.
function Portrait() {
  if (person.photo) {
    return (
      <img
        src={person.photo}
        width="800"
        height="1000"
        loading="lazy"
        decoding="async"
        alt={`Portrait of ${person.name}`}
        className="aspect-[4/5] w-full max-w-[15rem] rounded-[1.5rem] object-cover"
      />
    )
  }
  return (
    <div className="relative aspect-[4/5] w-full max-w-[15rem] overflow-hidden rounded-[1.5rem] bg-ink text-paper">
      <div
        aria-hidden="true"
        className="breathe absolute -right-1/3 -bottom-1/3 size-[140%] rounded-full bg-[radial-gradient(closest-side,rgba(180,83,47,0.55),transparent)]"
      />
      <div className="relative flex h-full flex-col justify-between p-6">
        <span aria-hidden="true" className="font-serif text-7xl leading-none italic">
          db
        </span>
        <p className="text-xs leading-relaxed text-paper/70">
          {person.name}
          <br />
          {person.role}
        </p>
      </div>
    </div>
  )
}
