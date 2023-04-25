import { ReactNode, createContext, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce/useDebounce'
import useSWR from 'swr'
import { fetchCountriesList } from '../../utils/fetchCountriesList/fetchCountriesList'
import { CountryModel } from '../../constants/constants'

interface SearchProviderProps {
  children: ReactNode
}

interface SearchContextModel {
  getSearchTerm: (term: string) => void
  filteredCountriesList: CountryModel[]
  isLoading: boolean
  error: string
}

export const SearchContext = createContext({} as SearchContextModel)

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term, 600)

  const URL = debouncedTerm
    ? `https://restcountries.com/v3.1/name/${debouncedTerm}`
    : 'https://restcountries.com/v3.1/all'

  const { data, isLoading, error } = useSWR(URL, fetchCountriesList)

  const getSearchTerm = (term: string) => {
    if (term !== '' || term !== undefined) {
      const normalizedTerm = term.toLowerCase().normalize()
      setTerm(normalizedTerm)
    }
  }

  const filteredCountriesList: CountryModel[] = data || []

  const value = {
    getSearchTerm,
    filteredCountriesList,
    isLoading,
    error,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
