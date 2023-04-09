import styled from 'styled-components'

export const Container = styled.a`
  display: block;
  width: max-content;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 0.1);
  transition: all 0.2s;

  &:hover {
    box-shadow: none;
    transform: scale(0.99);
  }

  .flag {
    object-fit: cover;
    max-width: 25rem;
    max-height: 25rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    box-shadow: 0px 10px 9px -5px rgb(0 0 0 / 0.1);
  }

  .content {
    padding: 1rem 1rem 3rem 1rem;

    .name {
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    .country-data {
      margin-bottom: 0.7rem;

      &:last-child {
        margin: 0;
      }
    }
  }
`
