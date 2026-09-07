import { Link } from "react-router-dom";
import { FaPhoneAlt, FaFileAlt } from "react-icons/fa";
import heroImg from "../images/hero.webp";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-0 sm:min-h-[calc(100vh-300px)] lg:min-h-[650px]">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="About VIP Construction"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2E]/95 via-[#1A1F2E]/80 to-transparent"></div>

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(245,166,35,0.15),transparent_35%)]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 py-12 sm:px-8 sm:py-20 lg:px-4 lg:py-24">
        {/* Content width */}
        <div className="max-w-[750px]">
          {/* MAIN SEO HEADING */}
          <h1 className="font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-[1.1] lg:leading-[1.05]">
            Real Experience,
            <span className="block text-secondary mt-1">Honest Building</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 sm:mt-6 max-w-[650px] text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8">
            Our founder worked at L&T and TATA Construction before starting VIP
            Construction in 2019 — bringing that same discipline and precision
            to every home and building we construct across Tamil Nadu.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-6 sm:mt-8 flex flex-row flex-wrap items-center gap-3 lg:mt-10">
            {/* EXPLORE PROJECTS */}
            <Link
              to="/project"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-gold-hover text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-md transition-colors duration-300"
            >
              <FaFileAlt size={15} />
              Explore Projects
            </Link>

            {/* CONTACT */}
            <Link
              to="tel:+919080273030"
              className="inline-flex items-center justify-center gap-2 border border-white/50 bg-black/10 hover:bg-white/10 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-md backdrop-blur-sm transition-colors duration-300"
            >
              <FaPhoneAlt size={15} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
