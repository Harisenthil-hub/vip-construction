import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import Projects from "../service/components/Projects";
import Testimonials from "../service/components/Testimonials";
import { Certifications } from "./components/Certifications";
import { CTA } from "./components/CTA";
import Approvals from "./components/Approvals";
import { BankScroll } from "./components/BankScroll";
export function Home() {
  return (
    <>
    
      <HeroSection />

      <ServiceSection />

      <Approvals />

      <BankScroll />

      <Projects />

      <Certifications />

      <Testimonials />

      <CTA />
    </>
  );
}
