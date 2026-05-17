import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCountry } from '../hooks/UseCountry.js'
import { COUNTRY_LIST } from '../data/countries/index.js'

// Countries with "Coming Soon" badge — not clickable
const COMING_SOON = [
  { code: 'gh', name: 'Ghana',  flag: '🇬🇭' },
  { code: 'ug', name: 'Uganda', flag: '🇺🇬' },
]

// Circular flag using the country's emoji flag rendered large inside a circle
function FlagCircle({ flag, flagSrc, size = 40 }) {
  const baseStyle = {
    width: size,
    height: size,
    background: '#f0f4ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '9999px',
  }

  if (flagSrc) {
    return (
      <div className="flex-shrink-0" style={baseStyle}>
        <img
          src={flagSrc}
          alt="flag"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    )
  }

  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{ ...baseStyle, fontSize: size * 0.55, lineHeight: 1 }}
    >
      {flag}
    </div>
  )
}

export default function CountrySelector() {
  const { country, switchCountry } = useCountry()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleSwitch = (c) => {
    switchCountry(c)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">

      {/* ── Trigger button — shows current country flag ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`
          flex items-center bg-blue-500;  rounded-full px-3 py-1.5
          text-sm font-medium transition-all duration-200
          ${open
            ? 'border-kuda-purple bg-kuda-purple-light text-kuda-purple'
            : 'border-kuda-purple-border bg-white text-kuda-purple hover:border-kuda-purple'
          }
        `}
      >
        {country.flagSrc ? (
          <img src={country.flagSrc} alt={country.name} style={{ width: 20, height: 20, borderRadius: '50%' }} />
        ) : (
          <span className="text-lg leading-none">{country.flag}</span>
        )}
        {/* <span className="hidden sm:inline text-[13px]">{country.name}</span> */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center opacity-60"
        >
          {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4.5L6 8L10 4.5" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg> */}
        </motion.span>
      </button>

      {/* ── Dropdown modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{   opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[calc(100%+10px)] right-0 z-[200]"
            style={{ width: 520 }}
          >
            <div
              className="bg-white rounded-xl overflow-hidden flex"
              style={{ boxShadow: '0 16px 56px rgba(0,0,0,0.14)', border: '1px solid #f0eaf8' }}
            >

              {/* ── LEFT PANEL ── */}
              <div
                className="flex flex-col p-6 relative"
                style={{ width: 290, background: '#eef0fb', flexShrink: 0 }}
              >
                {/* Close X button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors border-none bg-transparent text-lg leading-none p-1"
                  aria-label="Close"
                >
                  ✕
                </button>

                {/* Globe icon */}
                <div className="mt-8 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: 'linear-gradient(135deg, #a8d8ea, #6ec6e6)' }}
                  >
            <img src={country.flagSrc} alt={country.name} style={{ width: 20, height: 20, borderRadius: '50%' }} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13.5px] text-gray-600 leading-relaxed mb-5">
                  You're currently viewing{' '}
                  <span className="font-semibold text-gray-800">
                    {country.name === 'Global' ? 'Global' : `${country.name}n`}
                  </span>{' '}
                  content.
                </p>

                <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
                  Choose another country or region to see content specific to your location or stay here.
                </p>

                {/* Stay Here link */}
                <button
                  onClick={() => setOpen(false)}
                  className="text-left text-[14px] font-bold text-gray-800 underline underline-offset-2 border-none bg-transparent hover:text-kuda-purple transition-colors"
                >
                  Stay Here
                </button>
              </div>

              {/* ── RIGHT PANEL ── */}
              <div className="flex-1 py-3">

                {/* Active / available countries */}
                {COUNTRY_LIST.map((c) => {
                  const isActive = country.code === c.code
                  return (
                    <motion.button
                      key={c.code}
                      onClick={() => handleSwitch(c)}
                      whileHover={{ backgroundColor: isActive ? '#f3f4f6' : '#f9fafb' }}
                      className={`
                        flex items-center gap-3.5 w-full px-5 py-3
                        border-none transition-colors duration-100 text-left
                        ${isActive ? 'bg-gray-100' : 'bg-white'}
                      `}
                      style={{ background: isActive ? '#f3f4f6' : 'transparent' }}
                    >
                      <FlagCircle flag={c.flag} flagSrc={c.flagSrc} size={38} />
                      <span
                        className={`text-[14px] ${
                          isActive ? 'font-semibold text-gray-900' : 'font-normal text-gray-700'
                        }`}
                      >
                        {c.name}
                      </span>
                    </motion.button>
                  )
                })}

                {/* Divider */}
                <div className="mx-5 my-1 border-t border-gray-100" />

                {/* Coming Soon countries */}
                {COMING_SOON.map((c) => (
                  <div
                    key={c.code}
                    className="flex items-center gap-3.5 px-5 py-3"
                  >
                    <FlagCircle flag={c.flag} size={38} />
                    <span className="text-[14px] text-gray-400 font-normal flex-1">
                      {c.name}
                    </span>
                    {/* Coming Soon badge */}
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                      style={{
                        color: '#40196d',
                        borderColor: '#c4b5d9',
                        background: '#f8f4ff',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
