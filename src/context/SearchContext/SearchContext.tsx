import { ReactNode, createContext, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce/useDebounce'
import useSWR from 'swr'

interface SearchProviderProps {
  children: ReactNode
}

interface CountryModel {
  name: {
    common: string
  }
  capital: string
  flags: {
    svg: string
  }
  region: string
  population: number
}

interface SearchContextModel {
  getSearchTerm: (term: string) => void
  filteredCountriesList: CountryModel[]
  isLoading: boolean
}

export const SearchContext = createContext({} as SearchContextModel)

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term, 600)

  const URL = debouncedTerm
    ? `https://restcountries.com/v3.1/name/${debouncedTerm}`
    : 'https://restcountries.com/v3.1/all'

  const fetchCountriesList = (url: string) => {
    try {
      return fetch(url)
        .then((res) => res.json())
        .then((data) => data)
    } catch (error) {
      console.warn(error)
    }
  }

  const { data, isLoading } = useSWR(URL, fetchCountriesList)

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
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
