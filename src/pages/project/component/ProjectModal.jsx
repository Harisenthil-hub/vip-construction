import { X, MapPin } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-bg-black/80 flex items-center justify-center p-5">
      <div className="bg-surface rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">

          <div>
            <span className="span-heading">
              Project Gallery
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-1">
              {project.title}
            </h2>

            <div className="flex items-center gap-2 mt-2 text-text-dark-muted">
              <MapPin size={18} className="text-secondary" />
              <span>{project.location}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
              w-11
              h-11
              rounded-full
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:bg-secondary
              hover:text-white
            "
          >
            <X size={22} />
          </button>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

          {project.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={image}
                alt={`${project.title}-${index}`}
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;