import { motion } from 'framer-motion'
import { brand, contact } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'

export default function CTAStrip() {
  const handleBook = () => openWhatsApp('Hello Shri Ji Production House! I\'d like to book a shoot for my upcoming event. Please share your packages and availability.')

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated glowing background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0D0900 0%, #1A1200 30%, #0D0900 60%, #080600 100%)',
          }}
        />
        {/* Pulsing radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.12) 0%, transparent 70%)',
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Gold borders */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '3px',
              height: '3px',
              background: '#D4AF37',
              left: `${10 + i * 12}%`,
              top: '50%',
              opacity: 0.3,
            }}
            animate={{
              y: [-20, -50, -20],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-4"
        >
          Ready to Begin?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Let's Create Your{' '}
          <span className="gold-text-shimmer">Timeless Story</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-poppins text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Contact {brand.name} today and let our four decades of visual mastery transform your most precious moments into cinematic masterpieces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleBook}
            className="btn-whatsapp text-base px-10 py-4 min-w-[220px]"
          >
            <span>💬</span>
            <span>Book on WhatsApp</span>
          </button>
          <a
            href={`tel:${contact.phone}`}
            className="btn-gold text-base px-10 py-4 min-w-[220px]"
          >
            <span>📞</span>
            <span>Call {contact.phoneDisplay}</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-poppins text-xs text-gray-600 mt-8"
        >
          📍 {contact.address}
        </motion.p>
      </div>
    </section>
  )
}
