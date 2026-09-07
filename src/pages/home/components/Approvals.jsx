import { FaCheckCircle, FaUniversity, FaFileSignature } from "react-icons/fa";
import useSlideUp from "../../../hooks/useSlideUp";

const approvals = [
  "Bore & Motor Fittings",
  "Temporary EB Service",
  "Panchayat Approval",
  "Municipality Approval",
  "Corporation Approval",
  "House Tax Approval",
  "Building Plan Approval",
  "DTCP & RERA Approval",
];

const banks = [
  "25+ Leading Bank Partners",
  "Home Loan Assistance",
  "Construction Loan Support",
  "Loan Documentation Guidance",
  "Approval Process Assistance",
  "Fast & Easy Processing",
];

export default function Approvals() {
  useSlideUp();
  return (
    <section className="py-8 sm:py-10 lg:py-20 bg-slate-100">
      <div className="lg:max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-14">
          <h2 className="h2-heading">
            No Paperwork Headaches, Just Your Dream Home
          </h2>

          <p className="mt-1.5 sm:mt-2 lg:mt-4 text-slate-600 text-xs lg:text-base lg:max-w-3xl lg:mx-auto">
            Approvals, documentation, home loan assistance — we take care of it
            all with trusted banking partners, so you don't have to run around
            offices.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:divide-y lg:divide-y-0 lg:divide-x lg:divide-slate-200 bg-transparent rounded-xl sm:rounded-2xl lg:shadow-lg overflow-hidden lg:max-w-[1200px] m-auto">
          {/* Approvals Card */}
          <div className="slide-up flex-1 bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-none">
            <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-8">
              <div className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
                <FaFileSignature className="text-lg sm:text-2xl md:text-3xl text-secondary" />
              </div>

              <div>
                <p className="text-primary font-semibold uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm">
                  Legal Services
                </p>

                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-primary">
                  Approvals & Documentation
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed sm:leading-7 mb-4 sm:mb-8">
              Panchayat, municipality, corporation, building plan — whatever
              approval your site needs, we handle the paperwork end-to-end so
              work starts without delay.
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5">
              {approvals.map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="h-5 w-5 sm:h-8 sm:w-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <FaCheckCircle className="text-secondary text-[10px] sm:text-sm" />
                  </div>

                  <span className="text-gray-700 text-[11px] sm:text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-7 p-3.5 sm:p-5 bg-secondary/10 rounded-lg sm:rounded-xl border border-secondary/20">
              <p className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 text-slate-600">
                <span className="font-semibold text-primary">
                  {" "}
                  Confused about approvals?{"  "}
                </span>
                Our team handles all the paperwork, so you get a clean approval
                without running around offices.
              </p>
            </div>
          </div>

          {/* Loan Card */}

          <div className="slide-up flex-1 bg-[#0F172A] text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-none">
            <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-8">
              <div className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0">
                <FaUniversity className="text-lg sm:text-2xl md:text-3xl text-secondary" />
              </div>

              <div>
                <p className="uppercase tracking-wider text-secondary text-[10px] sm:text-xs lg:text-sm font-semibold">
                  Financial Support
                </p>

                <h3 className="text-base sm:text-xl md:text-2xl font-bold">
                  Home Loan Assistance
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed sm:leading-7 mb-4 sm:mb-8">
              Need a loan for your house? We connect you with 25+ banks and help
              with all the paperwork, start to finish.
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5 lg:mt-15">
              {banks.map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="h-5 w-5 sm:h-8 sm:w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FaCheckCircle className="text-green-400 text-[10px] sm:text-sm" />
                  </div>

                  <span className="text-[11px] sm:text-sm text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-7 lg:mt-18 rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-5">
              <p className="text-xs sm:text-sm md:text-base leading-relaxed md:leading-7 text-gray-300">
                <span className="text-yellow-400 font-semibold">25+ Banks</span>{" "}
                ready to help you get the right home or construction loan —
                clear terms, honest process, no surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
