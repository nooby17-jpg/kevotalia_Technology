import { useNavigate, useLocation } from "react-router-dom";
import "./../styles/ctabanner.css";

// Hide on these pages — no point showing CTA where user already is
const HIDE_ON = ["/contact", "/"];

export default function CTABanner() {
  const navigate     = useNavigate();
  const { pathname } = useLocation();

  if (HIDE_ON.includes(pathname)) return null;

  return (
    <div className="cta-banner">
      <div className="cta-banner-bg" />
      <div className="cta-banner-inner">
        <div className="cta-banner-text">
          <h2>Ready to secure your organisation?</h2>
          <p>
            Get a free consultation from our experts — fire safety,
            surveillance, access control, GeM services and more.
          </p>
        </div>
        <div className="cta-banner-actions">
          <button
            className="cta-banner-btn-primary"
            onClick={() => navigate("/contact")}
          >
            Get Free Consultation
          </button>
          <button
            className="cta-banner-btn-outline"
            onClick={() => navigate("/products")}
          >
            View Products →
          </button>
        </div>
      </div>
    </div>
  );
}