import { vipInspiration } from "../data/aboutData";
import { Quote, HardHat, ShieldCheck, Ruler, Compass } from "lucide-react";
import onsiteImg from "../images/Onsite.webp";

const pillarIcons = {
  HardHat,
  ShieldCheck,
  Ruler,
  Compass,
};

export default function VipInspiration() {
  return (
    <section id="vip-inspiration" className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag & Heading */}
        <div className="max-w-2xl mb-6 sm:mb-8 lg:mb-10">
          <span className="span-heading">
            {vipInspiration.badge}
          </span>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight mb-2">
            {vipInspiration.title}
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
            {vipInspiration.description}
          </p>
        </div>

        {/* Layout Grid: Large Founder Image (Left) + Story Cards & Quote Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Large Founder Image (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full flex flex-col">
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F5A623]/60 hover:-translate-y-1 transition-all duration-500 aspect-[4/3] sm:aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[380px] cursor-pointer">
              <img
                src={onsiteImg}
                alt="VIP Construction Founder and Managing Director"
                className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              
              {/* Photo Overlay Badge - Optimized for Mobile */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-3 sm:p-4 rounded-xl bg-white/95 group-hover:bg-white backdrop-blur-md border border-slate-200 shadow-xs group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide group-hover:text-[#F5A623] transition-colors">
                    Founder & Managing Director
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                  Project planning & direct leadership at VIP Construction
                </p>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid & Founder Quote Card (lg:col-span-7) */}
          <div className="lg:col-span-7 w-full flex flex-col justify-between space-y-4 sm:space-y-6">
            
            {/* 4 Feature Cards Grid - 2 Columns on Mobile & Desktop */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {vipInspiration.pillars.map((pillar, idx) => {
                const IconComp = pillarIcons[pillar.iconName] || HardHat;
                const isHighlighted = pillar.highlighted;

                return (
                  <div 
                    key={idx} 
                    className={`bg-white border rounded-2xl p-2.5 sm:p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                      isHighlighted
                        ? "border-[#F5A623] border-t-4 border-t-[#F5A623]"
                        : "border-slate-200 hover:border-[#F5A623]/50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                          <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5A623] group-hover:text-[#0F172A] transition-colors" />
                        </div>
                      </div>

                      <h3 className="text-[11px] sm:text-sm font-bold text-slate-900 mb-1 leading-tight group-hover:text-amber-600 transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Founder Quote Card - Mobile Wrapping Optimization */}
            <div className="bg-gradient-to-br from-white via-slate-50/50 to-amber-500/5 border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F5A623]/60 transition-all duration-300 relative overflow-hidden flex-1 flex flex-col justify-between gap-3.5 sm:gap-4 group cursor-pointer">
              
              {/* Background Watermark Icon */}
              <Quote className="absolute -right-3 -bottom-3 w-28 h-28 sm:w-32 sm:h-32 text-amber-500/5 group-hover:text-amber-500/10 transition-colors pointer-events-none select-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5A623] group-hover:text-[#0F172A] transition-colors" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-700/80">
                      Founder Statement
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-900 text-white border border-slate-800 shadow-xs">
                    Engineering Creed
                  </span>
                </div>

                <p className="text-xs sm:text-base lg:text-lg text-slate-900 italic font-semibold leading-relaxed group-hover:text-slate-950 transition-colors">
                  "{vipInspiration.quote}"
                </p>
              </div>

              {/* Quote Footer */}
              <div className="pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 relative z-10">
                <div>
                  <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wide group-hover:text-[#F5A623] transition-colors">
                    Managing Director
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    VIP Construction • Tamil Nadu
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-amber-700 bg-amber-100/80 border border-amber-200 px-2 py-0.5 rounded-full">
                    Site Driven
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#F5A623] group-hover:scale-150 transition-transform" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
