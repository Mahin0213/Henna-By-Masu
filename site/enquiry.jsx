const { Button, Eyebrow, Icon, Ornament } = window.HennaByMasuDesignSystem_0b7f2a;
const { Footer, GUTTER } = window;

const labelStyle = { font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" };

function FormField({ label, name, type = "text", required = false, placeholder, options, rows = 3, hint, style }) {
  const fieldId = `field-${name}`;
  const shared = { id: fieldId, name, required, placeholder, className: "field-control" };
  return (
    <label htmlFor={fieldId} style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      <span style={labelStyle}>{label}{required ? " *" : ""}</span>
      {type === "select" ? (
        <span style={{ position: "relative", display: "block" }}>
          <select {...shared} className="field-control field-select" defaultValue={options[0]}>
            {options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <Icon name="chevronDown" size={16} color="var(--warm-gray-500)" style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
        </span>
      ) : type === "textarea" ? (
        <textarea {...shared} rows={rows} />
      ) : (
        <input {...shared} type={type} />
      )}
      {hint ? <span style={{ ...labelStyle, letterSpacing: "0.12em", color: "var(--warm-gray-600)" }}>{hint}</span> : null}
    </label>
  );
}

function EnquiryHeader() {
  const iconBtn = { display: "grid", placeItems: "center", minWidth: "44px", minHeight: "44px", background: "transparent", border: "none", color: "var(--ivory-50)", cursor: "pointer", textDecoration: "none" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `18px ${GUTTER}`, background: "rgba(11,12,10,.86)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid var(--border-hairline)" }}>
      <a href="index.html" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "12px", padding: "10px 0", color: "var(--ivory-50)", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase", textDecoration: "none" }}>
        <Icon name="arrowLeft" size={18} /><span className="menu-word">Back</span>
      </a>
      <a href="index.html" aria-label="Henna Art by Masu — home" style={{ justifySelf: "center", display: "block" }}>
        <img src="assets/logo-mark.png" alt="Henna Art by Masu" className="brand-mark" style={{ display: "block", objectFit: "contain", filter: "brightness(1.85) saturate(.72)" }} />
      </a>
      <a href="https://www.instagram.com/masuma_leicester?igsh=bzFpN3p0a2JtMDk3" target="_blank" rel="noopener" aria-label="Instagram" style={{ ...iconBtn, justifySelf: "end" }}><Icon name="instagram" size={18} /></a>
    </header>
  );
}

function EnquiryForm() {
  return (
    <div>
      <div id="enquiry-idle">
        <form id="enquiry-form" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="field-grid">
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
            <FormField label="Full name" name="name" required placeholder="Your name" />
            <FormField label="Phone number" name="phone" type="tel" required placeholder="Including country code" />
            <FormField label="Email" name="email" type="email" required placeholder="you@email.com" />
            <FormField label="Occasion" name="occasion" type="select" options={["Bridal mehndi", "Semi bridal", "Eid mehndi", "Private celebration", "Event or guest henna", "Something else"]} />
            <FormField label="Address" name="address" required placeholder="Where the henna will be done" style={{ gridColumn: "1 / -1" }} />
            <FormField label="Date of the celebration" name="date" type="date" style={{ gridColumn: "1 / -1" }} />
            <FormField label="Anything else" name="notes" type="textarea" rows={3} placeholder="Number of people, timings, design ideas" hint="Optional" style={{ gridColumn: "1 / -1" }} />
          </div>
          <div className="cta-row">
            <Button id="enquiry-submit" variant="primary" size="lg" type="submit">Send enquiry</Button>
            <Button className="enquiry-mail-link" variant="outline" size="lg" href="mailto:Masuma0205@icloud.com?subject=Henna%20enquiry">Send by email</Button>
          </div>
          <p id="enquiry-status" aria-live="polite" style={{ ...labelStyle, margin: 0 }}>We reply within two days</p>
        </form>
      </div>

      <div id="enquiry-sent" hidden style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-start", paddingTop: "24px" }}>
        <Ornament width="180px" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.2, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 }}>Thank you — your enquiry is with us</h2>
        <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "44ch", margin: 0 }}>It has been sent to the studio and we will reply with availability and a proposal. If you would like to add anything in the meantime, message us directly.</p>
        <div className="cta-row">
          <Button className="enquiry-wa-link" variant="outline" size="lg" href="https://wa.me/447388905164">Message on WhatsApp</Button>
        </div>
        <button id="enquiry-start-again" type="button" style={{ background: "none", border: "none", padding: "12px 0", cursor: "pointer", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>Start again</button>
      </div>

      <div id="enquiry-failed" hidden style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start", paddingTop: "24px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.6vw,2rem)", lineHeight: 1.2, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 }}>We could not send that from here</h2>
        <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "44ch", margin: 0 }}>Your details are still filled in. Send them straight through on WhatsApp or by email instead and we will pick it up the same way.</p>
        <div className="cta-row">
          <Button className="enquiry-wa-link" variant="primary" size="lg" href="https://wa.me/447388905164">Send on WhatsApp</Button>
          <Button className="enquiry-mail-link" variant="outline" size="lg" href="mailto:Masuma0205@icloud.com">Send by email</Button>
        </div>
        <button id="enquiry-back-to-form" type="button" style={{ background: "none", border: "none", padding: "12px 0", cursor: "pointer", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>Back to the form</button>
        <p id="enquiry-error" style={{ font: "var(--type-label)", fontSize: "10px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--warm-gray-500)", margin: 0 }} />
      </div>
    </div>
  );
}

function EnquiryPage() {
  return (
    <React.Fragment>
      <EnquiryHeader />
      <main>
        <section style={{ padding: `clamp(56px,7vw,110px) ${GUTTER} clamp(80px,10vw,140px)` }}>
          <div className="enquiry-split" style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <Eyebrow rule>Enquire</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.5rem,5.6vw,4.5rem)", lineHeight: 1, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0, maxWidth: "12ch" }}>Tell us about your date.</h1>
              <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "44ch", margin: 0 }}>Leave your details and we will come back with availability and a proposal. Everything you write here is sent straight to the studio inbox.</p>
              <div style={{ marginTop: "8px", maxWidth: "460px" }}>
                <img src="assets/detail-fresh-cone.jpg" alt="Fine henna linework drawn with a fresh cone" style={{ width: "100%", height: "clamp(240px,32vw,420px)", objectFit: "cover", objectPosition: "50% 40%" }} />
              </div>
            </div>
            <div><EnquiryForm /></div>
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
(mountEl.__root || (mountEl.__root = ReactDOM.createRoot(mountEl))).render(<EnquiryPage />);
