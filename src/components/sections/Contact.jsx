import { useState } from 'react'
import { motion } from 'framer-motion'
import { contact, services } from '../../data/siteContent'
import { openWhatsApp, makeCall } from '../../utils/whatsapp'
import SectionHeader from '../ui/SectionHeader'
import { fadeLeft, fadeRight, viewportConfig } from '../../utils/animations'

const serviceOptions = services.map((s) => s.title)

function FloatingInput({ label, type = 'text', value, onChange, error, as = 'input', options }) {
  const [focused, setFocused] = useState(false)
  const isActive = focused || value.length > 0
  const Tag = as

  return (
    <div className="relative">
      <label
        className="absolute left-4 transition-all duration-300 pointer-events-none font-poppins z-10"
        style={{
          top: isActive ? '8px' : (as === 'textarea' ? '18px' : '50%'),
          transform: as !== 'textarea' && !isActive ? 'translateY(-50%)' : 'none',
          fontSize: isActive ? '10px' : '14px',
          color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.35)',
          fontWeight: isActive ? '600' : '400',
        }}
      >
        {label}
      </label>

      {as === 'select' ? (
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="input-luxury pt-6 pb-2 appearance-none cursor-pointer"
          style={{ color: value ? 'white' : 'transparent' }}
        >
          <option value="" />
          {options.map((o) => (
            <option key={o} value={o} style={{ background: '#111', color: 'white' }}>{o}</option>
          ))}
        </select>
      ) : as === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={4}
          className="input-luxury pt-7 pb-3 resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="input-luxury pt-6 pb-2"
        />
      )}

      {error && (
        <p className="font-poppins text-xs text-red-400 mt-1.5 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
}

function ContactForm({ onSuccess, onError }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', date: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Enter a valid 10-digit phone number'
    if (!form.service) errs.service = 'Please select a service'
    if (!form.message.trim()) errs.message = 'Please tell us about your requirement'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)

    // Simulate submission then redirect to WhatsApp
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)

    // Send via WhatsApp with pre-filled message
    const msg = `Hello Shri Ji Production House!

*New Enquiry from Website*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
${form.email ? `📧 Email: ${form.email}\n` : ''}📸 Service: ${form.service}
${form.date ? `📅 Date: ${form.date}\n` : ''}💬 Message: ${form.message}

Please get back to me at the earliest. Thank you!`

    openWhatsApp(msg)
    onSuccess()
    setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FloatingInput label="Your Name *" value={form.name} onChange={set('name')} error={errors.name} />
        <FloatingInput label="Phone Number *" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} />
      </div>
      <FloatingInput label="Email Address" type="email" value={form.email} onChange={set('email')} error={errors.email} />
      <FloatingInput label="Service Required *" as="select" value={form.service} onChange={set('service')} error={errors.service} options={serviceOptions} />
      <FloatingInput label="Event Date (Optional)" type="date" value={form.date} onChange={set('date')} error={errors.date} />
      <FloatingInput label="Tell us about your requirements *" as="textarea" value={form.message} onChange={set('message')} error={errors.message} />

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-gold flex-1 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-block"
              >
                ⟳
              </motion.span>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>📤</span>
              <span>Send Enquiry</span>
            </>
          )}
        </button>
        <button
          type="button"
          onClick={() => openWhatsApp()}
          className="btn-whatsapp flex-1 py-4 text-base"
        >
          <span>💬</span>
          <span>WhatsApp Directly</span>
        </button>
      </div>

      <p className="font-poppins text-xs text-gray-600 text-center">
        Your enquiry will be sent directly to our WhatsApp for fastest response.
      </p>
    </form>
  )
}

export default function Contact({ onSuccess, onError }) {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Ready to create your timeless story? Reach out and let's discuss your vision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — Contact Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {[
              { icon: '📞', label: 'Phone', value: contact.phoneDisplay, action: makeCall, actionLabel: 'Call Now' },
              { icon: '💬', label: 'WhatsApp', value: contact.phoneDisplay, action: () => openWhatsApp(), actionLabel: 'Open Chat' },
              { icon: '✉️', label: 'Email', value: contact.email, action: () => window.location.href = `mailto:${contact.email}`, actionLabel: 'Send Email' },
              { icon: '📍', label: 'Studio Address', value: contact.address, action: null },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:border-gold-500/30"
                style={{
                  background: 'linear-gradient(145deg, rgba(20,16,5,0.9), rgba(14,11,3,0.95))',
                  border: '1px solid rgba(212,175,55,0.12)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid rgba(212,175,55,0.2)',
                  }}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-poppins text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="font-poppins text-sm text-gray-300 break-all">{item.value}</p>
                </div>
                {item.action && (
                  <button
                    onClick={item.action}
                    className="flex-shrink-0 px-4 py-2 rounded-xl font-poppins text-xs font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(212,175,55,0.1)',
                      border: '1px solid rgba(212,175,55,0.25)',
                      color: '#D4AF37',
                    }}
                  >
                    {item.actionLabel}
                  </button>
                )}
              </div>
            ))}

            {/* Google Maps */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(212,175,55,0.15)', height: '260px' }}
            >
              <iframe
                title="Shri Ji Production House Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56757.41068905754!2d77.64282697!3d27.49258645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736f1b9f3a7009%3A0xe3d29bab6398ebb5!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(20,16,5,0.95), rgba(14,11,3,0.98))',
                border: '1px solid rgba(212,175,55,0.18)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
              />
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">Send an Enquiry</h3>
              <p className="font-poppins text-sm text-gray-500 mb-7">
                Fill the form below and we'll get back to you within 2 hours.
              </p>
              <ContactForm onSuccess={onSuccess} onError={onError} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
