import { useNavigate } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useFadeIn from "../hooks/useFadeIn";
import "./../styles/clients.css";

const clients = [
  { name: "Birla Corporation",              sector: "Manufacturing",  icon: "🏭" },
  { name: "Blinkit Pvt. Ltd",               sector: "Logistics",      icon: "📦" },
  { name: "Bureau of Mines",                sector: "Government",     icon: "🏛️" },
  { name: "CGHS",                           sector: "Healthcare",     icon: "🏥" },
  { name: "ESIC",                           sector: "Government",     icon: "🏛️" },
  { name: "Govt. of Andaman & Nicobar",     sector: "Government",     icon: "🏝️" },
  { name: "Indian Army",                    sector: "Defence",        icon: "🎖️" },
  { name: "Indian Air Force",               sector: "Defence",        icon: "✈️" },
  { name: "Indian Navy",                    sector: "Defence",        icon: "⚓" },
  { name: "Nestle India Ltd",               sector: "FMCG",           icon: "🏢" },
  { name: "Prosure Technology Pvt. Ltd",    sector: "Technology",     icon: "💻" },
  { name: "Govt. of West Bengal",           sector: "Government",     icon: "🏛️" },
];

const stats = [
  { num: "500+",    label: "Successful Installations", icon: "🏗️" },
  { num: "100%",    label: "Compliance-Focused",       icon: "✅" },
  { num: "24/7",    label: "Support Availability",     icon: "📞" },
  { num: "10+",     label: "Years Experience",         icon: "📅" },
];

export default function Clients() {
  const navigate = useNavigate();
  const statsRef = useFadeIn();
  const gridRef  = useFadeIn();

  usePageMeta({
    title: "Clients | Kevotalia Technology",
    description: "Trusted by government, enterprise, and industrial organizations across India.",
  });

  return (
    <div className="clients-page">

      {/* Hero */}
      <section className="page-hero section-divider">
        <h1>Our Clients</h1>
        <p>
          Trusted by leading organizations across government, enterprise,
          and industrial sectors.
        </p>
      </section>

      {/* Brag + Stats */}
      <section className="clients-highlight section-divider" ref={statsRef}>
        <span className="clients-eyebrow fade-in-up">Our Track Record</span>
        <h2 className="fade-in-up">Building Trust. Delivering Excellence.</h2>
        <p className="fade-in-up">
          Kevotalia Technology has established long-term partnerships with
          some of the most respected organizations in India. Our solutions
          protect mission-critical environments, safeguard people, and
          ensure compliance across industries.
        </p>

        <div className="highlight-stats">
          {stats.map((s, i) => (
            <div className="stat-card fade-in-up" key={i}>
              <span className="stat-card-icon">{s.icon}</span>
              <h3>{s.num}</h3>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Client Grid */}
      <section className="clients-list section-divider" ref={gridRef}>
        <span className="clients-eyebrow fade-in-up">Who We Work With</span>
        <h2 className="fade-in-up">Organizations That Trust Us</h2>

        <div className="clients-grid">
          {clients.map((client, i) => (
            <div className="client-card fade-in-up" key={i}>
              <span className="client-card-icon">{client.icon}</span>
              <strong>{client.name}</strong>
              <span className="client-sector">{client.sector}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta">
        <div className="clients-cta-inner">
          <h2>Join Our Growing Network of Trusted Clients</h2>
          <p>Let's build a safer, smarter, and more secure future together.</p>
          <div className="cta-actions">
            <button className="cta-btn" onClick={() => navigate("/contact")}>
              Become Our Client
            </button>
            <button className="cta-btn-outline" onClick={() => navigate("/about")}>
              Learn About Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}