import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { AppShell } from './App'
import { categories } from './data/categories'
import { topics } from './data/topics'
import { basename } from './lib/basename'

export type PageMeta = {
  title: string
  description: string
}

export function render(path: string) {
  const location = basename === '/' ? path : `${basename}${path}`

  return renderToString(
    <MemoryRouter basename={basename} initialEntries={[location]}>
      <AppShell />
    </MemoryRouter>,
  )
}

export function getPrerenderRoutes() {
  return [
    '/',
    '/browse',
    '/contact',
    '/search',
    ...topics.map((topic) => `/guide/${topic.id}`),
  ]
}

export function getPageMeta(path: string): PageMeta {
  if (path === '/') {
    return {
      title: 'IT-Questions.com · Employee IT self-service',
      description:
        'IT-Questions.com is an employee self-service knowledge base with the 100 IT questions staff ask most — VPN, printers, passwords, files, and hardware.',
    }
  }
  if (path === '/browse') {
    return {
      title: 'All guides · IT-Questions.com',
      description: 'Browse all 100 IT self-service guides by topic and effort.',
    }
  }
  if (path === '/contact') {
    return {
      title: 'Contact IT · IT-Questions.com',
      description: 'When a guide is not enough: ticket checklist, walk-up hours, and urgent contacts.',
    }
  }
  if (path === '/search') {
    return {
      title: 'Search · IT-Questions.com',
      description: 'Search the IT-Questions.com employee IT handbook.',
    }
  }

  const category = categories.find((item) => path === `/category/${item.id}`)
  if (category) {
    return {
      title: `${category.name} · IT-Questions.com`,
      description: category.blurb,
    }
  }

  const topic = topics.find((item) => path === `/guide/${item.id}`)
  if (topic) {
    return {
      title: `${topic.name} · IT-Questions.com`,
      description: topic.blurb,
    }
  }

  return {
    title: 'Page not found · IT-Questions.com',
    description: 'That guide is not in the handbook.',
  }
}
