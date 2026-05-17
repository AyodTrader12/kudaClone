import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── SVG icons matching the Kuda screenshot exactly ──────────────────────────
function NavIcon({ svgKey, color }) {
  const icons = {
    home: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    send: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
    save: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    chart: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
      </svg>
    ),
    card: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    ),
    bolt: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
      </svg>
    ),
    phone: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
      </svg>
    ),
    wifi: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
      </svg>
    ),
    gift: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M20 6h-2.18c.07-.23.18-.47.18-.76 0-1.52-1.22-2.74-2.74-2.74-1.02 0-1.96.54-2.46 1.36L12 4.9l-.8-1.04C10.7 3.04 9.76 2.5 8.74 2.5 7.22 2.5 6 3.72 6 5.24c0 .29.11.53.18.76H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 0h-1.88C9.62 5.62 9.25 5 8.74 5c-.69 0-1.24.55-1.24 1.24 0 .25.07.48.2.67H7L7 6h5zm5 0h-1.94c.13-.19.2-.42.2-.67C15.5 4.63 14.95 4.08 14.26 4c-.51 0-1 .29-1.26.74L12 5h5v1zM4 11v9c0 .55.45 1 1 1h6v-10H4zm10 10h6c.55 0 1-.45 1-1v-9h-7v10z"/>
      </svg>
    ),
    globe: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    tv: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
      </svg>
    ),
    betting: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
      </svg>
    ),
    transport: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M17.402 9.83C17.265 8.782 16.378 8 15.3 8H14V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2 0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h1v-5l-2.598-3.17zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3-8H4V6h10v5zm2 0V9.5l1.96 1.5H16z"/>
      </svg>
    ),
    overdraft: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    loan: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
      </svg>
    ),
    building: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
    payroll: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    ),
    link: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
      </svg>
    ),
    invoice: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    team: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    analytics: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    ),
    heart: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    blog: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    careers: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M20 6h-2.18c.07-.23.18-.47.18-.76C18 3.45 16.55 2 14.76 2c-1.11 0-2.12.57-2.73 1.48L12 4.25l-.03-.77C11.37 2.57 10.36 2 9.25 2 7.45 2 6 3.45 6 5.24c0 .29.1.53.18.76H4C2.9 6 2 6.9 2 8v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM14.76 4c.69 0 1.24.56 1.24 1.24 0 .68-.56 1.23-1.24 1.23-.69 0-1.25-.56-1.25-1.24S14.07 4 14.76 4zM9.24 4c.69 0 1.25.56 1.25 1.24 0 .68-.56 1.23-1.25 1.23-.68 0-1.24-.56-1.24-1.24S8.56 4 9.24 4zM20 19H4V8h16v11z"/>
      </svg>
    ),
    press: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
        <path d="M22 3l-1.67 1.67L18.67 3 17 4.67 15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3 7 4.67 5.33 3 3.67 4.67 2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3zM11 17H7v-2h4v2zm6 0h-4v-2h4v2zm1-5H6V7h12v5z"/>
      </svg>
    ),
  }

  return icons[svgKey] || (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
      <circle cx="12" cy="12" r="10"/>
    </svg>
  )
}

// ─── Single nav item row ──────────────────────────────────────────────────────
function NavItem({ item }) {
  return (
    <motion.a
      href="#"
      whileHover={{ backgroundColor: '#f8f4ff' }}
      transition={{ duration: 0.12 }}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline cursor-pointer"
    >
      {/* Coloured circular icon pill */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: item.iconBg }}
      >
        <NavIcon svgKey={item.iconSvg} color={item.iconColor} />
      </div>

      {/* Label — purple + bold when active (Discover Personal) */}
      <span
        className={`text-[13.5px] leading-tight whitespace-nowrap ${
          item.active
            ? 'text-kuda-purple font-semibold'
            : 'text-gray-700 font-normal'
        }`}
      >
        {item.label}
      </span>
    </motion.a>
  )
}

// ─── Main dropdown component ──────────────────────────────────────────────────
export default function NavDropdown({ item, isOpen, onToggle }) {
  const ref = useRef(null)

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onToggle(null)
    }
    if (isOpen) document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [isOpen, onToggle])

  return (
    <div ref={ref} className="relative">

      {/* ── Trigger button ── */}
      <button
        onClick={() => onToggle(item.label)}
        className={`
          flex items-center gap-1.5 px-3 py-2 rounded-lg
          text-[15px] font-medium border-none bg-transparent
          transition-colors duration-150
          ${isOpen
            ? 'text-kuda-purple bg-kuda-purple-light'
            : 'text-kuda-dark hover:text-kuda-purple hover:bg-kuda-purple-light'
          }
        `}
      >
        {item.label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          {/* <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg> */}
        </motion.span>
      </button>

      {/* ── Dropdown panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{   opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-[calc(100%+10px)] left-0 z-50"
          >
            <div
              className="bg-white rounded-2xl border border-gray-100 flex"
              style={{ boxShadow: '0 12px 48px rgba(0,0,0,0.12)', minWidth: 500 }}
            >
              {item.sections.map((section, si) => (
                <div
                  key={si}
                  className={`flex flex-col py-4 ${
                    si === 0
                      ? 'px-3 min-w-[220px]'
                      : 'px-3 flex-1 border-l border-gray-100'
                  }`}
                >
                  {/* Section title e.g. PAYMENTS / CREDIT */}
                  {section.title && (
                    <p className="text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.1em] px-3 pt-1 pb-2">
                      {section.title}
                    </p>
                  )}

                  {/* Items */}
                  {section.items.map((navItem, ni) => (
                    <NavItem key={ni} item={navItem} />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
