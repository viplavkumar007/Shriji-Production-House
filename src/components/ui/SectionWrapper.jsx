import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../utils/animations'

export default function SectionWrapper({ children, id, className = '', delay = 0 }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
