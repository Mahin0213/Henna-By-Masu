# Website & Local SEO Strategy — Henna Art by Masu

**Scope:** hennabymasu.com, reviewed 6 October 2026.

**How this was reviewed, and one caveat.** Hostinger's CDN began returning 403
to automated requests partway through this review, so the live URL could not be
fetched at the end. The audit is taken from the deployed source of all 27 pages
in `site/`, which was verified byte-identical to the live site earlier the same
day. One commit — the technical pass of 6 October (image dimensions, LCP hints,
www redirect, 404 page) — is **not yet uploaded**, so it is excluded from the
"current state" below and listed under actions.

**Nothing here invents a service, price, qualification, review or service area.**
Every factual claim is drawn from the site's own copy. Where a recommendation
depends on something the site does not state, it is marked **[CONFIRM]** and
collected in the last section. Keyword ideas are hypotheses: there is no
keyword tool or rank data in this environment, so none of the figures that
usually accompany such a list appear here, and every term is marked for
validation.

**Overlap with existing work.** Items 4 and 5 of the brief largely exist already
in `KEYWORD-MAP.md`, and most per-page titles, descriptions and headings are
already implemented. Rather than restate them, this document marks what is
**done**, what is **worth changing**, and what is **new**.

---

## 1. Audit

### Strengths — do not undo these

- **Genuinely distinctive writing.** "One bride, one booking, one design that is
  never drawn again", "straight down the A508", "Chaand Raat sittings". It reads
  like a person, not a template, and it is the site's biggest competitive asset
  against the thin pages it competes with.
- **Prices are public** — £10 simple, £30 semi bridal, £50 bridal. Most
  competitors hide this; publishing it filters enquiries and answers the single
  most searched question in this trade.
- **A clear safety position.** Organic henna, mixed in the studio, never black
  henna, with a dedicated page explaining PPD. This is a real trust asset and a
  genuine differentiator.
- **Technically sound.** Static HTML, correct canonicals, one business entity in
  schema, FAQ markup on most pages, clean URLs, 26 pages in the sitemap, mobile
  layout verified at five widths.
- **Honest scope.** "Luton, Northampton and London are taken as full-day
  bookings" is the kind of sentence that builds trust.

### Unclear or missing — in order of what it costs you

1. **There is no phone or WhatsApp link anywhere on the site.** Across 27 pages
   there are zero `tel:` links, and the only two WhatsApp links appear *after* a
   form submission fails. The number exists in the schema, invisible to humans.
   For this trade — where customers expect to message an artist and get a feel
   for them — this is the single biggest conversion leak on the site.
2. **No booking terms.** The words deposit, refund and booking fee appear
   nowhere. A bride about to commit to a wedding date wants to know what secures
   it and what happens if plans change. **[CONFIRM]**
3. **No travel cost answer.** The site says travel "is confirmed with the
   quote". For a price-sensitive enquirer in Birmingham, that is an open
   question that delays enquiry. **[CONFIRM]**
4. **Thin transactional pages.** `pricing.html` is 200 words and `enquiry.html`
   220. Both are the last step before an enquiry and both answer fewer questions
   than the pages leading to them.
5. **The enquiry form asks for a full address before any contact.** Address is a
   required field. Early-stage enquirers who just want a price for a date may
   abandon rather than hand over their address. **[CONFIRM]** whether address is
   genuinely needed at first contact.
6. **No insurance, DBS or patch-test statement.** School fairs and corporate
   bookings routinely ask for public liability insurance; schools may ask about
   DBS. Children's henna raises allergy questions. **[CONFIRM]**
7. **No availability signal.** Nothing indicates which dates or seasons are
   open, so the enquiry is a cold start.
8. **Four reviews.** Real and five-star, but thin next to competitors with
   dozens. This is a business-process gap, not a website gap.
9. **13 of 27 pages are not linked from the homepage at all** — including all
   four journal articles, both "near me" pages, and the Karva Chauth and Diwali
   pages. They rely on the sitemap and a few sibling links, which is the weakest
   possible internal linking for pages you want to rank.

### What could make a visitor hesitate

- Wanting to ask one quick question and finding only a form.
- Not knowing whether the date is free before investing in a form.
- A bride unable to confirm what secures her date.
- An event organiser unable to confirm insurance before approaching their venue.
- A parent unable to find an answer about children's skin safety without reading
  a full article.

---

## 2. Positioning

**Statement (draft, based only on what the site confirms):**

> Henna Art by Masu is a one-artist Leicester studio drawing freehand henna and
> mehndi — never stencils, never black henna. Masuma takes one bridal booking a
> day, so every design is drawn once, for one person, from a conversation about
> the ceremony rather than from a catalogue. Prices start at £10, bridal from
> £50, and the studio travels across Leicestershire and the Midlands.

**What makes it defensible:** freehand-only, one booking a day, organic henna,
published prices, and a named artist with a five-star record. Those are
positions a template competitor cannot copy quickly.

**Ideal customers, in the order they are worth pursuing:**

1. **Leicester and Leicestershire brides** booking three to six months ahead for
   an Asian wedding. Highest value, longest lead time, strongest local signal.
2. **Families booking for Eid, Diwali and Karva Chauth.** Seasonal, repeat,
   group bookings, short decision cycle.
3. **Event and stall bookers** — mehndi nights, school fairs, melas, corporate
   days. Booked by the hour, often repeat annually, and decided by a different
   kind of buyer who needs insurance and logistics answered.
4. **Local walk-up work** — simple designs, parties, children's henna. Lowest
   value individually but the volume that fills gaps and generates reviews.
5. **Birmingham and Coventry** versions of 1–3, where you compete in ordinary
   search results rather than the map.

---

## 3. Navigation and page structure

**Current:** the menu holds eight links — five of them jump to sections of the
homepage (The atelier, Selected work, For the bride, The artist, Questions) and
three are pages (Journal, Price list, Enquire). Every service page, city page
and article is reachable only from the footer, or not at all.

That was reasonable for a one-page site. With 27 pages it under-serves both
visitors and search engines, because the homepage is the page with the most
authority to pass on.

**Recommended menu:**

```
Henna & mehndi   → bridal mehndi, bridal henna designs, Eid, Diwali,
                   Karva Chauth, event mehndi, children's henna, stall hire
Gallery          → homepage gallery (#work)
Prices           → pricing.html
Areas            → Leicester, Loughborough, Birmingham, Coventry, all areas
Journal          → journal.html (index to the four guides)
About Masuma     → the artist section, or its own page
Enquire          → enquiry.html
```

**Plus, on mobile, a persistent contact bar** with WhatsApp and call, since that
is how most of this audience prefers to open a conversation. **[CONFIRM]** the
number is safe to publish.

**Page structure is already sound** — service pages, city pages, guides and
transactional pages are correctly separated. The gap is linking, not structure.

---

## 4. Per-page SEO plan

Every keyword below is a **hypothesis to validate** against real keyword data
and the words customers actually use in enquiries. Titles and descriptions
marked *done* are already live and within length limits.

### Homepage — `index.html`
- **Intent:** local commercial. Someone choosing a henna artist in Leicester.
- **Primary:** henna artist Leicester
- **Secondary:** mehndi artist Leicester · henna Leicester · best henna artist
  in Leicester · mobile henna artist Leicester **[CONFIRM the word "mobile"]**
- **Title/description:** *done* — "Best Henna Artist in Leicester | Mehndi &
  Bridal Henna", 58/160 characters.
- **H1:** *done* — "Henna artist in Leicester".
- **H2s:** *done and strong.* The one addition worth making is a short "How to
  book" block naming the steps and what secures a date.
- **Internal links to add:** the four journal guides, both "near me" pages, and
  the seasonal pages in season. These are the 13 orphaned pages.

### Bridal mehndi — `bridal-mehndi.html`
- **Intent:** high-value commercial research, long decision cycle.
- **Primary:** bridal mehndi Leicester
- **Secondary:** wedding mehndi artist Leicester · Asian bridal mehndi ·
  Indian bridal mehndi Leicester **[CONFIRM]** · Pakistani bridal mehndi
  Leicester **[CONFIRM — the site never says Pakistani]** · bridal mehndi price
- **Title/description:** *done.*
- **H2s to add:** "What secures your date" **[CONFIRM terms]** and a wedding-week
  timeline (when to have mehndi relative to the day — content you already own in
  the booking guide).
- **Internal links:** booking guide, motifs guide, aftercare, pricing. *Partly
  done* — booking guide and aftercare already linked.

### Bridal henna designs — `bridal-henna.html`
- **Intent:** design research, earlier in the journey than the page above.
- **Primary:** bridal henna Leicester
- **Secondary:** bridal mehndi designs · Arabic henna designs Leicester ·
  Khaleeji henna · full hand mehndi design
- **Change worth making:** the style names (Arabic, Khaleeji, Indian) appear in
  the copy but no section is *about* them. Three short H2s — one per style, with
  a gallery image each — would make this page genuinely rank for style searches.
  **[CONFIRM]** which styles Masuma offers by name.

### Event mehndi — `event-mehndi.html`
- **Intent:** organiser, logistics-led, often a different buyer.
- **Primary:** henna artist for events Leicester
- **Secondary:** henna for parties Leicester · mehndi night henna · guest henna
  table · group henna booking
- **H2s to add:** insurance and logistics **[CONFIRM]**; minimum booking length
  **[CONFIRM]**.

### Henna stall hire — `henna-stall-hire.html`
- **Primary:** henna stall hire
- **Secondary:** corporate henna events · school fete henna · festival henna
  artist
- **H2 to add:** "What venues and schools ask for" — insurance, setup, power.
  This page cannot convert a school without it. **[CONFIRM]**

### Eid / Diwali / Karva Chauth
- **Primary:** henna for Eid Leicester · henna for Diwali Leicester · Karva
  Chauth mehndi Leicester
- **Seasonal note:** these must be indexed *months* before the season. Link them
  from the homepage from roughly six weeks out, then remove the link after.

### Children's henna — `childrens-henna.html`
- **Primary:** children's henna Leicester
- **Secondary:** kids henna party · henna for children
- **H2 to add:** skin safety and minimum age **[CONFIRM age policy]**.

### Pricing — `pricing.html`
- **Intent:** the highest-intent page on the site. Also the thinnest.
- **Primary:** henna prices Leicester
- **Secondary:** how much is bridal mehndi · mehndi artist price · henna cost
- **This is the highest-return page to expand.** Add: what changes a quote
  (coverage, number of people, travel), what is included, how events are priced,
  what secures a booking. All **[CONFIRM]**.

### Enquiry — `enquiry.html`
- **Intent:** transactional. Not a ranking page; a conversion page.
- **Add:** WhatsApp and call options beside the form, expected reply time (the
  site already says two days), and what happens next.

### "Near me" pages
- **Primary:** henna near me · mehndi near me
- **Reality check:** these are resolved mainly by the Google Business Profile
  map pack, not by a page. The pages support the query; the profile wins it.

### City pages
- Birmingham and Coventry are *done* — rebuilt with unique sections, area lists
  and FAQs. Loughborough is live and is the best remaining local opportunity.
- **Leicestershire towns are the real gap:** Oadby, Wigston, Hinckley, Market
  Harborough. Low competition, genuine catchment, short travel.
- Luton, Northampton and London remain thin templates targeting markets 80–100
  miles away. They are unlikely to rank and dilute the local signal. Retiring
  them was recommended in the earlier geo audit and declined; the recommendation
  stands but is not urgent.

### Journal and guides
- Four guides are live: black henna, aftercare, booking bridal mehndi, motifs.
- **They are linked from nowhere on the homepage.** Fixing that is the cheapest
  ranking improvement available for them.

---

## 5. Keyword map

Grouped by page and intent. **No search volumes are given because none are
available here.** Every row needs validation against current keyword data and
against the language real enquirers use.

| Keyword (hypothesis) | Page | Intent | Site confirms the service? |
|---|---|---|---|
| henna artist Leicester | index | local commercial | Yes |
| mehndi artist Leicester | index | local commercial | Yes |
| henna artist Leicestershire | index / Loughborough | local commercial | Yes — county copy and Loughborough page |
| mobile henna artist Leicester | index | local commercial | Implied — site says it travels to homes and venues, but never uses the word "mobile" **[CONFIRM]** |
| bridal henna Leicester | bridal-henna | commercial research | Yes |
| bridal mehndi Leicester | bridal-mehndi | commercial research | Yes |
| wedding mehndi artist Leicester | bridal-mehndi | commercial research | Yes |
| henna for weddings Leicester | bridal-mehndi | commercial research | Yes |
| Asian bridal henna Leicester | bridal-mehndi | commercial research | Partly — the phrase is not used **[CONFIRM]** |
| Indian bridal mehndi Leicester | bridal-henna | commercial research | Partly — "traditional Indian panels" appears **[CONFIRM]** |
| Pakistani bridal mehndi Leicester | bridal-henna | commercial research | **No — never mentioned. [CONFIRM]** |
| Arabic henna designs Leicester | bridal-henna | design research | Yes |
| custom henna designs Leicester | bridal-henna / index | design research | Yes — freehand, drawn once |
| henna for parties Leicester | event-mehndi | local commercial | Yes |
| henna artist for events Leicester | event-mehndi | organiser | Yes |
| henna for Eid Leicester | eid-mehndi | seasonal | Yes |
| henna for Diwali Leicester | diwali-mehndi | seasonal | Yes — confirmed by the owner |
| henna prices Leicester | pricing | transactional | Yes |
| children's henna Leicester | childrens-henna | local commercial | Yes — confirmed by the owner |
| henna stall hire | henna-stall-hire | organiser | Yes — confirmed by the owner |
| henna near me / mehndi near me | near-me pages + GBP | local navigational | Yes |
| how to darken henna stain | henna-aftercare | informational | Yes |
| is black henna safe | black-henna | informational | Yes |
| when to book bridal mehndi | booking-bridal-mehndi | informational | Yes |
| mehndi motif meanings | mehndi-motifs | informational | Yes |

**Terms deliberately not targeted:** anything implying a Birmingham, London or
Luton *location* (as opposed to travel to them), since the business is in
Leicester and claiming otherwise would be both inaccurate and ineffective.

---

## 6. Draft homepage copy

**The current homepage copy is good and ranks on its own merits — this is a set
of additions and alternatives, not a replacement.** The existing voice should
win any disagreement with the suggestions below.

**Headline — current:** "Henna artist in Leicester" with "Henna, made
memorable." beneath. *Keep.* It carries the keyword and the brand line.

**Introduction — addition.** The opening says what the work is but not what is
different about booking it. One sentence, placed under the hero:

> One artist, one booking a day, every design drawn freehand for the person
> wearing it — organic henna only, never black henna.

**Services — the four current cards are well written.** Add a fifth and sixth
now that the services exist: children's henna and stall hire, both of which are
currently reachable only from the footer.

**Trust block — new, and the most valuable addition.** Place above the enquiry
section, as short lines rather than prose:

> Five-star rated on Google · Organic henna, mixed in the studio · Never black
> henna · One bridal booking a day · Studio in Leicester, travelling across the
> Midlands · [CONFIRM: insured for events] · [CONFIRM: what secures your date]

**Call to action — the gap.** Every CTA currently leads to a form. Add a second
path for people who want to ask one question:

> Ask a question on WhatsApp · Or send your date and we will reply with
> availability within two days.

**FAQs — the six on the homepage are strong.** Three worth adding, all of which
answer real hesitation **[CONFIRM all three]**:

> **What secures my date?**
> **Do you charge for travel?**
> **Are you insured for events and school fairs?**

---

## 7. Practical improvements

**Portfolio.** The gallery has 18 pieces with filters and a lightbox, which is
good. Three improvements: label a few pieces with the occasion they were drawn
for **[CONFIRM]**; add the artist's own commentary to two or three ("this took
five hours, the names are worked into the jaali"), which is the kind of detail
that converts brides; and consider a dedicated bridal gallery page, since bridal
is the highest-value service and currently shares one gallery with party work.

**Pricing.** Expand from 200 words. State what changes a quote, what is
included, how events are priced by the hour, and what secures a booking. If
there is a minimum for travel or events, say so — it filters out poor-fit
enquiries rather than losing good ones. **[CONFIRM all]**

**Enquiry process.** Add WhatsApp and call beside the form. Reconsider making
address required at first contact. Tell people what happens next and when.
Consider asking how they found you — cheap, and it tells you which of this work
is paying off.

**Service area.** The site covers this well in copy. One addition: a short
"where we travel" summary on the enquiry page, so an out-of-town enquirer can
confirm they are in range before writing.

**Customer information.** The three genuine gaps are booking terms, travel
charges, and insurance. All three are things customers ask before committing,
and all three are currently unanswered. **[CONFIRM]**

---

## 8. Ten articles worth writing

Chosen to answer real questions and support a specific page. The four existing
guides are excluded.

1. **How much does bridal mehndi cost, and what changes the price** — supports
   pricing, answers the most common question in the trade.
2. **Your wedding week mehndi timeline** — when to book, when to have it, when
   it peaks. Supports bridal.
3. **Arabic, Indian or Khaleeji: choosing your bridal style** — supports bridal
   henna designs and the style keywords. **[CONFIRM styles offered]**
4. **How to prepare for your mehndi appointment** — what to wear, what to do the
   day before. Supports bridal and aftercare.
5. **How many henna artists does my event need?** — guest numbers against hours.
   Supports events and stall hire, and pre-qualifies organisers.
6. **Henna or mehndi: is there a difference?** — a genuine, frequently searched
   question the site is well placed to answer.
7. **Booking a henna stall: a checklist for schools and offices** — supports
   stall hire, and answers the insurance and logistics questions. **[CONFIRM]**
8. **Henna for children: what parents ask** — supports children's henna.
   **[CONFIRM age and safety policy]**
9. **Diwali mehndi designs and when to have them drawn** — seasonal, supports the
   Diwali page, publish well ahead.
10. **What to expect at a bridal consultation** — demystifies the process and
    removes a barrier for first-time brides.

---

## 9. Prioritised plan

### Quick — days, highest return

1. **Upload the pending build.** The 6 October technical work (image
   dimensions, image priority hints, www redirect, 404 page, sitemap dates) is
   committed but not live.
2. **Add WhatsApp and phone links** to the header, enquiry page and footer.
   This is the biggest conversion gap on the site. **[CONFIRM number]**
3. **Set up the Google Business Profile.** Still the single biggest ranking
   lever available, and it decides the "near me" searches. Add Birmingham and
   Coventry as service areas.
4. **Link the 13 orphaned pages from the homepage** — the four guides first.
5. **Publish booking terms, travel policy and insurance status.** **[CONFIRM]**
6. **Submit the sitemap in Search Console** and start collecting the only
   keyword data that actually matters: your own impressions.

### Next — weeks

7. Expand the pricing and enquiry pages.
8. Rebuild the navigation around the seven-item structure above.
9. Ask every client for a Google review. Four is the weakest number on the site.
10. Write articles 1, 2 and 5 — the three that most directly support bookings.
11. Add the style sections to bridal henna designs. **[CONFIRM]**
12. Build the Leicestershire town pages: Oadby, Wigston, Hinckley, Market
    Harborough.

### Longer term — months

13. Get listed where brides look: wedding directories, local venue supplier
    lists, Bridebook and similar.
14. Seasonal pages linked from the homepage six weeks before each season.
15. A dedicated bridal gallery with the artist's commentary.
16. Revisit Luton, Northampton and London once Leicester and Leicestershire are
    consolidated.
17. Review Search Console quarterly and rewrite titles against real query data,
    replacing the hypotheses in this document with evidence.

---

## Facts the owner must confirm

Nothing in this document assumes an answer to any of these. Several
recommendations above cannot be written until they are answered.

**Booking and money**
1. What secures a date — deposit, booking fee, or nothing? How much?
2. Cancellation and rescheduling terms?
3. Is travel charged, included, or beyond a certain distance?
4. Any minimum spend or minimum hours for events and travel?
5. Payment methods accepted?

**Services and policies**
6. Is a phone number and WhatsApp safe to publish? Which number?
7. Public liability insurance — held? Certificate available to venues?
8. DBS check — held? Schools often ask.
9. Minimum age for children's henna, and any patch-test policy?
10. Which bridal styles should be named: Indian, Pakistani, Khaleeji, Arabic,
    Moroccan?
11. Are two bookings a day ever taken, or strictly one for bridal?
12. Typical working hours, and whether Chaand Raat travel extends beyond
    Leicester?

**Accuracy checks**
13. Are £10 / £30 / £50 still current?
14. Is "45 minutes to Birmingham" and "25 minutes to Coventry" accurate?
15. Is the Google review count still four?
16. Should Nottingham and Derby have pages, given they appear in the schema's
    service area but have none?
