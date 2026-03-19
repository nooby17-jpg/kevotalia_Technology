export default function SafetyCompliance() {
  const categories = [
    {
      title: "Fire Detection & Alarm Systems",
      icon: "🔥",
      items: [
        {
          name: "Conventional Fire Alarm Panel",
          desc: "Zone-based fire detection panels suitable for small to mid-sized facilities with reliable alert systems.",
        },
        {
          name: "Addressable Fire Alarm System",
          desc: "Intelligent loop-based panels that pinpoint the exact location of a triggered detector for faster response.",
        },
        {
          name: "Smoke & Heat Detectors",
          desc: "Optical smoke detectors and rate-of-rise heat sensors for early-warning fire detection across all environments.",
        },
        {
          name: "Manual Call Points & Sounders",
          desc: "Break-glass call points and high-decibel sounders for immediate manual activation and public alert.",
        },
      ],
    },
    {
      title: "Fire Suppression Systems",
      icon: "💧",
      items: [
        {
          name: "Kitchen Hood Fire Suppression",
          desc: "Wet chemical suppression systems designed specifically for commercial kitchen cooking equipment.",
        },
        {
          name: "Electrical Panel Fire Protection",
          desc: "Automatic suppression units installed inside MCC panels, server rooms, and electrical enclosures.",
        },
        {
          name: "CMC Fire Protection Systems",
          desc: "Clean agent and CO₂-based suppression for sensitive equipment, data centres, and archives.",
        },
        {
          name: "Sprinkler Systems",
          desc: "Wet and dry pipe sprinkler networks compliant with NBC and NFPA standards for industrial facilities.",
        },
      ],
    },
    {
      title: "Safety Compliance & Audits",
      icon: "📋",
      items: [
        {
          name: "Fire NOC Documentation",
          desc: "End-to-end support for obtaining Fire No-Objection Certificates from local fire authorities.",
        },
        {
          name: "Mock Drill & Training",
          desc: "Structured fire evacuation drills and staff safety training programs for regulatory compliance.",
        },
        {
          name: "Safety Audit & Inspection",
          desc: "Comprehensive on-site safety audits with detailed gap analysis reports and remediation guidance.",
        },
        {
          name: "AMC / CMC Contracts",
          desc: "Annual and comprehensive maintenance contracts ensuring all fire safety systems remain operational and certified.",
        },
      ],
    },
  ];

  return (
    <section className="products-section section-divider">
      <h2>Fire Safety & Compliance Products</h2>
      <p className="section-subtext">
        Certified fire detection, suppression, and compliance solutions for
        industrial, commercial, and government facilities — fully compliant with
        NBC, IS, and NFPA standards.
      </p>

      {categories.map((cat, i) => (
        <div key={i} className="product-category">
          <h3>
            <span style={{ marginRight: "10px" }}>{cat.icon}</span>
            {cat.title}
          </h3>
          <div className="products-grid">
            {cat.items.map((item, j) => (
              <div key={j} className="product-card">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}