import {
  MapPin,
  ArrowRight,
  Maximize,
  IndianRupee,
  Calendar,
  Clock3,
} from "lucide-react";

const ProjectCard = ({ project, onView }) => {
  return (
    <div className="group cursor-pointer">

      {/* Image Card */}
      <div
        onClick={onView}
        className="relative overflow-hidden rounded-2xl shadow-lg"
      >
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-black via-bg-black/40 to-transparent" />

        {/* Status */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase text-white shadow-md transition-all duration-300
    ${project.status === "Completed"
              ? "bg-green-600"
              : project.status === "Ongoing"
                ? "bg-amber-500"
                : project.status === "Upcoming"
                  ? "bg-blue-600"
                  : "bg-gray-600"
            }
  `}
        >
          {project.status}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6">

          <div className="flex items-center gap-2 mt-2 text-secondary">
            <MapPin size={18} />
            <span className="text-white/90">
              {project.location}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onView();
            }}
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-secondary
              font-semibold
              opacity-0
              translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-300
            "
          >
            View Gallery

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-5">

        <div className="flex items-center justify-center gap-2 min-w-0">
          <Maximize size={18} className="text-secondary flex-shrink-0" />
          <span className="text-sm font-medium whitespace-nowrap">
            {project.area}
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 min-w-0">
          <IndianRupee size={18} className="text-secondary flex-shrink-0" />
          <span className="text-sm font-medium whitespace-nowrap">
            {project.price}
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 min-w-0">
          <Calendar size={18} className="text-secondary flex-shrink-0" />
          <span className="text-sm font-medium whitespace-nowrap">
            {project.year}
          </span>
        </div>
        
      </div>

    </div>
  );
};

export default ProjectCard;