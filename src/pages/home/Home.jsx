import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import Projects from '../service/components/Projects'
export function Home() {
  return (
    <div className="">

      <HeroSection />

      <ServiceSection />

      <Projects />
    </div>
  );
}