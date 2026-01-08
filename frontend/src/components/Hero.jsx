import hero1 from "../assets/1.svg";
import hero2 from "../assets/2.svg";
import hero3 from "../assets/3.svg";
import hero4 from "../assets/4.svg";
import hero5 from "../assets/5.svg";
import hero6 from "../assets/6.svg";
import hero7 from "../assets/7.svg";
import hero8 from "../assets/8.svg";
import { IoIosArrowDropdown } from "react-icons/io";


import "./../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero1} className="float f1" />
      <img src={hero2} className="float f2" />
      <img src={hero3} className="float f3" />
      <img src={hero4} className="float f4" />
      <img src={hero5} className="float f5" />
      <img src={hero6} className="float f6" />
      <img src={hero7} className="float f7" />
      <img src={hero8} className="float f8" />
     

      <div className="hero-content">
        <span className="hero-tag">Cybersecurity & Trust</span>
        <h1>Securing Digital Futures</h1>
        <p>
          Enterprise‑grade cybersecurity solutions built for scale,
          compliance, and resilience.
        </p>

        <div className="hero-actions">
          <a href="/solutions" className="btn primary">Explore Solutions</a>
          <a href="/contact" className="btn outline">Contact Us</a>
        </div>

        <a href="#section2"><IoIosArrowDropdown className="scroll-arrow" /></a>
      </div>
    </section>
  );
}
