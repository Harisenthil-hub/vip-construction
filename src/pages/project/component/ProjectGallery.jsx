import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../utils/ProjectData";

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Projects") return true;

    if (activeFilter === "Completed" || activeFilter === "Ongoing") {
      return project.status === activeFilter;
    }

    return project.category === activeFilter;
  });

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="home-container-header">

          <span className="span-heading">
            Our Portfolio
          </span>

          <h2 className="h2-heading">
            Explore Our Projects
          </h2>

          <div className="divider mb-6"></div>

          <p className="max-w-3xl mx-auto text-text-dark-muted leading-8">
            Browse through our completed and ongoing construction
            projects across residential, commercial, industrial,
            renovation, and interior sectors, reflecting our commitment
            to quality, innovation, and customer satisfaction.
          </p>

        </div>

        {/* Filter */}
        <ProjectFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onView={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};

export default ProjectGallery;