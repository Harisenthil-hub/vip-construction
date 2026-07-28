import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { companyStats } from "../data/aboutData";
import { Building2, HardHat, Users, Handshake } from "lucide-react";

const lucideIconMap = {
  FaBuilding: Building2,
  FaHardHat: HardHat,
  FaUserGear: Users,
  FaHandshake: Handshake,
};

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayVal, setDisplayVal] = useState(0);

  const numericMatch = value.match(/[\d.]+/);
  const targetNum = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, "");
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const steps = 40;
    const increment = targetNum / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setDisplayVal(targetNum);
        clearInterval(timer);
      } else {
        setDisplayVal(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNum]);

  return (
    <span ref={ref}>
      {isDecimal ? displayVal.toFixed(1) : Math.floor(displayVal)}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  return (
    <section id="stats" className="py-12 lg:py-16 bg-[#0F172A] text-white border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Responsive Cards Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          {companyStats.map((stat, idx) => {
            const Icon = lucideIconMap[stat.icon] || Building2;

            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center group py-4 px-3 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.04] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer"
              >
                {/* Desktop vertical divider */}
                {idx < companyStats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 group-hover:opacity-0 transition-opacity" />
                )}

                {/* Lucide Icon (20-24px) */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#F5A623] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#F5A623]/20 group-hover:border-[#F5A623]/40 transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Counter Value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5A623] tracking-tight mb-1 font-mono group-hover:scale-105 transition-transform duration-300">
                  <AnimatedNumber value={stat.value} />
                </div>

                {/* Label */}
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors max-w-[180px]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
