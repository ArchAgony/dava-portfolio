import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import me from '../assets/me.jpg'

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
                    <span className="gradient-text">Tentang Saya</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
                    <div ref={photoRef} className="w-full md:w-auto flex justify-center md:flex-shrink-0">
                        <div className="glass rounded-2xl p-3 md:p-4 glow">
                            <div className="w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-xl bg-gradient-to-br from-steel-blue/50 to-electric-blue/30 flex items-center justify-center">
                                <span className="font-mono text-soft-gray text-sm">
                                    <img src={me} alt="React logo" className='rounded-[1vw]' />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div ref={contentRef} className="w-full md:flex-1">
                        <div className="glass rounded-2xl p-5 md:p-6 lg:p-8"
                            style={{
                                padding: '10px 14px',
                            }}
                        >
                            <h3 className="font-display text-xl md:text-2xl font-semibold text-off-white mb-4">
                                Salam Kenal!
                            </h3>

                            <div className="space-y-4 text-soft-gray leading-relaxed text-sm md:text-base">
                                <p>
                                    Saya seorang pengembang web yang bersemangat membangun aplikasi modern dan berskala besar. Dengan pengalaman dalam framework seperti Laravel dan React, saya berfokus pada pembuatan kode yang bersih, mudah dipelihara, dan berkinerja tinggi. Minat saya meliputi perancangan sistem backend yang andal hingga pembuatan antarmuka pengguna yang menarik. Di luar pemrograman, saya menikmati eksplorasi motion graphics dan desain kreatif untuk membawa ide-ide segar ke dalam proyek-proyek saya.
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