import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../../hooks/useScrolled'
import { useActiveSection } from '../../hooks/useActiveSection'
import { brand, nav, contact } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'

const sectionIds = ['home', 'about', 'services', 'portfolio', 'awards', 'gallery', 'contact']

export default function Navbar() {
  const { scrolled } = useScrolled(60)
  const activeSection = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(8, 6, 2, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,175,55,0.12)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-3 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all duration-300"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    className="relative px-4 py-2 font-poppins text-sm font-medium transition-all duration-300 group"
                    style={{ color: isActive ? '#FFD700' : 'rgba(255,255,255,0.75)' }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Active/hover underline */}
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-all duration-300"
                      style={{ width: isActive ? '80%' : '0%' }}
                    />
                    <span className="absolute inset-0 rounded-lg bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-300" />
                  </a>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${contact.phone}`}
                className="btn-outline-gold text-sm px-5 py-2.5"
              >
                <span>📞</span>
                <span>Call Now</span>
              </a>
              <button
                onClick={() => openWhatsApp()}
                className="btn-gold text-sm px-5 py-2.5"
              >
                <span>💬</span>
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl transition-all duration-200"
              style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}
              aria-label="Toggle menu"
            >
              <span
                className="block h-0.5 w-6 transition-all duration-300 origin-center"
                style={{
                  background: '#D4AF37',
                  transform: menuOpen ? 'rotate(45deg) translate(3.5px, 3.5px)' : 'none',
                }}
              />
              <span
                className="block h-0.5 w-6 transition-all duration-300"
                style={{
                  background: '#D4AF37',
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
                }}
              />
              <span
                className="block h-0.5 w-6 transition-all duration-300 origin-center"
                style={{
                  background: '#D4AF37',
                  transform: menuOpen ? 'rotate(-45deg) translate(3.5px, -3.5px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
            style={{
              background: 'rgba(8,6,2,0.97)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(212,175,55,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {nav.map((item, i) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl font-poppins text-base font-medium transition-all duration-200"
                    style={{
                      color: isActive ? '#FFD700' : 'rgba(255,255,255,0.8)',
                      background: isActive ? 'rgba(212,175,55,0.08)' : 'transparent',
                      borderLeft: isActive ? '2px solid #D4AF37' : '2px solid transparent',
                    }}
                  >
                    {item.label}
                    {isActive && <span className="text-gold-400 text-xs">●</span>}
                  </motion.a>
                )
              })}
              <div className="mt-4 flex flex-col gap-3">
                <a href={`tel:${contact.phone}`} className="btn-outline-gold text-center py-3">
                  📞 {contact.phoneDisplay}
                </a>
                <button onClick={() => { openWhatsApp(); setMenuOpen(false) }} className="btn-gold py-3">
                  💬 Book on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
