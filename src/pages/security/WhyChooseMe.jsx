import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Paper, Chip, Stack, Button } from '@mui/material'
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined'
import FiberManualRecord from '@mui/icons-material/FiberManualRecord'
import { whyChooseMe, securityCapabilities, securityCredentialGroups, securityConsultant } from '../../data/security.json'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

export default function WhyChooseMe() {
  return (
    <>
      <SecurityNav />
      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            as="h1"
            id="why-heading"
            tag="Why Choose Me"
            title="Independent testing from an engineer who builds"
            subtitle="Most security testers only know how to break things. I spent 6+ years building production systems first — which is why I find the weaknesses others miss."
          />
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {whyChooseMe.map((w) => (
              <Grid key={w.title} size={{ xs: 12, md: 6 }}>
                <Paper className="card-hover" sx={{ p: 3.5, height: '100%' }}>
                  <CheckCircleOutlined sx={{ fontSize: 30, color: 'primary.main', mb: 1.5 }} />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {w.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {w.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Coverage" title="What I test" />
          </Box>
          <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {securityCapabilities.map((c) => (
              <Chip key={c} label={c} variant="outlined" />
            ))}
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Background" title="Education, awards & experience" />
          </Box>
          <Grid container spacing={3}>
            {securityCredentialGroups.map((g) => (
              <Grid key={g.title} size={{ xs: 12, md: 6, lg: 3 }}>
                <Paper className="card-hover" sx={{ p: 3, height: '100%' }}>
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
                    {g.title}
                  </Typography>
                  <Stack spacing={1}>
                    {g.items.map((item) => (
                      <Stack key={item} direction="row" spacing={0.5} sx={{ alignItems: 'flex-start' }}>
                        <FiberManualRecord sx={{ fontSize: 10, color: 'primary.main', mt: 0.75 }} />
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid size={{ xs: 12, lg: 8 }} sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                About {securityConsultant.name}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                {securityConsultant.bio}
              </Typography>
              <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center', mb: 3 }}>
                {securityConsultant.links.map((l) => (
                  <Button key={l.label} variant="outlined" size="small" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </Button>
                ))}
              </Stack>
              <Button component={Link} to="/security/contact" variant="contained" size="large">
                Work With Me
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
