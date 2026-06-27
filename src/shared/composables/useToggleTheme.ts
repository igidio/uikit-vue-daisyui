import { ref } from 'vue'

export type ThemeMode = 'light' | 'dark'

function getInitialMode(): ThemeMode {
  const stored = localStorage.getItem('color-theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const mode = ref<ThemeMode>(getInitialMode())

export function useToggleTheme() {
  function initialize() {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.setAttribute('data-theme', 'dark')
      mode.value = 'dark'
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      mode.value = 'light'
    }
  }

  function toggle() {
    const stored = localStorage.getItem('color-theme')
    if (stored) {
      if (stored === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('color-theme', 'dark')
        mode.value = 'dark'
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('color-theme', 'light')
        mode.value = 'light'
      }
    } else {
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('color-theme', 'light')
        mode.value = 'light'
      } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('color-theme', 'dark')
        mode.value = 'dark'
      }
    }
  }

  return { mode, initialize, toggle }
}
