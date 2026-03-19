import useFadeIn from "../../hooks/useFadeIn";

export default function BidsServices() {
  const ref = useFadeIn();

  const features = [
    { icon: "🔎", title: "Bid Identification & Analysis", desc: "Systematic scanning of active GeM tenders matching your product catalog, with feasibility and competition analysis for each opportunity." },
    { icon: "📄", title: "Technical & Commercial Submissions", desc: "End-to-end preparation of bid documents — technical datasheets, product compliance certificates, and commercial offers." },
    { icon: "💰", title: "L1 Optimisation Strategy", desc: "Competitive pricing analysis based on market rates and competitor bids, designed to help you win at the lowest evaluated price." },
    { icon: "📦", title: "Order Fulfilment Support", desc: "Post-award support covering delivery coordination, dispatch documentation, MSME invoice compliance, and GeM portal order closure." },
    { icon: "📈", title: "Bid Win Rate Improvement", desc: "Performance analysis of past bids with actionable insights to improve your win rate on future tenders." },
    { icon: "⚖️", title: "Grievance & Dispute Handling", desc: "Professional support for filing and resolving bid rejections, order disputes, and GeM portal grievances." },
  ];

  const steps = [
    { step: "01", label: "Bid Shortlisting",   desc: "We identify matching active tenders from GeM for your catalog." },
    { step: "02", label: "Document Prep",       desc: "Technical & commercial bid documents prepared and reviewed." },
    { step: "03", label: "Submission",          desc: "Bids submitted on GeM portal before deadline with all compliance." },
    { step: "04", label: "L1 Monitoring",       desc: "Live price monitoring to respond to counter-bids in real time." },
    { step: "05", label: "Order & Delivery",    desc: "Fulfilment support from order receipt to delivery confirmation." },
  ];

  return (
    <section className="gem-block section-divider" ref={ref}>
      <div className="gem-block-header fade-in-up">
        <div className="gem-block-icon">🏆</div>
        <div>
          <span className="gem-eyebrow">Tender Support</span>
          <h2>GeM Bidding & Tender Support</h2>
          <p className="gem-block-desc">
            Professional bid participation support — from opportunity
            identification and document preparation to L1 pricing strategy
            and post-award fulfilment.
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

      {/* Process steps */}
      <div className="gem-process fade-in-up">
        <h3>Our Bidding Process</h3>
        <div className="gem-steps">
          {steps.map((s, i) => (
            <div className="gem-step" key={i}>
              <span className="gem-step-num">{s.step}</span>
              <strong>{s.label}</strong>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}