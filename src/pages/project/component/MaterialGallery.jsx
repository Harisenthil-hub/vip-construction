import { useState } from "react";
import MaterialModal from "./MaterialModal";
import materialCategories from "../utils/MaterialData";

const MaterialGallery = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Materials We Use
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We partner with trusted brands to ensure superior quality,
            durability, and reliability in every construction project.
          </p>
        </div>

        {materialCategories.map((category) => (
          <div key={category.category} className="mb-16">

            {/* Category Name */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-14 bg-orange-500 rounded-full"></div>

              <h3 className="text-3xl font-bold text-gray-900">
                {category.category}
              </h3>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Logos */}
            <div className="flex flex-wrap items-center gap-8">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedMaterial(item)}
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col items-center">

                    {/* Circular Image */}
                    <div
                      className=" w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Material Name */}
                    <p className="mt-3 text-sm md:text-base font-semibold text-gray-800 text-center">
                      {item.name}
                    </p>

                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}

        {selectedMaterial && (
          <MaterialModal
            material={selectedMaterial}
            onClose={() => setSelectedMaterial(null)}
          />
        )}

      </div>
    </section>
  );
};

export default MaterialGallery;