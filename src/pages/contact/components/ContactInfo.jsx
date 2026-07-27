import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    primary: "+91 98765 43210",
    secondary: "We're available for project discussions.",
    link: "tel:+919876543210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    primary: "info@buildmax.com",
    secondary: "We'll respond within 24 hours.",
    link: "mailto:info@buildmax.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Our Office",
    primary: "Coimbatore",
    secondary: "Tamil Nadu, India",
    link: null,
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    primary: "Mon – Sat",
    secondary: "9:00 AM – 6:00 PM",
    link: null,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {cards.map((item, index) => (

            <div
              key={index}
              className="
                group
                relative
                bg-white
                rounded-2xl
                border
                border-gray-200
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-3
                overflow-hidden
              "
            >

              {/* Gold Top Border */}
              <div className="h-1 bg-[#F5A623]"></div>

              <div className="p-8">

                {/* Icon */}
                <div
                  className="
                    w-18
                    h-18
                    w-[72px]
                    h-[72px]
                    rounded-full
                    bg-[#F5A623]/10
                    border-2
                    border-[#F5A623]
                    flex
                    items-center
                    justify-center
                    text-[#F5A623]
                    text-3xl
                    mb-6
                    group-hover:bg-[#F5A623]
                    group-hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1A1F2E]">
                  {item.title}
                </h3>

                {/* Main Text */}
                {item.link ? (
                  <a
                    href={item.link}
                    className="block mt-5 text-lg font-semibold text-[#1A1F2E] hover:text-[#F5A623] transition"
                  >
                    {item.primary}
                  </a>
                ) : (
                  <p className="mt-5 text-lg font-semibold text-[#1A1F2E]">
                    {item.primary}
                  </p>
                )}

                {/* Secondary Text */}
                <p className="mt-3 text-gray-500 leading-7">
                  {item.secondary}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}