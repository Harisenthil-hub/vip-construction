import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const ContactHero = () => {
  const scrollToContactForm = () => {
    const form = document.getElementById("contact-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        const firstInput = form.querySelector("input");
        firstInput?.focus();
      }, 600);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/contact-hero.webp"
        alt="VIP Construction"
        className="
          absolute inset-0
          w-full
          h-full
          object-cover
          object-center
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2E]/95 via-[#1A1F2E]/75 to-transparent"></div>

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(245,166,35,0.15),transparent_35%)]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">

        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="flex items-center gap-5 mb-8">

              <div className="w-14 h-[2px] bg-[#F5A623]"></div>

              <span className="uppercase tracking-[6px] text-[#F5A623] text-sm font-semibold">
                CONTACT US
              </span>

            </div>

            {/* Heading */}
            <h1
              className="
                font-black
                text-white
                leading-none
                tracking-tight
                text-5xl
                sm:text-6xl
                md:text-7xl
                xl:text-[82px]
              "
            >
              Let's Build
              <br />
              Your Dream Project
              <br />
              <span className="text-[#F5A623]">
                Together
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-2xl
                text-gray-200
                text-lg
                md:text-xl
                leading-8
              "
            >
              Whether it's residential, commercial or industrial
              construction, our experienced team is ready to transform
              your vision into reality. Contact us today for a free
              consultation and let's build something extraordinary.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <button
                onClick={scrollToContactForm}
                className="
                  bg-[#F5A623]
                  hover:bg-[#E09200]
                  text-[#1A1F2E]
                  px-8
                  py-4
                  rounded-lg
                  font-bold
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:scale-105
                  shadow-xl
                "
              >
                <FaArrowRight />
                Get Free Quote
              </button>

              <a
                href="tel:+919876543210"
                className="
                  border-2
                  border-white
                  hover:bg-white
                  hover:text-[#1A1F2E]
                  text-white
                  px-8
                  py-4
                  rounded-lg
                  font-bold
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:scale-105
                "
              >
                <FaPhoneAlt />
                Call Now
              </a>

            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-4 mt-12 text-lg">

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
    </section>
  );
};

export default ContactHero;