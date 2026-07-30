import { ArrowRight, ChevronRight } from "lucide-react";

const ProjectButtons = () => {
  return (
    <div className="mt-12 flex flex-wrap gap-5">

      {/* Primary Button */}
      <button
        className="
          group
          bg-secondary
          hover:bg-gold-hover
          text-white
          px-10
          py-4
          rounded-full
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-xl
          flex
          items-center
          gap-2
        "
      >
        View All Projects

        <ArrowRight
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Secondary Button */}
      <button
        className="
          group
          border-2
          border-white/50
          hover:border-white
          text-white
          hover:bg-white
          hover:text-primary
          px-10
          py-4
          rounded-full
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          flex
          items-center
          gap-2
        "
      >
        Contact Us

        <ChevronRight
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

    </div>
  );
};

export default ProjectButtons;