import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="text-sm"
          style={{ color: i < rating ? '#FFD700' : 'rgba(255,255,255,0.15)' }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

function TestimonialCard({ t, isActive }) {
  return (
    <div
      className="relative rounded-3xl p-8 h-full flex flex-col transition-all duration-500"
      style={{
        background: isActive
          ? 'linear-gradient(145deg, rgba(30,25,8,0.98), rgba(20,16,5,0.98))'
          : 'linear-gradient(145deg, rgba(18,16,6,0.9), rgba(12,10,3,0.9))',
        border: isActive
          ? '1px solid rgba(212,175,55,0.4)'
          : '1px solid rgba(212,175,55,0.1)',
        boxShadow: isActive
          ? '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.08)'
          : '0 8px 30px rgba(0,0,0,0.4)',
      }}
    >
      {/* Top shine */}
      {isActive && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
        />
      )}

      {/* Quote mark */}
      <div
        className="font-playfair text-7xl font-bold leading-none mb-2 -mt-2 opacity-20"
        style={{ color: '#D4AF37' }}
      >
        "
      </div>

      <p className="font-poppins text-sm text-gray-300 leading-relaxed flex-1 italic mb-6">
        {t.text}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-playfair font-bold text-sm flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
              color: '#0A0A0A',
            }}
          >
            {t.initials}
          </div>
          <div>
            <p className="font-poppins text-sm font-semibold text-white">{t.name}</p>
            <p className="font-poppins text-xs text-gray-500">{t.location} · {t.service}</p>
          </div>
        </div>
        <StarRating rating={t.rating} />
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length)

  // Show 3 cards, centered on active
  const getVisible = () => {
    const total = testimonials.length
    return [
      testimonials[(activeIndex - 1 + total) % total],
      testimonials[activeIndex],
      testimonials[(activeIndex + 1) % total],
    ]
  }

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: '#111111' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      />

      {/* Ambient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none blur-[100px] opacity-8"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.1), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Love"
          title="What Our Clients Say"
          subtitle="Over 5,000 families trust us as their visual storytellers. Here's what they say."
        />

        {/* Carousel desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 mb-10">
            {getVisible().map((t, i) => (
              <TestimonialCard key={t.id} t={t} isActive={i === 1} />
            ))}
          </div>
        </div>

        {/* Mobile single */}
        <div className="md:hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard t={testimonials[activeIndex]} isActive />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.25)',
              color: '#D4AF37',
            }}
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '24px' : '8px',
                  height: '8px',
                  background: i === activeIndex
                    ? 'linear-gradient(90deg, #D4AF37, #FFD700)'
                    : 'rgba(212,175,55,0.2)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.25)',
              color: '#D4AF37',
            }}
          >
            →
          </button>
        </div>

        {/* Google-style review badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'rgba(212,175,55,0.06)',
              border: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            <span className="text-xl">⭐</span>
            <span className="font-playfair text-xl font-bold gold-text">5.0</span>
            <span className="font-poppins text-sm text-gray-400">Google Rating</span>
            <span className="w-px h-4 bg-gray-700" />
            <span className="font-poppins text-sm text-gray-400">500+ Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
