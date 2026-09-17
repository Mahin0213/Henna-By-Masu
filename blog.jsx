const { Button, Eyebrow, Icon, Ornament } = window.HennaByMasuDesignSystem_0b7f2a;
const { Footer, GUTTER, SECTION_Y } = window;
const { useTweaks, TweaksPanel, TweakSection, TweakRadio } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "composition": "ledger",
  "atmosphere": "ink",
  "voice": "editorial"
}/*EDITMODE-END*/;

const LINEN_WASH = "repeating-linear-gradient(135deg,rgba(247,241,232,.016) 0 2px,transparent 2px 5px)";

const ATMOSPHERE = {
  ink: { page: "var(--ink-900)", texture: "none", rule: "var(--border-hairline)", head: "rgba(11,12,10,.86)", grade: "none", meta: "var(--accent-alt)" },
  midnight: { page: "var(--surface-page-alt)", texture: LINEN_WASH, rule: "rgba(247,241,232,.13)", head: "rgba(10,20,15,.88)", grade: "saturate(.96)", meta: "var(--sage-500)" },
  ember: { page: "var(--surface-card)", texture: LINEN_WASH, rule: "rgba(200,155,60,.28)", head: "rgba(27,21,18,.9)", grade: "saturate(1.08) contrast(1.04)", meta: "var(--copper-500)" },
};

const VOICE = {
  intimate: { h1: "clamp(1.875rem,4vw,3rem)", h1Case: "none", h1Track: ".005em", h1Measure: "20ch", title: "clamp(1.125rem,2vw,1.5rem)", titleCase: "none", titleTrack: ".005em", lede: "var(--type-body)", measure: "46ch", gap: "clamp(28px,3.5vw,48px)", pad: "clamp(24px,3vw,40px)" },
  editorial: { h1: "clamp(2.5rem,6vw,5rem)", h1Case: "uppercase", h1Track: ".02em", h1Measure: "12ch", title: "clamp(1.5rem,2.8vw,2.125rem)", titleCase: "uppercase", titleTrack: ".03em", lede: "var(--type-body-lg)", measure: "56ch", gap: "clamp(40px,5vw,72px)", pad: "clamp(32px,4vw,56px)" },
  grand: { h1: "clamp(3rem,8vw,6.25rem)", h1Case: "uppercase", h1Track: ".02em", h1Measure: "10ch", title: "clamp(1.875rem,4vw,3rem)", titleCase: "uppercase", titleTrack: ".02em", lede: "var(--type-body-lg)", measure: "62ch", gap: "clamp(56px,7vw,104px)", pad: "clamp(44px,5.5vw,80px)" },
};

const POSTS = [
  {
    src: "assets/modern-diamond.jpg", pos: "50% 45%", cat: "Safety", date: "August 2026", read: "3 min",
    title: "Why we never use black henna",
    lede: "If it stains black in an hour, it is not henna.",
    body: [
      "Real henna is a green-brown paste that leaves an orange stain, deepening to brown over two days. Anything that goes black quickly has been mixed with para-phenylenediamine, a hair dye chemical sold as black henna.",
      "PPD on skin causes chemical burns, blistering and scarring that can outlast the design by months, and it can leave a lifelong allergy to hair dye. It is not permitted in cosmetics applied to skin in the UK.",
      "Every cone used here is mixed in the studio from henna powder, lemon, sugar and essential oils. Nothing else. If you have been offered black henna in Leicester for a party or a wedding, ask what is in the cone.",
    ],
  },
  {
    src: "assets/detail-fresh-cone.jpg", pos: "50% 40%", cat: "Aftercare", date: "August 2026", read: "4 min",
    title: "How to get a deeper stain",
    lede: "The colour is decided in the twelve hours after the cone leaves your hand.",
    body: [
      "Leave the paste on as long as you can bear — six hours is good, overnight is better. The longer the henna sits, the more dye passes into the skin, and the darker the stain sits once it oxidises.",
      "Scrape the dried paste off rather than washing it. Water in the first few hours lifts the colour before it has set. Warm the hands over a clove pan or a mug of tea, then seal with a little mustard or coconut oil.",
      "The stain darkens for two days after it looks finished. What is orange on the morning of the mehndi will be deep brown by the wedding.",
    ],
  },
  {
    src: "assets/bridal-veil-portrait.jpg", pos: "50% 32%", cat: "Bridal", date: "July 2026", read: "5 min",
    title: "When to book your bridal date",
    lede: "Three months is comfortable. Peak season asks for more.",
    body: [
      "Bridal work is one artist, one pair of hands, one booking a day. Between May and October, and around Eid, dates go early — three to six months ahead is usual for a Saturday.",
      "The mehndi itself is best held two days before the wedding, so the stain reaches its darkest on the day you are photographed. One day is workable; the same morning rarely is.",
      "If your date is close, ask anyway. Cancellations happen, and a smaller design can often be fitted around an existing booking.",
    ],
  },
  {
    src: "assets/bridal-mangalsutra.jpg", pos: "50% 55%", cat: "Design", date: "June 2026", read: "6 min",
    title: "Reading the motifs",
    lede: "Jaali, mor, paisley — what the language of a bridal design actually says.",
    body: [
      "Jaali is the lattice, the fine net that fills a panel without closing it. It carries light across the palm and gives a dense design room to breathe.",
      "The mor, the peacock, is drawn for the beginning of something. Paisley curls out of Persian and Kashmiri work and is the shape most bridal borders are built from.",
      "Names, initials and small portraits sit inside these forms rather than beside them — worked into the jaali so they are found rather than announced.",
    ],
  },
  {
    src: "assets/festive-red.jpg", pos: "50% 45%", cat: "Eid", date: "March 2026", read: "3 min",
    title: "Chaand Raat, and drawing through the night",
    lede: "The one night of the year the studio works until the morning.",
    body: [
      "Chaand Raat sittings are quick by necessity — a family arrives, everyone is drawn, and the stain has until sunrise to deepen.",
      "Designs are lighter than bridal work: trailing vines up one finger, an open mandala on the back of the hand, borders that finish at the wrist.",
      "Book the week before. The night itself is always full.",
    ],
  },
];

function BlogHeader({ air }) {
  const iconBtn = { display: "grid", placeItems: "center", minWidth: "44px", minHeight: "44px", background: "transparent", border: "none", color: "var(--ivory-50)", cursor: "pointer", textDecoration: "none" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `18px ${GUTTER}`, background: air.head, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: `1px solid ${air.rule}` }}>
      <a href="Henna Art by Masu - Home.html" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "12px", padding: "10px 0", color: "var(--ivory-50)", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase", textDecoration: "none" }}>
        <Icon name="arrowLeft" size={18} /><span className="menu-word">Back</span>
      </a>
      <a href="Henna Art by Masu - Home.html" aria-label="Henna Art by Masu — home" style={{ justifySelf: "center", display: "block" }}>
        <img src="assets/logo-mark.png" alt="Henna Art by Masu" className="brand-mark" style={{ display: "block", objectFit: "contain", filter: "brightness(1.85) saturate(.72)" }} />
      </a>
      <a href="Enquiry.html" style={{ ...iconBtn, justifySelf: "end", padding: "10px 8px", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}>Enquire</a>
    </header>
  );
}

function Meta({ post, air, ordinal, showOrdinal }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>
      {showOrdinal ? <span style={{ fontFamily: "var(--font-display)", color: "var(--gold-500)", letterSpacing: ".08em" }}>{ordinal}</span> : null}
      <span style={{ color: air.meta }}>{post.cat}</span>
      <span>{post.date}</span>
      <span>{post.read} read</span>
    </div>
  );
}

function Post({ post, open, onToggle, id, mode, air, type, ordinal }) {
  const plate = mode === "plate";
  const index = mode === "index";
  const img = index && !open ? null : (
    <img src={post.src} alt={post.title} loading="lazy"
      style={{ width: "100%", height: plate ? "clamp(260px,32vw,440px)" : index ? "clamp(180px,20vw,240px)" : "clamp(200px,22vw,280px)", objectFit: "cover", objectPosition: post.pos, filter: air.grade }} />
  );
  return (
    <article className={`post post-${mode}`} style={{ borderTop: `1px solid ${air.rule}`, padding: `${type.pad} 0` }}>
      {plate || index ? null : img}
      <div style={{ display: "flex", flexDirection: "column", gap: index ? "14px" : "18px" }}>
        <Meta post={post} air={air} ordinal={ordinal} showOrdinal={index} />
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: type.title, lineHeight: 1.12, letterSpacing: type.titleTrack, textTransform: type.titleCase, color: "var(--ivory-50)", margin: 0, maxWidth: "20ch" }}>{post.title}</h2>
        {plate ? img : null}
        <p style={{ font: type.lede, color: "var(--text-body)", maxWidth: type.measure, margin: 0 }}>{post.lede}</p>
        <div id={id} style={{ display: open ? "flex" : "none", flexDirection: "column", gap: "14px" }}>
          {index ? img : null}
          {post.body.map((para, i) => <p key={i} style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: type.measure, margin: 0 }}>{para}</p>)}
        </div>
        <button onClick={onToggle} aria-expanded={open} aria-controls={id}
          style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", background: "none", border: "none", padding: "12px 0", cursor: "pointer", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--gold-500)" }}>
          {open ? "Close" : "Read the piece"}<Icon name={open ? "minus" : "arrowRight"} size={16} />
        </button>
      </div>
    </article>
  );
}

function BlogPage() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [open, setOpen] = React.useState(0);
  const air = ATMOSPHERE[t.atmosphere] || ATMOSPHERE.ink;
  const type = VOICE[t.voice] || VOICE.editorial;
  React.useEffect(() => { document.body.style.background = air.page; }, [air.page]);
  return (
    <React.Fragment>
      <BlogHeader air={air} />
      <main style={{ background: air.page, backgroundImage: air.texture }}>
        <section style={{ padding: `clamp(56px,7vw,110px) ${GUTTER} ${SECTION_Y}` }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: type.gap }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <Eyebrow rule>The journal</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: type.h1, lineHeight: t.voice === "intimate" ? 1.1 : 1, letterSpacing: type.h1Track, textTransform: type.h1Case, color: "var(--ivory-50)", margin: 0, maxWidth: type.h1Measure }}>Notes from the studio</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "48ch", margin: 0 }}>Aftercare, timings and the language of the designs — written down so you know what to expect before your date.</p>
            </div>
            <div>
              {POSTS.map((p, i) => (
                <Post key={p.title} id={`post-${i}`} post={p} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)}
                  mode={t.composition} air={air} type={type} ordinal={`0${i + 1}`} />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px", alignItems: "flex-start", borderTop: `1px solid ${air.rule}`, paddingTop: "clamp(32px,4vw,56px)" }}>
              <Ornament width="180px" />
              <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "46ch", margin: 0 }}>Have a question that is not answered here? Send it with your date and we will reply.</p>
              <div className="cta-row">
                <Button variant="primary" size="lg" href="Enquiry.html">Enquire about your date</Button>
                <Button variant="outline" size="lg" href="Pricing.html">View price list</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <TweaksPanel>
        <TweakSection label="Composition" />
        <TweakRadio label="Journal layout" value={t.composition} options={["ledger", "plate", "index"]} onChange={(v) => setTweak("composition", v)} />
        <TweakSection label="Atmosphere" />
        <TweakRadio label="Surface" value={t.atmosphere} options={["ink", "midnight", "ember"]} onChange={(v) => setTweak("atmosphere", v)} />
        <TweakSection label="Voice" />
        <TweakRadio label="Editorial register" value={t.voice} options={["intimate", "editorial", "grand"]} onChange={(v) => setTweak("voice", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

const hostEl = document.getElementById("app");
let mountEl = hostEl.__mount;
if (!mountEl || !mountEl.isConnected) { hostEl.textContent = ""; mountEl = document.createElement("div"); hostEl.appendChild(mountEl); hostEl.__mount = mountEl; }
(mountEl.__root || (mountEl.__root = ReactDOM.createRoot(mountEl))).render(<BlogPage />);
