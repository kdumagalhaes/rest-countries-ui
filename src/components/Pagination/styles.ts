import styled from 'styled-components'

export const Container = styled.div`
  max-width: 55rem;
  margin: 0 auto 4rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .active {
    box-shadow: none;
    background-color: ${({ theme }) => theme.active};
  }
`

export const ButtonPage = styled.button`
  border: none;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 0.1);
  transition: box-shadow ease 0.4s;

  &:hover {
    box-shadow: none;
  }
`
