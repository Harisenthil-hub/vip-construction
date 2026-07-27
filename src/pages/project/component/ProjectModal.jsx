import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="text-gray-500">{project.location}</p>
          </div>

          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title}-${index}`}
              className="w-full h-72 object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;