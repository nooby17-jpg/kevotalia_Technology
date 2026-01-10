import Hero from "../components/Hero";
import AboutUs from "../components/Detailed_Hero/AboutUs";
import Workflow from "../components/Detailed_Hero/Workflow";
import Testimonials from "../components/Detailed_Hero/Testimonials";


import "./../styles/hero.css";
import "./../styles/about.css";
import "./../styles/clients.css";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Workflow />
      <Testimonials />
 
    </>
  );
}
