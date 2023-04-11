import { FilterSelector } from '../../components/FilterSelector/FilterSelector'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Row } from './styles'
import { CountryGrid } from '../../components/CountryGrid/CountryGrid'
import { SearchProvider } from '../../context/SearchContext/SearchContext'

export function Home() {
  return (
    <SearchProvider>
      <Row>
        <SearchBar />
        <FilterSelector />
      </Row>
      <CountryGrid />
    </SearchProvider>
  )
}
