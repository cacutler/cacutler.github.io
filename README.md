# Alex's Personal GitHub Page

A simple personal website built with vanilla HTML, CSS, and JavaScript.

## Project Overview

This repository contains the source files for a static GitHub Pages site. The page includes:

- `index.html` — the homepage markup
- `assets/css/style.css` — custom styles for layout and appearance
- `assets/js/script.js` — page interactions and JavaScript behavior
- `assets/images/` — image assets used on the site

The site is based on a template and uses Google Fonts for typography.

## Local Development

To preview the site locally, simply open `index.html` in your browser.

If you want a simple live-reload workflow, use a local HTTP server. For example, with Python 3:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Customization

To update the site content:

- Edit `index.html` for page structure and content
- Update `assets/css/style.css` for visual design
- Modify `assets/js/script.js` for interactive behavior
- Add or replace images in `assets/images/`

## Deployment

This repository is ready for GitHub Pages deployment. Push your changes to the default branch, then enable GitHub Pages in the repository settings if it is not already configured.

## Notes

- The site uses only static front-end assets
- No build step or package manager is required
- Keep Google Font references in `index.html` if you want to preserve the current typography