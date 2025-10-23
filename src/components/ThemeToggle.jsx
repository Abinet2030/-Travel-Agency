import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const STORAGE_KEY = 'theme'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      style={{ border: '1px solid var(--border)', padding: 8, borderRadius: 10, background: 'transparent', color: 'var(--text)' }}
      onClick={() => setDark((v) => !v)}
    >
      {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}
