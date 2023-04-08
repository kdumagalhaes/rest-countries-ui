import { BrowserRouter } from 'react-router-dom'
import { ThemeSelectionProvider } from './context/ThemeContext/ThemeContext'
import { Router } from './routes/Router'

function App() {
  return (
    <ThemeSelectionProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeSelectionProvider>
  )
}

export default App
