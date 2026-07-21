import { ArrowRight, ChevronRight } from "lucide-react";

const ProjectButtons = () => {
  return (
    <div className="mt-12 flex flex-wrap gap-5">
      <button className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30">
        View All Projects
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <button className="group border-2 border-white/50 hover:border-white text-white hover:bg-white hover:text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105">
        Contact Us
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ProjectButtons;