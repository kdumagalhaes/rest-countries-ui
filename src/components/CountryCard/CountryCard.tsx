import { formatNumber } from '../../utils/formatNumber/formatNumber'
import { Container } from './styles'

interface CountryCardProps {
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

export function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
}: CountryCardProps) {
  return (
    <Container href="#">
      <img loading="lazy" src={flag} alt={name} className="flag" />
      <div className="content">
        <h3 className="name">{name}</h3>
        <p className="population country-data">
          <strong className="label">Population: </strong>
          {formatNumber(population)}
        </p>
        <p className="region country-data">
          <strong className="label">Region: </strong>
          {region}
        </p>
        <p className="capital country-data">
          <strong className="label">Capital: </strong>
          {capital}
        </p>
      </div>
    </Container>
  )
}
