import AboutHero from "./components/AboutHero";
import CompanyJourney from "./components/CompanyJourney";
import VipInspiration from "./components/VipInspiration";
import OwnerTimeline from "./components/OwnerTimeline";
import AboutGallery from "./components/AboutGallery";
import AwardsSection from "./components/AwardsSection";
import MissionVision from "./components/MissionVision";
import AboutCTA from "./components/AboutCTA";
import { Helmet } from "react-helmet-async";

export function Aboutus() {
  return (
    <>
      <Helmet>
        <title>About Us | VIP Construction Since 2019</title>
        <meta name="title" content="About Us | VIP Construction Since 2019" />
        <meta
          name="description"
          content="Real experience, honest building. Meet the team behind VIP Construction and our journey building homes across Tamil Nadu since 2019."
        />
        <meta
          name="keywords"
          content="VIP Construction founder, construction company history Tamil Nadu, about VIP Construction, trusted builders Coimbatore"
        />
        <link
          rel="canonical"
          href="https://vipconstructions.co.in/about-us"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vipconstructions.co.in/about-us"
        />
        <meta
          property="og:title"
          content="About Us | VIP Construction Since 2019"
        />
        <meta
          property="og:description"
          content="From founding VIP Construction in 2019 to 100+ projects delivered — real experience, honest building, and a team that puts clients first."
        />
        <meta
          property="og:image"
          content="https://vipconstructions.co.in/vip-construction-og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="VIP Construction" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://vipconstructions.co.in/about-us"
        />
        <meta
          name="twitter:title"
          content="About Us | VIP Construction Since 2019"
        />
        <meta
          name="twitter:description"
          content="Real experience, honest building — the story behind VIP Construction, Tamil Nadu's trusted builder since 2019."
        />
        <meta
          name="twitter:image"
          content="https://vipconstructions.co.in/vip-construction-twitter-card.png"
        />
      </Helmet>
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
    </>
  );
}

export default Aboutus;
