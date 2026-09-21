const { Button, Eyebrow, Icon } = window.HennaByMasuDesignSystem_0b7f2a;
const { Reveal, Intro, Services, Gallery, BridalFeature, Process, Artist, Prices, Faq, Testimonial, Booking, Footer, GUTTER } = window;

const NAV = [["The atelier", "#services"], ["Selected work", "#work"], ["For the bride", "#bridal"], ["The artist", "#artist"], ["Questions", "#faq"], ["Journal", "journal.html"], ["Price list", "pricing.html"], ["Enquire", "enquiry.html"]];

function Header() {
  const iconBtn = { display: "grid", placeItems: "center", minWidth: "44px", minHeight: "44px", background: "transparent", border: "none", color: "var(--ivory-50)", cursor: "pointer", textDecoration: "none" };
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `18px ${GUTTER}`, background: "transparent" }}>
      <button id="menu-btn" type="button" aria-expanded="false" aria-controls="menu-overlay" aria-label="Menu" style={{ ...iconBtn, justifySelf: "start", flexDirection: "row", display: "inline-flex", alignItems: "center", gap: "12px", padding: "10px 0", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}>
        <span id="menu-btn-open-icon" className="hero-ctl-icon"><Icon name="menu" size={18} /></span>
        <span id="menu-btn-close-icon" className="hero-ctl-icon" hidden><Icon name="close" size={18} /></span>
        <span className="menu-word" id="menu-btn-label">Menu</span>
      </button>
      <a href="#top" aria-label="Henna Art by Masu — home" style={{ justifySelf: "center", display: "block" }}>
        <img src="assets/logo-mark.png" alt="Henna Art by Masu" className="brand-mark" style={{ display: "block", objectFit: "contain", filter: "brightness(1.85) saturate(.72) drop-shadow(0 0 14px rgba(7,8,6,.85)) drop-shadow(0 0 4px rgba(7,8,6,.9))" }} />
      </a>
      <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "6px" }}>
        <a href="https://www.instagram.com/masuma_leicester?igsh=bzFpN3p0a2JtMDk3" target="_blank" rel="noopener" aria-label="Instagram" style={iconBtn}><Icon name="instagram" size={18} /></a>
        <a href="enquiry.html" style={{ ...iconBtn, padding: "10px 8px", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}><span className="enquire-word">Enquire</span><span className="enquire-icon" style={{ display: "none" }}><Icon name="mail" size={18} /></span></a>
      </div>
    </header>
  );
}

function MenuOverlay() {
  return (
    <div id="menu-overlay" className="menu-overlay" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden="true" hidden>
      <nav style={{ maxWidth: "var(--content-max)", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
        {NAV.map(([label, href]) => (
          <a key={href} href={href} tabIndex={-1}
            style={{ font: "var(--type-heading)", fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5.6vw,4rem)", lineHeight: 1.24, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--ivory-50)", textDecoration: "none", padding: "8px 0" }}>{label}</a>
        ))}
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: `clamp(96px,14vh,132px) ${GUTTER} clamp(96px,12vh,140px)`, boxSizing: "border-box", overflow: "hidden", background: "var(--ink-950)" }}>
      <video id="hero-video" data-src="assets/hero-clip.mp4" poster="assets/pair-navy.jpg" preload="none" muted loop playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(7,8,6,.72) 0%,rgba(7,8,6,.38) 40%,rgba(7,8,6,.9) 100%)" }} />
      <div style={{ position: "relative", maxWidth: "var(--content-max)", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,36px)" }}>
        <Eyebrow rule>Bespoke henna artistry</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(3rem,8vw,7.5rem)", lineHeight: .95, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0, maxWidth: "14ch" }}>Henna artist in Leicester</h1>
        <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.125rem,2vw,1.5rem)", lineHeight: 1.3, color: "var(--ivory-50)", margin: 0 }}>Henna, made memorable.</p>
        <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "50ch", margin: 0 }}>Bridal, festive and modern mehndi drawn freehand by Masuma in Leicester — every design made once, for one celebration.</p>
        <div className="cta-row" style={{ marginTop: "8px" }}>
          <Button variant="primary" size="lg" href="enquiry.html">Enquire about your date</Button>
          <Button variant="outline" size="lg" href="#work">Explore the work</Button>
        </div>
      </div>
      <div id="hero-video-controls" style={{ position: "absolute", right: GUTTER, bottom: "18px", gap: "8px" }}>
        <button id="hero-video-toggle" type="button" aria-label="Pause background video" style={{ display: "grid", placeItems: "center", width: "44px", height: "44px", background: "rgba(7,8,6,.45)", border: "1px solid var(--border-hairline)", color: "var(--ivory-50)", cursor: "pointer", padding: 0 }}>
          <span id="hero-ctl-pause" className="hero-ctl-icon" style={{ display: "flex", gap: "4px" }}><span style={{ width: "3px", height: "13px", background: "currentColor" }} /><span style={{ width: "3px", height: "13px", background: "currentColor" }} /></span>
          <span id="hero-ctl-play" className="hero-ctl-icon" hidden style={{ width: 0, height: 0, borderLeft: "10px solid currentColor", borderTop: "6px solid transparent", borderBottom: "6px solid transparent", marginLeft: "2px" }} />
        </button>
      </div>
      <div id="hero-progress-track" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "1px", background: "rgba(247,241,232,.16)" }}>
        <div id="hero-progress-bar" style={{ height: "100%", width: "0%", background: "var(--ivory-50)", transition: "width 240ms linear" }} />
      </div>
    </section>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <MenuOverlay />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Gallery />
        <BridalFeature />
        <Process />
        <Artist />
        <Prices />
        <Faq />
        <Testimonial />
        <Booking />
      </main>
      <Footer />
    </React.Fragment>
  );
}

const hostEl = document.getElementById("app");
let mountEl = hostEl.__mount;
if (!mountEl || !mountEl.isConnected) { hostEl.textContent = ""; mountEl = document.createElement("div"); hostEl.appendChild(mountEl); hostEl.__mount = mountEl; }
(mountEl.__root || (mountEl.__root = ReactDOM.createRoot(mountEl))).render(<App />);
