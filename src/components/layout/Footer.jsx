import { motion } from 'framer-motion'
import { brand, nav, services, contact } from '../../data/siteContent'
import { openWhatsApp, makeCall } from '../../utils/whatsapp'
import GoldDivider from '../ui/GoldDivider'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const quickLinks = nav

  const serviceLinks = services.slice(0, 6)

  return (
    <footer className="relative overflow-hidden" style={{ background: '#060402' }}>
      {/* Top gold border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)' }} />

      {/* Background ornament */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-5"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        />
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 w-auto object-contain mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
            <p className="font-poppins text-sm text-gray-400 leading-relaxed mb-6">
              {brand.tagline}. A premium wedding photography & cinematic production house with over four decades of excellence.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'Instagram', icon: '📸', href: '#' },
                { label: 'YouTube', icon: '▶️', href: '#' },
                { label: 'Facebook', icon: '👍', href: '#' },
                { label: 'WhatsApp', icon: '💬', action: () => openWhatsApp() },
              ].map((s) => (
                <button
                  key={s.label}
                  onClick={s.action || (() => window.open(s.href, '_blank'))}
                  title={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.2)',
                  }}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold gold-text mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    className="font-poppins text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600 group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-semibold gold-text mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNav('#services') }}
                    className="font-poppins text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600 group-hover:bg-gold-400 transition-colors" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold gold-text mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-start gap-3 font-poppins text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  <span className="text-gold-500 mt-0.5 flex-shrink-0">📞</span>
                  <span>{contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 font-poppins text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200"
                >
                  <span className="text-gold-500 mt-0.5 flex-shrink-0">✉️</span>
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 font-poppins text-sm text-gray-400">
                <span className="text-gold-500 mt-0.5 flex-shrink-0">📍</span>
                <span>{contact.address}</span>
              </li>
            </ul>

            <button
              onClick={() => openWhatsApp()}
              className="btn-whatsapp mt-6 w-full text-sm py-3"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>

        <GoldDivider className="mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-xs text-gray-600 text-center md:text-left">
            © {year} <span className="text-gold-600">{brand.name}</span>. All rights reserved. Est. {brand.established}.
          </p>
          <p className="font-poppins text-xs text-gray-700">
            Best Wedding Photographer in Mathura | Cinematic Wedding Films
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <motion.button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
        }}
        animate={{
          boxShadow: [
            '0 4px 20px rgba(37,211,102,0.4)',
            '0 4px 35px rgba(37,211,102,0.7)',
            '0 4px 20px rgba(37,211,102,0.4)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        💬
      </motion.button>
    </footer>
  )
}
