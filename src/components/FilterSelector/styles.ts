import styled from 'styled-components'
import ArrowIconLight from '../../assets/icons/down-arrow-light.svg'
import ArrowIconDark from '../../assets/icons/down-arrow-dark.svg'
interface LabelProps {
  themeSelection: boolean
}

export const Label = styled.label<LabelProps>`
  font-size: 1px;
  color: transparent;

  select {
    height: 3.2rem;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 0.1);
    background: ${(props) =>
        props.themeSelection
          ? `url(${ArrowIconLight})`
          : `url(${ArrowIconDark})`}
      no-repeat 138px;
    background-size: 10px;
    background-color: ${({ theme }) => theme.element};
    color: ${({ theme }) => theme.text};
    padding: 0 2rem 0 1rem;
    font-size: 1rem;
    appearance: none;
  }
`
