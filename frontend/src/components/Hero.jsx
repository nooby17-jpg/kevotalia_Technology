import { useNavigate } from "react-router-dom";
import "./../styles/hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper">
      {/* LEFT — copy */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Trusted by Indian Army · Indian Navy · ESIC · Nestle
        </div>

        <h1>
          Securing critical environments
          <br />
          <span className="hero-highlight">with intelligence,</span>
          <br />
          precision, and trust.
        </h1>

        <p>
          Kevotalia Technology delivers integrated fire safety, surveillance,
          access control, and power backup solutions — tailored for enterprises,
          institutions, and government organizations across India.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/products")}>
            Explore Products
          </button>
          <button className="btn-secondary" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>

        {/* Trust badges */}
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-num">500+</span>
            <span className="trust-label">Installations</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">10+</span>
            <span className="trust-label">Years Experience</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">24/7</span>
            <span className="trust-label">Support</span>
          </div>
        </div>
      </div>

      {/* RIGHT — security dashboard illustration */}
      <div className="hero-right">
        <div className="hero-illustration">
          <svg viewBox="0 0 460 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">

            {/* Main dashboard card */}
            <rect x="10" y="10" width="440" height="480" rx="20"
              fill="var(--card)" stroke="var(--border)" strokeWidth="1.5"/>

            {/* Top bar */}
            <rect x="10" y="10" width="440" height="52" rx="20"
              fill="var(--nav-bg)"/>
            <rect x="10" y="42" width="440" height="20"
              fill="var(--nav-bg)"/>

            {/* Top bar dots */}
            <circle cx="40" cy="36" r="6" fill="#ff5f56"/>
            <circle cx="60" cy="36" r="6" fill="#ffbd2e"/>
            <circle cx="80" cy="36" r="6" fill="#27c93f"/>

            {/* Top bar title */}
            <text x="230" y="41" textAnchor="middle"
              fontFamily="Geist, sans-serif" fontSize="12" fontWeight="600"
              fill="var(--heading-sub)">
              Security Operations Dashboard
            </text>

            {/* Status bar */}
            <rect x="30" y="74" width="400" height="36" rx="10"
              fill="var(--highlight-1)" opacity="0.1"
              stroke="var(--highlight-1)" strokeWidth="1"/>
            <circle cx="52" cy="92" r="6" fill="var(--highlight-1)"/>
            <text x="66" y="97" fontFamily="Geist, sans-serif" fontSize="12"
              fontWeight="600" fill="var(--highlight-1)">
              All Systems Protected
            </text>
            <text x="370" y="97" fontFamily="Geist, sans-serif" fontSize="11"
              fill="var(--heading-sub)">
              Live
            </text>
            <circle cx="388" cy="92" r="4" fill="var(--highlight-1)">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            </circle>

            {/* 3 stat mini-cards */}
            {/* Card A — Threats Blocked */}
            <rect x="30" y="126" width="122" height="80" rx="12"
              fill="var(--nav-bg)" stroke="var(--border)" strokeWidth="1"/>
            <text x="42" y="150" fontFamily="Geist, sans-serif" fontSize="11"
              fill="var(--heading-sub)">Threats Blocked</text>
            <text x="42" y="176" fontFamily="Rethink Sans, sans-serif"
              fontSize="26" fontWeight="800" fill="var(--highlight-1)">1,284</text>
            <text x="42" y="196" fontFamily="Geist, sans-serif" fontSize="10"
              fill="var(--highlight-1)">↑ 12% this week</text>

            {/* Card B — Cameras Online */}
            <rect x="169" y="126" width="122" height="80" rx="12"
              fill="var(--nav-bg)" stroke="var(--border)" strokeWidth="1"/>
            <text x="181" y="150" fontFamily="Geist, sans-serif" fontSize="11"
              fill="var(--heading-sub)">Cameras Online</text>
            <text x="181" y="176" fontFamily="Rethink Sans, sans-serif"
              fontSize="26" fontWeight="800" fill="var(--heading-main)">48/48</text>
            <text x="181" y="196" fontFamily="Geist, sans-serif" fontSize="10"
              fill="var(--highlight-1)">100% uptime</text>

            {/* Card C — Access Events */}
            <rect x="308" y="126" width="122" height="80" rx="12"
              fill="var(--nav-bg)" stroke="var(--border)" strokeWidth="1"/>
            <text x="320" y="150" fontFamily="Geist, sans-serif" fontSize="11"
              fill="var(--heading-sub)">Access Events</text>
            <text x="320" y="176" fontFamily="Rethink Sans, sans-serif"
              fontSize="26" fontWeight="800" fill="var(--heading-main)">342</text>
            <text x="320" y="196" fontFamily="Geist, sans-serif" fontSize="10"
              fill="var(--heading-sub)">Today</text>

            {/* Activity feed */}
            <text x="30" y="232" fontFamily="Rethink Sans, sans-serif"
              fontSize="13" fontWeight="700" fill="var(--heading-main)">
              Recent Alerts
            </text>

            {[
              { y: 250, color: "#1eab3f", label: "Access granted — Gate B", time: "09:42 AM", dot: "#1eab3f" },
              { y: 290, color: "#ffbd2e", label: "Motion detected — Warehouse 3", time: "09:38 AM", dot: "#ffbd2e" },
              { y: 330, color: "#1eab3f", label: "Fire panel — All clear", time: "09:31 AM", dot: "#1eab3f" },
              { y: 370, color: "#1eab3f", label: "Visitor check-in — Reception", time: "09:15 AM", dot: "#1eab3f" },
            ].map((row, i) => (
              <g key={i}>
                <rect x="30" y={row.y} width="400" height="34" rx="8"
                  fill="var(--nav-bg)"/>
                <circle cx="48" cy={row.y + 17} r="5" fill={row.dot}/>
                <text x="62" y={row.y + 22} fontFamily="Geist, sans-serif"
                  fontSize="12" fill="var(--heading-main)">{row.label}</text>
                <text x="380" y={row.y + 22} textAnchor="end"
                  fontFamily="Geist, sans-serif" fontSize="11"
                  fill="var(--heading-sub)">{row.time}</text>
              </g>
            ))}

            {/* Shield watermark bottom right */}
            <g transform="translate(330, 410)" opacity="0.06">
              <path d="M60 0 L110 22 L110 64 C110 92 88 114 60 124 C32 114 10 92 10 64 L10 22 Z"
                fill="var(--highlight-1)"/>
            </g>

            {/* Bottom progress bar */}
            <rect x="30" y="426" width="400" height="8" rx="4"
              fill="var(--border)"/>
            <rect x="30" y="426" width="340" height="8" rx="4"
              fill="var(--highlight-1)" opacity="0.7"/>
            <text x="30" y="452" fontFamily="Geist, sans-serif" fontSize="11"
              fill="var(--heading-sub)">Security Score</text>
            <text x="430" y="452" textAnchor="end"
              fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700"
              fill="var(--highlight-1)">94%</text>

          </svg>
        </div>

        {/* Floating alert card */}
        <div className="hero-float-card card-alert">
          <div className="float-icon">🛡️</div>
          <div>
            <strong>System Protected</strong>
            <span>No active threats</span>
          </div>
        </div>

        {/* Floating uptime card */}
        <div className="hero-float-card card-uptime">
          <div className="float-icon">📡</div>
          <div>
            <strong>99.9% Uptime</strong>
            <span>All sensors online</span>
          </div>
        </div>
      </div>
    </section>
  );
}