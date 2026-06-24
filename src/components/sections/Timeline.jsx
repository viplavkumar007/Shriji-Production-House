import { motion } from 'framer-motion'
import { timeline } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'

export default function Timeline() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: '#0D0B06' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Journey"
          title="A Legacy Timeline"
          subtitle="Four decades of milestones, growth, and unwavering commitment to excellence."
        />

        {/* Desktop timeline */}
        <div className="relative hidden md:block">
          {/* Center line */}
          <div
            className="absolute top-8 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)' }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-5 gap-4 relative"
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`flex flex-col items-center gap-4 ${i % 2 === 0 ? '' : 'mt-24'}`}
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 z-10">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-gold-400"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700, #B8860B)',
                      boxShadow: '0 0 20px rgba(212,175,55,0.6)',
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl p-5 text-center w-full transition-all duration-300 hover:-translate-y-1 ${i % 2 === 0 ? '' : '-mt-24 mb-24'}`}
                  style={{
                    background: 'linear-gradient(145deg, rgba(26,22,10,0.9), rgba(18,15,5,0.95))',
                    border: '1px solid rgba(212,175,55,0.18)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  }}
                >
                  <div className="font-playfair text-2xl font-bold gold-text mb-1">{item.year}</div>
                  <div className="font-poppins text-sm font-semibold text-white mb-2">{item.title}</div>
                  <div className="font-poppins text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="md:hidden relative pl-8"
        >
          {/* Vertical line */}
          <div
            className="absolute left-3 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, #D4AF37, #FFD700, #D4AF37, transparent)' }}
          />

          {timeline.map((item, i) => (
            <motion.div key={i} variants={staggerItem} className="relative mb-8 last:mb-0">
              {/* Dot */}
              <div
                className="absolute -left-5 top-4 w-3.5 h-3.5 rounded-full border-2 border-gold-400"
                style={{
                  background: 'linear-gradient(135deg, #FFD700, #B8860B)',
                  boxShadow: '0 0 15px rgba(212,175,55,0.6)',
                }}
              />

              <div
                className="rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(145deg, rgba(26,22,10,0.9), rgba(18,15,5,0.95))',
                  border: '1px solid rgba(212,175,55,0.18)',
                }}
              >
                <div className="font-playfair text-xl font-bold gold-text mb-1">{item.year}</div>
                <div className="font-poppins text-sm font-semibold text-white mb-2">{item.title}</div>
                <div className="font-poppins text-xs text-gray-400 leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
