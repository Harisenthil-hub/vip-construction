import { useState, useEffect } from "react";
import { HardHat, FolderOpen } from "lucide-react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../utils/ProjectData";

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Reset "Show More" when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Projects") return true;

    if (["Completed", "Ongoing", "Upcoming"].includes(activeFilter)) {
      return project.status === activeFilter;
    }

    return project.category === activeFilter;
  });

  // Show only first 3 projects on mobile
  const displayedProjects =
    isMobile && !showAll
      ? filteredProjects.slice(0, 3)
      : filteredProjects;

  return (
    <section className="pt-10 pb-20 bg-surface">
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
            Browse through our completed, ongoing and upcoming construction
            projects across residential, commercial, industrial and
            renovation sectors, reflecting our commitment to quality,
            innovation and customer satisfaction.
          </p>

        </div>

        {/* Filter */}
        <ProjectFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Projects */}
        {filteredProjects.length > 0 ? (

          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onView={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {/* Show More / Show Less Button (Only Mobile) */}
            {isMobile && filteredProjects.length > 3 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 rounded-lg bg-primary text-white font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </>

        ) : (

          <div className="mt-20 flex justify-center animate-in fade-in zoom-in-95 duration-500">

            <div className="flex flex-col items-center text-center">

              {/* Icon */}
              <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center shadow-lg">
                <HardHat
                  size={46}
                  className="text-secondary animate-pulse"
                />
              </div>

              {/* Heading */}
              <h3 className="mt-6 text-3xl font-bold text-primary">
                No Projects Available
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-xl text-text-dark-muted leading-8">
                We currently don't have any projects under the{" "}
                <span className="font-semibold text-primary">
                  "{activeFilter}"
                </span>{" "}
                category.
              </p>

              {/* Footer */}
              <div className="mt-5 flex items-center gap-2 text-secondary font-semibold">
                <FolderOpen size={20} />
                New projects will be added soon.
              </div>

            </div>

          </div>

        )}

        {/* Modal */}
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