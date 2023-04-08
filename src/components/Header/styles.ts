import styled from 'styled-components'

export const Container = styled.header`
  height: 4rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 0 4.5rem 0 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.element};
  margin-bottom: 3rem;

  .logo {
    font-size: 1.4rem;
  }
`
