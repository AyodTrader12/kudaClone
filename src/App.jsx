import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { CountryProvider } from './context/CountryContext.jsx'
import Header  from './static/Header.jsx'
import Footer  from './static/Footer.jsx'
import Home    from './pages/Home.jsx'
import Global from "./pages/global/FullPage.jsx"
import Nigeria from "./pages/nigeria/FullPage.jsx"
import Canada from "./pages/canada/FullPage.jsx"
import Uk from "./pages/uk/Fullpage.jsx"
// ── Layout ──────────────────────────────────────────────────────────────────
// Navbar and Footer are always mounted (they never unmount between routes).
// Only the page content between them swaps out with AnimatePresence.
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/*
        AnimatePresence watches for children being added/removed.
        When you switch country (route changes), the old <Home /> fades out
        and the new one fades in cleanly.
        mode="wait" means: finish the exit animation before starting the enter.
      */}
      <AnimatePresence mode="wait">
        <Routes>
          {/* Each country gets its own URL — same Home component, different data */}
          <Route path="/"      element={<Global />} />
          <Route path="/en-ng" element={<Nigeria />} />
          <Route path="/en-gb" element={<Uk />} />
          <Route path="/en-ca" element={<Canada />} />
         

          {/* Any unknown URL redirects cleanly to global home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

// ── Root App ─────────────────────────────────────────────────────────────────
// Order matters here:
//   1. BrowserRouter  — must wrap everything so useLocation / useNavigate work
//   2. CountryProvider — must be inside BrowserRouter so it can read the URL
//   3. Layout         — uses both router hooks and country context
export default function App() {
  return (
    <BrowserRouter>
      <CountryProvider>
        <Layout />
      </CountryProvider>
    </BrowserRouter>
  )
}
