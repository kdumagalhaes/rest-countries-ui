export const COUNTRIES_PER_PAGE = 8

export interface CountryModel {
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
