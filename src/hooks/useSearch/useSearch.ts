import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext/SearchContext'

export const useSearch = () => {
  const context = useContext(SearchContext)

  if (context === undefined) {
    throw new Error('useSearch must be used within SearchContext.')
  }

  return context
}
