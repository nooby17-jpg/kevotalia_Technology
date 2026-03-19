import "./../styles/pageskeleton.css";

/**
 * PageSkeleton — shown by Suspense during lazy page loads.
 * Always visible for at least 600ms thanks to lazyWithDelay in AppRouter.
 * Matches the real page layout: sticky navbar + hero + card grids.
 */
export default function PageSkeleton() {
  return (
    <div className="skeleton-page">

      {/* ── Sticky navbar bar ── */}
      <div className="skeleton-nav">
        <div className="sk-bar" style={{ width: "160px", height: "22px", borderRadius: "6px" }} />
        <div className="skeleton-nav-links">
          {[72, 54, 66, 60, 72, 84, 54, 64].map((w, i) => (
            <div key={i} className="sk-bar"
              style={{ width: `${w}px`, height: "12px", animationDelay: `${i * 0.07}s` }} />
          ))}
        </div>
      </div>

      {/* ── Page hero ── */}
      <div className="skeleton-hero">
        <div className="sk-bar mx-auto"
          style={{ width: "300px", height: "46px", borderRadius: "10px", marginBottom: "18px" }} />
        <div className="sk-bar mx-auto"
          style={{ width: "440px", maxWidth: "90%", height: "16px", marginBottom: "10px", animationDelay: "0.1s" }} />
        <div className="sk-bar mx-auto"
          style={{ width: "360px", maxWidth: "80%", height: "16px", animationDelay: "0.2s" }} />
      </div>

      {/* ── Divider ── */}
      <div className="skeleton-divider" />

      {/* ── Section 1 — 4-col card grid ── */}
      <div className="skeleton-section">
        <div className="sk-bar" style={{ width: "110px", height: "11px", marginBottom: "10px", animationDelay: "0.05s" }} />
        <div className="sk-bar" style={{ width: "240px", height: "26px", marginBottom: "28px", animationDelay: "0.1s" }} />
        <div className="skeleton-grid cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="skeleton-card" key={i}
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="sk-bar"
                style={{ width: "40px", height: "40px", borderRadius: "12px", marginBottom: "16px", animationDelay: `${i * 0.08}s` }} />
              <div className="sk-bar"
                style={{ width: "65%", height: "14px", marginBottom: "10px", animationDelay: `${0.1 + i * 0.08}s` }} />
              <div className="sk-bar"
                style={{ width: "100%", height: "11px", marginBottom: "7px", animationDelay: `${0.15 + i * 0.08}s` }} />
              <div className="sk-bar"
                style={{ width: "80%", height: "11px", animationDelay: `${0.2 + i * 0.08}s` }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 2 — 3-col card grid ── */}
      <div className="skeleton-section">
        <div className="sk-bar"
          style={{ width: "190px", height: "22px", marginBottom: "24px", animationDelay: "0.15s" }} />
        <div className="skeleton-grid cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="skeleton-card" key={i}>
              <div className="sk-bar"
                style={{ width: "100%", height: "11px", marginBottom: "8px", animationDelay: `${i * 0.1}s` }} />
              <div className="sk-bar"
                style={{ width: "78%", height: "11px", marginBottom: "8px", animationDelay: `${0.08 + i * 0.1}s` }} />
              <div className="sk-bar"
                style={{ width: "55%", height: "11px", animationDelay: `${0.16 + i * 0.1}s` }} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}