const { Button, Eyebrow, Icon, Ornament } = window.HennaByMasuDesignSystem_0b7f2a;
const { Footer, GUTTER, SECTION_Y } = window;

const TIERS = [
  { index: "01", title: "Simple henna", from: "£10", label: "From", copy: "Single-hand designs for a party or an evening out — fine linework, drawn in a short sitting.", meta: "Per person" },
  { index: "02", title: "Semi bridal", from: "£30", label: "From", copy: "Fuller hands for the mehndi guest of honour, the sister, the mother of the bride. Dense panels with open ground.", meta: "Per person" },
  { index: "03", title: "Bridal", from: "£50", label: "From", copy: "Hands, feet and forearms drawn freehand across an unhurried session, with your own motifs worked in.", meta: "Consultation included" },
];

function PricingHeader() {
  const iconBtn = { display: "grid", placeItems: "center", minWidth: "44px", minHeight: "44px", background: "transparent", border: "none", color: "var(--ivory-50)", cursor: "pointer", textDecoration: "none" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `18px ${GUTTER}`, background: "rgba(11,12,10,.86)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid var(--border-hairline)" }}>
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

function PriceRow({ tier }) {
  return (
    <div className="price-row">
      <span style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--accent-alt)" }}>{tier.index}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.5rem,2.6vw,2rem)", lineHeight: 1.15, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 }}>{tier.title}</h2>
        <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "46ch", margin: 0 }}>{tier.copy}</p>
        <span style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{tier.meta}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
        <span style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{tier.label}</span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.25rem,4.4vw,3.5rem)", lineHeight: 1, color: "var(--ivory-50)" }}>{tier.from}</span>
      </div>
    </div>
  );
}

function PricingPage() {
  return (
    <React.Fragment>
      <PricingHeader />
      <main>
        <section style={{ padding: `clamp(56px,7vw,110px) ${GUTTER} ${SECTION_Y}` }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(48px,6vw,88px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <Eyebrow rule>Entry level prices</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0, maxWidth: "12ch" }}>Price list</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "48ch", margin: 0 }}>Starting prices for each kind of booking. The final quote depends on the design, the coverage and the number of people, and is confirmed before the date.</p>
            </div>
            <div style={{ borderTop: "1px solid var(--border-hairline)" }}>
              {TIERS.map((t) => <PriceRow key={t.title} tier={t} />)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-start" }}>
              <Ornament width="180px" />
              <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "46ch", margin: 0 }}>Travel, guest tables and larger parties are quoted separately. Send your date and we will come back with a full price.</p>
              <div className="cta-row">
                <Button variant="primary" size="lg" href="enquiry.html">Enquire about your date</Button>
                <Button variant="outline" size="lg" href="index.html#work">View the gallery</Button>
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
(mountEl.__root || (mountEl.__root = ReactDOM.createRoot(mountEl))).render(<PricingPage />);
