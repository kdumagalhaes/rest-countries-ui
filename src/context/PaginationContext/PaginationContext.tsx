import { ReactNode, createContext, useState } from 'react'
import { useSearch } from '../../hooks/useSearch/useSearch'
import { COUNTRIES_PER_PAGE, CountryModel } from '../../constants/constants'

interface PaginationContextProvider {
  children: ReactNode
}

interface PaginationContextModel {
  totalCountries: number
  currentCountries: CountryModel[]
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const PaginationContext = createContext({} as PaginationContextModel)

export const PaginationProvider = ({ children }: PaginationContextProvider) => {
  const { filteredCountriesList } = useSearch()
  const [currentPage, setCurrentPage] = useState(1)

  const totalCountries = filteredCountriesList.length
  const lastCountryIndex = currentPage * COUNTRIES_PER_PAGE
  const firstCountryIndex = lastCountryIndex - COUNTRIES_PER_PAGE
  const currentCountries = filteredCountriesList.slice(
    firstCountryIndex,
    lastCountryIndex,
  )

  const value = {
    totalCountries,
    currentCountries,
    currentPage,
    setCurrentPage,
  }

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}
