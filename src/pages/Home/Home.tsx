import { FilterSelector } from '../../components/FilterSelector/FilterSelector'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Row } from './styles'
import { CountryGrid } from '../../components/CountryGrid/CountryGrid'

export function Home() {
  return (
    <>
      <Row>
        <SearchBar />
        <FilterSelector />
      </Row>
      <CountryGrid />
    </>
  )
}
