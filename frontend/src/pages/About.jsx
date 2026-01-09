import "./../styles/about.css";

export default function About() {
  return (
    <section className="hero">
      <div className="hero-content">
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
          <button className="btn-primary">Get started for free</button>
          <button className="btn-secondary">Start enterprise trial</button>
        </div>
      </div>

      <div className="hero-image">
        <div className="mockup-card">
          <div className="mockup-header"></div>
          <div className="mockup-body">
            <div className="mockup-row"></div>
            <div className="mockup-row"></div>
            <div className="mockup-row"></div>
            <div className="mockup-row"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
