import { ChangeEvent } from 'react'
import { Container } from './styles'
import { useThemeSelection } from '../../context/ThemeContext/ThemeContext'

export function SearchBar() {
  const { toggleSelection } = useThemeSelection()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    console.log(event.target.value)

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
