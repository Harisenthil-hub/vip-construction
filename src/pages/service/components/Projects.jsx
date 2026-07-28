import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-10 sm:py-14 lg:py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-amber-500/20 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
            Portfolio
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
            Featured Projects
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Explore our successfully completed residential, commercial, industrial, and interior projects.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/45" />
                <span className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4 rounded-full bg-amber-500 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-bold text-slate-900 shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-base font-bold text-slate-900 line-clamp-1 sm:line-clamp-none">
                    {project.title}
                  </h3>
                  <div className="mt-1 sm:mt-2 flex items-center gap-1.5 text-slate-500 text-[9px] sm:text-xs">
                    <FaMapMarkerAlt className="text-amber-500 text-[10px] sm:text-xs" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                <Link to="/project" className="mt-3 sm:mt-5 flex items-center gap-1.5 text-[9px] sm:text-xs font-bold text-amber-600 transition hover:gap-3.5 self-start active:scale-95 duration-200">
                  View Project
                  <FaArrowRight className="text-[8px] sm:text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
