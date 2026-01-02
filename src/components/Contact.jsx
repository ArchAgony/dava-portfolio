import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMail, FiGithub, FiFacebook, FiInstagram } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const iconsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            })

            tl.fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
            )
                .fromTo(
                    textRef.current,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.5'
                )
                .fromTo(
                    iconsRef.current.children,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
                    '-=0.4'
                )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const socials = [
        {
            id: 1,
            name: 'Email',
            icon: FiMail,
            href: 'mailto:davaariardiansyah01@gmail.com',
        },
        {
            id: 2,
            name: 'GitHub',
            icon: FiGithub,
            href: 'https://github.com/ArchAgony',
        },
        {
            id: 3,
            name: 'Facebook',
            icon: FiFacebook,
            href: 'https://facebook.com/profile.php?id=100095305896047',
        },
        {
            id: 4,
            name: 'Instagram',
            icon: FiInstagram,
            href: 'https://instagram.com/arch_agony',
        },
    ]

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="py-16 md:py-24 flex items-center justify-center"
            style={{
                paddingTop: '50px',
                paddingBottom: '50px',
            }}
        >
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center">
                    <h2
                        ref={titleRef}
                        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
                    >
                        <span className="gradient-text">Hubungi Saya</span>
                    </h2>

                    <p
                        ref={textRef}
                        className="text-soft-gray text-base md:text-lg lg:text-xl leading-relaxed mb-10 md:mb-12 max-w-2xl"
                    >
                        Tertarik untuk berkolaborasi atau sekadar menyapa? Jangan ragu untuk menghubungi saya.
                    </p>

                    <div
                        ref={iconsRef}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full max-w-xl"
                    >
                        {socials.map((social) => (
                            <a
                                key={social.id}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col items-center gap-2 md:gap-3 hover:bg-electric-blue/20 hover:glow transition-all duration-300 group"
                                style={{
                                    padding: '10px',
                                }}
                            >
                                <social.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-soft-gray group-hover:text-cyan-glow transition-colors duration-300" />
                                <span className="font-mono text-xs md:text-sm text-soft-gray group-hover:text-off-white transition-colors duration-300">
                                    {social.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact