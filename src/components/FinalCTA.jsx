import { motion } from 'framer-motion'
import { Download, ArrowRight, Sparkles, Orbit } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12 lg:p-16"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/[0.06] mb-8"
          >
            <Orbit className="w-8 h-8 text-indigo-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Experience the Future of{' '}
            <span className="text-gradient">Personal AI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/40 max-w-xl mx-auto text-sm sm:text-base"
          >
            Join thousands of professionals who have already taken control of their
            productivity. Orbit Agent is free during beta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Now
              </span>
            </button>
            <button className="group px-8 py-3.5 rounded-full text-sm font-medium text-white/70 border border-white/[0.08] hover:border-white/[0.15] hover:text-white hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-2">
              Request Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xs text-white/20"
          >
            macOS · Linux · Windows (Coming Soon) ·{' '}
            <span className="text-indigo-400/40">No cloud dependency · No sign-up required</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
