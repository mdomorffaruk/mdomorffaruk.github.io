import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Paper, Chip, Stack, Button } from '@mui/material'
import Info from '@mui/icons-material/Info'
import { securitySampleReport, securityReportStructure } from '../../data/security.json'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

const severityColor = {
  Critical: 'error',
  High: 'warning',
  Medium: 'default',
  Low: 'success',
  Info: 'primary',
}

function SeverityChip({ label }) {
  return <Chip label={label} size="small" color={severityColor[label] || 'default'} variant="filled" sx={{ fontWeight: 600 }} />
}

function SectionBody({ section }) {
  if (section.paragraphs) {
    return section.paragraphs.map((p, i) => (
      <Typography key={i} variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {p}
      </Typography>
    ))
  }
  if (section.counts) {
    return (
      <Grid container spacing={2}>
        {section.counts.map((c) => (
          <Grid key={c.label} size={{ xs: 6, md: 2 }}>
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', backgroundColor: 'background.default' }}>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>
                {c.count}
              </Typography>
              <SeverityChip label={c.label} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
  }
  if (section.findings) {
    return (
      <Stack spacing={2}>
        {section.findings.map((f) => (
          <Paper key={f.id} variant="outlined" sx={{ p: 3, backgroundColor: 'background.default' }}>
            <Stack direction="row" spacing={1} useFlexGap sx={{ alignItems: 'center', flexWrap: 'wrap', mb: 1.5 }}>
              <SeverityChip label={f.severity} />
              <Chip label={`CVSS ${f.cvss}`} size="small" variant="outlined" />
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                {f.id}
              </Typography>
            </Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              {f.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              {f.description}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Box component="span" sx={{ fontWeight: 700 }}>
                Impact:{' '}
              </Box>
              <Box component="span" sx={{ color: 'text.secondary' }}>
                {f.impact}
              </Box>
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: 700 }}>
                Remediation:{' '}
              </Box>
              <Box component="span" sx={{ color: 'text.secondary' }}>
                {f.remediation}
              </Box>
            </Typography>
          </Paper>
        ))}
      </Stack>
    )
  }
  if (section.description) {
    return (
      <Typography variant="body2" color="text.secondary">
        {section.description}
      </Typography>
    )
  }
  return null
}

export default function SampleReport() {
  return (
    <>
      <SecurityNav />
      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            as="h1"
            id="report-heading"
            tag="Sample Report"
            title="What the report looks like"
            subtitle="A structured report you can act on — executive summary, risk matrix, verified findings, and step-by-step fixes."
          />
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mt: 2, color: 'text.secondary' }}>
            <Info sx={{ fontSize: 18 }} />
            <Typography variant="body2">{securitySampleReport.disclaimer}</Typography>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid size={{ xs: 12, lg: 10 }}>
              <Stack spacing={5}>
                {securitySampleReport.sections.map((section) => (
                  <Box key={section.title}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      {section.title}
                    </Typography>
                    <SectionBody section={section} />
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid size={{ xs: 12, lg: 8 }} sx={{ textAlign: 'center' }}>
              <SectionHeading tag="Structure" title="Every report follows this structure" center />
              <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'center', mt: 3, mb: 3 }}>
                {securityReportStructure.map((item) => (
                  <Chip key={item} label={item} variant="outlined" />
                ))}
              </Stack>
              <Button component={Link} to="/security/contact" variant="contained" size="large">
                Request a Sample Report
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
