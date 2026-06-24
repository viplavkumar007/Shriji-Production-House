import { motion } from 'framer-motion'
import { whyChooseUs } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Us"
          title="Why Choose Shri Ji?"
          subtitle="When you choose us, you choose four decades of excellence, trust, and cinematic artistry."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group rounded-2xl p-6 text-center transition-all duration-400 cursor-default"
              style={{
                background: 'linear-gradient(145deg, rgba(20,16,5,0.9), rgba(14,11,3,0.95))',
                border: '1px solid rgba(212,175,55,0.1)',
              }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(212,175,55,0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.08)',
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(184,134,11,0.08))',
                  border: '1px solid rgba(212,175,55,0.2)',
                  boxShadow: '0 4px 15px rgba(212,175,55,0.08)',
                }}
              >
                {item.icon}
              </div>
              <h3 className="font-playfair text-base font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-poppins text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
