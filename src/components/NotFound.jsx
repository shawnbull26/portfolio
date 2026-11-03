import { person } from '../data/site'
import { PrimaryButton } from './ui'

// Rendered to dist/404.html at build time; it uses no motion, so it needs no LazyMotion wrapper.
export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="grain" />
      <div
        aria-hidden="true"
        className="drift-a pointer-events-none absolute -top-[20%] -right-[15%] size-[70vmax] rounded-full bg-[radial-gradient(closest-side,var(--color-ember-soft),transparent)] opacity-70"
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        <a href="/" className="font-serif text-[1.35rem] leading-none tracking-tight">
          {person.name}
        </a>
        <h1 className="anim-fade-up mt-auto font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.025em]">
          This page <em className="text-ember">wandered off.</em>
        </h1>
        <p className="anim-fade-up mt-8 max-w-md text-lg leading-relaxed text-ink-soft" style={{ '--d': '0.2s' }}>
          The link may be old, or the address may have a typo. Everything else is right where you left it.
        </p>
        <div className="anim-fade-up mt-10 mb-auto" style={{ '--d': '0.35s' }}>
          <PrimaryButton href="/">Back to the homepage</PrimaryButton>
        </div>
      </div>
    </main>
  )
}
