import type { CategoryId } from '../types'
import { articles } from './articles'

export type Topic = {
  id: string
  name: string
  blurb: string
  category: CategoryId
  slugs: string[]
}

export const topics: Topic[] = [
  {
    id: 'network',
    name: 'Network & VPN',
    blurb: 'Get online, stay on the VPN, reach internal systems, and fix slow or dropped connections.',
    category: 'network',
    slugs: [
      'connect-to-vpn',
      'connect-to-office-wifi',
      'guest-wifi-for-visitors',
      'use-ethernet-instead-of-wifi',
      'find-my-ip-address',
      'split-tunneling',
      'vpn-connected-no-internal-access',
      'vpn-keeps-disconnecting',
      'wifi-connected-no-internet',
      'cannot-access-shared-drive',
      'slow-internet',
      'cannot-join-meeting-network',
    ],
  },
  {
    id: 'email',
    name: 'Email & Calendar',
    blurb: 'Outlook setup, mail flow, signatures, shared mailboxes, calendar invites, and a slow inbox.',
    category: 'email',
    slugs: [
      'setup-outlook-new-computer',
      'emails-not-sending',
      'email-stuck-in-outbox',
      'create-email-signature',
      'add-shared-mailbox',
      'out-of-office-reply',
      'emails-not-receiving',
      'recover-deleted-email',
      'calendar-invites-not-showing',
      'share-a-calendar',
      'report-phishing-email',
      'outlook-slow-or-freezing',
    ],
  },
  {
    id: 'accounts',
    name: 'Passwords & Accounts',
    blurb: 'Reset, expire, unlock, MFA, Windows Hello, and shared-account requests.',
    category: 'accounts',
    slugs: [
      'reset-my-password',
      'account-locked-out',
      'password-expired',
      'change-password-before-expiry',
      'cannot-sign-in-after-password-change',
      'mfa-authenticator-not-working',
      'setup-mfa-new-phone',
      'forgot-windows-hello-pin',
      'unlock-screensaver',
      'shared-or-service-account-access',
    ],
  },
  {
    id: 'printers',
    name: 'Printers & Scanners',
    blurb: 'Offline printers, stuck jobs, jams, poor quality, and scanning to email or OneDrive.',
    category: 'printers',
    slugs: [
      'printer-not-working',
      'add-network-printer',
      'print-job-stuck-in-queue',
      'prints-to-wrong-printer',
      'printer-blank-pages',
      'printer-paper-jam',
      'poor-print-quality',
      'scan-document-to-email-or-onedrive',
    ],
  },
  {
    id: 'files',
    name: 'Files & Storage',
    blurb: 'Recover files, sync OneDrive, share large documents, and map network drives.',
    category: 'files',
    slugs: [
      'recover-deleted-files',
      'file-disappeared-from-onedrive',
      'restore-previous-file-version',
      'onedrive-not-syncing',
      'files-online-only',
      'disk-full-low-storage',
      'access-files-from-home',
      'cannot-open-file-permissions',
      'share-a-large-file',
      'map-a-network-drive',
    ],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    blurb: 'Keyboards, monitors, docks, batteries, audio, and peripherals that will not connect.',
    category: 'hardware',
    slugs: [
      'keyboard-not-working',
      'keys-stuck-or-repeating',
      'mouse-or-trackpad-not-working',
      'headphones-not-detected',
      'webcam-not-working',
      'usb-device-not-recognized',
      'external-monitor-not-detected',
      'monitor-flickering-or-no-signal',
      'laptop-wont-turn-on',
      'laptop-overheating',
      'battery-draining-quickly',
      'docking-station-not-connecting',
    ],
  },
  {
    id: 'software',
    name: 'Software & Apps',
    blurb: 'Installs, crashes, updates, default programs, browsers, and stuck Windows Update.',
    category: 'software',
    slugs: [
      'application-wont-launch',
      'install-approved-software',
      'software-needs-update',
      'request-unlisted-software',
      'set-default-browser-or-app',
      'windows-update-stuck',
      'excel-or-word-crashing',
      'browser-slow-or-crashing',
      'clear-cache-and-cookies',
      'pdf-wont-open',
      'java-or-plugin-errors',
      'blue-screen-or-unexpected-restart',
    ],
  },
  {
    id: 'security',
    name: 'Security',
    blurb: 'Phishing, malware, lost devices, blocked USB sticks, and safe sharing of work data.',
    category: 'security',
    slugs: [
      'possible-virus-or-malware',
      'clicked-suspicious-link',
      'lock-my-computer',
      'report-lost-or-stolen-device',
      'usb-drive-blocked',
      'website-blocked-by-firewall',
      'encrypt-a-sensitive-file',
      'someone-asked-for-my-password',
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile & Remote',
    blurb: 'Phones, MFA texts, home VPN, dual monitors, and working away from the desk.',
    category: 'mobile',
    slugs: [
      'setup-email-on-phone',
      'byod-personal-phone',
      'phone-not-receiving-mfa-codes',
      'wipe-lost-phone',
      'cannot-connect-vpn-from-home',
      'request-remote-access',
      'dual-monitor-setup-at-home',
      'teams-on-mobile',
    ],
  },
  {
    id: 'meetings',
    name: 'Meetings & Chat',
    blurb: 'Camera, mic, screen share, recording, and collaboration tools.',
    category: 'meetings',
    slugs: [
      'camera-or-mic-not-working-in-meetings',
      'cannot-join-a-meeting',
      'echo-or-feedback-in-meeting',
      'chat-notifications-not-working',
      'share-my-screen',
      'screen-share-wrong-screen',
      'record-a-meeting',
      'create-teams-or-sharepoint-site',
    ],
  },
]

/** Old two-page-per-category URLs still resolve to the merged page. */
export const legacyTopicRedirects: Record<string, string> = {
  'connect-to-the-network': 'network',
  'fix-network-problems': 'network',
  'send-and-set-up-email': 'email',
  'inbox-and-calendar': 'email',
  'passwords-and-lockouts': 'accounts',
  'mfa-and-sign-in': 'accounts',
  'printer-not-printing': 'printers',
  'print-quality-and-scanning': 'printers',
  'recover-and-sync-files': 'files',
  'share-and-access-files': 'files',
  'keyboards-mice-and-audio': 'hardware',
  'screens-docks-and-power': 'hardware',
  'install-and-update-apps': 'software',
  'crashes-and-browser-issues': 'software',
  'phishing-and-malware': 'security',
  'protect-work-data': 'security',
  'phones-and-mfa-codes': 'mobile',
  'remote-work-setup': 'mobile',
  'join-meetings': 'meetings',
  'present-and-collaborate': 'meetings',
}

const assigned = topics.flatMap((topic) => topic.slugs)
const missing = articles.filter((article) => !assigned.includes(article.slug)).map((article) => article.slug)
const extra = assigned.filter((slug) => !articles.some((article) => article.slug === slug))
const dupes = assigned.filter((slug, index) => assigned.indexOf(slug) !== index)

if (missing.length || extra.length || dupes.length || topics.length !== 10) {
  throw new Error(
    `Topic map is invalid: ${topics.length} topics, missing ${missing.join(', ') || 'none'}, extra ${extra.join(', ') || 'none'}, dupes ${dupes.join(', ') || 'none'}`,
  )
}

export const topicById = Object.fromEntries(topics.map((topic) => [topic.id, topic])) as Record<string, Topic>

export const topicByArticleSlug = Object.fromEntries(
  topics.flatMap((topic) => topic.slugs.map((slug) => [slug, topic])),
) as Record<string, Topic>

export function topicsInCategory(category: CategoryId): Topic[] {
  return topics.filter((topic) => topic.category === category)
}

export function articleHref(slug: string): string {
  const topic = topicByArticleSlug[slug]
  return topic ? `/guide/${topic.id}#${slug}` : '/browse'
}

export function topicArticles(topic: Topic) {
  return topic.slugs.map((slug) => articles.find((article) => article.slug === slug)!).filter(Boolean)
}
