# Logo Studio

Browser tool for designing 3D-printed client gifts with a company logo. Upload a logo, pick a product, preview it in 3D and download print-ready files. Everything runs in the browser in one self-contained `index.html` (Three.js and fflate load from jsDelivr), so there is no build step.

**Live:** https://otaga2k25.github.io/otaga-ui/logo-studio/

## Products

- **Mugs and pen holders**: raised logo, extra text, co-branding, textures.
- **Desk organisers**: caddy, honeycomb, phone stand, hex cup, step, tubes, card holder, pen block, monitor holder.
- **Shadow lamp**: a ring with traced windows that casts the full logo as a shadow on the table. It fits on a stock light base (tea light) or under a stock dome top (E14 / E27 bulb or LED) that screws on.
- **Projector lamp**: a shell with the picture cut through it, so an LED inside projects it onto a wall. It fits the same light base.
- **Lamp base**: a custom body with the logo, plus a stock top cap and a locking ring for an E27 / E14 / M10 socket.

The stock parts (light base, dome top, lamp cap and ring) are the same for every client. Print them once and keep them; for each order you only print the logo part.

## Exports

GLB, STL, multi-colour 3MF, an STL set (one file per colour) and PNG mockups. The Lamp base also downloads a parts kit (.zip), and the shadow and projector lamps download their stock base or dome top separately.

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
npx serve logo-studio
```

## Hosting

`.github/workflows/pages.yml` publishes this folder to GitHub Pages on every push to `main` that changes it. A repo admin has to turn Pages on once: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
