import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/pageTitle'

const ticketChecklist = [
  'Your name, location, and asset tag (underside of the laptop or in Company Portal)',
  'The exact error message or a screenshot',
  'What you already tried from the matching IT-Questions.com guide',
  'Whether coworkers on the same floor or printer are affected',
  'The time it started, and whether you recently changed your password',
]

export function Contact() {
  usePageTitle(
    'Contact IT · IT-Questions.com',
    'When a guide is not enough: ticket checklist, walk-up hours, and urgent contacts.',
  )

  return (
    <div className="page-contact">
      <header className="page-intro">
        <p className="kicker">Service desk</p>
        <h1>When a guide is not enough</h1>
        <p className="lede">
          Use self-service first for routine fixes. Call immediately for lost devices,
          suspected malware, or a password you already typed into a fake site.
        </p>
      </header>

      <div className="contact-grid">
        <section className="contact-card">
          <h2>Standard request</h2>
          <p>Software, printers, access, and “it is broken and the guide did not help.”</p>
          <p className="contact-value">portal.company.example / tickets</p>
          <p>Weekdays 8:00–17:00 local time · typical response under four hours</p>
        </section>
        <section className="contact-card contact-urgent">
          <h2>Urgent / security</h2>
          <p>Lost laptop or phone, ransomware, or credentials entered on a phishing page.</p>
          <p className="contact-value">
            <a href="tel:+15550100">+1 (555) 010-4357</a>
          </p>
          <p>24/7 · ask for the duty analyst · do not leave this as voicemail only</p>
        </section>
        <section className="contact-card">
          <h2>Walk-up</h2>
          <p>Loaner keyboards, badge printers, and in-person identity checks for MFA resets.</p>
          <p className="contact-value">Building A, floor 2, room 210</p>
          <p>Weekdays 9:00–16:00</p>
        </section>
      </div>

      <section className="section">
        <h2>What to include in a ticket</h2>
        <ol className="plain-list">
          {ticketChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p>
          Starting from a guide? Link it in the ticket, for example{' '}
          <Link to="/guide/printers#printer-not-working">printer offline</Link> or{' '}
          <Link to="/guide/security#clicked-suspicious-link">clicked a suspicious link</Link>.
        </p>
      </section>
    </div>
  )
}
