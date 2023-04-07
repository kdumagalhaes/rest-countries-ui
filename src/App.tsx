import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/themes/themes'
import { GlobalStyles } from './styles/globalStyles'
import { Header } from './components/Header/Header'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
