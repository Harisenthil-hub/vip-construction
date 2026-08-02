import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HardHat, FolderOpen } from "lucide-react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import { projects } from "../utils/ProjectData";

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const galleryRef = useRef(null);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Reset Show More when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  // Smooth scroll back to gallery
  useEffect(() => {
    if (location.state?.scrollToGallery && galleryRef.current) {
      setTimeout(() => {
        galleryRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Remove state after scrolling
        navigate(location.pathname, {
          replace: true,
          state: {},
        });
      }, 150);
    }
  }, [location, navigate]);

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
    <section
      ref={galleryRef}
      id="project-gallery"
      className="pt-8 pb-8 bg-surface"
    >
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
            A few of the houses, shops, and offices we've completed — more
            photos added as new sites finish.
          </p>

        </div>

        {/* Filters */}
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
                />
              ))}
            </div>

            {/* Show More */}
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

              <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center shadow-lg">
                <HardHat
                  size={46}
                  className="text-secondary animate-pulse"
                />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-primary">
                No Projects Available
              </h3>

              <p className="mt-4 max-w-xl text-text-dark-muted leading-8">
                We currently don't have any projects under the{" "}
                <span className="font-semibold text-primary">
                  "{activeFilter}"
                </span>{" "}
                category.
              </p>

              <div className="mt-5 flex items-center gap-2 text-secondary font-semibold">
                <FolderOpen size={20} />
                New projects will be added soon.
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectGallery;