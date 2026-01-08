import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/dark_logo.png";
import "./../styles/Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="brand">
        <img src={theme === "light" ? logoLight : logoDark} alt="Kevotalia" />
        <span className="brand-text">Kevotalia Technology</span>
      </Link>

      {/* Desktop Nav */}
      <nav className={`nav ${open ? "open" : ""}`}>
        <Link to="/about">About</Link>

       <div className="dropdown" onClick={e => e.currentTarget.classList.toggle("open")}>

          <span>Solutions</span>
          <div className="dropdown-menu">
            <Link to="/solutions/threat-detection">Threat Detection & Response</Link>
            <Link to="/solutions/iam">IAM</Link>
            <Link to="/solutions/hybrid-soc">Hybrid SOC</Link>
            <div className="nested">
              <span>GeM Services ▸</span>
              <div className="nested-menu">
                <Link to="/solutions/gem/login">Login</Link>
                <Link to="/solutions/gem/register">Register</Link>
              </div>
            </div>
          </div>
        </div>

       <div className="dropdown" onClick={e => e.currentTarget.classList.toggle("open")}>

          <span>Services</span>
          <div className="dropdown-menu">
            <Link to="/services/mss">MSS</Link>
            <Link to="/services/soar">SOAR</Link>
            <Link to="/services/vulnerability">Vulnerability Management</Link>
            <Link to="/services/pentesting">Penetration Testing</Link>
          </div>
        </div>

          <div className="dropdown" onClick={e => e.currentTarget.classList.toggle("open")}>
          <span>Products</span>
          <div className="dropdown-menu">
            <Link to="/products/display">Display</Link>
            <Link to="/products/scale-ranking">Scale & Ranking</Link>
            <Link to="/products/safety-services">Safety Services</Link>
            <Link to="/products/compliance">Compliance</Link>
          </div>
        </div>

        <Link to="/clients">Clients</Link>
        <Link to="/contact">Contact</Link>

        <button className="theme-toggle btndark" onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }>
          {theme === "light" ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
        </button>
      </nav>

      {/* Mobile Toggle */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <RxCross2 /> : <HiOutlineMenuAlt3 />}
      </button>
    </header>
  );
}
