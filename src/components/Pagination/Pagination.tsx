import { COUNTRIES_PER_PAGE } from '../../constants/constants'
import { usePagination } from '../../hooks/usePagination/usePagination'
import { ButtonPage, Container } from './styles'
import { v4 } from 'uuid'

export function Pagination() {
  const { totalCountries, setCurrentPage, currentPage } = usePagination()

  const pages = []
  for (let i = 1; i <= Math.ceil(totalCountries / COUNTRIES_PER_PAGE); i++) {
    pages.push(i)
  }

  return (
    <Container>
      {pages.map((page) => {
        return (
          <ButtonPage
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'active' : ''}
            key={v4()}
          >
            {page}
          </ButtonPage>
        )
      })}
    </Container>
  )
}
