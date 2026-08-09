import { useRef } from 'react'
import { Box, TextField, MenuItem, Button, Stack } from '@mui/material'
import Send from '@mui/icons-material/Send'
import { contact } from '../data/home.json'
import { form } from '../data/site.json'

const { generalTypes, budgets } = form

export default function ContactForm({ subject }) {
  const formRef = useRef(null)

  const handleGeneral = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get('name').trim()
    const email = fd.get('email').trim()
    const type = fd.get('type')
    const budget = fd.get('budget')
    const message = fd.get('message').trim()

    const typeLabels = Object.fromEntries(generalTypes.map((t) => [t.value, t.label]))
    const subjectLine = encodeURIComponent(subject || `Project Inquiry - ${typeLabels[type] || 'General'}`)
    const body = encodeURIComponent(
      `Hi Mohammad,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${typeLabels[type] || 'Not specified'}\nBudget Range: ${budget || 'Not specified'}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you.`
    )
    window.location.href = `mailto:${contact.email}?subject=${subjectLine}&body=${body}`
  }

  return (
    <Box component="form" ref={formRef} onSubmit={handleGeneral} noValidate={false}>
      <Stack spacing={2.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
          <TextField fullWidth name="name" label="Name" placeholder="Your name" required autoComplete="name" />
          <TextField fullWidth name="email" label="Email" type="email" placeholder="you@company.com" required autoComplete="email" />
        </Stack>

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

        <TextField
          fullWidth
          name="message"
          label="Message"
          multiline
          minRows={5}
          required
          placeholder="Tell me about your project, timeline, and goals..."
        />

        <Button type="submit" variant="contained" size="large" fullWidth sx={{ height: 52 }}>
          <Send sx={{ mr: 1, fontSize: 18 }} />
          Send Message
        </Button>
      </Stack>
    </Box>
  )
}
