import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReactIcon from '../assets/React-icon.png'
import LaravelIcon from '../assets/Laravel-icon.png'
import TailwindIcon from '../assets/Tailwind-icon.png'
import MysqlIcon from '../assets/Mysql-icon.png'
import GitIcon from '../assets/Git-icon.png'

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
        { id: 1, name: 'React', image: ReactIcon },
        { id: 2, name: 'Laravel', image: LaravelIcon },
        { id: 3, name: 'Tailwind', image: TailwindIcon },
        { id: 4, name: 'MySQL', image: MysqlIcon },
        { id: 5, name: 'Git', image: GitIcon },
    ]


    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-16 md:py-24 flex items-center justify-center"
            style={{
                paddingTop: '50px',
            }}
        >
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
                    style={{
                        paddingBottom: '10px',
                    }}
                >
                    <span className="gradient-text">Keahlian</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="glass rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-3 md:gap-4 hover:bg-electric-blue/10 transition-all duration-300 group cursor-pointer aspect-square"
                        >
                            <div className="
    w-28 h-28
    sm:w-32 sm:h-32
    lg:w-36 lg:h-36
    rounded-2xl
    bg-gradient-to-br from-steel-blue/50 to-electric-blue/30
    flex items-center justify-center
    group-hover:scale-110 transition-transform duration-300
  ">
                                <span className="font-mono text-soft-gray text-xs">
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                                    />
                                </span>
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