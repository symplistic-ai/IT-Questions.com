import { Link } from 'react-router-dom'
import { topicArticles, type Topic } from '../data/topics'
import { CategoryIcon } from './Icons'

export function TopicCard({ topic }: { topic: Topic }) {
  const items = topicArticles(topic)

  return (
    <Link to={`/guide/${topic.id}`} className="category-tile">
      <span className="category-icon">
        <CategoryIcon id={topic.category} />
      </span>
      <span className="category-name">{topic.name}</span>
      <span className="category-blurb">{topic.blurb}</span>
      <span className="category-count">{items.length} guides</span>
    </Link>
  )
}
