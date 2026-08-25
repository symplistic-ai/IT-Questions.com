import { useMemo, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { TopicCard } from '../components/TopicCard'
import { categories } from '../data/categories'
import { topics } from '../data/topics'
import { usePageTitle } from '../lib/pageTitle'
import type { CategoryId } from '../types'

export function Browse() {
  usePageTitle('All guides · IT-Questions.com', 'Browse 100 IT self-service guides grouped on 10 topic pages.')
  const [category, setCategory] = useState<CategoryId | 'all'>('all')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return topics.filter((topic) => {
      if (category !== 'all' && topic.category !== category) return false
      if (!needle) return true
      return `${topic.name} ${topic.blurb} ${topic.slugs.join(' ')}`.toLowerCase().includes(needle)
    })
  }, [category, query])

  return (
    <div className="page-browse">
      <header className="page-intro">
        <p className="kicker">100 guides · {topics.length} pages</p>
        <h1>Browse every IT question</h1>
        <p className="lede">
          Each page groups a handful of related how-tos. Open a page, then jump to the
          checklist you need.
        </p>
        <SearchBar size="page" />
      </header>

      <div className="filters">
        <label>
          Topic
          <select value={category} onChange={(event) => setCategory(event.target.value as CategoryId | 'all')}>
            <option value="all">All topics</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Filter titles
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type to narrow this list"
          />
        </label>
      </div>

      <p className="result-count">
        Showing {visible.length} of {topics.length} pages
      </p>
      <div className="topic-grid">
        {visible.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  )
}
