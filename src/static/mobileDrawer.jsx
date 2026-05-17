import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCountry } from "../hooks/UseCountry.js"
import { COUNTRY_LIST } from "../data/countries/index.js"
import { ALL_NAV_ITEMS } from "../data/NavItems.js"

const COMING_SOON = [
  { code: 'gh', name: 'Ghana',  flag: '🇬🇭' },
  { code: 'ug', name: 'Uganda', flag: '🇺🇬' },
]

function FlagCircle({ flag, size = 36 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: '#f0f4ff',
        fontSize: size * 0.55,
        lineHeight: 1,
      }}
    >
      {flag}
    </div>
  )
}

export default function MobileDrawer({ open, onClose }) {
  const { country, switchCountry } = useCountry()
  const [expanded, setExpanded] = useState(null)
  const [showRegions, setShowRegions] = useState(false)

  const handleSwitch = (c) => {
    switchCountry(c)
    onClose()
  }

  const toggleSection = (label) => {
    setExpanded((prev) => (prev === label ? null : label))
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/50 lg:hidden"
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-[201] w-[85%] max-w-[380px] bg-white overflow-y-auto lg:hidden"
          >
            <div className="px-5 py-6 flex flex-col min-h-full">

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-kuda-purple rounded-xl flex items-center justify-center text-white font-black text-base">
                    K
                  </div>
                  <span className="text-xl font-black text-kuda-purple tracking-tight">kuda</span>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors border-none text-lg"
                >
                  ✕
                </button>
              </div>

              {/* ── Region view toggle ── */}
              {showRegions ? (
                /* REGION PICKER VIEW */
                <div className="flex flex-col flex-1">
                  <button
                    onClick={() => setShowRegions(false)}
                    className="flex items-center gap-2 text-sm text-kuda-purple font-semibold mb-6 border-none bg-transparent"
                  >
                    ← Back
                  </button>

                  {/* Left-panel info */}
                  <div
                    className="rounded-2xl p-5 mb-4"
                    style={{ background: '#eef0fb' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl mb-3"
                      style={{ background: 'linear-gradient(135deg, #a8d8ea, #6ec6e6)' }}
                    >
                      🌍
                    </div>
                    <p className="text-[13px] text-gray-600 leading-relaxed mb-2">
                      You're currently viewing{' '}
                      <span className="font-semibold text-gray-800">{country.name}</span>{' '}
                      content.
                    </p>
                    <p className="text-[12px] text-gray-500 leading-relaxed">
                      Choose another country or region to see content specific to your location.
                    </p>
                  </div>

                  {/* Available countries */}
                  <div className="flex flex-col gap-1 mb-2">
                    {COUNTRY_LIST.map((c) => {
                      const isActive = country.code === c.code
                      return (
                        <button
                          key={c.code}
                          onClick={() => handleSwitch(c)}
                          className={`
                            flex items-center gap-3 w-full px-3 py-2.5 rounded-xl
                            border-none transition-colors text-left
                            ${isActive ? 'bg-gray-100' : 'bg-transparent hover:bg-gray-50'}
                          `}
                        >
                          <FlagCircle flag={c.flag} size={36} />
                          <span className={`text-[14px] ${isActive ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                            {c.name}
                          </span>
                          {isActive && <span className="ml-auto text-kuda-purple font-bold">✓</span>}
                        </button>
                      )
                    })}
                  </div>

                  {/* Coming soon */}
                  <div className="border-t border-gray-100 pt-2 flex flex-col gap-1">
                    {COMING_SOON.map((c) => (
                      <div key={c.code} className="flex items-center gap-3 px-3 py-2.5">
                        <FlagCircle flag={c.flag} size={36} />
                        <span className="text-[14px] text-gray-400 flex-1">{c.name}</span>
                        <span
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                          style={{ color: '#40196d', background: '#f8f4ff', border: '1px solid #c4b5d9' }}
                        >
                          Coming Soon
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* MAIN NAV VIEW */
                <>
                  {/* Accordion nav */}
                  <nav className="mb-6 flex flex-col gap-1">
                    {ALL_NAV_ITEMS.map((navItem) => (
                      <div key={navItem.label}>
                        <button
                          onClick={() => toggleSection(navItem.label)}
                          className={`
                            flex items-center justify-between w-full
                            px-4 py-3.5 rounded-xl border-none text-[15px] font-semibold
                            transition-colors duration-150
                            ${expanded === navItem.label
                              ? 'bg-kuda-purple-light text-kuda-purple'
                              : 'bg-transparent text-kuda-dark hover:bg-gray-50'
                            }
                          `}
                        >
                          {navItem.label}
                          <motion.span
                            animate={{ rotate: expanded === navItem.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="opacity-50 text-sm"
                          >
                            ▾
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {expanded === navItem.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: 'easeOut' }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 pt-1 pb-2 flex flex-col gap-0.5">
                                {navItem.sections.map((section, si) => (
                                  <div key={si}>
                                    {section.title && (
                                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.08em] px-3 pt-2 pb-1">
                                        {section.title}
                                      </p>
                                    )}
                                    {section.items.map((item, ii) => (
                                      <a
                                        key={ii}
                                        href="#"
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-kuda-purple-light transition-colors"
                                      >
                                        {/* Coloured icon pill */}
                                        <div
                                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                          style={{ background: item.iconBg || '#f0eaf8' }}
                                        >
                                          <span style={{ fontSize: 14 }}>•</span>
                                        </div>
                                        <span className="text-[13px] font-medium text-gray-700">
                                          {item.label}
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </nav>

                  {/* Region switcher button */}
                  <button
                    onClick={() => setShowRegions(true)}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-kuda-purple-border hover:bg-kuda-purple-light transition-colors mb-6 bg-transparent"
                  >
                    <FlagCircle flag={country.flag} size={32} />
                    <div className="text-left flex-1">
                      <p className="text-[13px] font-semibold text-kuda-dark">{country.name}</p>
                      <p className="text-[11px] text-gray-400">Change region</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 3L9 7L5 11" stroke="#9b8ab0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* CTA buttons */}
                  <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-kuda-purple-border">
                    <a
                      href="#"
                      className="text-center py-3.5 rounded-full font-semibold text-sm text-kuda-purple border border-kuda-purple hover:bg-kuda-purple-light transition-colors"
                    >
                      Log In
                    </a>
                    <a
                      href="#"
                      className="text-center py-3.5 rounded-full font-bold text-sm text-white bg-kuda-purple hover:bg-kuda-purple-hover transition-colors"
                    >
                      Get Kuda Free
                    </a>
                  </div>
                </>
              )}

            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
