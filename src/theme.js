import { createTheme } from '@mui/material/styles'

const FONT = "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"

const SHARED = {
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: FONT,
    h1: { fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08 },
    h2: { fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 },
    h3: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 },
    h4: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25 },
    h5: { fontWeight: 650, letterSpacing: '-0.01em' },
    h6: { fontWeight: 650, letterSpacing: '-0.01em' },
    subtitle1: { fontWeight: 600 },
    subtitle2: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
}

const LIGHT = {
  mode: 'light',
  primary: { main: '#2563eb', light: '#60a5fa', dark: '#1d4ed8', contrastText: '#ffffff' },
  secondary: { main: '#4f46e5', light: '#818cf8', dark: '#4338ca', contrastText: '#ffffff' },
  error: { main: '#dc2626' },
  warning: { main: '#d97706' },
  success: { main: '#059669' },
  info: { main: '#2563eb' },
  background: { default: '#fafafa', paper: '#ffffff' },
  text: { primary: '#0d0f13', secondary: '#565e68', disabled: '#a1a7b0' },
  divider: 'rgba(13, 15, 19, 0.08)',
  action: { hover: 'rgba(37, 99, 235, 0.06)', selected: 'rgba(37, 99, 235, 0.1)' },
}

const DARK = {
  mode: 'dark',
  primary: { main: '#60a5fa', light: '#93c5fd', dark: '#3b82f6', contrastText: '#0a0b0d' },
  secondary: { main: '#a5b4fc', light: '#c7d2fe', dark: '#818cf8', contrastText: '#0a0b0d' },
  error: { main: '#f87171' },
  warning: { main: '#fbbf24' },
  success: { main: '#34d399' },
  info: { main: '#60a5fa' },
  background: { default: '#0a0b0d', paper: '#121317' },
  text: { primary: '#f1f3f5', secondary: '#9aa1ab', disabled: '#5c626c' },
  divider: 'rgba(255, 255, 255, 0.08)',
  action: { hover: 'rgba(96, 165, 250, 0.1)', selected: 'rgba(96, 165, 250, 0.16)' },
}

export function createAppTheme(mode) {
  const dark = mode === 'dark'
  return createTheme({
    ...SHARED,
    palette: dark ? DARK : LIGHT,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { fontFamily: FONT, WebkitFontSmoothing: 'antialiased' },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '0.55rem 1.25rem',
            fontWeight: 600,
          },
          containedPrimary: {
            '&:hover': { boxShadow: 'none' },
          },
          sizeSmall: { padding: '0.4rem 1rem', fontSize: '0.85rem' },
          sizeLarge: { padding: '0.75rem 1.75rem', fontSize: '1rem' },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(13,15,19,0.08)'}`,
            backgroundImage: 'none',
            boxShadow: 'none',
          },
          elevation0: { backgroundImage: 'none' },
          outlined: { boxShadow: 'none' },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 6, fontWeight: 500 },
          sizeSmall: { fontSize: '0.75rem' },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: dark ? 'rgba(10,11,13,0.78)' : 'rgba(250,250,250,0.8)',
            backdropFilter: 'blur(14px)',
            boxShadow: 'none',
            borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(13,15,19,0.08)'}`,
            color: dark ? '#f1f3f5' : '#0d0f13',
          },
        },
      },
      MuiMenu: {
        styleOverrides: { paper: { borderRadius: 10, padding: '0.3rem' } },
      },
      MuiMenuItem: {
        styleOverrides: { root: { borderRadius: 6 } },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 6,
            minHeight: 0,
            padding: '0.45rem 0.9rem',
            color: dark ? '#9aa1ab' : '#565e68',
            '&.Mui-selected': {
              backgroundColor: dark ? 'rgba(96,165,250,0.14)' : 'rgba(37,99,235,0.09)',
              color: dark ? '#93c5fd' : '#1d4ed8',
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: { minHeight: 0 },
          indicator: { display: 'none' },
        },
      },
      MuiTextField: {
        defaultProps: { size: 'small' },
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': { borderRadius: 8 },
          },
        },
      },
      MuiLink: {
        defaultProps: { underline: 'none' },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(13,15,19,0.08)'}`,
            boxShadow: 'none',
            '&:before': { display: 'none' },
            '&.Mui-expanded': { margin: 0 },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: { root: { borderRadius: 10, fontWeight: 600 } },
      },
      MuiAvatar: {
        styleOverrides: { root: { border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(13,15,19,0.1)'}` } },
      },
      MuiDivider: {
        styleOverrides: { root: { borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(13,15,19,0.08)' } },
      },
    },
  })
}
