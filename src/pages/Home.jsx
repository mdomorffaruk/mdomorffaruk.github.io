import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Button, Paper, Chip, Stack, Accordion, AccordionSummary, AccordionDetails, Avatar, Divider } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Star from '@mui/icons-material/Star'
import CheckCircle from '@mui/icons-material/CheckCircle'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Email from '@mui/icons-material/Email'
import LinkedIn from '@mui/icons-material/LinkedIn'
import GitHub from '@mui/icons-material/GitHub'
import Work from '@mui/icons-material/Work'
import WhatsApp from '@mui/icons-material/WhatsApp'
import GppGood from '@mui/icons-material/GppGood'
import { hero, stats, services, projectCategories, projects, processSteps, testimonials, faqs, contact, marqueeItems } from '../data/home.json'
import Counter from '../components/Counter'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import Marquee from '../components/Marquee'
import Icon from '../components/Icon'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"

function TermLine({ prompt, text, result }) {
  return (
    <Box sx={{ fontFamily: MONO, fontSize: '0.85rem', lineHeight: 1.7 }}>
      <Box sx={{ color: 'primary.main', fontWeight: 600 }}>{prompt}</Box>
      <Box sx={{ color: 'text.primary' }}>{text}</Box>
      {result && <Box sx={{ color: 'text.secondary' }}>{result}</Box>}
    </Box>
  )
}

function Terminal() {
  return (
    <Paper
      aria-hidden="true"
      sx={{
        backgroundColor: '#0c0e12',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(13,15,19,0.18)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1.5, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#febc2e' }} />
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28c840' }} />
        <Box sx={{ ml: 1.5, fontFamily: MONO, fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>
          ~/mdomorffaruk
        </Box>
      </Box>
      <Stack spacing={1.5} sx={{ p: 2.5 }}>
        <TermLine prompt="$ whoami" text="mdomorffaruk" />
        <TermLine prompt="$ cat role" text="backend engineer - security researcher" />
        <TermLine prompt="$ ./status" text="available for new projects" result="since 2020 - production systems" />
        <TermLine prompt="$ ./build --target production" text="✓ built 6+ years, 0 critical findings" />
      </Stack>
    </Paper>
  )
}

function TestimonialCard({ t }) {
  return (
    <Paper
      className="card-hover"
      sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
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

export default function Home() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? projects : projects.filter((p) => p.category === category)

  const contactRows = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: Email },
    { label: 'LinkedIn', value: 'mdomorffaruk', href: contact.linkedin, Icon: LinkedIn },
    { label: 'GitHub', value: 'mdomorffaruk', href: contact.github, Icon: GitHub },
    { label: 'Fiverr', value: 'mdofrbn7', href: contact.fiverr, Icon: Work },
    { label: 'WhatsApp', value: 'Chat directly', href: contact.whatsapp, Icon: WhatsApp },
  ]

  return (
    <Box component="main">
      {/* Hero */}
      <Box component="section" className="hero-mesh" sx={{ borderBottom: '1px solid', borderColor: 'divider', backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Chip
                icon={<CheckCircle sx={{ fontSize: 18 }} />}
                label={hero.badge}
                color="success"
                variant="outlined"
                sx={{ mb: 3, px: 0.5 }}
              />
              <Typography variant="h1" sx={{ fontSize: 'clamp(2.3rem, 5vw, 3.6rem)', lineHeight: 1.08, mb: 2.5 }}>
                Build systems that don&apos;t break.
                <br />
                <span className="gradient-text">Find the ones that do.</span>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '38rem', fontWeight: 400, mb: 3.5 }}>
                {hero.subtitle}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button variant="contained" size="large" onClick={() => scrollToId('contact')}>
                  {hero.ctaPrimary.label}
                </Button>
                <Button variant="outlined" size="large" onClick={() => scrollToId('projects')}>
                  {hero.ctaSecondary.label}
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Terminal />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box component="section" className="bg-surface-2 border-y">
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            {stats.map((s) => (
              <Grid key={s.label} size={{ xs: 6, md: 2 }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 800 }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Tech marquee */}
      <Box component="section" className="border-y" sx={{ py: 3, backgroundColor: 'background.paper' }} aria-label="Technologies">
        <Marquee speed={45}>
          {marqueeItems.map((item) => (
            <span key={item} className="marquee-item">
              <span className="gradient-text">●</span>
              {item}
            </span>
          ))}
        </Marquee>
      </Box>

      {/* Services */}
      <Box component="section" id="services" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 5 }}>
            <SectionHeading tag="Services" title="What I can do for you" subtitle="Six ways I can help you ship faster, build safer, and automate the busywork." />
          </Box>
          <Grid container spacing={3}>
            {services.map((s) => (
              <Grid key={s.title} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper className="card-hover" sx={{ p: 3.5, height: '100%' }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: '#fff', mb: 2.5 }}>
                    <Icon name={s.icon} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {s.description}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 2 }}>
                    {s.features.map((f) => (
                      <Chip key={f} label={f} variant="outlined" size="small" sx={{ borderRadius: 999 }} />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'text.secondary' }}>
                    <Icon name="bi-clock" sx={{ fontSize: 18 }} />
                    <Typography variant="body2">{s.timeline}</Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects */}
      <Box component="section" id="projects" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="Projects" title="Selected work" subtitle="Production systems, security tooling, and automation — built and shipped." />
          </Box>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 4 }}>
            {projectCategories.map((c) => (
              <Chip
                key={c}
                label={c}
                onClick={() => setCategory(c)}
                color={category === c ? 'primary' : 'default'}
                variant={category === c ? 'filled' : 'outlined'}
                clickable
              />
            ))}
          </Stack>
          <Grid container spacing={3}>
            {filtered.map((p) => (
              <Grid key={p.title} size={{ xs: 12, md: 6, lg: 4 }}>
                <Paper className="card-hover" sx={{ p: 3.5, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Chip label={p.category} size="small" color="primary" variant="outlined" sx={{ alignSelf: 'flex-start', mb: 1.5 }} />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {p.description}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 2.5, mt: 'auto' }}>
                    {p.tech.map((t) => (
                      <Chip key={t} label={t} size="small" variant="outlined" />
                    ))}
                  </Stack>
                  {p.links.github && (
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHub />}
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Source
                    </Button>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process */}
      <Box component="section" id="process" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 5 }}>
            <SectionHeading tag="Process" title="How we work together" subtitle="A simple, transparent process from first call to final delivery." />
          </Box>
          <Grid container spacing={3}>
            {processSteps.map((step) => (
              <Grid key={step.number} size={{ xs: 12, md: 6, lg: 3 }}>
                <Paper sx={{ p: 3.5, height: '100%', border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}>
                  <Typography className="gradient-text" sx={{ fontSize: '2.5rem', fontWeight: 800 }}>
                    {step.number}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials — marquee */}
      <Box component="section" id="testimonials" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 5 }}>
            <SectionHeading tag="Testimonials" title="What clients say" subtitle="Real reviews from Fiverr clients across the globe. Hover to pause." />
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

      {/* FAQ */}
      <Box component="section" id="faq" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <SectionHeading tag="FAQ" title="Frequently asked questions" />
          </Box>
          <Box sx={{ maxWidth: 800 }}>
            <Stack spacing={1.5}>
              {faqs.map((f, i) => (
                <Accordion key={f.question} defaultExpanded={i === 0}>
                  <AccordionSummary expandIcon={<ExpandMore />} sx={{ fontWeight: 700 }}>
                    {f.question}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary" variant="body2">
                      {f.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Contact */}
      <Box component="section" id="contact" className="bg-surface-2 border-top" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, lg: 5 }}>
              <SectionHeading
                tag="Contact"
                title="Let's build something"
                subtitle="Tell me about your project and I'll get back to you within 24 hours. Prefer security consulting? Check the dedicated security section."
              />
              <Stack spacing={0.5} sx={{ mt: 3.5 }}>
                {contactRows.map(({ label, value, href, Icon: C }) => (
                  <Link key={label} to={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Paper className="card-hover" sx={{ p: 1.75, display: 'flex', alignItems: 'center', gap: 2, boxShadow: 'none', borderColor: 'transparent' }}>
                      <Box sx={{ width: 44, height: 44, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: '#fff' }}>
                        <C fontSize="small" />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                          {label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {value}
                        </Typography>
                      </Box>
                    </Paper>
                  </Link>
                ))}
                <Link to="/security/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Paper className="card-hover" sx={{ p: 1.75, display: 'flex', alignItems: 'center', gap: 2, boxShadow: 'none', borderColor: 'transparent' }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: '#fff' }}>
                      <GppGood fontSize="small" />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" display="block">
                        Security consulting
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Schedule a free consultation
                      </Typography>
                    </Box>
                  </Paper>
                </Link>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Paper sx={{ p: { xs: 3, md: 5 } }}>
                <ContactForm variant="general" subject="Project Inquiry" />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
