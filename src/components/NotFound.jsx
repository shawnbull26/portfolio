import { Button, Wordmark } from './ui'

// Rendered to dist/404.html at build time; it uses no motion, so it needs no LazyMotion wrapper.
export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="grain" />
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="drift-a pointer-events-none absolute -right-[20%] -bottom-[30%] size-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgba(255,106,43,0.28),transparent)]"
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8 sm:px-8 lg:px-12">
        <a href="/">
          <Wordmark />
        </a>
        <div className="my-auto py-16">
          <h1 className="display anim-fade-up text-[clamp(3rem,9vw,7.5rem)]">
            This page <span className="text-signal">wandered off.</span>
          </h1>
          <p className="anim-fade-up mt-8 max-w-md text-lg leading-relaxed text-fog" style={{ '--d': '0.15s' }}>
            The link may be old, or the address may have a typo. Everything else is right where you left it.
          </p>
          <div className="anim-fade-up mt-10" style={{ '--d': '0.3s' }}>
            <Button href="/">Back to the homepage</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
