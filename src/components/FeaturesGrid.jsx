import { motion } from 'framer-motion'
import {
  Mail,
  Calendar,
  Cpu,
  Bell,
  Bot,
  MessageSquareText,
  BarChart3,
  Lock,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    Icon: Mail,
    title: 'Smart Email Summaries',
    desc: 'AI reads your unread emails and generates concise, actionable summaries. Know what matters instantly.',
    color: 'from-indigo-500/10 to-indigo-500/5',
    border: 'hover:border-indigo-500/20',
    glow: 'group-hover:shadow-indigo-500/5',
  },
  {
    Icon: Calendar,
    title: 'Calendar Awareness',
    desc: 'Monitors your calendar, detects conflicts, and prepares you for every meeting with context.',
    color: 'from-cyan-500/10 to-cyan-500/5',
    border: 'hover:border-cyan-500/20',
    glow: 'group-hover:shadow-cyan-500/5',
  },
  {
    Icon: Cpu,
    title: 'Local AI Processing',
    desc: 'Every inference runs on your machine. No cloud calls, no latency, no data leaving your computer.',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'hover:border-purple-500/20',
    glow: 'group-hover:shadow-purple-500/5',
  },
  {
    Icon: Bell,
    title: 'Instant Notifications',
    desc: 'Get smart alerts for important emails, upcoming events, and actionable insights — never miss what matters.',
    color: 'from-amber-500/10 to-amber-500/5',
    border: 'hover:border-amber-500/20',
    glow: 'group-hover:shadow-amber-500/5',
  },
  {
    Icon: Bot,
    title: 'Autonomous Assistance',
    desc: 'Orbit proactively helps you. It drafts replies, suggests actions, and automates repetitive tasks.',
    color: 'from-emerald-500/10 to-emerald-500/5',
    border: 'hover:border-emerald-500/20',
    glow: 'group-hover:shadow-emerald-500/5',
  },
  {
    Icon: MessageSquareText,
    title: 'Natural Language Commands',
    desc: 'Just tell Orbit what you need in plain English. "What emails did I miss?" "Summarize my day."',
    color: 'from-blue-500/10 to-blue-500/5',
    border: 'hover:border-blue-500/20',
    glow: 'group-hover:shadow-blue-500/5',
  },
  {
    Icon: BarChart3,
    title: 'Productivity Insights',
    desc: 'Understand your work patterns. Orbit surfaces insights to help you focus and work smarter.',
    color: 'from-pink-500/10 to-pink-500/5',
    border: 'hover:border-pink-500/20',
    glow: 'group-hover:shadow-pink-500/5',
  },
  {
    Icon: Lock,
    title: 'Secure Local Storage',
    desc: 'All your data is encrypted and stored locally. You maintain full control — always.',
    color: 'from-violet-500/10 to-violet-500/5',
    border: 'hover:border-violet-500/20',
    glow: 'group-hover:shadow-violet-500/5',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white/40 mb-6">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            Everything you need
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Powerful Features. <br className="sm:hidden" />
            <span className="text-gradient">Zero Compromise.</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            Orbit Agent packs enterprise-grade AI capabilities into a lightweight
            local application. No cloud, no tracking, no compromises.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.03] rounded-2xl overflow-hidden"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className={`relative group p-6 sm:p-8 bg-[#0a0a0f] cursor-default transition-all duration-500 ${feature.border} ${feature.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.Icon className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-base font-semibold text-white/80 mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
