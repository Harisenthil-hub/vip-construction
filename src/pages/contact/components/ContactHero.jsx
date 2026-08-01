import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/contact-hero.webp"
        alt="VIP Construction"
        className=" absolute inset-0 w-full h-full object-cover object-center "
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2E]/95 via-[#1A1F2E]/75 to-transparent"></div>

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(245,166,35,0.15),transparent_35%)]"></div>

      {/* Content */}
      <div className=" relative z-10 w-full max-w-[1300px] mx-auto px-5 py-16 sm:px-8 sm:py-20 lg:px-4 lg:py-24">
        {/* Content width */}
        <div className="max-w-[750px]">
          {/* MAIN SEO HEADING */}
          <h1 className="font-bold text-white text-4xl leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.05] ">
            Let's Build Your Dream Project
            <span className=" block text-secondary mt-1 ">Project</span>
          </h1>

          {/* DESCRIPTION */}
          <p className=" mt-6 max-w-[650px] text-slate-300 text-base leading-7 sm:text-lg sm:leading-8 lg:text-lg ">
            Whether it's residential, commercial or industrial construction, our
            experienced team is ready to transform your vision into reality.
            Contact us today for a free consultation and let's build something
            extraordinary.
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
              href="tel:+919080273030"
              className="inline-flex items-center justify-center gap-2 border border-white/50 bg-black/10 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-md backdrop-blur-sm transition-colors duration-300"
            >
              <FaPhoneAlt size={15} />
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;
