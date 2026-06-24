import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { openWhatsApp } from '../../utils/whatsapp'
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'

const galleryItems = [
  { label: 'Royal Rajputana Wedding', cat: 'Wedding', emoji: '💍', gradient: 'linear-gradient(135deg, #2d1b00, #1a0f00)' },
  { label: 'Sunset Pre-Wedding', cat: 'Pre-Wedding', emoji: '🌅', gradient: 'linear-gradient(135deg, #2d0020, #1a0015)' },
  { label: 'Newborn Memories', cat: 'Baby Shoot', emoji: '👶', gradient: 'linear-gradient(135deg, #001a10, #000d08)' },
  { label: 'Glow of Life', cat: 'Maternity', emoji: '🤰', gradient: 'linear-gradient(135deg, #1a1500, #0d0b00)' },
  { label: 'Bridal Couture', cat: 'Fashion', emoji: '👗', gradient: 'linear-gradient(135deg, #001520, #000a15)' },
  { label: 'Product Artistry', cat: 'Products', emoji: '📦', gradient: 'linear-gradient(135deg, #200010, #100008)' },
  { label: 'Live Concert 2025', cat: 'Events', emoji: '🎤', gradient: 'linear-gradient(135deg, #0d1520, #060a10)' },
  { label: 'Drone Aerial View', cat: 'Cinematic', emoji: '🚁', gradient: 'linear-gradient(135deg, #1a1000, #0d0800)' },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-28 overflow-hidden"
      style={{ background: '#111111' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Visual Showcase"
          title="Gallery"
          subtitle="A visual journey through our most celebrated works — each frame a story, each story a legacy."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                background: item.gradient,
                border: '1px solid rgba(212,175,55,0.1)',
                aspectRatio: i === 0 || i === 5 ? '1' : i % 3 === 1 ? '3/4' : '4/3',
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
              />

              {/* Border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.4)' }}
              />

              {/* Center emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-5xl opacity-15 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300"
                >
                  {item.emoji}
                </span>
              </div>

              {/* Caption */}
              <div
                className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <p className="font-playfair text-sm font-semibold text-white">{item.label}</p>
                <p className="font-poppins text-xs text-gold-400 mt-0.5">{item.cat}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="text-center mt-14"
        >
          <button
            onClick={() => openWhatsApp('Hello! I\'d like to view the complete gallery of Shri Ji Production House. Could you please share more of your work?')}
            className="btn-gold px-10 py-3.5 text-base"
          >
            <span>📸</span>
            <span>View Full Gallery on WhatsApp</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
