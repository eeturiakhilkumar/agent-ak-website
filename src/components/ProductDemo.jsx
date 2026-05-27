import { motion } from 'framer-motion'
import { Mail, Calendar, Bot, BarChart3, AlertTriangle, CheckCircle, Clock, User, Paperclip } from 'lucide-react'

const emailData = [
  { from: 'Sarah Chen', subject: 'Q2 Revenue Report', preview: 'Here are the quarterly numbers...', time: '2m ago', important: true },
  { from: 'Alex Rivera', subject: 'Design Review Feedback', preview: 'Overall the direction looks great...', time: '15m ago', important: false },
  { from: 'Yuki Tanaka', subject: 'Meeting: Product Launch', preview: 'Reminder: Tomorrow at 10am...', time: '1h ago', important: true },
  { from: 'Maya Patel', subject: 'Budget Approval Needed', preview: 'Please review the attached...', time: '2h ago', important: false },
]

const meetings = [
  { title: 'Product Strategy', time: '10:00 AM', attendees: 6 },
  { title: 'Sprint Planning', time: '2:00 PM', attendees: 8 },
  { title: '1:1 with Sarah', time: '4:30 PM', attendees: 2 },
]

const chatMessages = [
  { role: 'user', text: 'Summarize my unread emails' },
  { role: 'assistant', text: 'You have 5 unread emails. 2 are flagged as important: A revenue report from Sarah Chen and a launch meeting reminder. Want me to draft responses?' },
]

export default function ProductDemo() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            See It In <span className="text-gradient">Action</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            A glimpse of your new AI-powered productivity dashboard.
            Real-time intelligence, right on your desktop.
          </p>
        </motion.div>

        <div className="relative">
          {/* Dashboard Mockup */}
          <div className="relative glass rounded-2xl overflow-hidden shadow-2xl">
            {/* Dashboard header */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-white/30 font-mono">Orbit Agent — Dashboard</span>
            </div>

            {/* Dashboard Content */}
            <div className="grid lg:grid-cols-3 gap-px bg-white/[0.04]">
              {/* Email Panel */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#0a0a0f]/80 p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">Email Intelligence</h3>
                  <span className="ml-auto text-[10px] text-white/20 bg-white/[0.04] px-2 py-0.5 rounded-full">4 unread</span>
                </div>
                <div className="space-y-2">
                  {emailData.map((email, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/[0.04] ${
                        email.important ? 'bg-indigo-500/5 border border-indigo-500/15' : 'bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold ${
                          email.important ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/[0.06] text-white/50'
                        }`}>
                          {email.from.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-white/70 truncate">{email.from}</span>
                            {email.important && <AlertTriangle className="w-2.5 h-2.5 text-amber-400 shrink-0" />}
                            <span className="ml-auto text-[10px] text-white/20 shrink-0">{email.time}</span>
                          </div>
                          <p className="text-xs text-white/60 truncate mt-0.5">{email.subject}</p>
                          <p className="text-[11px] text-white/30 truncate mt-0.5">{email.preview}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Chat Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#0a0a0f]/80 p-4 sm:p-5 lg:col-span-1 border-l-0 lg:border-l border-t lg:border-t-0 border-white/[0.04]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">AI Assistant</h3>
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-green-400/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active
                  </span>
                </div>
                <div className="space-y-3">
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className={`flex gap-2.5 ${msg.role === 'user' ? '' : ''}`}
                    >
                      {msg.role === 'assistant' && (
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Bot className="w-3 h-3 text-cyan-400" />
                        </div>
                      )}
                      <div className={`flex-1 p-3 rounded-lg text-xs leading-relaxed ${
                        msg.role === 'assistant'
                          ? 'bg-cyan-500/5 border border-cyan-500/10 text-white/70'
                          : 'bg-white/[0.04] text-white/50'
                      }`}>
                        {msg.text}
                      </div>
                      {msg.role === 'user' && (
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <User className="w-3 h-3 text-indigo-300" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <input
                      type="text"
                      placeholder="Ask Orbit Agent anything..."
                      className="flex-1 bg-transparent text-xs text-white/60 placeholder-white/20 outline-none"
                      readOnly
                    />
                    <div className="flex items-center gap-1.5">
                      <Paperclip className="w-3 h-3 text-white/20" />
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                        <Bot className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Panel - Calendar + Overview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#0a0a0f]/80 p-4 sm:p-5 border-l-0 lg:border-l border-t lg:border-t-0 border-white/[0.04]"
              >
                {/* Daily Overview */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-4 h-4 text-purple-400" />
                    <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">Daily Overview</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Emails', value: '12', color: 'text-indigo-300' },
                      { label: 'Meetings', value: '3', color: 'text-cyan-300' },
                      { label: 'Tasks', value: '5', color: 'text-purple-300' },
                    ].map((stat) => (
                      <div key={stat.label} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-center">
                        <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-[10px] text-white/30">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meetings */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">Upcoming</h3>
                  </div>
                  <div className="space-y-2">
                    {meetings.map((meeting, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                          <Clock className="w-3.5 h-3.5 text-cyan-400/60" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-white/70 truncate">{meeting.title}</p>
                          <p className="text-[10px] text-white/30">{meeting.time} · {meeting.attendees} attendees</p>
                        </div>
                        <CheckCircle className="w-3.5 h-3.5 text-green-400/40" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Glow behind dashboard */}
          <div className="absolute -bottom-10 -left-10 -right-10 h-20 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 blur-[40px] rounded-full" />
        </div>
      </div>
    </section>
  )
}
