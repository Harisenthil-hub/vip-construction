import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, FileText, Truck, Wrench, CheckCircle2 } from "lucide-react";

const faqList = [
  {
    icon: ShieldCheck,
    question: "How do you verify concrete and steel quality on-site?",
    answer: "We perform multi-stage testing on every batch delivery. Concrete cubes are cast on-site and compressive strength is tested at 7 days and 28 days (M20/M25/M30 grade). All steel rebars are sourced directly from brand-certified 500D TMT manufacturers with mill test certificates."
  },
  {
    icon: FileText,
    question: "What are the payment milestones during turnkey construction?",
    answer: "Payments are strictly milestone-linked to physical progress: Excavation & Footing (15%), Plinth & Column (20%), Roof Slab Casting (25%), Brickwork & Plastering (20%), Electrical & Plumbing (10%), and Final Painting & Key Handover (10%). No advance lump-sum demands."
  },
  {
    icon: Truck,
    question: "Can I inspect and verify material brands before pouring starts?",
    answer: "Yes, 100%! We operate an open-book policy. Every brand specified in our agreement (e.g. Ultratech/Ramco cement, Tata/JSW steel, Finolex pipes, Havells wiring) is logged in your client portal and visually inspected before work commences."
  },
  {
    icon: Wrench,
    question: "What structural warranty do you provide after key handover?",
    answer: "We offer a comprehensive 10-Year Structural Guarantee covering foundation, columns, load-bearing beams, and slab integrity. Additionally, we provide 1-year free post-handover maintenance for plumbing, electrical, and minor touch-ups."
  },
  {
    icon: CheckCircle2,
    question: "How quickly can we start with initial 3D plans & site inspection?",
    answer: "Upon scheduling a site consultation, our engineering team visits your plot within 24-48 hours for soil inspection and boundary measurement. Initial 2D floor plans and 3D elevation proposals are delivered within 3-5 business days."
  }
];

export default function AboutFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#FAFAFA] text-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#F5A623] mb-3">
            <span className="w-6 h-[2px] bg-[#F5A623]" />
            <span>CLIENT & SITE FAQ</span>
            <span className="w-6 h-[2px] bg-[#F5A623]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
            Frequently Asked <span className="text-[#F5A623]">Questions</span>
          </h2>
          <p className="mt-2.5 text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
            Everything you need to know about site testing, milestone billing, material standards, and warranties.
          </p>
        </div>

        {/* Compact Rounded Accordion */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? "bg-white border-[#F5A623] shadow-md ring-1 ring-[#F5A623]/20"
                    : "bg-white border-slate-200 hover:border-[#F5A623]/50 hover:shadow-md hover:-translate-y-0.5 shadow-xs"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-[#0F172A] text-[#F5A623]" : "bg-slate-100 text-slate-700 group-hover:bg-[#F5A623]/20 group-hover:text-[#F5A623]"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-base font-extrabold text-[#0F172A] group-hover:text-[#F5A623] transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ml-3 ${
                      isOpen ? "rotate-180 text-[#F5A623]" : "group-hover:text-[#F5A623]"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pl-19">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
