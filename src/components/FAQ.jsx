import {
  FaClipboardCheck,
  FaPhoneAlt,
  FaFileSignature,
  FaHardHat,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaClipboardCheck />,
    title: "Submit Your Request",
    description:
      "Fill out the contact form with your project details. Whether it's residential, commercial, or industrial, we'll carefully review every requirement.",
  },
  {
    id: "02",
    icon: <FaPhoneAlt />,
    title: "Expert Consultation",
    description:
      "One of our construction specialists will contact you within 24 hours to discuss your project, answer your questions, and understand your vision.",
  },
  {
    id: "03",
    icon: <FaFileSignature />,
    title: "Free Site Visit & Quote",
    description:
      "If required, we'll arrange a site inspection and provide a detailed, transparent quotation with timelines and cost estimates.",
  },
  {
    id: "04",
    icon: <FaHardHat />,
    title: "Project Execution",
    description:
      "After approval, our experienced engineers and construction team begin planning and executing your project with quality, safety, and on-time delivery.",
  },
];

export default function WhatHappensNext() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#F5A623] font-semibold">
            What Happens Next?
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1F2E] mt-3">
            Your Construction Journey Starts Here
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-[#666666] leading-8">
            From your first inquiry to the successful completion of your
            project, we ensure a smooth, transparent, and hassle-free
            construction experience.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-1 bg-gray-200 rounded-full">
            <div className="w-full h-full bg-gradient-to-r from-[#F5A623] to-[#1A1F2E] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

            {steps.map((step) => (

              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 text-center group"
              >

                {/* Step Number */}
                <div className="w-14 h-14 rounded-full bg-[#1A1F2E] text-white font-bold text-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[#F5A623]/10 border-2 border-[#F5A623] flex items-center justify-center mx-auto mb-6">

                  <span className="text-[#F5A623] text-4xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1F2E] mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] leading-7">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}