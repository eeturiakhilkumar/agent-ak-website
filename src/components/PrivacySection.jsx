import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Cpu, Database, WifiOff, Sparkles } from 'lucide-react'

const privacyPoints = [
  {
    Icon: Cpu,
    title: 'Local AI Execution',
    desc: 'Every model runs entirely on your machine. No data is ever sent to external servers for processing.',
    color: 'from-indigo-500/10 to-indigo-500/5',
  },
  {
    Icon: Lock,
    title: 'Encrypted Storage',
    desc: 'All your emails, calendar data, and preferences are encrypted using industry-standard AES-256.',
    color: 'from-cyan-500/10 to-cyan-500/5',
  },
  {
    Icon: Eye,
    title: 'Zero Tracking',
    desc: 'Orbit does not phone home. No analytics, no telemetry, no usage tracking of any kind.',
    color: 'from-purple-500/10 to-purple-500/5',
  },
  {
    Icon: Shield,
    title: 'No Data Selling',
    desc: 'Your data is yours. We have no access to it, and we will never sell, share, or monetize your information.',
    color: 'from-emerald-500/10 to-emerald-500/5',
  },
  {
    Icon: WifiOff,
    title: 'Offline First',
    desc: 'Orbit works without an internet connection. Your productivity never depends on cloud availability.',
    color: 'from-amber-500/10 to-amber-500/5',
  },
  {
    Icon: Database,
    title: 'Full Data Control',
    desc: 'Export, delete, or backup your data anytime. You have complete ownership over everything.',
    color: 'from-pink-500/10 to-pink-500/5',
  },
]

function PrivacyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export default function PrivacySection() {
  return (
    <section id="privacy" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-indigo-500/5 via-cyan-500/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white/40 mb-6">
            <Shield className="w-3 h-3 text-indigo-400" />
            Privacy by design
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Your Data Never{' '}
            <span className="text-gradient">Leaves Your Machine</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            Most AI products send your personal data to the cloud. Orbit Agent does the opposite.
            Every piece of intelligence runs locally. That is the whole point.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Privacy Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Shield illustration */}
            <div className="relative mx-auto max-w-md aspect-square">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse-glow" />
              
              {/* Shield */}
              <div className="absolute inset-[15%] flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-purple-500/20 backdrop-blur-xl border border-white/[0.08] shadow-2xl">
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <PrivacyIcon className="w-16 h-16 text-indigo-400 mb-4" />
                      <h3 className="text-xl font-bold text-white/80 mb-2">100% Local</h3>
                      <p className="text-sm text-white/40">Your data stays on your computer. Always.</p>
                      
                      {/* Security badges */}
                      <div className="flex flex-wrap justify-center gap-2 mt-6">
                        {['AES-256', 'Local ML', 'No Cloud', 'Encrypted'].map((badge) => (
                          <span key={badge} className="px-2.5 py-1 text-[10px] font-medium text-white/40 bg-white/[0.04] rounded-full border border-white/[0.04]">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '25s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-400/40 shadow-lg shadow-indigo-500/20" />
              </div>
              <div className="absolute inset-2 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
                <div className="absolute bottom-0 left-1/3 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/30 shadow-lg shadow-cyan-500/20" />
              </div>
              <div className="absolute inset-4 animate-spin-slow" style={{ animationDuration: '20s' }}>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400/30 shadow-lg shadow-purple-500/20" />
              </div>
            </div>
          </motion.div>

          {/* Privacy Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {privacyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <point.Icon className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/80 mb-0.5">{point.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
