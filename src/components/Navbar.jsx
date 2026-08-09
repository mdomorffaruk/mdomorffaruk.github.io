import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Avatar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Close from '@mui/icons-material/Close'
import RocketLaunch from '@mui/icons-material/RocketLaunch'
import ThemeToggle from './ThemeToggle'
import { nav } from '../data/site.json'

const { brand, mainLinks, hireMe } = nav

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const linkSx = ({ isActive }) => ({
    color: 'inherit',
    fontWeight: 600,
    fontSize: '0.95rem',
    mx: 0.5,
    px: 1.5,
    py: 0.75,
    borderRadius: 6,
    textDecoration: 'none',
    '&:hover': { color: 'primary.main', backgroundColor: 'action.hover' },
    ...(isActive ? { color: 'primary.main', backgroundColor: 'action.hover' } : {}),
  })

  const drawerLink = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? 'primary.main' : 'text.primary',
    fontWeight: 600,
    py: 1.25,
  })

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar sx={{ gap: 1 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mr: 1 }}>
            <Avatar src={brand.logo} alt={brand.name} sx={{ width: 34, height: 34 }} />
            <Box sx={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {brand.name}
            </Box>
          </Box>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
          {mainLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} style={linkSx}>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <Button
            variant="contained"
            size="small"
            href={hireMe.href}
            sx={{ ml: 1 }}
          >
            <RocketLaunch sx={{ mr: 0.75, fontSize: 18 }} />
            {hireMe.label}
          </Button>
        </Box>

        {/* Mobile menu button */}
        <IconButton
          edge="end"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 300, p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <Avatar src={brand.logo} alt={brand.name} sx={{ width: 34, height: 34 }} />
                <Box sx={{ fontWeight: 800 }}>{brand.name}</Box>
              </Box>
              <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            <List disablePadding>
              {mainLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} style={drawerLink}>
                  <ListItemButton onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </NavLink>
              ))}
            </List>
            <Box sx={{ px: 1, pt: 1.5 }}>
              <ThemeToggle />
            </Box>
            <Box sx={{ p: 1, pt: 1.5 }}>
              <Button
                fullWidth
                variant="contained"
                href={hireMe.href}
              >
                <RocketLaunch sx={{ mr: 0.75, fontSize: 18 }} />
                {hireMe.label}
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
