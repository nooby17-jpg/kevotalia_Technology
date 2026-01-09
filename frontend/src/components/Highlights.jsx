import "./../styles/highlights.css";

export default function Highlights() {
  return (
    <section className="highlights" id="section2">
      <div className="card">
        <div className="icon">🛡️</div>
        <h3>Services</h3>
        <p>Enterprise‑ready cybersecurity services.</p>
      </div>

      <div className="card">
        <div className="icon">⚙️</div>
        <h3>Solutions</h3>
        <p>End‑to‑end security platforms.</p>
      </div>

      <div className="card">
        <div className="icon">📊</div>
        <h3>Products</h3>
        <p>Scalable compliance & safety tools.</p>
      </div>
    </section>
  );
}
