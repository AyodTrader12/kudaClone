import { useState, useEffect } from 'react'

// Returns true once the page has scrolled past `threshold` pixels.
// Used by Navbar to add a shadow + background blur when user scrolls down.
//
// Usage:
//   const scrolled = useScrolled()       → triggers at 20px (default)
//   const scrolled = useScrolled(80)     → triggers at 80px

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)

    // passive: true tells the browser this listener won't call preventDefault()
    // which allows the browser to optimise scrolling performance
    window.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the listener when the component unmounts
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
