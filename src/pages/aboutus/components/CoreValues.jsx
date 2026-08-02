import { coreValues } from "../data/aboutData";
import { ShieldCheck, Award, CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function CoreValues() {
  return (
    <section className="py-16 lg:py-24 bg-[#0F172A] text-white relative overflow-hidden">
      
      {/* Background Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F5A623 1px, transparent 1px)`,
          backgroundSize: `32px 32px`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#F5A623] mb-3">
            <span className="w-6 h-[2px] bg-[#F5A623]" />
            <span>OUR UNBENDING STANDARDS</span>
            <span className="w-6 h-[2px] bg-[#F5A623]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
            Engineering Values <span className="text-[#F5A623]">That Endure</span>
          </h2>
          <p className="mt-2.5 text-base text-slate-300 font-normal max-w-xl mx-auto leading-relaxed">
            Every column load, cement ratio, and client contract is governed by these four unyielding pillars.
          </p>
        </div>

        {/* 2 columns on mobile, 4 in 1 row on laptop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          
          {/* Card 1: Structural Safety */}
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group hover:border-[#F5A623]/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/30 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-all">
                  Pillar #01
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-[#F5A623] transition-colors">
                {coreValues[0].title}
              </h3>
              <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                {coreValues[0].desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F5A623]" />
                Earthquake & Load Resistance Certified
              </span>
              <span className="text-[#F5A623]">BIS Standard</span>
            </div>
          </div>

          {/* Card 2: Uncompromising Quality */}
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group hover:border-[#F5A623]/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-all">
                  Pillar #02
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#F5A623] transition-colors">
                {coreValues[1].title}
              </h3>
              <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                {coreValues[1].desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-bold text-[#F5A623]">
              Multi-Point QA/QC Inspection
            </div>
          </div>

          {/* Card 3: Transparent Trust */}
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group hover:border-[#F5A623]/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-all">
                  Pillar #03
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#F5A623] transition-colors">
                {coreValues[2].title}
              </h3>
              <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                {coreValues[2].desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-bold text-[#F5A623]">
              Open-Book Itemized Quotations
            </div>
          </div>

          {/* Card 4: Punctual Delivery */}
          <div className="bg-[#1E293B] border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group hover:border-[#F5A623]/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/30 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-all">
                  Pillar #04
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-[#F5A623] transition-colors">
                {coreValues[3].title}
              </h3>
              <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                {coreValues[3].desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300">
              <span>Strict Milestone Handover Schedules</span>
              <span className="text-[#F5A623]">100% On-Time Record</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
