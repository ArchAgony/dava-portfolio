import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VueIcon from '../assets/Vue-icon.png'
import LaravelIcon from '../assets/Laravel-icon.png'
import TailwindIcon from '../assets/Tailwind-icon.png'
import MysqlIcon from '../assets/Mysql-icon.png'
import GitIcon from '../assets/Git-icon.png'
import PostmanIcon from '../assets/Postman-icon.png'
import DockerIcon from '../assets/Docker-icon.png'
import VercelIcon from '../assets/Vercel-icon.png'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
    const titleRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;
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

            gsap.fromTo(
                cardsRef.current.filter(Boolean),
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )

            gsap.fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const skills = [
        { id: 1, name: 'Laravel', image: LaravelIcon },
        { id: 2, name: 'MySQL', image: MysqlIcon },
        { id: 3, name: 'Vue', image: VueIcon },
        { id: 4, name: 'Tailwind', image: TailwindIcon },
        { id: 5, name: 'Postman', image: PostmanIcon },
        { id: 6, name: 'Git', image: GitIcon },
        { id: 7, name: 'Docker', image: DockerIcon },
        { id: 8, name: 'Vercel', image: VercelIcon },
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
                <h2 ref={titleRef} className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
                    style={{
                        paddingBottom: '10px',
                    }}
                >
                    <span className="gradient-text">Keahlian</span>
                </h2>

                <div
                    className="grid grid-cols-4 gap-2 md:gap-3 w-full max-w-5xl mx-auto"
                >
                    {skills.map((skill, index) => (
                        <div
                            ref={(el) => (cardsRef.current[index] = el)}
                            key={skill.id}
                            className="glass rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col items-center gap-2 md:gap-3 hover:bg-electric-blue/20 hover:glow transition-all duration-300 group cursor-pointer"
                            style={{
                                padding: '10px',
                            }}
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="font-mono text-xs md:text-sm text-soft-gray group-hover:text-off-white transition-colors duration-300 text-center">
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