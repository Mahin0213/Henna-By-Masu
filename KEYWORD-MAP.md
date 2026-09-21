# Keyword Map — hennabymasu.com

50 target keywords, each mapped to the page that should own it, with the title
and description to use.

**On data provenance, so this is not mistaken for rank-tracker output:** I have
no Ahrefs/SEMrush/Keyword Planner access from here, and Google blocked
automated SERP access with a CAPTCHA. So there are no real search volumes in
this document, and I have not invented any. What is grounded in observation:
the current on-page state of all 17 pages, and one competitor page read
directly — `sajjabeauty.com/henna`, the result ranking above hennabymasu.com in
the screenshot. Everything else is domain judgment about how people search for
henna, and should be validated against Search Console once the site is live and
collecting impressions.

**On `<meta name="keywords">`:** not added, deliberately. Google has ignored it
since 2009, and a previous audit in this repo removed the 20-term version that
used to be here. A keyword list in the source ranks for nothing and hands your
targeting to competitors. Keywords earn rankings through titles, headings and
actual page content, which is what this map allocates.

---

## What the competitor is doing that you are not

Read from `sajjabeauty.com/henna`. Their page is thinner than anything on your
site — a few paragraphs, no pricing, no structured data. It outranks you mostly
because, until the pre-render fix ships, your pages contain no crawlable text
at all. Three things they target that you have zero coverage of:

| Their angle | Your coverage |
|---|---|
| **Children's henna** (a named service) | Nothing on the site |
| **Group bookings** (a named service) | Implied by event page, never named |
| **Before/aftercare guide** on the service page | Exists, but buried in a collapsed accordion on `journal.html` |

The aftercare one matters most. You have better aftercare copy than they do —
it is just not on a page that can rank for it.

---

## Cluster 1 — Core local (10)

Already owned. No changes needed; listed so the map is complete.

| # | Keyword | Page | Status |
|---|---|---|---|
| 1 | henna artist leicester | `index.html` | Covered |
| 2 | best henna artist in leicester | `index.html` | Covered |
| 3 | mehndi artist leicester | `index.html` | Covered |
| 4 | henna leicester | `index.html` | Covered |
| 5 | mehndi leicester | `index.html` | Covered |
| 6 | henna near me | `henna-near-me.html` | Covered |
| 7 | mehndi near me | `mehndi-near-me.html` | Covered |
| 8 | henna artist near me | `henna-near-me.html` | Covered |
| 9 | mehndi artist near me | `mehndi-near-me.html` | Covered |
| 10 | henna places in leicester | `henna-near-me.html` | Covered |

Note on 6–10: "near me" searches are resolved mostly by the Google Business
Profile map pack, not by a web page. A page can support it; the profile is what
wins it. See Priorities below.

## Cluster 2 — Bridal (8)

Already owned by `bridal-mehndi.html` / `bridal-henna.html`, both well titled.

| # | Keyword | Page | Status |
|---|---|---|---|
| 11 | bridal mehndi leicester | `bridal-mehndi.html` | Covered |
| 12 | bridal henna leicester | `bridal-henna.html` | Covered |
| 13 | best bridal mehndi artist | `bridal-mehndi.html` | Covered |
| 14 | bridal mehndi designs | `bridal-henna.html` | Covered |
| 15 | asian bridal mehndi | `bridal-mehndi.html` | Weak — phrase never appears in copy |
| 16 | wedding mehndi leicester | `bridal-mehndi.html` | Weak — "wedding" is rare in the copy |
| 17 | bridal mehndi price | `pricing.html` | Covered |
| 18 | when to book bridal mehndi | `booking-bridal-mehndi.html` | **Done** |

15 and 16 need a sentence of body copy each, not a new page.

## Cluster 3 — Style and design (9)

The styles are all named somewhere in the copy, but no page is *about* them.
These are best served by design-led body sections plus image alt text, not by
nine thin pages.

| # | Keyword | Page | Status |
|---|---|---|---|
| 19 | arabic henna designs | `bridal-henna.html` | Weak |
| 20 | khaleeji henna | `bridal-henna.html` | Weak |
| 21 | indian mehndi designs | `bridal-henna.html` | Weak |
| 22 | simple henna designs | `index.html` | Covered |
| 23 | full hand mehndi design | `bridal-mehndi.html` | Weak |
| 24 | back hand mehndi design | `bridal-henna.html` | Gap |
| 25 | feet mehndi design | `bridal-mehndi.html` | Weak |
| 26 | finger mehndi design | `bridal-henna.html` | Gap |
| 27 | henna tattoo designs | `event-mehndi.html` | Weak |

## Cluster 4 — Occasion (8)

Eid is owned. The rest are genuine gaps with hard seasonal spikes — Karva
Chauth and Diwali in particular are single-week surges where a page that has
been indexed for months wins and a page published that week does not.

| # | Keyword | Page | Status |
|---|---|---|---|
| 28 | eid mehndi leicester | `eid-mehndi.html` | Covered |
| 29 | chaand raat mehndi | `eid-mehndi.html` | Covered |
| 30 | karva chauth mehndi | `karva-chauth-mehndi.html` | **Done** |
| 31 | diwali mehndi | `diwali-mehndi.html` | **Done** |
| 32 | engagement mehndi | `event-mehndi.html` | Weak |
| 33 | baby shower henna | `event-mehndi.html` | Gap |
| 34 | birthday henna party | `event-mehndi.html` | Weak |
| 35 | nikah / walima mehndi | `bridal-mehndi.html` | Gap |

## Cluster 5 — Events and commercial hire (7)

`event-mehndi.html` covers guest tables but not the hire-language people
actually search with, and not the two services the competitor names.

| # | Keyword | Page | Status |
|---|---|---|---|
| 36 | henna artist for hire | `event-mehndi.html` | Weak |
| 37 | henna stall hire | `henna-stall-hire.html` | **Done** |
| 38 | corporate henna events | `henna-stall-hire.html` | **Done** |
| 39 | school fete henna | `henna-stall-hire.html` | **Done** |
| 40 | festival henna artist | `henna-stall-hire.html` | **Done** |
| 41 | group henna booking | `event-mehndi.html` | **Done** |
| 42 | children's henna party | `childrens-henna.html` | **Done** |

## Cluster 6 — Informational (8)

You already own every one of these answers in `journal.html` — but all five
journal pieces live on one URL inside collapsed accordions, so they compete
with each other and rank for none of it. Splitting them into their own pages is
the cheapest content win available: the writing is already done.

| # | Keyword | Page | Status |
|---|---|---|---|
| 43 | how to darken henna stain | `henna-aftercare.html` | **Done** |
| 44 | henna aftercare | `henna-aftercare.html` | **Done** |
| 45 | how long does henna last | `henna-aftercare.html` | **Done** |
| 46 | is black henna safe | `black-henna.html` | **Done** |
| 47 | black henna dangers / PPD | `black-henna.html` | **Done** |
| 48 | mehndi motif meanings | `mehndi-motifs.html` | **Done** |
| 49 | henna vs mehndi difference | → new journal piece | Gap |
| 50 | how long does bridal mehndi take | `index.html` FAQ | Covered |

## Cluster 7 — Leicestershire towns (bonus, not counted in the 50)

The prior geo audit made this point and it still stands: Loughborough, Oadby,
Wigston, Hinckley and Market Harborough are real catchment, minutes away, with
far weaker competition than London or Luton — which you have pages for and
cannot realistically win. Loughborough first.

---

## Titles and descriptions for the gap pages

Ready to use. All titles ≤ 60 characters, all descriptions 148–160.

### `henna-aftercare.html`
Targets 43, 44, 45.
```
Title:       Henna Aftercare | How to Get a Darker Henna Stain
Description: How to get a darker henna stain and make it last: leave the paste on, scrape don't wash, then seal with oil. Aftercare from a Leicester mehndi studio.
```

### `black-henna.html`
Targets 46, 47. Also a trust asset — "no black henna" is already a selling point across the site.
```
Title:       Is Black Henna Safe? PPD Dangers | Henna Art by Masu
Description: Black henna contains PPD, a hair dye that burns and scars skin. What it is, why it is not henna, and how to spot it — from a Leicester organic henna studio.
```

### `childrens-henna.html`
Targets 42, and supports 39.
```
Title:       Children's Henna Leicester | Kids Party Mehndi From £10
Description: Children's henna in Leicester for birthdays, school fairs and family parties. Quick, simple designs in skin-safe organic henna, never black henna. From £10.
```

### `henna-stall-hire.html`
Targets 37, 38, 39, 40, 41.
```
Title:       Henna Stall Hire Leicester | Events, Fetes & Corporate
Description: Henna stall and artist hire for school fetes, melas, festivals and corporate events across Leicester and the Midlands. Guest tables quoted by the hour.
```

### `karva-chauth-mehndi.html`
Targets 30. Publish well before October — a page indexed for months outranks one published in the spike week.
```
Title:       Karva Chauth Mehndi Leicester | Traditional Designs
Description: Karva Chauth mehndi in Leicester, drawn freehand in the days before the fast. Traditional hands and feet or simple designs. Organic henna, no black henna.
```

### `diwali-mehndi.html`
Targets 31. Same timing logic.
```
Title:       Diwali Mehndi Leicester | Festive Henna From £10
Description: Diwali mehndi in Leicester — festive mandala and trailing designs drawn freehand for the family, at home or at the studio. Organic henna only. From £10.
```

### `henna-loughborough.html`
Leicestershire, 25 minutes, low competition.
```
Title:       Best Henna Artist in Loughborough | Bridal & Party Mehndi
Description: Henna artist covering Loughborough and Leicestershire. Bridal mehndi, Eid henna and party henna tables drawn freehand, half an hour from the studio. From £10.
```

### Journal pieces split to their own URLs
The copy already exists in `blog.jsx`. Each becomes its own page; `journal.html`
stays as the index linking to them.

| New page | From journal post | Targets |
|---|---|---|
| `black-henna.html` | "Why we never use black henna" | 46, 47 |
| `henna-aftercare.html` | "How to get a deeper stain" | 43, 44, 45 |
| `booking-bridal-mehndi.html` | "When to book your bridal date" | 18 |
| `mehndi-motifs.html` | "Reading the motifs" | 48 |

---

## Priority order

Ranked by what actually moves rankings, not by effort.

1. **Deploy the site.** Everything above is theoretical until `site/` is
   uploaded to Hostinger. The live site is still the old client-rendered build
   that serves crawlers an empty page. Nothing else on this list matters first.
2. **Google Business Profile at 34 Beckingham Rd.** Keywords 6–10 — the "near
   me" cluster, which is the highest-intent traffic in this business — are won
   in the map pack, not on a web page. A profile with photos, hours, services
   and review replies will outperform every on-page change in this document.
3. ~~**Split the journal into individual pages.**~~ **Done** — four article
   pages, each with FAQ, BlogPosting and breadcrumb schema. Chaand Raat was
   deliberately *not* split: keyword 29 is already owned by `eid-mehndi.html`,
   and a second page would compete with it. It stays on the journal and links
   to the Eid page instead.
4. ~~**Add the gap pages**~~ **Done** — children's henna, henna stall hire,
   Loughborough, Karva Chauth and Diwali, each confirmed as a real service
   before its page was written. The seasonal pages need to be live well
   before October to have time to index.
5. **Body-copy fixes for the "Weak" rows** — a sentence each for "Asian bridal",
   "wedding mehndi", "engagement", "henna tattoo", the style names.
6. **Then** revisit titles. The 17 existing ones are already strong; there is
   little left to gain there, which is why this list barely touches them.
