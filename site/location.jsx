const { Button, Eyebrow, Icon, Ornament } = window.HennaByMasuDesignSystem_0b7f2a;
const { Footer, GUTTER, SECTION_Y, LINEN } = window;
const C = window.CITY;

function CityHeader() {
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

const OTHERS = [
  ["Birmingham", "henna-birmingham.html"], ["Coventry", "henna-coventry.html"], ["Wolverhampton", "henna-wolverhampton.html"],
  ["Solihull", "henna-solihull.html"], ["Luton", "henna-luton.html"], ["Northampton", "henna-northampton.html"], ["London", "henna-london.html"],
];

function CityPage() {
  return (
    <React.Fragment>
      <CityHeader />
      <main>
        <section style={{ padding: `clamp(48px,6vw,96px) ${GUTTER} ${SECTION_Y}` }}>
          <div className="city-grid" style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <Eyebrow rule>Henna in {C.name}</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.25rem,5.2vw,4.25rem)", lineHeight: 1.02, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0, maxWidth: "14ch" }}>{C.h1}</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "48ch", margin: 0 }}>{C.lede}</p>
              <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "52ch", margin: 0 }}>{C.body}</p>
              <p style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>{C.travel}</p>
              <div className="cta-row">
                <Button variant="primary" size="lg" href="enquiry.html">Enquire about your date</Button>
                <Button variant="outline" size="lg" href="pricing.html">View price list</Button>
              </div>
            </div>
            <img src={C.img} alt={`Henna art for clients in ${C.name}`} style={{ width: "100%", height: "clamp(320px,42vw,560px)", objectFit: "cover", objectPosition: C.pos }} />
          </div>
        </section>

        <section style={{ padding: `${SECTION_Y} ${GUTTER}`, background: "var(--surface-page-alt)", backgroundImage: LINEN, borderTop: "1px solid var(--border-hairline)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            <Eyebrow rule>What we bring to {C.name}</Eyebrow>
            <div className="grid-3">
              <div><h2 className="ch">Bridal mehndi</h2><p className="cp">Full hands, feet and forearms drawn freehand across an unhurried session, with your own motifs worked in. From £50.</p></div>
              <div><h2 className="ch">Party &amp; guest henna</h2><p className="cp">A table for your guests at engagements, birthdays and Eid gatherings. Quick, complete designs, still drawn by hand.</p></div>
              <div><h2 className="ch">Simple small designs</h2><p className="cp">Fine single-hand linework for an evening out — the easy, understated designs, from £10.</p></div>
            </div>
            <div className="cta-row"><Button variant="outline" size="lg" href="index.html#work">See the gallery</Button></div>
          </div>
        </section>

        <section style={{ padding: `${SECTION_Y} ${GUTTER}` }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
            <Ornament width="180px" />
            <Eyebrow rule>Also travelling to</Eyebrow>
            <div className="city-links">
              {OTHERS.filter(([n]) => n !== C.name).map(([n, href]) => (
                <a key={n} href={href} style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--gold-500)", textDecoration: "none" }}>Henna in {n}</a>
              ))}
            </div>
            <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "46ch", margin: 0 }}>Studio at 34 Beckingham Rd, Leicester LE2 1HB. Send your date and postcode and we will confirm travel with the quote.</p>
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
(mountEl.__root || (mountEl.__root = ReactDOM.createRoot(mountEl))).render(<CityPage />);
