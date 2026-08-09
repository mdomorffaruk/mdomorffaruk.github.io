import { useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import SettingsBrightness from '@mui/icons-material/SettingsBrightness'
import { useTheme } from './ThemeProvider'

const modes = [
  { value: 'light', label: 'Light', Icon: LightMode },
  { value: 'dark', label: 'Dark', Icon: DarkMode },
  { value: 'system', label: 'System', Icon: SettingsBrightness },
]

export default function ThemeToggle() {
  const { mode, setTheme } = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const current = modes.find((m) => m.value === mode) || modes[2]

  return (
    <>
      <Tooltip title={`Theme: ${current.label}`}>
        <IconButton
          aria-label="Change theme"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{ ml: 0.5, color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
        >
          <current.Icon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {modes.map((m) => (
          <MenuItem
            key={m.value}
            onClick={() => {
              setTheme(m.value)
              setAnchorEl(null)
            }}
            selected={mode === m.value}
            sx={{ fontWeight: mode === m.value ? 700 : 500, gap: 1.5 }}
          >
            <m.Icon fontSize="small" />
            {m.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
