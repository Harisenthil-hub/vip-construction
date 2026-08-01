import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutHero from "./components/AboutHero";
import CompanyJourney from "./components/CompanyJourney";
import VipInspiration from "./components/VipInspiration";
import OwnerTimeline from "./components/OwnerTimeline";
import AboutGallery from "./components/AboutGallery";
import AwardsSection from "./components/AwardsSection";
import MissionVision from "./components/MissionVision";
import AboutCTA from "./components/AboutCTA";

export function Aboutus() {
  const location = useLocation();

  useEffect(() => {
    // Set Page Title for SEO
    document.title = "About Us | VIP Construction - Engineering Excellence";

    // Handle hash smooth scrolling if link has anchor (e.g., #journey, #vip-inspiration, #owner-timeline, #gallery, #awards)
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          const headerOffset = 80;
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
    <div className="about-us-page bg-[#0F172A] font-sans relative overflow-x-hidden selection:bg-[#F5A623] selection:text-[#0F172A]">
      {/* 1. HERO */}
      <AboutHero />

      {/* 2. COMPANY JOURNEY */}
      <CompanyJourney />

      {/* 3. VIP MOVIE INSPIRATION */}
      <VipInspiration />

      {/* 4. OWNER TIMELINE (Founder's Track Record) */}
      <OwnerTimeline />

      {/* 5. PROJECT & SITE GALLERY */}
      <AboutGallery />

      {/* 6. AWARDS */}
      <AwardsSection />

      {/* 7. MISSION & VISION */}
      <MissionVision />

      {/* 8. CTA */}
      <AboutCTA />
    </div>
  );
}

// Alias for capitalization flexibility
export const AboutUs = Aboutus;
export default Aboutus;
