import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect} from "react";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import PageSkeleton from "../components/PageSkeleton";

/**
 * Wraps a lazy import with a minimum delay so PageSkeleton
 * is always visible for at least `ms` milliseconds — even on
 * fast dev servers where chunks load in < 10ms.
 */
function lazyWithDelay(importFn, ms = 600) {
  return lazy(() =>
    Promise.all([
      importFn(),
      new Promise((resolve) => setTimeout(resolve, ms)),
    ]).then(([moduleExport]) => moduleExport)
  );
}

// First visit gets full delay so skeleton is seen once per session.
// Subsequent navigations to already-cached chunks feel instant.
const Home        = lazyWithDelay(() => import("../pages/Home"),        600);
const About       = lazyWithDelay(() => import("../pages/About"),       600);
const Clients     = lazyWithDelay(() => import("../pages/Clients"),     600);
const Contact     = lazyWithDelay(() => import("../pages/Contact"),     600);
const Products    = lazyWithDelay(() => import("../pages/Products"),    600);
const Services    = lazyWithDelay(() => import("../pages/Services"),    600);
const Solutions   = lazyWithDelay(() => import("../pages/Solutions"),   600);
const GemServices = lazyWithDelay(() => import("../pages/GemServices"), 600);

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
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/"            element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about"       element={<MainLayout><About /></MainLayout>} />
          <Route path="/clients"     element={<MainLayout><Clients /></MainLayout>} />
          <Route path="/contact"     element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/products"    element={<MainLayout><Products /></MainLayout>} />
          <Route path="/services"    element={<MainLayout><Services /></MainLayout>} />
          <Route path="/solutions"   element={<MainLayout><Solutions /></MainLayout>} />
          <Route path="/gemservices" element={<MainLayout><GemServices /></MainLayout>} />
          <Route path="*"            element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}