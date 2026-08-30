import { useEffect, useState } from 'react'

export const HOME = '/'

function parseHash() {
  const hash = window.location.hash || ''
  if (hash.startsWith('#/')) {
    return { route: hash.slice(2).replace(/\/+$/, '') || '/', section: '' }
  }
  // Section anchor on the home page, e.g. #about
  return { route: '/', section: hash.replace(/^#/, '') }
}

export function useHashRoute() {
  const [state, setState] = useState(() => parseHash())

  useEffect(() => {
    const onChange = () => setState(parseHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  useEffect(() => {
    const id = state.section
    if (id && document.getElementById(id)) {
      // Let the DOM settle before scrolling.
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => clearTimeout(t)
    }
    if (id === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [state])

  return state
}

export function goRoute(route) {
  // goRoute('/tools') -> sets hash to #/tools
  window.location.hash = '#' + route
}
