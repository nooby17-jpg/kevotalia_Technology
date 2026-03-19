export default function ScaleRanking() {
  const rankingFactors = [
    {
      icon: "📦",
      title: "Catalog Optimization",
      desc: "Accurate product categorization, keyword-rich titles, and complete technical specifications to improve discoverability on GeM search.",
    },
    {
      icon: "⭐",
      title: "Seller Rating Improvement",
      desc: "On-time delivery tracking, order fulfilment support, and dispute resolution to maintain and improve your GeM seller star rating.",
    },
    {
      icon: "📊",
      title: "Performance Benchmarking",
      desc: "Regular analysis of your GeM seller dashboard metrics — order acceptance rate, delivery performance, and return rate — versus category benchmarks.",
    },
    {
      icon: "🏆",
      title: "OEM / Brand Authorization",
      desc: "Assistance in obtaining and uploading OEM authorization letters and brand approvals to unlock higher-value tender categories.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing Strategy",
      desc: "Market price analysis and L1 pricing guidance to ensure your bids are competitive without sacrificing margins.",
    },
    {
      icon: "📝",
      title: "Compliance & Documentation",
      desc: "Keeping all certifications, MSME/Udyam registrations, and product compliance documents current to avoid bid disqualifications.",
    },
  ];

  const steps = [
    { step: "01", label: "Profile Audit", desc: "Full review of your existing GeM seller account health and gaps." },
    { step: "02", label: "Catalog Fix", desc: "Correct categories, upload missing specs, and optimize product listings." },
    { step: "03", label: "Bid Strategy", desc: "Identify active tenders matching your catalog and prepare L1-optimized bids." },
    { step: "04", label: "Order Support", desc: "End-to-end fulfilment support to protect your seller rating." },
    { step: "05", label: "Ongoing Monitor", desc: "Monthly performance reviews and proactive compliance updates." },
  ];

  return (
    <section className="products-section section-divider">
      <h2>GeM Scale & Ranking Services</h2>
      <p className="section-subtext">
        Improve your visibility, seller rating, and bid success rate on the
        Government e-Marketplace with our structured scale and ranking support
        program.
      </p>

      {/* Ranking factors grid */}
      <div className="products-grid" style={{ marginTop: "32px" }}>
        {rankingFactors.map((factor, i) => (
          <div key={i} className="product-card">
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>
              {factor.icon}
            </div>
            <h4>{factor.title}</h4>
            <p>{factor.desc}</p>
          </div>
        ))}
      </div>

      {/* Process steps */}
      <div style={{ marginTop: "60px" }}>
        <h3 style={{ fontSize: "22px", marginBottom: "28px", color: "var(--heading-main)" }}>
          Our 5-Step Scale Process
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "20px",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                background: "var(--card)",
                position: "relative",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "var(--highlight-1)",
                  fontFamily: "Rethink Sans, sans-serif",
                  marginBottom: "8px",
                  opacity: "0.4",
                }}
              >
                {s.step}
              </span>
              <strong
                style={{
                  display: "block",
                  fontFamily: "Rethink Sans, sans-serif",
                  fontSize: "15px",
                  color: "var(--heading-main)",
                  marginBottom: "6px",
                }}
              >
                {s.label}
              </strong>
              <p style={{ fontSize: "13px", lineHeight: "1.6" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}