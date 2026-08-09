import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Paper, Chip, Stack, Button } from '@mui/material'
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined'
import TrackChanges from '@mui/icons-material/TrackChanges'
import Schedule from '@mui/icons-material/Schedule'
import { securityServices, securityCapabilities } from '../../data/security.json'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'
import Icon from '../../components/Icon'

export default function Services() {
  return (
    <>
      <SecurityNav />
      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            as="h1"
            id="services-heading"
            tag="Services"
            title="Security review services"
            subtitle="Fixed-scope, fixed-price engagements tailored to your systems. Every engagement is independent, confidential, and NDA-friendly."
          />
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {securityServices.map((s) => (
              <Grid key={s.title} size={{ xs: 12, lg: 6 }}>
                <Paper className="card-hover" sx={{ p: 3.5, height: '100%' }}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start', mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      }}
                    >
                      <Icon name={s.icon} sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography variant="h5" sx={{ pt: 0.5 }}>
                      {s.title}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {s.description}
                  </Typography>
                  <Stack spacing={1} sx={{ my: 2 }}>
                    {s.features.map((f) => (
                      <Stack key={f} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                        <CheckCircleOutlined sx={{ fontSize: 18, color: 'primary.main', mt: 0.25 }} />
                        <Typography variant="body2">{f}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2, mt: 2, color: 'text.secondary' }}
                  >
                    {s.scope && (
                      <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                        <TrackChanges sx={{ fontSize: 16 }} />
                        <Typography variant="caption">{s.scope}</Typography>
                      </Stack>
                    )}
                    {s.delivery && (
                      <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                        <Schedule sx={{ fontSize: 16 }} />
                        <Typography variant="caption">{s.delivery}</Typography>
                      </Stack>
                    )}
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <SectionHeading tag="What I test" title="Coverage across the attack surface" center />
            <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center', mt: 3 }}>
              {securityCapabilities.map((c) => (
                <Chip key={c} label={c} variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              backgroundImage: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #db2777 100%)',
              color: '#fff',
            }}
          >
            <Typography variant="h3" sx={{ mb: 1, color: '#fff' }}>
              Not sure which service fits?
            </Typography>
            <Typography sx={{ mb: 3, opacity: 0.9 }}>Tell me about your systems and I&apos;ll recommend the right scope.</Typography>
            <Button
              component={Link}
              to="/security/contact"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#fff',
                color: '#4338ca',
                '&:hover': { backgroundColor: '#eef0fb', color: '#4338ca' },
              }}
            >
              Get a Recommendation
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
