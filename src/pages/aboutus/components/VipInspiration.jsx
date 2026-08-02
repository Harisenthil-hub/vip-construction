import { motion } from "framer-motion";
import { vipInspiration } from "../data/aboutData";
import { Quote, HardHat, ShieldCheck, Ruler, Compass } from "lucide-react";
import onsiteImg from "../images/Onsite.webp";

const pillarIcons = {
  HardHat,
  ShieldCheck,
  Ruler,
  Compass
};

export default function VipInspiration() {
  return (
    <section id="vip-inspiration" className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag & Heading */}
        <motion.div 
          className="max-w-2xl mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="span-heading">
            Brand Roots & Engineering Spirit
          </span>

          <h2 className="h2-heading">
            The "VIP" Spirit & On-Site Integrity
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
            {vipInspiration.description}
          </p>
        </motion.div>

        {/* Layout Grid: Large Image, Story Pillars, Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Large Image (lg:col-span-5) */}
          <motion.div 
            className="lg:col-span-5 w-full flex flex-col"
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F5A623]/60 hover:-translate-y-1 transition-all duration-500 aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[380px] cursor-pointer">
              <img
                src={onsiteImg}
                alt="VIP Construction Managing Director on site"
                className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl bg-white/95 group-hover:bg-white backdrop-blur-md border border-slate-200 shadow-xs group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wide group-hover:text-[#F5A623] transition-colors">
                    Founder & Managing Director
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                </div>
                <p className="text-xs text-slate-600">
                  Project planning & direct leadership at VIP Construction
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story & Quote Card (lg:col-span-7) */}
          <motion.div 
            className="lg:col-span-7 w-full flex flex-col justify-between space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            
            {/* 4 Story Pillars Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {vipInspiration.pillars.map((pillar, idx) => {
                const IconComp = pillarIcons[pillar.iconName] || HardHat;

                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F5A623]/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110">
                      <IconComp className="w-4 h-4 text-[#F5A623] group-hover:text-[#0F172A] transition-colors" />
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-tight group-hover:text-amber-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quote Card - Complete Text Display with Balanced Fill */}
            <div className="bg-gradient-to-br from-white via-slate-50/50 to-amber-500/5 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F5A623]/60 transition-all duration-300 relative overflow-hidden flex-1 flex flex-col justify-between gap-4 group cursor-pointer">
              
              {/* Background Watermark Icon */}
              <Quote className="absolute -right-3 -bottom-3 w-32 h-32 text-amber-500/5 group-hover:text-amber-500/10 transition-colors pointer-events-none select-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Quote className="w-4 h-4 text-[#F5A623] group-hover:text-[#0F172A] transition-colors" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700/80">
                      Founder Statement
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-900 text-white border border-slate-800 shadow-xs">
                    Engineering Creed
                  </span>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-slate-900 italic font-semibold leading-relaxed group-hover:text-slate-950 transition-colors">
                  "{vipInspiration.quote}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/60 flex items-center justify-between relative z-10">
                <div>
                  <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wide group-hover:text-[#F5A623] transition-colors">
                    Managing Director
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    VIP Construction • Tamil Nadu
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/80 border border-amber-200 px-2 py-0.5 rounded-full">
                    Site Driven
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#F5A623] group-hover:scale-150 transition-transform" />
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
