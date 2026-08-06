import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FloatingContact() {
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButtons(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed right-4 md:right-6 bottom-3 md:bottom-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        showButtons
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      } `}
    >
      {/* WhatsApp */}
      <Link
        to="https://wa.me/919080273030"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="contact-pulse group h-10 w-10 lg:h-13 lg:w-13 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105  hover:shadow-2xl "
      >
        <FaWhatsapp className="text-2xl text-white transition-transform duration-300 group-hover:rotate-12" />
      </Link>

      {/* Call */}
      <Link
        to="tel:+919080273030"
        aria-label="Call Us"
        className="contact-pulse group h-10 w-10 lg:h-13 lg:w-13 rounded-full bg-primary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl "
      >
        <FaPhoneAlt className="text-white transition-transform duration-300 group-hover:rotate-12" />
      </Link>
    </div>
  );
}
