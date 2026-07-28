import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceGallery from "./ServiceGallery";

export default function ServiceContent({ service }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center py-2 sm:py-4">
      {/* Left Column: Details */}
      <div className="flex flex-col">
        {/* Tag */}
        <span className="inline-block self-start rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-[11px] font-bold tracking-wider uppercase border border-amber-200">
          {service.title} Construction
        </span>

        {/* Title */}
        <h3 className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
          {service.subtitle}
        </h3>

        {/* Description */}
        <p className="mt-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          {service.description}
        </p>

        {/* Features List */}
        <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" />
              <span className="text-slate-700 text-xs font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            to="/project"
            className="h-10 px-4 rounded-xl bg-[#F5A623] text-[#0F172A] font-bold text-xs inline-flex items-center gap-2 hover:bg-[#e0941f] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
          >
            <span>View Projects</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>
      </div>

      {/* Right Column: Gallery */}
      <ServiceGallery images={service.images} title={service.title} />
    </div>
  );
}
