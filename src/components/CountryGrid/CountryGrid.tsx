import { Grid } from './styles'
import { CountryCard } from '../CountryCard/CountryCard'
import { useSearch } from '../../hooks/useSearch/useSearch'
import { usePagination } from '../../hooks/usePagination/usePagination'
import { v4 } from 'uuid'
import { TailSpin } from 'react-loader-spinner'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { Pagination } from '../Pagination/Pagination'

export function CountryGrid() {
  const { isLoading, error } = useSearch()
  const { currentCountries } = usePagination()

  return !error ? (
    <>
      <Grid>
        {!isLoading ? (
          currentCountries.map((country) => {
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
      <Pagination />
    </>
  ) : (
    <ErrorMessage text="No countries found. Try another term." />
  )
}
