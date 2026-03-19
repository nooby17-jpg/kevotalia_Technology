export default function SOAR() {
  const features = [
    { icon: "🤖", title: "Automated Incident Response", desc: "Pre-built playbooks trigger automated containment actions the moment a threat is detected." },
    { icon: "🔀", title: "Workflow Orchestration", desc: "Connect disparate security tools into unified, streamlined workflows eliminating manual handoffs." },
    { icon: "🔌", title: "SIEM Integration", desc: "Seamless two-way integration with leading SIEM platforms for correlated, context-rich alerting." },
    { icon: "👁️", title: "Operational Visibility", desc: "Centralised dashboards giving SOC teams full situational awareness across every layer of the stack." },
  ];

  return (
    <section className="service-block section-divider">
      <div className="service-block-header">
        <div className="service-block-icon">⚙️</div>
        <div>
          <h2>SOAR — Security Orchestration & Automation</h2>
          <p className="service-block-desc">
            Automate threat response workflows and dramatically reduce mean time
            to respond (MTTR) using modern SOAR frameworks tailored to your
            environment.
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