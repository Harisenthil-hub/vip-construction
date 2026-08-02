import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 border border-amber-200">
            FAQ
          </span>
          <h2 className="h2-heading mt-3 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Find answers to common questions about our construction services, pricing, and site process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-8 sm:mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                open === index
                  ? "border-amber-400 bg-amber-500/[0.02] shadow-md"
                  : "border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left gap-4 transition duration-300 active:scale-[0.99]"
                aria-expanded={open === index}
              >
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 text-amber-500 transition-transform duration-300 ${
                    open === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaChevronDown className="text-sm sm:text-base" />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
