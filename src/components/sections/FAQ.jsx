import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../../data/siteContent'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      variants={staggerItem}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen
          ? 'linear-gradient(145deg, rgba(26,22,8,0.98), rgba(20,16,5,0.98))'
          : 'linear-gradient(145deg, rgba(16,14,5,0.9), rgba(12,10,3,0.9))',
        border: isOpen
          ? '1px solid rgba(212,175,55,0.35)'
          : '1px solid rgba(212,175,55,0.1)',
        boxShadow: isOpen
          ? '0 8px 30px rgba(0,0,0,0.4), 0 0 20px rgba(212,175,55,0.06)'
          : '0 4px 15px rgba(0,0,0,0.3)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-2xl"
        aria-expanded={isOpen}
      >
        <span className="font-poppins text-sm font-semibold text-white pr-4 leading-relaxed">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg"
          style={{
            background: isOpen
              ? 'linear-gradient(135deg, #D4AF37, #B8860B)'
              : 'rgba(212,175,55,0.1)',
            color: isOpen ? '#0A0A0A' : '#D4AF37',
            border: isOpen ? 'none' : '1px solid rgba(212,175,55,0.2)',
          }}
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-6">
              <div
                className="h-px mb-4"
                style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }}
              />
              <p className="font-poppins text-sm text-gray-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: '#0D0B06' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked"
          subtitle="Everything you need to know about working with Shri Ji Production House."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
