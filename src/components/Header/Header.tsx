import { ToggleButton } from './ToggleButton/ToggleButton'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <h1 className="logo">Where in the world?</h1>
      <ToggleButton />
    </Container>
  )
}
