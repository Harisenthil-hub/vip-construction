import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectButtons = () => {
  return (
    <div className="mt-12 flex flex-wrap gap-5">
      <Link
        to="/contact"
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
          inline-flex
          items-center
          gap-2
        "
      >
        Contact Us

        <ChevronRight
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};

export default ProjectButtons;