import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from './ThemeProvider'
import { createAppTheme } from '../theme'

export default function MuiTheme({ children }) {
  const { isDark } = useTheme()
  const theme = createAppTheme(isDark ? 'dark' : 'light')
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
