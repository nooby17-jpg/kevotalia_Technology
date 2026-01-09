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
          <button className="btn-primary">Get started for free</button>
          <button className="btn-secondary">Start enterprise trial</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="ui-mock">
          <div className="ui-sidebar">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>

          <div className="ui-main">
            <div className="ui-header">
              <span className="tag">Today in Insurtech</span>
            </div>

            <div className="ui-card"></div>
            <div className="ui-card"></div>
            <div className="ui-card"></div>
            <div className="ui-card"></div>
          </div>
        </div>

        <div className="floating-card card-1"></div>
        <div className="floating-card card-2"></div>
      </div>
    </section>
  );
}
