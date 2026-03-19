import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main
        key={location.pathname}
        className="page-wrapper"
      >
        {children}
      </main>

      <CTABanner />
      <Footer />
    </>
  );
}