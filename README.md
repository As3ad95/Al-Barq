# Al Barq — Dubai Car Rental Landing Page

A single-page, no-build static site: plain HTML/CSS/JS, no dependencies except Google Fonts.

```
al-barq-landing/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Preview locally

Just open `index.html` in a browser — no build step needed.

## Upload to GitHub

1. Create a new repository on GitHub (don't add a README/gitignore there — you already have one here).
2. From inside this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Al Barq landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

## Host it for free with GitHub Pages

1. On GitHub, go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two.

## Customizing

- Colors, type, and spacing are all set as CSS custom properties at the top of `css/style.css` (`:root`).
- Fleet cars, pricing, locations, and copy live directly in `index.html` — edit the text in place.
- The booking form in `js/script.js` currently just shows a confirmation message; wire the `submit` handler up to your backend or a service like Formspree when you're ready to accept real bookings.
