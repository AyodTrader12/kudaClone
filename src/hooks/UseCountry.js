import { useContext } from 'react'
import { CountryContext } from '../context/CountryContext.jsx'

// Instead of writing useContext(CountryContext) in every single component,
// you just import and call useCountry() — one clean line.
//
// Usage in any component:
//   const { country, switchCountry } = useCountry()
//
// country        → the full active country object (hero, stats, features, etc.)
// switchCountry  → call with a country object to switch + update URL

export function useCountry() {
  const ctx = useContext(CountryContext)

  if (!ctx) {
    throw new Error('useCountry must be used inside <CountryProvider>. Check your App.jsx.')
  }

  return ctx
}
