import { motion } from 'framer-motion'
import { Quote, Sparkles } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus Johnson',
    role: 'Software Engineer',
    avatar: 'MJ',
    color: 'from-indigo-500/20 to-indigo-500/5',
    text: 'I have tried every AI assistant out there. Orbit is the first one I actually trust. It runs locally, understands my workflow, and the email summaries save me at least an hour every day. This is the future of personal productivity.',
  },
  {
    name: 'Priya Sharma',
    role: 'Startup Founder',
    avatar: 'PS',
    color: 'from-cyan-500/20 to-cyan-500/5',
    text: 'As a founder, my inbox is chaos. Orbit intelligently surfaces what matters and even prepares me for meetings. The fact that my data never leaves my laptop is the killer feature. Finally, an AI I can trust with sensitive business data.',
  },
  {
    name: 'Elena Torres',
    role: 'Productivity Coach',
    avatar: 'ET',
    color: 'from-purple-500/20 to-purple-500/5',
    text: 'I recommend Orbit to all my clients. It is the only AI tool that actually reduces cognitive load instead of adding to it. The calendar awareness is uncanny — it knows when I need to prep and gently reminds me. Game changer.',
  },
  {
    name: 'James Kim',
    role: 'Privacy Advocate & Developer',
    avatar: 'JK',
    color: 'from-emerald-500/20 to-emerald-500/5',
    text: 'I was skeptical of any AI tool touching my email. Orbit changed my mind. It is open about what it does, everything stays local, and the transparency is refreshing. This is how AI should be built — private by default.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white/40 mb-6">
            <Quote className="w-3 h-3 text-indigo-400" />
            What users say
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by{' '}
            <span className="text-gradient">Productivity Pros</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            From developers to founders — see why Orbit Agent is becoming
            the essential local AI tool for serious professionals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-white/10 mb-4 group-hover:text-indigo-400/30 transition-colors" />

              <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                  <span className="text-xs font-semibold text-white/70">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80">{t.name}</p>
                  <p className="text-xs text-white/30">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
