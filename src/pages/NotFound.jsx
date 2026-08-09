import { Link } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import Home from '@mui/icons-material/Home'

export default function NotFound() {
  return (
    <Box component="section" className="hero-mesh" sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h1" sx={{ fontSize: 'clamp(4rem, 12vw, 7rem)', color: 'primary.main', mb: 1 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5 }}>
          Page not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </Typography>
        <Button component={Link} to="/" variant="contained" size="large" startIcon={<Home />}>
          Back to Home
        </Button>
      </Container>
    </Box>
  )
}
