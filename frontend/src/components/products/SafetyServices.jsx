export default function SafetyServices() {
  const services = [
    {
      icon: "🐜",
      name: "Pest Control Services",
      desc: "Licensed general pest management including rodent control, termite treatment, and fumigation for warehouses, offices, and food-processing units.",
      tags: ["Residential", "Commercial", "Industrial"],
    },
    {
      icon: "🌿",
      name: "EHS Services",
      desc: "Environment, Health & Safety consulting — risk assessments, legal compliance reviews, incident investigation, and EHS management system implementation.",
      tags: ["ISO 14001", "ISO 45001", "OHSAS"],
    },
    {
      icon: "🔧",
      name: "AMC / CMC Support",
      desc: "Annual and Comprehensive Maintenance Contracts for all installed safety and security systems — scheduled servicing, emergency callouts, and spare parts management.",
      tags: ["Preventive", "Corrective", "24×7 Support"],
    },
    {
      icon: "🏗️",
      name: "Site Safety Management",
      desc: "On-site safety officer deployment, PPE compliance monitoring, and construction site hazard management for large-scale project environments.",
      tags: ["Construction", "Manufacturing", "Government"],
    },
    {
      icon: "📢",
      name: "Public Address & Evacuation Systems",
      desc: "Integrated PA and emergency voice alarm systems for orderly evacuation in malls, hospitals, industrial plants, and public buildings.",
      tags: ["Voice Alarm", "PA System", "Mass Notification"],
    },
    {
      icon: "💡",
      name: "Emergency Lighting Solutions",
      desc: "Battery-backed emergency lighting and exit signage ensuring safe egress during power failures, compliant with IS 3646 standards.",
      tags: ["Exit Signs", "Escape Lighting", "IS 3646"],
    },
  ];

  return (
    <section className="products-section section-divider">
      <h2>Safety Services</h2>
      <p className="section-subtext">
        Integrated on-site safety services covering pest management, EHS
        compliance, emergency preparedness, and ongoing maintenance — keeping
        your facility safe, compliant, and audit-ready.
      </p>

      <div className="products-grid" style={{ marginTop: "32px" }}>
        {services.map((service, i) => (
          <div key={i} className="product-card">
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>
              {service.icon}
            </div>
            <h4>{service.name}</h4>
            <p style={{ marginBottom: "14px" }}>{service.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {service.tags.map((tag, t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    background: "var(--highlight-4)",
                    color: "var(--highlight-3)",
                    fontFamily: "Geist, sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}