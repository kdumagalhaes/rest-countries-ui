import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/themes/themes'
import { GlobalStyles } from '../styles/globalStyles'
import { useThemeSelection } from '../context/ThemeContext/ThemeContext'
import { useEffect, useState } from 'react'

export function DefaultLayout() {
  const [theme, setTheme] = useState(lightTheme)
  const { toggleSelection } = useThemeSelection()

  useEffect(() => {
    toggleSelection ? setTheme(darkTheme) : setTheme(lightTheme)
  }, [toggleSelection])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Outlet />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
