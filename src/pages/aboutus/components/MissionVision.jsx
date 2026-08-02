import { motion } from "framer-motion";
import { missionVision } from "../data/aboutData";
import { Target, Eye, Check } from "lucide-react";

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="py-10 sm:py-14 lg:py-16 bg-slate-100 text-gray-600 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="max-w-2xl mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="span-heading">GUIDING PRINCIPLES</span>
          <h2 className="h2-heading">Our Mission & Vision</h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
            The core values that guide every project we build, from the ground
            up.
          </p>
        </motion.div>

        {/* 2-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Mission Card: bg-white */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F5A623]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  Core Purpose
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5 leading-tight group-hover:text-[#F5A623] transition-colors">
                {missionVision.mission.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {missionVision.mission.desc}
              </p>

              {/* All Bullet Points - Complete text */}
              <div className="space-y-1.5 pt-2.5 border-t border-slate-100">
                {missionVision.mission.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card: bg-[#F1F5F9] */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F5A623]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 bg-slate-100 border border-[#F5A623]/30 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  Future Horizon
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5 leading-tight group-hover:text-[#F5A623] transition-colors">
                {missionVision.vision.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {missionVision.vision.desc}
              </p>

              {/* All Bullet Points - Complete text */}
              <div className="space-y-1.5 pt-2.5 border-t border-slate-200/60">
                {missionVision.vision.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
