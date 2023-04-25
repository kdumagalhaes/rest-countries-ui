import { useContext } from 'react'
import { PaginationContext } from '../../context/PaginationContext/PaginationContext'

export const usePagination = () => {
  const context = useContext(PaginationContext)

  if (context === undefined) {
    throw new Error('usePagination must be used within PaginationContext.')
  }

  return context
}
