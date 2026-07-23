import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How long does a construction project typically take?",
    answer:
      "The timeline depends on the project's size and complexity. Residential projects usually take between 3–8 months, while commercial and industrial developments may take longer. We provide a detailed project schedule before construction begins."
  },
  {
    question: "Can I get a free quotation before starting my project?",
    answer:
      "Yes. We offer a free consultation and detailed quotation after understanding your project requirements, budget, and timeline. Our estimates are transparent with no hidden costs."
  },
  {
    question: "Do you handle commercial and industrial construction projects?",
    answer:
      "Absolutely. Our team specializes in residential, commercial, industrial, and infrastructure projects. We deliver customized solutions that meet industry standards and client expectations."
  },
  {
    question: "Do you provide renovation and remodeling services?",
    answer:
      "Yes. We offer complete renovation, remodeling, structural upgrades, interior finishing, and property expansion services for homes, offices, and commercial buildings."
  },
  {
    question: "How do you ensure quality and safety on-site?",
    answer:
      "Quality and safety are our top priorities. We use premium-grade materials, conduct regular inspections, follow national building codes, and implement strict workplace safety protocols throughout every phase of construction."
  },
  {
    question: "How can I track the progress of my project?",
    answer:
      "Our project managers provide regular progress updates, milestone reports, and site photographs. Clients are also welcome to schedule site visits to monitor construction progress."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center mb-14">
          <p className="text-[#F5A623] uppercase tracking-[4px] font-semibold">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1F2E] mt-3">
            Everything You Need to Know
          </h2>

          <p className="text-[#666666] mt-5 max-w-2xl mx-auto">
            Find answers to the most common questions about our construction,
            renovation, and project management services.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#1A1F2E]">
                  {faq.question}
                </h3>

                <div className="text-[#F5A623] text-2xl">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 text-[#666666] leading-8">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}