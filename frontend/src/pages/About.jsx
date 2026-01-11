import usePageMeta from "../hooks/usePageMeta";
import "./../styles/about.css";

export default function About() {
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
      <section className="about-section section-divider">
        <h2>Who We Are</h2>
        <p>
          Kevotalia Technology is a trusted and growing name in integrated
          security, fire safety and electrical solutions. With a strong
          focus on innovation, reliability, and compliance, we serve
          industrial, commercial, institutional, and government clients
          across India.
        </p>
        <p>
          Our tailored approach ensures that every customer receives
          end-to-end solutions with the latest technology, expert
          installation, and ongoing support.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-section two-col section-divider">
        <div>
          <h2>Our Mission</h2>
          <p>
            To deliver reliable, compliant, and future-ready safety and
            security systems that protect lives, assets, and businesses.
          </p>
        </div>

        <div>
          <h2>Our Vision</h2>
          <p>
            To become a nationally trusted leader in integrated safety and
            automation solutions through innovation and service excellence.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats section-divider">
        <div>
          <h3>500+</h3>
          <p>Installations</p>
        </div>
        <div>
          <h3>10+ Years</h3>
          <p>Industry Experience</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Compliance Focus</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about-section section-divider">
        <h2>Our Core Services</h2>
        <div className="service-grid">
          {[
            "Access Control Systems",
            "Air Curtains",
            "Biometric Attendance Systems",
            "Boom Barriers & Gate Automation",
            "Metal Detectors",
            "CCTV & Surveillance Systems",
            "Kitchen Fire Protection Systems",
            "Electrical Panel Fire Protection",
            "CMC Fire Protection Systems",
            "Power Backup Solutions",
            "Pest Control Services",
            "Digital Signage Solutions",
            "EHS Services",
          ].map((service, i) => (
            <div key={i} className="service-card">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="about-section section-divider">
        <h2>Why Choose Us</h2>
        <ul className="why-list">
          <li>Quality-driven solutions</li>
          <li>Certified products & trained technicians</li>
          <li>On-time project delivery</li>
          <li>AMC / CMC support</li>
          <li>Trusted by leading organizations</li>
        </ul>
      </section>

      {/* INDUSTRIES */}
      <section className="about-section section-divider">
        <h2>Industries We Serve</h2>
        <div className="industry-grid">
          {[
            "Corporate Offices",
            "Manufacturing Units",
            "Warehouses & Logistics",
            "Educational Institutions",
            "Hotels & Restaurants",
            "Hospitals",
            "Government Organizations",
          ].map((industry, i) => (
            <div key={i} className="industry-chip">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="about-section section-divider">
        <h2>Trusted By</h2>
        <div className="client-grid">
          {[
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
          ].map((client, i) => (
            <div key={i} className="client-card">
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let’s Secure, Protect & Empower Your Business</h2>
        <p>Your Safety, Our Priority.</p>
        <button className="cta-btn">Contact Us</button>
      </section>

    </div>
  );
}
