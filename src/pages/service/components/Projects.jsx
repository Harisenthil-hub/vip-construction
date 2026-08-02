import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../../project/utils/ProjectData";
import ProjectCard from "../../project/component/ProjectCard";

export default function Projects() {
  const completedProjects = projects
    .filter((project) => project.status === "Completed")
    .slice(0, 4);

  return (
    <section id="projects" className="bg-slate-900 py-10 sm:py-14 lg:py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-amber-500/20 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
            Portfolio
          </span>
          <h2 className="h2-heading text-white mt-3 mb-2">
            Featured Projects
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            A look at our completed homes, shops, offices, and commercial buildings across Coimbatore, Udumalpet, Pollachi, Dharapuram, and Palani.
          </p>
        </div>

        {/* Cards Grid using Project Page Component */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {completedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Common View All Projects Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/project"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-500 px-8 py-3.5 font-bold text-slate-950 shadow-md hover:shadow-lg transition duration-300 hover:bg-amber-400 active:scale-95 text-sm sm:text-base"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
