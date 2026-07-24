import { useState } from "react";
import MaterialCard from "./MaterialCard";
import MaterialFilter from "./MaterialFilter";
import MaterialModal from "./MaterialModal";
import materials from "../utils/MaterialData";

const MaterialGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Materials");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const filteredMaterials = materials.filter((material) => {
    if (activeFilter === "All Materials") return true;
    return material.category === activeFilter;
  });

  return (
    <section className="py-20 bg-gray-50">
      {/* Same container as ProjectGallery */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Optional Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our Materials
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We use premium quality construction materials from trusted brands
            to ensure durability and excellence in every project.
          </p>
        </div>

        {/* Filter */}
        <MaterialFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {filteredMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onView={() => setSelectedMaterial(material)}
            />
          ))}
        </div>

        {/* Modal */}
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