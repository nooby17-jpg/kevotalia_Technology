export default function HybridSOC() {
  const features = [
    { icon: "🕐", title: "24×7 Threat Monitoring", desc: "Continuous monitoring of physical and digital threat vectors by trained security analysts around the clock." },
    { icon: "⚡", title: "Incident Detection & Response", desc: "Automated and analyst-driven response playbooks that contain incidents before they escalate." },
    { icon: "📋", title: "Compliance & Reporting", desc: "Structured reporting aligned with government and enterprise compliance mandates." },
    { icon: "🔗", title: "SIEM + SOC Integration", desc: "Deep integration with leading SIEM platforms for correlated, high-fidelity alerting." },
  ];

  return (
    <section className="service-block section-divider">
      <div className="service-block-header">
        <div className="service-block-icon">🏢</div>
        <div>
          <h2>Hybrid SOC — Security Operations Center</h2>
          <p className="service-block-desc">
            Kevotalia's Hybrid SOC blends on-premise security infrastructure with
            cloud-driven intelligence — delivering real-time threat monitoring,
            detection, and response for enterprises, government bodies, and
            critical infrastructure.
          </p>
        </div>
      </div>

      <div className="service-features-grid">
        {features.map((f, i) => (
          <div className="service-feature-card" key={i}>
            <span className="sf-icon">{f.icon}</span>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}