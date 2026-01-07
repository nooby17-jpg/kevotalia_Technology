import { Link } from "react-router-dom";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/dark_logo.png";
import "./../styles/footer.css";

export default function Footer() {
  const theme =
    document.documentElement.getAttribute("data-theme") || "light";
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ===== TOP ROW : 4 COLUMNS ===== */}
      <div className="footer-top">

        {/* SERVICES */}
        <div>
          <h4>Services</h4>
          <Link to="/about">About</Link>
          <Link to="/services/mss">MSS</Link>
          <Link to="/services/soar">SOAR</Link>
          <Link to="/services/vulnerability">
            Vulnerability Management
          </Link>
          <Link to="/services/pentesting">
            Penetration Testing
          </Link>
          <Link to="/clients">Clients</Link>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4>Solutions</h4>
          <Link to="/solutions/threat-detection">
            Threat Detection & Response
          </Link>
          <Link to="/solutions/iam">IAM</Link>
          <Link to="/solutions/hybrid-soc">Hybrid SOC</Link>

          <div className="footer-nested">
            <span>GeM Services:</span>
            <Link to="/solutions/gem/login">GeM Login</Link>
            <Link to="/solutions/gem/register">GeM Register</Link>
          </div>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4>Products</h4>
          <Link to="/products/display">Display</Link>
          <Link to="/products/scale-ranking">Scale & Ranking</Link>
          <Link to="/products/safety-services">Safety Services</Link>
          <Link to="/products/compliance">
            Safety Fulfillment & Compliance
          </Link>
        </div>

        {/* CONTACT */}
        <div className="contactInfo">
          <h4>Contact</h4>
          <p>
            Shop No.1, Turf View Shopping Complex,<br />
            Acharya Jagdish Chandra Bose Rd,<br />
            Alipore, Kolkata – 700022
          </p>
          <p>contact@kevotalia.com</p>
        </div>
      </div>

      {/* ===== SECOND ROW : BRAND + SOCIAL ===== */}
      <div className="footer-middle">
        <div className="footer-brand">
          <img
            src={logoDark}
            alt="Kevotalia Technology"
          />
          <h3>Kevotalia Technology</h3>
          <p>
            Advanced cybersecurity solutions delivering trust,
            resilience, and compliance for modern enterprises.
          </p>
        </div>

        <div className="footer-social">
          <h4>Follow us on</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">🌐</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="X">❌</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="mailto:contact@kevotalia.com" aria-label="Email">✉️</a>
          </div>
        </div>
      </div>

      {/* ===== THIRD ROW : COPYRIGHT ===== */}
      <div className="footer-bottom">
        © {year} Kevotalia Technology. All rights reserved.
      </div>
    </footer>
  );
}
