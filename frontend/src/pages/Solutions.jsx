import usePageMeta from "../hooks/usePageMeta";
import HybridSOC from "../components/solutions/HybridSOC";
import IAM from "../components/solutions/IAM";
import ThreatDetection from "../components/solutions/ThreatDetection";
import "./../styles/solutions.css";

export default function Solutions() {
  usePageMeta({
    title: "Solutions | Kevotalia Technology",
    description:
      "Hybrid SOC, IAM, and threat detection solutions by Kevotalia Technology.",
  });

  return (
    <div className="solutions-page">
      <section className="page-hero section-divider">
        <h1>Our Solutions</h1>
        <p>
          Integrated security and intelligence solutions designed for
          mission-critical environments.
        </p>
      </section>

      <HybridSOC />
      <IAM />
      <ThreatDetection />
    </div>
  );
}
