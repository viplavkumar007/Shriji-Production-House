import { motion } from 'framer-motion'
import { services } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'

function ServiceCard({ service, index }) {
  const handleEnquire = () => openWhatsApp(service.whatsappMsg)

  return (
    <motion.div
      variants={staggerItem}
      className="service-card-glossy rounded-2xl p-7 flex flex-col gap-4 transition-all duration-400 group cursor-pointer"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Icon */}
      <div className="relative">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(184,134,11,0.08))',
            border: '1px solid rgba(212,175,55,0.25)',
            boxShadow: '0 4px 20px rgba(212,175,55,0.1)',
          }}
        >
          {service.icon}
        </div>
        {/* Glow on hover */}
        <div
          className="absolute inset-0 w-16 h-16 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
          style={{ background: 'rgba(212,175,55,0.2)' }}
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="font-poppins text-sm text-gray-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={handleEnquire}
        className="btn-gold text-sm px-6 py-2.5 self-start"
      >
        <span>💬</span>
        <span>Enquire Now</span>
      </button>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #0D0B06 50%, #0A0A0A 100%)' }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-1/2 left-0 w-[300px] h-[600px] pointer-events-none opacity-20 blur-[80px]"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.15), transparent)' }}
      />
      <div
        className="absolute top-1/2 right-0 w-[300px] h-[600px] pointer-events-none opacity-20 blur-[80px]"
        style={{ background: 'radial-gradient(ellipse, rgba(184,134,11,0.12), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="From intimate portraits to grand cinematic productions — every service crafted with four decades of artistic mastery."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
