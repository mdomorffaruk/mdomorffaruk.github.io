import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import ThemeProvider from './components/ThemeProvider'
import MuiTheme from './components/MuiTheme'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'
import { pageTitles, defaultPageTitle } from './data/site.json'

function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = pageTitles[pathname] || defaultPageTitle
  }, [pathname])
  return null
}

function RedirectHandler() {
  const navigate = useNavigate()
  useEffect(() => {
    const redirect = sessionStorage.getItem('spa-redirect')
    if (redirect) {
      sessionStorage.removeItem('spa-redirect')
      navigate(redirect)
    }
  }, [navigate])
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <MuiTheme>
        <RedirectHandler />
        <PageTitle />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </MuiTheme>
    </ThemeProvider>
  )
}
