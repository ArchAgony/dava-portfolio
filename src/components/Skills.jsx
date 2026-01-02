import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const skills = [
    { id: 1, name: 'Skill 1' },
    { id: 2, name: 'Skill 2' },
    { id: 3, name: 'Skill 3' },
    { id: 4, name: 'Skill 4' },
    { id: 5, name: 'Skill 5' },
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 md:py-24 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="gradient-text">Keahlian</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-3 md:gap-4 hover:bg-electric-blue/10 transition-all duration-300 group cursor-pointer aspect-square"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br from-steel-blue/50 to-electric-blue/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-mono text-soft-gray text-xs">Icon</span>
              </div>
              <span className="font-mono text-sm md:text-base text-soft-gray group-hover:text-off-white transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills