# Maffra's Cafe — Website

A warm, modern single-page React site for Maffra's Cafe in Coolaroo, Melbourne.

## Tech

- Vite + React 18
- Tailwind CSS (custom warm "coffee" palette + Fraunces / Caveat / Inter fonts)
- Framer Motion for entrance & hover animations
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:5173

```bash
npm run build      # production build
npm run preview    # preview production build
```

## Swapping in real photos

All photos use Unsplash placeholder URLs so the site looks complete out of the box.
Replace them in these places:

| File                              | Where                                  |
|-----------------------------------|----------------------------------------|
| `src/components/Hero.jsx`         | `HERO_IMAGE` constant                  |
| `src/components/About.jsx`        | `PHOTO_TALL`, `PHOTO_SQUARE` constants |
| `src/components/Gallery.jsx`      | `PHOTOS` array                         |
| `src/data/menu.js`                | `image` field on every menu item       |

Drop your own files into `public/` and reference them as `/your-image.jpg`,
or paste in a URL.

## Editing the menu

Open `src/data/menu.js`. Each category is just an array of
`{ name, price, desc, image, popular? }` — add, remove, reorder freely.

The `popularPicks` array at the bottom is what shows in the
"Customer favourites" section. Edit it to spotlight different items.
