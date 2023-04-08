import { BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ThemeSelectionProvider } from './context/ThemeContext/ThemeContext'

function App() {
  return (
    <ThemeSelectionProvider>
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    </ThemeSelectionProvider>
  )
}

export default App
