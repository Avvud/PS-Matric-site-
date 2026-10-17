# Where to upload photos

Drop your image files into these exact paths (filenames matter):

## Logo

- `public/images/logo.png` — school logo (square, transparent PNG)

## Hero slider (homepage top)

- `public/images/hero/hero-1.jpg`
- `public/images/hero/hero-2.jpg`
- `public/images/hero/hero-3.jpg`
- `public/images/hero/hero-4.jpg`

Recommended: 1920×1080 landscape.

## Principal

- `public/images/principal.jpg` — portrait photo (3:4)

## About section

- `public/images/about-campus.jpg` — campus photo (4:3)

## Page banners

Each non-home page has its own banner image. Add or replace the images under
`public/images/banners/` using the paths configured in `src/lib/site.ts`
(`PAGE_BANNER_IMAGES`). For example:

- `public/images/banners/about/history.jpg`
- `public/images/banners/admissions/uniform.jpg`
- `public/images/banners/academics/curriculum.jpg`
- `public/images/banners/events/annual-day.jpg`
- `public/images/banners/contact.jpg`

Use a wide landscape image (recommended: 1920×500). Event year/detail pages use
the banner configured for that event, with `public/images/page-banner.jpeg` as
the backup if an individual banner is missing. If both images are unavailable,
the page shows the expected upload path.

## Gallery carousel (homepage + Gallery page)

- `public/images/gallery/gallery-1.jpg` … `gallery-8.jpg` (16:9)

Captions can be edited in `src/lib/site.ts`.

## Alumni headshots

- `public/images/alumni/alumni-1.jpg`
- `public/images/alumni/alumni-2.jpg`
- `public/images/alumni/alumni-3.jpg`

Square photos work best.

Any image not yet uploaded shows a grey placeholder telling you the path.
