import { brand } from '../data/site'
import { Wordmark } from './ui'

const updated = 'November 3, 2026'

const sections = [
  {
    title: 'What I collect',
    body: [
      'When you send the contact form, I receive what you type in: your name, email address, business name, the package you’re interested in and your message. That’s the only personal information this site collects.',
    ],
  },
  {
    title: 'How I use it',
    body: [
      'Only to reply to you and talk about your project. I don’t sell your information, share it with advertisers, or add you to a mailing list.',
      'The site is hosted by Netlify, which also receives and stores contact form submissions on my behalf.',
    ],
  },
  {
    title: 'Cookies and analytics',
    body: ['This site doesn’t use advertising cookies or tracking pixels, and it doesn’t currently use analytics.'],
  },
  {
    title: 'Keeping or deleting your information',
    body: [
      'I keep messages for as long as I need them to respond and for my business records. If you’d like me to delete what you’ve sent, just ask through the contact form and I’ll take care of it.',
    ],
  },
]

// Rendered to dist/privacy/index.html at build time; it uses no motion, so it needs no LazyMotion wrapper.
export default function Privacy() {
  return (
    <div className="relative min-h-[100svh]">
      <div aria-hidden="true" className="grain" />
      <header className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a href="/" aria-label={`${brand.name}, home`}>
          <Wordmark />
        </a>
        <a href="/" className="text-sm text-fog transition-colors duration-300 hover:text-cloud">
          Back to home
        </a>
      </header>
      <main id="main" className="mx-auto max-w-3xl px-5 pt-16 pb-28 sm:px-8 sm:pt-24">
        <h1 className="display text-[clamp(2.6rem,8vw,4.5rem)]">
          Privacy<span className="text-signal">.</span>
        </h1>
        <p className="mt-6 text-fog">Last updated {updated}</p>
        <p className="mt-10 text-lg leading-relaxed">
          {brand.name} is run by {brand.owner} in {brand.location}. This page explains, in plain language, what happens
          to the information you share through this site.
        </p>
        {sections.map((section) => (
          <section key={section.title} className="mt-12 border-t border-white/8 pt-10">
            <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
            {section.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-fog">
                {p}
              </p>
            ))}
          </section>
        ))}
        <p className="mt-16 border-t border-white/8 pt-10 leading-relaxed text-fog">
          Questions about this policy? <a href="/#contact" className="text-cloud underline decoration-signal underline-offset-4">Send me a message</a>.
        </p>
      </main>
    </div>
  )
}
