import { CountryCard } from '../../components/CountryCard/CountryCard'
import { FilterSelector } from '../../components/FilterSelector/FilterSelector'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Row } from './styles'
import api from '../../mocks/api/data.json'

export function Home() {
  return (
    <>
      <Row>
        <SearchBar />
        <FilterSelector />
      </Row>
      {api.map((country, index) => {
        return (
          <CountryCard
            key={index}
            name={country.name}
            capital={country.capital ? country.capital : 'No capital'}
            population={country.population}
            flag={country.flag}
            region={country.region}
          />
        )
      })}
    </>
  )
}
