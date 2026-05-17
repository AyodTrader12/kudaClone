import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import drop from "../assets/dropicon.svg"
// ─── SVG icons matching the Kuda screenshot exactly ──────────────────────────

// ─── Single nav item row ──────────────────────────────────────────────────────
function NavItem({ item }) {
  return (
    <motion.a
      href="#"
      whileHover={{ backgroundColor: '#f8f4ff' }}
      transition={{ duration: 0.12 }}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-md no-underline cursor-pointer"
    >
      {/* Coloured circular icon pill */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: item.iconBg }}
      >
        {/* <NavIcon svgKey={item.iconSvg} color={item.iconColor} /> */}
        {item.icon && <img src={item.icon} alt={`${item.label} icon`} className="w-5 h-5" />}
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

  const isCompactDropdown = item.label === 'Personal' || item.label === 'Business'
  const visibleSections = isCompactDropdown && item.sections.length > 2
    ? [
        item.sections[0],
        {
          title: null,
          subSections: item.sections.slice(1),
          items: item.sections.slice(1).flatMap((section) => section.items),
        },
      ]
    : item.sections

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => onToggle(item.label)}
      onMouseLeave={() => onToggle(null)}
    >

      {/* ── Trigger button ── */}
      <button
        className={`
          flex items-center gap-1.5 px-3 py-2 rounded-lg
          text-[12px] font-medium border-none bg-transparent
          transition-colors duration-150
          ${isOpen
            ? 'text-[#40196d] bg-[#f4efff]'
            : 'text-[#40196d] hover:text-[#40196d] hover:bg-[#f4efff]'
          }
        `}
      >
        {item.label}
        <span className="flex items-center">
          <img src={drop} alt="Dropdown" className="" />
        </span>
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
              style={{ boxShadow: '0 12px 48px rgba(0,0,0,0.12)', minWidth: 480 }}
            >
              {visibleSections.map((section, si) => (
                <div
                  key={si}
                  className={`flex flex-col py-3 ${
                    si === 0
                      ? 'px-3 min-w-[220px]'
                      : 'px-2 flex-1'
                  }`}
                >
                  {section.subSections ? (
                    section.subSections.map((subSection, ssi) => (
                      <div key={ssi}>
                        {subSection.title && (
                          <p className="text-[10.5px] font-light uppercase tracking-[0.1em] px-3 pt-1 pb-2">
                            {subSection.title}
                          </p>
                        )}
                        {subSection.items.map((navItem, ni) => (
                          <NavItem key={`${ssi}-${ni}`} item={navItem} />
                        ))}
                      </div>
                    ))
                  ) : (
                    <>
                      {section.title && (
                        <p className="text-[10.5px] font-light uppercase tracking-[0.1em] px-3 pt-1 pb-2">
                          {section.title}
                        </p>
                      )}
                      {section.items.map((navItem, ni) => (
                        <NavItem key={ni} item={navItem} />
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
