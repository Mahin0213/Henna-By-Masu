const { Button, Eyebrow, Icon, Ornament, Field } = window.HennaByMasuDesignSystem_0b7f2a;
const { Footer, GUTTER } = window;

const WA_NUMBER = "447388905164";
const ENDPOINT = "send-enquiry.php";

function EnquiryHeader() {
  const iconBtn = { display: "grid", placeItems: "center", minWidth: "44px", minHeight: "44px", background: "transparent", border: "none", color: "var(--ivory-50)", cursor: "pointer", textDecoration: "none" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: `18px ${GUTTER}`, background: "rgba(11,12,10,.86)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid var(--border-hairline)" }}>
      <a href="Henna Art by Masu - Home.html" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: "12px", padding: "10px 0", color: "var(--ivory-50)", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase", textDecoration: "none" }}>
        <Icon name="arrowLeft" size={18} /><span className="menu-word">Back</span>
      </a>
      <a href="Henna Art by Masu - Home.html" aria-label="Henna Art by Masu — home" style={{ justifySelf: "center", display: "block" }}>
        <img src="assets/logo-mark.png" alt="Henna Art by Masu" className="brand-mark" style={{ display: "block", objectFit: "contain", filter: "brightness(1.85) saturate(.72)" }} />
      </a>
      <a href="https://www.instagram.com/masuma_leicester?igsh=bzFpN3p0a2JtMDk3" target="_blank" rel="noopener" aria-label="Instagram" style={{ ...iconBtn, justifySelf: "end" }}><Icon name="instagram" size={18} /></a>
    </header>
  );
}

const EMPTY = { name: "", phone: "", email: "", address: "", occasion: "Bridal mehndi", date: "", notes: "" };

function EnquiryForm() {
  const [v, setV] = React.useState(EMPTY);
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState("");
  const [company, setCompany] = React.useState("");
  const set = (k) => (val) => setV((s) => ({ ...s, [k]: val }));
  const message = [
    "HENNA ENQUIRY",
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `Email: ${v.email}`,
    `Address: ${v.address}`,
    `Occasion: ${v.occasion}`,
    v.date ? `Date: ${v.date}` : null,
    v.notes ? `Notes: ${v.notes}` : null,
  ].filter(Boolean).join("\n");
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:Masuma0205@icloud.com?subject=${encodeURIComponent("Henna enquiry")}&body=${encodeURIComponent(message)}`;
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form && form.reportValidity && !form.reportValidity()) return;
    setStatus("sending"); setError("");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, company }) });
      const out = await res.json().catch(() => ({}));
      if (res.ok && out.ok) { setStatus("sent"); return; }
      throw new Error(out.error || `Server responded ${res.status}`);
    } catch (err) {
      setError(String(err.message || err));
      setStatus("failed");
    }
  };
  if (status === "failed") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start", paddingTop: "24px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.6vw,2rem)", lineHeight: 1.2, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 }}>We could not send that from here</h2>
        <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "44ch", margin: 0 }}>Your details are still filled in. Send them straight through on WhatsApp or by email instead and we will pick it up the same way.</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href={waHref}>Send on WhatsApp</Button>
          <Button variant="outline" size="lg" href={mailHref}>Send by email</Button>
        </div>
        <button onClick={() => setStatus("idle")} style={{ background: "none", border: "none", padding: "12px 0", cursor: "pointer", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>Back to the form</button>
        <p style={{ font: "var(--type-label)", fontSize: "10px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--warm-gray-500)", margin: 0 }}>{error}</p>
      </div>
    );
  }
  if (status === "sent") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-start", paddingTop: "24px" }}>
        <Ornament width="180px" />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.2, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--ivory-50)", margin: 0 }}>Thank you — your enquiry is with us</h2>
        <p style={{ font: "var(--type-body)", color: "var(--text-body)", maxWidth: "44ch", margin: 0 }}>It has been sent to the studio and we will reply with availability and a proposal. If you would like to add anything in the meantime, message us directly.</p>
        <div className="cta-row">
          <Button variant="outline" size="lg" href={waHref}>Message on WhatsApp</Button>
        </div>
        <button onClick={() => { setStatus("idle"); setV(EMPTY); }} style={{ background: "none", border: "none", padding: "12px 0", cursor: "pointer", font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>Start again</button>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
      <div className="field-grid">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
        <Field label="Full name" required value={v.name} onChange={set("name")} placeholder="Your name" />
        <Field label="Phone number" type="tel" required value={v.phone} onChange={set("phone")} placeholder="Including country code" />
        <Field label="Email" type="email" required value={v.email} onChange={set("email")} placeholder="you@email.com" />
        <Field label="Occasion" type="select" value={v.occasion} onChange={set("occasion")} options={["Bridal mehndi", "Semi bridal", "Eid mehndi", "Private celebration", "Event or guest henna", "Something else"]} />
        <Field label="Address" required value={v.address} onChange={set("address")} placeholder="Where the henna will be done" style={{ gridColumn: "1 / -1" }} />
        <Field label="Date of the celebration" type="date" value={v.date} onChange={set("date")} style={{ gridColumn: "1 / -1" }} />
        <Field label="Anything else" type="textarea" rows={3} value={v.notes} onChange={set("notes")} placeholder="Number of people, timings, design ideas" hint="Optional" style={{ gridColumn: "1 / -1" }} />
      </div>
      <div className="cta-row">
        <Button variant="primary" size="lg" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"}</Button>
        <Button variant="outline" size="lg" href={mailHref}>Send by email</Button>
      </div>
      <p aria-live="polite" style={{ font: "var(--type-label)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>{status === "sending" ? "Sending your enquiry" : "We reply within two days"}</p>
    </form>
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
