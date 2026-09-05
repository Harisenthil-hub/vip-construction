import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    primary: "vipconstruction.14@gmail.com",
    secondary: "We reply within 24 hours.",
    link: "mailto:vipconstruction.14@gmail.com",
    action: "Send Email",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Our Office",
    primary: "Udumalpet, Tamil Nadu",
    secondary: "Drop by and walk us through your project.",
    link: "https://maps.app.goo.gl/kYRmjNgXxi8iuauPA",
    action: "Get Directions",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    primary: "Mon – Sat · 9 AM – 8 PM",
    secondary: "Book a slot and we'll block time just for you.",
    link: "#contact-form",
    action: "Book Consultation",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-8 sm:py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-12">
          <span className="span-heading">Contact Information</span>

          <h2 className="h2-heading">We're Here To Help</h2>

          <p className="mt-2 sm:mt-5 text-xs sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reach us anytime through the details below — we're happy to answer
            your questions and talk through your project.
          </p>
        </div>

        {/* Layout: featured call panel + 3 stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-8">
          {/* Featured "Call Us" panel */}
          <div className="lg:col-span-2 relative bg-primary rounded-2xl p-5 sm:p-10 flex flex-col justify-between overflow-hidden">
            {/* Decorative amber glow */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#F5A623]/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F5A623] flex items-center justify-center text-[#1A1F2E] text-xl sm:text-2xl mb-4 sm:mb-8">
                <FaPhoneAlt />
              </div>

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[#F5A623] text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3">
                Prefer To Talk Now?
              </p>

              <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
                Call Our Site Office
              </h3>

              <Link
                to="tel:+919080273030"
                className="block text-xl sm:text-3xl font-bold text-white hover:text-[#F5A623] transition break-words"
              >
                +91 90802 73030
              </Link>

              <p className="mt-2 sm:mt-4 text-xs sm:text-base text-gray-400 leading-relaxed max-w-sm">
                Available for project discussions during working hours, or leave
                a message and we'll call you back the same day.
              </p>
            </div>

            <Link
              to="tel:+919080273030"
              className="relative mt-5 sm:mt-8 inline-flex w-fit items-center gap-2 bg-[#F5A623] text-[#1A1F2E] font-semibold px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-full hover:gap-4 hover:bg-white transition-all duration-300"
            >
              Call Now
              <FaArrowRight />
            </Link>
          </div>

          {/* Remaining cards */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-3 sm:gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border border-gray-200 p-3.5 sm:p-7 flex flex-col hover:border-[#F5A623] hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? "col-span-2 sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-6">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-[#1A1F2E] flex items-center justify-center text-[#F5A623] text-sm sm:text-lg group-hover:bg-[#F5A623] group-hover:text-[#1A1F2E] transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xs sm:text-lg font-bold text-[#1A1F2E]">
                  {item.title}
                </h3>

                {item.link.startsWith("mailto") ? (
                  <Link
                    to={item.link}
                    className="block mt-1 sm:mt-2 font-semibold text-[#1A1F2E] hover:text-[#F5A623] transition break-words text-sm sm:text-base"
                  >
                    {item.primary}
                  </Link>
                ) : (
                  <p className="mt-1 sm:mt-2 font-semibold text-[#1A1F2E] text-xs sm:text-base">
                    {item.primary}
                  </p>
                )}

                <p className="mt-1 sm:mt-2 text-gray-500 text-[11px] sm:text-sm leading-relaxed flex-grow">
                  {item.secondary}
                </p>

                <Link
                  to={item.link}
                  target={
                    item.action === "Get Directions" ? "_blank" : undefined
                  }
                  rel={
                    item.action === "Get Directions"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-5 text-xs sm:text-sm font-semibold text-[#F5A623] hover:gap-3 transition-all duration-300 w-fit"
                >
                  {item.action}
                  <FaArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
