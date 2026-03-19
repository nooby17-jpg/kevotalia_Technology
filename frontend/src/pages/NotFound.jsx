import { useNavigate } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import "./../styles/notfound.css";

export default function NotFound() {
  const navigate = useNavigate();

  usePageMeta({
    title: "404 – Page Not Found | Kevotalia Technology",
    description: "The page you are looking for does not exist.",
  });

  return (
    <div className="notfound-page">
      {/* dot grid bg */}
      <div className="notfound-bg" />

      <div className="notfound-content">
        {/* Shield broken illustration */}
        <div className="notfound-illustration">
          <svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg" width="120" height="130">
            <path
              d="M60 4 L108 24 L108 66 C108 94 87 116 60 126 C33 116 12 94 12 66 L12 24 Z"
              fill="var(--highlight-1)" opacity="0.1"
              stroke="var(--highlight-1)" strokeWidth="2"
            />
            <path
              d="M60 18 L94 34 L94 66 C94 86 79 102 60 110 C41 102 26 86 26 66 L26 34 Z"
              fill="var(--highlight-1)" opacity="0.15"
            />
            {/* crack line */}
            <path
              d="M55 42 L65 58 L58 66 L70 84"
              fill="none" stroke="var(--highlight-1)"
              strokeWidth="3" strokeLinecap="round"
              opacity="0.7"
            />
            <text x="60" y="75" textAnchor="middle"
              fontFamily="Rethink Sans, sans-serif"
              fontSize="22" fontWeight="800"
              fill="var(--highlight-1)" opacity="0.5">?</text>
          </svg>
        </div>

        <span className="notfound-code">404</span>
        <h1>Page Not Found</h1>
        <p>
          The page you're looking for doesn't exist, was moved, or the URL
          may be incorrect.
        </p>

        <div className="notfound-actions">
          <button className="btn-primary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
          <button className="btn-secondary" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>

        {/* Quick links */}
        <div className="notfound-links">
          <span>Or try:</span>
          {[
            { label: "Products",    path: "/products"    },
            { label: "Services",    path: "/services"    },
            { label: "Solutions",   path: "/solutions"   },
            { label: "GeM Services",path: "/gemservices" },
          ].map((l) => (
            <button key={l.path} className="notfound-quicklink"
              onClick={() => navigate(l.path)}>
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}