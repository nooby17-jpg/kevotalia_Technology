export default function IAM() {
  const features = [
    { icon: "👆", title: "Biometric Authentication", desc: "Fingerprint, iris, and facial recognition systems for high-assurance identity verification at every access point." },
    { icon: "🎭", title: "Role-Based Access Control", desc: "Granular permission policies ensuring every user and device accesses only what they are authorised for." },
    { icon: "🔄", title: "User Lifecycle Management", desc: "Automated provisioning and deprovisioning of identities across joiner, mover, and leaver workflows." },
    { icon: "🗂️", title: "Audit & Compliance Logs", desc: "Immutable access logs with real-time export for regulatory audits and forensic investigations." },
  ];

  return (
    <section className="service-block section-divider">
      <div className="service-block-header">
        <div className="service-block-icon">🔑</div>
        <div>
          <h2>Identity & Access Management (IAM)</h2>
          <p className="service-block-desc">
            Secure digital and physical identities across your organisation —
            controlling who gets in, when, and why — using biometric, RFID, and
            role-based access technologies.
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