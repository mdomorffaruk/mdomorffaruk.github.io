import { Box, Container, Grid, Typography, Paper, Stack, Link } from '@mui/material'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { securityContact } from '../../data/security.json'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'
import ContactForm from '../../components/ContactForm'

const channels = [
  { heading: 'Email', value: securityContact.email, href: `mailto:${securityContact.email}`, hint: securityContact.responseTime, external: false },
  { heading: 'WhatsApp', value: securityContact.whatsapp, href: securityContact.whatsappUrl, hint: 'Chat directly on WhatsApp', external: true },
  { heading: 'Calendly', value: 'Book a 15-min call', href: securityContact.calendlyUrl, hint: 'Free consultation, no commitment', external: true },
  { heading: 'LinkedIn', value: 'linkedin.com/in/mdomorffaruk', href: securityContact.linkedinUrl, hint: 'See my professional background', external: true },
]

export default function Contact() {
  return (
    <>
      <SecurityNav />
      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            as="h1"
            id="contact-heading"
            tag="Contact"
            title="Schedule a free consultation"
            subtitle="No commitment. No sales pitch. A short conversation about your systems and security concerns — and what a review would involve."
          />
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Paper sx={{ p: { xs: 3, md: 5 } }}>
                <ContactForm variant="security" />
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                  What happens next
                </Typography>
                <Stack spacing={2.5}>
                  {securityContact.nextSteps.map((step) => (
                    <Stack key={step.number} direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                        }}
                      >
                        {step.number}
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {step.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {step.description}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Paper>

              <Stack spacing={2}>
                {channels.map((c) => (
                  <Paper key={c.heading} className="card-hover" sx={{ p: 3 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {c.heading}
                    </Typography>
                    <Link
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      sx={{ color: 'primary.main', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
                    >
                      {c.value} <ArrowForward sx={{ fontSize: 16 }} />
                    </Link>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {c.hint}
                    </Typography>
                  </Paper>
                ))}
                <Paper sx={{ p: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                    Confidential &amp; independent
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All conversations are confidential and NDA-friendly. You&apos;ll work directly with me — no account managers, no
                    hand-offs.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
