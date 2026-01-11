import usePageMeta from "../hooks/usePageMeta"; // ✅ MISSING IMPORT
import MSS from "../components/services/MSS";
import PenTesting from "../components/services/PenTesting";
import SOAR from "../components/services/SOAR";
import Vulnerability from "../components/services/Vulnerability";
import "./../styles/services.css";

export default function Services() {
  usePageMeta({
    title: "Services | Kevotalia Technology",
    description:
      "Managed security services, penetration testing, SOAR, and vulnerability management services.",
  });

  return (
    <div className="services-page">
      <section className="page-hero section-divider">
        <h1>Services Provided By Kevotalia Technology</h1>
        <p>
          Integrated security, fire safety, and electrical solutions — built on
          trust, precision, and reliability.
        </p>
      </section>

      <MSS />
      <PenTesting />
      <SOAR />
      <Vulnerability />
    </div>
  );
}
