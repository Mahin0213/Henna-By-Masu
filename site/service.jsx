const { Button, Eyebrow, Icon, Ornament } = window.HennaByMasuDesignSystem_0b7f2a;
const { Footer, GUTTER, SECTION_Y, LINEN } = window;
const P = window.PAGE;

function ServiceHeader() {
  const btn = { display: "grid", placeItems: "center", minWidth: "44px", minHeight: "44px", background: "transparent", border: "none", color: "var(--ivory-50)", cursor: "pointer", textDecoration: "none" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `18px ${GUTTER}`, background: "rgba(11,12,10,.86)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid var(--border-hairline)" }}>
      <a href="index.html" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "12px", padding: "10px 0", color: "var(--ivory-50)", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase", textDecoration: "none" }}>
        <Icon name="arrowLeft" size={18} /><span className="menu-word">Home</span>
      </a>
      <a href="index.html" aria-label="Henna Art by Masu — home" style={{ justifySelf: "center", display: "block" }}>
        <img src="assets/logo-mark.png" alt="Henna Art by Masu" className="brand-mark" style={{ display: "block", objectFit: "contain", filter: "brightness(1.85) saturate(.72)" }} />
      </a>
      <a href="enquiry.html" style={{ ...btn, justifySelf: "end", padding: "10px 8px", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}>Enquire</a>
    </header>
  );
}

function ServicePage() {
  return (
    <React.Fragment>
      <ServiceHeader />
      <main>
        <section style={{ padding: `clamp(48px,6vw,96px) ${GUTTER} ${SECTION_Y}` }}>
          <div className="city-grid" style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <Eyebrow rule>{P.eyebrow}</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.25rem,5.2vw,4.25rem)", lineHeight: 1.02, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0, maxWidth: "15ch" }}>{P.h1}</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "48ch", margin: 0 }}>{P.lede}</p>
              {P.body.map((para, i) => <p key={i} style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "52ch", margin: 0 }}>{para}</p>)}
              <p style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>{P.note}</p>
              <div className="cta-row">
                <Button variant="primary" size="lg" href="enquiry.html">Enquire about your date</Button>
                <Button variant="outline" size="lg" href="pricing.html">View price list</Button>
              </div>
            </div>
            <img src={P.img} alt={P.alt} style={{ width: "100%", height: "clamp(320px,42vw,560px)", objectFit: "cover", objectPosition: P.pos }} />
          </div>
        </section>

        <section style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page-alt)", backgroundImage: LINEN, borderTop: "1px solid var(--border-hairline)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            <Eyebrow rule>{P.gridLabel}</Eyebrow>
            <div className="grid-3">
              {P.points.map((pt) => <div key={pt.h}><h2 className="ch">{pt.h}</h2><p className="cp">{pt.p}</p></div>)}
            </div>
            <div className="cta-row"><Button variant="outline" size="lg" href="index.html#work">See the gallery</Button></div>
          </div>
        </section>

        <section style={{ padding: `${SECTION_Y} ${GUTTER}` }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
            <Ornament width="180px" />
            <Eyebrow rule>Questions</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {P.faq.map((f) => (
                <div key={f.q} style={{ borderTop: "1px solid var(--border-hairline)", padding: "24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h2 className="ch" style={{ margin: 0 }}>{f.q}</h2>
                  <p className="cp" style={{ maxWidth: "56ch" }}>{f.a}</p>
                </div>
              ))}
            </div>
            <div className="city-links">
              {P.links.map(([label, href]) => (
                <a key={href} href={href} style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--gold-500)", textDecoration: "none" }}>{label}</a>
              ))}
            </div>
            <div className="cta-row"><Button variant="primary" size="lg" href="enquiry.html">Enquire now</Button></div>
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
(mountEl.__root || (mountEl.__root = ReactDOM.createRoot(mountEl))).render(<ServicePage />);
