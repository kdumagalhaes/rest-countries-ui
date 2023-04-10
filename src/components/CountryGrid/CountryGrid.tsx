import { Grid } from './styles'
import api from '../../mocks/api/data.json'
import { CountryCard } from '../CountryCard/CountryCard'

export function CountryGrid() {
  return (
    <Grid>
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
    </Grid>
  )
}
