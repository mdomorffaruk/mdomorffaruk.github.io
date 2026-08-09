import { Box, Typography } from '@mui/material'

export default function SectionHeading({ tag, title, subtitle, center, id, as: Heading = 'h2' }) {
  return (
    <Box sx={{ maxWidth: '42rem', textAlign: center ? 'center' : 'left', mx: center ? 'auto' : 0 }}>
      {tag && (
        <Typography
          component="p"
          className="eyebrow"
          sx={{ mb: 1 }}
        >
          {tag}
        </Typography>
      )}
      <Typography
        component={Heading}
        id={id}
        variant="h2"
        sx={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', mb: 0, lineHeight: 1.15 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography color="text.secondary" sx={{ mt: 1.5, mb: 0, maxWidth: '40rem', mx: center ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
