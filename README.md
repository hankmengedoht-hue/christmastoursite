# Christmas in Charleston Candlelight Tour of Private Homes

One-page site for the tour. Plain HTML, CSS and JavaScript: no framework, no build step, no dependencies beyond Google Fonts.

## Structure

```
index.html        The whole page
css/styles.css    All styles; design tokens (colours, type, spacing) are at the top
js/script.js      Nav state, mobile menu, scroll reveals, mobile call bar
images/           Favicon and social-share image now; photographs go here
images/homes/     One photograph per home on the tour (home-1.jpg, home-2.jpg, ...)
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Deploy

The site is served by GitHub Pages from the `main` branch at
https://hankmengedoht-hue.github.io/christmastoursite/. Every push to `main` publishes automatically.
If the address changes, update the `canonical`, `og:url` and `og:image` tags in the `<head>`.

## Where the tour facts come from

All dates, hours and descriptions are taken from the Explore Charleston listing:
https://www.charlestoncvb.com/events/christmas-in-charleston-candlelight-tour-of-private-homes~28702/

Nothing else has been invented. If the listing changes, update `index.html` to match (the dates also appear in the `<title>`, the meta description and the JSON-LD block in the `<head>`).

## Things still to fill in

Everything the client still has to supply is shown on the page as a visible
`[PLACEHOLDER: ...]` mark. Each one is a `<span class="ph">` in `index.html`, so searching
for `class="ph"` (or `PLACEHOLDER`) finds them all. To fill one in, replace the whole span
with the real text. In the Details table, also remove `facts__row--tba` from that row.

## Adding photographs

**Homes and the church: just drop the file in.** These slots already point at a file name.
The photo appears as soon as the file exists; until then the slot shows a styled placeholder.

| Slot | File | Suggested size |
| --- | --- | --- |
| Homes on the tour | `images/homes/home-1.jpg` … `home-6.jpg` | 1200×1500 (portrait) |
| Church exterior | `images/church-exterior.jpg` | 1200×1500 (portrait) |
| Church repairs | `images/church-repairs.jpg` | 1600×1200 (landscape) |

After adding a home photo, update its `alt` text in `index.html`. For more or fewer than six
homes, copy or delete an `<li class="home">` block.

**Other slots: uncomment the tag.** Each has a commented-out `<img>` where the photo belongs.
Put the file in `images/`, uncomment the tag, and write a real `alt` description.

| Slot | File | Suggested size |
| --- | --- | --- |
| Hero (replaces the drawn windows) | `images/hero.jpg` | 2400×1600 |
| About | `images/about.jpg` | 1200×1500 (portrait) |
| What to expect, 1–4 | `images/expect-1.jpg` … `expect-4.jpg` | 900×1200 (portrait) |
| Full-width break | `images/break.jpg` | 2400×1300 |

Keep files under about 300 KB each (JPEG or WebP) so the page stays fast.

## Contact shown on the site

Laura Wichmann Hipp, 843-708-2228 (`tel:843-708-2228`). To change the number, search and replace `843-708-2228` in `index.html`.
