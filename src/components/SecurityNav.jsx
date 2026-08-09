import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Tabs, Tab } from '@mui/material'

const links = [
  { to: '/security', label: 'Overview', end: true },
  { to: '/security/services', label: 'Services', end: false },
  { to: '/security/methodology', label: 'Methodology', end: false },
  { to: '/security/sample-report', label: 'Sample Report', end: false },
  { to: '/security/why-choose-me', label: 'Why Choose Me', end: false },
  { to: '/security/faq', label: 'FAQ', end: false },
  { to: '/security/contact', label: 'Contact', end: false },
]

export default function SecurityNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Box
      component="nav"
      aria-label="Security sections"
      className="bg-surface-2 border-y"
      sx={{ borderTop: 'none' }}
    >
      <Box sx={{ px: { xs: 1, md: 2 }, maxWidth: 960, mx: 'auto' }}>
        <Tabs
          value={pathname}
          onChange={(_e, value) => navigate(value)}
          variant="scrollable"
          scrollButtons={false}
          allowScrollButtonsMobile
          sx={{ py: 1 }}
        >
          {links.map((link) => (
            <Tab key={link.to} value={link.to} label={link.label} />
          ))}
        </Tabs>
      </Box>
    </Box>
  )
}
