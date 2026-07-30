import { X } from "lucide-react";

const MaterialModal = ({ material, onClose }) => {
  if (!material) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5">
      <div className="bg-surface rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">

          <div>
            <span className="span-heading">
              Material Details
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {material.name}
            </h2>

            <p className="mt-1 text-text-dark-muted">
              {material.brand}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white"
          >
            <X size={22} />
          </button>

        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

          {material.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={image}
                alt={`${material.name}-${index}`}
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default MaterialModal;