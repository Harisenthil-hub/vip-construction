import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    text: "+91 98765 43210"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "info@buildmax.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Office",
    text: "Coimbatore, Tamil Nadu"
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    text: "Mon - Sat : 9AM - 6PM"
  }
]

export default function ContactInfo() {

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {
          cards.map((item, index) => (

            <div
              key={index}
              className="bg-[#F8F8F8] rounded-xl p-8 hover:shadow-xl duration-300 border border-gray-100"
            >

              <div className="text-4xl text-[#F5A623]">

                {item.icon}

              </div>

              <h2 className="mt-5 text-xl font-semibold">

                {item.title}

              </h2>

              <p className="text-[#666666] mt-2">

                {item.text}

              </p>

            </div>

          ))
        }

      </div>

    </section>

  )

}