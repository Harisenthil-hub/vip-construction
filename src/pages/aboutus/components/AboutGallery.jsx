import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../data/aboutData";
import { Camera, ChevronDown } from "lucide-react";

export default function AboutGallery() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const extraMobileImages = galleryImages.slice(6);

  const handleToggleMobile = () => {
    if (showAllMobile) {
      const galleryElement = document.getElementById("gallery");
      if (galleryElement) {
        const headerOffset = 90;
        const elementPosition = galleryElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setShowAllMobile(!showAllMobile);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0F172A] via-[#0B132B] to-[#1E293B] text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Project & Site Gallery</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Engineering Precision in <span className="text-[#F5A623]">Action</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed mt-2">
            Explore our verified site execution, heavy equipment fleet, structural rebar audits, and completed residential & commercial projects across Tamil Nadu.
          </p>
        </div>

        {/* Primary Image Grid (First 6 on mobile, All on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {galleryImages.map((img, index) => {
            const isExtraMobile = index >= 6;

            return (
              <div
                key={`main-${img.id}`}
                className={`group relative bg-slate-900/80 border border-slate-700/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#F5A623]/70 hover:-translate-y-1 transition-all duration-500 aspect-[4/3] cursor-pointer ${
                  isExtraMobile ? 'hidden md:block' : 'block'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title || "VIP Construction Site Image"}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            );
          })}
        </div>

        {/* Animated Mobile Extra Images Grid with Smooth Exit Animation */}
        <AnimatePresence>
          {showAllMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-2 gap-2.5 mt-2.5 md:hidden overflow-hidden"
            >
              {extraMobileImages.map((img) => (
                <div
                  key={`extra-${img.id}`}
                  className="group relative bg-slate-900/80 border border-slate-700/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#F5A623]/70 aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.title || "VIP Construction Site Image"}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile View More / View Less Toggle Button */}
        {extraMobileImages.length > 0 && (
          <div className="mt-6 text-center md:hidden">
            <button
              onClick={handleToggleMobile}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-transparent border border-[#F5A623]/40 hover:border-[#F5A623] text-[#F5A623] hover:text-amber-300 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>{showAllMobile ? "Show Less" : "View More Photos"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllMobile ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
