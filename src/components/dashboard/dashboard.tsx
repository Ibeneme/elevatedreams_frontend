'use client'

import { Eye, Moon, MousePointerClick, RefreshCw, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Analytics {
  visits: number
  clicks: number
}

interface ButtonClick {
  _id: string
  buttonName: string
  path: string
  createdAt: string
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<Analytics>({
    visits: 0,
    clicks: 0,
  })
  const [buttonClicks, setButtonClicks] = useState<ButtonClick[]>([])
  const [loading, setLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    fetchData()

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDarkMode(true)
    }
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const analyticsRes = await fetch('/api/admin/analytics')

      if (analyticsRes.ok) {
        const analyticsResult = await analyticsRes.json()
        setAnalytics({
          visits: analyticsResult.visits ?? 0,
          clicks: analyticsResult.clicks ?? 0,
        })
        setButtonClicks(analyticsResult.data?.buttonClicks || [])
      }
    } catch (err) {
      console.error('Failed to load dashboard data', err)
    } finally {
      setLoading(false)
    }
  }

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <main className="min-h-screen py-16 px-6 sm:px-10 relative bg-[#F4F7F6] dark:bg-[#0F172A] text-[#0F172A] dark:text-[#F8FAFC] transition-colors duration-300 font-sans">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 pb-6 border-b border-[#D8E2E0] dark:border-[#334155]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-[#F0FDFA] dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2DD4BF]">
                <span>Admin Portal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                Website Interaction Analytics
              </h1>
              <p className="mt-2 text-sm sm:text-base font-normal text-[#475569] dark:text-[#94A3B8]">
                Monitor real-time page views and user button click activity
                across the entire website.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl border border-[#D8E2E0] dark:border-[#334155] bg-white dark:bg-[#1E293B] text-[#475569] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#334155] transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-[#FBBF24]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#0F766E]" />
                )}
              </button>

              <button
                onClick={fetchData}
                disabled={loading}
                title="Reload data"
                className="p-3 rounded-xl border border-[#D8E2E0] dark:border-[#334155] bg-white dark:bg-[#1E293B] text-[#475569] dark:text-[#94A3B8] transition-all duration-150 disabled:opacity-50 cursor-pointer flex items-center justify-center"
              >
                <RefreshCw
                  className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}
                />
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl border border-[#D8E2E0] dark:border-[#334155] overflow-hidden bg-white dark:bg-[#1E293B]">
            <div className="p-6 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[#D8E2E0] dark:border-[#334155]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                  Total Page Visits
                </span>
                <Eye className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF]" />
              </div>
              <p className="text-3xl font-extrabold mt-4 text-[#0F172A] dark:text-white">
                {analytics.visits}
              </p>
            </div>

            <div className="p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                  Total Button Clicks
                </span>
                <MousePointerClick className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF]" />
              </div>
              <p className="text-3xl font-extrabold mt-4 text-[#0F172A] dark:text-white">
                {analytics.clicks}
              </p>
            </div>
          </div>

          {/* Button Clicks Log */}
          <div className="rounded-2xl border border-[#D8E2E0] dark:border-[#334155] overflow-hidden bg-white dark:bg-[#1E293B]">
            <div className="px-6 py-4 border-b border-[#D8E2E0] dark:border-[#334155] bg-[#F4F7F6] dark:bg-[#0F172A] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MousePointerClick className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#475569] dark:text-[#94A3B8]">
                  Button Clicks Log
                </h2>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F0FDFA] dark:bg-[#0F766E]/30 text-[#0F766E] dark:text-[#2DD4BF]">
                {buttonClicks.length} total
              </span>
            </div>

            {loading ? (
              <div className="p-6 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 rounded animate-pulse bg-slate-200 dark:bg-slate-700"
                  />
                ))}
              </div>
            ) : buttonClicks.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center gap-3">
                <div className="p-4 rounded-2xl bg-[#F0FDFA] dark:bg-[#0F766E]/20">
                  <MousePointerClick className="w-7 h-7 text-[#0D9488] dark:text-[#2DD4BF]" />
                </div>
                <p className="text-base font-bold text-[#0F172A] dark:text-white">
                  No button clicks recorded yet
                </p>
                <p className="text-sm font-normal text-[#475569] dark:text-[#94A3B8]">
                  Clicks will appear here as users interact across the site.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="text-xs font-bold uppercase tracking-wider bg-[#F4F7F6] dark:bg-[#0F172A] text-[#475569] dark:text-[#94A3B8] border-b border-[#D8E2E0] dark:border-[#334155]">
                      <th className="py-3.5 px-6">#</th>
                      <th className="py-3.5 px-6">Button Title</th>
                      <th className="py-3.5 px-6">Page Path</th>
                      <th className="py-3.5 px-6 text-right">Clicked At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buttonClicks.map((click, index) => (
                      <tr
                        key={click._id}
                        className="transition-all border-t border-[#D8E2E0] dark:border-[#334155] hover:bg-[#F0FDFA] dark:hover:bg-[#0F766E]/10"
                      >
                        <td className="py-3.5 px-6 font-medium text-[#94A3B8]">
                          {index + 1}
                        </td>
                        <td className="py-3.5 px-6 font-bold text-[#0F172A] dark:text-white">
                          {click.buttonName}
                        </td>
                        <td className="py-3.5 px-6 font-medium text-[#0D9488] dark:text-[#2DD4BF]">
                          {click.path}
                        </td>
                        <td className="py-3.5 px-6 text-right text-xs font-semibold text-[#94A3B8]">
                          {new Date(click.createdAt).toLocaleString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
