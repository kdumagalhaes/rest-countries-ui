import styled from 'styled-components'

export const Grid = styled.main`
  padding: 0 4.5rem 0 4.5rem;
  margin-bottom: 4.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  position: relative;

  .loader {
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
`
