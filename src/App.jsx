import { LazyMotion, MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Why from './components/Why'
import Included from './components/Included'
import Samples from './components/Samples'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Pricing from './components/Pricing'
import About from './components/About'
import Faq from './components/Faq'
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
          <Why />
          <Included />
          <Samples />
          <Testimonials />
          <Process />
          <Pricing />
          <About />
          <Faq />
        </main>
        <Contact />
      </MotionConfig>
    </LazyMotion>
  )
}
