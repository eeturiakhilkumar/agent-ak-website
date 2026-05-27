import { motion } from 'framer-motion'
import { Cpu, Shield, Mail, Calendar, Bell, WifiOff } from 'lucide-react'

const features = [
  { Icon: Cpu, label: '100% Local', desc: 'Runs on your machine' },
  { Icon: Shield, label: 'Privacy First', desc: 'Your data stays yours' },
  { Icon: Mail, label: 'Email Intelligence', desc: 'Smart summaries & alerts' },
  { Icon: Calendar, label: 'Calendar Automation', desc: 'Meeting aware' },
  { Icon: Bell, label: 'Smart Notifications', desc: 'What matters, when' },
  { Icon: WifiOff, label: 'Offline Capable', desc: 'Works without internet' },
]

export default function FeaturesBar() {
  return (
    <section className="relative py-16 sm:py-20 border-y border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.03] rounded-2xl overflow-hidden">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative group bg-[#0a0a0f] px-5 py-6 sm:px-6 sm:py-8"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <feature.Icon className="w-5 h-5 text-indigo-400/80 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-sm font-semibold text-white/80 mb-0.5">{feature.label}</h3>
              <p className="text-xs text-white/30">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
