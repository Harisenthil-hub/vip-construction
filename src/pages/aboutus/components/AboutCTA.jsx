import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function AboutCTA() {
  return (
    <section id="contact-cta" className="py-10 sm:py-14 lg:py-16 bg-[#0F172A] text-white relative overflow-hidden">
      
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F5A623 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-900/80 border border-slate-800 hover:border-[#F5A623]/50 rounded-2xl p-5 sm:p-6 lg:p-8 text-left grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xl hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-500 relative overflow-hidden group">
          
          {/* Left Text */}
          <div className="lg:col-span-8">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2 block">
              Ready to Build Your Dream Project?
            </span>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2 group-hover:text-amber-100 transition-colors">
              Let's Engineer Your Vision into <span className="text-[#F5A623]">Rock-Solid Reality</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Partner with VIP Construction for corporate-grade engineering precision, transparent estimation, and dedicated on-site supervision.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              to="/contact"
              className="h-11 px-5 rounded-xl bg-[#F5A623] text-[#0F172A] font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-[#e0941f] hover:scale-105 hover:shadow-lg hover:shadow-[#F5A623]/25 active:scale-95 transition-all duration-300 w-full sm:w-auto justify-center group/btn"
            >
              <CalendarDays className="w-4 h-4 text-[#0F172A]" />
              <span>Schedule Site Meeting</span>
              <ArrowRight className="w-4 h-4 text-[#0F172A] group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
