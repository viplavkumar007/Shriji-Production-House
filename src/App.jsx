import { useCallback } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Awards from './components/sections/Awards'
import Timeline from './components/sections/Timeline'
import Testimonials from './components/sections/Testimonials'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Gallery from './components/sections/Gallery'
import FAQ from './components/sections/FAQ'
import CTAStrip from './components/sections/CTAStrip'
import Contact from './components/sections/Contact'
import Toast from './components/ui/Toast'
import { useToast } from './hooks/useToast'

export default function App() {
  const { toasts, addToast, removeToast } = useToast()

  const handleFormSuccess = useCallback(() => {
    addToast({
      type: 'success',
      title: 'Enquiry Sent!',
      message: 'Redirecting to WhatsApp for fastest response.',
    })
  }, [addToast])

  const handleFormError = useCallback(() => {
    addToast({
      type: 'error',
      title: 'Something went wrong',
      message: 'Please try again or call us directly.',
    })
  }, [addToast])

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Awards />
        <Timeline />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
        <CTAStrip />
        <Contact onSuccess={handleFormSuccess} onError={handleFormError} />
      </main>
      <Footer />
      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  )
}
