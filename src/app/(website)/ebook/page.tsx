'use client'

import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  FileText,
  Globe,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const FEATURES = [
  {
    label: 'Step-by-step U.S. LLC setup',
    lightBg: 'bg-[#EAF4F1]',
    darkBg: 'dark:bg-[#0B4F49]/30',
    borderColor: 'border-[#0B4F49]/20 dark:border-[#0B4F49]/50',
    iconColor: 'text-[#0B4F49] dark:text-[#2DD4BF]',
  },
  {
    label: 'Bank solutions from Nigeria',
    lightBg: 'bg-[#FBEEDA]',
    darkBg: 'dark:bg-[#C9821E]/20',
    borderColor: 'border-[#C9821E]/20 dark:border-[#C9821E]/50',
    iconColor: 'text-[#C9821E] dark:text-[#FBBF24]',
  },
  {
    label: 'Tax & compliance roadmap',
    lightBg: 'bg-[#FBE7E1]',
    darkBg: 'dark:bg-[#B23E27]/20',
    borderColor: 'border-[#B23E27]/20 dark:border-[#B23E27]/50',
    iconColor: 'text-[#B23E27] dark:text-[#F87171]',
  },
  {
    label: 'Immigration & visa pathways',
    lightBg: 'bg-[#E7EEF3]',
    darkBg: 'dark:bg-[#1F4E6B]/30',
    borderColor: 'border-[#1F4E6B]/20 dark:border-[#1F4E6B]/50',
    iconColor: 'text-[#1F4E6B] dark:text-[#60A5FA]',
  },
]

const EBOOK_URL = 'https://www.experthubllc.com/form/elevate-dreams-ebook'

export default function Ebook() {
  const [isMounted, setIsMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const trackEvent = async (
    type: 'page_view' | 'button_click',
    payload?: string,
  ) => {
    console.log(`[Analytics] ${type}`, payload ?? '(no payload)')

    try {
      await fetch('/api/admin/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, payload }),
      })
    } catch (error) {
      console.error('Analytics error:', error)
    }
  }

  useEffect(() => {
    setIsMounted(true)
    trackEvent('page_view', '/ebook')

    // System dark mode preference detection
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0B1311] text-[#12211E] dark:text-[#E2E8F0] flex flex-col justify-between selection:text-white antialiased transition-colors duration-300 font-sans">
        {/* Top Notification Bar */}
        <div className="w-full text-xs py-2.5 px-4 text-center font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-[#0B4F49] to-[#0F6E63] text-[#DCEFEA] relative">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#E8A33D]" />
          <span>
            Special U.S. Expansion Blueprint released for Nigerian Entrepreneurs
          </span>

          {/* Light/Dark Toggle Button */}
          <button
            onClick={toggleTheme}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-[#E8A33D]" />
            ) : (
              <Moon className="w-4 h-4 text-[#DCEFEA]" />
            )}
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-semibold bg-[#FBEEDA] dark:bg-[#C9821E]/20 border-[#E8A33D]/40 text-[#7A5215] dark:text-[#FBBF24]">
                <ShieldCheck className="w-4 h-4 text-[#0F6E63] dark:text-[#2DD4BF]" />
                <span>100% verified legal roadmap</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#12211E] dark:text-white">
                  Welcome to <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B4F49] via-[#0F6E63] to-[#C9821E] dark:from-[#2DD4BF] dark:via-[#14B8A6] dark:to-[#FBBF24]">
                    Elevate Dreams
                  </span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed max-w-xl text-[#55645F] dark:text-[#94A3B8]">
                  At Elevate Dreams, we empower individuals, entrepreneurs, and
                  visionaries to reach their fullest potential by simplifying
                  the path to U.S. immigration and business success.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {FEATURES.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 text-sm font-medium p-3.5 rounded-xl border transition-colors text-[#12211E] dark:text-[#E2E8F0] ${item.lightBg} ${item.darkBg} ${item.borderColor}`}
                  >
                    <CheckCircle
                      className={`w-4 h-4 shrink-0 ${item.iconColor}`}
                    />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <a
                  href={EBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(
                      'button_click',
                      'Download the ebook now (Landing)',
                    )
                  }
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-base bg-[#E8A33D] hover:bg-[#D6922B] text-[#1F1608] transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98] group cursor-pointer"
                >
                  <span>Download the ebook now</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://www.experthubllc.com/book/Elevate-Dreams"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('button_click', 'Book a consultation')
                  }
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 border bg-[#EAF4F1] dark:bg-[#0B4F49]/20 text-[#0B4F49] dark:text-[#2DD4BF] border-[#0F6E63]/20 dark:border-[#0F6E63]/40 hover:bg-[#DCEFEA] dark:hover:bg-[#0B4F49]/40"
                >
                  <span>Book a consultation</span>
                  <ExternalLink className="w-4 h-4 text-[#0F6E63] dark:text-[#2DD4BF]" />
                </a>
              </div>
            </div>

            {/* Right Column - Ebook Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative p-8 sm:p-9 rounded-2xl text-white border overflow-hidden bg-gradient-to-br from-[#0B4F49] via-[#0A3B36] to-[#12211E] dark:from-[#062C29] dark:via-[#082925] dark:to-[#050B0A] border-[#12857A]/30">
                <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full blur-3xl pointer-events-none bg-[#E8A33D]/20" />
                <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full blur-3xl pointer-events-none bg-[#E1573A]/20" />

                <div className="relative z-10 space-y-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#E8A33D] text-[#1F1608]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold tracking-wide text-[#E8A33D]">
                      Featured publication
                    </span>
                    <h3 className="text-2xl sm:text-[1.7rem] font-extrabold tracking-tight leading-snug">
                      The Nigerian Founder&apos;s Guide to U.S. Business
                      Registration
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#CFE6E0]">
                    Everything you need to successfully transition your startup
                    or enterprise to the United States market with complete
                    legal protection.
                  </p>
                  <div className="pt-4 flex items-center justify-between text-xs font-medium border-t border-[#12857A]/30 text-[#B9D9D1]">
                    <span>Format: PDF (instant download)</span>
                    <span className="font-bold px-2.5 py-1 rounded-full bg-[#E1573A]/20 text-[#F2A98E]">
                      Free access
                    </span>
                  </div>
                  <a
                    href={EBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent('button_click', 'Get your copy (Card)')
                    }}
                    className="w-full py-3.5 rounded-xl font-bold bg-[#E8A33D] hover:bg-[#D6922B] text-[#1F1608] transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Get your copy</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-[#EAF4F1] dark:border-[#1E293B] py-8 px-6 text-center text-sm text-[#55645F] dark:text-[#94A3B8]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-medium m-0">
              © {new Date().getFullYear()} Elevate Dreams. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span>For more insights, visit</span>
              <a
                href="https://www.elevatedreams.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('button_click', 'Footer Website Link')
                }
                className="font-semibold underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors text-[#0F6E63] dark:text-[#2DD4BF]"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>www.elevatedreams.com</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
