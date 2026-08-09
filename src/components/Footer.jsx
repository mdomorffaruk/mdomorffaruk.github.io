import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Divider, IconButton, Avatar } from '@mui/material'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Work from '@mui/icons-material/Work'
import WhatsApp from '@mui/icons-material/WhatsApp'
import { contact } from '../data/home.json'
import { footer } from '../data/site.json'

export default function Footer() {
  const socials = [
    { label: 'GitHub', href: contact.github, Icon: GitHub },
    { label: 'LinkedIn', href: contact.linkedin, Icon: LinkedIn },
    { label: 'Fiverr', href: contact.fiverr, Icon: Work },
    { label: 'WhatsApp', href: contact.whatsapp, Icon: WhatsApp },
  ]

  return (
    <Box component="footer" sx={{ backgroundColor: 'background.paper', borderTop: '1px solid', borderColor: 'divider', pt: 6, pb: 4, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <Avatar src={footer.brand.logo} alt={footer.brand.name} sx={{ width: 34, height: 34 }} />
              <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                {footer.brand.name}
              </Typography>
            </Box>
            <Typography color="text.secondary" sx={{ mb: 2, maxWidth: 320 }}>
              {footer.tagline}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socials.map(({ label, href, Icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  size="small"
                  sx={{ border: '1px solid', borderColor: 'divider', color: 'text.secondary', '&:hover': { color: 'primary.main', borderColor: 'primary.main' } }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', mb: 2 }}>
              {footer.explore.heading}
            </Typography>
            {footer.explore.links.map((link) => (
              <Link key={link.to} to={link.to} style={{ textDecoration: 'none' }}>
                <Typography color="text.secondary" sx={{ fontSize: '0.9rem', mb: 1.25, '&:hover': { color: 'primary.main' } }}>
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', mb: 2 }}>
              {footer.contact.heading}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '0.9rem', mb: 1.25 }}>
              <a href={`mailto:${contact.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {contact.email}
              </a>
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '0.9rem', mb: 1.25 }}>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                WhatsApp
              </a>
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              <a href={contact.fiverr} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                Fiverr
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
          <Typography color="text.secondary" variant="body2">
            &copy; {new Date().getFullYear()} {footer.brand.name}. {footer.copyrightSuffix}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
