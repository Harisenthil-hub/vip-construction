import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";
import ProcessSteps from "../components/ProcessSteps";
import VideoSection from "../components/VideoSection";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Get a Free Quote from VIP Construction</title>
        <meta
          name="title"
          content="Contact Us | Get a Free Quote from VIP Construction"
        />
        <meta
          name="description"
          content="Talk to VIP Construction for a free site visit & honest quote. Serving Coimbatore, Udumalpet, Tiruppur, Pollachi, Dharapuram & Palani. Call or WhatsApp us today."
        />
        <meta
          name="keywords"
          content="contact VIP Construction, free construction quote Tamil Nadu, construction consultation Coimbatore, book site visit"
        />
        <link
          rel="canonical"
          href="https://vipconstructions.co.in/contact"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vipconstructions.co.in/contact"
        />
        <meta
          property="og:title"
          content="Contact Us | Get a Free Quote from VIP Construction"
        />
        <meta
          property="og:description"
          content="House, shop, office, or renovation — tell us what you're planning. Free site visit, honest quote, no pressure to sign."
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
          content="https://vipconstructions.co.in/contact"
        />
        <meta
          name="twitter:title"
          content="Contact Us | Get a Free Quote from VIP Construction"
        />
        <meta
          name="twitter:description"
          content="Free site visit, honest quote, no pressure. Talk to VIP Construction — serving Coimbatore, Udumalpet, Tiruppur, Pollachi, Dharapuram & Palani."
        />
        <meta
          name="twitter:image"
          content="https://vipconstructions.co.in/vip-construction-twitter-card.png"
        />
      </Helmet>
      <ContactHero />

      <ContactInfo />

      <VideoSection />

      <ContactForm />

      <ProcessSteps />

      <CTA />
    </div>
  );
}
