import { FaHelmetSafety } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export function CTA() {
  return (
    <section className="bg-secondary">
      <div className="px-4 sm:px-6 lg:px-0 py-6 lg:py-7 max-w-[1200px] mx-auto flex lg:items-center lg:justify-between flex-col lg:flex-row gap-6">
        {/* LEFT CONTAINER */}
        <div className="flex gap-3 items-start lg:items-center">
          {/* ICON DIV */}
          <div className="shrink-0 bg-primary/15 p-3 rounded-lg">
            <FaHelmetSafety size={30} className="text-white" />
          </div>

          {/* TEXT DIV */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Let's Build Something Great Together!
            </h3>
            <p className="text-sm text-white mt-1">
              Partner with VIP Constructions for your next home.
            </p>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:shrink-0">
          {/* ACTION BUTTONS */}
          <a
            href=""
            className="flex justify-center w-full sm:w-auto items-center gap-1 text-white bg-primary px-4 py-3 font-semibold rounded hover:-translate-y-1 transition ease-in-out duration-300"
          >
            <FaPhoneAlt size={15} className="text-white inline py-0" />
            <span>Contact Us</span>
          </a>
          <Link to="/project" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border-2 px-4 py-3 font-semibold text-white border-white/50 hover:border-white/80 hover:bg-white/10 py-3 rounded hover:-translate-y-1 transition ease-in-out duration-300">View Projects <FaArrowRight size={15} className="inline" /></Link>
        </div>
      </div>
    </section>
  );
}
