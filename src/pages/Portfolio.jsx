import { Box, Container, Grid, Typography, Paper, Chip, Button, Avatar, Stack, Divider, Link } from '@mui/material'
import Star from '@mui/icons-material/Star'
import Check from '@mui/icons-material/Check'
import GitHub from '@mui/icons-material/GitHub'
import Schedule from '@mui/icons-material/Schedule'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Verified from '@mui/icons-material/Verified'
import PlayCircleOutlined from '@mui/icons-material/PlayCircleOutlined'
import { about, timeline, skillCategories, certifications, apps, portfolioProjects, writeups, testimonials } from '../data/portfolio.json'
import SectionHeading from '../components/SectionHeading'
import Marquee from '../components/Marquee'

const typeLabels = {
  experience: { label: 'Experience', color: 'primary' },
  education: { label: 'Education', color: 'success' },
  award: { label: 'Award', color: 'warning' },
}

function TestimonialCard({ t }) {
  return (
    <Paper className="card-hover" sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Stack direction="row" spacing={0.5} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} sx={{ fontSize: 18, color: 'warning.main' }} />
        ))}
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
        &ldquo;{t.text}&rdquo;
      </Typography>
      <Divider />
      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
        <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main', fontSize: '1rem', fontWeight: 700 }}>
          {t.name.charAt(0).toUpperCase()}
        </Avatar>
        <Box>
          <Typography variant="subtitle2">{t.name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {t.role}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  )
}

function AppCard({ a }) {
  return (
    <Paper className="card-hover" sx={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box className="img-zoom" sx={{ aspectRatio: '1 / 1', backgroundColor: 'background.default' }}>
        <img src={`/${a.preview}`} alt={`${a.name} preview`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center', mb: 1.5 }}>
          <img src={`/${a.icon}`} alt={`${a.name} icon`} width="32" height="32" style={{ borderRadius: 8 }} />
          <Typography variant="subtitle2" noWrap>
            {a.name}
          </Typography>
        </Stack>
        <Button
          variant="outlined"
          size="small"
          startIcon={<PlayCircleOutlined />}
          href={a.playUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: 'auto', alignSelf: 'flex-start' }}
        >
          View on Play Store
        </Button>
      </Box>
    </Paper>
  )
}

export default function Portfolio() {
  return (
    <Box component="main">
      {/* About hero */}
      <Box component="section" className="hero-mesh" sx={{ borderBottom: '1px solid', borderColor: 'divider', backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography component="p" className="eyebrow" sx={{ mb: 1 }}>
                Portfolio
              </Typography>
              <Typography variant="h1" sx={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', mb: 2 }}>
                {about.role}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 2 }}>
                {about.summary}
              </Typography>
              <Typography color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
                &ldquo;{about.philosophy}&rdquo;
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                {about.highlights.map((h) => (
                  <Chip key={h} icon={<Check sx={{ fontSize: 16 }} />} label={h} variant="outlined" size="small" />
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
              <Avatar
                src="/profile.gif"
                alt="Md Omar Faruk"
                sx={{ width: 200, height: 200, mx: 'auto', border: '4px solid', borderColor: 'divider', boxShadow: 'var(--shadow-md)' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box component="section" id="timeline" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Timeline" title="Experience & education" />
          </Box>
          <Box sx={{ maxWidth: 760, ml: { lg: 'auto' }, mr: { lg: 'auto' } }}>
            <Box sx={{ borderLeft: '2px solid', borderColor: 'divider', pl: 3.5, ml: 2 }}>
              <Stack spacing={4}>
                {timeline.map((t) => (
                  <Box key={t.title + (t.year || '')}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ alignItems: { sm: 'center' }, flexWrap: 'wrap' }}>
                      <Chip label={typeLabels[t.type].label} size="small" color={typeLabels[t.type].color} variant="outlined" />
                      {t.year && (
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                          {t.year}
                        </Typography>
                      )}
                      <Typography variant="h6">{t.title}</Typography>
                    </Stack>
                    {t.organization && (
                      <Typography variant="subtitle2" sx={{ color: 'primary.main', mt: 0.5 }}>
                        {t.organization}
                      </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, whiteSpace: 'pre-line' }}>
                      {t.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Skills */}
      <Box component="section" id="skills" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Skills" title="Skills & expertise" subtitle="Backend engineering, web security, recon automation, and reverse engineering." />
          </Box>
          <Grid container spacing={3}>
            {skillCategories.map((cat) => (
              <Grid key={cat.category} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper className="card-hover" sx={{ p: 3, height: '100%' }}>
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1.5 }}>
                    {cat.category}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                    {cat.skills.map((s) => (
                      <Chip key={s} label={s} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Certifications marquee */}
      <Box component="section" id="certifications" className="border-y" sx={{ py: 3.5, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg" sx={{ mb: 1 }}>
          <SectionHeading tag="Certifications" title="Certifications & courses" subtitle="Hover to pause — click any certificate to view the credential." />
        </Container>
        <Marquee speed={40}>
          {certifications.map((c) => (
            <a key={c.name} className="marquee-chip" href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
              <Verified sx={{ fontSize: 18, color: 'primary.main' }} />
              {c.name}
              <span style={{ color: 'var(--text-2)' }}>{c.issuer}</span>
            </a>
          ))}
        </Marquee>
      </Box>

      {/* Apps on Google Play — marquee */}
      <Box component="section" id="apps" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Android Apps" title="Apps on Google Play" subtitle="Kotlin Android applications — published and maintained on the Play Store. Hover to pause." />
          </Box>
        </Container>
        <Marquee speed={55}>
          {apps.map((a) => (
            <div className="marquee-app-card" key={a.name}>
              <AppCard a={a} />
            </div>
          ))}
        </Marquee>
      </Box>

      {/* Projects */}
      <Box component="section" id="projects" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Projects" title="Project highlights" />
          </Box>
          <Grid container spacing={3}>
            {portfolioProjects.map((p) => (
              <Grid key={p.title} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper className="card-hover" sx={{ p: 3.5, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {p.description}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mt: 'auto', mb: 2.5 }}>
                    {p.tech.map((t) => (
                      <Chip key={t} label={t} size="small" variant="outlined" />
                    ))}
                  </Stack>
                  {p.links.github && (
                    <Button variant="outlined" size="small" startIcon={<GitHub />} href={p.links.github} target="_blank" rel="noopener noreferrer" sx={{ alignSelf: 'flex-start' }}>
                      Source
                    </Button>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Writeups */}
      <Box component="section" id="writeups" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Writeups" title="Security research & articles" />
          </Box>
          <Grid container spacing={3}>
            {writeups.map((w) => (
              <Grid key={w.title} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper className="card-hover" sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Chip label={w.category} size="small" color="primary" variant="outlined" />
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'text.secondary' }}>
                      <Schedule sx={{ fontSize: 16 }} />
                      <Typography variant="caption">{w.readingTime}</Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    {w.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                    {w.excerpt}
                  </Typography>
                  <Link href={w.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, alignSelf: 'flex-start', fontWeight: 600 }}>
                    Read on Medium <ArrowForward sx={{ fontSize: 16 }} />
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials — marquee */}
      <Box component="section" id="testimonials" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Testimonials" title="What clients say" subtitle="Real reviews from Fiverr clients. Hover to pause." />
          </Box>
        </Container>
        <Marquee speed={45}>
          {testimonials.map((t) => (
            <div className="marquee-card" key={t.name + t.text}>
              <TestimonialCard t={t} />
            </div>
          ))}
        </Marquee>
      </Box>
    </Box>
  )
}
