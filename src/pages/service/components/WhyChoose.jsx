import { whyChoose } from "../data/whychoose";

export default function WhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] text-amber-700 border border-amber-200">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Our Quality Commitment
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed">
            We are dedicated to providing the highest standards of safety, quality, and customer service. Here is why clients choose VIP Construction.
          </p>
        </div>

        {/* Feature Grid - 2 cols on mobile, 4 cols on desktop */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 active:scale-95"
              >
                {/* Icon Container */}
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 text-xl sm:text-3xl transition duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="mt-4 sm:mt-6 text-sm sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[10px] sm:text-xs md:text-sm text-slate-500 leading-relaxed max-w-[220px]">
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
