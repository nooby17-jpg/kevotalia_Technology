import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/dark_logo.png";
import "./../styles/Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img
          src={theme === "light" ? logoLight : logoDark}
          alt="Kevotalia Technology"
        />
        <span className="brand-text">Kevotalia Technology</span>
      </Link>

      <nav className="nav">
        <Link to="/about">About</Link>

        <div className="dropdown">
          <span>Solutions</span>
          <div className="dropdown-menu">
            <Link to="/solutions/threat-detection">
              Threat Detection & Response
            </Link>
            <Link to="/solutions/iam">IAM</Link>
            <Link to="/solutions/hybrid-soc">Hybrid SOC</Link>

            <div className="nested">
              <span>GeM Services ▸</span>
              <div className="nested-menu">
                <Link to="/solutions/gem/login">Login</Link>
                <Link to="/solutions/gem/register">Create Account</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <span>Services</span>
          <div className="dropdown-menu">
            <Link to="/services/mss">MSS</Link>
            <Link to="/services/soar">SOAR</Link>
            <Link to="/services/vulnerability">
              Vulnerability Management
            </Link>
            <Link to="/services/pentesting">
              Penetration Testing
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <span>Products</span>
          <div className="dropdown-menu">
            <Link to="/products/display">Display</Link>
            <Link to="/products/scale-ranking">Scale & Ranking</Link>
            <Link to="/products/safety-services">Safety Services</Link>
            <Link to="/products/compliance">
              Safety Fulfillment & Compliance
            </Link>
          </div>
        </div>

        <Link to="/clients">Clients</Link>
        <Link to="/contact">Contact</Link>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
