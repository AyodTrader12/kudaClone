import global from './global.js'
import nigeria from './nigeria.js'
import uk from './uk.js'
import canada from "./canada.js"


// Keyed by country code for easy lookup
export const COUNTRIES = {
  global,
  ng: nigeria,
  gb: uk,
  ca: canada,

}

// Ordered list for dropdowns and loops
export const COUNTRY_LIST = [
  COUNTRIES.global,
  COUNTRIES.ng,
  COUNTRIES.gb,
  COUNTRIES.ca,

]

// Map URL prefix → country (used by React Router)
export const getCountryFromPath = (pathname = '/') => {
  if (pathname.startsWith('/en-ng')) return COUNTRIES.ng
  if (pathname.startsWith('/en-gb')) return COUNTRIES.gb
  if (pathname.startsWith('/en-ca')) return COUNTRIES.ca
 
  return COUNTRIES.global
}


export default COUNTRIES
