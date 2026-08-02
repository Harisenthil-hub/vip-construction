import {
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaKey,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaClipboardList />,
    title: "Consultation & Site Visit",
    description:
      "We understand your requirements, budget and timeline, then visit your site to assess ground realities before anything is planned.",
  },
  {
    id: "02",
    icon: <FaDraftingCompass />,
    title: "Design & Planning",
    description:
      "Our team prepares layouts, structural plans and material estimates, walking you through every detail until you're confident to proceed.",
  },
  {
    id: "03",
    icon: <FaHardHat />,
    title: "Construction & Execution",
    description:
      "Work begins on-site with regular quality checks and progress updates, so you always know exactly where your project stands.",
  },
  {
    id: "04",
    icon: <FaKey />,
    title: "Handover & Support",
    description:
      "We complete final inspections, hand over the keys, and stay available for any support you need after the project is done.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative bg-white py-15 overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1A1F2E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="span-heading">
            How We Work
          </span>

          <h2 className="h2-heading mt-3">
            Our Construction Process
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            A clear, four-step process from first conversation to final handover
            — so you always know what happens next.
          </p>
        </div>

        {/* Flow container */}
        <div className="relative mt-7 lg:mt-20">
          {/* Connector path (desktop only) */}
          <svg
            className="hidden lg:block absolute top-0 left-0 w-full h-40 -translate-y-24 pointer-events-none"
            viewBox="0 0 1200 200"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 20,80 C 170,20 280,140 450,90 C 600,45 730,150 900,85 C 1010,45 1100,110 1180,70"
              stroke="#F5A623"
              strokeWidth="2.5"
              strokeDasharray="2 12"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative group ${
                  index % 2 === 1 ? "lg:mt-16" : ""
                }`}
              >
                <div className="relative bg-white rounded-[28px] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(26,31,46,0.15)] hover:shadow-[0_25px_60px_-20px_rgba(245,166,35,0.45)] hover:-translate-y-2 transition-all duration-500 p-8 pt-10 h-full">
                  {/* Gradient numeral */}
                  <span className="block text-6xl font-black leading-none bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent select-none">
                    {step.id}
                  </span>

                  {/* Icon badge, overlapping the numeral */}
                  <div className="absolute top-8 right-7 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-secondary text-xl shadow-lg group-hover:bg-secondary group-hover:text-primary group-hover:rotate-6 transition-all duration-500">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-bold text-primary">
                    {step.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-[3px] bg-secondary rounded-full my-4 group-hover:w-16 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-[#666666] text-sm leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
