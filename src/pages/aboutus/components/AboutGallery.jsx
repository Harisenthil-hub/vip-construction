import { galleryImages } from "../data/aboutData";
import { Camera } from "lucide-react";

export default function AboutGallery() {
  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/25 text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Project & Site Gallery</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Engineering Precision in <span className="text-[#F5A623]">Action</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed mt-2">
            Explore our verified site execution, heavy equipment fleet, structural rebar audits, and completed residential & commercial projects across Tamil Nadu.
          </p>
        </div>

        {/* Pure Image Grid - 2 Columns Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="group relative bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-[#F5A623]/60 transition-all duration-500 aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.title || "VIP Construction Site Image"}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
