import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Certi1 from '../assets/certi1.jpg'
import Certi2 from '../assets/certi2.jpg'

gsap.registerPlugin(ScrollTrigger)

function Certificates() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const swiperRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
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

            gsap.fromTo(
                swiperRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const certificates = [
        {
            id: 1,
            title: 'Peserta LKS Tingkat Jawa Timur',
            image: Certi1,
        },
        {
            id: 2,
            title: 'Peserta Lomba UI/UX UNAIR',
            image: Certi2,
        },
        {
            id: 3,
            title: 'Judul Sertifikat 3',
            image: null,
        },
    ]

    return (
        <section
            ref={sectionRef}
            id="certificates"
            className="py-20 md:py-28 lg:py-32 flex items-center justify-center"
            style={{
                paddingTop: '50px',
            }}
        >
            <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
                <h2
                    ref={titleRef}
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
                    style={{
                        paddingBottom: '10px',
                    }}
                >
                    <span className="gradient-text">Sertifikat</span>
                </h2>

                <div ref={swiperRef}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        rewind={true}
                        grabCursor={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet custom-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1.15,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 1.2,
                                spaceBetween: 32,
                            },
                        }}
                        className="certificates-swiper"
                    >
                        {certificates.map((cert) => (
                            <SwiperSlide key={cert.id}>
                                <div className="glass rounded-2xl overflow-hidden group hover:glow transition-all duration-500 mb-12">
                                    <div className="aspect-[16/10] bg-gradient-to-br from-steel-blue/30 to-electric-blue/20 flex items-center justify-center relative overflow-hidden">
                                        {cert.image ? (
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="font-mono text-soft-gray text-sm">Gambar Sertifikat</span>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-5 md:p-6">
                                        <h3 className="font-display text-lg md:text-xl font-semibold text-off-white text-center group-hover:text-cyan-glow transition-colors duration-300">
                                            {cert.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Certificates