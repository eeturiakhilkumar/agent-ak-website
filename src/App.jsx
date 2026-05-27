import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Orbit } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesBar from './components/FeaturesBar'
import ProductDemo from './components/ProductDemo'
import FeaturesGrid from './components/FeaturesGrid'
import HowItWorks from './components/HowItWorks'
import PrivacySection from './components/PrivacySection'
import Testimonials from './components/Testimonials'
import FutureVision from './components/FutureVision'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#0a0a0f] flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <div className="relative w-16 h-16 flex items-center justify-center mb-4">
          <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-400 animate-spin" />
          <div className="absolute inset-1 rounded-full border-2 border-cyan-500/20 border-b-cyan-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
          <Orbit className="relative w-6 h-6 text-indigo-400" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-white/30 font-mono"
        >
          Initializing Orbit Agent...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <FeaturesBar />
          <ProductDemo />
          <FeaturesGrid />
          <HowItWorks />
          <PrivacySection />
          <Testimonials />
          <FutureVision />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
