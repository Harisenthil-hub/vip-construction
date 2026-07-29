import { FaCheckCircle, FaUniversity, FaFileSignature } from "react-icons/fa";

const approvals = [
  "Bore & Motor Fittings",
  "Temporary EB Service",
  "Panchayat Approval",
  "Municipality Approval",
  "Corporation Approval",
  "Building Plan Approval",
];

const banks = [
  "25+ Leading Bank Partners",
  "Home Loan Assistance",
  "Construction Loan Support",
  "Loan Documentation Guidance",
  "Approval Process Assistance",
  "Quick & Hassle-Free Processing",
];

export default function Approvals() {
  return (
    <section className="py-10 lg:py-20 bg-slate-100">
      <div className="lg:max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="h2-heading">
            Approvals & Loan Assistance
          </h2>

          <p className="mt-2 lg:mt-4 text-slate-600 lg:max-w-3xl lg:mx-auto">
            We simplify your construction journey by taking care of approvals,
            documentation, and home loan assistance through trusted banking
            partners.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-200 rounded-2xl shadow-xl overflow-hidden lg:max-w-[1200px] m-auto">

          {/* Approvals Card */}
          <div className="flex-1 bg-white p-6 md:p-8">
            <div className="flex items-center gap-5 mb-8">
              <div className="h-15 w-15 md:h-16 md:w-16 rounded-2xl lg:bg-secondary/20 flex items-center justify-center">
                <FaFileSignature className="text-2xl md:text-3xl text-secondary" />
              </div>

              <div>
                <p className="text-primary font-semibold uppercase tracking-widest text-sm">
                  Legal Services
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  Approvals & Documentation
                </h3>
              </div>
            </div>

            <p className="text-slate-600 leading-7 mb-8">
              We take care of every required approval so your construction
              begins without delays.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {approvals.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <FaCheckCircle className="text-secondary text-sm" />
                  </div>

                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 lg:mt-22 p-5 bg-secondary/10 rounded-xl border border-secondary/20">
              <p className="text-sm md:text-base leading-6 md:leading-7 text-slate-600">
                <span className="font-semibold text-primary">
                  {" "}
                  Need Approval Assistance?{" "}
                </span>
                Our team handles documentation and approvals, making your
                construction process smooth and hassle-free.
              </p>
            </div>
          </div>

          {/* Loan Card */}

          <div className="flex-1 bg-[#0F172A] text-white p-6 md:p-8">
            <div className="flex items-center gap-5 mb-8">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                <FaUniversity className="text-2xl md:text-3xl text-secondary" />
              </div>

              <div>
                <p className="uppercase tracking-widest text-secondary text-sm font-semibold">
                  Financial Support
                </p>

                <h3 className="text-xl md:text-2xl font-bold">Home Loan Assistance</h3>
              </div>
            </div>

            <p className="text-slate-200 leading-7 mb-8">
              Complete loan assistance through 25+ trusted banking partners with
              end-to-end documentation support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {banks.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <FaCheckCircle className="text-green-400 text-sm" />
                  </div>

                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 lg:mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-300">
                <span className="text-yellow-400 font-semibold">25+ Banks</span>{" "}
                available to help you secure the right home or construction loan
                with a smooth and transparent approval process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
