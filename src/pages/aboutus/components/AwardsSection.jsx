import { awardsList } from "../data/aboutData";
import { Trophy, Award, Medal } from "lucide-react";

const awardIconMap = {
  Trophy,
  Award,
  Medal,
};

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="py-10 sm:py-14 lg:py-16 bg-white text-primary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-xl mb-8 lg:mb-10">
          <span className="span-heading">Honors & Recognitions</span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-2">
            Awards of{" "}
            <span className="text-[#F5A623]">Engineering Excellence</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
            Recognized by civil engineering associations and state bodies for
            quality, safety, and honest construction practices.
          </p>
        </div>

        {/* 1 Row Grid for Awards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {awardsList.map((award) => {
            const IconComp = awardIconMap[award.iconName] || Trophy;

            return (
              <div
                key={award.id}
                className="bg-primary border border-slate-800 rounded-2xl p-3.5 sm:p-5 lg:p-6 shadow-md hover:border-[#F5A623]/60  hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#F5A623]/10 transition-all duration-300 flex flex-col justify-between gap-3 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A623] group-hover:border-[#F5A623] transition-all duration-300 group-hover:scale-110 shadow-sm">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623] group-hover:text-[#0F172A] transition-colors" />
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-all">
                      {award.category}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-[#F5A623] transition-colors mb-1 leading-tight">
                    {award.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    {award.organization} •{" "}
                    <span className="text-[#F5A623]">{award.badge}</span>
                  </p>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed group-hover:text-white transition-colors">
                    {award.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">
                    Recognized
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-white/10 text-slate-200 border border-white/10 group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-colors">
                    {award.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
