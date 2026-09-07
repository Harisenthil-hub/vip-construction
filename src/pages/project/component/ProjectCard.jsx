import {
  MapPin,
  ArrowRight,
  Maximize,
  IndianRupee,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useSlideUp from "../../../hooks/useSlideUp";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  useSlideUp();

  return (
    <div className="slide-up group cursor-pointer">
      {/* Image Card */}
      <div
        onClick={() => navigate(`/project/${project.id}`)}
        className="relative overflow-hidden rounded-lg sm:rounded-2xl shadow-lg"
      >
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-black via-bg-black/40 to-transparent" />

        {/* Status */}
        <div
          className={`absolute top-3 left-2 sm:top-4 sm:left-4 px-2 py-1 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase text-white shadow-md transition-all duration-300
            ${
              project.status === "Completed"
                ? "bg-green-600"
                : project.status === "Ongoing"
                ? "bg-amber-500"
                : project.status === "Upcoming"
                ? "bg-blue-600"
                : "bg-gray-600"
            }`}
        >
          {project.status}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-6">
          <div className="flex items-center gap-1 sm:gap-2 text-secondary">
            <MapPin className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] shrink-0" />
            <span className="text-white/90 text-sm sm:text-base font-medium truncate">
              {project.location}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/project/${project.id}`);
            }}
            className="mt-1 sm:mt-5 inline-flex items-center gap-1 sm:gap-2 text-secondary font-semibold text-sm sm:text-base sm:opacity-0 sm:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            View Gallery
            <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Details */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2 sm:mt-5">
        <div className="flex items-center justify-center gap-1 ">
          <Maximize className="text-secondary flex-shrink-0 w-3 h-3 sm:w-[18px] sm:h-[18px]" />
          <span className="text-[11px] sm:text-sm font-medium whitespace-nowrap">
            {project.area}
          </span>
        </div>

        <div className="flex items-center justify-center gap-1">
          <IndianRupee className="text-secondary flex-shrink-0 w-3 h-3 sm:w-[18px] sm:h-[18px]" />
          <span className="text-[11px] sm:text-sm font-medium whitespace-nowrap">
            {project.price}
          </span>
        </div>

        <div className="flex items-center justify-center gap-1">
          <Calendar className="text-secondary flex-shrink-0 w-3 h-3 sm:w-[18px] sm:h-[18px]" />
          <span className="text-[11px] sm:text-sm font-medium whitespace-nowrap">
            {project.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
