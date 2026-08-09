import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
  Avatar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Close from '@mui/icons-material/Close'
import RocketLaunch from '@mui/icons-material/RocketLaunch'
import ThemeToggle from './ThemeToggle'
import { nav } from '../data/site.json'

const { brand, mainLinks, securityLinks, hireMe } = nav

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)

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
          {mainLinks.map((link) =>
            link.dropdown ? (
              <Button
                key="security-services"
                color="inherit"
                endIcon={<ExpandMore />}
                onClick={handleMenuOpen}
                sx={{ fontWeight: 600, textTransform: 'none', px: 1.5, mx: 0.5 }}
              >
                {link.label}
              </Button>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.end} style={linkSx}>
                {link.label}
              </NavLink>
            )
          )}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{ sx: { minWidth: 220 } }}
          >
            {securityLinks.map((l) => (
              <MenuItem
                key={l.to}
                component={NavLink}
                to={l.to}
                end={l.end}
                onClick={handleMenuClose}
                sx={{ fontWeight: 600 }}
              >
                {l.label}
              </MenuItem>
            ))}
          </Menu>
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
              {mainLinks.map((link) =>
                link.dropdown ? (
                  <Box key="security-services">
                    <ListItemText primary={link.label} sx={{ px: 1.5, pt: 1.5, fontWeight: 700, color: 'text.secondary', fontSize: '0.8rem' }} />
                    <Divider sx={{ my: 1 }} />
                    {securityLinks.map((l) => (
                      <NavLink key={l.to} to={l.to} end={l.end} style={drawerLink}>
                        <ListItemButton onClick={() => setDrawerOpen(false)}>
                          <ListItemText primary={l.label} />
                        </ListItemButton>
                      </NavLink>
                    ))}
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ) : (
                  <NavLink key={link.to} to={link.to} end={link.end} style={drawerLink}>
                    <ListItemButton onClick={() => setDrawerOpen(false)}>
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </NavLink>
                )
              )}
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
