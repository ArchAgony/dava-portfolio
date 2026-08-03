import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Headball from '../assets/headball.png'
import Sibutadi from '../assets/sibutadi.png'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
    const titleRef = useRef(null)

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

    const projects = [
        {
            id: 1,
            title: "ApexHub",
            description: "Sistem administrasi data balap terintegrasi untuk mengelola profil mobil, spesifikasi teknis komponen, analisis sirkuit, hingga kalkulasi hasil balapan secara terpusat.",
            category: "WebApp",
            icon: "📋",
            techStack: ["Laravel", "Vue", "MySQL"],            
            isPrivate: false,
            github: "https://github.com/ArchAgony/ApexHub-FE"
        },
        {
            id: 2,
            title: "Aplikasi BK",
            description: "Sistem informasi berbasis web untuk mempermudah guru BK dalam mencatat dan mengelola rekapitulasi data pelanggaran, konsultasi, serta perkembangan perilaku siswa.",
            category: "WebApp",
            icon: "📅",
            techStack: ["Laravel", "JavaScript", "Bootstrap"],
            isPrivate: true
        },
        {
            id: 3,
            title: "Duck Hunt",
            description: "Game berburu bebek 2D berbasis browser yang memanfaatkan manipulasi Canvas dan logika fisika JavaScript native. Terinspirasi dari game serupa di PS 1.",
            category: "Minigame",
            icon: "🦆",
            techStack: ["HTML", "CSS", "JS"],
            isPrivate: false,
            github: "https://github.com/ArchAgony/Duck-Hunt"
        },
        {
            id: 4,
            title: "Image Storage (Proyek Mendatang)",
            description: "Platform galeri media digital yang terinspirasi dari Pinterest untuk mengunggah, mengorganisir, dan mendistribusikan gambar secara terpusat.",
            category: "WebApp",
            icon: "💾",
            techStack: ["Laravel", "Vue", "MySQL"],
            isPrivate: true
        },
    ]

    return (
        <section
            ref={sectionRef}
            id="projects"
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
                    <span className="gradient-text">Proyek</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="glass rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-4 hover:border-electric-blue/50 hover:glow transition-all duration-300 group cursor-pointer"
                            style={{
                                padding: '10px 14px',
                            }}
                        >
                            <div>
                                {/* Header: Icon & Category Badge */}
                                <div className="flex items-center justify-between mb-4"
                                    style={{
                                        padding: '10px',
                                    }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-xl">
                                        {project.icon || '🚀'}
                                    </div>
                                    {project.category && (
                                        <span className="text-xs font-mono px-3 py-1 rounded-full border border-electric-blue/30 text-electric-blue bg-electric-blue/10"
                                            style={{
                                                padding: '10px',
                                            }}
                                        >
                                            {project.category}
                                        </span>
                                    )}
                                </div>

                                {/* Title & Description */}
                                <h3 className="font-display text-lg md:text-xl font-bold text-off-white mb-2 group-hover:text-cyan-glow transition-colors duration-300"
                                    style={{
                                        paddingLeft: '10px',
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <p className="text-soft-gray leading-relaxed text-sm mb-4"
                                    style={{
                                        paddingLeft: '10px',
                                    }}
                                >
                                    {project.description}
                                </p>

                                {/* Tech Stack Badges */}
                                {project.techStack && (
                                    <div className="flex flex-wrap gap-2 mb-2"
                                        style={{
                                            paddingLeft: '10px',
                                            paddingTop: '10px',
                                        }}>
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-soft-gray border border-white/10"
                                                style={{
                                                padding: '5px',
                                            }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer Actions: Code/Private & Demo Link */}
                            <div className="flex items-center gap-3 pt-3 border-t border-white/5 mt-auto"
                                style={{
                                    padding: '10px',
                                }}
                            >
                                {project.isPrivate ? (
                                    <span className="flex items-center gap-1.5 text-xs font-mono text-soft-gray/60 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"
                                    style={{
                                                padding: '5px',
                                            }}
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        Private
                                    </span>
                                ) :  (
                                    <a
                                        href={project.github || "https://github.com/ArchAgony"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-mono text-soft-gray hover:text-off-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                                        style={{
                                                padding: '5px',
                                            }}
                                    >
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects