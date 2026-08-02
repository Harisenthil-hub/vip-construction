import { motion } from "framer-motion";
import { ownerTimeline } from "../data/aboutData";
import { Building2, BriefcaseBusiness, HardHat, MapPin } from "lucide-react";

const iconMap = {
  Building2,
  BriefcaseBusiness,
  HardHat,
};

export default function OwnerTimeline() {
  return (
    <section id="owner-timeline" className="py-10 sm:py-14 lg:py-16 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-2xl mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="span-heading">
            Founder's Track Record
          </span>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] tracking-tight leading-tight mb-2">
            Real Experience, Real Foundations
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
Before starting VIP Construction, our founder learned the trade at India's top construction companies — bringing that same discipline, skill, and honesty to every project we build today.          </p>
        </motion.div>

        {/* 1 Row Grid for Owner Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {ownerTimeline.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || Building2;

            return (
              <motion.div 
                key={item.year} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F5A623]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Row: Icon & Year Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                      <IconComp className="w-4 h-4 text-[#F5A623] group-hover:text-[#0F172A] transition-colors" />
                    </div>

                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                      {item.year}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1 leading-tight group-hover:text-[#F5A623] transition-colors">
                    {item.company}
                  </h3>

                  {/* Role Title */}
                  <p className="text-xs font-bold text-[#F5A623] uppercase tracking-wide mb-2">
                    {item.role}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Location Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium group-hover:text-slate-800 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{item.location}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
