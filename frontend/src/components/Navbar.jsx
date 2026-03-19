import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { ThemeContext } from "../context/ThemeContext";
import logoLight from "../assets/flc.png";
import logoDark from "../assets/flc.png";
import "./../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const navRef                  = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const closeMenu   = () => setOpen(false);
  const navLinkClass = ({ isActive }) => isActive ? "active" : undefined;
  const isDark       = theme === "dark";

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* BRAND */}
      <Link to="/" className="brand" id="navbar-logo">
        <img
          src={isDark ? logoDark : logoLight}
          alt="Kevotalia"
          loading="lazy"
        />
        <span className="brand-text">
          Kevotalia <span>Technology</span>
        </span>
      </Link>

      {/* NAV */}
      <nav ref={navRef} className={`nav ${open ? "open" : ""}`}>
        {/* Mobile header */}
        <div className="mobile-menu-header">
          <img src={isDark ? logoDark : logoLight} alt="Kevotalia Logo" loading="lazy" />
          <h3>Kevotalia Technology</h3>
        </div>

        <NavLink style={{ "--i": 0 }} to="/"            end className={navLinkClass} onClick={closeMenu}>Home</NavLink>
        <NavLink style={{ "--i": 1 }} to="/about"           className={navLinkClass} onClick={closeMenu}>About</NavLink>
        <NavLink style={{ "--i": 2 }} to="/solutions"       className={navLinkClass} onClick={closeMenu}>Solutions</NavLink>
        <NavLink style={{ "--i": 3 }} to="/services"        className={navLinkClass} onClick={closeMenu}>Services</NavLink>
        <NavLink style={{ "--i": 4 }} to="/products"        className={navLinkClass} onClick={closeMenu}>Products</NavLink>
        <NavLink style={{ "--i": 5 }} to="/gemservices"     className={navLinkClass} onClick={closeMenu}>GeM Services</NavLink>
        <NavLink style={{ "--i": 6 }} to="/clients"         className={navLinkClass} onClick={closeMenu}>Clients</NavLink>
        <NavLink style={{ "--i": 7 }} to="/contact"         className={navLinkClass} onClick={closeMenu}>Contact</NavLink>

        {/* ── Theme Toggle Pill ── */}
        <button
          className={`theme-pill ${isDark ? "dark" : "light"}`}
          style={{ "--i": 8 }}
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* Sun icon */}
          <span className="pill-icon pill-sun" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="3" strokeWidth="1.5" stroke="currentColor"/>
              <line x1="8" y1="1" x2="8" y2="3"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="8" y1="13" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="1" y1="8" x2="3" y2="8"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="13" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="2.93" y1="2.93" x2="4.34" y2="4.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="11.66" y1="11.66" x2="13.07" y2="13.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="2.93" y1="13.07" x2="4.34" y2="11.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="11.66" y1="4.34" x2="13.07" y2="2.93"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>

          {/* Sliding thumb */}
          <span className="pill-thumb" aria-hidden="true" />

          {/* Moon icon */}
          <span className="pill-icon pill-moon" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8z"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </nav>

      {/* HAMBURGER */}
      <button className="hamburger" onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <RxCross2 /> : <HiOutlineMenuAlt3 />}
      </button>
    </header>
  );
}