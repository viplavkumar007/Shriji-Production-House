import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'

function PortfolioCard({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={staggerItem}
      layout
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{
        background: item.gradient,
        border: '1px solid rgba(212,175,55,0.1)',
        aspectRatio: [1, 2, 1, 3, 1, 2, 1][item.id % 7] === 2 ? '3/4' : '4/3',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${item.accent}18 50%, transparent 70%)`,
        }}
      />

      {/* Gold border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none"
        style={{
          boxShadow: hovered
            ? `inset 0 0 0 1px ${item.accent}60, 0 0 30px ${item.accent}20`
            : 'inset 0 0 0 1px rgba(212,175,55,0.1)',
        }}
      />

      {/* Centered icon placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl opacity-20 group-hover:opacity-40 transition-all duration-300"
          style={{ background: `${item.accent}20` }}
        >
          🎬
        </div>
      </div>

      {/* Hover info */}
      <div
        className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
        }}
      >
        <p className="font-playfair text-base font-semibold text-white">{item.label}</p>
        <p className="font-poppins text-xs mt-1" style={{ color: item.accent }}>{item.subLabel}</p>
      </div>

      {/* Category badge */}
      <div
        className="absolute top-3 left-3 px-3 py-1 rounded-full font-poppins text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `${item.accent}25`,
          border: `1px solid ${item.accent}40`,
          color: item.accent,
          backdropFilter: 'blur(8px)',
        }}
      >
        {item.category}
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? portfolio.items
    : portfolio.items.filter((item) => item.category === activeCategory)

  return (
    <section
      id="portfolio"
      className="relative py-28 overflow-hidden"
      style={{ background: '#111111' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Work"
          title="Portfolio"
          subtitle="A curated glimpse into our four decades of visual storytelling excellence."
        />

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {portfolio.categories.map((cat) => {
            const isActive = cat === activeCategory
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-full font-poppins text-sm font-medium transition-all duration-300"
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, #D4AF37, #B8860B)'
                    : 'rgba(212,175,55,0.06)',
                  border: `1px solid ${isActive ? 'transparent' : 'rgba(212,175,55,0.2)'}`,
                  color: isActive ? '#0A0A0A' : 'rgba(255,255,255,0.6)',
                  boxShadow: isActive ? '0 4px 20px rgba(212,175,55,0.35)' : 'none',
                  transform: isActive ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA below portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="text-center mt-14"
        >
          <p className="font-poppins text-sm text-gray-500 mb-5">
            Want to see more of our work? Get in touch to view our full portfolio.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold px-10 py-3.5"
          >
            <span>📸</span>
            <span>Request Full Portfolio</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
