import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import Projects from "../service/components/Projects";
import Testimonials from "../service/components/Testimonials";
import { Certifications } from "./components/Certifications";
import { CTA } from "./components/CTA";
import Approvals from "./components/Approvals";
import { BankScroll } from "./components/BankScroll";
import { Helmet } from "react-helmet-async";
export function Home() {
  return (
    <>
      <Helmet>
        <title>
          VIP Construction | Trusted Home & Building Contractors in Tamil Nadu
        </title>
        <meta
          name="title"
          content="VIP Construction | Trusted Home & Building Contractors in Tamil Nadu"
        />
        <meta
          name="description"
          content="VIP Construction builds homes & commercial spaces across Coimbatore, Udumalpet, Pollachi, Dharapuram & Palani — quality work, honest pricing, since 2019."
        />
        <meta
          name="keywords"
          content="construction company Tamil Nadu, home builders Coimbatore, house construction Udumalpet, villa construction Pollachi, building contractors Palani"
        />
        <link rel="canonical" href="https://vip-construction.vercel.app/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vip-construction.vercel.app/" />
        <meta
          property="og:title"
          content="VIP Construction | Trusted Home & Building Contractors in Tamil Nadu"
        />
        <meta
          property="og:description"
          content="Building homes & commercial spaces across Coimbatore, Udumalpet, Pollachi, Dharapuram & Palani since 2019 — quality work, honest pricing, on-time delivery."
        />
        <meta
          property="og:image"
          content="https://vip-construction.vercel.app/vip-construction-og-image.png.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="VIP Construction" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://vipconstruction.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="VIP Construction | Trusted Home & Building Contractors in Tamil Nadu"
        />
        <meta
          name="twitter:description"
          content="Building homes & commercial spaces across Coimbatore, Udumalpet, Pollachi, Dharapuram & Palani since 2019 — quality work, honest pricing."
        />
        <meta
          name="twitter:image"
          content="https://vip-construction.vercel.app/vip-construction-twitter-card.png"
        />
      </Helmet>
    
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
