import { useState, useRef } from 'react'
import { Box, TextField, MenuItem, Button, Typography, Stack, CircularProgress } from '@mui/material'
import Send from '@mui/icons-material/Send'
import CheckCircle from '@mui/icons-material/CheckCircle'
import { contact } from '../data/home.json'
import { form } from '../data/site.json'
import { securityContact } from '../data/security.json'

const { generalTypes, budgets, securityServiceOptions } = form

export default function ContactForm({ variant = 'general', subject }) {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleGeneral = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get('name').trim()
    const email = fd.get('email').trim()
    const type = fd.get('type')
    const budget = fd.get('budget')
    const message = fd.get('message').trim()

    const typeLabels = Object.fromEntries(generalTypes.map((t) => [t.value, t.label]))
    const subjectLine = encodeURIComponent(subject || `Project Inquiry — ${typeLabels[type] || 'General'}`)
    const body = encodeURIComponent(
      `Hi Mohammad,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${typeLabels[type] || 'Not specified'}\nBudget Range: ${budget || 'Not specified'}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you.`
    )
    window.location.href = `mailto:${contact.email}?subject=${subjectLine}&body=${body}`
  }

  const handleSecurity = async (e) => {
    e.preventDefault()
    setSending(true)
    const fd = new FormData(e.currentTarget)
    const data = {
      name: fd.get('name'),
      email: fd.get('email'),
      firm: fd.get('firm'),
      service: fd.get('service'),
      message: fd.get('message'),
      _subject: securityContact.formSubject,
      _captcha: 'false',
    }
    try {
      await fetch(securityContact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setSent(true)
    } catch {
      window.alert(`Something went wrong. Please email me directly at ${contact.email}`)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <CheckCircle color="success" sx={{ fontSize: 56, mb: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Message sent
        </Typography>
        <Typography color="text.secondary">
          Thank you. I will respond within 24 hours. Need a faster reply?{' '}
          <a href={`mailto:${contact.email}`} style={{ color: 'inherit' }}>
            {contact.email}
          </a>
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      component="form"
      ref={formRef}
      onSubmit={variant === 'security' ? handleSecurity : handleGeneral}
      noValidate={false}
    >
      <Stack spacing={2.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
          <TextField fullWidth name="name" label="Name" placeholder="Your name" required autoComplete="name" />
          <TextField fullWidth name="email" label="Email" type="email" placeholder="you@company.com" required autoComplete="email" />
        </Stack>

        {variant === 'security' ? (
          <TextField fullWidth name="firm" label="Organisation" placeholder="Your firm name" autoComplete="organization" />
        ) : (
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
            <TextField select fullWidth name="type" label="Service needed" defaultValue="">
              {generalTypes.map((t) => (
                <MenuItem key={t.value} value={t.value}>
                  {t.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField select fullWidth name="budget" label="Budget range" defaultValue="">
              {budgets.map((b) => (
                <MenuItem key={b.value} value={b.value}>
                  {b.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        )}

        {variant === 'security' && (
          <TextField select fullWidth name="service" label="Service interested in" defaultValue="">
            {securityServiceOptions.map((s) => (
              <MenuItem key={s.value} value={s.value}>
                {s.label}
              </MenuItem>
            ))}
          </TextField>
        )}

        <TextField
          fullWidth
          name="message"
          label="Message"
          multiline
          minRows={5}
          required
          placeholder={variant === 'security' ? 'Tell me about your systems, timeline, and any specific concerns...' : 'Tell me about your project, timeline, and goals...'}
        />

        <Button type="submit" variant="contained" size="large" fullWidth disabled={sending} sx={{ height: 52 }}>
          {sending ? (
            <CircularProgress size={22} color="inherit" />
          ) : (
            <>
              <Send sx={{ mr: 1, fontSize: 18 }} />
              {variant === 'security' ? 'Request My Free Consultation' : 'Send Message'}
            </>
          )}
        </Button>

        {variant === 'security' && (
          <Typography color="text.secondary" variant="body2" sx={{ textAlign: 'center' }}>
            {securityContact.privacyNote}
          </Typography>
        )}
      </Stack>
    </Box>
  )
}
