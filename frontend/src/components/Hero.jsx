import "./../styles/hero.css";
export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-left">
        <h1>
          Securing critical environments 
          with intelligence, precision,<br/> and trust.
        </h1>
        <p>
          Kevotalia Technology offers integrated fire safety, surveillance, access
          control, and power backup solutions—tailored for enterprises, institutions,
          and government organizations across India.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="ui-mock">
          <div className="ui-sidebar">
            <div className="nav-dot"></div>
            <div className="nav-dot"></div>
            <div className="nav-dot"></div>
            <div className="nav-dot"></div>
          </div>

          <div className="ui-main">
            <div className="ui-header">
              <span className="tag">Today in Insurtech</span>
              <span className="filter">Filtered by AI</span>
            </div>

            <div className="feed-card">
              <div className="feed-title"></div>
              <div className="feed-meta"></div>
            </div>

            <div className="feed-card">
              <div className="feed-title"></div>
              <div className="feed-meta"></div>
            </div>

            <div className="feed-card">
              <div className="feed-title"></div>
              <div className="feed-meta"></div>
            </div>

            <div className="feed-card">
              <div className="feed-title"></div>
              <div className="feed-meta"></div>
            </div>
          </div>
        </div>

        <div className="floating-card card-1">
          <div className="mini-title"></div>
          <div className="mini-line"></div>
        </div>

        <div className="floating-card card-2">
          <div className="mini-title"></div>
          <div className="mini-line"></div>
        </div>
      </div>
    </section>
  );
}
