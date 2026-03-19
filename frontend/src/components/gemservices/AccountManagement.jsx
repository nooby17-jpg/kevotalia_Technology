import useFadeIn from "../../hooks/useFadeIn";

export default function AccountManagement() {
  const ref = useFadeIn();

  const features = [
    { icon: "📝", title: "Seller Registration & Verification", desc: "Complete end-to-end seller onboarding on GeM — from Udyam/MSME registration to OEM authorization upload and profile verification." },
    { icon: "🗂️", title: "Catalog Creation & Approval", desc: "Accurate product listing with correct categories, technical specs, certifications, and images to pass GeM's catalog approval process." },
    { icon: "📋", title: "Compliance Documentation", desc: "Preparation and upload of all mandatory documents — MSME certificate, PAN, GST, trade license, and product compliance certificates." },
    { icon: "📊", title: "Account Health Monitoring", desc: "Ongoing monitoring of your seller dashboard metrics — delivery performance, order acceptance rate, and returns — with timely alerts." },
    { icon: "🔄", title: "Profile Updates & Renewals", desc: "Timely renewal of certifications, price updates, and catalog revisions to keep your GeM account active and compliant." },
    { icon: "🤝", title: "Dedicated Account Support", desc: "A dedicated point of contact to handle all GeM portal queries, disputes, and escalations on your behalf." },
  ];

  return (
    <section className="gem-block section-divider" ref={ref}>
      <div className="gem-block-header fade-in-up">
        <div className="gem-block-icon">🏛️</div>
        <div>
          <span className="gem-eyebrow">GeM Portal Services</span>
          <h2>GeM Account Management</h2>
          <p className="gem-block-desc">
            End-to-end GeM onboarding and ongoing account management for
            government vendors and OEM partners — from registration to
            catalog health and compliance.
          </p>
        </div>
      </div>

      <div className="gem-features-grid">
        {features.map((f, i) => (
          <div className="gem-feature-card fade-in-up" key={i}>
            <span className="gem-feat-icon">{f.icon}</span>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}