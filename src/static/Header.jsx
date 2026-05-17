import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../hooks/UseScrolled.js'
import { ALL_NAV_ITEMS } from '../data/NavItems.js'
import NavDropdown from './navDropDown.jsx'
import CountrySelector from './CountrySelector.jsx'
import MobileDrawer from './mobileDrawer.jsx'

// ─── Kuda logomark — stylised K matching the real brand icon ─────────────────
// The real Kuda K is two angular shapes forming a K with a gap in the middle
function KudaLogoMark() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left vertical bar of K */}
      <rect x="6" y="6" width="6" height="24" rx="2" fill="#40196d" />
      {/* Top-right diagonal of K */}
      <path
        d="M12 18 L26 6 L32 6 L18 18 Z"
        fill="#40196d"
      />
      {/* Bottom-right diagonal of K */}
      <path
        d="M12 18 L26 30 L32 30 L18 18 Z"
        fill="#40196d"
      />
    </svg>
  )
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const scrolled = useScrolled(20)

  const handleToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  const closeAll = () => setOpenDropdown(null)
  const anyOpen  = openDropdown !== null

  return (
    <>
      {/* ── Dark page backdrop when any dropdown is open ── */}
      <AnimatePresence>
        {anyOpen && (
          <motion.div
            key="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeAll}
            className="fixed inset-0 z-[99] pointer-events-auto"
            style={{ top: 72, background: 'rgba(0,0,0,0.32)' }}
          />
        )}
      </AnimatePresence>

      {/* ── Navbar ── */}
      <header
        className={`
          sticky top-0 z-[100] bg-white
          transition-all duration-300
          ${scrolled || anyOpen
            ? 'border-b border-gray-100 shadow-sm'
            : 'border-b border-gray-100'
          }
        `}
      >
        <div className="max-w-site mx-auto px-6 h-[72px] flex items-center">

          {/* ── LOGO ── */}
          <a
            href="/"
            className="flex items-center gap-2 flex-shrink-0 no-underline"
            style={{ marginRight: 40 }}
          >
            <KudaLogoMark />

            <div className="flex flex-col justify-center leading-none">
              {/* kuda. with dot */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: 21,
                  color: '#40196d',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                kuda.
              </span>
              {/* MICROFINANCE BANK subtitle */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 7,
                  color: '#40196d',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  marginTop: 3,
                }}
              >
                Microfinance Bank
              </span>
            </div>
          </a>

          {/* ── Desktop nav links ── */}
          <nav className="hidden lg:flex items-center gap-0 flex-1">
            {ALL_NAV_ITEMS.map((item) => (
              <NavDropdown
                key={item.label}
                item={item}
                isOpen={openDropdown === item.label}
                onToggle={handleToggle}
              />
            ))}
          </nav>

          {/* ── Desktop right side: Sign In | Join Kuda | Flag ── */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">

            {/* Sign In — plain text only, no button styling */}
            <a
              href="#"
              className="no-underline whitespace-nowrap"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#0d0d1a',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#40196d')}
              onMouseLeave={(e) => (e.target.style.color = '#0d0d1a')}
            >
              Sign In
            </a>

            {/* Join Kuda — solid dark purple, rounded-xl rectangle, NOT a pill */}
            <motion.a
              href="#"
              whileHover={{ opacity: 0.88 }}
              whileTap={{ scale: 0.97 }}
              className="no-underline whitespace-nowrap"
              style={{
                background: '#40196d',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 14,
                padding: '11px 24px',
                borderRadius: 10,
                display: 'inline-block',
                lineHeight: 1,
              }}
            >
              Join Kuda
            </motion.a>

            {/* Circular flag — far right, standalone */}
            <CountrySelector />
          </div>

          {/* ── Mobile right side ── */}
          <div className="flex lg:hidden items-center gap-3 ml-auto">
            <CountrySelector />
            <button
              onClick={() => setMobileOpen(true)}
              className="flex flex-col justify-center gap-[5px] p-2 border-none bg-transparent cursor-pointer"
              aria-label="Open navigation menu"
            >
              <span className="block w-6 h-[2px] bg-kuda-dark rounded-full" />
              <span className="block w-6 h-[2px] bg-kuda-dark rounded-full" />
              <span className="block w-4 h-[2px] bg-kuda-dark rounded-full" />
            </button>
          </div>

        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
