import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";

export default function Home() {
  usePageMeta({
    title: "Kevotalia Technology | Security & Fire Safety Solutions",
    description:
      "Kevotalia Technology provides enterprise-grade security, fire safety, surveillance, and compliance solutions across India.",
  });

  useStructuredData({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kevotalia Technology",
    url: "https://kevotaliatechnology.com",
    logo: "https://kevotaliatechnology.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9531915240",
      contactType: "customer support",
      areaServed: "IN",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
    ],
  });

  return (
    <>
      <Hero />
      <AboutUs />
      <Workflow />
      <Testimonials />
    </>
  );
}
