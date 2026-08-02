import { useEffect } from "react";
import { FaUserTie } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function CTA() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact-form") {
      const form = document.getElementById("contact-form");

      if (!form) return;

      const navbarOffset = 100;

      const top =
        form.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      // Focus the first input after scrolling
      setTimeout(() => {
        const firstInput = form.querySelector("input");
        if (firstInput) {
          firstInput.focus();
        }
      }, 700);
    }
  }),
    [location];

  return (
    <section className="bg-primary py-10 lg:py-15 text-secondary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="h2-heading text-secondary text-3xl lg:text-5xl">
          Ready to Start Your Project?
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-sm lg:text-base leading-8 text-white">
          Tell us what you're building — house, shop, or renovation — and we'll
          guide you through every step, no pressure.
        </p>

        {/* Button */}
        <Link
          to="/contact"
          state={{ scrollTo: "contact-form" }}
          className="mt-7 inline-flex items-center justify-center bg-[#F5A623] hover:bg-[#E09200] text-[#1A1F2E] font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-101 cursor-pointer"
        >
          <FaUserTie className="inline mr-2" size={25} />
          Get Consultation
        </Link>
      </div>
    </section>
  );
}
