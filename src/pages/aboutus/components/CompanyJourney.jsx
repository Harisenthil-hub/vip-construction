import { companyJourney } from "../data/aboutData";
import { Flag, Building2, ShieldCheck, Milestone, CalendarDays, Check } from "lucide-react";

const iconMap = {
  Flag,
  Building2,
  ShieldCheck,
  Milestone,
  CalendarDays,
};

export default function CompanyJourney() {
  return (
    <section id="journey" className="py-10 sm:py-14 lg:py-16 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 lg:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-1.5 block">
            COMPANY ROADMAP • 2019 TO PRESENT
          </span>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] tracking-tight leading-tight mb-2">
            Building Our Legacy, Step by Step
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
            From founding VIP Construction in 2019 to growing into commercial projects and launching our digital client tracking platform.
          </p>
        </div>

        {/* Timeline Container with Vertical Line Design */}
        <div className="relative">
          
          {/* Vertical Connecting Line: Left on Mobile/Tablet, Center on Desktop */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 lg:-translate-x-1/2 rounded-full pointer-events-none" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {companyJourney.map((step, idx) => {
              const IconComponent = iconMap[step.iconName] || Flag;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.year}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Card - Offset on Mobile for Left Line, 50% width on Desktop */}
                  <div className="w-full lg:w-[calc(50%-28px)] pl-11 sm:pl-14 lg:pl-0 group">
                    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-[#F5A623] hover:border-r-slate-300 hover:border-b-slate-300 hover:border-l-slate-300 cursor-pointer">
                      
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="text-base sm:text-lg font-bold text-[#F5A623] font-mono tracking-tight group-hover:scale-105 transition-transform">
                            {step.year}
                          </span>
                        </div>

                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#0F172A] text-white group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-colors">
                          {step.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight mb-0.5 group-hover:text-amber-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">
                        {step.subtitle}
                      </p>

                      {/* Full Description - Complete Display */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                        {step.description}
                      </p>

                      {/* All Key Highlights */}
                      <div className="space-y-1.5 pt-2.5 border-t border-slate-100">
                        {step.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                            <Check className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{hl}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Icon Node Dot on Timeline Line */}
                  <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-4 lg:top-1/2 lg:-translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#0F172A] border-2 border-[#F5A623] text-[#F5A623] flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-125 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-all duration-300">
                    <IconComponent className="w-3.5 h-3.5 group-hover:text-[#0F172A] transition-colors" />
                  </div>

                  {/* Empty Spacer Column for Desktop Alternating Grid */}
                  <div className="hidden lg:block w-[calc(50%-28px)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
