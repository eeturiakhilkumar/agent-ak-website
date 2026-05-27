import { motion } from 'framer-motion'
import { Mic, GitBranch, MessageCircle, Globe, FileText, Monitor, Sparkles, ArrowRight } from 'lucide-react'

const roadmapItems = [
  {
    Icon: Mic,
    title: 'Voice Assistant',
    desc: 'Natural voice commands and hands-free operation.',
    status: 'Coming Q3',
    color: 'from-indigo-500/10 to-indigo-500/5',
    border: 'border-indigo-500/20',
  },
  {
    Icon: GitBranch,
    title: 'Autonomous Workflows',
    desc: 'Create custom automations that run on your schedule.',
    status: 'In Development',
    color: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/20',
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp Integration',
    desc: 'Interact with Orbit through WhatsApp messages.',
    status: 'Planned',
    color: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/20',
  },
  {
    Icon: Globe,
    title: 'Browser Automation',
    desc: 'Let Orbit handle research, form fills, and web tasks.',
    status: 'In Development',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
  },
  {
    Icon: FileText,
    title: 'Meeting Summarization',
    desc: 'Automatic notes and action items from your calls.',
    status: 'Coming Q3',
    color: 'from-amber-500/10 to-amber-500/5',
    border: 'border-amber-500/20',
  },
  {
    Icon: Monitor,
    title: 'AI Desktop Automation',
    desc: 'Orbit interacts with your desktop apps on your behalf.',
    status: 'Research',
    color: 'from-pink-500/10 to-pink-500/5',
    border: 'border-pink-500/20',
  },
]

export default function FutureVision() {
  return (
    <section id="vision" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white/40 mb-6">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The Future of{' '}
            <span className="text-gradient">Personal AI</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            Orbit Agent is just the beginning. We are building toward a future
            where your personal AI is an extension of your mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`group p-5 sm:p-6 rounded-xl bg-white/[0.02] border ${item.border} hover:bg-white/[0.04] transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.Icon className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-[10px] font-medium text-white/20 bg-white/[0.04] px-2 py-1 rounded-full">
                  {item.status}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white/80 mb-1.5">{item.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs text-white/30">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Actively developing · More coming soon
          </div>
        </motion.div>
      </div>
    </section>
  )
}
