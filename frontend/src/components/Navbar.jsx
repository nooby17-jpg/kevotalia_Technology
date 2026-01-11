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
  const closeMenu = () => setOpen(false);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  const handleNavigate = (path) => {
  document.querySelector("main")?.classList.add("page-exit");
  setTimeout(() => navigate(path), 180);
};

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="brand" id="navbar-logo">
        <img
          src={
            scrolled
              ? theme === "light" ? logoDark : logoLight
              : theme === "light" ? logoLight : logoDark
          }
          alt="Kevotalia"
          loading="lazy"
        />
        <span className="brand-text">
          Kevotalia <span>Technology</span>
        </span>
      </Link>

      <nav className={`nav ${open ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img src={theme === "light" ? logoLight : logoDark} alt="Kevotalia Logo" loading="lazy"/>
        <h3>Kevotalia Technology</h3>
      </div>
        <Link style={{ "--i": 0 }} to="/" onClick={closeMenu}>Home</Link>
        <Link style={{ "--i": 1 }} to="/about" onClick={closeMenu}>About</Link>
        <Link style={{ "--i": 2 }} to="/solutions" onClick={closeMenu}>Solutions</Link>
        <Link style={{ "--i": 3 }} to="/services" onClick={closeMenu}>Services</Link>
        <Link style={{ "--i": 4 }} to="/products" onClick={closeMenu}>Products</Link>
        <Link style={{ "--i": 5 }} to="/gemservices" onClick={closeMenu}>GeM Services</Link>
        <Link style={{ "--i": 6 }} to="/clients" onClick={closeMenu}>Clients</Link>
        <Link style={{ "--i": 7 }} to="/contact" onClick={closeMenu}>Contact</Link>

        <button
          aria-label="Toggle dark and light mode"
          className="theme-toggle btndark"
          style={{ "--i": 8, fontSize: "18px" }}
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
