import { LazyMotion, MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Starting from './components/Starting'
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
        <Nav />
        <main id="main">
          <Hero />
          <Starting />
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
