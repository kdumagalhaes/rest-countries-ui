import { useState } from 'react'
import { useSearch } from '../useSearch/useSearch'

export const usePagination = (countriesPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { filteredCountriesList } = useSearch()

  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountries = filteredCountriesList.slice(
    firstCountryIndex,
    lastCountryIndex,
  )

  return {
    lastCountryIndex,
    firstCountryIndex,
    currentCountries,
  }
}
