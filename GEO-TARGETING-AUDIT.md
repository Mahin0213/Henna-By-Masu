# Geographic SEO Targeting Audit — hennabymasu.com

Audited from source: all 17 `.html` files in `site/`, plus `sections.jsx`, `app.jsx`, `location.jsx`, `service.jsx`, `blog.jsx`, `sitemap.xml`.

---

## 1. Primary geographic location currently targeted

**Leicester.** This is unambiguous and correct — it is the only location backed by real business facts:

- NAP in every page's `HealthAndBeautyBusiness` schema: `"streetAddress":"34 Beckingham Rd","addressLocality":"Leicester","postalCode":"LE2 1HB"`
- Footer Studio column: `34 Beckingham Rd, Leicester LE2 1HB`
- Homepage title: `Best Henna Artist in Leicester | Mehndi & Bridal Henna`
- TikTok handle: `@mehndi_leicester`
- Instagram handle: `masuma_leicester`

The homepage is the Leicester page. That architecture is right — the mistake would be a separate `/henna-leicester.html` competing with it. You have not made that mistake.

---

## 2. Every location mentioned on the site

**Home city:** Leicester (all pages)

**Leicestershire:** Leicestershire, Loughborough, Oadby — each mentioned **once**, all three inside a single FAQ answer in `sections.jsx`

**Dedicated city pages (7):**

| Page | H1 (in `window.CITY`) | Suburbs named |
|---|---|---|
| `henna-birmingham.html` | Best henna artist in Birmingham | Handsworth, Sparkhill, Edgbaston, Sutton Coldfield |
| `henna-coventry.html` | Best henna artist in Coventry | Foleshill, Radford, Earlsdon |
| `henna-wolverhampton.html` | Best henna artist in Wolverhampton | Whitmore Reans, Penn, Bilston, Black Country |
| `henna-solihull.html` | Best henna artist in Solihull | Shirley, Olton, Knowle |
| `henna-luton.html` | Best henna artist in Luton | Bury Park, Dallow, Stopsley, Dunstable, Bedfordshire |
| `henna-northampton.html` | Best henna artist in Northampton | Abington, Kingsthorpe, Far Cotton |
| `henna-london.html` | Best henna artist in London | East Ham, Ilford, Southall, Wembley |

**Also referenced:** Nottingham, Derby (footer + homepage schema `areaServed`), "the Midlands" (process step, `henna-near-me` lede)

---

## 3. Is Leicester used consistently? — No. Four gaps.

**3a. The homepage H1 does not contain Leicester or any keyword.**
`app.jsx`, `Hero()`:

```jsx
<h1 …>Henna, made memorable.</h1>
```

The title targets "Best Henna Artist in Leicester". The H1 — the strongest on-page signal after the title — names no service and no place.

**3b. Leicester appears in only one image alt.** Of the eleven `<img>` elements in `sections.jsx`, one mentions Leicester (`"Masuma, henna and mehndi artist in Leicester"`). Birmingham's page image alt does not mention Birmingham either.

**3c. There is no Leicester page copy block.** Every satellite city gets a paragraph naming 3–4 of its neighbourhoods. Leicester gets none. Not one Leicester district — no Highfields, Belgrave, Evington, Clarendon Park, Wigston, Narborough — appears anywhere on the site.

**3d. The footer "Areas" column omits Leicester entirely.**
`sections.jsx`, `Footer()`:

```jsx
<span className="col-title">Areas</span>
<a href="Henna Birmingham.html">Birmingham</a>
<a href="Henna Coventry.html">Coventry</a>
<a href="Henna Northampton.html">Northampton</a>
<a href="Henna London.html">London</a>
```

Four internal links under "Areas", and the home city is not one of them. Every internal link you pass with anchor text about place points **away** from Leicester.

---

## 4. Is Leicestershire used appropriately? — No, it is badly underused.

Leicestershire appears exactly once, in `sections.jsx`:

```js
{ q: "How far do you travel from Leicester?",
  a: "Across Leicestershire including Loughborough and Oadby as standard, and out to Birmingham, Coventry, Nottingham and Derby. …" }
```

That is the whole county presence. Leicestershire is the natural second tier for a Leicester business — Loughborough, Hinckley, Oadby, Wigston, Melton Mowbray, Market Harborough, Coalville. These are short, genuinely serviceable journeys with real search demand and near-zero competition. It gets one mention; London gets a whole page.

---

## 5. Does the site accidentally target conflicting cities? — Yes, seriously.

**5a. Seven pages each claim "Best henna artist in [other city]" while declaring a Leicester address.**

Every city page carries a full `HealthAndBeautyBusiness` block with the *same name* and the *same Leicester street address*, but a different `areaServed`:

```json
{"@type":"HealthAndBeautyBusiness","name":"Henna Art by Masu",
 "address":{"addressLocality":"Leicester","postalCode":"LE2 1HB"},
 "areaServed":{"@type":"City","name":"Birmingham"}}
```

Eight LocalBusiness declarations for one business, all sharing a name and address, is an entity-resolution problem. It gives Google eight competing candidate entities to reconcile, and dilutes the Leicester entity you actually want to rank.

**5b. London is the clearest conflict.** `henna-london.html` claims "Best henna artist in London" — from a studio in LE2, roughly 100 miles and two hours away, in the single most competitive henna market in the UK. It cannot rank, and the attempt actively muddies your geographic signal. It is also given `priority 0.7` in `sitemap.xml`, above Wolverhampton, Solihull, Luton and Northampton.

**5c. Luton and Northampton have the same problem at smaller scale** — Luton is ~80 miles, outside any plausible local catchment, and `location.jsx` itself concedes it: the FAQ says "Luton, Northampton and London are taken as full-day bookings", i.e. exceptional, not local.

**5d. Wolverhampton and Solihull overlap Birmingham.** Three thin pages compete for the same West Midlands intent instead of one strong page.

---

## 6. Consistency across every signal

| Signal | Leicester present? | Verdict |
|---|---|---|
| Title tags | Homepage, bridal-mehndi, bridal-henna, eid, event, pricing, journal, near-me, enquiry | Consistent |
| H1s | **No** — homepage H1 has no place at all; 7 city H1s name rival cities | **Broken** |
| Page copy | Artist section, FAQ, black-henna journal post, `henna-near-me` lede | Thin but present |
| Footer | Studio column: full NAP ✓ / Areas column: **Leicester absent** | **Inconsistent** |
| Contact info | `34 Beckingham Rd, Leicester LE2 1HB`, `+447388905164`, `Masuma0205@icloud.com` — identical everywhere | Consistent ✓ |
| Schema | Address correct on all 17 pages, but 8 duplicate LocalBusiness entities | **Conflicting** |
| Open Graph | No location in any `og:title` / `og:description` beyond what the meta says; `og:image` identical sitewide | Weak |
| Image alt | 1 of 11 alts mentions Leicester | **Underused** |
| URLs | No Leicester in any URL. `index.html` is the Leicester page but says so nowhere in the path | Acceptable (root = home city is fine) |
| Internal links | All four place-anchored links point to other cities | **Inverted** |

---

## 7. London references that should not exist

Remove or repurpose all of these:

1. `site/henna-london.html` — the entire page
2. `sections.jsx` `Footer()` — `<a href="Henna London.html">London</a>`
3. `location.jsx` `OTHERS` array — `["London", "Henna London.html"]`
4. `service.jsx` page data — `["Henna in London","henna-london.html"]` cross-links where present
5. `sitemap.xml` — `<loc>https://hennabymasu.com/henna-london.html</loc>`
6. `bridal-mehndi.html` schema `areaServed` — `{"@type":"City","name":"London"}`

Keep the single honest sentence in the travel FAQ ("Luton, Northampton and London are taken as full-day bookings") — that is a true statement of availability, not a ranking claim, and it is appropriate.

---

## 8. Missing Leicester / Leicestershire opportunities

1. **Leicester in the homepage H1** — the biggest single win available.
2. **Leicester districts, nowhere on the site** — Highfields, Belgrave, Evington, Clarendon Park, Aylestone, Knighton, plus Oadby, Wigston, Birstall, Braunstone. These carry your actual bookings and appear zero times.
3. **A Leicestershire county paragraph** — Loughborough, Hinckley, Melton Mowbray, Market Harborough, Coalville, Ashby.
4. **"Leicester" in the gallery alt text** — you have 10 real photographs of Leicester clients. Currently one alt mentions the city.
5. **Venue names.** Local wedding venues are the highest-intent local terms in this industry and there is not one on the site. Bridal clients search venue names.
6. **LE postcode reference.** "LE2" appears only inside the address string. A line like "the studio is five minutes from Leicester city centre" anchors proximity.
7. **"Leicester" in the `og:description`** for social and directory scrapers.

---

## 9. Natural or keyword-stuffed?

**Body copy: natural.** The prose is specific and human — "Chaand Raat sittings", "a stain plan", "straight down the A508". It reads like a real studio. No repetition padding, no "henna Leicester henna artist Leicester" strings. This is good and should not be touched.

**Two places where it tips into stuffing:**

**9a. `<meta name="keywords">` is stuffed.** The homepage carries 20 comma-separated terms:

```html
<meta name="keywords" content="best henna artist in leicester, best mehndi artist in leicester, henna leicester, leicester henna, henna artist leicester, mehndi artist leicester, bridal mehndi leicester, …">
```

Google has ignored this tag since 2009 — it does nothing for ranking, but a 20-term list is a visible spam signal to anyone auditing the site, and it publishes your keyword strategy to competitors. Harmless to rankings, worth deleting.

**9b. The seven city pages match Google's own definition of doorway pages.** They are template-generated from one `window.CITY` object, differing only by city name, an H1 pattern (`Best henna artist in [city]`), a suburb list and a drive time. Google's doorway policy names exactly this: multiple pages targeting different regions that funnel users to the same content. You asked me not to create doorway pages — the site already has seven.

---

## Recommended geographic keyword architecture

The principle: **one strong local hub, one honest coverage page, no city clones.**

```
/ (index.html)                    PRIMARY — Leicester
                                  "Henna & Mehndi Artist in Leicester"
                                  Leicester districts, Leicestershire towns, full NAP,
                                  the only LocalBusiness schema on the site

/areas-covered.html               ONE page replacing 7
                                  Leicestershire in full detail (Loughborough, Hinckley,
                                  Oadby, Wigston, Melton Mowbray, Market Harborough)
                                  + a shorter Midlands section (Birmingham, Coventry,
                                  Nottingham, Derby) + a travel line for further afield

/henna-birmingham.html            KEEP — genuine second catchment, 45 min,
                                  large market, real demand. Expand it, absorb
                                  Wolverhampton + Solihull into it as districts.

/bridal-mehndi.html               Service pages — keep as-is. Mention Leicester
/bridal-henna.html                once naturally each; do not localise further.
/eid-mehndi.html                  These rank on service intent, not place.
/event-mehndi.html
/pricing.html /journal.html /enquiry.html
```

**Pages to retire:** `henna-london.html`, `henna-luton.html`, `henna-northampton.html`, `henna-solihull.html`, `henna-wolverhampton.html`. Consider keeping `henna-coventry.html` — 25 minutes away, genuinely local — or folding it into `/areas-covered.html`.

Retire by 301 redirect, not deletion, so no signal is lost:

```apache
Redirect 301 /henna-london.html /areas-covered.html
Redirect 301 /henna-luton.html /areas-covered.html
Redirect 301 /henna-northampton.html /areas-covered.html
Redirect 301 /henna-solihull.html /henna-birmingham.html
Redirect 301 /henna-wolverhampton.html /henna-birmingham.html
```

---

## Exact changes required

### Change 1 — Homepage H1 (highest priority)

`app.jsx`, `Hero()`:

```jsx
{/* Before */}
<h1 …>Henna, made memorable.</h1>

{/* After */}
<h1 …>Henna artist in Leicester</h1>
<p className="hero-tagline" …>Henna, made memorable.</p>
```

### Change 2 — Footer "Areas" column: lead with home city

`sections.jsx`, `Footer()`:

```jsx
{/* Before */}
<span className="col-title">Areas</span>
<a href="Henna Birmingham.html">Birmingham</a>
<a href="Henna Coventry.html">Coventry</a>
<a href="Henna Northampton.html">Northampton</a>
<a href="Henna London.html">London</a>

{/* After */}
<span className="col-title">Areas</span>
<a href="index.html">Leicester</a>
<a href="areas-covered.html">Leicestershire</a>
<a href="Henna Birmingham.html">Birmingham</a>
<a href="areas-covered.html">All areas covered</a>
```

### Change 3 — Footer areas strip: add the county

`sections.jsx`, Studio column:

```jsx
{/* Before */}
<span …>Leicester · Birmingham · Coventry · Nottingham · Derby</span>

{/* After */}
<span …>Leicester · Leicestershire · Birmingham · Coventry · Nottingham · Derby</span>
```

### Change 4 — Add a Leicester coverage paragraph to the home page

New copy for the Artist or Process section in `sections.jsx` — this is the content that is entirely missing today:

> The studio is in Leicester, five minutes from the city centre, and most bookings are Leicester and Leicestershire — Highfields, Belgrave, Evington, Clarendon Park, Oadby, Wigston, and out to Loughborough, Hinckley and Market Harborough. Birmingham, Coventry, Nottingham and Derby are a comfortable drive; anywhere further is taken as a full-day booking.

### Change 5 — One LocalBusiness entity, not eight

On all pages **except** `index.html`, change the schema `@type` so only the homepage declares the business:

```json
// Before — on henna-birmingham.html and 15 others
{"@type":"HealthAndBeautyBusiness","name":"Henna Art by Masu",
 "address":{…Leicester…},"areaServed":{"@type":"City","name":"Birmingham"}}

// After
{"@type":"Service","serviceType":"Henna and mehndi artistry",
 "areaServed":{"@type":"City","name":"Birmingham"},
 "provider":{"@type":"HealthAndBeautyBusiness","name":"Henna Art by Masu",
   "@id":"https://hennabymasu.com/#business"}}
```

And add `"@id":"https://hennabymasu.com/#business"` to the homepage block so every `provider` resolves to the one entity.

### Change 6 — Delete `<meta name="keywords">` from all 17 pages

No ranking effect either way; removes a spam signal and stops publishing your strategy.

### Change 7 — Add Leicester to Open Graph descriptions

`index.html`:

```html
<!-- Before -->
<meta property="og:description" content="Voted five stars for henna in Leicester. …">
<!-- Already correct on the homepage; apply the same to service pages, which currently omit the city -->
```

### Change 8 — Image alt text

`sections.jsx` — add the city to two or three gallery alts, not all of them:

```jsx
{/* Before */}
alt="Bridal mehndi designs on both hands, held out with gold kalire"
{/* After */}
alt="Bridal mehndi designs on both hands with gold kalire — Leicester bride"
```

### Change 9 — Sitemap

Remove the retired city URLs; add `/areas-covered.html` at priority `0.7`; change `index.html` to `/` (see the crawlability audit, Finding 10).

---

## One caveat on the whole plan

None of these geographic signals reach Google until the crawlability problem is fixed. Every H1, every paragraph, every internal link listed above lives in JavaScript, so today Google sees only the title tags and the JSON-LD. **The H1 fix and the Leicester copy have no effect at all until the site is pre-rendered.** Fix that first, then this.

And one thing no on-page change substitutes for: a **Google Business Profile** at 34 Beckingham Rd. For a local service business, the map pack is most of the traffic, and the profile — not the website — is what ranks in it.
