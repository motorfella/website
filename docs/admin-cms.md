# Motorfella Admin CMS

The site now includes a Decap CMS admin shell at `/admin`.

## What Clients Can Edit

- Site name, description, location, logo, default placeholder image
- WhatsApp group URL and Formspree endpoint
- Footer/contact social links
- Gallery page title, intro, CTA text, categories, and images
- Routes, events, stories, and videos stored as Markdown content

## No Database

This setup does not use a database. Decap CMS edits files in the Git repository:

- `src/data/site.json`
- `src/data/gallery.json`
- `src/content/routes/*.md`
- `src/content/events/*.md`
- `src/content/stories/*.md`

Astro rebuilds the static site from those files.

## Local Admin

Open:

```text
http://127.0.0.1:4321/admin
```

Decap local editing also needs the Decap local backend proxy. That is a separate dev helper and is not required for the public site build.

## Production Setup Still Needed

Before the client can use `/admin` on the live site:

1. Replace `REPLACE_WITH_GITHUB_OWNER/motorfella` in `public/admin/config.yml`.
2. Configure Decap GitHub authentication for the hosted site.
3. Add a GitHub Action that rebuilds Astro and deploys `dist/` to GoDaddy.

Hardcoded page copy in `index.astro`, `about.astro`, and `join.astro` can be extracted into CMS-managed files in a follow-up pass.
