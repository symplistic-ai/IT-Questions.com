import { Link } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'
import { IconArrow } from '../components/Icons'
import { SearchBar } from '../components/SearchBar'
import { TopicCard } from '../components/TopicCard'
import { popularArticles } from '../data/articles'
import { topics } from '../data/topics'
import { usePageTitle } from '../lib/pageTitle'

export function Home() {
  usePageTitle(
    'IT-Questions.com · Employee IT self-service',
    'IT-Questions.com is an employee self-service knowledge base with the 100 IT questions staff ask most — VPN, printers, passwords, files, and hardware.',
  )

  return (
    <div className="page-home">
      <section className="hero">
        <p className="kicker">Employee self-service · 100 guides on 10 pages</p>
        <h1>
          Fix the usual IT problems
          <em> without waiting on a ticket.</em>
        </h1>
        <p className="lede">
          VPN, printers, passwords, deleted files, stubborn monitors, and the rest of the
          questions the service desk hears every week — written as checklists you can follow
          at your desk.
        </p>
        <SearchBar size="hero" autoFocus />
        <p className="hero-hints">Try VPN, printer offline, deleted files, or password</p>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Start by topic</h2>
          <Link to="/browse" className="text-link">
            View all {topics.length} pages <IconArrow />
          </Link>
        </div>
        <div className="topic-grid">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Asked every day</h2>
          <p>The ten issues that generate the most tickets.</p>
        </div>
        <div className="popular-list">
          {popularArticles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </section>

      <section className="escalate-band">
        <div>
          <h2>Still stuck after the guide?</h2>
          <p>
            Open a ticket with the error text, your asset tag, and what you already tried.
            Security incidents and lost devices should be called in, not emailed.
          </p>
        </div>
        <Link to="/contact" className="button-primary">
          Contact IT
        </Link>
      </section>
    </div>
  )
}
