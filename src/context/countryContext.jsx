import { createContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCountryFromPath } from "../data/countries/index"

// 1. Create the context object
//    This is the "PA system" — any component can plug into it
export const CountryContext = createContext(null)

// 2. The Provider wraps the whole app in App.jsx
//    It holds the active country in state and exposes:
//      - country       → the current country object (all its data)
//      - switchCountry → call this to change country + update URL
export function CountryProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Read the current URL path and figure out which country it maps to
  // e.g. "/en-ng/..." → nigeria object
  const [country, setCountry] = useState(() =>
    getCountryFromPath(location.pathname)
  )

  // Every time the URL changes (browser back/forward, link click),
  // re-derive the active country from the new path
  useEffect(() => {
    const derived = getCountryFromPath(location.pathname)
    setCountry(derived)
  }, [location.pathname])

  // Call this from CountrySelector when user picks a different country
  // It updates both the React state AND the browser URL at the same time
  const switchCountry = (newCountry) => {
    setCountry(newCountry)
    navigate(newCountry.urlPrefix)
    // Scroll back to the top so the hero is visible after switching
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <CountryContext.Provider value={{ country, switchCountry }}>
      {children}
    </CountryContext.Provider>
  )
}
