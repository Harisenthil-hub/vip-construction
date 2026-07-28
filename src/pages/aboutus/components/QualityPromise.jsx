import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck, ChevronDown, FileText, CheckCircle2, Award } from "lucide-react";

const siteGuarantees = [
  { 
    title: "Direct Structural Calculation", 
    desc: "No guesswork — beam loads, column rebars, and footings calculated specifically for your site's soil bearing capacity.",
    icon: ShieldCheck
  },
  { 
    title: "Grade-A Certified Materials Only", 
    desc: "Brand-certified OPC/PPC cement, 500D TMT steel rebars, and river/M-sand quality tested prior to every concrete batch pour.",
    icon: Award
  },
  { 
    title: "Itemized Open-Book Quotation", 
    desc: "Every bag of cement, square foot of tile, and electrical fitting itemized upfront with zero mid-project surprise costs.",
    icon: FileText
  },
  { 
    title: "Milestone-Linked Digital Approvals", 
    desc: "Payments are released strictly after stage inspection and digital approval of foundation, slab casting, and plastering.",
    icon: CheckCircle2
  },
  { 
    title: "10-Year Structural Guarantee", 
    desc: "Comprehensive 10-year structural warranty covering foundation, beams, and slab integrity with 1-year free maintenance.",
    icon: Lock
  }
];

export default function QualityPromise() {
  const [openGuarantee, setOpenGuarantee] = useState(0);

  return (
    <section id="quality-promise" className="py-16 lg:py-24 bg-[#FAFAFA] text-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group hover:border-[#F5A623]/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
                alt="VIP Construction Structural Guarantee"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 group-hover:border-[#F5A623]/40 rounded-xl p-4 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0F172A] text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center font-bold transition-colors duration-300">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0F172A] group-hover:text-[#F5A623] transition-colors">10-Year Warranty</h4>
                    <p className="text-xs text-slate-500 font-medium">Certified Structural Integrity Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#F5A623] mb-3">
              <span className="w-6 h-[2px] bg-[#F5A623]" />
              <span>UNBREAKABLE FIELD GUARANTEES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-[1.2] mb-6">
              Our Quality Promise & <span className="text-[#F5A623]">Site Standards</span>
            </h2>

            {/* Accordion Container */}
            <div className="space-y-3">
              {siteGuarantees.map((item, idx) => {
                const isOpen = openGuarantee === idx;
                const Icon = item.icon;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen
                        ? "bg-white border-[#F5A623] shadow-md ring-1 ring-[#F5A623]/20"
                        : "bg-white/80 border-slate-200 hover:border-[#F5A623]/50 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <button
                      onClick={() => setOpenGuarantee(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4.5 text-left group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isOpen ? "bg-[#0F172A] text-[#F5A623]" : "bg-slate-100 text-slate-700 group-hover:bg-[#F5A623]/20 group-hover:text-[#F5A623]"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-extrabold text-[#0F172A] group-hover:text-[#F5A623] transition-colors">
                          {item.title}
                        </span>
                      </div>

                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
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
                          <div className="px-4.5 pb-4.5 pt-1 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100 pl-17">
                            {item.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
