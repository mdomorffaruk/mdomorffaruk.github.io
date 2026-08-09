import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Paper, Chip, Stack, Button } from '@mui/material'
import CheckCircle from '@mui/icons-material/CheckCircle'
import Schedule from '@mui/icons-material/Schedule'
import CalendarMonth from '@mui/icons-material/CalendarMonth'
import ArrowForward from '@mui/icons-material/ArrowForward'
import VerifiedUser from '@mui/icons-material/VerifiedUser'
import {
  securityHero,
  securityStats,
  securityServices,
  securityStakes,
  securityProcess,
  securityDeliverables,
  securityTrustPoints,
  securityConsultant,
} from '../../data/security.json'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'
import Icon from '../../components/Icon'

export default function SecurityHome() {
  return (
    <>
      <SecurityNav />

      {/* Hero */}
      <Box component="section" className="hero-mesh bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Stack spacing={3} sx={{ alignItems: 'center' }}>
            <Chip
              color="success"
              variant="outlined"
              label={securityHero.badge}
              sx={{ px: 1.5, py: 1, fontSize: '0.85rem' }}
            />
            <Typography variant="h1" sx={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', maxWidth: 760 }}>
              {securityHero.title}
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 640, fontSize: '1.05rem' }}>
              {securityHero.subtitle}
            </Typography>
            <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              {securityHero.ctas.map((cta) =>
                cta.href.includes('contact') ? (
                  <Button key={cta.href} component={Link} to={cta.href} variant="contained" size="large">
                    {cta.label}
                  </Button>
                ) : (
                  <Button key={cta.href} component={Link} to={cta.href} variant="outlined" size="large">
                    {cta.label}
                  </Button>
                )
              )}
            </Stack>
            <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              {securityHero.highlights.map((h) => (
                <Stack key={h} direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'text.secondary' }}>
                  <CheckCircle sx={{ fontSize: 18, color: 'primary.main' }} />
                  <Typography variant="body2">{h}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Credentials stats */}
      <Box component="section" aria-label="Credentials" className="bg-surface-2 border-y" sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ textAlign: 'center' }}>
            {securityStats.map((s) => (
              <Grid key={s.label} size={{ xs: 6, md: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                  {s.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why it matters */}
      <Box component="section" id="why-it-matters" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading
              id="why-heading"
              tag="Why it matters"
              title="Small and medium firms are a target"
              subtitle="Without a dedicated security team, weaknesses go unnoticed — until someone finds them for you."
            />
          </Box>
          <Grid container spacing={3}>
            {securityStakes.map((s) => (
              <Grid key={s.title} size={{ xs: 12, md: 6, lg: 3 }}>
                <Paper className="card-hover" sx={{ p: 3, height: '100%' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {s.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services */}
      <Box component="section" id="services" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading
              id="services-heading"
              tag="Services"
              title="How I can help"
              subtitle="Focused, independent security reviews for websites, portals, and APIs."
            />
          </Box>
          <Grid container spacing={3}>
            {securityServices.map((s) => (
              <Grid key={s.title} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper className="card-hover" sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      mb: 2,
                    }}
                  >
                    <Icon name={s.icon} sx={{ fontSize: 26 }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {s.homeDescription}
                  </Typography>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'text.secondary', mt: 2 }}>
                    <Schedule sx={{ fontSize: 16 }} />
                    <Typography variant="caption">{s.delivery}</Typography>
                  </Stack>
                  <Link to="/security/services" style={{ textDecoration: 'none', fontWeight: 600, marginTop: 8 }}>
                    Learn more <ArrowForward sx={{ fontSize: 16, verticalAlign: 'middle' }} />
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process */}
      <Box component="section" id="process" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading
              id="process-heading"
              tag="Process"
              title="A clear process"
              subtitle="From kickoff to sign-off — you always know where things stand."
            />
          </Box>
          <Grid container spacing={3}>
            {securityProcess.map((p) => (
              <Grid key={p.number} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper className="card-hover" sx={{ p: 3, height: '100%' }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 1 }}>
                    <Chip label={p.number} size="small" color="primary" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {p.title}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'text.secondary', mb: 1 }}>
                    <CalendarMonth sx={{ fontSize: 16 }} />
                    <Typography variant="caption">{p.time}</Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {p.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button component={Link} to="/security/methodology" variant="outlined">
              View the full methodology <ArrowForward sx={{ ml: 1, fontSize: 18 }} />
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Deliverables */}
      <Box component="section" id="deliverables" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading
              id="deliverables-heading"
              tag="Deliverables"
              title="What you receive"
              subtitle="A report built for partners and developers alike."
            />
          </Box>
          <Grid container spacing={3}>
            {securityDeliverables.map((d) => (
              <Grid key={d.title} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper className="card-hover" sx={{ p: 3, height: '100%' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    {d.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {d.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Trust */}
      <Box component="section" id="trust" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading id="trust-heading" tag="Why work with me" title="Independent and confidential by default" />
          </Box>
          <Grid container spacing={3}>
            {securityTrustPoints.map((t) => (
              <Grid key={t.title} size={{ xs: 12, md: 6, lg: 3 }}>
                <Paper className="card-hover" sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                  <VerifiedUser sx={{ fontSize: 32, color: 'primary.main', mb: 1.5 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    {t.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About */}
      <Box component="section" id="about" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <SectionHeading id="about-heading" tag="About" title={securityConsultant.name} subtitle={securityConsultant.role} />
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                {securityConsultant.bio}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {securityConsultant.bio2}
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mt: 2.5 }}>
                {securityConsultant.links.map((l) => (
                  <Button key={l.label} size="small" variant="outlined" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </Button>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Paper sx={{ p: 3 }}>
                <Stack spacing={2}>
                  {securityConsultant.facts.map((f) => (
                    <Box key={f.label}>
                      <Typography variant="caption" color="text.secondary" display="block">
                        {f.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {f.value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" id="cta" className="border-y" sx={{ py: { xs: 6, md: 8 } }}>
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
              Worried about your firm&apos;s security?
            </Typography>
            <Typography sx={{ mb: 3, opacity: 0.9 }}>
              A short, no-obligation conversation is all it takes to get started.
            </Typography>
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
              Schedule a Free Consultation
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
