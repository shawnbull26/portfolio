import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { person, projectTypes } from '../data/site'
import { Eyebrow, Reveal, calm } from './ui'

const encode = (data) => new URLSearchParams(data).toString()

export default function Contact() {
  return (
    <div id="contact-zone" className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="drift-a pointer-events-none absolute -top-1/3 -right-1/4 size-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgba(180,83,47,0.28),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-10 sm:px-8 sm:pt-40 lg:px-12">
        <section id="contact" aria-labelledby="contact-title" className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index="06" className="text-paper/60">
                Contact
              </Eyebrow>
            </Reveal>
            <Reveal
              as="h2"
              id="contact-title"
              delay={0.1}
              className="mt-10 font-serif text-[clamp(2.6rem,6vw,5.2rem)] leading-[1] tracking-[-0.02em]"
            >
              Tell me about <span className="text-ember-soft italic">your business.</span>
            </Reveal>
            <Reveal delay={0.2} as="p" className="mt-8 max-w-sm text-lg leading-relaxed text-paper/70">
              A few sentences is plenty. Every message gets a personal reply from me with honest thoughts and clear
              next steps. No pressure, and no jargon.
            </Reveal>
          </div>

          <Reveal delay={0.25} className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </Reveal>
        </section>

        <footer className="mt-28 flex flex-col gap-6 border-t border-paper/10 pt-8 text-sm text-paper/55 sm:mt-40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {person.name} · {person.role} · {person.location}
          </p>
          <div className="flex items-center gap-8">
            <a href={person.github} target="_blank" rel="noreferrer" className="transition-colors duration-500 hover:text-paper">
              GitHub
            </a>
            <a href="#top" className="group inline-flex items-center gap-2 transition-colors duration-500 hover:text-paper">
              Back to top
              <ArrowUp
                aria-hidden="true"
                className="size-3.5 transition-transform duration-700 ease-(--ease-calm) group-hover:-translate-y-1"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
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
            <p className="font-serif text-5xl leading-tight tracking-[-0.02em]">
              Thank you. <span className="text-ember-soft italic">I'll be in touch soon.</span>
            </p>
            <p className="mt-6 max-w-sm text-paper/70">Your message is in, and you'll hear back from me personally.</p>
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
            className="space-y-9"
          >
            <input type="hidden" name="form-name" value="project" />
            <p className="hidden">
              <label>
                Leave this empty: <input name="bot-field" />
              </label>
            </p>

            <fieldset>
              <legend className="mb-4 text-sm text-paper/60">I'm interested in</legend>
              <input type="hidden" name="project-type" value={type} />
              <div className="flex flex-wrap gap-2.5">
                {projectTypes.map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-500 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ember-soft ${
                      type === option
                        ? 'border-paper bg-paper text-ink'
                        : 'border-paper/20 text-paper/80 hover:border-paper/50'
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

            <div className="grid gap-9 sm:grid-cols-2">
              <Field label="Your name" name="name" autoComplete="name" error={errors.name} />
              <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} />
            </div>
            <Field label="Business name and what you do" name="business" autoComplete="organization" optional />
            <Field label="What would you like your website to do for you?" name="message" textarea error={errors.message} />

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-4 rounded-full bg-paper py-2.5 pr-2.5 pl-6 text-[0.95rem] font-medium text-ink transition-colors duration-500 hover:bg-white disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <span className="relative grid size-9 place-items-center overflow-hidden rounded-full bg-ink/8">
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
                <p role="alert" className="text-sm text-ember-soft">
                  That didn't go through. Please try again in a moment.
                </p>
              )}
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  )
}

// Underline-only fields: the line warms on focus, and errors fade in beneath.
function Field({ label, name, type = 'text', textarea = false, optional = false, error, ...props }) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const base = `peer block w-full resize-none border-0 border-b bg-transparent px-0 pt-1 pb-3 text-lg text-paper transition-colors duration-500 focus:ring-0 focus:outline-none ${
    error ? 'border-ember-soft/70' : 'border-paper/20 focus:border-paper'
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
      <div className="relative">
        <label htmlFor={id} className="mb-2 block text-sm text-paper/60">
          {label}
          {optional && <span className="text-paper/40"> (optional)</span>}
        </label>
        {textarea ? <textarea rows={3} {...shared} /> : <input type={type} {...shared} />}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember-soft transition-transform duration-700 ease-(--ease-calm) peer-focus:scale-x-100"
        />
      </div>
      <AnimatePresence initial={false}>
        {error && (
          <m.p
            key={error}
            id={errorId}
            className="mt-2 text-sm text-ember-soft"
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
