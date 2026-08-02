import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../images/hero.webp";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Award,
  Building2,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section
      id="home"
      className="relative py-10 sm:py-14 lg:py-16 bg-[#0F172A] text-white overflow-hidden"
    >
      {/* Background Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.13] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F5A623 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 items-center">
          {/* Left Column Text Content */}
          <motion.div 
            className="lg:col-span-7 w-full text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-slate-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
              <span>ABOUT VIP CONSTRUCTION • EST. 2019</span>
            </div>

            {/* Compact H1 Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Real Experience,<br className="hidden sm:inline" />
              <span className="text-[#F5A623]">Honest Building</span>
            </h1>

            {/* Compact Paragraph */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed max-w-xl mb-6">
              Our founder worked at L&T and TATA Construction before starting VIP Construction in 2019 — bringing that same discipline and precision to every home and building we construct across Tamil Nadu.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/project"
                className="h-11 px-5 rounded-md bg-secondary w-full md:w-auto text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:bg-[#e0941f] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#F5A623]/25 active:scale-[0.98] transition-all duration-300 group"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="hidden pt-4 border-t border-white/10 md:grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex items-center gap-2 p-1.5">
                <ShieldCheck className="text-secondary" size={30} />

                <div>
                  <p className="text-md font-bold text-white leading-none">
                    ISO Standard
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Certified QA</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5">
                <Building2 className="text-secondary" size={30} />

                <div>
                  <p className="text-md font-bold text-white leading-none">
                    100+ Sites
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Handed Over</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1.5">
                <Award className="text-secondary" size={30} />

                <div>
                  <p className="text-md font-bold text-white leading-none">
                    10-Year
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Warranty</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Image Card */}
          <motion.div 
            className="lg:col-span-5 w-full mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:border-[#F5A623]/50 hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-500 cursor-pointer">
              <img
                src={heroImage}
                alt="VIP Construction Services"
                className="w-full aspect-video sm:aspect-[4/3] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute bottom-1 md:bottom-3 left-3 right-3 p-1 md:p-3.5 rounded-xl bg-[#0F172A]/85 group-hover:bg-[#0F172A]/95 backdrop-blur-md border border-white/10 group-hover:border-[#F5A623]/40 flex items-center gap-3 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-white group-hover:text-[#F5A623] transition-colors">
                    VIP Construction Services
                  </p>
                  <p className="text-[10px] md:text-[11px] text-slate-300">
                    Turnkey & Commercial Execution
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
