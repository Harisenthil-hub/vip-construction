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
    secondary: "We'll respond within 24 hours.",
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
    secondary: "Book a slot and we'll block time for you.",
    link: "#contact-form",
    action: "Book Consultation",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-15">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="span-heading">
            Contact Information
          </span>

          <h2 className="h2-heading">
            We're Here To Help
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Reach out to our team through any of the following channels. We'd be
            happy to discuss your project and answer your questions.
          </p>
        </div>

        {/* Layout: featured call panel + 3 stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Featured "Call Us" panel */}
          <div className="lg:col-span-2 relative bg-primary rounded-2xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden">

            
            {/* Decorative amber glow */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#F5A623]/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#F5A623] flex items-center justify-center text-[#1A1F2E] text-2xl mb-8">
                <FaPhoneAlt />
              </div>

              <p className="uppercase tracking-[3px] text-[#F5A623] text-xs font-semibold mb-3">
                Prefer To Talk Now?
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Call Our Site Office
              </h3>

              <Link
                to="tel:+919080273030"
                className="block text-2xl sm:text-3xl font-bold text-white hover:text-[#F5A623] transition break-words"
              >
                +91 90802 73030
              </Link>

              <p className="mt-4 text-gray-400 leading-7 max-w-sm">
                We're available for project discussions during working hours, or
                leave a message and we'll call you back the same day.
              </p>
            </div>

            <Link
              to="tel:+919080273030"
              className="relative mt-8 inline-flex w-fit items-center gap-2 bg-[#F5A623] text-[#1A1F2E] font-semibold px-6 py-3 rounded-full hover:gap-4 hover:bg-white transition-all duration-300"
            >
              Call Now
              <FaArrowRight  />
            </Link>
          </div>

          {/* Remaining cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 flex flex-col hover:border-[#F5A623] hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1A1F2E] flex items-center justify-center text-[#F5A623] text-lg group-hover:bg-[#F5A623] group-hover:text-[#1A1F2E] transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#1A1F2E]">
                  {item.title}
                </h3>

                {item.link.startsWith("mailto") ? (
                  <Link
                    to={item.link}
                    className="block mt-2 font-semibold text-[#1A1F2E] hover:text-[#F5A623] transition break-words text-sm sm:text-base"
                  >
                    {item.primary}
                  </Link>
                ) : (
                  <p className="mt-2 font-semibold text-[#1A1F2E] text-sm sm:text-base">
                    {item.primary}
                  </p>
                )}

                <p className="mt-2 text-gray-500 text-sm leading-6 flex-grow">
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
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#F5A623] hover:gap-3 transition-all duration-300 w-fit"
                >
                  {item.action}
                  <FaArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
