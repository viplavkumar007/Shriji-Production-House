// ============================================================
// SHRI JI PRODUCTION HOUSE — SINGLE SOURCE OF TRUTH
// Edit all website content from this one file
// ============================================================

import awardNAA from '../assets/images/award-naa-2026.jpg'
import awardBBA_A from '../assets/images/award-bba-2025-a.jpg'
import awardBBA_B from '../assets/images/award-bba-2025-b.jpg'
import logo from '../assets/images/logo.png'

export const brand = {
  name: 'Shri Ji Production House',
  shortName: 'Shri Ji',
  tagline: 'A Legacy of Visual Storytelling Since 1986',
  subTagline: 'For over four decades, we have transformed emotions into timeless cinematic masterpieces.',
  established: 1986,
  logo,
  founder: {
    name: 'Shyam Pandit',
    title: 'Founder & Creative Director',
    bio: 'With over four decades behind the lens, Shyam Pandit has shaped countless love stories into cinematic legacies. His vision for emotional storytelling has made Shri Ji Production House a household name across Mathura, Agra, and beyond.'
  }
}

export const contact = {
  phone: '7017548575',
  phoneDisplay: '+91 70175 48575',
  whatsapp: '917017548575',
  email: 'shrijiproductionhouse@info.in',
  address: 'Saraswati Kund, Masani Rd, Mathura, Uttar Pradesh 281001',
  addressShort: 'Mathura, Uttar Pradesh',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.3894882!2d77.6803!3d27.4924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI5JzMyLjYiTiA3N8KwNDAnNDkuMSJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
  whatsappMessage: 'Hello Shri Ji Production House! I found you online and I\'m interested in your photography & cinematography services. Could you please share your packages and availability?',
}

export const hero = {
  headline: 'SHRI JI',
  headlineSub: 'PRODUCTION HOUSE',
  tagline: 'A Legacy of Visual Storytelling Since 1986',
  description: 'For over four decades, we have transformed emotions into timeless cinematic masterpieces — weaving love, joy, and memories into frames that last forever.',
  cta1: { label: 'Book Your Shoot', href: '#contact' },
  cta2: { label: 'View Services', href: '#services' },
  slides: [
    {
      id: 1,
      gradient: 'linear-gradient(135deg, #1a0a00 0%, #2d1800 30%, #1a0a00 60%, #0a0500 100%)',
      overlay: 'rgba(10,5,0,0.65)',
      accent: '#D4AF37',
    },
    {
      id: 2,
      gradient: 'linear-gradient(135deg, #0a0a14 0%, #141428 30%, #0a0a14 60%, #050510 100%)',
      overlay: 'rgba(5,5,15,0.65)',
      accent: '#B8860B',
    },
    {
      id: 3,
      gradient: 'linear-gradient(135deg, #0a0500 0%, #1a0a00 30%, #0d0800 60%, #080500 100%)',
      overlay: 'rgba(8,5,0,0.65)',
      accent: '#FFD700',
    },
  ],
  stats: [
    { value: '40+', label: 'Years Experience' },
    { value: '1000+', label: 'Weddings Covered' },
    { value: '5000+', label: 'Happy Clients' },
    { value: '2', label: 'National Awards' },
  ],
}

export const about = {
  eyebrow: 'Our Story',
  title: 'About Shri Ji Production House',
  intro: 'Shri Ji Production House stands as a hallmark of excellence in the art of visual storytelling. Founded in 1986 by Shyam Pandit, we have grown into one of the most trusted and celebrated photography and cinematography studios in North India.',
  body: [
    'With a legacy spanning over four decades, our work speaks through the emotions of thousands of couples whose most precious moments we have had the privilege to capture. From intimate ceremonies to grand celebrations, we treat every event as a unique canvas for cinematic artistry.',
    'Our studio is equipped with state-of-the-art drone cinematography, professional-grade cinema cameras, and a team of highly trained visual artists — all working in harmony to deliver films and photographs that transcend time.',
    'From Mathura and Agra to across India, Shri Ji Production House has earned the trust of discerning clients who demand nothing but the finest.',
  ],
  highlights: [
    { icon: '📅', label: 'Founded 1986' },
    { icon: '📍', label: 'Mathura & Agra' },
    { icon: '🚁', label: 'Drone Cinematography' },
    { icon: '🎬', label: 'Premium Wedding Films' },
    { icon: '🏆', label: 'Award-Winning Studio' },
  ],
}

export const services = [
  {
    id: 1,
    icon: '💍',
    title: 'Wedding Photography',
    description: 'Every glance, every tear, every moment of joy — captured with cinematic precision in images that become your most treasured heirlooms.',
    whatsappMsg: 'Hi! I\'m interested in Wedding Photography by Shri Ji Production House. Please share your packages and pricing.',
  },
  {
    id: 2,
    icon: '🌸',
    title: 'Pre-Wedding Photography',
    description: 'Tell your love story before the big day. Our signature pre-wedding sessions blend artistic vision with breathtaking locations.',
    whatsappMsg: 'Hi! I\'m interested in a Pre-Wedding Shoot at Shri Ji Production House. Please share your packages.',
  },
  {
    id: 3,
    icon: '🎬',
    title: 'Cinematic Wedding Films',
    description: 'Hollywood-quality wedding films that weave emotion, music, and visual poetry into a cinematic experience you\'ll relive forever.',
    whatsappMsg: 'Hi! I\'m interested in Cinematic Wedding Films by Shri Ji Production House. Please share your packages.',
  },
  {
    id: 4,
    icon: '🚁',
    title: 'Drone Cinematography',
    description: 'Breathtaking aerial perspectives that add a grand, larger-than-life dimension to your wedding story and event coverage.',
    whatsappMsg: 'Hi! I\'m interested in Drone Cinematography services at Shri Ji Production House. Please share details.',
  },
  {
    id: 5,
    icon: '👶',
    title: 'Baby Shoot',
    description: 'Precious milestones captured with tenderness and artistry — first smiles, curious eyes, and tiny moments that grow up too fast.',
    whatsappMsg: 'Hi! I\'m interested in a Baby Shoot at Shri Ji Production House. Please share your packages.',
  },
  {
    id: 6,
    icon: '🤰',
    title: 'Maternity Shoot',
    description: 'Celebrate the most beautiful chapter of life with a luxury maternity session — elegant, empowering, and deeply personal.',
    whatsappMsg: 'Hi! I\'m interested in a Maternity Shoot at Shri Ji Production House. Please share your packages.',
  },
  {
    id: 7,
    icon: '👗',
    title: 'Fashion Photography',
    description: 'Editorial-grade fashion photography for models, designers, and brands — bold compositions, impeccable lighting, striking imagery.',
    whatsappMsg: 'Hi! I\'m interested in Fashion Photography at Shri Ji Production House. Please share your packages.',
  },
  {
    id: 8,
    icon: '📦',
    title: 'Product Photography',
    description: 'E-commerce and brand-quality product photography that tells your product\'s story and drives conversions with visual impact.',
    whatsappMsg: 'Hi! I\'m interested in Product Photography at Shri Ji Production House. Please share your packages.',
  },
  {
    id: 9,
    icon: '🎤',
    title: 'Live Event Coverage',
    description: 'Concerts, corporate events, cultural programs — dynamic multi-camera coverage that captures the energy and essence of live moments.',
    whatsappMsg: 'Hi! I\'m interested in Live Event Coverage by Shri Ji Production House. Please share your packages.',
  },
]

export const awards = [
  {
    id: 1,
    year: '2025',
    title: 'Bharat Business Award',
    subtitle: 'Presented by Ashneer Grover',
    description: 'In 2025, our dedication to excellence and artistry was officially recognized with the coveted Bharat Business Award, presented by Ashneer Grover — one of India\'s most celebrated entrepreneurs.',
    images: [awardBBA_A, awardBBA_B],
    presenter: 'Ashneer Grover',
    presenterTitle: 'Entrepreneur & Shark Tank India Judge',
    color: '#D4AF37',
  },
  {
    id: 2,
    year: '2026',
    title: 'National Achievers Award',
    subtitle: 'Presented by Tabu',
    description: 'In 2026, we were honoured with the National Achievers Award, presented by the esteemed Bollywood actress Tabu — a testament to Shyam Pandit\'s mastery and the trust our clients place in our craft.',
    images: [awardNAA],
    presenter: 'Tabu',
    presenterTitle: 'National Award-Winning Bollywood Actress',
    color: '#FFD700',
  },
]

export const awardsContent = {
  eyebrow: 'Recognition & Honours',
  title: 'Award-Winning Excellence',
  subtitle: 'Recognized Nationally For Creative Excellence',
  body: 'At Shri Ji Production House, we pride ourselves on turning every visual story into a timeless masterpiece. Under the leadership of our founder, Shyam Pandit, our dedication to excellence and artistry was officially recognized in 2025, with the presentation of the coveted Bharat Business Award by Ashneer Grover. This journey of distinction continued in 2026, as we were honoured with the National Achievers Award from the esteemed Indian actor, Tabu. These accolades stand as a testament to Shyam Pandit\'s mastery and the trust our clients place in our craft.',
}

export const timeline = [
  { year: '1986', title: 'Founded', desc: 'Shyam Pandit establishes Shri Ji Production House in Mathura, starting a legacy of visual excellence.' },
  { year: '2000+', title: 'Expansion', desc: 'Studio expands to Agra, serving a wider clientele across the Braj region with a growing team of professionals.' },
  { year: '2015+', title: 'Cinematic Era', desc: 'Embracing modern cinema cameras, drone technology, and international editing techniques to redefine wedding films.' },
  { year: '2025', title: 'Bharat Business Award', desc: 'Awarded the prestigious Bharat Business Award by Ashneer Grover for excellence in creative entrepreneurship.' },
  { year: '2026', title: 'National Achievers Award', desc: 'Honoured with the National Achievers Award presented by acclaimed actress Tabu — a national recognition of artistry.' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya & Rahul Sharma',
    location: 'Mathura',
    rating: 5,
    text: 'Shri Ji Production House turned our wedding into a Bollywood film. Every frame was perfect. Shyam ji and his team have an eye for emotion that is truly unmatched. We have watched our wedding film over 50 times and it still makes us cry.',
    service: 'Wedding Photography & Film',
    initials: 'PS',
  },
  {
    id: 2,
    name: 'Ananya & Vikram Gupta',
    location: 'Agra',
    rating: 5,
    text: 'Our pre-wedding shoot at the Taj Mahal was a dream come true thanks to Shri Ji. The team was so professional and the results were magazine-worthy. Every photo tells a story. We are beyond grateful.',
    service: 'Pre-Wedding Photography',
    initials: 'AG',
  },
  {
    id: 3,
    name: 'Sunita Agarwal',
    location: 'Delhi',
    rating: 5,
    text: 'Best maternity photographer in the region, period. Shri Ji Production House made me feel beautiful and confident throughout the shoot. The photos are absolutely stunning and I will treasure them forever.',
    service: 'Maternity Shoot',
    initials: 'SA',
  },
  {
    id: 4,
    name: 'Rohit & Kavita Jain',
    location: 'Vrindavan',
    rating: 5,
    text: 'The drone cinematography was spectacular! Seeing our wedding from above was breathtaking. The entire team was incredibly professional, on time, and delivered the film within the promised timeframe.',
    service: 'Wedding & Drone Cinematography',
    initials: 'KJ',
  },
  {
    id: 5,
    name: 'Meera Sharma',
    location: 'Mathura',
    rating: 5,
    text: 'Our baby\'s first photoshoot was magical! Shri Ji Production House has a gift for making babies smile. The photos captured my son\'s personality perfectly. A truly premium experience.',
    service: 'Baby Shoot',
    initials: 'MS',
  },
  {
    id: 6,
    name: 'Arjun Mehta',
    location: 'Noida',
    rating: 5,
    text: 'Hired them for our corporate event in Mathura and the coverage was exceptional. Professional team, great equipment, and the edited video was delivered on time. Highly recommend for any large-scale event.',
    service: 'Live Event Coverage',
    initials: 'AM',
  },
]

export const whyChooseUs = [
  { icon: '🎖️', title: '40+ Years Experience', desc: 'Four decades of visual storytelling mastery in the heart of Braj' },
  { icon: '🏆', title: 'Award-Winning Studio', desc: 'Bharat Business Award 2025 & National Achievers Award 2026' },
  { icon: '👨‍🎨', title: 'Professional Team', desc: 'Skilled artists, cinematographers, and drone pilots under one roof' },
  { icon: '✂️', title: 'Premium Editing', desc: 'Cinema-grade color grading and post-production excellence' },
  { icon: '🚁', title: 'Drone Coverage', desc: 'Breathtaking aerial perspectives for grand, cinematic visuals' },
  { icon: '🎭', title: 'Cinematic Storytelling', desc: 'Narrative-driven films that evoke real emotion every time you watch' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'Timely delivery without compromising on our signature quality' },
  { icon: '💎', title: 'Trusted Legacy', desc: 'Over 5,000 happy families trust us as their visual storytellers' },
]

export const faqs = [
  {
    q: 'How far in advance should I book Shri Ji Production House?',
    a: 'We recommend booking at least 3–6 months in advance for wedding coverage, as our calendar fills quickly — especially for peak wedding seasons (October–February). For pre-wedding shoots, maternity, or baby shoots, 2–4 weeks notice is usually sufficient.',
  },
  {
    q: 'Do you travel outside Mathura and Agra?',
    a: 'Absolutely! While our base is in Mathura, we regularly cover weddings and events across North India, including Delhi, Vrindavan, Jaipur, Lucknow, and beyond. Travel and accommodation charges may apply for outstation shoots.',
  },
  {
    q: 'What packages do you offer for wedding photography?',
    a: 'We offer flexible packages tailored to your needs — from single-day coverage to complete wedding packages including pre-wedding shoot, wedding day photography, cinematic film, and drone coverage. Contact us via WhatsApp or call for a customized quote.',
  },
  {
    q: 'How long does it take to receive the final photos and film?',
    a: 'Edited photographs are typically delivered within 2–3 weeks. Cinematic wedding films take 4–6 weeks for full post-production. We provide sample edits within 48 hours of the event.',
  },
  {
    q: 'What equipment do you use?',
    a: 'We use professional cinema cameras (Sony FX series, Canon Cinema), DJI Mavic 3 drones for aerial footage, professional lighting setups, and industry-standard editing software for color grading and post-production.',
  },
  {
    q: 'Do you offer a pre-wedding consultation?',
    a: 'Yes! We believe in understanding your vision before any shoot. We offer in-person consultations at our Mathura studio, or video calls for outstation clients. This helps us craft a personalized storyboard for your special day.',
  },
]

export const nav = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Awards',     href: '#awards' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Contact',    href: '#contact' },
]
