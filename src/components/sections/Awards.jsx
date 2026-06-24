import { useState } from 'react'
import { motion } from 'framer-motion'
import { awards, awardsContent } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'

function AwardCard({ award, index }) {
  const [activeImg, setActiveImg] = useState(0)
  const isLeft = index % 2 === 0

  return (
    <motion.div
      variants={staggerItem}
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(20,16,5,0.95), rgba(12,10,3,0.98))',
        border: `1px solid ${award.color}30`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${award.color}08`,
      }}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${award.color}, transparent)` }}
      />

      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
        {/* Image side */}
        <div className={`relative overflow-hidden ${isLeft ? '' : 'lg:order-2'}`} style={{ minHeight: '380px' }}>
          {award.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${award.title} - ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: activeImg === i ? 1 : 0 }}
            />
          ))}

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: isLeft
                ? 'linear-gradient(to right, transparent 60%, rgba(12,10,3,0.95) 100%)'
                : 'linear-gradient(to left, transparent 60%, rgba(12,10,3,0.95) 100%)',
            }}
          />

          {/* Award year badge */}
          <div
            className="absolute top-5 left-5 px-4 py-2 rounded-full font-playfair text-lg font-bold"
            style={{
              background: `linear-gradient(135deg, ${award.color}, #B8860B)`,
              color: '#0A0A0A',
              boxShadow: `0 4px 20px ${award.color}50`,
            }}
          >
            {award.year}
          </div>

          {/* Image switcher (if multiple) */}
          {award.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {award.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeImg === i ? '20px' : '8px',
                    height: '8px',
                    background: activeImg === i ? award.color : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content side */}
        <div className={`p-8 lg:p-10 flex flex-col justify-center ${isLeft ? '' : 'lg:order-1'}`}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-poppins text-xs font-semibold mb-6 self-start"
            style={{
              background: `${award.color}15`,
              border: `1px solid ${award.color}30`,
              color: award.color,
            }}
          >
            🏆 National Award
          </div>

          <h3 className="font-playfair text-3xl font-bold text-white mb-2">
            {award.title}
          </h3>

          <p className="font-poppins text-sm font-semibold mb-6" style={{ color: award.color }}>
            {award.subtitle}
          </p>

          <p className="font-poppins text-sm text-gray-400 leading-relaxed mb-8">
            {award.description}
          </p>

          {/* Presenter info */}
          <div
            className="flex items-center gap-4 p-4 rounded-2xl"
            style={{
              background: `${award.color}08`,
              border: `1px solid ${award.color}20`,
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${award.color}30, ${award.color}15)`,
                border: `1px solid ${award.color}30`,
              }}
            >
              🌟
            </div>
            <div>
              <p className="font-poppins text-xs text-gray-500 uppercase tracking-wide mb-0.5">Presented by</p>
              <p className="font-playfair text-lg font-bold text-white">{award.presenter}</p>
              <p className="font-poppins text-xs" style={{ color: award.color }}>{award.presenterTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative py-28 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none blur-[120px] opacity-10"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={awardsContent.eyebrow}
          title={awardsContent.title}
          subtitle={awardsContent.subtitle}
        />

        {/* Awards body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="font-poppins text-sm text-gray-400 leading-relaxed max-w-3xl mx-auto text-center mb-16"
        >
          {awardsContent.body}
        </motion.p>

        {/* Award Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-10"
        >
          {awards.map((award, i) => (
            <AwardCard key={award.id} award={award} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
