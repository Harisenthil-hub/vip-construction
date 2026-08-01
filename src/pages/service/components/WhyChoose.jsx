import { whyChoose } from "../data/whychoose";

export default function WhyChoose() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 border border-amber-200">
            Why Choose Us
          </span>
          <h2 className="h2-heading mt-3 mb-2">
            Our Quality Commitment
          </h2>
          <p className="mt-2.5 text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
            Dedicated to providing the highest standards of structural safety, transparent estimations, and field supervision.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 transition-all duration-300 hover:bg-white hover:border-[#F5A623]/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 text-lg sm:text-2xl transition duration-300 group-hover:bg-[#F5A623] group-hover:text-slate-950">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="mt-3 sm:mt-4 text-xs sm:text-base font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[11px] md:text-sm text-slate-600 leading-relaxed max-w-[220px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
