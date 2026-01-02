import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const marqueeText = "DEVELOPER • CREATIVE • ENTHUSIAST • PROBLEM SOLVER • CODE LOVER • "

  return (
    <section ref={heroRef} className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full bg-dark-slate/50 py-3 overflow-hidden z-10">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="font-mono text-sm text-soft-gray tracking-widest">
            {marqueeText.repeat(10)}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-16 h-16 md:w-24 md:h-24 border-2 border-electric-blue/30 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ animationName: 'float' }}
        />
        <div className="absolute top-32 left-[10%] w-16 h-16 md:w-24 md:h-24 border-2 border-electric-blue/30 rounded-lg animate-float" />
        
        <div className="absolute top-40 right-[15%] w-12 h-12 md:w-20 md:h-20 border-2 border-cyan-glow/30 rotate-45 animate-float-reverse" />
        
        <div className="absolute bottom-32 left-[20%] w-8 h-8 md:w-16 md:h-16 bg-electric-blue/10 rounded-full animate-float" />
        
        <div className="absolute bottom-40 right-[10%] w-20 h-20 md:w-32 md:h-32 border border-steel-blue/40 rounded-full animate-float-reverse" />
        
        <div className="absolute top-1/2 left-[5%] w-6 h-6 md:w-10 md:h-10 bg-cyan-glow/10 rotate-12 animate-float" />
        
        <div className="absolute top-1/3 right-[25%] w-4 h-4 md:w-8 md:h-8 border border-electric-blue/20 rounded-full animate-float-reverse" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 pt-16">
        <div className="text-center max-w-4xl">
          <h1 ref={titleRef} className="font-display">
            <span className="block text-base md:text-lg lg:text-xl text-soft-gray font-normal mb-4">
              Halo, saya
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold gradient-text glow-text">
              Dava Ari Ardiansyah 
            </span>
          </h1>

          <p ref={subtitleRef} className="font-mono text-lg md:text-xl lg:text-2xl text-soft-gray mt-6 md:mt-8">
            Web Developer & UI Enthusiast
          </p>

          <div ref={ctaRef} className="mt-10 md:mt-12">
            <a
              href="#about"
              className="inline-block px-8 py-4 glass rounded-full font-medium text-off-white hover:bg-electric-blue/20 transition-all duration-300 glow"
            >
              Lihat Lebih Lanjut
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-soft-gray">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-electric-blue to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero