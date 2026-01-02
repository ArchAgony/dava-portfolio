import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)
  const photoRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        photoRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="gradient-text">Tentang Saya</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
          <div ref={photoRef} className="w-full md:w-auto flex justify-center md:flex-shrink-0">
            <div className="glass rounded-2xl p-3 md:p-4 glow">
              <div className="w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-xl bg-gradient-to-br from-steel-blue/50 to-electric-blue/30 flex items-center justify-center">
                <span className="font-mono text-soft-gray text-sm">Foto 1:1</span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="w-full md:flex-1">
            <div className="glass rounded-2xl p-5 md:p-6 lg:p-8">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-off-white mb-4">
                Salam Kenal!
              </h3>

              <div className="space-y-4 text-soft-gray leading-relaxed text-sm md:text-base">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-glass-border">
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-glow" />
                    <span className="font-mono text-xs md:text-sm text-soft-gray">SMK Jurusan RPL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-electric-blue" />
                    <span className="font-mono text-xs md:text-sm text-soft-gray">Web Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-steel-blue" />
                    <span className="font-mono text-xs md:text-sm text-soft-gray">Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About