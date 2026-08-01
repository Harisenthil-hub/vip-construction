import {
  FaComments,
  FaDraftingCompass,
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaKey,
} from "react-icons/fa";
import { MdEngineering } from "react-icons/md";


const steps = [
  {
    id: "01",
    icon: <FaComments />,
    title: "01. Consultation",
    description:
      "Detailed discussion of your vision, requirements, budget and project timeline.",
  },
  {
    id: "02",
    icon: <FaDraftingCompass />,
    title: "02. Planning",
    description:
      "Complete site planning with architectural, structural, and 2D & 3D elevation designs.",
  },
  {
    id: "03",
    icon: <FaFileInvoiceDollar />,
    title: "03. Quotation",
    description:
      "Customized quotations for every budget without compromising on quality or design.",
  },
  {
    id: "04",
    icon: <MdEngineering size={30} />,
    title: "04. Construction",
    description:
      "Execution with precision, premium materials and strict safety protocols.",
  },
  {
    id: "05",
    icon: <FaClipboardCheck />,
    title: "05. Quality Check",
    description:
      "Inspections at critical milestones to ensure structural integrity.",
  },
  {
    id: "06",
    icon: <FaKey />,
    title: "06. Handover",
    description:
      "Project handover with full documentation, warranties and ongoing support.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-slate-50 py-10 md:py-10 border-t border-slate-200/50"
    >
      <div className="max-w-6xl mx-auto px-7">
        {/* Left-Aligned Heading (Dribbble Style) */}
        <div className="text-left mb-12 md:mb-15px max-w-xl">
          <span className="span-heading">
            STEP BY STEP PROCESS
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
            We Execute Every Milestone Carefully
          </h2>
        </div>

        {/* ================= DESKTOP VIEW: S-CURVE ZIG-ZAG (3 COLS, 2 ROWS) ================= */}
        <div className="relative hidden md:block max-w-4xl mx-auto py-6">
          {/* S-Curve Connecting Line with Relaxed Curves */}
          <svg
            viewBox="0 0 800 484"
            fill="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            preserveAspectRatio="none"
          >
            <path
              d="M 133,64 L 720,64 C 785,64 785,197 720,197 L 80,197 C 15,197 15,330 80,330 L 667,330"
              stroke="#f59e0b"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70"
            />
          </svg>

          {/* Row 1 (Steps 1, 2, 3) - Text is BELOW the circle cards */}
          <div className="grid grid-cols-3 gap-8 relative z-10 mr-6">
            {steps.slice(0, 3).map((step) => (
              <div
                key={step.id}
                className="group flex flex-col items-center text-center px-4 h-[200px]"
              >
                {/* Circle Card */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 shadow-sm text-slate-400 group-hover:border-amber-500 group-hover:shadow-md group-hover:scale-105 group-hover:text-amber-500 transition duration-300 flex items-center justify-center text-2xl cursor-pointer relative z-10">
                  {step.icon}
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-800 transition duration-300 group-hover:text-amber-600">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed max-w-[210px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 (Steps 4, 5, 6) - Text is BELOW the circle cards, mt-24 provides vertical spacing for S-curve loop */}
          <div className="grid grid-cols-3 gap-8 relative z-10 mt-24">
            {steps.slice(3, 6).map((step) => (
              <div
                key={step.id}
                className="group flex flex-col items-center text-center px-4 h-[170px]"
              >
                {/* Circle Card */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 shadow-sm text-slate-400 group-hover:border-amber-500 group-hover:shadow-md group-hover:scale-105 group-hover:text-amber-500 transition duration-300 flex items-center justify-center text-2xl cursor-pointer relative z-10">
                  {step.icon}
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-800 transition duration-300 group-hover:text-amber-600">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed max-w-[210px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE VIEW: VERTICAL TIMELINE LIST (1 COL) ================= */}
        <div className="relative md:hidden max-w-md mx-auto px-2 py-0">
          <div className="space-y-8 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex gap-5 items-start">
                {/* Vertical Connector Line between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-[-36px] w-0.5 bg-amber-500 opacity-60 z-0"></div>
                )}

                {/* Circle Card */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-sm text-slate-400 flex items-center justify-center text-lg relative z-10 flex-shrink-0">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1.5">
                  <h3 className="text-xs font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
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
