import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-10 sm:py-14 lg:py-16">
      {/* Background Glow Blobs */}
      <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-lg lg:flex lg:items-center lg:justify-between gap-8">
          
          {/* Left Column: Text */}
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#F5A623] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 mb-3 shadow-sm">
              LET'S BUILD TOGETHER
            </span>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Ready to Start <span className="text-[#F5A623]">Your Dream Project?</span>
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-300 font-normal">
              Whether it's a home, shop, office, or renovation — our team is ready to help. Contact VIP Construction for a free site visit and honest quote.
            </p>
          </div>

          {/* Right Column: Actions */}
          <div className="mt-6 flex flex-wrap gap-4 lg:mt-0 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center w-full justify-center md:w-auto gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-bold text-slate-900 shadow-md hover:shadow-lg transition duration-300 hover:bg-amber-400 active:scale-95 text-sm"
            >
              Contact Us
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              to="tel:+919876543210"
              className="inline-flex w-full justify-center md:w-auto items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition duration-300 hover:bg-white hover:text-slate-900 active:scale-95 text-sm"
            >
              <FaPhoneAlt className="text-xs" />
              Call Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
