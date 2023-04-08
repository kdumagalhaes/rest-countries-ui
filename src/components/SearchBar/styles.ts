import styled from 'styled-components'
import SearchIconDark from '../../assets/icons/search-icon-dark.svg'
import SearchIconLight from '../../assets/icons/search-icon-light.svg'

interface ContainerProps {
  themeSelection: boolean
}

export const Container = styled.input<ContainerProps>`
  width: 100%;
  max-width: 30rem;
  height: 3.2rem;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 0.1);
  background: ${(props) =>
      props.themeSelection
        ? `url(${SearchIconLight})`
        : `url(${SearchIconDark})`}
    no-repeat 15px;
  background-color: ${({ theme }) => theme.element};
  padding: 0 1rem 0 4rem;
  color: ${({ theme }) => theme.text};
`
