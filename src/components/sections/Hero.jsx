import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { hero, contact } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'
import { heroStagger, heroItem } from '../../utils/animations'
import { useCountUp } from '../../hooks/useCountUp'

function StatCounter({ value, label }) {
  const numeric = value.replace(/[^0-9]/g, '')
  const suffix = value.replace(/[0-9]/g, '')
  const { count, ref } = useCountUp(value, 2200)
  return (
    <div ref={ref} className="text-center">
      <div className="font-playfair font-bold text-3xl md:text-4xl gold-text-shimmer">
        {count}{suffix}
      </div>
      <div className="font-poppins text-xs text-gray-400 mt-1 tracking-wide uppercase">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero.slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleBookShoot = () => openWhatsApp('Hello Shri Ji Production House! I\'d like to book a shoot. Please share your packages and availability.')

  const handleViewServices = () => {
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Animated Background Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{ background: hero.slides[currentSlide].gradient }}
        />
      </AnimatePresence>

      {/* Cinematic grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Animated gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: '#D4AF37',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.p variants={heroItem} className="section-eyebrow mb-6 tracking-[0.4em]">
            Est. 1986 · Mathura, India
          </motion.p>

          {/* Main Headline */}
          <motion.h1 variants={heroItem} className="font-playfair font-black leading-none mb-2">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl gold-text-shimmer drop-shadow-2xl">
              SHRI JI
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-[0.3em] mt-2">
              PRODUCTION HOUSE
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={heroItem} className="flex items-center justify-center gap-4 my-8">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <div className="w-2 h-2 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(212,175,55,0.9)]" />
            <div className="h-px flex-1 max-w-[120px]" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </motion.div>

          {/* Tagline */}
          <motion.p variants={heroItem} className="font-playfair italic text-xl md:text-2xl text-gold-200/80 mb-4">
            {hero.tagline}
          </motion.p>

          {/* Description */}
          <motion.p variants={heroItem} className="font-poppins text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            {hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleBookShoot}
              className="btn-gold text-base px-10 py-4 min-w-[200px]"
            >
              <span>💬</span>
              <span>Book Your Shoot</span>
            </button>
            <button
              onClick={handleViewServices}
              className="btn-outline-gold text-base px-10 py-4 min-w-[200px]"
            >
              <span>🎬</span>
              <span>View Services</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.2)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {hero.stats.map((stat, i) => (
              <div
                key={i}
                className="px-6 py-6 flex flex-col items-center"
                style={{ background: 'rgba(10,8,3,0.8)' }}
              >
                <StatCounter value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-8">
          {hero.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === currentSlide ? '24px' : '8px',
                height: '8px',
                background: i === currentSlide
                  ? 'linear-gradient(90deg, #D4AF37, #FFD700)'
                  : 'rgba(212,175,55,0.25)',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: 'rgba(212,175,55,0.4)' }}
        >
          <div
            className="w-1 h-2.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, #D4AF37, transparent)' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
