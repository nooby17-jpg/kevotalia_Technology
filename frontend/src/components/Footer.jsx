import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";

import ll from "../assets/flc.png";

import "./../styles/footer.css";

export default function Footer() {
  const theme =
    document.documentElement.getAttribute("data-theme") || "light";
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* TOP ROW */}
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src={ll}
            alt="Kevotalia Technology"
            loading="lazy"
          />
          <div>
            <h3>Kevotalia Technology</h3>
            <p>
              Security, Safety & Trusts
            </p>
         </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Services</h4>
            <Link to="/about">About</Link>
            <Link to="/services">MSS</Link>
            <Link to="/services">SOAR</Link>
            <Link to="/services">Vulnerability Management</Link>
          
            <Link to="/clients">Clients</Link>
          </div>

          <div>
            <h4>Solutions</h4>
            <Link to="/solutions">Threat Detection & Response</Link>
            <Link to="/solutions">IAM</Link>
            <Link to="/solutions">Hybrid SOC</Link>
            <Link to="/gemservices">GeM Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div>
            <h4>Products</h4>
            <Link to="/products">View Products</Link>
            <Link to="/products">Scale & Ranking</Link>
            <Link to="/products">Safety Services</Link>
            <Link to="/products">Safety Fulfillment & Compliance</Link>
          </div>

          <div className="contactInfo">
            <h4>Contact</h4>
            <p>
              Shop No.1, Turf View Shopping Complex,<br />
              AJC Bose Road, Alipore<br/> Kolkata – 700022
            </p>
            <p>kevotaliatech@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border_bottom"/>
      {/* MIDDLE ROW */}
      <div className="footer-middle">
        <div className="footer-bottom">
          © {year} Kevotalia Technology. All rights reserved.
        </div>  
        <div className="footer-social">
          <h4>Follow us on</h4>
          <div className="social-icons">
            <a href="#"><BiLogoFacebook  /></a>
            <a href="#"><BsTwitterX /></a>
            <a href="#"><ImYoutube2 /></a>
            <a href="mailto:kevotaliatech@gmail.com"><BiLogoGmail /></a>
            <a href="#"><PiInstagramLogoDuotone /></a>
          </div>
        </div>
      </div>

     
    </footer>
  );
}
