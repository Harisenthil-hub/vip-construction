import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProjectModal from "./ProjectModal";
import { projects } from "../utils/ProjectData";
import { HardHat, ArrowLeft } from "lucide-react";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const project = projects.find(
        (item) => item.id === Number(id)
    );

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);

    if (!project) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-6">

                <div className="max-w-xl text-center">

                    {/* Icon */}
                    <div className="mx-auto w-28 h-28 rounded-full bg-secondary/10 flex items-center justify-center shadow-lg">
                        <HardHat size={54} className="text-secondary" />
                    </div>

                    {/* Error Code */}
                    <h1 className="mt-8 text-7xl md:text-8xl font-extrabold text-primary">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
                        Project Not Found
                    </h2>

                    {/* Description */}
                    <p className="mt-5 text-text-dark-muted leading-8">
                        Sorry, the project you are looking for doesn't exist or may have
                        been removed. Please return to our projects gallery and explore
                        our latest residential, commercial and industrial works.
                    </p>

                    {/* Button */}
                    <button
                        onClick={() => navigate("/project")}
                        className="mt-10 inline-flex items-center gap-3 bg-secondary hover:bg-gold-hover text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <ArrowLeft size={20} />
                        Back to Projects
                    </button>

                </div>

            </div>
        );
    }

    return (
        <ProjectModal
  project={project}
  onClose={() =>
    navigate("/project", {
      state: { scrollToGallery: true },
    })
  }
/>
    );
};

export default ProjectDetails;