import { contact } from '../data/siteContent'

export function openWhatsApp(message = contact.whatsappMessage) {
  const encoded = encodeURIComponent(message)
  const url = `https://wa.me/${contact.whatsapp}?text=${encoded}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function makeCall() {
  window.location.href = `tel:${contact.phone}`
}

export function sendEmail() {
  window.location.href = `mailto:${contact.email}`
}
