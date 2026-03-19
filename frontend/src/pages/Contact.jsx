import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import { countries } from "./../data/countries";
import "./../styles/contact.css";

export default function Contact() {
  usePageMeta({
    title: "Contact Us | Kevotalia Technology",
    description: "Contact Kevotalia Technology for security, fire safety, and enterprise protection solutions.",
  });

  const [country, setCountry]     = useState("");
  const [state, setState]         = useState("");
  const [source, setSource]       = useState("");
  const [query, setQuery]         = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState("");

  const countryOptions = Object.keys(countries);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xojjabpj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
        setCountry(""); setState(""); setSource(""); setQuery("");
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero section-divider">
        <h1>Contact Us</h1>
        <p>Let's discuss how we can secure your organization.</p>
      </section>

      <div className="contact-wrapper">
        {/* LEFT PANEL */}
        <aside className="contact-info">
          <h2>Get In Touch</h2>
          <p className="muted">
            Reach out for a free consultation, product inquiry, or technical
            support — our team responds within 24 hours.
          </p>

          <div className="info-card">
            <strong>📍 Office</strong>
            <span>
              Shop No. 1, Turf View Shopping Complex,<br />
              AJC Bose Road, Alipore,<br />
              Kolkata – 700022
            </span>
            <a
              href="https://maps.google.com/?q=Turf+View+Shopping+Complex+AJC+Bose+Road+Alipore+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="info-link"
            >
              View on Maps →
            </a>
          </div>

          <div className="info-card">
            <strong>📧 Email</strong>
            <a href="mailto:kevotaliatech@gmail.com">
              kevotaliatech@gmail.com
            </a>
          </div>

          <div className="info-card">
            <strong>📞 Phone</strong>
            <a href="tel:+919531915240">+91-9531915240</a>
            <a href="tel:+917003935601">+91-7003935601</a>
          </div>

          <div className="info-card">
            <strong>🕐 Working Hours</strong>
            <span>Mon – Sat: 9:00 AM – 6:30 PM</span>
            <span>Sunday: Closed</span>
          </div>

          {/* Google Maps embed */}
          <div className="contact-map">
            <iframe
              title="Kevotalia Technology Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4!2d88.3432!3d22.5248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMxJzI5LjMiTiA4OMKwMjAnMzUuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

        {/* FORM */}
        {submitted ? (
          <div className="contact-success">
            <span className="success-icon">✅</span>
            <h3>Message Sent!</h3>
            <p>
              Thank you for reaching out. Our team will get back to you within
              24 hours.
            </p>
            <button className="send-btn" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <Input name="name"         label="Full Name"       max={40} />
              <Input name="email"        label="Email"           type="email" />
              <Input name="mobile"       label="Mobile Number"   type="tel" max={15} />
              <Input name="organization" label="Organization"    max={50} />
              <Input name="city"         label="City"            max={30} />
              <Input name="pincode"      label="Pin Code"        type="number" max={6} />

              <Select
                label="Country"
                name="country"
                options={countryOptions}
                value={country}
                onChange={(v) => { setCountry(v); setState(""); }}
              />
              <Select
                label="State / Region"
                name="state"
                options={countries[country] || []}
                value={state}
                disabled={!country || countries[country]?.length === 0}
                onChange={(v) => setState(v)}
              />
              <Select
                label="How did you hear about us?"
                name="source"
                options={["Website", "Referral", "Social Media", "Google Search", "Exhibition / Event"]}
                value={source}
                onChange={(v) => setSource(v)}
              />
              <Select
                label="Query Type"
                name="query"
                options={["Sales Inquiry", "Technical Support", "AMC / CMC Inquiry", "GeM Services", "Other"]}
                value={query}
                onChange={(v) => setQuery(v)}
              />
            </div>

            <div className="field full textarea-gap">
              <textarea
                name="message"
                rows="4"
                required
                maxLength={500}
                placeholder=" "
              />
              <label>Your Message</label>
            </div>

            <label className="checkbox-row">
              <input type="checkbox" required />
              <span>
                I agree to the privacy policy and consent to be contacted by
                Kevotalia Technology.
              </span>
            </label>

            {error && <p className="error-msg">{error}</p>}

            <button className="send-btn" type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send Message →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function Input({ label, name, type = "text", max }) {
  return (
    <div className="field">
      <input
        name={name}
        type={type}
        required
        maxLength={max}
        inputMode={type === "number" ? "numeric" : "text"}
        placeholder=" "
      />
      <label>{label}</label>
    </div>
  );
}

function Select({ label, name, options, value, onChange, disabled }) {
  return (
    <div className="field">
      <select
        name={name}
        required
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" />
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
}