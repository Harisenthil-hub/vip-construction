import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import ServiceTabs from "./components/ServiceTabs";
import Process from "./components/Process";
import WhyChoose from "./components/WhyChoose";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";


export function Service() {
  const location = useLocation();

  useEffect(() => {
    // Set Page Title for SEO
    document.title = "Our Services | VIP Construction";
    
    // Smooth scroll to anchor tags on path/hash change
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure layout rendering is complete
        const timer = setTimeout(() => {
          const headerOffset = 90; // sticky header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ServiceTabs />
      <Process />
      <WhyChoose />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}