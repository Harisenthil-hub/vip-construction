import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceGallery from "./ServiceGallery";

export default function ServiceContent({ service }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-6 sm:py-10">
      {/* Left Column: Details */}
      <div className="flex flex-col">
        {/* Tag */}
        <span className="inline-block self-start rounded-full bg-amber-100 text-amber-700 px-4 py-1.5 text-xs font-bold tracking-wider uppercase border border-amber-200">
          {service.title} Construction
        </span>

        {/* Title */}
        <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
          {service.subtitle}
        </h3>

        {/* Description */}
        <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
          {service.description}
        </p>

        {/* Features List */}
        <div className="grid sm:grid-cols-2 gap-3.5 mt-6">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-slate-700 text-sm font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            to="/project"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 transition duration-300 px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 text-sm"
          >
            View Projects
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>

      {/* Right Column: Gallery */}
      <ServiceGallery images={service.images} title={service.title} />
    </div>
  );
}
