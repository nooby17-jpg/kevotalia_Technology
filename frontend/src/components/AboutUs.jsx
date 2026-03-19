import { useNavigate } from "react-router-dom";
import "./../styles/aboutus.css";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <section className="aboutUs-wrapper">
      {/* LEFT — SVG Illustration */}
      <div className="col-1">
        <div className="about-illustration">
          <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">

            {/* Background card */}
            <rect x="30" y="30" width="420" height="320" rx="20" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5"/>

            {/* Top accent bar */}
            <rect x="30" y="30" width="420" height="8" rx="8" fill="var(--highlight-1)" opacity="0.7"/>

            {/* Shield icon — center */}
            <g transform="translate(190, 60)">
              <path
                d="M50 0 L90 18 L90 52 C90 76 72 96 50 104 C28 96 10 76 10 52 L10 18 Z"
                fill="var(--highlight-1)"
                opacity="0.15"
                stroke="var(--highlight-1)"
                strokeWidth="2"
              />
              <path
                d="M50 12 L78 26 L78 52 C78 70 66 84 50 92 C34 84 22 70 22 52 L22 26 Z"
                fill="var(--highlight-1)"
                opacity="0.25"
              />
              {/* Checkmark inside shield */}
              <polyline
                points="36,52 46,64 66,40"
                fill="none"
                stroke="var(--highlight-1)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Stat cards row */}
            <g transform="translate(50, 185)">
              {/* Card 1 */}
              <rect width="100" height="70" rx="12" fill="var(--highlight-1)" opacity="0.1" stroke="var(--highlight-1)" strokeWidth="1"/>
              <text x="50" y="30" textAnchor="middle" fontFamily="Rethink Sans, sans-serif" fontWeight="800" fontSize="22" fill="var(--highlight-1)">500+</text>
              <text x="50" y="52" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="11" fill="var(--heading-sub)">Installations</text>

              {/* Card 2 */}
              <rect x="120" width="100" height="70" rx="12" fill="var(--highlight-1)" opacity="0.1" stroke="var(--highlight-1)" strokeWidth="1"/>
              <text x="170" y="30" textAnchor="middle" fontFamily="Rethink Sans, sans-serif" fontWeight="800" fontSize="22" fill="var(--highlight-1)">10+</text>
              <text x="170" y="52" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="11" fill="var(--heading-sub)">Years Experience</text>

              {/* Card 3 */}
              <rect x="240" width="100" height="70" rx="12" fill="var(--highlight-1)" opacity="0.1" stroke="var(--highlight-1)" strokeWidth="1"/>
              <text x="290" y="30" textAnchor="middle" fontFamily="Rethink Sans, sans-serif" fontWeight="800" fontSize="22" fill="var(--highlight-1)">24/7</text>
              <text x="290" y="52" textAnchor="middle" fontFamily="Geist, sans-serif" fontSize="11" fill="var(--heading-sub)">Support</text>
            </g>

            {/* Service tags */}
            <g transform="translate(50, 278)">
              {[
                { label: "Fire Safety", x: 0 },
                { label: "CCTV & Surveillance", x: 96 },
                { label: "Access Control", x: 242 },
              ].map((tag, i) => (
                <g key={i} transform={`translate(${tag.x}, 0)`}>
                  <rect
                    width={tag.label.length * 7.2 + 20}
                    height="28"
                    rx="14"
                    fill="var(--highlight-4)"
                    opacity="0.6"
                  />
                  <text
                    x={(tag.label.length * 7.2 + 20) / 2}
                    y="18"
                    textAnchor="middle"
                    fontFamily="Geist, sans-serif"
                    fontWeight="600"
                    fontSize="11"
                    fill="var(--highlight-3)"
                  >
                    {tag.label}
                  </text>
                </g>
              ))}
            </g>

            {/* Second row tags */}
            <g transform="translate(50, 314)">
              {[
                { label: "Power Backup", x: 0 },
                { label: "Boom Barriers", x: 110 },
                { label: "EHS Services", x: 214 },
              ].map((tag, i) => (
                <g key={i} transform={`translate(${tag.x}, 0)`}>
                  <rect
                    width={tag.label.length * 7.2 + 20}
                    height="28"
                    rx="14"
                    fill="var(--highlight-4)"
                    opacity="0.6"
                  />
                  <text
                    x={(tag.label.length * 7.2 + 20) / 2}
                    y="18"
                    textAnchor="middle"
                    fontFamily="Geist, sans-serif"
                    fontWeight="600"
                    fontSize="11"
                    fill="var(--highlight-3)"
                  >
                    {tag.label}
                  </text>
                </g>
              ))}
            </g>

            {/* Decorative dots */}
            <circle cx="440" cy="60" r="5" fill="var(--highlight-1)" opacity="0.4"/>
            <circle cx="455" cy="75" r="3" fill="var(--highlight-1)" opacity="0.25"/>
            <circle cx="430" cy="78" r="3" fill="var(--highlight-1)" opacity="0.25"/>
          </svg>
        </div>
      </div>

      {/* RIGHT — Text content */}
      <div className="col-2">
        <p className="about-eyebrow">About Us</p>
        <h2>We Are Kevotalia Technology</h2>
        <p>
          A trusted and growing name in integrated security, fire safety and
          electrical solutions. With a focus on innovation, reliability and
          compliance, we serve industrial, commercial, institutional, and
          government clients across India.
        </p>
        <p style={{ marginTop: "12px" }}>
          Our tailored approach ensures every customer receives end-to-end
          solutions with the latest technology, expert installation, and
          ongoing support.
        </p>
        <button className="btn-primary" onClick={() => navigate("/about")}>
          Know More
        </button>
      </div>
    </section>
  );
}