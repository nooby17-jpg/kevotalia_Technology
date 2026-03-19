import useFadeIn from "../../hooks/useFadeIn";

export default function MSS() {
  const ref = useFadeIn();

  const features = [
    { icon: "🔍", title: "24×7 Security Monitoring", desc: "Round-the-clock surveillance of your physical and digital infrastructure with real-time alerting." },
    { icon: "⚡", title: "Incident Detection & Response", desc: "Rapid identification and containment of security incidents to minimise impact and downtime." },
    { icon: "📋", title: "Compliance & Reporting", desc: "Detailed audit-ready reports ensuring adherence to regulatory and contractual security requirements." },
    { icon: "🧠", title: "Threat Intelligence Integration", desc: "Actionable threat feeds integrated into your security posture for proactive defence." },
  ];

  return (
    <section className="service-block section-divider" ref={ref}>
      <div className="service-block-header fade-in-up">
        <div className="service-block-icon">🛡️</div>
        <div>
          <h2>Managed Security Services (MSS)</h2>
          <p className="service-block-desc">
            Kevotalia Technology provides 24×7 managed security services to
            monitor, detect, and respond to cyber and physical security threats —
            so your team can focus on what matters most.
          </p>
        </div>
      </div>

      <div className="service-features-grid">
        {features.map((f, i) => (
          <div className="service-feature-card fade-in-up" key={i}>
            <span className="sf-icon">{f.icon}</span>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}