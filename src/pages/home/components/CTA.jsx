import { FaHelmetSafety } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export function CTA() {
  return (
    <section className="bg-secondary">
      <div className="px-4 py-5 sm:px-6 lg:px-1 sm:py-6 lg:py-7 max-w-[1200px] mx-auto flex lg:items-center lg:justify-between flex-col lg:flex-row gap-4 sm:gap-6">
        {/* LEFT CONTAINER */}
        <div className="flex gap-3 items-start lg:items-center">
          {/* ICON DIV */}
          <div className="shrink-0 bg-primary/15 p-2 sm:p-3 rounded-lg">
            <FaHelmetSafety className="text-white w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* TEXT DIV */}
          <div>
            <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-white leading-tight">
              Ready to Start Your Construction?
            </h3>
            <p className="text-xs sm:text-sm text-white mt-0.5 sm:mt-1">
              Get a free consultation with VIP Construction, Tamil Nadu's
              trusted builder.
            </p>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="flex flex-row gap-2.5 sm:gap-4 lg:shrink-0">
          {/* ACTION BUTTONS */}
          <Link
            to="tel:+919080273030"
            className="flex justify-center flex-1 sm:flex-initial items-center gap-1.5 text-white bg-primary px-3.5 py-2.5 text-xs sm:text-base sm:px-4 sm:py-3 font-semibold rounded hover:-translate-y-1 transition ease-in-out duration-300"
          >
            <FaPhoneAlt size={15} className="text-white inline py-0" />
            <span>Contact Us</span>
          </Link>
          <Link
            to="/project"
            className="flex items-center justify-center gap-1.5 flex-1 sm:flex-initial bg-transparent border px-3.5 py-2.5 text-xs sm:text-base sm:px-4 sm:py-3 font-semibold text-white border-white/50 hover:border-white/80 hover:bg-white/10 py-3 rounded hover:-translate-y-1 transition ease-in-out duration-300"
          >
            View Projects <FaArrowRight size={15} className="inline" />
          </Link>
        </div>
      </div>
    </section>
  );
}
