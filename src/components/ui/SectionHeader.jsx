import { motion } from 'framer-motion'
import GoldDivider from './GoldDivider'
import { fadeUp, viewportConfig } from '../../utils/animations'

export default function SectionHeader({ eyebrow, title, subtitle, light = false, className = '' }) {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUp}
    >
      {eyebrow && (
        <p className="section-eyebrow mb-4">{eyebrow}</p>
      )}
      <GoldDivider className="mb-6" />
      <h2 className={`font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${light ? 'text-dark-900' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-poppins text-base md:text-lg max-w-2xl mx-auto ${light ? 'text-dark-600' : 'text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
