# Crawlability & Indexability Audit — hennabymasu.com

Audited from source: `site/index.html`, `site/henna-birmingham.html`, `site/bridal-mehndi.html`, `site/app.jsx`, `site/sections.jsx`, `site/location.jsx`, `site/service.jsx`, `site/robots.txt`, `site/sitemap.xml`, `site/.htaccess`.

Every finding below is quoted from the actual files. Nothing is inferred from appearance.

---

## Verdict

The site is a **100% client-rendered React application with no server-rendered content and no fallback**. The initial HTML response for every one of the 17 pages contains **zero indexable body text, zero headings, and zero internal links**. All of it is created in the browser by JSX that is compiled *at runtime* by Babel Standalone.

Meta tags, canonicals, Open Graph and JSON-LD structured data are all correctly in the raw HTML — that part is sound. The problem is the entire visible page.

---

## Finding 1 — The `<body>` contains no content at all

**Severity: Critical**
**File: every `.html` in `site/` (verified in `index.html`, `henna-birmingham.html`, `bridal-mehndi.html`)**

The complete body of the homepage:

```html
<body>
<div id="root"></div>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" …></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" …></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" …></script>
<script src="_ds/…/_ds_bundle.js"></script>
<script type="text/babel" src="sections.jsx"></script>
<script type="text/babel" src="app.jsx"></script>
</body>
```

That is the whole thing. No `<h1>`, no paragraph, no `<a>`, no address, no price.

**Why it matters:** Google's indexing pipeline queues JavaScript rendering separately from crawling, and rendering is not guaranteed on any schedule. Until render happens the page has no content signals whatsoever, so it can be indexed as an empty document. Bing, and every AI crawler, LLM answer engine, social preview scraper and directory bot, mostly do not execute JavaScript at all — they will see a blank page. For a local business competing on "henna artist leicester", this is the single highest-impact issue on the site.

---

## Finding 2 — JSX is compiled in the browser by Babel Standalone

**Severity: Critical**
**File: every `.html`, the two `type="text/babel"` script tags**

```html
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
<script type="text/babel" src="sections.jsx"></script>
<script type="text/babel" src="app.jsx"></script>
```

`type="text/babel"` is not a type any browser executes. Nothing runs until Babel loads, then Babel itself re-fetches `sections.jsx` and `app.jsx` over the network and compiles them. The render chain is:

`HTML → unpkg React → unpkg ReactDOM → unpkg Babel (~2.5 MB) → fetch sections.jsx → fetch app.jsx → compile → render`

Six serial network round trips, three of them to a third-party CDN, before a single word appears.

**Why it matters:** Googlebot's renderer has a resource budget and will abandon slow pages. Any failure at any link in that chain — unpkg rate-limiting, a CDN blip, an integrity-hash mismatch, a firewall blocking unpkg — produces a permanently blank page for that crawl. This setup is intended for prototyping, not production.

---

## Finding 3 — React **development** builds are being served in production

**Severity: High**
**File: every `.html`**

```html
react@18.3.1/umd/react.development.js
react-dom@18.3.1/umd/react-dom.development.js
```

The `.development.js` builds are several times larger than production builds and run extra validation on every render.

**Fix:**

```html
<!-- Before -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" …></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" …></script>

<!-- After: production builds, self-hosted so there is no third-party dependency -->
<script src="vendor/react.production.min.js"></script>
<script src="vendor/react-dom.production.min.js"></script>
```

Self-hosting also removes unpkg as a single point of failure and improves Core Web Vitals, which is a ranking input.

---

## Finding 4 — The H1 does not exist in crawlable HTML

**Severity: Critical**
**File: `site/app.jsx`, `Hero()`**

```jsx
<h1 style={{ … }}>Henna, made memorable.</h1>
```

This is the only `<h1>` on the homepage and it exists solely inside JSX. Two separate problems:

1. It is not in the HTML response (Finding 1).
2. Even once rendered, "Henna, made memorable." contains **no keyword** — not "henna artist", not "Leicester", not "mehndi". The page title targets "Best Henna Artist in Leicester" but the H1 supports none of it.

The city pages are better structured — `henna-birmingham.html` carries `"h1":"Best henna artist in Birmingham"` — but that string sits inside `window.CITY = {…}` in a `<script>` tag, which is code, not indexable text.

**Fix for the homepage H1** (`app.jsx`), keeping the brand line as a supporting element:

```jsx
{/* Before */}
<h1 …>Henna, made memorable.</h1>

{/* After */}
<h1 …>Henna artist in Leicester</h1>
<p className="hero-tagline">Henna, made memorable.</p>
```

---

## Finding 5 — All page copy for service and city pages lives inside `<script>` blocks

**Severity: Critical**
**Files: `site/bridal-mehndi.html`, `bridal-henna.html`, `eid-mehndi.html`, `event-mehndi.html`, `henna-near-me.html`, `mehndi-near-me.html`, and all 7 `henna-<city>.html`**

Example from `bridal-mehndi.html`:

```html
<script>window.PAGE={"eyebrow":"For the bride","h1":"Bridal mehndi",
"lede":"One bride, one booking, one design that is never drawn again.",
"body":["Your booking opens with a conversation — …"],
"points":[{"h":"Consultation","p":"Studio or video. …"}], …};</script>
```

The keyword-bearing copy — service descriptions, FAQ answers, travel areas, "From £50 · Consultation included" — is technically present in the HTML file, but as a JavaScript string literal. Search engines do not extract body copy from script variables.

**Why it matters:** These 13 pages exist specifically to rank for their keywords, and their entire body content is invisible without JS execution. The FAQ text is duplicated into JSON-LD (which *is* read), so structured data may be the only thing Google sees on those pages — with no matching visible text to corroborate it, which weakens rich-result eligibility.

---

## Finding 6 — Internal links are not in crawlable HTML

**Severity: High**
**Files: `site/app.jsx` (`NAV`, `MenuOverlay`), `site/sections.jsx` (`Footer`), `site/service.jsx` / `location.jsx` (`links`)**

There are no `<a href>` elements in any HTML response. Every link is a JSX `<a>` created at runtime:

```jsx
const NAV = [["The atelier","#services"],["Selected work","#work"],
  ["For the bride","#bridal"],["The artist","#artist"],["Questions","#faq"],
  ["Journal","journal.html"],["Price list","pricing.html"],["Enquire","enquiry.html"]];
```

The cross-links between service pages are similarly stored as data (`"links":[["Bridal henna","bridal-henna.html"], …]`).

**Why it matters:** Internal linking is how PageRank flows between pages and how Google discovers them. Without rendering, the site is 17 orphan pages held together only by `sitemap.xml`. A sitemap gets pages crawled; internal links are what make them *rank*.

---

## Finding 7 — Navigation links sit inside an `aria-hidden` overlay

**Severity: Medium**
**File: `site/app.jsx`, `MenuOverlay()`**

```jsx
<div role="dialog" aria-modal="true" aria-hidden={!open}
  style={{ …, opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}>
```

Even after JavaScript runs, the primary navigation is inside a container that is `aria-hidden="true"`, `opacity: 0` and `pointer-events: none` until the user clicks MENU. Links inside `aria-hidden` content are devalued, and content requiring interaction to reveal is treated as lower priority.

**Fix:** the footer already carries crawlable links to the same destinations, which mitigates this. Strengthen it by keeping the key pages (Price list, Journal, Enquire) as always-visible header links rather than only inside the overlay. Note this is a real but *secondary* issue — Findings 1, 2 and 5 must be fixed first for it to matter at all.

---

## Finding 8 — Gallery items are `<button>` elements with no URLs

**Severity: Medium**
**File: `site/sections.jsx`, `Tile()` and `Lightbox()`**

```jsx
<button onClick={onOpen} aria-label={`${item.cat} — ${item.title}. Open larger view`} …>
```

Each of your best photographs opens a JS lightbox. There is no crawlable URL for any gallery image, so none can rank in Google Images or accumulate links — a significant loss for a visual business. Filters ("Bridal", "Modern", "Festive", "Details") are React state with no URL either, so filtered views cannot be indexed or shared.

**Positives here:** the images are real `<img>` tags with keyword-bearing alt text (`"Bridal henna Leicester — bride in a red velvet veil with hennaed hands"`) and `loading="lazy"`. Once rendered, the alt text is good.

---

## Finding 9 — No `<noscript>` fallback anywhere

**Severity: Critical**
**File: every `.html`**

With JavaScript unavailable — a non-rendering crawler, a CDN failure, an integrity mismatch, a corporate proxy — the visitor and the bot receive a black empty page. There is no address, no phone number, no message.

**Minimum viable mitigation** (this is a band-aid, not a substitute for Finding 1's fix):

```html
<body>
<div id="root"></div>
<noscript>
  <h1>Henna artist in Leicester — Henna Art by Masu</h1>
  <p>Bridal mehndi, Eid henna and party henna designs drawn freehand by Masuma.
     Studio at 34 Beckingham Rd, Leicester LE2 1HB. Simple henna from £10,
     semi bridal from £30, bridal mehndi from £50.</p>
  <p>WhatsApp <a href="https://wa.me/447388905164">+44 7388 905164</a> ·
     <a href="mailto:Masuma0205@icloud.com">Masuma0205@icloud.com</a></p>
  <ul>
    <li><a href="bridal-mehndi.html">Bridal mehndi</a></li>
    <li><a href="bridal-henna.html">Bridal henna designs</a></li>
    <li><a href="eid-mehndi.html">Eid mehndi</a></li>
    <li><a href="event-mehndi.html">Event mehndi</a></li>
    <li><a href="pricing.html">Prices</a></li>
    <li><a href="enquiry.html">Enquire</a></li>
  </ul>
</noscript>
```

---

## Finding 10 — Canonical URLs point to `/index.html`, not `/`

**Severity: Medium**
**Files: `site/index.html`, `site/sitemap.xml`**

```html
<link rel="canonical" href="https://hennabymasu.com/index.html">
<meta property="og:url" content="https://hennabymasu.com/index.html">
```

Apache serves the homepage at both `https://hennabymasu.com/` and `https://hennabymasu.com/index.html`. Declaring the `/index.html` form as canonical is backwards — inbound links and Google Business Profile will point at the root, which then appears to be a non-canonical duplicate. `sitemap.xml` repeats the error with `<loc>https://hennabymasu.com/index.html</loc>`.

**Fix:**

```html
<!-- Before -->
<link rel="canonical" href="https://hennabymasu.com/index.html">
<meta property="og:url" content="https://hennabymasu.com/index.html">

<!-- After -->
<link rel="canonical" href="https://hennabymasu.com/">
<meta property="og:url" content="https://hennabymasu.com/">
```

And in `sitemap.xml`, `<loc>https://hennabymasu.com/index.html</loc>` → `<loc>https://hennabymasu.com/</loc>`.

Add a redirect in `.htaccess` so only one URL is ever served:

```apache
RewriteEngine On
RewriteCond %{THE_REQUEST} \s/+index\.html[\s?] [NC]
RewriteRule ^ / [R=301,L]
```

---

## Finding 11 — Brand name delivered as an image in the header

**Severity: Low**
**Files: `site/app.jsx` (`Header`), `site/sections.jsx` (`Footer`)**

```jsx
<img src="assets/logo-mark.png" alt="Henna Art by Masu" className="brand-mark" …>
```

The business name at the top of every page is pixels. The `alt` text is correct and descriptive, which handles most of the risk, and the footer carries "© 2026 Henna Art by Masu" as real text — so this is largely covered. Worth noting only because the logo is the most prominent brand mention on the page and it is not text.

---

## Finding 12 — Images have no intrinsic dimensions

**Severity: Low**
**File: `site/sections.jsx` — all `<img>` and `<video>` elements**

No `width`/`height` attributes are set; sizing is CSS-only (`aspectRatio`, `objectFit: cover`). This causes layout shift as images arrive, and CLS is a Core Web Vitals metric.

**Fix:** add intrinsic dimensions alongside the CSS, e.g. `<img src="…" width="1080" height="1350" …>`.

---

## What is already correct

Worth stating plainly, because these are done properly and should not be changed:

- Titles are 46–61 characters, descriptions 148–166 — all display in full.
- Canonical, robots, Open Graph, Twitter Card, `lang="en-GB"`, `theme-color` all present on all 17 pages.
- `HealthAndBeautyBusiness` JSON-LD with full `PostalAddress`, `telephone`, `areaServed`, `sameAs`, and real `AggregateRating` + `Review` entries — all in the raw HTML and fully crawlable.
- `FAQPage` JSON-LD on the homepage and service pages, in raw HTML.
- `robots.txt` allows everything and declares the sitemap. `sitemap.xml` lists all 17 pages with priorities.
- Clean, hyphenated, lowercase URLs.
- Real `<img>` tags with keyword-bearing alt text and `loading="lazy"` on gallery images.
- FAQ and reviews are plain stacked text, **not** accordions or sliders — no interaction needed to reveal them (once JS has run).
- No blocked resources: nothing in `robots.txt` or `.htaccess` prevents Googlebot fetching the `.jsx`, `.css` or `_ds_bundle.js` files it needs to render. `.htaccess` only blocks `enquiries.log`, which is correct.

---

## The fix that actually resolves this

Findings 1, 2, 4, 5, 6 and 9 are all the same root cause: **the HTML files are shells and the content is JavaScript**. Patching them individually is not worth doing.

The correct fix is to **pre-render each page to static HTML**: run the React tree once, capture the resulting markup, and write it into the `<body>` of each `.html` file in place of the empty `<div id="root">`. The result is 17 pages that contain their own full text, headings and links, load with no JavaScript at all, and keep the exact same design — pixel for pixel.

React can then either be dropped entirely on static pages, or retained only where interaction is genuinely needed:

- the enquiry form (`enquiry.html`)
- the gallery lightbox and filters (`index.html`)
- the hero video controls and the menu overlay

Both approaches leave the design untouched. Concretely, this means:

| Page group | Change |
|---|---|
| 7 city pages, 6 service pages, `pricing`, `journal` | Fully static HTML, no React, no Babel |
| `index.html` | Static HTML + a small script for gallery/lightbox/video/menu |
| `enquiry.html` | Static HTML form posting to the existing `send-enquiry.php` |

Expected outcome: complete indexable content on every page, elimination of the unpkg dependency and the 2.5 MB Babel download, and a substantially faster site.

**This is a build-process change, not a redesign — the visual output is identical.** It is a large change to make unprompted, so it needs your go-ahead before I start.
