import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import Projects from '../service/components/Projects'
import Testimonials from '../service/components/Testimonials'
import { Certifications } from "./components/Certifications";
import { CTA } from "./components/CTA";
import Approvals from "./components/Approvals";
export function Home() {
  return (
    <>
      <title>Home | VIP Construction</title>
      <HeroSection />

      <ServiceSection />

      <Approvals />

      <Projects />

      <Certifications />

      <Testimonials />

      <CTA />
    </>
  );
}