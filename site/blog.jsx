const { Button, Eyebrow, Icon, Ornament } = window.HennaByMasuDesignSystem_0b7f2a;
const { Footer, GUTTER, SECTION_Y } = window;

const LINEN_WASH = "repeating-linear-gradient(135deg,rgba(247,241,232,.016) 0 2px,transparent 2px 5px)";

const AIR = { page: "var(--ink-900)", texture: "none", rule: "var(--border-hairline)", head: "rgba(11,12,10,.86)", grade: "none", meta: "var(--accent-alt)" };
const TYPE = { h1: "clamp(2.5rem,6vw,5rem)", h1Case: "uppercase", h1Track: ".02em", h1Measure: "12ch", title: "clamp(1.5rem,2.8vw,2.125rem)", titleCase: "uppercase", titleTrack: ".03em", lede: "var(--type-body-lg)", measure: "56ch", gap: "clamp(40px,5vw,72px)", pad: "clamp(32px,4vw,56px)" };

// Four of these have their own page now; the journal is the index to them,
// so their full text lives there, not here, and is not duplicated on this URL.
const POSTS = [
  {
    src: "assets/modern-diamond.jpg", pos: "50% 45%", cat: "Safety", date: "August 2026", read: "4 min",
    title: "Why we never use black henna", href: "black-henna.html",
    lede: "If it stains black in an hour, it is not henna. What black henna is, why it burns, and how to spot it.",
  },
  {
    src: "assets/detail-fresh-cone.jpg", pos: "50% 40%", cat: "Aftercare", date: "August 2026", read: "5 min",
    title: "Henna aftercare: how to get a deeper stain", href: "henna-aftercare.html",
    lede: "The colour is decided in the twelve hours after the cone leaves your hand — and how long it lasts after that.",
  },
  {
    src: "assets/bridal-veil-portrait.jpg", pos: "50% 32%", cat: "Bridal", date: "July 2026", read: "5 min",
    title: "When to book your bridal mehndi", href: "booking-bridal-mehndi.html",
    lede: "Three months is comfortable. Peak season asks for more. Which day to have it, and how long it takes.",
  },
  {
    src: "assets/bridal-mangalsutra.jpg", pos: "50% 55%", cat: "Design", date: "June 2026", read: "5 min",
    title: "Mehndi motifs and what they mean", href: "mehndi-motifs.html",
    lede: "Jaali, mor, paisley — what the language of a bridal design actually says.",
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
    link: ["Book Eid mehndi", "eid-mehndi.html"],
  },
];

function BlogHeader() {
  const iconBtn = { display: "grid", placeItems: "center", minWidth: "44px", minHeight: "44px", background: "transparent", border: "none", color: "var(--ivory-50)", cursor: "pointer", textDecoration: "none" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `18px ${GUTTER}`, background: AIR.head, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: `1px solid ${AIR.rule}` }}>
      <a href="index.html" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "12px", padding: "10px 0", color: "var(--ivory-50)", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase", textDecoration: "none" }}>
        <Icon name="arrowLeft" size={18} /><span className="menu-word">Back</span>
      </a>
      <a href="index.html" aria-label="Henna Art by Masu — home" style={{ justifySelf: "center", display: "block" }}>
        <img src="assets/logo-mark.png" alt="Henna Art by Masu" className="brand-mark" style={{ display: "block", objectFit: "contain", filter: "brightness(1.85) saturate(.72)" }} />
      </a>
      <a href="enquiry.html" style={{ ...iconBtn, justifySelf: "end", padding: "10px 8px", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}>Enquire</a>
    </header>
  );
}

function Meta({ post, ordinal }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>
      <span style={{ color: AIR.meta }}>{post.cat}</span>
      <span>{post.date}</span>
      <span>{post.read} read</span>
    </div>
  );
}

function Post({ post, id, ordinal }) {
  const titleStyle = { fontFamily: "var(--font-display)", fontWeight: 400, fontSize: TYPE.title, lineHeight: 1.12, letterSpacing: TYPE.titleTrack, textTransform: TYPE.titleCase, color: "var(--ivory-50)", margin: 0, maxWidth: "20ch" };
  const action = { alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", background: "none", border: "none", padding: "12px 0", cursor: "pointer", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--gold-500)", textDecoration: "none" };
  const img = (
    <img src={post.src} alt={post.title} loading="lazy"
      style={{ width: "100%", height: "clamp(200px,22vw,280px)", objectFit: "cover", objectPosition: post.pos, filter: AIR.grade }} />
  );
  return (
    <article className="post post-ledger" style={{ borderTop: `1px solid ${AIR.rule}`, padding: `${TYPE.pad} 0` }}>
      {post.href ? <a href={post.href} tabIndex={-1} aria-hidden="true">{img}</a> : img}
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <Meta post={post} ordinal={ordinal} />
        <h2 style={titleStyle}>{post.href ? <a href={post.href} style={{ color: "inherit", textDecoration: "none" }}>{post.title}</a> : post.title}</h2>
        <p style={{ font: TYPE.lede, color: "var(--text-body)", maxWidth: TYPE.measure, margin: 0 }}>{post.lede}</p>
        {post.href ? (
          <a href={post.href} style={action}>Read the piece<Icon name="arrowRight" size={16} /></a>
        ) : (
          <React.Fragment>
            <div id={id} className="post-body" hidden>
              {post.body.map((para, i) => <p key={i} style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: TYPE.measure, margin: 0 }}>{para}</p>)}
              {post.link ? <a href={post.link[1]} style={{ ...action, padding: 0 }}>{post.link[0]}<Icon name="arrowRight" size={16} /></a> : null}
            </div>
            <button type="button" className="post-toggle" aria-expanded="false" aria-controls={id} style={action}>
              <span className="post-toggle-label">Read the piece</span>
              <span className="post-toggle-open"><Icon name="arrowRight" size={16} /></span>
              <span className="post-toggle-close" hidden><Icon name="minus" size={16} /></span>
            </button>
          </React.Fragment>
        )}
      </div>
    </article>
  );
}

function BlogPage() {
  return (
    <React.Fragment>
      <BlogHeader />
      <main style={{ background: AIR.page, backgroundImage: AIR.texture }}>
        <section style={{ padding: `clamp(56px,7vw,110px) ${GUTTER} ${SECTION_Y}` }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: TYPE.gap }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <Eyebrow rule>The journal</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: TYPE.h1, lineHeight: 1, letterSpacing: TYPE.h1Track, textTransform: TYPE.h1Case, color: "var(--ivory-50)", margin: 0, maxWidth: TYPE.h1Measure }}>Henna aftercare and design notes</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "48ch", margin: 0 }}>Aftercare, timings and the language of the designs — written down so you know what to expect before your Leicester henna appointment.</p>
            </div>
            <div>
              {POSTS.map((p, i) => (
                <Post key={p.title} id={`post-${i}`} post={p} ordinal={`0${i + 1}`}  />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px", alignItems: "flex-start", borderTop: `1px solid ${AIR.rule}`, paddingTop: "clamp(32px,4vw,56px)" }}>
              <Ornament width="180px" />
              <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "46ch", margin: 0 }}>Have a question that is not answered here? Send it with your date and we will reply.</p>
              <div className="cta-row">
                <Button variant="primary" size="lg" href="enquiry.html">Enquire about your date</Button>
                <Button variant="outline" size="lg" href="pricing.html">View price list</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

const hostEl = document.getElementById("app");
let mountEl = hostEl.__mount;
if (!mountEl || !mountEl.isConnected) { hostEl.textContent = ""; mountEl = document.createElement("div"); hostEl.appendChild(mountEl); hostEl.__mount = mountEl; }
(mountEl.__root || (mountEl.__root = ReactDOM.createRoot(mountEl))).render(<BlogPage />);
