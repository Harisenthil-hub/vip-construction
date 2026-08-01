import {
  MapPin,
  ArrowRight,
  Maximize,
  IndianRupee,
  Calendar,
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
          className={`absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase text-white ${
            project.status === "Completed"
              ? "bg-secondary"
              : "bg-green-600"
          }`}
        >
          {project.status}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6">

          <h2 className="text-2xl font-bold text-white">
            {project.title}
          </h2>

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

      {/* Bottom Details */}
      <div className="flex items-center justify-between mt-5 px-1">

        <div className="flex items-center gap-2 text-text-dark-muted">
          <Maximize
            size={18}
            className="text-secondary"
          />
          <span className="font-medium text-sm">
            {project.area}
          </span>
        </div>

        <div className="flex items-center gap-2 text-text-dark-muted">
          <IndianRupee
            size={18}
            className="text-secondary"
          />
          <span className="font-medium text-sm">
            {project.price}
          </span>
        </div>

        <div className="flex items-center gap-2 text-text-dark-muted">
          <Calendar
            size={18}
            className="text-secondary"
          />
          <span className="font-medium text-sm">
            {project.year}
          </span>
        </div>

      </div>

    </div>
  );
};

export default ProjectCard;