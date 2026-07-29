import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    primary: "+91 9080273030",
    secondary: "We're available for project discussions.",
    link: "tel:+919080273030",
    action: "Call Now",
  },
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
    primary: "Udumalpet",
    secondary: "Tamil Nadu, India",
    link: "https://maps.google.com/?q=Udumalpet,Tamil Nadu",
    action: "Get Directions",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    primary: "Mon – Sat",
    secondary: "9:00 AM – 8:00 PM",
    link: "#contact-form",
    action: "Book Consultation",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-[#F5A623] font-semibold">
            Contact Information
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1F2E] mt-3">
            We're Here To Help
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Reach out to our team through any of the following channels.
            We'd be happy to discuss your project and answer your questions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {cards.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >

              {/* Top Gold Border */}
              <div className="h-1 bg-[#F5A623]"></div>

              <div className="p-6 sm:p-8 flex flex-col h-full">

                {/* Icon */}
                <div className="w-[72px] h-[72px] rounded-full border-2 border-[#F5A623] bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623] text-3xl mb-6 group-hover:bg-[#F5A623] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1A1F2E]">
                  {item.title}
                </h3>

                {/* Main Text */}
                {(item.link.startsWith("tel") || item.link.startsWith("mailto")) ? (
                  <a
                    href={item.link}
                    className="block mt-5 font-semibold text-[#1A1F2E] hover:text-[#F5A623] transition break-words"
                  >
                    {item.title === "Email Us" ? (
                      <>
                        <span className="text-sm sm:text-base lg:text-lg">
                          vipconstruction.14
                        </span>
                        <wbr />
                        <span className="text-sm sm:text-base lg:text-lg">
                          @gmail.com
                        </span>
                      </>
                    ) : (
                      <span className="text-lg">{item.primary}</span>
                    )}
                  </a>
                ) : (
                  <p className="mt-5 text-lg font-semibold text-[#1A1F2E]">
                    {item.primary}
                  </p>
                )}

                {/* Secondary Text */}
                <p className="mt-3 text-gray-500 leading-7 flex-grow">
                  {item.secondary}
                </p>

                {/* Bottom Divider */}
                <div className="border-t border-gray-200 mt-6 pt-5">

                  <a
                    href={item.link}
                    target={
                      item.action === "Get Directions"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.action === "Get Directions"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 font-semibold text-[#F5A623] hover:gap-4 transition-all duration-300"
                  >
                    {item.action}
                    <FaArrowRight />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}