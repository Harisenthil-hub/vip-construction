import { vipInspiration } from "../data/aboutData";
import { Quote, HardHat, ShieldCheck, Ruler, Compass } from "lucide-react";

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
        <div className="max-w-2xl mb-8 lg:mb-10">
          <span className="span-heading">
            Brand Roots & Engineering Spirit
          </span>

          <h2 className="h2-heading">
            The "VIP" Spirit & On-Site Integrity
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
            {vipInspiration.description}
          </p>
        </div>

        {/* Layout Grid: Large Image, Story Pillars, Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Large Image (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full flex flex-col">
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#F5A623]/60 hover:-translate-y-1 transition-all duration-500 h-full min-h-[220px] sm:min-h-[280px] lg:min-h-[360px] cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=2070&auto=format&fit=crop"
                alt="VIP Construction Operations on site"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/90 group-hover:bg-white backdrop-blur-md border border-slate-200 shadow-xs group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-0.5">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wide group-hover:text-[#F5A623] transition-colors">
                  Ground-Level Field Operations
                </p>
                <p className="text-xs text-slate-600">
                  Managed directly by qualified civil engineers
                </p>
              </div>
            </div>
          </div>

          {/* Story & Quote Card (lg:col-span-7) */}
          <div className="lg:col-span-7 w-full flex flex-col justify-between space-y-4 sm:space-y-6">
            
            {/* 4 Story Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {vipInspiration.pillars.map((pillar, idx) => {
                const IconComp = pillarIcons[pillar.iconName] || HardHat;

                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F5A623]/50 transition-all duration-300 group cursor-pointer"
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

            {/* Quote Card - Complete Text Display */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F5A623]/50 transition-all duration-300 relative overflow-hidden flex-1 flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Quote className="w-4 h-4 text-[#F5A623] group-hover:text-[#0F172A] transition-colors" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                    Engineering Creed
                  </span>
                </div>

                <p className="text-xs sm:text-sm lg:text-base text-slate-800 italic font-medium leading-relaxed mb-4 group-hover:text-slate-900 transition-colors">
                  "{vipInspiration.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wide group-hover:text-[#F5A623] transition-colors">
                    Managing Director
                  </p>
                  <p className="text-xs text-slate-500">
                    VIP Construction
                  </p>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#F5A623] group-hover:scale-150 transition-transform" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
