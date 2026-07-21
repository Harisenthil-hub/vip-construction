import { Link } from "react-router-dom";
import { FaPhoneAlt, FaFileAlt } from "react-icons/fa";

export function HeroContent() {
  return (
    <div className=" relative z-10 w-full max-w-[1300px] mx-auto px-5 py-16 sm:px-8 sm:py-20 lg:px-4 lg:py-24">
      {/* Content width */}
      <div className="max-w-[750px]">
        {/* MAIN SEO HEADING */}
        <h1 className=" font-bold text-white text-4xl leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.05] " >
          Building Beyond
          <span className=" block text-secondary mt-1 ">Blueprints</span>
        </h1>

        {/* DESCRIPTION */}
        <p className=" mt-6 max-w-[650px] text-slate-300 text-base leading-7 sm:text-lg sm:leading-8 lg:text-xl ">
          VIP Construction delivers excellence in every structure. From vision
          to creation, we build your dreams with quality, integrity, and
          innovation.
        </p>

        {/* CTA BUTTONS */}
        <div className=" mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-10 ">
          {/* VIEW PROJECTS */}
          <Link
            to="/project"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 "
          >
            <FaFileAlt size={15} />
            View Projects
          </Link>

          {/* CONTACT */}
          <a
            href="tel:+911234567890"
            className="inline-flex items-center justify-center gap-2 border border-white/50 bg-black/10 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-md backdrop-blur-sm transition-colors duration-300 "
          >
            <FaPhoneAlt size={15} />
            Contact Us
          </a>
        </div>

        {/* STATS */}
        <div className=" mt-12 grid grid-cols-3 max-w-[600px] lg:mt-14 ">
          {/* EXPERIENCE */}
          <div className="pr-3 sm:pr-7">
            <p className=" text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl ">
              15+
            </p>

            <p className=" mt-1 text-slate-400 text-xs sm:text-sm ">
              Years of Experience
            </p>
          </div>

          {/* PROJECTS */}
          <div className=" px-3 sm:px-7 border-l border-white/20 ">
            <p className=" text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl ">
              250+
            </p>

            <p className=" mt-1 text-slate-400 text-xs sm:text-sm ">
              Projects Completed
            </p>
          </div>

          {/* CLIENTS */}
          <div className=" pl-3 sm:pl-7 border-l border-white/20 ">
            <p className=" text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl ">
              500+
            </p>

            <p className=" mt-1 text-slate-400 text-xs sm:text-sm ">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
