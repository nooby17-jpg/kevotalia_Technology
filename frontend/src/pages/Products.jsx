import usePageMeta from "../hooks/usePageMeta";
import Display from "../components/products/Display";
import SafetyCompliance from "../components/products/SafetyCompliance";
import SafetyServices from "../components/products/SafetyServices";
import ScaleRanking from "../components/products/ScaleRanking";
import "./../styles/products.css";

export default function Products() {
  usePageMeta({
    title: "Products | Kevotalia Technology",
    description:
      "Fire safety, surveillance, compliance, and enterprise security products.",
  });

  return (
    <div className="products-page">
      <section className="page-hero section-divider">
        <h1>Our Products</h1>
        <p>
          Trusted, compliant, and scalable safety and security products.
        </p>
      </section>

      <Display />
      <SafetyCompliance />
      <SafetyServices />
      <ScaleRanking />
    </div>
  );
}
