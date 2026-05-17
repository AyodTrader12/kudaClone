import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../hooks/UseScrolled.js'
import { ALL_NAV_ITEMS } from '../data/NavItems.js'
import NavDropdown from './navDropDown.jsx'
import CountrySelector from './CountrySelector.jsx'
import MobileDrawer from './mobileDrawer.jsx'
import logo from "../assets/kudalogo.svg"
// ─── Kuda logomark — stylised K matching the real brand icon ─────────────────
// The real Kuda K is two angular shapes forming a K with a gap in the middle

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const scrolled = useScrolled(20)

  const handleToggle = (label) => {
    setOpenDropdown(label)
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
        <div className="max-w-site mx-auto px-14 h-[72px] flex items-center">

          {/* ── LOGO ── */}
          <a
            href="/"
            className="flex items-center gap-5 flex-shrink-0 no-underline"
            style={{ marginRight: 40 }}
          >
            <img src={logo} alt="Kuda Logo" className="h-18 w-20" />

           
          </a>

          {/* ── Desktop nav links ── */}
          <nav className="hidden lg:flex items-center gap-0 text-[#40196d]">
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
          <div className="hidden lg:flex items-center gap-7 ml-auto">

            {/* Sign In — plain text only, no button styling */}
            <a
              href="#"
              className="no-underline whitespace-nowrap"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#40196d',
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
                fontWeight: 500,
                fontSize: 14,
                padding: '14px 27px',
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
