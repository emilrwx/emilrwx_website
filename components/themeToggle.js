import { useState, useEffect } from 'react'
import styles from '../styles/themeToggle.module.css'

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme)
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  let icon
  if (activeTheme === 'light') {
    icon = (
      <svg
        className={styles.sun}
        aria-hidden='true'
        viewBox='0 0 24 24'
      >
        <circle cx='12' cy='12' r='5' />
        <line x1='12' y1='1' x2='12' y2='3' />
        <line x1='12' y1='21' x2='12' y2='23' />
        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
        <line x1='1' y1='12' x2='3' y2='12' />
        <line x1='21' y1='12' x2='23' y2='12' />
        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
      </svg>
    )
  } else if (activeTheme === 'dark') {
    icon = (
      <svg
        className={styles.moon}
        viewBox='0 0 24 24'
      >
        <mask id='mask'>
          <rect x='0' y='0' width='100%' height='100%' />
          <circle cx='12' cy='4' r='9' />
        </mask>
        <circle cx='12' cy='12' r='9' mask='url(#mask)' />
      </svg>
    )
  }
  return (
    <button
      className={styles.toggleButton}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type='button'
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      {icon}
    </button>
  )
}

export default ThemeToggle
