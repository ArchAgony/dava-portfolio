import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Judul Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Judul Project 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 md:py-24 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="gradient-text">Proyek</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass rounded-2xl overflow-hidden group hover:glow transition-all duration-500"
            >
              <div className="aspect-video bg-gradient-to-br from-steel-blue/30 to-electric-blue/20 flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-soft-gray text-sm">Gambar Project</span>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg md:text-xl lg:text-2xl font-semibold text-off-white mb-2 md:mb-3 group-hover:text-cyan-glow transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-soft-gray leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects