import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Loader from "../components/Loader";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Clients = lazy(() => import("../pages/Clients"));
const Contact = lazy(() => import("../pages/Contact"));
const Products = lazy(() => import("../pages/Products"));
const Services = lazy(() => import("../pages/Services"));
const Solutions = lazy(() => import("../pages/Solutions"));
const GemServices = lazy(() => import("../pages/GemServices"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <Loader/>
        }
      >
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/clients" element={<MainLayout><Clients /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="/solutions" element={<MainLayout><Solutions /></MainLayout>} />
          <Route path="/gemservices" element={<MainLayout><GemServices /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
