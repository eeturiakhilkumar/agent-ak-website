import { motion } from 'framer-motion'
import { Download, ArrowRight, Sparkles, Shield, Zap, Mail, Calendar, Bot } from 'lucide-react'

const floatingCards = [
  { Icon: Mail, label: 'Email Summary', x: -15, y: -10, delay: 0, color: 'from-indigo-500/20 to-purple-500/20' },
  { Icon: Calendar, label: 'Meeting Alert', x: 20, y: -5, delay: 0.5, color: 'from-cyan-500/20 to-blue-500/20' },
  { Icon: Bot, label: 'AI Assistant', x: -10, y: 15, delay: 1, color: 'from-purple-500/20 to-pink-500/20' },
  { Icon: Zap, label: 'Smart Actions', x: 18, y: 12, delay: 1.5, color: 'from-amber-500/20 to-orange-500/20' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[80px] animate-float" />

      {/* Orbital ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] aspect-square">
        <div className="w-full h-full rounded-full border border-white/[0.03] animate-spin-slow" />
        <div className="absolute inset-[15%] rounded-full border border-white/[0.02] animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        <div className="absolute inset-[30%] rounded-full border border-indigo-500/10 animate-spin-slow" style={{ animationDuration: '15s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-white/50 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Introducing the next generation of personal AI</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">Your Personal AI Agent.</span>
          <br />
          <span className="text-gradient">Running Privately</span>
          <br />
          <span className="text-white/90">On Your Machine.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/40 leading-relaxed"
        >
          Orbit Agent is your autonomous AI assistant that lives on your computer.
          It reads your emails, manages your calendar, and helps you stay productive —
          all without sending your data to the cloud.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download for macOS
            </span>
          </button>
          <button className="group px-8 py-3.5 rounded-full text-sm font-medium text-white/70 border border-white/[0.08] hover:border-white/[0.15] hover:text-white hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-2">
            Join Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/20 text-xs uppercase tracking-widest"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-indigo-400/60" /> 100% Local
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-cyan-400/60" /> Lightning Fast
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-3 h-3 text-purple-400/60" /> Email AI
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-blue-400/60" /> Calendar Aware
          </span>
        </motion.div>
      </div>

      {/* Floating UI Cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + card.delay, duration: 0.5 }}
            className={`absolute top-1/2 left-1/2 ${card.color}`}
            style={{
              transform: `translate(calc(-50% + ${card.x * 22}px), calc(-50% + ${card.y * 22}px))`,
            }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] shadow-xl"
            >
              <card.Icon className="w-4 h-4 text-white/70" />
              <span className="text-xs text-white/50 font-medium">{card.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
