import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

/* Pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";

/* Solutions */
import ThreatDetection from "../pages/solutions/ThreatDetection";
import IAM from "../pages/solutions/IAM";
import HybridSOC from "../pages/solutions/HybridSOC";
import GeMLogin from "../pages/solutions/GeM/GeMLogin";
import GeMCreateAccount from "../pages/solutions/GeM/GeMCreateAccount";

/* Services */
import MSS from "../pages/services/MSS";
import SOAR from "../pages/services/SOAR";
import Vulnerability from "../pages/services/Vulnerability";
import PenTesting from "../pages/services/PenTesting";

/* Products */
import Display from "../pages/products/Display";
import ScaleRanking from "../pages/products/ScaleRanking";
import SafetyServices from "../pages/products/SafetyServices";
import SafetyCompliance from "../pages/products/SafetyCompliance";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/clients" element={<MainLayout><Clients /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />

      {/* Solutions */}
      <Route path="/solutions/threat-detection" element={<MainLayout><ThreatDetection /></MainLayout>} />
      <Route path="/solutions/iam" element={<MainLayout><IAM /></MainLayout>} />
      <Route path="/solutions/hybrid-soc" element={<MainLayout><HybridSOC /></MainLayout>} />
      <Route path="/solutions/gem/login" element={<MainLayout><GeMLogin /></MainLayout>} />
      <Route path="/solutions/gem/register" element={<MainLayout><GeMCreateAccount /></MainLayout>} />

      {/* Services */}
      <Route path="/services/mss" element={<MainLayout><MSS /></MainLayout>} />
      <Route path="/services/soar" element={<MainLayout><SOAR /></MainLayout>} />
      <Route path="/services/vulnerability" element={<MainLayout><Vulnerability /></MainLayout>} />
      <Route path="/services/pentesting" element={<MainLayout><PenTesting /></MainLayout>} />

      {/* Products */}
      <Route path="/products/display" element={<MainLayout><Display /></MainLayout>} />
      <Route path="/products/scale-ranking" element={<MainLayout><ScaleRanking /></MainLayout>} />
      <Route path="/products/safety-services" element={<MainLayout><SafetyServices /></MainLayout>} />
      <Route path="/products/compliance" element={<MainLayout><SafetyCompliance /></MainLayout>} />
    </Routes>
  );
}
