import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Stack, Button } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { securityFaqs } from '../../data/security.json'
import SecurityNav from '../../components/SecurityNav'
import SectionHeading from '../../components/SectionHeading'

export default function FAQ() {
  const [expanded, setExpanded] = useState('sfq-0')

  return (
    <>
      <SecurityNav />
      <Box component="section" className="bg-surface-2 border-y" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            as="h1"
            id="faq-heading"
            tag="FAQ"
            title="Frequently asked questions"
            subtitle="Everything you might want to know before booking a review."
          />
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid size={{ xs: 12, lg: 9 }}>
              <Stack spacing={1.5}>
                {securityFaqs.map((f, i) => (
                  <Accordion
                    key={f.question}
                    expanded={expanded === `sfq-${i}`}
                    onChange={() => setExpanded(expanded === `sfq-${i}` ? '' : `sfq-${i}`)}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />} sx={{ '& .MuiAccordionSummary-content': { fontWeight: 600 } }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {f.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {f.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
              <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Still have a question?
                </Typography>
                <Button component={Link} to="/security/contact" variant="contained">
                  Ask Me Directly
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
