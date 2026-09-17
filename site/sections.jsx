const DS = window.HennaByMasuDesignSystem_0b7f2a;
const { Button, Eyebrow, Icon, Ornament, SectionHeading, StyleCard, StepMarker, Quote, ImagePlate, GalleryTile } = DS;

const GUTTER = "clamp(20px,5vw,72px)";
const SECTION_Y = "clamp(80px,10vw,160px)";
const LINEN = "repeating-linear-gradient(135deg,rgba(247,241,232,.016) 0 2px,transparent 2px 5px)";

function Reveal({ children, delay = 0, as = "div", style }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  const [instant, setInstant] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const show = () => { if (document.hidden) setInstant(true); setSeen(true); };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.hidden) { setInstant(true); setSeen(true); return; }
    let done = false;
    const check = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) { done = true; show(); stop(); }
    };
    const onScroll = () => check();
    const stop = () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); clearInterval(poll); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const poll = setInterval(check, 300);
    check();
    return () => stop();
  }, []);
  const Tag = as;
  return <Tag ref={ref} style={{ opacity: seen ? 1 : 0, transform: seen ? "none" : "translateY(24px)", transition: instant ? "none" : `opacity 900ms var(--ease-out-soft) ${delay}ms,transform 900ms var(--ease-out-soft) ${delay}ms`, ...style }}>{children}</Tag>;
}

const GALLERY = [
  { src: "assets/bridal-veil-portrait.jpg", cat: "Bridal", title: "Red velvet veil, kundan ring", ratio: "4 / 5", pos: "50% 35%" },
  { src: "assets/bridal-temple-hands.jpg", cat: "Bridal", title: "Temple arch, lotus crown", span: 2, ratio: "16 / 11", pos: "50% 45%" },
  { src: "assets/detail-fresh-cone.jpg", cat: "Details", title: "Fresh cone, fine jaali", ratio: "4 / 5", pos: "50% 40%" },
  { src: "assets/modern-diamond.jpg", cat: "Modern", title: "Diamond panel, open ground", ratio: "4 / 5", pos: "50% 45%" },
  { src: "assets/bridal-portrait.jpg", cat: "Bridal", title: "Both hands, matched borders", ratio: "4 / 5", pos: "50% 40%" },
  { src: "assets/bridal-kalire-hands.jpg", cat: "Bridal", title: "Kalire, held out to the light", span: 2, ratio: "16 / 11", pos: "50% 38%" },
  { src: "assets/bridal-mangalsutra.jpg", cat: "Bridal", title: "Mangalsutra across two palms", ratio: "4 / 5", pos: "50% 55%" },
  { src: "assets/bridal-couple-blush.jpg", cat: "Bridal", title: "Blush nikah, hands together", ratio: "4 / 5", pos: "50% 50%" },
  { src: "assets/pair-navy.jpg", cat: "Modern", title: "Paisley trail on navy", span: 2, ratio: "16 / 11", pos: "50% 62%" },
  { src: "assets/festive-red.jpg", cat: "Festive", title: "Mandala back-hand, festive red", ratio: "4 / 5", pos: "50% 45%" },
  { video: "assets/hero-clip.mp4", src: "assets/detail-fresh-cone.jpg", cat: "Details", title: "The cone, in motion", ratio: "4 / 5", pos: "50% 40%" },
];

function Tile({ item, onOpen }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} aria-label={`${item.cat} — ${item.title}. Open larger view`}
      style={{ position: "relative", display: "block", padding: 0, border: "none", background: "none", cursor: "pointer", textAlign: "left", gridColumn: `span ${item.span || 1}`, width: "100%" }}>
      <div style={{ position: "relative", aspectRatio: item.ratio, overflow: "hidden", background: "var(--surface-card)" }}>
        {item.video ? (
          <video src={item.video} poster={item.src} muted loop playsInline autoPlay style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: item.pos, transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform 1400ms var(--ease-out-soft)" }} />
        ) : (
          <img src={item.src} alt={item.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: item.pos, transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform 1400ms var(--ease-out-soft)" }} />
        )}
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-tile)", pointerEvents: "none" }} />
      </div>
      <div style={{ position: "absolute", left: "24px", right: "24px", bottom: "22px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", opacity: hover ? 1 : 0.82, transition: "opacity 280ms var(--ease-editorial)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--accent-alt)" }}>{item.cat}</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--ivory-50)", letterSpacing: ".01em" }}>{item.title}</span>
        </div>
        <Icon name="arrowUpRight" size={18} color="var(--ivory-50)" style={{ opacity: hover ? 1 : 0, transition: "opacity 280ms var(--ease-editorial)" }} />
      </div>
    </button>
  );
}

function Lightbox({ items, index, onClose, onStep }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    if (ref.current) ref.current.focus();
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, onStep]);
  const touch = React.useRef(0);
  const item = items[index];
  const navBtn = { display: "grid", placeItems: "center", width: "48px", height: "48px", background: "transparent", border: "1px solid var(--border-hairline)", color: "var(--ivory-50)", cursor: "pointer" };
  return (
    <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={`${item.cat} — ${item.title}`}
      onTouchStart={(e) => { touch.current = e.changedTouches[0].clientX; }}
      onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 50) onStep(d < 0 ? 1 : -1); }}
      style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(7,8,6,.96)", display: "flex", flexDirection: "column", padding: `20px ${GUTTER} 28px`, boxSizing: "border-box", outline: "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <span style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--accent-alt)" }}>{item.cat}</span>
        <button onClick={onClose} aria-label="Close" style={{ ...navBtn, width: "44px", height: "44px" }}><Icon name="close" size={18} /></button>
      </div>
      <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(12px,3vw,40px)", padding: "24px 0" }}>
        <button onClick={() => onStep(-1)} aria-label="Previous" style={{ ...navBtn, flex: "none" }}><Icon name="arrowLeft" size={18} /></button>
        {item.video
          ? <video src={item.video} poster={item.src} controls autoPlay loop muted defaultMuted playsInline style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
          : <img src={item.src} alt={item.title} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />}
        <button onClick={() => onStep(1)} aria-label="Next" style={{ ...navBtn, flex: "none" }}><Icon name="arrowRight" size={18} /></button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", color: "var(--ivory-50)" }}>{item.title}</span>
        <span style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{index + 1} / {items.length}</span>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "clamp(32px,4vw,64px)", alignItems: "end" }} className="intro-grid">
        <Reveal style={{ gridColumn: "span 7", display: "flex", flexDirection: "column", gap: "40px" }}>
          <Eyebrow rule>The atelier</Eyebrow>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.6vw,3.25rem)", lineHeight: 1.24, letterSpacing: ".01em", color: "var(--ivory-50)", margin: 0, maxWidth: "18ch" }}>Every line is personal. Every design is drawn for the moment it becomes part of your story.</p>
          <Ornament width="180px" />
        </Reveal>
        <Reveal delay={120} style={{ gridColumn: "span 4", gridColumnStart: "9" }}>
          <ImagePlate src="assets/detail-fresh-cone.jpg" alt="Simple henna designs — fine jaali linework drawn with a fresh cone" ratio="3 / 4" caption="Freehand, cone-drawn — no stencils" />
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page-alt)", backgroundImage: LINEN }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <Reveal><SectionHeading eyebrow="What we do" title="Four ways to wear henna" lede="Every commission begins with the story you want your hands to tell." /></Reveal>
        <div className="grid-4" style={{ marginTop: "64px" }}>
          {[
            { index: "01", title: "Bridal mehndi", src: "assets/bridal-veil-portrait.jpg", description: "Full hands, feet and forearms drawn freehand across an unhurried session — temple arches, lotus and jaali worked around the motifs that matter to you.", detail: "Discover more" },
            { index: "02", title: "Private celebrations", src: "assets/modern-diamond.jpg", description: "Engagements, Eid and birthdays at home. Fine modern linework or dense traditional panels, whichever the evening calls for.", detail: "Discover more" },
            { index: "03", title: "Events & guest henna", src: "assets/festive-red.jpg", description: "A table for your guests, with quick, complete designs that still look drawn by hand — because every one of them is.", detail: "Discover more" },
            { index: "04", title: "Eid mehndi", src: "assets/detail-fresh-cone.jpg", description: "Chaand Raat sittings for the family, drawn the night before — fine jaali, trailing vines and a stain deepened in time for the morning.", detail: "Discover more" },
          ].map((s, i) => <Reveal key={s.title} delay={i * 110}><StyleCard {...s} href="enquiry.html" /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = React.useState("All");
  const [open, setOpen] = React.useState(-1);
  const cats = ["All", "Bridal", "Modern", "Festive", "Details"];
  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.cat === filter);
  return (
    <section id="work" style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <Reveal style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "32px" }}>
          <SectionHeading eyebrow="The gallery" title="Selected work" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            {cats.map((c) => (
              <button key={c} onClick={() => { setFilter(c); }} aria-pressed={filter === c}
                style={{ background: "none", border: "none", padding: "12px 0", cursor: "pointer", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: filter === c ? "var(--ivory-50)" : "var(--text-muted)", borderBottom: `1px solid ${filter === c ? "var(--border-ivory)" : "transparent"}`, transition: "color 280ms var(--ease-editorial),border-color 280ms var(--ease-editorial)" }}>{c}</button>
            ))}
          </div>
        </Reveal>
        <div className="grid-gallery" style={{ marginTop: "56px" }}>
          {items.map((item) => (
            <Reveal key={item.title} style={{ gridColumn: `span ${item.span || 1}` }}>
              <Tile item={item} onOpen={() => setOpen(items.indexOf(item))} />
            </Reveal>
          ))}
        </div>
      </div>
      {open >= 0 ? <Lightbox items={items} index={open} onClose={() => setOpen(-1)} onStep={(d) => setOpen((i) => (i + d + items.length) % items.length)} /> : null}
    </section>
  );
}

function BridalFeature() {
  return (
    <section id="bridal" style={{ background: "var(--surface-page-alt)", backgroundImage: LINEN, borderTop: "1px solid var(--border-hairline)" }}>
      <div className="split" style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <Reveal style={{ minHeight: "clamp(420px,64vw,760px)", position: "relative", overflow: "hidden" }}>
          <img src="assets/bridal-kalire-hands.jpg" alt="Bridal mehndi designs on both hands with gold kalire — Leicester bride" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 42%" }} />
        </Reveal>
        <Reveal delay={120} style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px", padding: `${SECTION_Y} ${GUTTER}` }}>
          <Eyebrow rule>For the bride</Eyebrow>
          <h2 style={{ font: "var(--type-section)", color: "var(--ivory-50)", letterSpacing: "var(--ls-display)", textTransform: "uppercase", margin: 0, maxWidth: "16ch" }}>A design as individual as your celebration.</h2>
          <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "46ch", margin: 0 }}>Your booking opens with a conversation — the ceremony, the outfit, the names and motifs you want carried into the work. A drawn proposal follows, revised once and never repeated for another bride.</p>
          <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "46ch", margin: 0 }}>On the day the session is calm and unhurried, with aftercare and a stain plan so the colour deepens the way it should.</p>
          <div><Button variant="primary" size="lg" href="enquiry.html">Begin your bridal enquiry</Button></div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <Reveal><SectionHeading eyebrow="The experience" title="How a booking unfolds" /></Reveal>
        <div className="grid-3" style={{ marginTop: "80px", gap: "clamp(40px,5vw,72px)" }}>
          <Reveal><StepMarker step="01" title="Consult" description="We talk through the date, the ceremony and the motifs that carry meaning for you." note="Studio or video" /></Reveal>
          <Reveal delay={110}><StepMarker step="02" title="Create" description="A drawn proposal for your hands and feet, refined until it is unmistakably yours." note="Ahead of the date" /></Reveal>
          <Reveal delay={220}><StepMarker step="03" title="Celebrate" description="An unhurried session at your home or venue, with aftercare and a stain plan." note="Travel across the Midlands" /></Reveal>
        </div>
      </div>
    </section>
  );
}

function Artist() {
  return (
    <section id="artist" style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page-alt)", backgroundImage: LINEN, borderTop: "1px solid var(--border-hairline)" }}>
      <div className="artist-grid" style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <Reveal>
          <img src="assets/artist-masuma.jpg" alt="Masuma, henna and mehndi artist in Leicester" style={{ width: "100%", height: "clamp(360px,46vw,620px)", objectFit: "cover", objectPosition: "50% 30%" }} />
        </Reveal>
        <Reveal delay={120} style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "28px" }}>
          <Eyebrow rule>The artist</Eyebrow>
          <h2 style={{ font: "var(--type-section)", color: "var(--ivory-50)", letterSpacing: "var(--ls-display)", textTransform: "uppercase", margin: 0, maxWidth: "12ch" }}>Masuma</h2>
          <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "44ch", margin: 0 }}>Every design on this page is drawn by Masuma, rated five stars as a henna artist in Leicester, working from her studio and travelling across the Midlands — Birmingham, Coventry, Nottingham, Derby — for the day itself.</p>
          <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "44ch", margin: 0 }}>Freehand, cone-drawn, one pair of hands from the first line to the last.</p>
          <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "46ch", margin: 0 }}>The studio sits five minutes from Leicester city centre, and most bookings are Leicester and Leicestershire — Highfields, Belgrave, Evington, Clarendon Park, Oadby and Wigston, out to Loughborough, Hinckley and Market Harborough. Birmingham, Coventry, Nottingham and Derby are a comfortable drive.</p>
          <Ornament width="180px" />
        </Reveal>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "How much is henna in Leicester?", a: "Simple henna designs start at £10, semi bridal at £30 and bridal mehndi at £50. Party and event work is quoted by the hours and guest numbers, agreed before the date." },
  { q: "Do you use black henna?", a: "Never. Black henna contains PPD, which burns and scars skin. We use organic henna cones mixed with lemon, sugar and essential oils only — the stain arrives orange and deepens to brown over two days." },
  { q: "Do you draw Arabic and Khaleeji designs?", a: "Yes. Arabic and Khaleeji styles, fine modern linework, and dense traditional Indian panels are all drawn freehand — no stencils, no transfers." },
  { q: "How far do you travel from Leicester?", a: "Across Leicester and Leicestershire as standard — Highfields, Belgrave, Evington, Clarendon Park, Oadby, Wigston, Loughborough, Hinckley and Market Harborough — and out to Birmingham, Coventry, Nottingham and Derby. Luton, Northampton and London are taken as full-day bookings." },
  { q: "How long does bridal mehndi take?", a: "Five to six hours for full hands, feet and forearms. Semi bridal is around two hours. Guest tables run for as long as the evening needs." },
  { q: "How far ahead should I book?", a: "Three months is comfortable for a bride. For a Saturday between May and October, or around Eid, three to six months is usual. Smaller designs can often be fitted in sooner." },
];

function Faq() {
  return (
    <section id="faq" style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page-alt)", backgroundImage: LINEN, borderTop: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <Reveal><SectionHeading eyebrow="Questions" title="Henna and mehndi in Leicester" /></Reveal>
        <div className="faq-grid" style={{ marginTop: "56px" }}>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 90} style={{ borderTop: "1px solid var(--border-hairline)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.125rem,1.8vw,1.375rem)", lineHeight: 1.2, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 }}>{f.q}</h3>
              <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "52ch", margin: 0 }}>{f.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { name: "A K Mahin", text: "I had an amazing experience with this mehndi artist! Her years of experience truly reflect in every detail of her work. The designs are incredibly unique, elegant, and far different from the usual patterns you see everywhere.", lead: true },
  { name: "Sabina Begum", text: "Very talented and punctual. The mehendi was applied with great care, and the final result exceeded my expectations. I will definitely book again!" },
  { name: "Abdullah Tahmid", text: "She is very exceptional in mehndi, best I have seen. Prices are very reasonable." },
  { name: "Atib", text: "Excellent Bridal Work. Excellent Efficiency in Mendhi work." },
];

function Stars() {
  return <span aria-label="Rated 5 out of 5" style={{ color: "var(--gold-500)", fontSize: "13px", letterSpacing: ".28em" }}>★★★★★</span>;
}

function Testimonial() {
  return (
    <section id="reviews" style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page)", borderTop: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <Reveal><SectionHeading eyebrow="In their words" title="Five stars on Google" lede="Every review below is from a client who booked through Google." /></Reveal>
        <div className="review-grid" style={{ marginTop: "56px" }}>
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 90} style={{ gridColumn: r.lead ? "1 / -1" : "auto", borderTop: "1px solid var(--border-hairline)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <Stars />
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: r.lead ? "clamp(1.25rem,2.4vw,1.75rem)" : "clamp(1.0625rem,1.6vw,1.25rem)", lineHeight: 1.45, color: "var(--ivory-50)", margin: 0, maxWidth: r.lead ? "48ch" : "40ch" }}>{`“${r.text}”`}</p>
              <span style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{r.name} · Google review</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="enquire" style={{ position: "relative", padding: `clamp(120px,14vw,200px) ${GUTTER}`, overflow: "hidden" }}>
      <img src="assets/pair-navy.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 60%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(7,8,6,.86) 0%,rgba(7,8,6,.72) 50%,rgba(7,8,6,.92) 100%)" }} />
      <Reveal style={{ position: "relative", maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "32px" }}>
        <Eyebrow rule align="center">By appointment</Eyebrow>
        <h2 style={{ font: "var(--type-section)", color: "var(--ivory-50)", letterSpacing: "var(--ls-display)", textTransform: "uppercase", margin: 0, maxWidth: "18ch" }}>Let’s create something unforgettable.</h2>
        <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "44ch", margin: 0 }}>Send the date and the celebration. We reply with availability and a proposal.</p>
        <p style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>34 Beckingham Rd, Leicester LE2 1HB · Travelling across the Midlands</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="enquiry.html">Enquire now</Button>
          <Button variant="outline" size="lg" href="#work">View the gallery</Button>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const link = { font: "var(--type-body)", fontSize: "var(--fs-small)", color: "var(--text-body)", textDecoration: "none" };
  return (
    <footer style={{ background: "var(--surface-page-alt)", backgroundImage: LINEN, borderTop: "1px solid var(--border-hairline)", padding: `clamp(64px,8vw,110px) ${GUTTER} 40px` }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "56px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          <img src="assets/logo-mark.png" alt="Henna Art by Masu" style={{ width: "104px", height: "104px", objectFit: "contain", filter: "brightness(1.35)" }} />
          <Ornament width="200px" />
        </div>
        <div className="footer-cols">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span className="col-title">Enquiries</span>
            <a href="mailto:Masuma0205@icloud.com" style={{ ...link, display: "flex", alignItems: "center", gap: "10px" }}><Icon name="mail" size={15} color="var(--warm-gray-500)" />Masuma0205@icloud.com</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span className="col-title">Elsewhere</span>
            <a href="https://www.instagram.com/masuma_leicester?igsh=bzFpN3p0a2JtMDk3" target="_blank" rel="noopener" style={{ ...link, display: "flex", alignItems: "center", gap: "10px" }}><Icon name="instagram" size={15} color="var(--warm-gray-500)" />Instagram</a>
            <a href="https://www.facebook.com/share/18sJRN3oUF/?mibextid=wwXIfr" target="_blank" rel="noopener" style={link}>Facebook</a>
            <a href="https://www.tiktok.com/@mehndi_leicester?_r=1&_t=ZN-98nEyYKTzGg" target="_blank" rel="noopener" style={link}>TikTok</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span className="col-title">Studio</span>
            <span style={{ font: "var(--type-body)", fontSize: "var(--fs-small)", color: "var(--text-body)", display: "flex", alignItems: "flex-start", gap: "10px" }}><Icon name="mapPin" size={15} color="var(--warm-gray-500)" />34 Beckingham Rd, Leicester LE2 1HB</span>
            <span style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>Leicester · Leicestershire · Birmingham · Coventry · Nottingham · Derby</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span className="col-title">Booking</span>
            <a href="pricing.html" style={link}>Price list</a>
            <a href="journal.html" style={link}>Journal</a>
            <a href="enquiry.html" style={link}>Request a date</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span className="col-title">Services</span>
            <a href="bridal-mehndi.html" style={link}>Bridal mehndi</a>
            <a href="bridal-henna.html" style={link}>Bridal henna designs</a>
            <a href="eid-mehndi.html" style={link}>Eid mehndi</a>
            <a href="event-mehndi.html" style={link}>Event mehndi</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span className="col-title">Areas</span>
            <a href="index.html" style={link}>Leicester</a>
            <a href="henna-birmingham.html" style={link}>Birmingham</a>
            <a href="henna-coventry.html" style={link}>Coventry</a>
            <a href="#faq" style={link}>All areas covered</a>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", paddingTop: "28px", borderTop: "1px solid var(--border-hairline)", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          <span>© 2026 Henna Art by Masu</span>
          <span>Bespoke henna artistry</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Reveal, Intro, Services, Gallery, BridalFeature, Process, Artist, Faq, Testimonial, Booking, Footer, GUTTER, SECTION_Y, LINEN });
