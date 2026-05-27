import { motion } from 'framer-motion'
import { Download, Link, MessageSquareText, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    Icon: Download,
    title: 'Install Agent',
    desc: 'Download and install Orbit Agent on your macOS or Linux machine. It takes seconds and requires no configuration.',
    color: 'from-indigo-500/10 to-indigo-500/5',
    border: 'border-indigo-500/20',
  },
  {
    number: '02',
    Icon: Link,
    title: 'Connect Email & Calendar',
    desc: 'Securely link your email and calendar. Everything stays local — your credentials are encrypted on your machine.',
    color: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/20',
  },
  {
    number: '03',
    Icon: MessageSquareText,
    title: 'Start Using Natural Language',
    desc: 'That is it. Ask Orbit anything, get summaries, receive smart alerts, and let AI handle the busy work.',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-500/5 via-cyan-500/5 to-purple-500/5 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white/40 mb-6">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            Simple setup
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get Started in{' '}
            <span className="text-gradient">3 Minutes</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            No accounts. No cloud sign-ups. No data harvesting.
            Just download, connect, and go.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connection line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-cyan-500/30 to-purple-500/30 hidden sm:block" />

          <div className="space-y-12 sm:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Number circle */}
                <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-16 h-16 rounded-full bg-[#0a0a0f] border-2 border-white/[0.06] flex items-center justify-center z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <span className="text-xs font-bold text-white/80">{step.number}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className={`relative ml-20 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'sm:pr-0' : 'sm:pl-0'}`}>
                  <div className={`p-5 sm:p-6 rounded-xl bg-white/[0.02] border ${step.border} hover:bg-white/[0.04] transition-all duration-300`}>
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-3`}>
                      <step.Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-white/80 mb-2">{step.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
