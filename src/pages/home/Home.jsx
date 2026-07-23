import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import Projects from '../service/components/Projects'
import { Certifications } from "./components/Certifications";
export function Home() {
  return (
    <div className="">

      <HeroSection />

      <ServiceSection />

      <Projects />

      <Certifications />
    </div>
  );
}