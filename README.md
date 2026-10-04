# Christmas in Charleston Candlelight Tour of Private Homes

One-page site for the tour. Plain HTML, CSS and JavaScript: no framework, no build step, no dependencies beyond Google Fonts.

## Structure

```
index.html        The whole page
css/styles.css    All styles; design tokens (colours, type, spacing) are at the top
js/script.js      Nav state, mobile menu, scroll reveals, mobile call bar
images/           Favicon and social-share image now; photographs go here
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Deploy (Cloudflare Pages)

Connect the GitHub repository in Cloudflare Pages with:

- Framework preset: **None**
- Build command: *(leave empty)*
- Build output directory: `/`

Every push to `main` then publishes automatically.

## Where the tour facts come from

All dates, hours and descriptions are taken from the Explore Charleston listing:
https://www.charlestoncvb.com/events/christmas-in-charleston-candlelight-tour-of-private-homes~28702/

Nothing else has been invented. If the listing changes, update `index.html` to match (the dates also appear in the `<title>`, the meta description and the JSON-LD block in the `<head>`).

## Things still to fill in

Search `index.html` for `PLACEHOLDER` to find every one.

| Placeholder | Where | What to do |
| --- | --- | --- |
| `[PRICING]` | Details section | Replace "To be announced" with the ticket price, then remove `facts__row--tba` from that row |
| `[MEETING LOCATION]` | Details section | Same, with the starting point |
| `[TOUR DETAILS]` | Details section | Same, with what a ticket includes |
| `[TOUR DESCRIPTION]` | About section | Add more copy if Laura supplies it |
| `[OG IMAGE]` | `<head>` | `images/og-image.png` exists; change the tag to its full URL once the domain is known |

## Adding photographs

The page ships with empty photograph slots. Each one has a commented-out `<img>` tag right where the photo belongs. To fill a slot: put the file in `images/`, uncomment the tag, and write a real `alt` description. The "Photograph to come" label hides itself once an image is present.

| Slot | File | Suggested size |
| --- | --- | --- |
| Hero (replaces the drawn windows) | `images/hero.jpg` | 2400×1600 |
| About | `images/about.jpg` | 1200×1500 (portrait) |
| What to expect, 1–4 | `images/expect-1.jpg` … `expect-4.jpg` | 900×1200 (portrait) |
| Full-width break | `images/break.jpg` | 2400×1300 |

Keep files under about 300 KB each (JPEG or WebP) so the page stays fast.

## Contact shown on the site

Laura Wichman Hip, 843-708-2228 (`tel:843-708-2228`). To change the number, search and replace `843-708-2228` in `index.html`.
