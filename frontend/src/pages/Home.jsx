import Hero from "../components/Detailed_Hero/Hero";
import Features from "../components/Detailed_Hero/Features";
import Workflow from "../components/Detailed_Hero/Workflow";
import Testimonials from "../components/Detailed_Hero/Testimonials";
import Footer from "../components/Detailed_Hero/Footer";

import "./../styles/hero.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Workflow />
      <Testimonials />
      <Footer />
    </>
  );
}
