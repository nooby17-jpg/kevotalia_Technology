export default function ThreatDetection() {
  const features = [
    { icon: "🔔", title: "Real-time Alerts", desc: "Instant multi-channel alerting the moment anomalous behaviour is detected across any monitored system." },
    { icon: "🤖", title: "AI-assisted Threat Analysis", desc: "Machine learning models that reduce false positives and surface only high-confidence, actionable threats." },
    { icon: "📷", title: "Integrated Surveillance", desc: "CCTV, motion sensors, and access control feeds unified into a single threat-detection layer." },
    { icon: "📝", title: "Incident Reporting", desc: "Structured post-incident reports with root-cause analysis, timeline reconstruction, and remediation steps." },
  ];

  return (
    <section className="service-block section-divider">
      <div className="service-block-header">
        <div className="service-block-icon">🎯</div>
        <div>
          <h2>Threat Detection & Response</h2>
          <p className="service-block-desc">
            Detect, analyse, and neutralise cyber and physical threats before they
            impact operations — using AI-assisted analysis and integrated
            surveillance across your environment.
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