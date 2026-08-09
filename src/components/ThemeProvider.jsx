import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext(null)

const STORAGE_KEY = 'site-theme'
const MODES = ['light', 'dark', 'system']

function systemPrefersDark() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function readStored() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return MODES.includes(stored) ? stored : 'system'
  } catch (e) {
    return 'system'
  }
}

function applyTheme(mode) {
  const dark = mode === 'dark' || (mode === 'system' && systemPrefersDark())
  document.documentElement.setAttribute('data-bs-theme', dark ? 'dark' : 'light')
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(readStored)

  useEffect(() => {
    applyTheme(mode)
  }, [mode])

  useEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const setTheme = useCallback((next) => {
    if (!MODES.includes(next)) return
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch (e) {
      /* ignore */
    }
    setMode(next)
  }, [])

  const toggle = useCallback(() => {
    setTheme(mode === 'dark' ? 'light' : 'dark')
  }, [mode, setTheme])

  return (
    <ThemeContext.Provider value={{ mode, setTheme, toggle, isDark: mode === 'dark' || (mode === 'system' && systemPrefersDark()) }}>
      {children}
    </ThemeContext.Provider>
  )
}
