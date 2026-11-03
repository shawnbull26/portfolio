import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowRight, ArrowUp, CalendarDays, Mail, Phone } from 'lucide-react'
import { brand, projectTypes } from '../data/site'
import { Label, Reveal, Wordmark, calm } from './ui'

const encode = (data) => new URLSearchParams(data).toString()

export default function Contact() {
  return (
    <>
      <div className="relative overflow-hidden bg-navy text-paper">
        <div aria-hidden="true" className="blueprint-dark absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
          <section id="contact" aria-labelledby="contact-title" className="grid gap-14 lg:grid-cols-12">
            <div className="relative lg:col-span-5 lg:pt-4">
              <Reveal>
                <Label className="text-pencil-light">Let’s talk</Label>
              </Reveal>
              <Reveal as="h2" id="contact-title" delay={0.1} className="display mt-5 text-[clamp(3rem,7vw,5.6rem)]">
                Ready to get <span className="text-marigold">found?</span>
              </Reveal>
              <Reveal delay={0.2} as="p" className="mt-7 max-w-sm text-lg leading-relaxed text-paper/75">
                Tell me a little about your business. A few sentences is enough. I’ll reply myself with a quote and
                what I’d suggest, and there’s no obligation to go ahead.
              </Reveal>
              <ContactOptions />
            </div>

            <Reveal
              delay={0.25}
              className="rounded-3xl bg-paper p-6 text-navy shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] sm:p-10 lg:col-span-7 lg:col-start-6"
            >
              <ContactForm />
            </Reveal>
          </section>
        </div>
      </div>

      <footer className="bg-navy-deep text-paper/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Wordmark inverted className="text-paper" />
            <span>
              © {new Date().getFullYear()} {brand.owner} · {brand.location}
            </span>
          </p>
          <div className="flex items-center gap-8">
            <a href="/privacy/" className="transition-colors duration-300 hover:text-paper">
              Privacy
            </a>
            <a href="#top" className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-paper">
              Back to top
              <ArrowUp
                aria-hidden="true"
                className="size-3.5 transition-transform duration-500 ease-(--ease-pop) group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

// Phone, email and booking links appear here only once they're set in brand (src/data/site.js).
function ContactOptions() {
  const options = [
    brand.booking && { icon: CalendarDays, label: 'Book a free 20-minute call', href: brand.booking, external: true },
    brand.phone && { icon: Phone, label: `Call or text ${brand.phone}`, href: `tel:${brand.phone.replace(/[^\d+]/g, '')}` },
    brand.email && { icon: Mail, label: brand.email, href: `mailto:${brand.email}` },
  ].filter(Boolean)
  if (!options.length) return null
  return (
    <Reveal as="ul" delay={0.3} className="mt-10 space-y-3">
      {options.map(({ icon: Icon, label, href, external }) => (
        <li key={href}>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="group inline-flex items-center gap-3 font-semibold"
          >
            <span className="grid size-10 place-items-center rounded-full bg-marigold text-navy transition-transform duration-300 ease-(--ease-pop) group-hover:scale-110">
              <Icon aria-hidden="true" className="size-4" />
            </span>
            {label}
          </a>
        </li>
      ))}
    </Reveal>
  )
}

const rules = {
  name: (v) => (v.trim() ? '' : 'Please tell me your name.'),
  email: (v) =>
    !v.trim() ? 'I need an email to reply to.' : /^\S+@\S+\.\S+$/.test(v.trim()) ? '' : 'That email looks incomplete.',
  message: (v) => (v.trim().length >= 10 ? '' : 'A sentence or two about what you need is plenty.'),
}

function validate(form) {
  const errors = {}
  for (const [name, check] of Object.entries(rules)) {
    const message = check(form.elements[name].value)
    if (message) errors[name] = message
  }
  return errors
}

function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [type, setType] = useState(projectTypes[0])
  const [errors, setErrors] = useState({})
  const [attempted, setAttempted] = useState(false)

  // Pricing cards preselect the package someone chose.
  useEffect(() => {
    const onChoose = (e) => projectTypes.includes(e.detail) && setType(e.detail)
    window.addEventListener('choose-package', onChoose)
    return () => window.removeEventListener('choose-package', onChoose)
  }, [])

  // After the first submit attempt, errors update as the visitor fixes them.
  const recheck = () => attempted && setErrors(validate(formRef.current))

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const found = validate(form)
    setAttempted(true)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      form.elements[first].focus()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(new FormData(form)),
      })
      if (!res.ok) throw new Error(res.statusText)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="relative min-h-[34rem]">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'sent' ? (
          <m.div
            key="sent"
            role="status"
            className="flex min-h-[34rem] flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: calm }}
          >
            <p className="display text-6xl">
              Thank you. <span className="marker">Talk soon.</span>
            </p>
            <p className="mt-6 max-w-sm text-slate">Your message is in. I’ll reply with a quote and what I’d suggest.</p>
          </m.div>
        ) : (
          <m.form
            key="form"
            ref={formRef}
            name="project"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            noValidate
            onSubmit={onSubmit}
            onChange={recheck}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.5, ease: calm } }}
            className="space-y-7"
          >
            <input type="hidden" name="form-name" value="project" />
            <p className="hidden">
              <label>
                Leave this empty: <input name="bot-field" />
              </label>
            </p>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold">I’m interested in</legend>
              <input type="hidden" name="project-type" value={type} />
              <div className="flex flex-wrap gap-2.5">
                {projectTypes.map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-500 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-pencil ${
                      type === option
                        ? 'border-navy bg-navy font-semibold text-paper'
                        : 'border-navy/20 bg-paper-light hover:border-navy/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="project-type-choice"
                      value={option}
                      checked={type === option}
                      onChange={() => setType(option)}
                      className="sr-only"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-7 sm:grid-cols-2">
              <Field label="Your name" name="name" autoComplete="name" error={errors.name} />
              <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} />
            </div>
            <Field label="Business name and what you do" name="business" autoComplete="organization" optional />
            <Field label="What would you like your website to do for you?" name="message" textarea error={errors.message} />

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-3 rounded-full bg-marigold py-1.5 pr-1.5 pl-6 text-[0.95rem] font-semibold text-navy shadow-[0_8px_20px_-10px_rgb(245_183_10/0.8)] transition-colors duration-300 hover:bg-marigold-soft disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <span className="relative grid size-9 place-items-center overflow-hidden rounded-full bg-navy text-paper">
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-700 ease-(--ease-calm) group-hover:translate-x-9"
                  />
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute size-4 -translate-x-9 transition-transform duration-700 ease-(--ease-calm) group-hover:translate-x-0"
                  />
                </span>
              </button>
              {status === 'error' && (
                <p role="alert" className="text-sm font-medium text-[#b42318]">
                  That didn’t go through. Please try again in a moment.
                </p>
              )}
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  )
}

// Rounded fields with a pencil-blue border on focus; errors fade in beneath.
function Field({ label, name, type = 'text', textarea = false, optional = false, error, ...props }) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const base = `block w-full resize-none rounded-xl border-[1.5px] bg-paper-light px-4 py-3 text-base text-navy transition-colors duration-300 focus:bg-white focus:outline-none ${
    error ? 'border-[#b42318]/60' : 'border-navy/15 focus:border-pencil'
  }`
  const shared = {
    id,
    name,
    className: base,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    'aria-required': optional ? undefined : true,
    ...props,
  }
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
        {optional && <span className="font-normal text-slate"> (optional)</span>}
      </label>
      {textarea ? <textarea rows={4} {...shared} /> : <input type={type} {...shared} />}
      <AnimatePresence initial={false}>
        {error && (
          <m.p
            key={error}
            id={errorId}
            className="mt-2 text-sm font-medium text-[#b42318]"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: calm }}
          >
            {error}
          </m.p>
        )}
      </AnimatePresence>
    </div>
  )
}
