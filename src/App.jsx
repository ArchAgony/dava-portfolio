import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
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
      <Contact />
      <footer className="py-8 px-6 border-t border-glass-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-sm text-soft-gray">
            © 2025 Nama Kamu. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App