# DBSignal — White Label RSS Intelligence Platform

> **Copyright © dbappsystems.com & daddyboyapps.com. All rights reserved.**

A white-label AI-powered news blog platform. Pulls live articles from curated RSS feeds, displays them Beards Doctrine compliant, and optionally rewrites every article in the **Daddyboy Edge** voice — built for busy technical CEOs who have no time for filler.

-----

## What It Does

- Pulls live articles from a customizable list of RSS feeds
- Displays article summaries with source credit and original article link (Beards Doctrine mode)
- Optionally rewrites every article using Claude AI in the **Daddyboy Edge** voice (sharp, direct, CEO-ready)
- Creator-only admin panel — hidden behind clicking the logo 5 times
- Fully white-labelable — change the title, topic, and feeds per deployment
- Dark / light mode toggle
- Category filters (Research, News, Technical, Business)
- Single HTML file — no build step, no dependencies, no server required

-----

## Beards Doctrine

Every article on DBSignal is compliant with the Beards Doctrine:

- Source publication is always credited by name
- The original article link is always visible on every card
- Users pay for the **curation and editorial intelligence layer**, not the raw content
- In Daddyboy Edge mode, articles are fully transformed — not reproduced

-----

## Daddyboy Edge Voice Rules

When Edge mode is active, Claude rewrites every article with these rules:

- Gets to the point in the first sentence — no warm-up
- Short paragraphs, 2–3 sentences maximum
- Active voice only
- No corporate jargon or buzzwords
- PG-13 maximum — professional edge, never inappropriate
- Explains what this means for the CEO’s business
- Ends with a **Bottom Line:** kicker — one sharp sentence

-----

## Files in This Repo

```
dbsignal/
├── index.html      ← the entire platform (single file)
├── README.md       ← this file
└── .gitignore      ← keeps the repo clean
```

-----

## How to Deploy — GitHub + Cloudflare Pages

### Step 1 — Create Your GitHub Repo

1. Go to [github.com](https://github.com) and sign in
1. Click the **+** in the top right → **New repository**
1. Name it `dbsignal` (or `dbsignal-llm` for the LLM instance)
1. Set it to **Private** (keeps your code protected)
1. Click **Create repository**

### Step 2 — Upload the Files

**Option A — Upload via browser (easiest):**

1. In your new repo, click **Add file** → **Upload files**
1. Drag in `index.html`, `README.md`, `.gitignore`
1. Click **Commit changes**

**Option B — Via Terminal (if you have Git installed):**

```bash
git clone https://github.com/YOURUSERNAME/dbsignal.git
cd dbsignal
# copy your files in here
git add .
git commit -m "Initial DBSignal deployment"
git push origin main
```

### Step 3 — Connect to Cloudflare Pages

1. Log into [dash.cloudflare.com](https://dash.cloudflare.com)
1. Go to **Workers & Pages** → click **+**
1. Choose **Pages** → **Connect to Git**
1. Authorize Cloudflare to access your GitHub account
1. Select your `dbsignal` repo
1. **Build settings** — leave everything blank (no build command needed)
1. Click **Save and Deploy**

Cloudflare will give you a live URL like:

```
https://dbsignal.pages.dev
```

### Step 4 — Auto-Deploy on Every Push

From this point on — every time you push a change to GitHub, Cloudflare automatically redeploys. No manual steps needed.

-----

## Creator Admin Panel

The admin panel is **hidden from all visitors**. Only you can access it.

**How to open it:** Click the **DBSignal logo 5 times** in the top left corner.

Inside the admin panel you can:

|Tab            |What it does                                       |
|---------------|---------------------------------------------------|
|**Mode**       |Toggle between Beards Doctrine and Daddyboy Edge   |
|**Feeds**      |Add or remove RSS feeds visually — no code required|
|**White Label**|Change the blog title, nav label, and tag line     |
|**API Key**    |Enter your Claude API key for Edge mode rewrites   |

All settings are saved in the browser’s local storage — they persist across page refreshes.

-----

## Adding Your Claude API Key (for Edge Mode)

1. Go to [console.anthropic.com](https://console.anthropic.com)
1. Sign in and go to **API Keys**
1. Click **Create Key** — copy the key starting with `sk-ant-`
1. Open the admin panel (logo × 5) → **API Key** tab → paste it in → **Save Key**

Your API key is stored only in your local browser. It is never sent anywhere except directly to Anthropic’s API when a rewrite is requested.

-----

## Adding RSS Feeds (No Code Required)

1. Open admin panel → **Feeds** tab
1. Paste in any RSS feed URL
1. Give it a source name and pick a category
1. Click **+ Add Feed**
1. Click **Save & Reload Feed**

To find an RSS feed URL for any website, search:

```
site:example.com RSS feed URL
```

Or add `/feed`, `/rss`, or `/feed.xml` to the end of most blog URLs.

-----

## White Label — New Topic Deployment

To create a second instance for a different topic (e.g. Crypto, Energy, Health):

1. Create a new GitHub repo (e.g. `dbsignal-crypto`)
1. Copy `index.html` into it
1. Open the admin panel on the deployed site → **Feeds** tab → swap in topic-specific RSS feeds
1. **White Label** tab → update the title and labels
1. Connect the new repo to a new Cloudflare Pages project

Each instance is completely independent.

-----

## Default RSS Feeds (LLM / AI Topic)

|Source            |Category |
|------------------|---------|
|OpenAI News       |Research |
|VentureBeat AI    |News     |
|Ars Technica      |Technical|
|Wired AI          |News     |
|TechCrunch        |Business |
|Berkeley AI (BAIR)|Research |
|NVIDIA Dev Blog   |Technical|
|AI Business       |Business |
|The Guardian AI   |News     |
|Futurism AI       |News     |
|ML Mastery        |Technical|
|Simon Willison    |Technical|

-----

## License & Copyright

© dbappsystems.com & daddyboyapps.com. All rights reserved.

This platform is proprietary software. Unauthorized copying, distribution, or use without explicit permission is prohibited.
