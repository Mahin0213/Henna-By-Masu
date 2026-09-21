const { Button, Eyebrow, Icon, Ornament } = window.HennaByMasuDesignSystem_0b7f2a;
const { Footer, GUTTER, SECTION_Y } = window;
const A = window.ARTICLE;

const MEASURE = "62ch";
const label = { font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" };
const para = { font: "var(--type-body)", color: "var(--text-body)", maxWidth: MEASURE, margin: 0 };
const h2 = { fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.375rem,2.4vw,1.875rem)", lineHeight: 1.15, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 };
const h3 = { fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.0625rem,1.6vw,1.25rem)", lineHeight: 1.2, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 };

function ArticleHeader() {
  const iconBtn = { display: "grid", placeItems: "center", minWidth: "44px", minHeight: "44px", background: "transparent", border: "none", color: "var(--ivory-50)", cursor: "pointer", textDecoration: "none" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `18px ${GUTTER}`, background: "rgba(11,12,10,.86)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid var(--border-hairline)" }}>
      <a href="journal.html" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "12px", padding: "10px 0", color: "var(--ivory-50)", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase", textDecoration: "none" }}>
        <Icon name="arrowLeft" size={18} /><span className="menu-word">Journal</span>
      </a>
      <a href="index.html" aria-label="Henna Art by Masu — home" style={{ justifySelf: "center", display: "block" }}>
        <img src="assets/logo-mark.png" alt="Henna Art by Masu" className="brand-mark" style={{ display: "block", objectFit: "contain", filter: "brightness(1.85) saturate(.72)" }} />
      </a>
      <a href="enquiry.html" style={{ ...iconBtn, justifySelf: "end", padding: "10px 8px", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}>Enquire</a>
    </header>
  );
}

function Breadcrumb() {
  const sep = <span aria-hidden="true" style={{ color: "var(--text-muted)" }}>/</span>;
  const link = { ...label, color: "var(--gold-500)", textDecoration: "none" };
  return (
    <nav aria-label="Breadcrumb">
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
        <li><a href="index.html" style={link}>Home</a></li>
        <li>{sep}</li>
        <li><a href="journal.html" style={link}>Journal</a></li>
        <li>{sep}</li>
        <li aria-current="page" style={label}>{A.crumb}</li>
      </ol>
    </nav>
  );
}

function ArticlePage() {
  return (
    <React.Fragment>
      <ArticleHeader />
      <main>
        <article style={{ padding: `clamp(48px,6vw,96px) ${GUTTER} ${SECTION_Y}` }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,64px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Breadcrumb />
              <Eyebrow rule>{A.cat}</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.25rem,5.2vw,4rem)", lineHeight: 1.02, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 }}>{A.title}</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: MEASURE, margin: 0 }}>{A.lede}</p>
              <p style={{ ...label, margin: 0 }}>{A.read} read · By Masuma, Henna Art by Masu</p>
            </div>

            <img src={A.img} alt={A.alt} style={{ width: "100%", height: "clamp(260px,40vw,480px)", objectFit: "cover", objectPosition: A.pos }} />

            {A.sections.map((s, i) => (
              <section key={i} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {s.h ? <h2 style={h2}>{s.h}</h2> : null}
                {s.p.map((t, j) => <p key={j} style={para}>{t}</p>)}
              </section>
            ))}

            <section style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h2 style={{ ...h2, marginBottom: "16px" }}>Questions</h2>
              {A.faq.map((f) => (
                <div key={f.q} style={{ borderTop: "1px solid var(--border-hairline)", padding: "22px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={h3}>{f.q}</h3>
                  <p style={para}>{f.a}</p>
                </div>
              ))}
            </section>

            <section style={{ display: "flex", flexDirection: "column", gap: "20px", borderTop: "1px solid var(--border-hairline)", paddingTop: "clamp(32px,4vw,48px)" }}>
              <Eyebrow rule>Keep reading</Eyebrow>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px 32px" }}>
                {A.related.map(([text, href]) => (
                  <a key={href} href={href} style={{ ...label, color: "var(--gold-500)", textDecoration: "none" }}>{text}</a>
                ))}
              </div>
            </section>

            <div style={{ display: "flex", flexDirection: "column", gap: "26px", alignItems: "flex-start" }}>
              <Ornament width="180px" />
              <p style={{ ...para, maxWidth: "46ch" }}>{A.cta}</p>
              <div className="cta-row">
                <Button variant="primary" size="lg" href="enquiry.html">Enquire about your date</Button>
                <Button variant="outline" size="lg" href="pricing.html">View price list</Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </React.Fragment>
  );
}

const hostEl = document.getElementById("app");
let mountEl = hostEl.__mount;
if (!mountEl || !mountEl.isConnected) { hostEl.textContent = ""; mountEl = document.createElement("div"); hostEl.appendChild(mountEl); hostEl.__mount = mountEl; }
(mountEl.__root || (mountEl.__root = ReactDOM.createRoot(mountEl))).render(<ArticlePage />);
