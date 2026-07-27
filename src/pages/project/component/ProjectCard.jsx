import { MapPin, ArrowRight } from "lucide-react";

const ProjectCard = ({ project, onView }) => {
  return (
    <div
      onClick={onView}
      className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
    >
      {/* Image */}
      <img
        src={project.cover}
        alt={project.title}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Status */}
      <div
        className={`absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase text-white ${
          project.status === "Completed"
            ? "bg-orange-500"
            : "bg-green-500"
        }`}
      >
        {project.status}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h2 className="text-3xl font-bold text-white">
          {project.title}
        </h2>

        <div className="flex items-center gap-2 mt-2 text-orange-400">
          <MapPin size={18} />
          <span>{project.location}</span>
        </div>

        {/* Hover Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onView();
          }}
          className="
            mt-5
            flex
            items-center
            gap-2
            text-white
            opacity-0
            translate-y-4
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
          "
        >
          View Gallery
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;