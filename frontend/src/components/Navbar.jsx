import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import logoLight from "../assets/flc.png";
import logoDark from "../assets/flc.png";
import "./../styles/Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="brand">
        <img
          src={
            scrolled
              ? theme === "light" ? logoDark : logoLight
              : theme === "light" ? logoLight : logoDark
          }
          alt="Kevotalia"
        />
        <span className="brand-text">
          Kevotalia <span>Technology</span>
        </span>
      </Link>

      <nav className={`nav ${open ? "open" : ""}`}>
         <Link style={{ "--i": 0 }} to="/">Home</Link>
        <Link style={{ "--i": 1 }} to="/about">About</Link>

        <div className="dropdown" style={{ "--i": 2 }}>
          <span>Solutions</span>
          <div className="dropdown-menu glass">
            <Link to="/solutions/threat-detection">Threat Detection</Link>
            <Link to="/solutions/iam">IAM</Link>
            <Link to="/solutions/hybrid-soc">Hybrid SOC</Link>

            <div className="nested">
              <span>GeM Services ▸</span>
              <div className="nested-menu glass">
                <Link to="/solutions/gem/login">Login</Link>
                <Link to="/solutions/gem/register">Register</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown" style={{ "--i": 3 }}>
          <span>Services</span>
          <div className="dropdown-menu glass">
            <Link to="/services/mss">MSS</Link>
            <Link to="/services/soar">SOAR</Link>
            <Link to="/services/vulnerability">Vulnerability</Link>
            <Link to="/services/pentesting">Pen Testing</Link>
          </div>
        </div>

        <div className="dropdown" style={{ "--i": 4 }}>
          <span>Products</span>
          <div className="dropdown-menu glass">
            <Link to="/products/display">Display</Link>
            <Link to="/products/scale-ranking">Scale & Ranking</Link>
            <Link to="/products/safety-services">Safety</Link>
            <Link to="/products/compliance">Compliance</Link>
          </div>
        </div>

        <Link style={{ "--i": 5 }} to="/clients">Clients</Link>
        <Link style={{ "--i": 6 }} to="/contact">Contact</Link>

        <button
          className="theme-toggle btndark"
          style={{ "--i": 7 }}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </button>
      </nav>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <RxCross2 /> : <HiOutlineMenuAlt3 />}
      </button>
    </header>
  );
}
