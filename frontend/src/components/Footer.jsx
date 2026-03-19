import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import ll from "../assets/flc.png";
import "./../styles/footer.css";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* TOP ROW */}
      <div className="footer-top">
        <div className="footer-brand">
          <img src={ll} alt="Kevotalia Technology" loading="lazy" />
          <div>
            <h3>Kevotalia Technology</h3>
            {/* Fix: "Trusts" → "Trust" */}
            <p>Security, Safety &amp; Trust</p>
          </div>
        </div>

        <div className="footer-links">
          {/* Column 1 — corrected: only actual services */}
          <div>
            <h4>Services</h4>
            <Link to="/services">MSS</Link>
            <Link to="/services">SOAR</Link>
            <Link to="/services">Pen Testing</Link>
            <Link to="/services">Vulnerability Mgmt.</Link>
          </div>

          {/* Column 2 — Solutions */}
          <div>
            <h4>Solutions</h4>
            <Link to="/solutions">Threat Detection</Link>
            <Link to="/solutions">IAM</Link>
            <Link to="/solutions">Hybrid SOC</Link>
            <Link to="/gemservices">GeM Services</Link>
          </div>

          {/* Column 3 — Products */}
          <div>
            <h4>Products</h4>
            <Link to="/products">eSSL Products</Link>
            <Link to="/products">Fire Safety</Link>
            <Link to="/products">Safety Services</Link>
            <Link to="/products">GeM Scale & Ranking</Link>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Column 5 — Contact info */}
          <div className="contactInfo">
            <h4>Contact</h4>
            <p>
              Shop No.1, Turf View Shopping Complex,<br />
              AJC Bose Road, Alipore<br />
              Kolkata – 700022
            </p>
            <a href="mailto:kevotaliatech@gmail.com"
              style={{ display: "block", marginTop: "8px", fontSize: "14px" }}>
              kevotaliatech@gmail.com
            </a>
            <a href="tel:+919531915240"
              style={{ display: "block", fontSize: "14px", marginTop: "4px" }}>
              +91-9531915240
            </a>
          </div>
        </div>
      </div>

      <div className="border_bottom" />

      {/* BOTTOM ROW */}
      <div className="footer-middle">
        <div className="footer-bottom">
          © {year} Kevotalia Technology. All rights reserved.
        </div>
        <div className="footer-social">
          <h4>Follow us on</h4>
          <div className="social-icons">
            {/* Replace href="#" with real URLs when available */}
            <a href="https://www.facebook.com/kevotaliatechnology"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook">
              <BiLogoFacebook />
            </a>
            <a href="https://twitter.com/kevotalia"
              target="_blank" rel="noopener noreferrer"
              aria-label="Twitter / X">
              <BsTwitterX />
            </a>
            <a href="https://www.youtube.com/@kevotalia"
              target="_blank" rel="noopener noreferrer"
              aria-label="YouTube">
              <ImYoutube2 />
            </a>
            <a href="mailto:kevotaliatech@gmail.com"
              aria-label="Email">
              <BiLogoGmail />
            </a>
            <a href="https://www.instagram.com/kevotalia"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram">
              <PiInstagramLogoDuotone />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}