import { useEffect, useState } from 'react'
import { Container } from './styles'
import MoonIcon from '../../../assets/icons/moon.svg'
import MoonIconOutline from '../../../assets/icons/moon-outline.svg'
import { useThemeSelection } from '../../../context/ThemeContext/ThemeContext'

export function ToggleButton() {
  const [isActive, setIsActive] = useState(false)
  const { getToggleSelection } = useThemeSelection()

  useEffect(() => {
    getToggleSelection(isActive)
  }, [getToggleSelection, isActive])

  return (
    <Container onClick={() => setIsActive(!isActive)}>
      {isActive ? (
        <img src={MoonIcon} alt="moon icon" className="moon-icon" />
      ) : (
        <img src={MoonIconOutline} alt="moon icon" className="moon-icon" />
      )}
      Dark Mode
    </Container>
  )
}
