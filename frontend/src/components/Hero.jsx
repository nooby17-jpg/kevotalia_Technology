import { useNavigate } from "react-router-dom";
import "./../styles/hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper">
      <div className="hero-left">
        <h1>
          Securing critical environments
          <br />
          with intelligence, precision, and trust.
        </h1>

        <p>
          Kevotalia Technology offers integrated fire safety, surveillance, access
          control, and power backup solutions—tailored for enterprises,
          institutions, and government organizations across India.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/products")}
          >
            Get Started
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="ui-mock">
          <div className="ui-sidebar">
            <div className="nav-dot" />
            <div className="nav-dot" />
            <div className="nav-dot" />
            <div className="nav-dot" />
          </div>

          <div className="ui-main">
            <div className="ui-header">
              <span className="tag">Today in Insurtech</span>
              <span className="filter">Filtered by AI</span>
            </div>

            {[1, 2, 3, 4].map((i) => (
              <div className="feed-card" key={i}>
                <div className="feed-title" />
                <div className="feed-meta" />
              </div>
            ))}
          </div>
        </div>

        <div className="floating-card card-1">
          <div className="mini-title" />
          <div className="mini-line" />
        </div>

        <div className="floating-card card-2">
          <div className="mini-title" />
          <div className="mini-line" />
        </div>
      </div>
    </section>
  );
}
