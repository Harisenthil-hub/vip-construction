import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

import AboutHero from "./components/AboutHero";
import CompanyJourney from "./components/CompanyJourney";
import VipInspiration from "./components/VipInspiration";
import OwnerTimeline from "./components/OwnerTimeline";
import AwardsSection from "./components/AwardsSection";
import MissionVision from "./components/MissionVision";
import AboutCTA from "./components/AboutCTA";

export function Aboutus() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Set Page Title for SEO
    document.title = "About Us | VIP Construction - Engineering Excellence";

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Handle hash smooth scrolling if link has anchor (e.g., #journey, #vip-inspiration, #owner-timeline, #awards)
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about-us-page bg-[#0F172A] font-sans relative overflow-x-hidden selection:bg-[#F5A623] selection:text-[#0F172A]">
      {/* 1. HERO */}
      <AboutHero />

      {/* 2. COMPANY JOURNEY */}
      <CompanyJourney />

      {/* 3. VIP MOVIE INSPIRATION */}
      <VipInspiration />

      {/* 4. OWNER TIMELINE */}
      <OwnerTimeline />

      {/* 5. AWARDS */}
      <AwardsSection />

      {/* 6. MISSION & VISION */}
      <MissionVision />

      {/* 7. CTA */}
      <AboutCTA />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-[#F5A623] text-[#0F172A] flex items-center justify-center font-bold shadow-lg hover:bg-[#E09200] transition-all border border-[#0F172A]/20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}

// Alias for capitalization flexibility
export const AboutUs = Aboutus;
export default Aboutus;
