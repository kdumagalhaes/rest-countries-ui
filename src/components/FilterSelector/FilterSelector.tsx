import { ChangeEvent } from 'react'
import { useThemeSelection } from '../../context/ThemeContext/ThemeContext'
import { Label } from './styles'

export function FilterSelector() {
  const { toggleSelection } = useThemeSelection()

  const regions = [
    'Filter by Region',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ]

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) =>
    console.log(event.target.value)

  return (
    <Label themeSelection={toggleSelection}>
      Filter by Region
      <select onChange={handleSelect} name="filterSelector">
        {regions.map((region, index) => {
          return (
            <option key={index} value={region}>
              {region}
            </option>
          )
        })}
      </select>
    </Label>
  )
}
