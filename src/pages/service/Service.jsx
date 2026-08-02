import Hero from "./components/Hero";
import ServiceTabs from "./components/ServiceTabs";
import Process from "./components/Process";
import WhyChoose from "./components/WhyChoose";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import { Helmet } from "react-helmet-async";

export function Service() {
  return (
    <>
      <Helmet>
        <title>Construction Services | VIP Construction Tamil Nadu</title>
        <meta
          name="title"
          content="Construction Services | VIP Construction Tamil Nadu"
        />
        <meta
          name="description"
          content="From house construction to loan assistance — explore VIP Construction's full range of building, renovation & design services in Tamil Nadu."
        />
        <meta
          name="keywords"
          content="house construction services, commercial building Tamil Nadu, renovation services Coimbatore, architectural planning, home loan assistance construction"
        />
        <link
          rel="canonical"
          href="https://vipconstructions.co.in/service"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vipconstructions.co.in/service"
        />
        <meta
          property="og:title"
          content="Construction Services | VIP Construction Tamil Nadu"
        />
        <meta
          property="og:description"
          content="House construction, commercial buildings, renovation, interior design, and home loan assistance — all under one roof with VIP Construction."
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
          content="https://vipconstructions.co.in/service"
        />
        <meta
          name="twitter:title"
          content="Construction Services | VIP Construction Tamil Nadu"
        />
        <meta
          name="twitter:description"
          content="House construction, renovation, interior design & loan assistance — complete construction solutions from VIP Construction."
        />
        <meta
          name="twitter:image"
          content="https://vipconstructions.co.in/vip-construction-twitter-card.png"
        />
      </Helmet>
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
