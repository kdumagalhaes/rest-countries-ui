import { ChangeEvent } from 'react'
import { Container } from './styles'
import { useThemeSelection } from '../../context/ThemeContext/ThemeContext'
import { useSearch } from '../../hooks/useSearch/useSearch'

export function SearchBar() {
  const { toggleSelection } = useThemeSelection()
  const { getSearchTerm } = useSearch()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    getSearchTerm(event.target.value)

  return (
    <Container
      type="search"
      placeholder="Search for a country..."
      onChange={handleSearch}
      autoFocus
      themeSelection={toggleSelection}
    />
  )
}
