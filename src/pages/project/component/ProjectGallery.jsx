import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import { projects } from "../utils/projectData";

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Projects") return true;

    if (
      activeFilter === "Completed" ||
      activeFilter === "Ongoing"
    ) {
      return project.status === activeFilter;
    }

    return project.category === activeFilter;
  });

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Browse through our completed and ongoing construction
            projects across residential, commercial and industrial
            sectors.
          </p>
        </div>

        {/* Filter */}
        <ProjectFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;