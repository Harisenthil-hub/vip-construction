import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import Projects from '../service/components/Projects'
import Testimonials from '../service/components/Testimonials'
import { Certifications } from "./components/Certifications";
import { CTA } from "./components/CTA";
export function Home() {
  return (
    <>

      <HeroSection />

      <ServiceSection />

      <Projects />

      <Certifications />

      <Testimonials />

      <CTA />
    </>
  );
}