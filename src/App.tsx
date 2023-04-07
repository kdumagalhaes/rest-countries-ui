import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/themes/themes'
import { GlobalStyles } from './styles/globalStyles'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      hello, world
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
