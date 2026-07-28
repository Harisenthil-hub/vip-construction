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
              Let's Build Together
            </span>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-white">
              Ready To Start <span className="text-[#F5A623]">Your Dream Project?</span>
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
              Whether you're planning a residential villa, commercial building, or architectural renovation, our team is ready. Contact VIP Construction for transparent estimations and site consultation.
            </p>
          </div>

          {/* Right Column: Actions */}
          <div className="mt-6 flex flex-wrap gap-4 lg:mt-0 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-bold text-slate-900 shadow-md hover:shadow-lg transition duration-300 hover:bg-amber-400 active:scale-95 text-sm"
            >
              Contact Us
              <FaArrowRight className="text-xs" />
            </Link>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-bold text-white transition duration-300 hover:bg-white hover:text-slate-900 active:scale-95 text-sm"
            >
              <FaPhoneAlt className="text-xs" />
              Call Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
