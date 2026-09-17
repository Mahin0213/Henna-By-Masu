# Henna by Masu — Design System

A premium, cinematic identity for **Henna by Masu**, a bespoke bridal mehendi atelier (est. 2026, studio in Bandra West, travelling to Udaipur, Jaipur, Delhi NCR and the UAE). The system is built for one primary surface — an immersive, dark editorial marketing website — and for the collateral that surrounds it: enquiry forms, gallery pages, social and print announcements.

The register to aim for is a high-end fashion campaign held at evening light: dark, intimate, handcrafted, unhurried. Not a salon site, not a wedding template.

## Sources

This system was authored **from a written brand brief only** (pasted into the project on 11 Aug 2026). There was:

- no codebase, repository or local folder,
- no Figma file or link,
- no slide deck,
- no logo artwork, photography, or licensed font binaries.

Consequences, all deliberate:

- **No logo exists.** The brand mark is the `Wordmark` component — the name set in Bodoni Moda with an italic lowercase "by". Nothing was drawn or reconstructed. Replace it when the studio supplies artwork.
- **No photography exists.** Every image slot renders through `ImagePlate`, which shows a dark linen plate naming the intended subject ("Bridal palm, candlelight") rather than a stand-in photograph. Drop real files into `assets/` and pass `src`.
- **Fonts are loaded from Google Fonts** (see *Substitutions* below).

## Content fundamentals

**Voice.** First-person plural for the studio ("we reply within two days"), third-person for the artist ("Masu trained under her grandmother in Jaipur"). Never "I". The client is "you", and always singular — one bride, one celebration.

**Register.** Warm, specific, unhurried. Concrete nouns over adjectives: *jaali, paisley, mor, cone, stain, aftercare, Bandra West, six hours*. The copy earns luxury by naming real craft, not by claiming it. No exclamation marks, no urgency ("book now!", "limited slots"), no salon vocabulary ("packages", "deals", "services from ₹—").

**Length.** Headlines 2–7 words. Ledes one sentence. Body copy two sentences, three at the outside. Card copy under 30 words. Captions are a name and a place: "Anaya, Udaipur".

**Casing.** Display headlines are uppercase, set in the serif with 0.02em tracking — the romance comes from the typeface, not from sentence case. Body copy is sentence case. Micro-labels are uppercase at 0.28em: `BRIDAL ARTISTRY`, `EST. 2026`, `BY APPOINTMENT`, `FROM 5 HOURS`, `BRIDE + 2 GUESTS`. Buttons are uppercase and never wrap.

**Emoji: never.** Not in UI, not in social captions. Ornament is typographic (the diamond rule) or nothing.

**Specimen copy.**
- Hero: "HENNA, TOLD AS A LOVE STORY" / "Bespoke bridal mehendi and contemporary henna artistry for celebrations worth remembering."
- Section: "THREE WAYS TO WEAR HENNA" / "Every commission begins with the story you want your hands to tell."
- Card: "Full hands and feet, drawn freehand over an unhurried afternoon. Portraits, initials and motifs from your own story, worked into a design made only once."
- Closing CTA: "LET'S CREATE SOMETHING UNFORGETTABLE."
- Testimonial: "She drew our whole story into my hands."

Cultural note: use the South Asian vocabulary accurately (mehendi is the ceremony and the art; henna is the material; jaali, mor and paisley are motifs). Never generic-orientalise — no "exotic", no mandalas used as decoration divorced from the work.

## Visual foundations

**Colour.** Two backgrounds only per page: near-black `--ink-900` (#0B0C0A) and midnight green `--surface-page-alt` (#0A140F), alternating section by section so the page darkens as it descends. Warm accents carry everything else: henna copper `--copper-500` (#B65A35) for filled CTAs, antique gold `--gold-500`/`--gold-400` for labels, ordinals, ornament and focus states. Ivory `--ivory-50` (#F7F1E8) for headings, warm grey `--warm-gray-300` for body, `--warm-gray-500` for captions. Muted sage `--sage-500` is the single cool note, used at most once per page (a quiet eyebrow, a hover tint). No blues, no purples, no gradients as colour.

**Type.** Bodoni Moda (display) against Jost (body, nav, labels). Display sizes clamp between 3rem and 6.25rem for the hero; body is Jost 300 at 1.7 line-height, which is what keeps long paragraphs readable on black. Italic Bodoni is reserved for two things: the "by" in the wordmark, and testimonial quotes.

**Spacing.** 4px base scale to 160px. Sections breathe on `--section-y` (80–160px responsive) with `--gutter` side margins (20–72px). Content caps at 1440px, prose at 44–60ch. Whitespace is the luxury signal — when a section feels thin, cut content, don't add.

**Backgrounds.** Flat dark fills plus `--texture-linen`, a 1.6%-opacity diagonal hairline wash that reads as woven fabric at large sizes. No photographic page backgrounds except the hero. No repeating motif wallpaper.

**Imagery.** Warm, low-key, candlelit close-ups: hands, cone work, jewellery, silk, marigold. Natural skin tones, never desaturated or blue-graded, never heavy grain. Images sit as exhibits — generous dark space around them, 2px corners, occasional hairline frame. Gallery ratios are 4:5 portrait with 16:10 tiles breaking the rhythm.

**Ornament.** Used sparingly and always etched, never filled: the `Ornament` rule (fading hairline with three small diamonds), the rotated-square step numerals, hairline dashes before eyebrow labels. Maximum two ornaments per page. No paisley clip art, no full mandala illustrations.

**Corners & borders.** Near-square: `--radius-xs` 2px is the default, 3px maximum, 0 for image plates in grids. Everything is delineated by 1px hairlines at 14% ivory (28% for emphasis, gold at 45% for accent edges). No pills except the rare tag.

**Shadows.** Almost none. Depth comes from value contrast. `--shadow-card` and `--shadow-lift` exist for overlays and drawers only; no shadow on buttons, cards or images.

**Transparency & blur.** Only two places: the hero nav (45% ink + 14px blur, so photography passes underneath) and the menu overlay (82% ink + 18px blur). Never on cards or text panels.

**Protection.** Text over photography always sits on a scrim, never on raw image: `--scrim-hero` (top-down triple stop) behind hero copy, `--scrim-tile` (bottom 60% fade) behind gallery captions, `--scrim-flat` for even washes. No text capsules or pills over images.

**Motion.** Restrained and slow. Fades and 24px upward rises on scroll (`--dur-reveal` 900ms, `--ease-out-soft`), 1.04 image push-ins over 1400ms, 280ms colour transitions on interactive elements. Easing is `--ease-editorial` cubic-bezier(.22,.61,.36,1). No bounce, no spring, no parallax, no counters, no auto-carousels.

**States.** Hover on a filled button lightens the fill one step (copper 500 → 400); on the ivory-outline button it inverts to solid ivory with ink text; on quiet elements the hairline strengthens and text goes ivory. Links and text CTAs warm from gold 500 to gold 400. Press is a 1px downward nudge, never a scale. Focus turns the field underline antique gold. Disabled is 38% opacity — the label stays legible.

**Layout rules.** The nav is sticky at the top; nothing else is fixed. Grids run 3 → 2 → 1 column with `--grid-gap`. Cards are open compositions — no fill, no shadow, no radius — separated by a single base hairline that warms to gold on hover.

## Iconography

There was no icon set in the sources. The system ships a **Lucide** subset (ISC licence, lucide.dev) inlined into `components/core/Icon.jsx` at the 24px grid: `menu, close, instagram, mail, arrowRight, arrowUpRight, arrowLeft, chevronDown, chevronRight, phone, mapPin, calendar, plus, minus, check`. **This is a flagged substitution** — Lucide was chosen because its uniform hairline stroke matches the etched line motif; swap it if the studio adopts another set.

Rules: stroke weight 1.25 (1.0 above 32px), `currentColor`, no fills, no duotone, no icon backgrounds. Icons appear only in navigation, contact rows, buttons and directional cues — never beside headings, never as bullets, never as decorative section marks. Emoji are never used. The only "unicode as icon" usage is the en dash in labels ("Mumbai · Udaipur") and the rotated-square numerals in `StepMarker`, which are real elements, not glyphs.

## Substitutions to confirm

1. **Fonts** — Bodoni Moda + Jost load from the Google Fonts CDN (`tokens/fonts.css`); no licensed binaries were provided. If the studio has purchased display faces, send the files and I will self-host them with real `@font-face` rules.
2. **Icons** — Lucide subset, as above.
3. **Photography** — all image slots are named placeholders. No stock imagery was substituted.
4. **Logo** — none exists; the wordmark is type.

## Index

Root
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css`, `base.css`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills wrapper.
- `assets/` — logos, photography and icon binaries go here. **Currently empty**: no visual assets were supplied.

Components
- `components/core/` — **Button**, **Eyebrow**, **Wordmark**, **Ornament**, **Icon**
- `components/editorial/` — **SectionHeading**, **StyleCard**, **StepMarker**, **Quote**
- `components/media/` — **ImagePlate**, **GalleryTile**
- `components/navigation/** — **NavBar**, **SiteFooter**
- `components/forms/` — **Field**

Each directory carries a `*.card.html` thumbnail; each component has a `.d.ts` props contract and a `.prompt.md` usage note.

*Intentional additions* (no source defined a component inventory, so this set is authored to the brief): `Icon` exists as a wrapper for the substituted glyph set; `ImagePlate` exists so missing photography degrades honestly rather than being faked; `Ornament` and `Wordmark` carry the brand marks that would otherwise be hand-drawn per page.

Guidelines
- `guidelines/*.card.html` — 17 specimen cards across **Colors**, **Type**, **Spacing** and **Brand** (surfaces, copper, gold, ivory, sage, text roles, hairlines & scrims, font pairing, display scale, body scale, micro labels, space scale, section rhythm, corners & borders, motion, ornament & texture, photography treatment).

Templates (starting folders for consuming projects)
- `templates/landing-page/LandingPage.dc.html` — **Landing page**: hero, Signature Styles, Featured Gallery, The Experience, closing CTA and footer, composed from this system's components.

UI kit
- `ui_kits/website/` — the marketing site. `index.html` mounts the full landing page: hero with menu overlay, Signature Styles, Featured Gallery, The Experience, Artist Story, Testimonials, Booking CTA, footer, plus a working booking-enquiry drawer. Factored into `Hero.jsx` (hero + menu overlay), `Sections.jsx`, `Story.jsx`, `App.jsx`.
