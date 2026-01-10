import { useState } from "react";
import "./../styles/contact.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help. Reach out to our team anytime.</p>
      </div>

      <div className="contact-wrapper">

        {/* Info Panel */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have a question about our services or need support? Fill out the
            form and our team will respond promptly.
          </p>

          <div className="info-card">
            <strong>Office Address</strong>
            <span>
              Shop No. 1, Turf View Shopping Complex, AJC Bose Road,
              Kolkata – 700022, India
            </span>
          </div>

          <div className="info-card">
            <strong>Email</strong>
            <span>kevotaliatech@gmail.com</span>
          </div>

          <div className="info-card">
            <strong>Phone</strong>
            <span>+91-9531915240</span>
            <span>+91-7003935601</span>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-grid">
            {["Name", "Email", "Mobile", "Organization", "City", "Pin Code"].map(
              (label, i) => (
                <div className="field" key={i}>
                  <input type="text" required placeholder=" " />
                  <label>{label}</label>
                </div>
              )
            )}

            <div className="field">
              <select>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
              <label>Country</label>
            </div>

            <div className="field">
              <select>
                <option>State*</option>
                <option>West Bengal</option>
                <option>Maharashtra</option>
              </select>
              <label>State</label>
            </div>

            <div className="field">
              <select>
                <option>- Select Source -</option>
                <option>Website</option>
                <option>Referral</option>
              </select>
              <label>Source</label>
            </div>

            <div className="field">
              <select>
                <option>Technical Support</option>
                <option>Sales Inquiry</option>
              </select>
              <label>Query Type</label>
            </div>
          </div>

          <div className="field full">
            <textarea rows="4" required placeholder=" "></textarea>
            <label>Your Message</label>
          </div>

          <div className="checkbox-row">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">
              I agree to the data privacy policy and consent to be contacted.
            </label>
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <div className="success-msg">
              ✅ Your message has been sent successfully.
            </div>
          )}

        </form>

      </div>

    </div>
  );
}
