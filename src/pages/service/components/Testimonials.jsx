import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold uppercase tracking-wider text-[11px] sm:text-xs border border-amber-200">
            Testimonials
          </span>
          <h2 className="h2-heading mt-3">
            What Our Clients Say
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            Customer satisfaction is at the heart of everything we do. Here's feedback from our clients.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-3.5 sm:p-5 md:p-6 hover:-translate-y-1.5 hover:shadow-lg transition duration-300 flex flex-col justify-between border border-slate-200/50"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-amber-500 text-lg sm:text-2xl mb-2 sm:mb-3">
                  <FaQuoteLeft />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-0.5 sm:gap-1 text-yellow-400 mb-2 sm:mb-3 text-[10px] sm:text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm leading-relaxed italic line-clamp-5 sm:line-clamp-none">
                  &#8220;{item.review}&#8221;
                </p>
              </div>

              {/* User Identity */}
              <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7 sm:w-10 sm:h-10 rounded-full object-cover border border-amber-500 shadow-sm flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-[10px] sm:text-xs md:text-sm text-slate-900 leading-snug truncate">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-[8px] sm:text-[10px] mt-0.5 font-medium truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
