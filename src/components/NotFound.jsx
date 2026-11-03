import { Button, Wordmark } from './ui'

// Rendered to dist/404.html at build time; it uses no motion, so it needs no LazyMotion wrapper.
export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden bg-blush">
            <svg aria-hidden="true" viewBox="0 0 300 600" fill="none" className="pointer-events-none absolute top-[8%] -right-24 h-[70%]">
        <path
          pathLength="1"
          className="anim-draw"
          d="M340 60 C 180 40, 60 130, 110 240 C 150 320, 270 290, 240 210 C 210 130, 70 180, 80 300 C 90 420, 230 470, 330 520"
          stroke="var(--color-tangerine)"
          strokeWidth="22"
          strokeLinecap="round"
        />
      </svg>
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8 sm:px-8 lg:px-12">
        <a href="/">
          <Wordmark />
        </a>
        <div className="my-auto py-16">
          <h1 className="display anim-fade-up text-[clamp(3.6rem,12vw,9rem)] text-tangerine-deep">
            This page <span className="text-ink">wandered off.</span>
          </h1>
          <p className="anim-fade-up mt-8 max-w-md text-lg leading-relaxed text-ink-soft" style={{ '--d': '0.15s' }}>
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
