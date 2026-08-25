import { Link } from 'react-router-dom'
import { topics } from '../data/topics'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="IT-Questions.com" />
          </p>
          <p className="footer-blurb">
            Self-service answers for the problems employees ask the service desk every day.
            Try a guide first. Open a ticket when you are still stuck.
          </p>
        </div>
        <div>
          <h2>Topics</h2>
          <ul>
            {topics.slice(0, 5).map((topic) => (
              <li key={topic.id}>
                <Link to={`/guide/${topic.id}`}>{topic.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>More</h2>
          <ul>
            {topics.slice(5).map((topic) => (
              <li key={topic.id}>
                <Link to={`/guide/${topic.id}`}>{topic.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Need a person</h2>
          <ul>
            <li>
              <Link to="/contact">Contact IT</Link>
            </li>
            <li>
              <Link to="/browse">Browse all 10 pages</Link>
            </li>
            <li>
              <a href="tel:+15550100">Service desk · ext. 4357</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-note">
        Internal knowledge base · Replace placeholder contacts with your service-desk details
      </p>
    </footer>
  )
}
