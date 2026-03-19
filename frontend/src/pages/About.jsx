import { useNavigate } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useFadeIn from "../hooks/useFadeIn";
import "./../styles/about.css";

const services = [
  { icon: "🔒", label: "Access Control Systems" },
  { icon: "🌬️", label: "Air Curtains" },
  { icon: "👆", label: "Biometric Attendance Systems" },
  { icon: "🚧", label: "Boom Barriers & Gate Automation" },
  { icon: "🔍", label: "Metal Detectors" },
  { icon: "📷", label: "CCTV & Surveillance Systems" },
  { icon: "🔥", label: "Kitchen Fire Protection Systems" },
  { icon: "⚡", label: "Electrical Panel Fire Protection" },
  { icon: "🛡️", label: "CMC Fire Protection Systems" },
  { icon: "🔋", label: "Power Backup Solutions" },
  { icon: "🐜", label: "Pest Control Services" },
  { icon: "📺", label: "Digital Signage Solutions" },
  { icon: "🌿", label: "EHS Services" },
];

const whyUs = [
  { icon: "✅", text: "Quality-driven solutions with certified products" },
  { icon: "🧑‍🔧", text: "Trained & certified installation technicians" },
  { icon: "⏱️", text: "On-time project delivery, every time" },
  { icon: "🔧", text: "AMC / CMC support post-installation" },
  { icon: "🏆", text: "Trusted by India's top government & enterprise orgs" },
];

const industries = [
  { icon: "🏢", label: "Corporate Offices" },
  { icon: "🏭", label: "Manufacturing Units" },
  { icon: "📦", label: "Warehouses & Logistics" },
  { icon: "🎓", label: "Educational Institutions" },
  { icon: "🏨", label: "Hotels & Restaurants" },
  { icon: "🏥", label: "Hospitals" },
  { icon: "🏛️", label: "Government Organizations" },
];

const clients = [
  "Birla Corporation", "Blinkit Pvt. Ltd", "Bureau of Mines",
  "CGHS", "ESIC", "Govt. of Andaman & Nicobar Islands",
  "Indian Army", "Indian Air Force", "Indian Navy",
  "Nestle India Ltd", "Prosure Technology Pvt. Ltd", "Govt. of West Bengal",
];

export default function About() {
  const navigate = useNavigate();
  const ref1 = useFadeIn();
  const ref2 = useFadeIn();
  const ref3 = useFadeIn();
  const ref4 = useFadeIn();
  const ref5 = useFadeIn();
  const ref6 = useFadeIn();

  usePageMeta({
    title: "About Us | Kevotalia Technology",
    description:
      "Learn about Kevotalia Technology, a trusted provider of integrated security, fire safety, and compliance solutions.",
  });

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="page-hero section-divider">
        <h1>About Kevotalia Technology</h1>
        <p>
          Integrated security, fire safety, and electrical solutions — built
          on trust, precision, and reliability.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section section-divider" ref={ref1}>
        <div className="fade-in-up about-who">
          <div className="about-who-text">
            <span className="about-eyebrow">Who We Are</span>
            <h2>A name you can trust for safety & security</h2>
            <p>
              Kevotalia Technology is a trusted and growing name in integrated
              security, fire safety and electrical solutions. With a strong focus
              on innovation, reliability, and compliance, we serve industrial,
              commercial, institutional, and government clients across India.
            </p>
            <p>
              Our tailored approach ensures that every customer receives
              end-to-end solutions with the latest technology, expert
              installation, and ongoing support.
            </p>
          </div>
          <div className="about-who-cards">
            <div className="about-mini-card">
              <span>🎯</span>
              <strong>Mission</strong>
              <p>Deliver reliable, compliant, and future-ready safety systems that protect lives, assets, and businesses.</p>
            </div>
            <div className="about-mini-card">
              <span>🔭</span>
              <strong>Vision</strong>
              <p>Become a nationally trusted leader in integrated safety and automation through innovation and service excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats-section section-divider" ref={ref2}>
        {[
          { num: "500+", label: "Installations", icon: "🏗️" },
          { num: "10+", label: "Years Experience", icon: "📅" },
          { num: "100%", label: "Compliance Focus", icon: "✅" },
          { num: "24/7", label: "Support", icon: "📞" },
        ].map((s, i) => (
          <div className="about-stat-card fade-in-up" key={i}>
            <span className="stat-icon">{s.icon}</span>
            <h3>{s.num}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="about-section section-divider" ref={ref3}>
        <span className="about-eyebrow">What We Do</span>
        <h2>Our Core Services</h2>
        <div className="service-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card fade-in-up">
              <span className="service-card-icon">{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="about-section section-divider" ref={ref4}>
        <span className="about-eyebrow">Why Kevotalia</span>
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          {whyUs.map((w, i) => (
            <div key={i} className="why-card fade-in-up">
              <span className="why-icon">{w.icon}</span>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="about-section section-divider" ref={ref5}>
        <span className="about-eyebrow">Our Reach</span>
        <h2>Industries We Serve</h2>
        <div className="industry-grid">
          {industries.map((ind, i) => (
            <div key={i} className="industry-chip fade-in-up">
              <span>{ind.icon}</span> {ind.label}
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="about-section section-divider" ref={ref6}>
        <span className="about-eyebrow">Our Clients</span>
        <h2>Trusted By</h2>
        <div className="client-grid">
          {clients.map((client, i) => (
            <div key={i} className="client-card fade-in-up">
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="about-cta">
        <div className="cta-inner">
          <h2>Let's Secure, Protect & Empower Your Business</h2>
          <p>Your Safety, Our Priority — reach out today for a free consultation.</p>
          <div className="cta-actions">
            <button className="cta-btn" onClick={() => navigate("/contact")}>
              Contact Us
            </button>
            <button className="cta-btn-outline" onClick={() => navigate("/products")}>
              View Products
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}