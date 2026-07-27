# Richard Sawyers — Photography Portfolio

Minimalist portfolio site for [@richardsawyers](https://instagram.com/richardsawyers): observational street and documentary photography from Charleston / Isle of Palms.

## Stack

- Vite + React + TypeScript
- React Router
- CSS variables with light / blue-hour dark theme

## Develop

```bash
cd website
npm install
npm run dev
```

## Build / host

```bash
npm run build
npm run preview
```

### GitHub Pages + custom domain

Pushes to `main` deploy via `.github/workflows/deploy-pages.yml`.

Public URL: https://rcityphotography.com/

Domain DNS is managed in Squarespace; `public/CNAME` keeps GitHub Pages bound to `rcityphotography.com`.

```bash
npm run build && npm run preview
```

## Photos

Current gallery is built from `~/Pictures/Photography` (optimized into
`public/photos/`). Adobe share: https://adobe.ly/3TPWgFK

To refresh from the local folder:

```bash
# re-run sips conversion into public/photos, then edit src/data/photos.ts
```

As the 14-day course progresses, add Day exports under `public/photos/` and
extend `src/data/photos.ts`.
