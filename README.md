# IT-Questions.com

Employee self-service site for the 100 IT questions staff ask most often. Search or browse by topic, follow a short checklist, and escalate to the service desk only when the guide says to.

## What’s included

- 100 how-to guides across network/VPN, email, accounts, printers, files, hardware, software, security, mobile, and meetings
- Search, topic pages, filters, and related-article links
- A contact page with placeholder service-desk hours and a ticket checklist

Replace the placeholder phone number, ticket URL, and walk-up location in `src/pages/Contact.tsx` and `src/components/Footer.tsx` with your organization’s details.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Host on GitHub Pages (free)

The site is static. A GitHub Action builds it and publishes it on every push to `main`.

Live site: https://it-questions.com/

Repo: https://github.com/symplistic-ai/IT-Questions.com

`npm run build` writes 10 topic HTML pages that contain all 100 guides (for example `dist/guide/accounts/index.html`). Search still runs in the browser. Local `npm run dev` stays a live React app.
