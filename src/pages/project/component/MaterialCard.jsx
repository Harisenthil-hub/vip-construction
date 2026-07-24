import { ArrowRight, Package } from "lucide-react";

const MaterialCard = ({ material, onView }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">

      {/* Cover Image */}
      <img
        src={material.cover}
        alt={material.name}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6">

        <h2 className="text-3xl font-bold text-white">
          {material.name}
        </h2>

        <div className="flex items-center gap-2 mt-2 text-orange-400">
          <Package size={18} />
          <span>{material.brand}</span>
        </div>

       <button
    onClick={onView}
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
    View Material
    <ArrowRight size={18} />
</button>

      </div>
    </div>
  );
};

export default MaterialCard;