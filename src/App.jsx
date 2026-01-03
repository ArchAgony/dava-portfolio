import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <footer className="py-16 md:py-24 flex items-center justify-center border-t border-glass-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-sm text-soft-gray">
            © 2026 Dava Ari Ardiansyah. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App