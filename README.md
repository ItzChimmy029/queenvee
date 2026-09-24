# Vee Skincare N’ Spa website

Static HTML, CSS, and vanilla JavaScript website for Vee Skincare N’ Spa.

## Run locally

Open `index.html` in a modern browser, or use VS Code Live Server for a local preview.

## Architecture

- Page structure: the six HTML files in the project root
- Business information and service catalogue: `js/data.js`
- Shared interactions and service rendering: `js/script.js`
- Shared presentation: `css/style.css`

The site uses progressive enhancement. The HTML remains usable without JavaScript, and `script.js` adds WhatsApp links, service filtering, service details, gallery filtering, reveal states, and the accessible mobile menu. It does not replace the document.

The client logo remains untouched in `logo.jpg`. Remote editorial images are temporary prototype photography and should be replaced by client-approved imagery before publishing.

## Repository structure

- Root HTML files are the six public pages and `index.html` is the production entry point.
- `css/style.css` contains the shared responsive design system.
- `js/data.js` contains centralized business, contact, and client-approved service catalogue data.
- `js/script.js` contains progressive-enhancement interactions, service rendering, navigation, directions, and contact utilities.
- `logo.jpg` is the supplied client logo.

## GitHub Pages deployment

This is a static site and can be deployed directly from the repository root:

1. Push the project to a GitHub repository.
2. In repository Settings, open Pages.
3. Choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`.
5. Open the published URL provided by GitHub Pages.

No build step or framework is required.

## Adding services

Edit `SERVICES` in `js/data.js`. Each entry needs its own `id`, `name`, `category` (one of `CATEGORIES`), `price` and `art` (a service-specific illustration in the `ART` map). Swap `art` for a client photo when one is supplied.

## Client information still needed

Only client-supplied prices are shown. Confirm the Instagram handle (the site links to `vee_aesthetics_n_spa`; the logo shows `veeskincarebeauty`) and replace the temporary Unsplash images with approved photography.
