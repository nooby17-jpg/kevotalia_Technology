export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-left">
        <h1>
          Track insights across the web <br />
          without having to read everything
        </h1>

        <p>
          You tell Feedly AI what’s important to you and it flags the most
          important insights from everywhere, including news sites, blogs, and
          newsletters.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Services</button>
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
