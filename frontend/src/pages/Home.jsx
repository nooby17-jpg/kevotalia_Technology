import { useNavigate } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";
import "./../styles/homeservices.css";

const services = [
  {
    icon: "🔥",
    title: "Fire Safety Systems",
    desc: "Detection, suppression, and compliance — kitchen hoods, electrical panels, CMC protection, all NBC & NFPA compliant.",
    link: "/products",
  },
  {
    icon: "📷",
    title: "CCTV & Surveillance",
    desc: "HD and AI-enabled camera networks for perimeter security, remote monitoring, and forensic-ready recording.",
    link: "/products",
  },
  {
    icon: "🔒",
    title: "Access Control",
    desc: "Biometric, RFID, and smart card-based entry management — boom barriers, turnstiles, and gate automation.",
    link: "/products",
  },
  {
    icon: "🛡️",
    title: "Managed Security (MSS)",
    desc: "24×7 monitoring, incident response, and compliance reporting for physical and digital threat vectors.",
    link: "/services",
  },
  {
    icon: "🏛️",
    title: "GeM Services",
    desc: "End-to-end Government e-Marketplace onboarding, catalog management, and bid support for sellers.",
    link: "/gemservices",
  },
  {
    icon: "🌿",
    title: "EHS & Pest Control",
    desc: "Environment, Health & Safety consulting, mock drills, safety audits, and licensed pest management.",
    link: "/products",
  },
];

export default function Home() {
  const navigate = useNavigate();

  usePageMeta({
    title: "Kevotalia Technology | Security & Fire Safety Solutions",
    description:
      "Kevotalia Technology provides enterprise-grade security, fire safety, surveillance, and compliance solutions across India.",
  });

  useStructuredData({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kevotalia Technology",
    url: "https://kevotaliatechnology.com",
    logo: "https://kevotaliatechnology.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9531915240",
      contactType: "customer support",
      areaServed: "IN",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No.1, Turf View Shopping Complex, AJC Bose Road, Alipore",
      addressLocality: "Kolkata",
      postalCode: "700022",
      addressCountry: "IN",
    },
    // Update these to real profile URLs once created
    sameAs: [
      "https://www.facebook.com/kevotaliatechnology",
      "https://www.instagram.com/kevotalia",
      "https://www.linkedin.com/company/kevotalia",
    ],
  });

  return (
    <>
      <Hero />
      <AboutUs />

      {/* ── Services Preview ── */}
      <section className="home-services">
        <div className="home-services-header">
          <span className="home-services-eyebrow">What We Do</span>
          <h2>Integrated Safety &amp; Security Solutions</h2>
          <p>
            From fire suppression to surveillance, access control to GeM portal
            management — every solution tailored for your environment.
          </p>
        </div>

        <div className="home-services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="home-service-card"
              onClick={() => navigate(s.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(s.link)}
            >
              <span className="hs-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="hs-arrow">Learn more →</span>
            </div>
          ))}
        </div>

        <div className="home-services-cta">
          <button className="btn-secondary" onClick={() => navigate("/services")}>
            View All Services
          </button>
          <button className="btn-primary" onClick={() => navigate("/products")}>
            Explore Products
          </button>
        </div>
      </section>

      <Workflow />
      <Testimonials />
    </>
  );
}