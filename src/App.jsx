import { LazyMotion, MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Work from './components/Work'
import Approach from './components/Approach'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'

const loadFeatures = () => import('./motion-features').then((mod) => mod.default)

export default function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <div aria-hidden="true" className="grain" />
        <Nav />
        <main id="main">
          <Hero />
          <Intro />
          <Work />
          <Approach />
          <Pricing />
          <About />
        </main>
        <Contact />
      </MotionConfig>
    </LazyMotion>
  )
}
