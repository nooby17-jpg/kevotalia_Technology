import usePageMeta from "../hooks/usePageMeta";
import "./../styles/clients.css";

export default function Clients() {
    usePageMeta({
    title: "Clients | Kevotalia Technology",
    description:
      "Trusted by government, enterprise, and industrial organizations across India.",
  });
  const clients = [
    "Birla Corporation",
    "Blinkit Pvt. Ltd",
    "Bureau of Mines",
    "CGHS",
    "ESIC",
    "Govt. of Andaman & Nicobar Islands",
    "Indian Army",
    "Indian Air Force",
    "Indian Navy",
    "Nestle India Ltd",
    "Prosure Technology Pvt. Ltd",
    "Govt. of West Bengal",
  ];

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

      {/* Brag Section */}
      <section className="clients-highlight section-divider">
        <h2>Building Trust. Delivering Excellence.</h2>
        <p>
          Kevotalia Technology has established long-term partnerships with
          some of the most respected organizations in India. Our solutions
          protect mission-critical environments, safeguard people, and
          ensure compliance across industries.
        </p>

        <div className="highlight-stats">
          <div>
            <h3>500+</h3>
            <span>Successful Installations</span>
          </div>
          <div>
            <h3>100%</h3>
            <span>Compliance-Focused</span>
          </div>
          <div>
            <h3>24/7</h3>
            <span>Support Availability</span>
          </div>
          <div>
            <h3>10+ Years</h3>
            <span>Industry Experience</span>
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="clients-list section-divider">
        <h2>Organizations That Trust Us</h2>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta">
        <h2>Join Our Growing Network of Trusted Clients</h2>
        <p>
          Let’s build a safer, smarter, and more secure future together.
        </p>
        <button className="cta-btn">Become Our Client</button>
      </section>

    </div>
  );
}
