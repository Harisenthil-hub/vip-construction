import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import heroImage from "../../../assets/photos/hero-home.webp";

const ContactHero = () => {

  const scrollToContactForm = () => {
    const form = document.getElementById("contact-form");

    if (form) {
      const offset = 100;

      const top =
        form.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      // Focus the first input after scrolling
      setTimeout(() => {
        const firstInput = form.querySelector("input");
        firstInput?.focus();
      }, 700);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Construction Hero"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[72%_center]
          sm:object-[70%_center]
          md:object-[72%_center]
          lg:object-center
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2E]/95 via-[#1A1F2E]/70 to-transparent"></div>

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_55%,rgba(245,166,35,0.18),transparent_35%)]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">

        <div className="w-full max-w-[1600px] mx-auto">

          <div className="pl-6 sm:pl-10 md:pl-16 lg:pl-24 xl:pl-32">

            <div className="max-w-[720px]">

              {/* Label */}
              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-[2px] bg-[#F5A623]"></div>

                <span className="uppercase tracking-[7px] text-[#F5A623] text-sm font-semibold">
                  CONTACT US
                </span>

              </div>

              {/* Heading */}
              <h1
                className="
                  text-white
                  font-black
                  leading-[0.95]
                  tracking-tight
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  xl:text-[82px]
                "
              >
                Let's Build Your
                <br />
                Dream Project
                <br />
                <span className="text-[#F5A623]">
                  Together
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-10
                  text-base
                  sm:text-lg
                  lg:text-xl
                  leading-8
                  lg:leading-10
                  text-gray-200
                  max-w-[620px]
                "
              >
                Whether it's residential, commercial, or industrial
                construction, our experienced team is ready to turn
                your vision into reality. Contact us today for a free
                consultation.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-12">

               
                {/* Call Now */}
                <a
                  href="tel:+919876543210"
                  className="
                    border-2
                    border-white
                    text-white
                    hover:bg-white
                    hover:text-[#1A1F2E]
                    font-bold
                    px-9
                    py-4
                    rounded-lg
                    transition-all
                    duration-300
                    hover:scale-105
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <FaPhoneAlt />
                  Call Now
                </a>

              </div>

              {/* Breadcrumb */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  mt-14
                  text-base
                  lg:text-lg
                "
              >
                <span className="text-white hover:text-[#F5A623] cursor-pointer transition">
                  Home
                </span>

                <span className="text-white">/</span>

                <span className="text-[#F5A623] font-semibold">
                  Contact
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactHero;