import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Maximize, IndianRupee, Calendar, Clock3 } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-bg-black/50 opacity-100 visible backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center p-2 sm:p-4">

      <div className="relative bg-surface rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto overflow-x-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary transition-all duration-300 hover:bg-secondary hover:text-white"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="grid lg:grid-cols-3">

          {/* ================= IMAGE ================= */}
          <div className="relative lg:col-span-2 h-[220px] sm:h-[300px] md:h-[550px] overflow-hidden">

            {/* Blurred Background */}
            <img
              src={project.images[currentImage]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl brightness-75 opacity-70"
            />

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-white/10 z-[1]" />

            {/* Original Image */}
            <img
              src={project.images[currentImage]}
              alt={project.title}
              className="absolute inset-0 z-10 w-full h-full object-contain"
            />

            {/* Previous */}
            <button
              onClick={prevImage}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all hover:bg-secondary hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all hover:bg-secondary hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold">
              {currentImage + 1} / {project.images.length}
            </div>

          </div>

          {/* ================= DETAILS ================= */}
          <div className="p-4 sm:p-5 md:p-8 flex flex-col justify-center">

            <span className="span-heading">Project Gallery</span>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-primary mt-1 sm:mt-2">
              {project.title}
            </h2>

            <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-4 text-text-dark-muted text-xs sm:text-base">
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              <span>{project.location}</span>
            </div>

            <p className="mt-3 sm:mt-5 md:mt-8 text-text-dark-muted text-xs sm:text-base leading-relaxed sm:leading-8">
              Browse through the photos using the arrows to see the quality, materials, and finishing work completed on this project.
            </p>

            {/* Project Details */}
            <div className="mt-4 sm:mt-6 border-t border-gray-200 pt-4 sm:pt-5">

              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">

                <div className="flex flex-col items-center text-center">
                  <Maximize className="text-secondary w-4 h-4 sm:w-[18px] sm:h-[18px] mb-1 sm:mb-2" />
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-text-dark-muted">Area</p>
                  <p className="font-semibold text-primary text-[10px] md:text-sm">{project.area}</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <IndianRupee className="text-secondary w-4 h-4 sm:w-[18px] sm:h-[18px] mb-1 sm:mb-2" />
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-text-dark-muted">Price</p>
                  <p className="font-semibold text-primary text-[10px] sm:text-sm">{project.price}</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Calendar className="text-secondary w-4 h-4 sm:w-[18px] sm:h-[18px] mb-1 sm:mb-2" />
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-text-dark-muted">Year</p>
                  <p className="font-semibold text-primary text-[10px] sm:text-sm">{project.year}</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Clock3 className="text-secondary w-4 h-4 sm:w-[18px] sm:h-[18px] mb-1 sm:mb-2" />
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-text-dark-muted">Duration</p>
                  <p className="font-semibold text-primary text-[10px] sm:text-sm">{project.duration}</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectModal;