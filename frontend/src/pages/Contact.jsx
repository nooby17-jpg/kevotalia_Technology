import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import { countries } from "./../data/countries";
import "./../styles/contact.css";

export default function Contact() {
  usePageMeta({
    title: "Contact Us | Kevotalia Technology",
    description:
      "Contact Kevotalia Technology for security, fire safety, and enterprise protection solutions.",
  });

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [source, setSource] = useState("");
  const [query, setQuery] = useState("");

  const countryOptions = Object.keys(countries);

  return (
    <div className="contact-page">
      <section className="page-hero section-divider">
        <h1>Contact Us</h1>
        <p>Let’s discuss how we can secure your organization.</p>
      </section>

      <div className="contact-wrapper">
        {/* LEFT PANEL */}
        <aside className="contact-info">
          <h2>Kevotalia Technology</h2>
          <p className="muted">
            Trusted partner for security, fire safety & enterprise solutions.
          </p>

          <div className="info-card">
            <strong>📍 Office</strong>
            <span>
              Shop No. 1, Turf View Shopping Complex,<br />
              AJC Bose Road, Alipore,<br />
              Kolkata – 700022
            </span>
          </div>

          <div className="info-card">
            <strong>📧 Email</strong>
            <a href="mailto:kevotaliatech@gmail.com">
              kevotaliatech@gmail.com
            </a>
          </div>

          <div className="info-card">
            <strong>📞 Phone</strong>
            <span>+91-9531915240</span>
            <span>+91-7003935601</span>
          </div>
        </aside>

        {/* FORM */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xojjabpj" /* replace with real ID */
          method="POST"
        >
          <div className="form-grid">
            <Input name="name" label="Full Name" max={40} />
            <Input name="email" label="Email" type="email" />
            <Input name="mobile" label="Mobile Number" type="tel" max={15} />
            <Input name="organization" label="Organization" max={50} />
            <Input name="city" label="City" max={30} />
            <Input name="pincode" label="Pin Code" type="number" max={6} />
      
            {/* COUNTRY */}
            <Select
              label="Country"
              name="country"
              options={countryOptions}
              value={country}
              onChange={(v) => {
                setCountry(v);
                setState("");
              }}
            />

            {/* STATE (optional if country has none) */}
            <Select
              label="State / Region"
              name="state"
              options={countries[country] || []}
              value={state}
              disabled={!country || countries[country]?.length === 0}
              onChange={(v) => setState(v)}
            />

            {/* SOURCE */}
            <Select
              label="Source"
              name="source"
              options={["Website", "Referral", "Social Media"]}
              value={source}
              onChange={(v) => setSource(v)}
            />

            {/* QUERY TYPE */}
            <Select
              label="Query Type"
              name="query"
              options={["Sales Inquiry", "Technical Support"]}
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
              I agree to the privacy policy and consent to be contacted.
            </span>
          </label>

          <button className="send-btn">Send Message</button>
        </form>
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
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
}
