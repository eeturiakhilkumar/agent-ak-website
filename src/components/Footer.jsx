import { motion } from 'framer-motion'
import { Orbit, CodeXml, MessageCircle, ExternalLink, Shield } from 'lucide-react'

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Downloads', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'Guides', 'Community', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  },
]

const socialLinks = [
  { Icon: CodeXml, href: '#', label: 'GitHub' },
  { Icon: ExternalLink, href: '#', label: 'Twitter' },
  { Icon: MessageCircle, href: '#', label: 'Discord' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full opacity-80" />
                <Orbit className="relative w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white/90">
                Orbit<span className="text-gradient">Agent</span>
              </span>
            </a>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">
              Your personal AI assistant. Running entirely on your local machine.
              Privacy-first, always.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center hover:bg-white/[0.08] hover:text-indigo-400 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5 text-white/40" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">
            © 2026 Orbit Agent. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-white/20">
            <Shield className="w-3 h-3 text-indigo-400/40" />
            Your data never leaves your machine — period.
          </div>
        </div>
      </div>
    </footer>
  )
}
