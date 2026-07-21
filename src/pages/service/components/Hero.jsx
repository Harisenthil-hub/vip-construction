import heroImage from "../images/hero.webp";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="VIP Construction - Premium Building Services"
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

      {/* Golden Blur Blobs */}
      <div className="absolute -top-40 -left-32 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-amber-500 px-3.5 py-1 text-slate-950 shadow-sm border-none">
            <span className="text-[10px] font-black uppercase tracking-[2px]">
              Trusted Construction Partner
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-white">
            Building
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 mt-1">
              Excellence
            </span>
            Since 2005
          </h1>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
            VIP Construction delivers premium residential, commercial, industrial and architectural construction across Tamil Nadu. Engineered for quality, delivered on time.
          </p>

          {/* Action Buttons - 2 Columns on Mobile for Neat Alignment */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 max-w-sm sm:max-w-none">
            <Link
              to="/project"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3.5 font-bold text-slate-900 transition duration-300 hover:bg-amber-400 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 text-xs sm:text-sm"
            >
              View Projects
              <FaArrowRight className="text-[10px] sm:text-xs" />
            </Link>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3.5 font-bold text-white transition duration-300 hover:bg-white hover:text-slate-900 text-xs sm:text-sm"
            >
              Explore Services
            </a>
          </div>

        </div>
      </div>

      {/* Down Chevron Anchor */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-white/50 hover:text-white transition duration-300 hidden md:block"
        aria-label="Scroll down"
      >
        <FaChevronDown />
      </a>
    </section>
  );
}
