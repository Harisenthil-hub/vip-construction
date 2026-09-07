import {
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaUserTie,
  FaKey,
} from "react-icons/fa";
import useSlideUp from "../../../hooks/useSlideUp";

import { AiOutlineSafetyCertificate } from "react-icons/ai";

const steps = [
  {
    id: "01",
    icon: <FaUserTie />,
    title: "Consultation & Site Visit",
    description:
      "Every project starts with a conversation. We understand your requirements, budget, and timeline, then visit your site in person to assess ground conditions before any planning begins.",
  },
  {
    id: "02",
    icon: <FaDraftingCompass />,
    title: "Design & Planning",
    description:
      "Our architects and engineers prepare detailed 2D and 3D layouts, structural drawings, and material estimates, giving you complete clarity on design and cost before construction starts.",
  },
  {
    id: "03",
    icon: <FaClipboardList />,
    title: "Transparent Quotation",
    description:
      "We provide a clear, itemized quotation covering materials, labor, and timelines, so you know exactly what you're paying for with no hidden costs or compromise on quality.",
  },
  {
    id: "04",
    icon: <FaHardHat />,
    title: "Construction & Execution",
    description:
      "Our skilled team carries out construction using quality-tested materials and strict safety standards, with regular site updates so you always know exactly where your project stands.",
  },
  {
    id: "05",
    icon: <AiOutlineSafetyCertificate />,
    title: "Quality Check & Inspection",
    description:
      "Every stage undergoes rigorous quality inspections, from foundation to finishing, ensuring a strong, safe, and durable structure built to code.",
  },
  {
    id: "06",
    icon: <FaKey />,
    title: "Handover & Support",
    description:
      "We complete final inspections, hand over your keys with full documentation and warranty details, and stay available for support long after the project is done.",
  },
];

export default function ProcessSteps() {
  useSlideUp();
  return (
    <section className="relative bg-white py-8 sm:py-15 overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1A1F2E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative">
        {/* Heading */}
        <div className="text-center mb-5 sm:mb-8">
          <span className="span-heading">How We Work</span>

          <h2 className="h2-heading">Our Construction Process</h2>

          <p className="mt-2 sm:mt-5 text-xs sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A clear, six-step process from first conversation to final handover
            — so you always know what happens next.
          </p>
        </div>

        {/* Flow container */}
        <div className="relative mt-5 sm:mt-7 lg:mt-20">
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`slide-up relative group ${
                  index % 2 === 1 ? "lg:mt-16" : ""
                }`}
              >
                <div className="h-full p-3.5 pt-5 sm:p-8 sm:pt-10 relative bg-white rounded-2xl sm:rounded-[28px] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(26,31,46,0.15)] hover:shadow-[0_25px_60px_-20px_rgba(245,166,35,0.45)] hover:-translate-y-2 transition-all duration-500 h-full">
                  {/* Gradient numeral */}
                  <span className="block text-3xl lg:text-5xl font-black leading-none bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent select-none">
                    {step.id}
                  </span>

                  {/* Icon badge, overlapping the numeral */}
                  <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-8 h-8 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center text-secondary text-xs sm:text-xl shadow-md group-hover:bg-secondary group-hover:text-primary group-hover:rotate-6 transition-all duration-500">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2.5 sm:mt-6 text-xs sm:text-lg font-bold text-primary leading-tight">
                    {step.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-7.5 sm:w-10 h-[3px] lg:h-[4px] bg-secondary rounded-full my-2 sm:my-4 group-hover:w-16 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-[#666666] text-[10px] sm:text-sm leading-tight sm:leading-relaxed line-clamp-4 sm:line-clamp-none">
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
