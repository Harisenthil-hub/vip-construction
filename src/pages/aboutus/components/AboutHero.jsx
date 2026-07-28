import { Link as RouterLink } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, Award, Building2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[#0F172A] text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F5A623 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 w-full text-left">
            {/* Small Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-slate-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
              <span>About VIP Construction • Est. 2019</span>
            </div>

            {/* Compact H1 Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Engineering Precision, <br className="hidden sm:inline" />
              <span className="text-[#F5A623]">Building Legacy</span>
            </h1>

            {/* Compact Paragraph */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed max-w-xl mb-6">
              From Tier-1 corporate engineering foundations at L&T and TATA Construction to founding VIP Construction in 2019 — we merge field integrity, structural precision, and modern architecture into enduring structures.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <RouterLink
                to="/project"
                className="h-11 px-5 rounded-xl bg-[#F5A623] text-[#0F172A] font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-[#e0941f] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#F5A623]/25 active:scale-[0.98] transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-[#0F172A]" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-[#0F172A] group-hover:translate-x-1 transition-transform" />
              </RouterLink>
            </div>

            {/* Key Feature Highlights */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 text-[#F5A623] group-hover:bg-[#F5A623]/20 group-hover:border-[#F5A623]/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none group-hover:text-[#F5A623] transition-colors">ISO Standard</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Certified QA</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 text-[#F5A623] group-hover:bg-[#F5A623]/20 group-hover:border-[#F5A623]/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Building2 className="w-3.5 h-3.5 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none group-hover:text-[#F5A623] transition-colors">150+ Sites</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Handed Over</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 text-[#F5A623] group-hover:bg-[#F5A623]/20 group-hover:border-[#F5A623]/40 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Award className="w-3.5 h-3.5 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none group-hover:text-[#F5A623] transition-colors">7+ Years</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Excellence</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-5 w-full">
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:border-[#F5A623]/50 hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-500 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="VIP Construction Premium Architecture"
                className="w-full aspect-video sm:aspect-[4/3] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0F172A]/85 group-hover:bg-[#0F172A]/95 backdrop-blur-md border border-white/10 group-hover:border-[#F5A623]/40 flex items-center gap-3 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white group-hover:text-[#F5A623] transition-colors">VIP Construction</p>
                  <p className="text-[10px] text-slate-300">Corporate Standard Turnkey Execution</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
