import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { DifficultyBadge } from '../components/ArticleCard'
import { articleBySlug } from '../data/articles'
import { articleHref, legacyTopicRedirects, topicArticles, topicById } from '../data/topics'
import { usePageTitle } from '../lib/pageTitle'
import type { Article } from '../types'

function ArticleSection({ article }: { article: Article }) {
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null)

  return (
    <section className="topic-article" id={article.slug}>
      <header className="article-hero">
        <h2>{article.title}</h2>
        <p className="lede">{article.summary}</p>
        <div className="article-meta">
          <DifficultyBadge value={article.difficulty} />
          <span>About {article.minutes} minutes</span>
          <span>{article.steps.length} steps</span>
        </div>
      </header>

      <section className="symptoms">
        <h3>You might notice</h3>
        <ul>
          {article.symptoms.map((symptom) => (
            <li key={symptom}>{symptom}</li>
          ))}
        </ul>
      </section>

      <ol className="steps">
        {article.steps.map((step, index) => (
          <li key={step.title}>
            <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      {article.tip && (
        <aside className="callout callout-tip">
          <p className="callout-label">Tip</p>
          <p>{article.tip}</p>
        </aside>
      )}

      <aside className="callout callout-escalate">
        <p className="callout-label">When to contact IT</p>
        <p>{article.escalate}</p>
        <Link to="/contact" className="text-link">
          Open the contact page
        </Link>
      </aside>

      <section className="feedback">
        <h3>Did this get you unstuck?</h3>
        {feedback ? (
          <p className="feedback-thanks">
            {feedback === 'yes'
              ? 'Good. Bookmark this page if it is a problem you hit more than once.'
              : 'Fair enough. Take the error text and what you already tried to the contact page.'}
          </p>
        ) : (
          <div className="feedback-actions">
            <button type="button" onClick={() => setFeedback('yes')}>
              Yes
            </button>
            <button type="button" onClick={() => setFeedback('no')}>
              Not yet
            </button>
          </div>
        )}
      </section>
    </section>
  )
}

export function ArticlePage() {
  const { slug } = useParams()
  const topic = slug ? topicById[slug] : undefined
  const legacyTopicId = slug ? legacyTopicRedirects[slug] : undefined
  const legacyArticle = slug ? articleBySlug[slug] : undefined

  usePageTitle(topic ? `${topic.name} · IT-Questions.com` : 'IT-Questions.com', topic?.blurb)

  if (!topic && legacyTopicId) {
    return <Navigate to={`/guide/${legacyTopicId}`} replace />
  }

  if (!topic && legacyArticle) {
    return <Navigate to={articleHref(legacyArticle.slug)} replace />
  }

  if (!topic) {
    return <Navigate to="/browse" replace />
  }

  const items = topicArticles(topic)

  return (
    <article className="page-article page-topic">
      <nav className="crumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/browse">Guides</Link>
        <span>/</span>
        <span>{topic.name}</span>
      </nav>

      <header className="article-hero">
        <p className="kicker">{items.length} guides</p>
        <h1>{topic.name}</h1>
        <p className="lede">{topic.blurb}</p>
      </header>

      <div className="article-layout">
        <div>
          {items.map((article) => (
            <ArticleSection key={article.slug} article={article} />
          ))}
        </div>

        <aside className="article-aside">
          <h2>On this page</h2>
          <ul>
            {items.map((article) => (
              <li key={article.slug}>
                <a href={`#${article.slug}`}>{article.title}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  )
}
