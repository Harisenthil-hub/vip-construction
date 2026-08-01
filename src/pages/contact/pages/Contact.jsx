import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";
import ProcessSteps from "../components/ProcessSteps";

export default function Contact() {
  return (
    <div>
      <title>Contact Us | VIP Construction</title>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ProcessSteps />

      <CTA />
    </div>
  );
}
