import { Navigate, useParams } from 'react-router-dom'
import { categoryById } from '../data/categories'
import type { CategoryId } from '../types'

export function CategoryPage() {
  const { id } = useParams()
  const category = id && id in categoryById ? categoryById[id as CategoryId] : undefined

  if (!category) {
    return <Navigate to="/browse" replace />
  }

  return <Navigate to={`/guide/${category.id}`} replace />
}
