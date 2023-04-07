import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  .moon-icon {
    width: 1rem;
  }
`
