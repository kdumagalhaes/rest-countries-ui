import { useState } from 'react'
import { Container } from './styles'
import MoonIcon from '../../../assets/icons/moon.svg'
import MoonIconOutline from '../../../assets/icons/moon-outline.svg'

export function ToggleButton() {
  const [isActive, setIsActive] = useState(false)

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
