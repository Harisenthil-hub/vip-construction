import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-24">
      {/* Background Glow Blobs */}
      <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 md:p-12 backdrop-blur-lg lg:flex lg:items-center lg:justify-between gap-10">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-amber-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[3px] text-slate-950 mb-4 shadow-sm">
              Let's Build Together
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white">
              Ready To Start
              <span className="block text-amber-400 mt-1">
                Your Dream Project?
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-300">
              Whether you're planning a residential home, commercial building, industrial facility, or renovation project, our experienced team is ready to help. Contact VIP Construction today for a free consultation and quotation.
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
