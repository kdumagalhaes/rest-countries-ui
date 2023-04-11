import { Grid } from './styles'
import { CountryCard } from '../CountryCard/CountryCard'
import { useSearch } from '../../hooks/useSearch/useSearch'
import { v4 } from 'uuid'
import { TailSpin } from 'react-loader-spinner'

export function CountryGrid() {
  const { filteredCountriesList, isLoading } = useSearch()
  return (
    <Grid>
      {!isLoading ? (
        filteredCountriesList.map((country) => {
          return (
            <CountryCard
              key={v4()}
              name={country.name.common}
              capital={country.capital ? country.capital : 'No capital'}
              population={country.population}
              flag={country.flags.svg}
              region={country.region}
            />
          )
        })
      ) : (
        <TailSpin color="hsl(200, 15%, 8%)" wrapperClass="loader" />
      )}
    </Grid>
  )
}
