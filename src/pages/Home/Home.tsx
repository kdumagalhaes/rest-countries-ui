import { FilterSelector } from '../../components/FilterSelector/FilterSelector'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Row } from './styles'

export function Home() {
  return (
    <Row>
      <SearchBar />
      <FilterSelector />
    </Row>
  )
}
