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
import SecurityHome from './pages/security/SecurityHome'
import SecurityServices from './pages/security/Services'
import SecurityMethodology from './pages/security/Methodology'
import SecuritySampleReport from './pages/security/SampleReport'
import SecurityWhyChooseMe from './pages/security/WhyChooseMe'
import SecurityFaq from './pages/security/FAQ'
import SecurityContact from './pages/security/Contact'
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
            <Route path="/security" element={<SecurityHome />} />
            <Route path="/security/services" element={<SecurityServices />} />
            <Route path="/security/methodology" element={<SecurityMethodology />} />
            <Route path="/security/sample-report" element={<SecuritySampleReport />} />
            <Route path="/security/why-choose-me" element={<SecurityWhyChooseMe />} />
            <Route path="/security/faq" element={<SecurityFaq />} />
            <Route path="/security/contact" element={<SecurityContact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </MuiTheme>
    </ThemeProvider>
  )
}
