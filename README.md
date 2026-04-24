# Nine Planets Website

## Local development

Install dependencies:

```bash
cd "/Users/allenbope/Dropbox/Bopedesign/9 Planets/Web/Claude Design download/planets"
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

- `http://localhost:5173`

## Production build

```bash
npm run build
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. Connect the GitHub repo in Vercel.
3. Vercel will detect the project as a static site and use the `build` script.
4. The output directory is `dist`.

If Vercel does not auto-detect, use these settings:

- Build command: `npm run build`
- Output directory: `dist`

## Notes

- The app is a Vite + React site.
- Static assets live in `public/images`.
- `vercel.json` is included for standard Vercel deployment.
