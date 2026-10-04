---
name: Christmas in Charleston Candlelight Tour of Private Homes
description: A printed evening programme in Charleston green, haint blue and ivory, lit by one candle-flame gold.
colors:
  flame-400: "#edb65c"
  flame-500: "#dfa040"
  green-950: "#141d18"
  green-900: "#1d2923"
  haint-300: "#b4cfcb"
  haint-400: "#9dbfba"
  haint-700: "#2f5d5c"
  ivory-50: "#fbf8f1"
  ivory-100: "#f5efe2"
  ivory-200: "#e9e1cf"
  ink: "#1b241f"
  ink-soft: "#4c5a52"
  on-green: "#f5efe2"
  on-green-soft: "#b9c9bf"
typography:
  display:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(3.25rem, 1.2rem + 7.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.4vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  fact:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.35
    fontFeature: "lnum"
  lede:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  sharp: "2px"
spacing:
  "1": "0.5rem"
  "2": "1rem"
  "3": "1.5rem"
  "4": "2.5rem"
  "5": "4rem"
  "6": "6rem"
  section: "clamp(4.5rem, 3rem + 7vw, 9rem)"
  gutter: "clamp(1.25rem, 0.5rem + 3.5vw, 4rem)"
components:
  button-flame:
    backgroundColor: "{colors.flame-400}"
    textColor: "{colors.green-950}"
    typography: "{typography.action}"
    rounded: "{rounded.sharp}"
    padding: "0.85rem 1.75rem"
    height: "3.25rem"
  button-flame-hover:
    backgroundColor: "#f6c979"
    textColor: "{colors.green-950}"
  button-flame-lg:
    backgroundColor: "{colors.flame-400}"
    textColor: "{colors.green-950}"
    rounded: "{rounded.sharp}"
    padding: "0.85rem 2.5rem"
    height: "3.75rem"
  link-arrow:
    textColor: "{colors.on-green}"
    typography: "{typography.action}"
    height: "2.75rem"
  nav-call:
    textColor: "{colors.on-green}"
    rounded: "{rounded.sharp}"
    padding: "0.6rem 1.1rem"
  nav-call-hover:
    backgroundColor: "{colors.flame-400}"
    textColor: "{colors.green-950}"
  plate:
    backgroundColor: "{colors.ivory-200}"
    textColor: "{colors.ink}"
  plate-blue:
    backgroundColor: "{colors.haint-400}"
    textColor: "{colors.ink}"
  ticket:
    backgroundColor: "{colors.ivory-50}"
    textColor: "{colors.ink}"
  ticket-stub:
    backgroundColor: "{colors.green-900}"
    textColor: "{colors.on-green}"
    padding: "2.5rem 1rem"
  callbar:
    backgroundColor: "{colors.flame-400}"
    textColor: "{colors.green-950}"
---

# Design System: Christmas in Charleston Candlelight Tour of Private Homes

## Overview

**Creative North Star: "The Candlelit Programme"**

The site reads like the printed programme handed out at the door of a house tour: Caslon headings, ruled fact tables, square corners, and admission tickets as the only boxed objects. It is set on the colours of the city itself, a near-black Charleston green, a pale haint blue, and ivory paper, with a single candle-flame gold doing all of the pointing.

Density is low and deliberate. Each section holds one idea on one field of colour, and sections change by changing field, not by adding dividers or cards. Nothing is illustrated with borrowed photography: windows are drawn in hairline, and photograph slots stay honestly empty until a real picture exists.

**Key Characteristics:**
- Full-bleed colour fields (green, ivory, haint blue) carry the section rhythm.
- One gold, reserved for flame, phone number and the primary action.
- Caslon for anything that names or states; grotesque for anything that explains or instructs.
- Hairline rules and square corners; the ticket is the only bordered, shadowed object.
- Motion is slow and single-purpose: candles light, plates unveil, text rises once.

## Colors

Three fields and one light: dark green, pale blue and ivory as surfaces, gold as the only accent.

### Primary
- **Candle Flame** (`flame-400`): primary button fill, every phone number set on green, the ticket date numerals, the emphasised word in the statement band, text selection, the mobile call bar.
- **Flame Deep** (`flame-500`): the focus ring, the brand flame mark, and the thick underline under phone links on ivory. Never a fill for text.

### Secondary
- **Charleston Green** (`green-900`): the hero, contact band, ticket stub and mobile menu field. `green-950` is one step darker for the footer, the statement band, and all text set on flame or haint.

### Tertiary
- **Haint Blue** (`haint-300`): the one pale-blue section field, the hairline stroke of drawn artwork, and the italic subtitle on green. `haint-400` fills empty photograph plates on that field. `haint-700` is the readable deep teal for labels and link hover on ivory.

### Neutral
- **Ivory Paper** (`ivory-50`): page ground, ticket body, solid nav. `ivory-100` is the alternate paper for the details section; `ivory-200` fills empty photograph plates on ivory.
- **Ink** (`ink`): text on ivory. **Ink Soft** (`ink-soft`): running paragraphs and pending facts on ivory.
- **On Green** (`on-green`): text on green fields. **On Green Soft** (`on-green-soft`): ledes, labels and secondary text on green.

### Named Rules
**The One Flame Rule.** Gold marks what is lit: the flame, the number to call, the action. It never fills a section, never tints a heading on ivory, and there is no second accent.

**The Field Pairing Rule.** Text colours belong to their field: ink and ink-soft on ivory, on-green and on-green-soft on green, green-950 on haint and on flame. Do not carry a text colour across fields.

## Typography

**Display Font:** Libre Caslon Display (with Libre Caslon Text, Georgia, serif)
**Body Font:** Hanken Grotesk (with system-ui, -apple-system, Segoe UI, sans-serif)
**Label/Mono Font:** none; labels are Hanken Grotesk

**Character:** An engraved, high-contrast Caslon at regular weight carries the voice; a quiet grotesque stays out of its way. Hierarchy comes from size and face, never from bold serif.

### Hierarchy
- **Display** (400, fluid 3.25rem to 6rem, 1.04): the page title, the statement band, the contact phone numeral and ticket date numerals. Tight tracking, balanced wrapping.
- **Headline** (400, fluid 2.25rem to 4.25rem, 1.04): one per section, held to a short measure (12 to 16ch where the build constrains it).
- **Title** (Caslon Text 400, fluid 1.5rem to 1.875rem, 1.15): item headings inside a section.
- **Fact** (Caslon Text 400, fluid 1.125rem to 1.5rem, 1.35, lining numerals): the value side of every fact row, hours, and the brand line.
- **Lede** (400, 1.25rem, 1.55): one supporting sentence under a display heading on green.
- **Body** (400, 1.0625rem, 1.65): running text, capped near 34rem.
- **Action** (600, 0.875rem, 0.08em, uppercase): buttons and arrow links. Nav links use the same size at 500 and 0.06em, not uppercase.
- **Label** (500 to 600, 0.75rem, 0.18em, uppercase): the term side of a fact (When, Hours, Location) and the day and month on a ticket stub.

### Named Rules
**The Solid and Italic Rule.** Confirmed facts are set in upright Caslon at full ink. Anything still pending is set in italic Caslon in ink-soft. Italic Caslon is also the voice for the lines around a title and for placeholder notes; it is never used for emphasis in body text.

**The Label Names a Fact Rule.** Uppercase tracked labels exist only as the term of a term-and-value pair. They always sit beside or directly above a Caslon value.

## Layout

A single centred column (max 78rem plus a fluid gutter of 1.25rem to 4rem) inside full-bleed colour fields. Section padding is fluid (4.5rem to 9rem); inside sections the scale is 0.5, 1, 1.5, 2.5, 4, 6rem.

Compositions are asymmetric two-part splits (5fr/6fr image and text, 1fr/24rem heading and note, equal halves in the hero) and a four-up row whose even items drop by 4rem to break the grid line. The first screen is a full-height green field closed by a ruled four-cell facts rail.

Responsive behaviour is structural, not just scaled. At 64rem the four-up becomes two-up and tickets stack; at 60rem the nav collapses to a menu and the hero stacks with artwork above text; at 52rem two-column text stacks; at 40rem lists become hairline-ruled rows and the fixed call bar appears. Fact rails go from four cells to a two-by-two grid, keeping their rules. Tap targets hold a 2.75rem minimum.

## Elevation & Depth

Flat by default. Depth comes from changing field colour, and the only glow on the page is candlelight (a warm radial gradient in the drawn windows and at the foot of the statement band).

### Shadow Vocabulary
- **Paper lift** (`box-shadow: 0 18px 40px -28px rgb(27 36 31 / 0.5)`): under a ticket, so it reads as an object lying on the page.
- **Nav edge** (`box-shadow: 0 1px 0 rgb(27 36 31 / 0.1), 0 10px 30px -18px rgb(27 36 31 / 0.35)`): only once the nav turns solid ivory.
- **Bar lift** (`box-shadow: 0 -10px 30px -12px rgb(20 29 24 / 0.55)`): above the fixed mobile call bar.

### Named Rules
**The Lying-on-the-Page Rule.** A shadow is earned only by something that floats over content (nav, call bar) or is a physical object (ticket). Sections, plates and rows never cast one. All shadows are ink-tinted, wide, and pulled in with negative spread.

## Shapes

Square. One radius (2px) softens buttons, the outlined phone chip and focus rings; everything else is a true rectangle. Structure is drawn with 1px hairlines at low alpha of the field's own text colour (about 20% on green, 22% on ivory and haint). A dashed 1px rule is reserved for the perforation between a ticket's stub and body. Photograph plates are 3:4 or 4:5 portrait rectangles with an inset hairline frame while empty. Icons and artwork are drawn inline in single-weight strokes; the flame is the only filled mark.

## Components

### Buttons
- **Shape:** near-square (2px), minimum height 3.25rem, uppercase action type.
- **Primary (flame):** flame-400 fill, green-950 text, padding 0.85rem by 1.75rem. A large size (3.75rem tall, 2.5rem side padding) is used for the closing call action and may carry a small filled icon.
- **Hover / Focus:** fill lightens to #f6c979 and the button lifts 2px (200ms); active settles back. Focus is a 2px flame-500 outline offset 3px, the same on every interactive element.
- **Arrow link:** the secondary action. Uppercase action type with a permanent 1px underline and a drawn arrow that slides 5px on hover. Inherits the field's text colour.

### Cards / Containers
- **Ticket:** the only card. Ivory-50 body with a 1px ink border at 28%, paper-lift shadow, square corners. A green-900 stub on the left holds label, large flame numeral, label; a dashed perforation separates it from the body, which holds a display heading, one line of body text, and a Caslon time pinned to the bottom. The stub narrows on phones; it never moves on top.
- **Plate:** a photograph slot. Empty, it is a flat ivory-200 (or haint-400 on the blue field) rectangle with an inset hairline frame and an italic note bottom-left; when an image is present the frame and note disappear and the image covers the slot.

### Fact Rows
A definition list, not a table. Each row is a hairline-topped pair: uppercase label in haint-700 at left (1fr), Caslon value at right (2.2fr), stacking on phones. On green the same pattern runs horizontally as a rail of cells divided by vertical hairlines. Pending rows follow the Solid and Italic Rule.

### Navigation
Fixed, 4.5rem tall, transparent over the green hero and solid ivory with the nav-edge shadow after 40px of scroll. Brand is the flame mark plus a Caslon line with its second half in italic soft colour. Links are 0.875rem at weight 500 with a 1px underline that draws in from the left on hover and stays for the current section. The phone number sits at the right as an outlined 2px chip with tabular numerals that fills flame on hover. Below 60rem, links and chip give way to a three-bar toggle opening a full-height green-900 panel: display-size links on hairline rules, phone number in flame at the foot.

### Call Bar
Phones only. A full-width flame-400 bar fixed to the bottom with green-950 text, sliding up (450ms) once the hero has passed and withdrawing when the contact section arrives, so the number is never shown twice.

### Drawn Windows
The signature artwork: three six-over-six sash windows with louvred shutters in haint-300 hairline at about 60% opacity, each holding an ivory candle, a flame-400 flame and a clipped warm glow. With motion allowed the candles light left to right (1400ms each, 420ms apart) and flicker gently; with reduced motion they are simply lit.

### Reveals
One easing for everything, `cubic-bezier(0.16, 1, 0.3, 1)`. Text blocks rise 1.25rem and fade in once (900ms); plates unveil top to bottom by clip (1300ms); siblings stagger by 110ms. State changes run at 200ms. All of it is gated on scripting and on `prefers-reduced-motion`, and content is visible without either.

## Do's and Don'ts

### Do:
- **Do** change section by changing field: green-900, ivory-50, haint-300, ivory-100, green-950.
- **Do** put the phone number in flame-400 on any green field, and with a 2px flame-500 underline on ivory.
- **Do** set every fact as an uppercase label beside a Caslon value, divided by 1px hairlines.
- **Do** mark pending information in italic Caslon in ink-soft, in place, rather than hiding the row.
- **Do** keep corners at 2px or square and rules at 1px.
- **Do** leave a photograph slot as an empty framed plate until a real photograph exists.
- **Do** keep the visible focus ring (2px flame-500, 3px offset) and honour reduced motion.

### Don't:
- **Don't** introduce a second accent, or use gold as a section background or for body text on ivory.
- **Don't** set Caslon in bold; weight 400 only, with size doing the work.
- **Don't** box content in cards. The ticket is the only bordered, shadowed container.
- **Don't** add shadows to sections, plates or rows, and don't use neutral black shadows.
- **Don't** round corners beyond 2px or use pill shapes.
- **Don't** fill a plate with stock or generated imagery.
- **Don't** put flame-coloured text on ivory or haint; use green-900 or haint-700 there.
