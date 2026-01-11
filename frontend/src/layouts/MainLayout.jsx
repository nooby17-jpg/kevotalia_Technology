import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* Keyed wrapper triggers animation on route change */}
      <main
        key={location.pathname}
        className="page-wrapper"
        style={{ paddingTop: "0px" }} // fixed navbar offset
      >
        {children}
      </main>

      <Footer />
    </>
  );
}
