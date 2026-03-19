import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
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
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleNavigate = (path) => {
    closeMenu();
    navigate(path);
  };

  const navLinkClass = ({ isActive }) => isActive ? "active" : undefined;

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

      <nav ref={navRef} className={`nav ${open ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img src={theme === "light" ? logoLight : logoDark} alt="Kevotalia Logo" loading="lazy" />
          <h3>Kevotalia Technology</h3>
        </div>

        <NavLink style={{ "--i": 0 }} to="/" end className={navLinkClass} onClick={closeMenu}>Home</NavLink>
        <NavLink style={{ "--i": 1 }} to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
        <NavLink style={{ "--i": 2 }} to="/solutions" className={navLinkClass} onClick={closeMenu}>Solutions</NavLink>
        <NavLink style={{ "--i": 3 }} to="/services" className={navLinkClass} onClick={closeMenu}>Services</NavLink>
        <NavLink style={{ "--i": 4 }} to="/products" className={navLinkClass} onClick={closeMenu}>Products</NavLink>
        <NavLink style={{ "--i": 5 }} to="/gemservices" className={navLinkClass} onClick={closeMenu}>GeM Services</NavLink>
        <NavLink style={{ "--i": 6 }} to="/clients" className={navLinkClass} onClick={closeMenu}>Clients</NavLink>
        <NavLink style={{ "--i": 7 }} to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>

        <button
          aria-label="Toggle dark and light mode"
          className="theme-toggle btndark"
          style={{ "--i": 8, fontSize: "18px" }}
          onClick={toggleTheme}
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