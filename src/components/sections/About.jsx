import { motion } from 'framer-motion'
import { about, brand } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, staggerItem, fadeLeft, fadeRight, viewportConfig } from '../../utils/animations'

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden" style={{ background: '#0D0B06' }}>

      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(184,134,11,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          subtitle="Four decades of transforming emotions into timeless cinematic masterpieces"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Story */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="font-poppins text-base text-gray-300 leading-relaxed mb-6">
              {about.intro}
            </p>
            {about.body.map((para, i) => (
              <p key={i} className="font-poppins text-sm text-gray-400 leading-relaxed mb-5">
                {para}
              </p>
            ))}

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-wrap gap-3 mt-8"
            >
              {about.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    color: '#D4AF37',
                  }}
                >
                  <span>{h.icon}</span>
                  <span>{h.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Founder Card + Visual */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {/* Founder Card */}
            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(26,22,10,0.9), rgba(18,15,5,0.95))',
                border: '1px solid rgba(212,175,55,0.2)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.1)',
              }}
            >
              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

              {/* Founder avatar */}
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                    boxShadow: '0 0 30px rgba(212,175,55,0.4)',
                  }}
                >
                  🎬
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-white">{brand.founder.name}</h3>
                  <p className="font-poppins text-sm font-medium" style={{ color: '#D4AF37' }}>{brand.founder.title}</p>
                  <p className="font-poppins text-xs text-gray-500 mt-1">Since {brand.established}</p>
                </div>
              </div>

              <p className="font-poppins text-sm text-gray-400 leading-relaxed italic">
                "{brand.founder.bio}"
              </p>

              {/* Quote ornament */}
              <div
                className="absolute bottom-4 right-6 font-playfair text-8xl font-bold leading-none opacity-5 select-none"
                style={{ color: '#D4AF37' }}
              >
                "
              </div>
            </div>

            {/* Visual stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '40+', label: 'Years of Mastery', icon: '📅' },
                { num: '5000+', label: 'Families Served', icon: '👨‍👩‍👧' },
                { num: '1000+', label: 'Weddings Filmed', icon: '💍' },
                { num: '2', label: 'National Awards', icon: '🏆' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(212,175,55,0.05)',
                    border: '1px solid rgba(212,175,55,0.12)',
                  }}
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="font-playfair text-2xl font-bold gold-text">{s.num}</div>
                  <div className="font-poppins text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
