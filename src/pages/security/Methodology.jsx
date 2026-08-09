import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Paper, Stack, Button } from '@mui/material'
import CalendarMonth from '@mui/icons-material/CalendarMonth'
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined'
import { securityProcess } from '../../data/security.json'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

export default function Methodology() {
  return (
    <>
      <SecurityNav />
      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            as="h1"
            id="methodology-heading"
            tag="Methodology"
            title="How a review runs"
            subtitle="A transparent, six-phase process. You know exactly what happens at every step — and nothing starts until you're comfortable."
          />
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid size={{ xs: 12, lg: 10 }}>
              <Stack spacing={3}>
                {securityProcess.map((p) => (
                  <Paper key={p.number} className="card-hover" sx={{ p: 3.5 }}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800 }}>
                          {p.number}
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 0.5, mb: 0.5 }}>
                          {p.title}
                        </Typography>
                        <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'text.secondary' }}>
                          <CalendarMonth sx={{ fontSize: 16 }} />
                          <Typography variant="caption">{p.time}</Typography>
                        </Stack>
                      </Grid>
                      <Grid size={{ xs: 12, md: 9 }}>
                        <Typography variant="body2" color="text.secondary">
                          {p.description}
                        </Typography>
                        <Stack spacing={1} sx={{ mt: 1.5 }}>
                          {p.activities.map((a) => (
                            <Stack key={a} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                              <CheckCircleOutlined sx={{ fontSize: 18, color: 'primary.main', mt: 0.25 }} />
                              <Typography variant="body2">{a}</Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
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
              Ready to see the process in action?
            </Typography>
            <Typography sx={{ mb: 3, opacity: 0.9 }}>Every engagement follows this structure — tailored to your scope.</Typography>
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
              Start a Review
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
