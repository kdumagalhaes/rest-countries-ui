import { ReactNode, createContext, useContext, useState } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

interface ThemeContextModel {
  toggleSelection: boolean
  getToggleSelection: (selection: boolean) => void
}

export const ThemeContext = createContext({} as ThemeContextModel)

export const ThemeSelectionProvider = ({ children }: ThemeProviderProps) => {
  const [toggleSelection, setToggleSelection] = useState(false)

  const getToggleSelection = (selection: boolean) =>
    setToggleSelection(selection)

  const value = {
    toggleSelection,
    getToggleSelection,
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useThemeSelection = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useSearch must be used within ThemeContext')
  }

  return context
}
